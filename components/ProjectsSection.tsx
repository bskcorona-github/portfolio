"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FiGithub,
  FiExternalLink,
  FiCode,
  FiStar,
  FiGlobe,
} from "react-icons/fi";
import {
  SiJavascript,
  SiGo,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiHtml5,
  SiCss3,
  SiTailwindcss,
} from "react-icons/si";

interface BaseProject {
  title: string;
  description: string;
  language: string;
  icon: any;
  color: string;
  category: string;
  technologies: string[];
  type: string;
}

interface WebProject extends BaseProject {
  image: string;
  url: string;
  category: "webapp" | "landing";
}

interface GitHubProject extends BaseProject {
  githubUrl: string;
  stats: { stars: number; commits: number };
  category: "github";
}

type Project = WebProject | GitHubProject;

const ProjectsSection = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  // 実際のWebアプリケーション・ランディングページ
  const webProjects: WebProject[] = [
    {
      title: "BattleFlow",
      description:
        "日本最大のMCバトル情報プラットフォーム。UMB、フリースタイルダンジョン、高校生ラップ選手権などの情報を提供し、MC一覧、バトル動画、ファン投票によるランキング機能を備えています。",
      image:
        "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      language: "React",
      icon: SiReact,
      color: "#61dafb",
      category: "webapp",
      url: "https://battleflow.vercel.app/",
      technologies: ["React", "TypeScript", "Vercel"],
      type: "Webアプリケーション",
    },
    {
      title: "ポケモン図鑑",
      description:
        "ポケモンのデータベースを提供するウェブアプリケーション。各ポケモンの詳細情報、タイプ、能力値などを検索・閲覧できます。",
      image:
        "https://images.unsplash.com/photo-1542779283-429940ce8336?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      language: "JavaScript",
      icon: SiJavascript,
      color: "#f7df1e",
      category: "webapp",
      url: "https://my-pokedex-frontend.vercel.app/",
      technologies: ["JavaScript", "HTML", "CSS", "API"],
      type: "Webアプリケーション",
    },
    {
      title: "Magic MCP",
      description:
        "MagicMCPServerを活用したかっこいいヒーローセクション。3Dロボット、WebGLライトニング、マトリックスコードが融合したインタラクティブな次世代Webエクスペリエンスを提供します。",
      image:
        "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      language: "React",
      icon: SiReact,
      color: "#61dafb",
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
        "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      language: "HTML/CSS",
      icon: SiHtml5,
      color: "#e34f26",
      category: "landing",
      url: "https://sample-lp4.vercel.app/",
      technologies: ["HTML", "CSS", "JavaScript"],
      type: "ランディングページ",
    },
    {
      title: "BeautySalon",
      description:
        "美容サロンのランディングページ。サービス一覧、よくある質問、予約機能などを備えたレスポンシブなデザインです。心地よい空間と最高品質のトリートメントを提供する美容サロンのブランディングを表現しています。",
      image:
        "https://images.unsplash.com/photo-1560066984-138dadb4c035?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      language: "HTML/CSS",
      icon: SiHtml5,
      color: "#e34f26",
      category: "landing",
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
      icon: SiHtml5,
      color: "#e34f26",
      category: "landing",
      url: "https://sangyousinkoulp.vercel.app/",
      technologies: ["HTML", "CSS", "JavaScript", "Responsive"],
      type: "ランディングページ",
    },
  ];

  // GitHubプロジェクト
  const githubProjects: GitHubProject[] = [
    {
      title: "elorating-frontend",
      description:
        "elorating5vs5フロントエンド側 - ゲームレーティングシステムのWebアプリケーション",
      language: "JavaScript",
      icon: SiJavascript,
      color: "#f7df1e",
      category: "github",
      githubUrl: "https://github.com/bskcorona-github/elorating-frontend",
      technologies: ["JavaScript", "HTML", "CSS"],
      stats: { stars: 0, commits: 25 },
      type: "ソースコード",
    },
    {
      title: "elorating-backend",
      description:
        "elorating5vs5のバックエンドAPI - Go言語で構築されたレーティングシステム",
      language: "Go",
      icon: SiGo,
      color: "#00add8",
      category: "github",
      githubUrl: "https://github.com/bskcorona-github/elorating-backend",
      technologies: ["Go", "REST API"],
      stats: { stars: 0, commits: 42 },
      type: "ソースコード",
    },
    {
      title: "Bread_Cli",
      description: "コマンドライン環境での効率的な作業を支援するCLIツール",
      language: "Go",
      icon: SiGo,
      color: "#00add8",
      category: "github",
      githubUrl: "https://github.com/bskcorona-github/Bread_Cli",
      technologies: ["Go", "CLI"],
      stats: { stars: 0, commits: 15 },
      type: "ソースコード",
    },
    {
      title: "pan",
      description: "Go言語で開発された軽量なWebアプリケーション",
      language: "Go",
      icon: SiGo,
      color: "#00add8",
      category: "github",
      githubUrl: "https://github.com/bskcorona-github/pan",
      technologies: ["Go", "Web"],
      stats: { stars: 0, commits: 8 },
      type: "ソースコード",
    },
    {
      title: "1_todoList",
      description: "Go言語で実装されたシンプルなTodoリスト管理アプリケーション",
      language: "Go",
      icon: SiGo,
      color: "#00add8",
      category: "github",
      githubUrl: "https://github.com/bskcorona-github/1_todoList",
      technologies: ["Go", "Todo App"],
      stats: { stars: 0, commits: 12 },
      type: "ソースコード",
    },
    {
      title: "2_calculator",
      description: "Go言語で開発された計算機アプリケーション",
      language: "Go",
      icon: SiGo,
      color: "#00add8",
      category: "github",
      githubUrl: "https://github.com/bskcorona-github/2_calculator",
      technologies: ["Go", "Calculator"],
      stats: { stars: 0, commits: 7 },
      type: "ソースコード",
    },
  ];

  const allProjects: Project[] = [...webProjects, ...githubProjects];

  const categories = [
    { id: "all", name: "All", count: allProjects.length },
    {
      id: "webapp",
      name: "Web Apps",
      count: webProjects.filter((p) => p.category === "webapp").length,
    },
    {
      id: "landing",
      name: "Landing Pages",
      count: webProjects.filter((p) => p.category === "landing").length,
    },
    { id: "github", name: "GitHub", count: githubProjects.length },
  ];

  const filteredProjects =
    activeFilter === "all"
      ? allProjects
      : allProjects.filter((project) => project.category === activeFilter);

  return (
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold text-white mb-6">
            🚀 <span className="gradient-text">Projects & Works</span>
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            これまでに開発したWebアプリケーション、ランディングページ、およびオープンソースプロジェクト
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveFilter(category.id)}
              className={`px-6 py-3 rounded-full transition-all duration-300 ${
                activeFilter === category.id
                  ? "bg-blue-500 text-white shadow-lg"
                  : "bg-white/10 text-slate-300 hover:bg-white/20"
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
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="glass-effect rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-300 group relative"
            >
              {/* Project Image for Web Projects */}
              {project.category !== "github" && (
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={(project as WebProject).image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent"></div>
                  <div className="absolute top-4 right-4">
                    <span className="px-3 py-1 bg-blue-500/80 text-white text-xs rounded-full">
                      {project.type}
                    </span>
                  </div>
                </div>
              )}

              <div className="p-6">
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    {project.category === "github" ? (
                      <FiCode className="w-6 h-6 text-blue-400" />
                    ) : (
                      <FiGlobe className="w-6 h-6 text-green-400" />
                    )}
                    <h3 className="text-xl font-bold text-white group-hover:text-blue-300 transition-colors">
                      {project.title}
                    </h3>
                  </div>
                  <div className="flex space-x-2">
                    {project.category === "github" ? (
                      <a
                        href={(project as GitHubProject).githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors"
                      >
                        <FiGithub className="w-5 h-5 text-slate-300 hover:text-white" />
                      </a>
                    ) : (
                      <a
                        href={(project as WebProject).url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors"
                      >
                        <FiExternalLink className="w-5 h-5 text-slate-300 hover:text-white" />
                      </a>
                    )}
                  </div>
                </div>

                {/* Description */}
                <p className="text-slate-300 text-sm mb-6 line-clamp-3">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-slate-700/50 text-slate-300 text-xs rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Footer */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <project.icon
                      className="w-4 h-4"
                      style={{ color: project.color }}
                    />
                    <span className="text-sm text-slate-400">
                      {project.language}
                    </span>
                  </div>

                  {/* GitHub Stats for GitHub projects */}
                  {project.category === "github" && (
                    <div className="flex items-center space-x-4 text-sm text-slate-400">
                      <div className="flex items-center space-x-1">
                        <FiStar className="w-4 h-4" />
                        <span>{(project as GitHubProject).stats.stars}</span>
                      </div>
                      <div>
                        <span>
                          {(project as GitHubProject).stats.commits} commits
                        </span>
                      </div>
                    </div>
                  )}

                  {/* Live Demo indicator for web projects */}
                  {project.category !== "github" && (
                    <div className="flex items-center space-x-1 text-sm text-green-400">
                      <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                      <span>Live Demo</span>
                    </div>
                  )}
                </div>

                {/* Hover Effect Bar */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-purple-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* GitHub Profile Link */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center mt-16"
        >
          <a
            href="https://github.com/bskcorona-github"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-2xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 hover:scale-105 hover:shadow-xl"
          >
            <FiGithub className="w-6 h-6" />
            <span className="text-lg font-semibold">View More on GitHub</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
