"use client";

import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import {
  Bot,
  Sparkles,
  Layers3,
  Zap,
  Brain,
  Palette,
  Globe,
  Code2,
} from "lucide-react";

interface FeatureCardProps {
  children: React.ReactNode;
  className?: string;
}

const FeatureCard = ({ children, className }: FeatureCardProps) => (
  <Card
    className={cn(
      "group relative backdrop-blur-xl bg-white/5 border-white/10 hover:bg-white/10 transition-all duration-300",
      "shadow-xl hover:shadow-2xl hover:shadow-blue-500/20",
      className
    )}
  >
    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-600/5 rounded-lg"></div>
    {children}
  </Card>
);

interface FeatureItemProps {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
  delay?: number;
}

const FeatureItem = ({
  icon: Icon,
  title,
  description,
  delay = 0,
}: FeatureItemProps) => {
  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
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
    <motion.div variants={itemVariants}>
      <FeatureCard>
        <CardHeader className="pb-3">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 rounded-lg bg-blue-500/20 backdrop-blur-sm border border-blue-500/30">
              <Icon className="size-5 text-blue-400" />
            </div>
            <h3 className="text-lg font-semibold text-white">{title}</h3>
          </div>
        </CardHeader>
        <CardContent>
          <p className="text-gray-300 text-sm leading-relaxed">{description}</p>
        </CardContent>
      </FeatureCard>
    </motion.div>
  );
};

export const FeaturesSection: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const features = [
    {
      icon: Bot,
      title: "3Dインタラクティブロボット",
      description:
        "Spline製の高品質3Dロボットが、ユーザーの操作に反応してリアルタイムでアニメーション。没入感のある体験を提供します。",
    },
    {
      icon: Zap,
      title: "WebGLライトニングエフェクト",
      description:
        "カスタムシェーダーで実装されたリアルタイムライトニング効果。色相をリアルタイムで調整可能な動的エフェクト。",
    },
    {
      icon: Code2,
      title: "マトリックスコード背景",
      description:
        "映画マトリックスにインスパイアされたコードレインアニメーション。日本語文字とバイナリの組み合わせで独特の雰囲気を演出。",
    },
    {
      icon: Layers3,
      title: "3層アーキテクチャ",
      description:
        "背景・中間・前景の3層構造により、奥行き感のある美しいレイヤリングを実現。各層が独立してアニメーション。",
    },
    {
      icon: Sparkles,
      title: "グラスモルフィズムUI",
      description:
        "モダンなガラス風半透明デザイン。バックドロップフィルターとグラデーションによる洗練されたインターフェース。",
    },
    {
      icon: Brain,
      title: "AI統合プラットフォーム",
      description:
        "MCP（Model Context Protocol）により、AIエージェントとの高度な連携を実現。次世代のインテリジェントインタラクション。",
    },
    {
      icon: Palette,
      title: "リアルタイムカスタマイズ",
      description:
        "ライトニングエフェクトの色調整、アニメーション速度の変更など、ユーザーが体験を自由にカスタマイズ可能。",
    },
    {
      icon: Globe,
      title: "レスポンシブデザイン",
      description:
        "あらゆるデバイスサイズに最適化。モバイルからデスクトップまで、一貫した美しい体験を提供します。",
    },
  ];

  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-transparent">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-light text-white mb-6">
            先進的な機能
          </h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            最新のWeb技術を駆使した革新的な機能群で、
            <br />
            未来のインタラクションを今すぐ体験できます
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          {features.map((feature, index) => (
            <FeatureItem
              key={feature.title}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              delay={index * 0.1}
            />
          ))}
        </motion.div>

        {/* 装飾的要素 */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] opacity-10 pointer-events-none">
          <div className="w-full h-full rounded-full bg-gradient-to-b from-blue-500/20 to-purple-600/20 blur-3xl"></div>
        </div>
      </div>
    </section>
  );
};
