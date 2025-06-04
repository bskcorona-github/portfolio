"use client";

import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import {
  Users,
  TrendingUp,
  BarChart3,
  Heart,
  Target,
  UserCheck,
  Sparkles,
  Crown,
} from "lucide-react";

interface StrengthCardProps {
  children: React.ReactNode;
  className?: string;
}

const StrengthCard = ({ children, className }: StrengthCardProps) => (
  <Card
    className={cn(
      "group relative backdrop-blur-xl bg-white/5 border-white/10 hover:bg-white/10 transition-all duration-300",
      "shadow-xl hover:shadow-2xl hover:shadow-purple-500/20",
      className
    )}
  >
    <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-blue-600/5 rounded-lg"></div>
    {children}
  </Card>
);

interface StrengthItemProps {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
  rank?: number;
  delay?: number;
}

const StrengthItem = ({
  icon: Icon,
  title,
  description,
  rank,
  delay = 0,
}: StrengthItemProps) => {
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
      <StrengthCard>
        <CardHeader className="pb-3">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-purple-500/20 backdrop-blur-sm border border-purple-500/30">
                <Icon className="size-5 text-purple-400" />
              </div>
              <h3 className="text-lg font-semibold text-white">{title}</h3>
            </div>
            {rank && (
              <div className="flex items-center justify-center w-8 h-8 rounded-full bg-gradient-to-br from-yellow-400 to-orange-500 text-black font-bold text-sm">
                {rank}
              </div>
            )}
          </div>
        </CardHeader>
        <CardContent>
          <p className="text-gray-300 text-sm leading-relaxed">{description}</p>
        </CardContent>
      </StrengthCard>
    </motion.div>
  );
};

export const PersonalitySection: React.FC = () => {
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

  const strengths = [
    {
      icon: TrendingUp,
      title: "成長促進",
      description:
        "他者の成長と可能性を見出し、チームメンバーのスキルアップをサポート。メンタリングやナレッジシェアを通じて組織の発展に貢献しています。",
      rank: 1,
    },
    {
      icon: BarChart3,
      title: "分析思考",
      description:
        "複雑な問題を論理的に分解し、データに基づいた意思決定を実践。コードレビューや設計において、客観的で建設的な分析を提供します。",
      rank: 2,
    },
    {
      icon: Heart,
      title: "調和性",
      description:
        "チーム内の異なる意見や視点を調整し、協調的な開発環境を構築。対立を避けながら、全員が納得できる解決策を見つけることを重視しています。",
      rank: 3,
    },
    {
      icon: Target,
      title: "最上志向",
      description:
        "良いものを最高のものにする情熱を持ち、コードの品質やユーザー体験の向上に妥協しません。継続的な改善と技術的な卓越性を追求しています。",
      rank: 4,
    },
    {
      icon: UserCheck,
      title: "親密性",
      description:
        "少数の深い関係性を大切にし、チームメンバーとの信頼関係を築きます。1対1のコミュニケーションを通じて、より良い協働関係を育んでいます。",
      rank: 5,
    },
  ];

  return (
    <section className="relative py-16 px-4 sm:px-6 lg:px-8 bg-transparent">
      <div className="max-w-7xl mx-auto">
        {/* MBTI セクション */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="p-3 rounded-xl bg-gradient-to-br from-purple-500/20 to-blue-500/20 backdrop-blur-sm border border-purple-500/30">
              <Crown className="size-8 text-purple-400" />
            </div>
            <h2 className="text-4xl md:text-5xl font-light text-white">
              Personality & Strengths
            </h2>
          </div>

          {/* MBTI カード */}
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-2xl mx-auto mb-12"
          >
            <Card className="relative backdrop-blur-xl bg-gradient-to-br from-purple-500/10 to-blue-500/10 border-purple-500/20">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-blue-500/5 rounded-lg"></div>
              <CardContent className="p-8">
                <div className="flex items-center justify-center gap-4 mb-6">
                  <div className="text-4xl">👑</div>
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">
                      ENFJ - 主人公型
                    </h3>
                    <p className="text-purple-300 font-medium">
                      The Protagonist
                    </p>
                  </div>
                </div>
                <p className="text-gray-300 leading-relaxed">
                  他者の成長を促進し、理想を現実に変える情熱的なリーダー。
                  チームの調和を重視しながら、全員が最高のパフォーマンスを発揮できる環境づくりに専念。
                  エンジニアとして技術的な卓越性を追求すると同時に、
                  人とのつながりを大切にした開発スタイルを実践しています。
                </p>
              </CardContent>
            </Card>
          </motion.div>

          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            クリフトンストレングス上位5つの強みが、
            <br />
            エンジニアとしての価値観と開発スタイルを形作っています
          </p>
        </motion.div>

        {/* クリフトンストレングス */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16"
        >
          {strengths.map((strength, index) => (
            <StrengthItem
              key={strength.title}
              icon={strength.icon}
              title={strength.title}
              description={strength.description}
              rank={strength.rank}
              delay={index * 0.1}
            />
          ))}
        </motion.div>

        {/* エンジニアとしての価値観 */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center"
        >
          <Card className="relative backdrop-blur-xl bg-white/5 border-white/10 max-w-4xl mx-auto">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-blue-500/10 rounded-lg"></div>
            <CardContent className="p-6 md:p-8">
              <div className="flex items-center justify-center gap-3 mb-6">
                <Sparkles className="size-6 text-purple-400" />
                <h3 className="text-xl md:text-2xl font-semibold text-white">
                  エンジニアとしての価値観
                </h3>
              </div>
              <div className="grid md:grid-cols-2 gap-6 text-left">
                <div>
                  <h4 className="text-purple-300 font-semibold mb-2">
                    🚀 技術的成長
                  </h4>
                  <p className="text-gray-300 text-sm">
                    個人とチームの技術力向上を支援し、最新技術の学習と実践を継続的に推進
                  </p>
                </div>
                <div>
                  <h4 className="text-blue-300 font-semibold mb-2">
                    🤝 協調的開発
                  </h4>
                  <p className="text-gray-300 text-sm">
                    多様な意見を尊重し、チーム全体が納得できる技術的意思決定を目指す
                  </p>
                </div>
                <div>
                  <h4 className="text-green-300 font-semibold mb-2">
                    ⭐ 品質追求
                  </h4>
                  <p className="text-gray-300 text-sm">
                    コードの品質とユーザー体験の向上に妥協せず、常に最高を目指す
                  </p>
                </div>
                <div>
                  <h4 className="text-yellow-300 font-semibold mb-2">
                    💡 知識共有
                  </h4>
                  <p className="text-gray-300 text-sm">
                    学びを積極的に共有し、コミュニティ全体の成長に貢献する
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* 装飾的要素 */}
        <div className="absolute top-1/4 right-0 w-[400px] h-[400px] opacity-10 pointer-events-none">
          <div className="w-full h-full rounded-full bg-gradient-to-bl from-purple-500/30 to-blue-500/30 blur-3xl"></div>
        </div>
        <div className="absolute bottom-1/4 left-0 w-[300px] h-[300px] opacity-10 pointer-events-none">
          <div className="w-full h-full rounded-full bg-gradient-to-tr from-blue-500/30 to-purple-500/30 blur-3xl"></div>
        </div>
      </div>
    </section>
  );
};
