"use client";

import React, { useState } from "react";
import { Navigation } from "@/components/ui/navigation";
import MatrixRain from "@/components/ui/matrix-code";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import {
  Book,
  MessageCircle,
  Clock,
  ChevronDown,
  ChevronUp,
  ExternalLink,
} from "lucide-react";
import Link from "next/link";

const SupportHero = () => {
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
          サポート
        </h1>
        <p className="text-gray-400 text-xl max-w-3xl mx-auto mb-12">
          Magic MCPのご利用でお困りですか？
          <br />
          包括的なサポートでお手伝いいたします。
        </p>

        {/* サポートオプション */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto"
        >
          {[
            { icon: Book, title: "ドキュメント", value: "詳細ガイド" },
            {
              icon: MessageCircle,
              title: "チャットサポート",
              value: "リアルタイム対応",
            },
            { icon: Clock, title: "24時間サポート", value: "いつでもお手伝い" },
          ].map((support) => (
            <Card
              key={support.title}
              className="backdrop-blur-xl bg-white/5 border-white/10"
            >
              <CardContent className="p-6 text-center">
                <support.icon className="size-8 text-green-400 mx-auto mb-3" />
                <div className="text-white font-medium mb-1">
                  {support.title}
                </div>
                <div className="text-gray-400 text-sm">{support.value}</div>
              </CardContent>
            </Card>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "Magic MCPとは何ですか？",
      answer:
        "Magic MCPは、WebGLエフェクトを組み合わせた革新的なWebプラットフォームです。Model Context Protocol（MCP）を使用してAIとの高度な連携を実現しています。",
    },
    {
      question: "ライトニングエフェクトの色を変更できますか？",
      answer:
        "はい、可能です。ページ上部の「ライトニングの色調整」スライダーを使用して、0°から360°まで色相をリアルタイムで調整できます。お好みの色に設定してお楽しみください。",
    },
    {
      question: "モバイルデバイスでも利用できますか？",
      answer:
        "Magic MCPは完全にレスポンシブ対応しており、スマートフォンやタブレットでもお楽しみいただけます。ただし、最適な体験のためにはデスクトップ環境をお勧めします。",
    },
    {
      question: "商用利用は可能ですか？",
      answer:
        "はい、Magic MCPのオープンソース版は商用利用可能です。詳細なライセンス条項については、GitHubリポジトリのLICENSEファイルをご確認ください。",
    },
    {
      question: "カスタマイズや開発依頼は受け付けていますか？",
      answer:
        "はい、Magic MCPをベースにしたカスタマイズや新規開発のご相談を承っております。お問い合わせフォームまたはメールでご連絡ください。",
    },
  ];

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
            よくある質問
          </h2>
          <p className="text-gray-400 text-lg">
            Magic MCPについてよく寄せられるご質問とその回答
          </p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="backdrop-blur-xl bg-white/5 border-white/10">
                <CardContent className="p-0">
                  <button
                    onClick={() =>
                      setOpenIndex(openIndex === index ? null : index)
                    }
                    className="w-full p-6 text-left flex items-center justify-between hover:bg-white/5 transition-colors"
                  >
                    <h3 className="text-white font-medium pr-4">
                      {faq.question}
                    </h3>
                    {openIndex === index ? (
                      <ChevronUp className="size-5 text-gray-400 flex-shrink-0" />
                    ) : (
                      <ChevronDown className="size-5 text-gray-400 flex-shrink-0" />
                    )}
                  </button>
                  {openIndex === index && (
                    <div className="px-6 pb-6">
                      <p className="text-gray-300 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const SupportResources = () => {
  const resources = [
    {
      title: "ドキュメント",
      description: "完全な技術仕様とAPIリファレンス",
      icon: Book,
      link: "/docs",
      external: false,
    },
    {
      title: "GitHub リポジトリ",
      description: "ソースコード、Issues、Discussions",
      icon: ExternalLink,
      link: "https://github.com/bskcorona-github/magic-website",
      external: true,
    },
    {
      title: "コミュニティフォーラム",
      description: "ユーザーコミュニティとの交流",
      icon: MessageCircle,
      link: "#",
      external: false,
    },
  ];

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
            サポートリソース
          </h2>
          <p className="text-gray-400 text-lg">
            さらに詳しい情報とサポートをお探しですか？
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {resources.map((resource, index) => (
            <motion.div
              key={resource.title}
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="backdrop-blur-xl bg-white/5 border-white/10 hover:bg-white/10 transition-all duration-300 h-full">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 rounded-lg bg-green-500/20 backdrop-blur-sm border border-green-500/30">
                      <resource.icon className="size-5 text-green-400" />
                    </div>
                    <h3 className="text-white font-semibold">
                      {resource.title}
                    </h3>
                  </div>
                  <p className="text-gray-300 text-sm mb-4">
                    {resource.description}
                  </p>
                  {resource.external ? (
                    <a
                      href={resource.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 text-sm transition-colors"
                    >
                      外部リンクで開く <ExternalLink className="size-3" />
                    </a>
                  ) : (
                    <Link
                      href={resource.link}
                      className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 text-sm transition-colors"
                    >
                      詳細を見る
                    </Link>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* お問い合わせCTA */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-16 text-center"
        >
          <Card className="backdrop-blur-xl bg-white/5 border-white/10">
            <CardContent className="p-8">
              <h3 className="text-2xl font-light text-white mb-4">
                解決しませんでしたか？
              </h3>
              <p className="text-gray-400 mb-6">
                お困りの際は、お気軽にお問い合わせください。専門チームがサポートいたします。
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 bg-green-500/20 hover:bg-green-500/30 text-green-400 border border-green-500/40 rounded-lg font-medium transition-colors"
              >
                <MessageCircle className="size-4" />
                お問い合わせ
              </Link>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default function SupportPage() {
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
        {/* サポートヒーローセクション */}
        <div className="min-h-screen">
          <SupportHero />
        </div>

        {/* サポートコンテンツ */}
        <div className="relative bg-gradient-to-b from-black/0 via-black/80 to-black/95">
          <FAQSection />
          <SupportResources />
        </div>
      </div>
    </div>
  );
}
