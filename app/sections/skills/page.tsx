"use client";

import React from "react";
import { Lightning } from "@/components/ui/hero-odyssey";
// import TechStackSection from "@/components/TechStackSection";
import { Navigation } from "@/components/Navigation";
import { InteractiveRobotSpline } from "@/components/ui/interactive-3d-robot";
import MatrixRain from "@/components/ui/matrix-code";
import { motion } from "framer-motion";

// 一時的なシンプルなスキルセクション
const SimpleTechStackSection = () => {
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
            🛠 <span className="gradient-text">Skills & Tools</span>
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            現代的なWeb開発に特化した技術スタックとツールセット
          </p>
        </motion.div>

        <div className="glass-effect rounded-3xl p-8">
          <h3 className="text-2xl font-bold text-white mb-8 text-center">
            技術スタック（テスト中）
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="text-center p-4 bg-white/10 rounded-lg">
              <div className="text-2xl mb-2">⚛️</div>
              <p className="text-white">React</p>
            </div>
            <div className="text-center p-4 bg-white/10 rounded-lg">
              <div className="text-2xl mb-2">🔷</div>
              <p className="text-white">TypeScript</p>
            </div>
            <div className="text-center p-4 bg-white/10 rounded-lg">
              <div className="text-2xl mb-2">▲</div>
              <p className="text-white">Next.js</p>
            </div>
            <div className="text-center p-4 bg-white/10 rounded-lg">
              <div className="text-2xl mb-2">🎨</div>
              <p className="text-white">Tailwind CSS</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default function SkillsPage() {
  const ROBOT_SCENE_URL =
    "https://prod.spline.design/PyzDhpQ9E5f1E3MT/scene.splinecode";

  return (
    <main className="relative min-h-screen bg-black text-white overflow-hidden">
      {/* 3D Robot Background */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
        className="fixed inset-0 z-0"
      >
        <InteractiveRobotSpline
          scene={ROBOT_SCENE_URL}
          className="absolute inset-0 w-full h-full"
        />
      </motion.div>

      {/* Lightning Background (50% opacity) */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        transition={{ duration: 1 }}
        className="fixed inset-0 z-10"
      >
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="absolute top-[55%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-gradient-to-b from-orange-500/10 to-red-600/5 blur-3xl"></div>
        <div className="absolute top-0 w-[100%] left-1/2 transform -translate-x-1/2 h-full">
          <Lightning
            hue={30}
            xOffset={0.3}
            speed={1.4}
            intensity={0.3}
            size={1.6}
          />
        </div>
        <div className="z-10 absolute top-[55%] left-1/2 transform -translate-x-1/2 w-[600px] h-[600px] backdrop-blur-3xl rounded-full bg-[radial-gradient(circle_at_25%_90%,_rgba(107,62,30,0.15)_15%,_rgba(0,0,0,0.2)_70%,_rgba(0,0,0,0.3)_100%)]"></div>
      </motion.div>

      {/* Matrix Code Background (30% opacity) */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.3 }}
        transition={{ duration: 2, delay: 1 }}
        className="fixed inset-0 z-15"
      >
        <MatrixRain
          fontSize={14}
          color="#f97316"
          characters="01SkillsTechStackJavaScriptTypeScriptReactVueAngularPythonJavaC++Go"
          fadeOpacity={0.05}
          speed={0.9}
        />
      </motion.div>

      {/* Navigation */}
      <div className="relative z-30 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <Navigation />
      </div>

      {/* Content with glassmorphism */}
      <div className="relative z-20 px-8 pb-8">
        <div className="backdrop-blur-lg bg-white/5 border border-white/10 rounded-3xl">
          <SimpleTechStackSection />
        </div>
      </div>
    </main>
  );
}
