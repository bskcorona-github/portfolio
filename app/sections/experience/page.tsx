"use client";

import React from "react";
import { Lightning } from "@/components/ui/hero-odyssey";
import ExperienceSection from "@/components/ExperienceSection";
import { Navigation } from "@/components/Navigation";
import { InteractiveRobotSpline } from "@/components/ui/interactive-3d-robot";
import MatrixRain from "@/components/ui/matrix-code";
import { motion } from "framer-motion";

export default function ExperiencePage() {
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
          disableSpline={true}
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
        <div className="absolute top-[55%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-gradient-to-b from-purple-500/10 to-blue-600/5 blur-3xl"></div>
        <div className="absolute top-0 w-[100%] left-1/2 transform -translate-x-1/2 h-full">
          <Lightning
            hue={280}
            xOffset={0.2}
            speed={1.2}
            intensity={0.3}
            size={1.8}
          />
        </div>
        <div className="z-10 absolute top-[55%] left-1/2 transform -translate-x-1/2 w-[600px] h-[600px] backdrop-blur-3xl rounded-full bg-[radial-gradient(circle_at_25%_90%,_rgba(107,30,123,0.15)_15%,_rgba(0,0,0,0.2)_70%,_rgba(0,0,0,0.3)_100%)]"></div>
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
          color="#8b5cf6"
          characters="01ExperienceWorkSkillsDevOpsJavaScriptTypeScriptReactNext.js"
          fadeOpacity={0.05}
          speed={0.6}
        />
      </motion.div>

      {/* Navigation */}
      <div className="relative z-30 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <Navigation />
      </div>

      {/* Content with glassmorphism */}
      <div className="relative z-20 px-8 pb-8">
        <div className="backdrop-blur-lg bg-white/5 border border-white/10 rounded-3xl">
          <ExperienceSection />
        </div>
      </div>
    </main>
  );
}
