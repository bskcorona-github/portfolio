import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "職務経歴 | Kinjo_Tatsuro Portfolio",
  description:
    "これまでの職務経歴とプロジェクト実績。銀行系Webアプリ開発、CPaaS開発、ECサイト改修など多様なプロジェクトに従事。",
  openGraph: {
    title: "職務経歴 | Kinjo_Tatsuro Portfolio",
    description:
      "フルスタックエンジニアの職務経歴。金融・通信・EC分野での開発実績。",
    url: "https://bskportfolio.vercel.app/experience",
    images: [
      {
        url: "https://bskportfolio.vercel.app/api/og?title=%E8%81%B7%E5%8B%99%E7%B5%8C%E6%AD%B4&subtitle=%E9%87%91%E8%9E%8D%E3%83%BB%E9%80%9A%E4%BF%A1%E3%83%BBEC%E5%88%86%E9%87%8E%E3%81%A7%E3%81%AE%E9%96%8B%E7%99%BA%E5%AE%9F%E7%B8%BE",
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    title: "職務経歴 | Kinjo_Tatsuro Portfolio",
    description: "フルスタックエンジニアの職務経歴",
  },
};

export default function ExperienceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
