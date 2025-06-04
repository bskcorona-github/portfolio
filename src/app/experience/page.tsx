"use client";

import React from "react";
import { motion } from "framer-motion";
import { InteractiveRobotSpline } from "@/components/ui/interactive-3d-robot";
import { Navigation } from "@/components/ui/navigation";
import MatrixRain from "@/components/ui/matrix-code";
import { Card } from "@/components/ui/card";

export default function ExperiencePage() {
  const ROBOT_SCENE_URL =
    "https://prod.spline.design/PyzDhpQ9E5f1E3MT/scene.splinecode";

  const experiences = [
    {
      company: "株式会社りゅう",
      period: "2024年11月 ～ 現在",
      project: "学習管理システムECサイト改修・診断テスト機能追加",
      description:
        "オンライン学習システムのECサイトに実力診断テスト販売機能を新規追加。6種類の購入パターンに対応したECサイト全体の大規模改修プロジェクト",
      role: "開発メンバー (1名)",
      technologies: ["PHP (Laravel)", "MySQL", "Docker", "Git(Lab)", "Slack"],
      responsibilities: [
        "ECサイト購入フロー改修（6種類の購入パターン対応）",
        "API改修・新規開発（購入データ送信・受信処理）",
        "販売期間設定機能の新規開発（管理画面）",
        "各種メール・画面の文言・UI改修",
        "受注管理機能の拡張（診断テスト対応）",
        "Web試験問題差し替えシステムの開発・実装",
        "テーブル新規追加・既存データ整合性チェック",
        "単体テスト設計・実施",
        "決済システム3Dセキュア義務化対応（パラメータ仕様確認・API改修）",
        "個人情報同意機能の実装（確認画面チェックボックス追加・バリデーション）",
        "決済連携方式調査・テスト環境での動作確認・見積作成",
        "Figmaデザインを元にしたコーディング・実装",
        "古いHPのリニューアル制作・レスポンシブ対応",
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
    <div className="relative bg-black overflow-hidden min-h-screen">
      {/* ナビゲーション */}
      <Navigation />

      {/* Matrix Code背景 - 最背面（30%透過） - 固定 */}
      <div className="fixed inset-0 z-0 opacity-30">
        <MatrixRain
          fontSize={14}
          color="#8b5cf6"
          characters="01ExperienceWorkSkillsDevOpsJavaScriptTypeScriptReactNext.js"
          fadeOpacity={0.05}
          speed={0.6}
        />
      </div>

      {/* 3Dロボット中間層 - 固定 */}
      <div className="fixed inset-0 z-10 opacity-40">
        <InteractiveRobotSpline
          scene={ROBOT_SCENE_URL}
          className="w-full h-full"
        />
      </div>

      {/* コンテンツ層 */}
      <div className="relative z-20 pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* ヘッダー */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl font-bold text-white mb-6">
              💼{" "}
              <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                Experience
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              これまでの職務経歴とプロジェクト実績
            </p>
          </motion.div>

          {/* タイムライン */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 md:left-1/2 transform md:-translate-x-px top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-purple-500"></div>

            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 + index * 0.3 }}
                className={`relative flex items-center mb-16 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-8 md:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-500 rounded-full border-4 border-black z-10"></div>

                {/* Content Card */}
                <div
                  className={`w-full md:w-5/12 ml-16 md:ml-0 ${
                    index % 2 === 0 ? "md:pr-8" : "md:pl-8"
                  }`}
                >
                  <Card className="p-8 bg-black/40 backdrop-blur-lg border border-white/10 hover:bg-black/60 transition-all duration-300">
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
                      <p className="text-gray-300 mb-4">{exp.description}</p>
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
                            className="text-gray-300 text-sm flex items-start"
                          >
                            <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                            {resp}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h5 className="text-white font-semibold mb-2">
                        使用技術:
                      </h5>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech, idx) => (
                          <span
                            key={idx}
                            className="px-3 py-1 bg-white/10 text-gray-300 text-xs rounded-full border border-white/20"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </Card>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
