"use client";

import React from "react";
import { InteractiveRobotSpline } from "@/components/ui/interactive-3d-robot";
import { HeroSection } from "@/components/ui/hero-odyssey";
import { FeaturesSection } from "@/components/ui/features-section";
import { AboutSection } from "@/components/ui/about-section";
import { CTASection } from "@/components/ui/cta-section";
import { Navigation } from "@/components/ui/navigation";
import MatrixRain from "@/components/ui/matrix-code";

export default function HomePage() {
  const ROBOT_SCENE_URL =
    "https://prod.spline.design/PyzDhpQ9E5f1E3MT/scene.splinecode";

  return (
    <div className="relative bg-black overflow-hidden">
      {/* グローバルナビゲーション */}
      <Navigation />

      {/* Matrix Code背景 - 最背面（50%透過） - 固定 */}
      <div className="fixed inset-0 z-0 opacity-50">
        <MatrixRain
          fontSize={16}
          color="#00ff00"
          characters="01アカサタナハマヤラワンイキシチニヒミリヰケセテネヘメレエコソトノホモロオクスツヌフムルウ"
          fadeOpacity={0.05}
          speed={0.8}
        />
      </div>

      {/* 3Dロボット中間層 - 固定 */}
      <div className="fixed inset-0 z-10">
        <InteractiveRobotSpline
          scene={ROBOT_SCENE_URL}
          className="w-full h-full"
        />
      </div>

      {/* スクロール可能なコンテンツ層 */}
      <div className="relative z-20 bg-transparent">
        {/* Hero Odysseyセクション - 最初の画面 */}
        <div className="min-h-screen">
          <HeroSection />
        </div>

        {/* 追加コンテンツセクション - スクロール時に表示 */}
        <div className="relative bg-gradient-to-b from-black/0 via-black/80 to-black/95">
          <FeaturesSection />
          <AboutSection />
          <CTASection />

          {/* フッター */}
          <footer className="relative py-12 px-4 sm:px-6 lg:px-8 text-center border-t border-white/10">
            <div className="max-w-4xl mx-auto">
              <div className="text-gray-400 text-sm">
                <p className="mb-2">© 2024 Portfolio. All rights reserved.</p>
                <p>Built with Next.js, WebGL, Spline 3D, and lots of ❤️</p>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
}
