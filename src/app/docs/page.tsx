"use client";

import React from "react";
import { Navigation } from "@/components/ui/navigation";
import MatrixRain from "@/components/ui/matrix-code";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import {
  Book,
  Code,
  Settings,
  Play,
  FileText,
  ExternalLink,
  GitBranch,
} from "lucide-react";
import Link from "next/link";

const DocsHero = () => {
  return (
    <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 h-screen flex flex-col justify-center pt-24">
      {/* メインコンテンツ */}
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="text-center"
      >
        <h1 className="text-5xl md:text-7xl font-light text-white mb-6">
          ドキュメント
        </h1>
        <p className="text-gray-400 text-xl max-w-3xl mx-auto mb-12">
          Magic MCPの技術仕様、APIリファレンス、チュートリアルを
          <br />
          包括的にご覧いただけます。
        </p>

        {/* クイックナビゲーション */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto"
        >
          {[
            { icon: Play, title: "クイックスタート", value: "今すぐ始める" },
            { icon: Code, title: "APIリファレンス", value: "技術仕様" },
            { icon: Book, title: "ガイド", value: "詳細説明" },
          ].map((doc) => (
            <Card
              key={doc.title}
              className="backdrop-blur-xl bg-white/5 border-white/10"
            >
              <CardContent className="p-6 text-center">
                <doc.icon className="size-8 text-purple-400 mx-auto mb-3" />
                <div className="text-white font-medium mb-1">{doc.title}</div>
                <div className="text-gray-400 text-sm">{doc.value}</div>
              </CardContent>
            </Card>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

const DocumentationSections = () => {
  const sections = [
    {
      title: "はじめに",
      icon: Play,
      color: "green",
      items: [
        { title: "Magic MCPとは", description: "プロジェクトの概要と目的" },
        { title: "クイックスタート", description: "最初の5分で始めるガイド" },
        { title: "システム要件", description: "動作環境と必要スペック" },
        { title: "インストール", description: "セットアップ手順" },
      ],
    },
    {
      title: "技術仕様",
      icon: Settings,
      color: "blue",
      items: [
        { title: "アーキテクチャ", description: "3層構造の詳細設計" },
        { title: "WebGLシェーダー", description: "カスタムエフェクトの作成" },
        { title: "マトリックス背景", description: "アニメーション制御" },
      ],
    },
    {
      title: "API リファレンス",
      icon: Code,
      color: "purple",
      items: [
        {
          title: "コンポーネントAPI",
          description: "React コンポーネントの使用方法",
        },
        { title: "MCPプロトコル", description: "AI統合インターフェース" },
        { title: "カスタマイズAPI", description: "テーマと設定の変更" },
        {
          title: "イベントハンドリング",
          description: "インタラクションの制御",
        },
      ],
    },
    {
      title: "開発ガイド",
      icon: GitBranch,
      color: "orange",
      items: [
        { title: "開発環境セットアップ", description: "Next.js開発環境の構築" },
        { title: "コンポーネント開発", description: "新機能の追加方法" },
        { title: "パフォーマンス最適化", description: "レンダリング最適化" },
        { title: "デプロイメント", description: "Vercel本番環境への配布" },
      ],
    },
  ];

  const colorClasses = {
    green: {
      bg: "bg-green-500/20",
      border: "border-green-500/30",
      text: "text-green-400",
    },
    blue: {
      bg: "bg-blue-500/20",
      border: "border-blue-500/30",
      text: "text-blue-400",
    },
    purple: {
      bg: "bg-purple-500/20",
      border: "border-purple-500/30",
      text: "text-purple-400",
    },
    orange: {
      bg: "bg-orange-500/20",
      border: "border-orange-500/30",
      text: "text-orange-400",
    },
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-light text-white mb-6">
            ドキュメント一覧
          </h2>
          <p className="text-gray-400 text-lg">
            Magic MCPの全機能を理解するための包括的ガイド
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {sections.map((section, sectionIndex) => (
            <motion.div
              key={section.title}
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: sectionIndex * 0.1 }}
            >
              <Card className="backdrop-blur-xl bg-white/5 border-white/10 h-full">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div
                      className={`p-2 rounded-lg ${
                        colorClasses[section.color as keyof typeof colorClasses]
                          .bg
                      } backdrop-blur-sm border ${
                        colorClasses[section.color as keyof typeof colorClasses]
                          .border
                      }`}
                    >
                      <section.icon
                        className={`size-5 ${
                          colorClasses[
                            section.color as keyof typeof colorClasses
                          ].text
                        }`}
                      />
                    </div>
                    <h3 className="text-xl font-semibold text-white">
                      {section.title}
                    </h3>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {section.items.map((item) => (
                      <div key={item.title} className="group cursor-pointer">
                        <div className="flex items-start gap-3 p-3 rounded-lg hover:bg-white/5 transition-colors">
                          <FileText className="size-4 text-gray-400 mt-0.5 flex-shrink-0" />
                          <div>
                            <h4 className="text-white font-medium group-hover:text-blue-400 transition-colors">
                              {item.title}
                            </h4>
                            <p className="text-gray-400 text-sm mt-1">
                              {item.description}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const CodeExample = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-light text-white mb-6">
            コードサンプル
          </h2>
          <p className="text-gray-400 text-lg">
            Magic MCPをプロジェクトに統合する基本的な例
          </p>
        </motion.div>

        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <Card className="backdrop-blur-xl bg-white/5 border-white/10">
            <CardHeader>
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-semibold text-white">
                  基本的な使用方法
                </h3>
                <div className="flex items-center gap-2 text-gray-400 text-sm">
                  <Code className="size-4" />
                  TypeScript
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="bg-black/30 rounded-lg p-4 font-mono text-sm">
                <pre className="text-gray-300 overflow-x-auto">
                  {`import { HeroSection } from "@/components/ui/hero-odyssey";
import MatrixRain from "@/components/ui/matrix-code";

export default function MyPage() {
  return (
    <div className="relative bg-black overflow-hidden">
      {/* Matrix背景 */}
      <div className="fixed inset-0 z-0 opacity-50">
        <MatrixRain
          fontSize={16}
          color="#00ff00"
          characters="01"
          speed={0.8}
        />
      </div>

      {/* コンテンツ */}
      <div className="relative z-20">
        <HeroSection />
      </div>
    </div>
  );
}`}
                </pre>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* 外部リンク */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-16 text-center"
        >
          <Card className="backdrop-blur-xl bg-white/5 border-white/10">
            <CardContent className="p-8">
              <h3 className="text-2xl font-light text-white mb-4">
                さらに詳しく
              </h3>
              <p className="text-gray-400 mb-6">
                完全なドキュメントとソースコードはGitHubリポジトリでご確認いただけます。
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="https://github.com/bskcorona-github/magic-website"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-purple-500/20 hover:bg-purple-500/30 text-purple-400 border border-purple-500/40 rounded-lg font-medium transition-colors"
                >
                  <GitBranch className="size-4" />
                  GitHubで見る
                  <ExternalLink className="size-3" />
                </a>
                <Link
                  href="/support"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-blue-500/20 hover:bg-blue-500/30 text-blue-400 border border-blue-500/40 rounded-lg font-medium transition-colors"
                >
                  <Book className="size-4" />
                  サポートを見る
                </Link>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default function DocsPage() {
  return (
    <div className="relative bg-black overflow-hidden">
      {/* グローバルナビゲーション */}
      <Navigation />

      {/* Matrix Code背景 - 最背面（50%透過） - 固定 */}
      <div className="fixed inset-0 z-0 opacity-50">
        <MatrixRain
          fontSize={16}
          color="#00ff00"
          characters="01アカサタナハマヤラワンイキシチニヒミリヰケセテネヘメレエコソトノホモロオクスツヌフムルウ"
          fadeOpacity={0.05}
          speed={0.8}
        />
      </div>

      {/* スクロール可能なコンテンツ層 */}
      <div className="relative z-20 bg-transparent">
        {/* ドキュメントヒーローセクション */}
        <div className="min-h-screen">
          <DocsHero />
        </div>

        {/* ドキュメントコンテンツ */}
        <div className="relative bg-gradient-to-b from-black/0 via-black/80 to-black/95">
          <DocumentationSections />
          <CodeExample />
        </div>
      </div>
    </div>
  );
}
