import { NextRequest, NextResponse } from 'next/server';

interface MetaImageResponse {
  url: string;
  ogImage?: string;
  twitterImage?: string;
  favicon?: string;
}

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const targetUrl = searchParams.get('url');

  console.log('Screenshot API called with URL:', targetUrl);

  if (!targetUrl) {
    return NextResponse.json({ error: 'URL parameter is required' }, { status: 400 });
  }

  try {
    // URLの検証
    new URL(targetUrl);
  } catch {
    return NextResponse.json({ error: 'Invalid URL' }, { status: 400 });
  }

  try {
    // AbortControllerでタイムアウトを実装
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 10000);

    const response = await fetch(targetUrl, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36',
      },
      signal: controller.signal,
    });

    clearTimeout(timeoutId);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const html = await response.text();
    
    console.log('HTML fetched, length:', html.length);
    
    // OGP画像の抽出
    const ogImageMatch = html.match(/<meta[^>]*property=["']og:image["'][^>]*content=["']([^"']+)["'][^>]*>/i);
    const twitterImageMatch = html.match(/<meta[^>]*name=["']twitter:image["'][^>]*content=["']([^"']+)["'][^>]*>/i);
    const faviconMatch = html.match(/<link[^>]*rel=["']icon["'][^>]*href=["']([^"']+)["'][^>]*>/i);

    console.log('OGP match:', ogImageMatch);
    console.log('Twitter match:', twitterImageMatch);

    const result: MetaImageResponse = {
      url: targetUrl,
    };

    if (ogImageMatch) {
      result.ogImage = ogImageMatch[1];
    }

    if (twitterImageMatch) {
      result.twitterImage = twitterImageMatch[1];
    }

    if (faviconMatch) {
      result.favicon = faviconMatch[1];
    }

    console.log('Result:', result);
    
    // OGP画像が見つからない場合、スクリーンショットAPIサービスを試す
    if (!result.ogImage && !result.twitterImage) {
      console.log('No OGP image found, trying screenshot services...');
      
      // 実際に動作するスクリーンショットサービス
      const screenshotServices = [
        // 無料のスクリーンショットサービス
        `https://api.screenshotmachine.com?key=demo&url=${encodeURIComponent(targetUrl)}&dimension=800x600&format=png`,
        // 代替サービス
        `https://htmlcsstoimage.com/demo.png?url=${encodeURIComponent(targetUrl)}&width=800&height=600`
      ];
      
      for (const screenshotUrl of screenshotServices) {
        try {
          console.log('Trying screenshot service:', screenshotUrl);
          const screenshotResponse = await fetch(screenshotUrl, { 
            method: 'HEAD',
            signal: controller.signal 
          });
          
          if (screenshotResponse.ok) {
            result.ogImage = screenshotUrl;
            console.log('Screenshot service success:', screenshotUrl);
            break; // 成功したら他のサービスを試さない
          }
        } catch (screenshotError) {
          console.log('Screenshot service failed:', screenshotError);
          continue; // 次のサービスを試す
        }
      }
    }
    
    return NextResponse.json(result);
  } catch (error) {
    console.error('Error fetching meta images:', error);
    return NextResponse.json(
      { error: 'Failed to fetch meta images' },
      { status: 500 }
    );
  }
}
