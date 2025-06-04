"use client";

import React from "react";
import { InteractiveRobotSpline } from "@/components/ui/interactive-3d-robot";
import { FeaturesSection } from "@/components/ui/features-section";
import { Navigation } from "@/components/ui/navigation";
import MatrixRain from "@/components/ui/matrix-code";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";

const FeaturesHero = () => {
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
          先進的な機能
        </h1>
        <p className="text-gray-400 text-xl max-w-3xl mx-auto mb-12">
          Magic MCPが提供する革新的な機能の詳細をご覧ください。
          <br />
          最新のWeb技術で実現された次世代インタラクション。
        </p>

        {/* 機能ハイライト */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto"
        >
          {[
            "リアルタイムWebGL",
            "3Dインタラクション",
            "AI統合プラットフォーム",
          ].map((feature) => (
            <Card
              key={feature}
              className="backdrop-blur-xl bg-white/5 border-white/10"
            >
              <CardContent className="p-6 text-center">
                <CheckCircle className="size-8 text-green-400 mx-auto mb-3" />
                <div className="text-white font-medium">{feature}</div>
              </CardContent>
            </Card>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default function FeaturesPage() {
  const ROBOT_SCENE_URL =
    "https://prod.spline.design/PyzDhpQ9E5f1E3MT/scene.splinecode";

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

      {/* 3Dロボット中間層 - 固定 */}
      <div className="fixed inset-0 z-10">
        <InteractiveRobotSpline
          scene={ROBOT_SCENE_URL}
          className="w-full h-full"
        />
      </div>

      {/* スクロール可能なコンテンツ層 */}
      <div className="relative z-20 bg-transparent">
        {/* 機能ヒーローセクション */}
        <div className="min-h-screen">
          <FeaturesHero />
        </div>

        {/* 詳細機能セクション */}
        <div className="relative bg-gradient-to-b from-black/0 via-black/80 to-black/95">
          <FeaturesSection />

          {/* 追加の技術詳細セクション */}
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
                  技術仕様
                </h2>
                <p className="text-gray-400 text-lg">
                  業界最先端の技術スタックで構築された高性能プラットフォーム
                </p>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {[
                  {
                    title: "フロントエンド",
                    items: [
                      "Next.js 15",
                      "TypeScript",
                      "Tailwind CSS v4",
                      "Framer Motion",
                    ],
                  },
                  {
                    title: "3D・エフェクト",
                    items: [
                      "Spline 3D",
                      "WebGL Shaders",
                      "Canvas API",
                      "Custom Animations",
                    ],
                  },
                  {
                    title: "AI・統合",
                    items: [
                      "Model Context Protocol",
                      "リアルタイム処理",
                      "インテリジェント応答",
                      "カスタマイズ可能",
                    ],
                  },
                  {
                    title: "パフォーマンス",
                    items: [
                      "最適化レンダリング",
                      "レスポンシブデザイン",
                      "高速ロード",
                      "クロスブラウザ対応",
                    ],
                  },
                ].map((section, index) => (
                  <motion.div
                    key={section.title}
                    initial={{ y: 30, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    <Card className="backdrop-blur-xl bg-white/5 border-white/10 h-full">
                      <CardHeader>
                        <h3 className="text-xl font-semibold text-white">
                          {section.title}
                        </h3>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-2">
                          {section.items.map((item) => (
                            <li
                              key={item}
                              className="flex items-center gap-2 text-gray-300"
                            >
                              <CheckCircle className="size-4 text-green-400 flex-shrink-0" />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
