import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Portfolio - Full Stack Developer | WebアプリケーションとUI/UX開発",
  description:
    "フルスタックエンジニアのポートフォリオサイト。React、Next.js、TypeScript、Go言語を使用したWebアプリケーション開発の実績を紹介。UI/UXデザインからバックエンドAPIまで幅広い技術で革新的なソリューションを提供します。",
  keywords: [
    "ポートフォリオ",
    "フルスタックエンジニア",
    "React",
    "Next.js",
    "TypeScript",
    "Go",
    "JavaScript",
    "Web開発",
    "UI/UX",
    "レスポンシブデザイン",
    "API開発",
  ],
  authors: [{ name: "Full Stack Developer" }],
  creator: "Full Stack Developer",
  publisher: "Portfolio",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://bskportfolio.vercel.app"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Portfolio - Full Stack Developer",
    description:
      "フルスタックエンジニアのポートフォリオ。React、Next.js、TypeScript、Go言語を使用したWebアプリケーション開発の実績を紹介",
    url: "https://bskportfolio.vercel.app",
    siteName: "Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Portfolio - Full Stack Developer",
      },
    ],
    locale: "ja_JP",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Portfolio - Full Stack Developer",
    description:
      "フルスタックエンジニアのポートフォリオ。React、Next.js、TypeScript、Go言語を使用したWebアプリケーション開発の実績を紹介",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Full Stack Developer",
              description:
                "フルスタックエンジニア・Webアプリケーション開発者",
              url: "https://bskportfolio.vercel.app",
              jobTitle: "Full Stack Developer",
              worksFor: {
                "@type": "Organization",
                name: "Various Companies",
              },
              knowsAbout: [
                "React",
                "Next.js",
                "TypeScript",
                "JavaScript",
                "Go",
                "Python",
                "Web Development",
                "UI/UX Design",
              ],
              sameAs: ["https://github.com/bskcorona-github"],
            }),
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
