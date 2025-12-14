import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "お問い合わせ | Kinjo_Tatsuro Portfolio",
  description:
    "プロジェクトのご相談やお仕事のご依頼など、お気軽にお問い合わせください。沖縄を拠点にリモート開発対応可能。",
  openGraph: {
    title: "お問い合わせ | Kinjo_Tatsuro Portfolio",
    description: "お仕事のご依頼・ご相談はこちらから。リモート開発対応可能。",
    url: "https://bskportfolio.vercel.app/contact",
    images: [
      {
        url: "https://bskportfolio.vercel.app/api/og?title=%E3%81%8A%E5%95%8F%E3%81%84%E5%90%88%E3%82%8F%E3%81%9B&subtitle=%E3%81%8A%E4%BB%95%E4%BA%8B%E3%81%AE%E3%81%94%E4%BE%9D%E9%A0%BC%E3%83%BB%E3%81%94%E7%9B%B8%E8%AB%87",
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    title: "お問い合わせ | Kinjo_Tatsuro Portfolio",
    description: "お仕事のご依頼・ご相談はこちらから",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
