"use client";

import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import {
  Code2,
  Brain,
  FileText,
  Github,
  Sparkles,
  MessageSquare,
  Coffee,
  Zap,
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
      icon: Brain,
      title: "AI駆動開発",
      description:
        "最新のAI技術を積極的に学習し、現在の会社での登壇経験も積み重ね、AI時代のエンジニアとして成長し続けています。",
    },
    {
      icon: Code2,
      title: "毎日のコーディング",
      description:
        "365日継続的な開発を通じて、常に技術力を向上。新しい技術や手法への探求心を持ち続けています。",
    },
    {
      icon: FileText,
      title: "知識の共有",
      description:
        "気付きや学びがあればQiitaやNotionで記事・手順書を作成。コミュニティへの貢献と自己の振り返りを大切にしています。",
    },
    {
      icon: Github,
      title: "オープンソース活動",
      description:
        "GitHub上で60のリポジトリを公開。Go、TypeScript、JavaScript等を使った多様なプロジェクトを展開中。",
    },
    {
      icon: Sparkles,
      title: "フルスタック開発",
      description:
        "TypeScript 55%、フロントエンドからバックエンド、インフラまで幅広くカバーする技術スタックで包括的な開発を実現。",
    },
    {
      icon: MessageSquare,
      title: "技術共有",
      description:
        "Qiitaで50記事投稿、120コントリビューション。TypeScript、React、Next.js、AWSなど幅広い技術記事を執筆。",
    },
    {
      icon: Coffee,
      title: "沖縄ベース",
      description:
        "美しい沖縄を拠点として、リラックスした環境で創造性豊かな開発に取り組んでいます。",
    },
    {
      icon: Zap,
      title: "継続的学習",
      description:
        "エンジニア2年目として謙虚に学び続け、新しい技術やベストプラクティスを日々吸収し実践に活かしています。",
    },
  ];

  return (
    <section className="relative py-12 px-4 sm:px-6 lg:px-8 bg-transparent">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-light text-white mb-4">
            開発スタイル
          </h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            AI時代のエンジニアとして、継続的な学習と実践、
            <br />
            知識の共有を通じて成長し続けています
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
