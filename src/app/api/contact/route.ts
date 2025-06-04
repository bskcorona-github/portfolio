import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: NextRequest) {
  try {
    const { name, email, subject, message } = await request.json();

    // 入力検証
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "必須項目が入力されていません" },
        { status: 400 }
      );
    }

    // Nodemailerのトランスポーター設定
    const transporter = nodemailer.createTransport({
      host: process.env.MAIL_HOST,
      port: parseInt(process.env.MAIL_PORT || "587"),
      secure: false, // 587ポートの場合はfalse
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS,
      },
    });

    // 受信者への通知メール
    const mailOptions = {
      from: process.env.MAIL_FROM,
      to: "kanemasa.tatsuro@gmail.com",
      subject: `【ポートフォリオお問い合わせ】${subject || "お問い合わせ"}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333; border-bottom: 2px solid #06b6d4; padding-bottom: 10px;">
            ポートフォリオからのお問い合わせ
          </h2>
          
          <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #06b6d4; margin-top: 0;">送信者情報</h3>
            <p><strong>お名前:</strong> ${name}</p>
            <p><strong>メールアドレス:</strong> ${email}</p>
            <p><strong>件名:</strong> ${subject || "お問い合わせ"}</p>
          </div>
          
          <div style="background-color: #ffffff; padding: 20px; border: 1px solid #e9ecef; border-radius: 8px;">
            <h3 style="color: #06b6d4; margin-top: 0;">メッセージ内容</h3>
            <div style="white-space: pre-wrap; line-height: 1.6;">${message}</div>
          </div>
          
          <div style="margin-top: 20px; padding: 15px; background-color: #e3f2fd; border-radius: 8px;">
            <p style="margin: 0; color: #1976d2; font-size: 14px;">
              このメールはポートフォリオサイト (${
                request.headers.get("origin") || "localhost"
              }) からの自動送信です。
            </p>
          </div>
        </div>
      `,
    };

    // 送信者への自動返信メール
    const autoReplyOptions = {
      from: process.env.MAIL_FROM,
      to: email,
      subject: "【自動返信】お問い合わせありがとうございます - Kinjo_Tatsuro",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333; border-bottom: 2px solid #06b6d4; padding-bottom: 10px;">
            お問い合わせありがとうございます
          </h2>
          
          <p>${name} 様</p>
          
          <p>この度は私のポートフォリオサイトからお問い合わせいただき、誠にありがとうございます。</p>
          
          <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #06b6d4; margin-top: 0;">受信内容の確認</h3>
            <p><strong>件名:</strong> ${subject || "お問い合わせ"}</p>
            <p><strong>送信日時:</strong> ${new Date().toLocaleString(
              "ja-JP"
            )}</p>
          </div>
          
          <p>通常、営業日（月〜金曜日）であれば24時間以内にご返信いたします。<br>
          土日祝日の場合は、翌営業日以降のご返信となりますのでご了承ください。</p>
          
          <div style="margin-top: 30px; padding: 20px; background-color: #e3f2fd; border-radius: 8px;">
            <h4 style="color: #1976d2; margin-top: 0;">連絡先</h4>
            <p style="margin: 5px 0;"><strong>Email:</strong> kanemasa.tatsuro@gmail.com</p>
            <p style="margin: 5px 0;"><strong>所在地:</strong> 沖縄県那覇市</p>
            <p style="margin: 5px 0;"><strong>営業時間:</strong> 月〜金曜日（土日休業）</p>
          </div>
          
          <p style="margin-top: 20px;">
            今後ともよろしくお願いいたします。<br><br>
            兼正達朗
          </p>
        </div>
      `,
    };

    // メール送信
    await transporter.sendMail(mailOptions);
    await transporter.sendMail(autoReplyOptions);

    return NextResponse.json({
      success: true,
      message: "メールが正常に送信されました",
    });
  } catch (error) {
    console.error("メール送信エラー:", error);
    return NextResponse.json(
      { error: "メール送信に失敗しました" },
      { status: 500 }
    );
  }
}
