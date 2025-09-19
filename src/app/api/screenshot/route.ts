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
    
    // OGP画像の抽出
    const ogImageMatch = html.match(/<meta[^>]*property=["']og:image["'][^>]*content=["']([^"']+)["'][^>]*>/i);
    const twitterImageMatch = html.match(/<meta[^>]*name=["']twitter:image["'][^>]*content=["']([^"']+)["'][^>]*>/i);
    const faviconMatch = html.match(/<link[^>]*rel=["']icon["'][^>]*href=["']([^"']+)["'][^>]*>/i);

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

    return NextResponse.json(result);
  } catch (error) {
    console.error('Error fetching meta images:', error);
    return NextResponse.json(
      { error: 'Failed to fetch meta images' },
      { status: 500 }
    );
  }
}
