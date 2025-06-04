"use client";

import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

interface StatCardProps {
  number: string;
  label: string;
  description: string;
  delay?: number;
}

const StatCard = ({ number, label, description, delay = 0 }: StatCardProps) => {
  const cardVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        delay,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.div variants={cardVariants}>
      <Card className="group relative backdrop-blur-xl bg-white/5 border-white/10 hover:bg-white/10 transition-all duration-300 text-center">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-600/5 rounded-lg"></div>
        <CardContent className="p-6">
          <div className="text-4xl md:text-5xl font-light text-blue-400 mb-2">
            {number}
          </div>
          <div className="text-white font-semibold mb-2">{label}</div>
          <div className="text-gray-400 text-sm">{description}</div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export const AboutSection: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const textVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const stats = [
    {
      number: "3",
      label: "レイヤー構造",
      description: "Matrix + 3D + UI",
    },
    {
      number: "100%",
      label: "WebGL効果",
      description: "リアルタイム描画",
    },
    {
      number: "∞",
      label: "カスタマイズ",
      description: "無限の可能性",
    },
    {
      number: "AI",
      label: "統合基盤",
      description: "次世代プラットフォーム",
    },
  ];

  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-transparent">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* テキストセクション */}
          <motion.div
            variants={textVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-4xl md:text-6xl font-light text-white mb-6">
                About Magic MCP
              </h2>
              <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
                <p>
                  Magic MCPは、最新のWeb技術とAI統合プラットフォームを融合させた
                  革新的なインタラクティブWebサイトです。
                </p>
                <p>
                  3層アーキテクチャによる美しいビジュアル体験と、 Model Context
                  Protocol（MCP）による高度なAI連携機能を実現。
                  未来のWebインタラクションを今すぐ体験できます。
                </p>
                <p>
                  Matrix風コードレイン、Spline
                  3Dロボット、WebGLライトニングエフェクトが
                  シームレスに融合し、訪問者に忘れられない体験を提供します。
                </p>
              </div>
            </div>

            <motion.div
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-wrap gap-4"
            >
              <div className="px-6 py-3 bg-blue-500/20 backdrop-blur-sm rounded-full border border-blue-500/30 text-blue-400 font-medium">
                Next.js 15
              </div>
              <div className="px-6 py-3 bg-purple-500/20 backdrop-blur-sm rounded-full border border-purple-500/30 text-purple-400 font-medium">
                WebGL Shaders
              </div>
              <div className="px-6 py-3 bg-green-500/20 backdrop-blur-sm rounded-full border border-green-500/30 text-green-400 font-medium">
                Spline 3D
              </div>
              <div className="px-6 py-3 bg-orange-500/20 backdrop-blur-sm rounded-full border border-orange-500/30 text-orange-400 font-medium">
                Framer Motion
              </div>
            </motion.div>
          </motion.div>

          {/* 統計セクション */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-6"
          >
            {stats.map((stat, index) => (
              <StatCard
                key={stat.label}
                number={stat.number}
                label={stat.label}
                description={stat.description}
                delay={index * 0.1}
              />
            ))}
          </motion.div>
        </div>

        {/* 装飾的な引用セクション */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-20 text-center"
        >
          <Card className="relative backdrop-blur-xl bg-white/5 border-white/10 max-w-4xl mx-auto">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-600/10 rounded-lg"></div>
            <CardContent className="p-8 md:p-12">
              <blockquote className="text-2xl md:text-3xl font-light text-white mb-6 italic">
                &ldquo;テクノロジーとアートの境界を超えた、
                <br />
                新しいWebエクスペリエンスの創造&rdquo;
              </blockquote>
              <div className="text-gray-400">
                <div className="font-semibold">Magic MCP Development Team</div>
                <div className="text-sm">Innovation through Technology</div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* 背景装飾 */}
        <div className="absolute top-0 right-0 w-[400px] h-[400px] opacity-5 pointer-events-none">
          <div className="w-full h-full rounded-full bg-gradient-to-bl from-blue-500/30 to-purple-600/30 blur-3xl"></div>
        </div>
      </div>
    </section>
  );
};
