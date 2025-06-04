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
  title: "Magic MCP - Model Context Protocol Platform | AI統合プラットフォーム",
  description:
    "Magic MCPは、AIシステムとデータソースを接続するModel Context Protocolの実装です。開発者向けの統合プラットフォームで、簡単にAIツールとデータを連携できます。",
  keywords: [
    "Model Context Protocol",
    "MCP",
    "AI integration",
    "Anthropic",
    "Claude",
    "API",
    "AI platform",
    "Machine Learning",
    "Developer tools",
    "Data integration",
  ],
  authors: [{ name: "Magic MCP Team" }],
  creator: "Magic MCP",
  publisher: "Magic MCP",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://magic-mcp.vercel.app"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Magic MCP - Model Context Protocol Platform",
    description:
      "AIシステムとデータソースを接続するModel Context Protocolの実装プラットフォーム",
    url: "https://magic-mcp.vercel.app",
    siteName: "Magic MCP",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Magic MCP - Model Context Protocol Platform",
      },
    ],
    locale: "ja_JP",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Magic MCP - Model Context Protocol Platform",
    description:
      "AIシステムとデータソースを接続するModel Context Protocolの実装プラットフォーム",
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
              "@type": "SoftwareApplication",
              name: "Magic MCP",
              description: "Model Context Protocolの実装プラットフォーム",
              url: "https://magic-mcp.vercel.app",
              applicationCategory: "DeveloperApplication",
              operatingSystem: "Web",
              offers: {
                "@type": "Offer",
                price: "0",
                priceCurrency: "USD",
              },
              creator: {
                "@type": "Organization",
                name: "Magic MCP Team",
              },
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
