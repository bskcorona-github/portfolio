import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "プロジェクト一覧 | Kinjo_Tatsuro Portfolio",
  description:
    "これまでに開発したWebアプリケーション、ランディングページ、およびオープンソースプロジェクトの一覧です。React、Next.js、TypeScriptを使用した実績を紹介。",
  openGraph: {
    title: "プロジェクト一覧 | Kinjo_Tatsuro Portfolio",
    description:
      "フルスタックエンジニアの開発実績一覧。Webアプリ、LP、オープンソースプロジェクトを紹介。",
    url: "https://bskportfolio.vercel.app/projects",
    images: [
      {
        url: "https://bskportfolio.vercel.app/api/og?title=%E3%83%97%E3%83%AD%E3%82%B8%E3%82%A7%E3%82%AF%E3%83%88%E4%B8%80%E8%A6%A7&subtitle=Web%E3%82%A2%E3%83%97%E3%83%AA%E3%83%BB%E3%83%A9%E3%83%B3%E3%83%87%E3%82%A3%E3%83%B3%E3%82%B0%E3%83%9A%E3%83%BC%E3%82%B8",
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    title: "プロジェクト一覧 | Kinjo_Tatsuro Portfolio",
    description: "フルスタックエンジニアの開発実績一覧",
  },
};

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
