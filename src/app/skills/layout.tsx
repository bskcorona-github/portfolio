import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "スキル・技術スタック | Kinjo_Tatsuro Portfolio",
  description:
    "習得した技術スタックとプログラミング言語の一覧。TypeScript、React、Next.js、Go、Python、AWS、Dockerなど70以上の技術に対応。",
  openGraph: {
    title: "スキル・技術スタック | Kinjo_Tatsuro Portfolio",
    description:
      "フルスタックエンジニアの技術スタック。70以上のテクノロジーに対応。",
    url: "https://bskportfolio.vercel.app/skills",
    images: [
      {
        url: "https://bskportfolio.vercel.app/api/og?title=%E3%82%B9%E3%82%AD%E3%83%AB%E3%83%BB%E6%8A%80%E8%A1%93%E3%82%B9%E3%82%BF%E3%83%83%E3%82%AF&subtitle=70%2B%20Technologies",
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    title: "スキル・技術スタック | Kinjo_Tatsuro Portfolio",
    description: "フルスタックエンジニアの技術スタック",
  },
};

export default function SkillsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
