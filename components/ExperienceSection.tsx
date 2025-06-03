"use client";

import React from "react";
import { motion } from "framer-motion";

const ExperienceSection = () => {
  const experiences = [
    {
      company: "株式会社りゅう",
      period: "2024年11月 ～ 現在",
      project: "Web試験の問題差し替え",
      description: "既存システムの試験問題更新および新規問題の差し替え",
      role: "開発メンバー (1名)",
      technologies: ["PHP (Laravel)", "MySQL", "Docker", "Git(Lab)", "Slack"],
      responsibilities: [
        "開発・実装",
        "テーブル新規追加",
        "単体テスト設計・実施",
      ],
    },
    {
      company: "ブロードバンドテクノロジー・コンサルティング株式会社",
      period: "2024年05月 ～ 2024年08月",
      project: "銀行のWebアプリケーションフロントエンド開発チーム",
      description:
        "銀行Webアプリフロントエンド開発チームに参画。障害対応・実装修正と点検要因として従事。",
      role: "メンバー (チーム7名 / プロジェクト全体約100名)",
      technologies: [
        "React",
        "TypeScript",
        "AWS CodeCommit",
        "VScode",
        "Gitlab",
      ],
      responsibilities: [
        "実装修正",
        "障害対応 (1日1～2件)",
        "各種点検 (画面、ボタン、文言、デザインガイド、設計書、URL遷移先、レスポンシブ、英語版表記)",
        "エビデンス作成",
      ],
    },
    {
      company: "T&Cテクノロジーズ株式会社",
      period: "2023年04月 ～ 2024年04月",
      project: "新CPaaS開発 / 通信企業顧客管理システム",
      description:
        "新CPaaSシステムの管理コンソール画面作成（主にユーザー管理画面のバックエンド担当）",
      role: "メンバー (チーム6名 / プロジェクト全体約60名)",
      technologies: [
        "Go (Echo)",
        "PostgreSQL",
        "VScode",
        "Docker",
        "Backlog",
        "Github",
        "Slack",
        "AWS",
      ],
      responsibilities: [
        "英語ドキュメント読解",
        "仕様書レビュー参加",
        "ユースケース文書作成",
        "詳細設計書作成",
        "OpenAPI定義作成（フロント側含む40個程）",
        "API開発",
        "自動テストコード作成",
        "リファクタリング",
      ],
    },
  ];

  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold text-white mb-6">
            💼 <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            これまでの職務経歴とプロジェクト実績
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 md:left-1/2 transform md:-translate-x-px top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-purple-500"></div>

          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className={`relative flex items-center mb-16 ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              {/* Timeline Dot */}
              <div className="absolute left-8 md:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-500 rounded-full border-4 border-slate-900 z-10"></div>

              {/* Content Card */}
              <div
                className={`w-full md:w-5/12 ml-16 md:ml-0 ${
                  index % 2 === 0 ? "md:pr-8" : "md:pl-8"
                }`}
              >
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="glass-effect rounded-2xl p-8 hover:shadow-2xl transition-all duration-300"
                >
                  <div className="mb-4">
                    <span className="inline-block px-3 py-1 bg-blue-500/20 text-blue-300 text-sm rounded-full mb-2">
                      {exp.period}
                    </span>
                    <h3 className="text-2xl font-bold text-white mb-2">
                      {exp.company}
                    </h3>
                    <h4 className="text-lg font-semibold text-blue-200 mb-3">
                      {exp.project}
                    </h4>
                    <p className="text-slate-300 mb-4">{exp.description}</p>
                    <p className="text-sm text-purple-300 mb-4">{exp.role}</p>
                  </div>

                  <div className="mb-4">
                    <h5 className="text-white font-semibold mb-2">
                      主な担当業務:
                    </h5>
                    <ul className="space-y-1">
                      {exp.responsibilities.map((resp, idx) => (
                        <li
                          key={idx}
                          className="text-slate-300 text-sm flex items-start"
                        >
                          <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                          {resp}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h5 className="text-white font-semibold mb-2">使用技術:</h5>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 bg-slate-700/50 text-slate-300 text-xs rounded-full border border-slate-600"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
