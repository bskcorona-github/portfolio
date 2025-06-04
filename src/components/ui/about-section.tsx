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
      number: "120",
      label: "Qiita貢献",
      description: "記事と活動",
    },
    {
      number: "60",
      label: "GitHub リポジトリ",
      description: "プロジェクト公開",
    },
    {
      number: "2+",
      label: "エンジニア歴",
      description: "年目として成長中",
    },
    {
      number: "🏝️",
      label: "沖縄ベース",
      description: "リモート開発",
    },
  ];

  return (
    <section className="relative py-16 px-4 sm:px-6 lg:px-8 bg-transparent">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* テキストセクション */}
          <motion.div
            variants={textVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div>
              <h2 className="text-4xl md:text-5xl font-light text-white mb-6">
                About Me
              </h2>
              <div className="space-y-5 text-gray-300 text-lg leading-relaxed">
                <p>
                  沖縄を拠点とするフルスタックエンジニアです。
                  AI駆動開発を日々学びながら、現在の会社での登壇経験も積み重ねています。
                </p>
                <p>
                  学んだ知識や気付きは積極的にQiitaやNotionで記事・手順書として共有し、
                  コミュニティへの貢献を大切にしています。
                  毎日のコーディングを通じて継続的に成長しています。
                </p>
                <div className="bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-white/10">
                  <p className="mb-2">
                    <strong className="text-blue-400">趣味:</strong> 寝ること 😴
                  </p>
                  <p>
                    <strong className="text-purple-400">好きなもの:</strong> 猫
                    🐱、寿司 🍣、カフェオレ ☕
                  </p>
                </div>
              </div>
            </div>

            <motion.div
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-wrap gap-3"
            >
              <div className="px-4 py-2 bg-blue-500/20 backdrop-blur-sm rounded-full border border-blue-500/30 text-blue-400 font-medium text-sm">
                TypeScript 55%
              </div>
              <div className="px-4 py-2 bg-purple-500/20 backdrop-blur-sm rounded-full border border-purple-500/30 text-purple-400 font-medium text-sm">
                React/Next.js
              </div>
              <div className="px-4 py-2 bg-green-500/20 backdrop-blur-sm rounded-full border border-green-500/30 text-green-400 font-medium text-sm">
                Go/Python
              </div>
              <div className="px-4 py-2 bg-orange-500/20 backdrop-blur-sm rounded-full border border-orange-500/30 text-orange-400 font-medium text-sm">
                AWS/Docker
              </div>
            </motion.div>
          </motion.div>

          {/* 統計セクション */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-4"
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
          className="mt-16 text-center"
        >
          <Card className="relative backdrop-blur-xl bg-white/5 border-white/10 max-w-4xl mx-auto">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-600/10 rounded-lg"></div>
            <CardContent className="p-6 md:p-8">
              <blockquote className="text-xl md:text-2xl font-light text-white mb-4 italic">
                &ldquo;毎日のコーディングと継続的な学習で、
                <br />
                AI時代のエンジニアとして成長し続けています&rdquo;
              </blockquote>
              <div className="text-gray-400">
                <div className="font-semibold">Bsk_Corona (たつみょん)</div>
                <div className="text-sm">Full Stack Developer from Okinawa</div>
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
