"use client";

import React from "react";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">Portfolio</h1>
        <p className="text-xl text-gray-300">
          ポートフォリオサイトが正常に動作しています
        </p>
        <div className="mt-8 space-y-4">
          <a
            href="/experience"
            className="block px-6 py-3 bg-cyan-600 text-white rounded-lg hover:bg-cyan-700 transition-colors"
          >
            職務経歴を見る
          </a>
          <a
            href="/projects"
            className="block px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            プロジェクトを見る
          </a>
          <a
            href="/skills"
            className="block px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
          >
            スキルを見る
          </a>
        </div>
      </div>
    </div>
  );
}
