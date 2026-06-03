"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Navigation } from "@/components/ui/navigation";
import MatrixRain from "@/components/ui/matrix-code";
import { Card } from "@/components/ui/card";
import { ProjectImage } from "@/components/ui/project-image";

// 型定義
interface WebProject {
  title: string;
  description: string;
  language: string;
  category: "webapp";
  technologies: string[];
  type: string;
  image: string;
  url: string;
}

export default function ProjectsPage() {
  const [activeFilter, setActiveFilter] = useState("all");

  // Webアプリケーション・ランディングページ
  const webProjects: WebProject[] = [
    {
      title: "LoL Team Balancer",
      description:
        "League of Legendsのカスタムゲーム（内部スクリム）向けチーム分けツール。10人を126通り全探索し、最もバランスの取れた5v5へ自動編成します。Riotランクに依存しない独自ELOレーティング、メイン/サブ/可/不可の5×4ロール評価マトリクス、シーズン制ランキング・MVP記録、Discord連携に対応。登録不要・招待リンク制で、現在800人のユーザーに利用されています。",
      image:
        "https://images.unsplash.com/photo-1542751371-adc38448a05e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      language: "Next.js",
      category: "webapp",
      url: "https://lol-team-balancer-delta.vercel.app/",
      technologies: [
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "ELO Rating",
        "Discord",
        "Vercel",
      ],
      type: "Webアプリケーション",
    },
    {
      title: "ポケモン図鑑",
      description:
        "ポケモンのデータベースを提供するウェブアプリケーション。各ポケモンの詳細情報、タイプ、能力値などを検索・閲覧できます。",
      image:
        "https://images.unsplash.com/photo-1542779283-429940ce8336?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      language: "JavaScript",
      category: "webapp",
      url: "https://my-pokedex-frontend.vercel.app/",
      technologies: ["JavaScript", "HTML", "CSS", "API"],
      type: "Webアプリケーション",
    },
    {
      title: "Magic MCP",
      description:
        "MagicMCPServerを活用したかっこいいヒーローセクション。WebGLライトニング、マトリックスコードが融合したインタラクティブな次世代Webエクスペリエンスを提供します。",
      image:
        "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      language: "React",
      category: "webapp",
      url: "https://magic-website-sigma.vercel.app/",
      technologies: ["React", "Tailwind CSS", "Framer Motion", "WebGL"],
      type: "インタラクティブサイト",
    },
    {
      title: "アクアマリン沖縄",
      description:
        "沖縄のマリンアクティビティを提供する会社のランディングページ。フライボード、パラセーリング、バナナボートなどのアクティビティ予約サービスを紹介しています。",
      image:
        "https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      language: "HTML/CSS",
      category: "webapp",
      url: "https://sample-lp4.vercel.app/",
      technologies: ["HTML", "CSS", "JavaScript"],
      type: "ランディングページ",
    },
    {
      title: "沖縄 海遊び",
      description:
        "沖縄のマリンスポーツ・マリンレジャーで海遊び。ジェットスキー、パラセーリング、バナナボート、フライボードなどの体験を、安全第一・少人数制で提供する予約用ランディングページ。",
      image:
        "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      language: "Next.js",
      category: "webapp",
      url: "https://marine-okinawa-lp.vercel.app/",
      technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel"],
      type: "ランディングページ",
    },
    {
      title: "Kiznet",
      description:
        "家系図を作成・編集できるWebアプリ。新規作成、サンプル家系図、親子・配偶者関係、自動レイアウト、エクスポート・印刷機能に対応。",
      image:
        "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      language: "Next.js",
      category: "webapp",
      url: "https://kiznet.vercel.app/",
      technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
      type: "Webアプリケーション",
    },
    {
      title: "BeautySalon",
      description:
        "美容サロンのランディングページ。サービス一覧、よくある質問、予約機能などを備えたレスポンシブなデザインです。心地よい空間と最高品質のトリートメントを提供する美容サロンのブランディングを表現しています。",
      image:
        "https://images.unsplash.com/photo-1560066984-138dadb4c035?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      language: "HTML/CSS",
      category: "webapp",
      url: "https://sample-lp10.vercel.app/",
      technologies: ["HTML", "CSS", "JavaScript", "Responsive"],
      type: "ランディングページ",
    },
    {
      title: "農力アップ 産業振興株式会社",
      description:
        "農業用肥料の製造・販売企業のランディングページ。製品情報、効果・メリット、導入事例、技術的特長などを詳細に紹介。ユーザーフレンドリーなUI設計で、農家の課題解決を重視したコンテンツ構成となっています。",
      image:
        "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      language: "HTML/CSS",
      category: "webapp",
      url: "https://sangyousinkoulp.vercel.app/",
      technologies: ["HTML", "CSS", "JavaScript", "Responsive"],
      type: "ランディングページ",
    },
    {
      title: "訪問看護ステーション沖縄",
      description:
        "沖縄県で24時間365日対応の訪問看護サービスを提供するステーションの公式サイト。在宅療養中の患者様とご家族様を、経験豊富な看護師がサポートします。医療機関との連携により、継続的で質の高い看護サービスをご提供するプロフェッショナルな医療サービスサイトです。",
      image:
        "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      language: "Next.js",
      category: "webapp",
      url: "https://test-kaigo.vercel.app/",
      technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel", "医療"],
      type: "医療サービスサイト",
    },
    {
      title: "るーぷくん",
      description:
        "YouTube動画を指定した区間でループ再生できるツール。mm:ssまたは秒.ミリ秒形式で開始/終了を設定可能。YouTube IFrame Player APIを使用した視聴補助ツールで、音楽練習や語学学習に最適です。Space/S/Eキーのショートカットにも対応。",
      image:
        "https://images.unsplash.com/photo-1611162617474-5b21e879e113?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      language: "JavaScript",
      category: "webapp",
      url: "https://rupukun.vercel.app/",
      technologies: ["JavaScript", "YouTube IFrame API", "HTML", "CSS", "Vercel"],
      type: "Webアプリケーション",
    },
    {
      title: "カネマサ建物 - 沖縄の別荘・不動産管理",
      description:
        "沖縄で別荘・賃貸物件の管理を行う不動産管理会社のランディングページ。約40年・500件以上の実績、宅地建物取引士による直接相談、月額11,000円〜の管理プランなどを訴求。信頼感を重視した構成とレスポンシブ対応で、問い合わせ導線まで設計しています。",
      image:
        "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      language: "Next.js",
      category: "webapp",
      url: "https://kanemasa-tatemono-lp.vercel.app/",
      technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel"],
      type: "ランディングページ",
    },
  ];

  const allProjects = webProjects;

  const categories = [
    { id: "all", name: "All", count: allProjects.length },
    { id: "webapp", name: "Web Apps", count: webProjects.length },
  ];

  const filteredProjects =
    activeFilter === "all"
      ? allProjects
      : allProjects.filter((project) => project.category === activeFilter);

  return (
    <div className="relative bg-black overflow-hidden min-h-screen">
      {/* ナビゲーション */}
      <Navigation />

      {/* Matrix Code背景 - 最背面（30%透過） - 固定 */}
      <div className="fixed inset-0 z-0 opacity-30">
        <MatrixRain
          fontSize={14}
          color="#10b981"
          characters="01ProjectsGitHubWebAppPortfolioReactNextJSNodeJSPythonHTML"
          fadeOpacity={0.05}
          speed={0.7}
        />
      </div>

      {/* コンテンツ層 */}
      <div className="relative z-20 pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* ヘッダー */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl font-bold text-white mb-6">
              🚀{" "}
              <span className="bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent">
                Projects & Works
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              これまでに開発したWebアプリケーション、ランディングページ、およびオープンソースプロジェクト
            </p>
            <div className="mt-4 max-w-2xl mx-auto">
              <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-lg p-4">
                <div className="flex items-center space-x-2 text-yellow-400">
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-sm font-medium">ご注意</span>
                </div>
                <p className="text-yellow-300/80 text-sm mt-2">
                  一部のWebアプリケーションは、データベース維持費の問題により現在アクセスできない場合があります。
                  <br />
                  GitHubリポジトリにてソースコードをご確認いただけます。
                </p>
              </div>
            </div>
          </motion.div>

          {/* Filter Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveFilter(category.id)}
                className={`px-6 py-3 rounded-full transition-all duration-300 ${
                  activeFilter === category.id
                    ? "bg-green-500 text-white shadow-lg"
                    : "bg-white/10 text-gray-300 hover:bg-white/20"
                }`}
              >
                {category.name} ({category.count})
              </button>
            ))}
          </motion.div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                className="group"
              >
                <Card className="h-full bg-black/40 backdrop-blur-lg border border-white/10 hover:bg-black/60 transition-all duration-300 overflow-hidden">
                  {/* Project Image */}
                  <div className="relative h-48 overflow-hidden">
                    <ProjectImage
                      src={project.image}
                      alt={project.title}
                      className="h-full transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none"></div>
                    <div className="absolute top-4 right-4">
                      <span className="px-3 py-1 bg-green-500/80 text-white text-xs rounded-full">
                        {project.type}
                      </span>
                    </div>
                  </div>

                  <div className="p-6">
                    {/* Header */}
                    <div className="flex items-start justify-between mb-4">
                      <h3 className="text-xl font-bold text-white group-hover:text-green-300 transition-colors">
                        {project.title}
                      </h3>
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors"
                        aria-label={`${project.title}を開く`}
                      >
                        <svg
                          className="w-5 h-5 text-gray-300 hover:text-white"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                          />
                        </svg>
                      </a>
                    </div>

                    {/* Description */}
                    <p className="text-gray-300 text-sm mb-6 line-clamp-3">
                      {project.description}
                    </p>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 bg-white/10 text-gray-300 text-xs rounded-full border border-white/20"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Footer */}
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-400">
                        {project.language}
                      </span>
                      <div className="flex items-center space-x-1 text-sm text-green-400">
                        <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                        <span>Live Demo</span>
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* GitHub Profile Link */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-center mt-16"
          >
            <a
              href="https://github.com/bskcorona-github"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-3 px-8 py-4 bg-gradient-to-r from-green-600 to-cyan-600 text-white rounded-2xl hover:from-green-700 hover:to-cyan-700 transition-all duration-300 hover:scale-105 hover:shadow-xl"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
              <span className="text-lg font-semibold">View More on GitHub</span>
            </a>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
