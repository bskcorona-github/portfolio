"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const HeroSection = () => {
  const [text, setText] = useState("");
  const fullText = "Hi, I'm Corona 👋";
  const [showSubtitle, setShowSubtitle] = useState(false);

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index < fullText.length) {
        setText(fullText.slice(0, index + 1));
        index++;
      } else {
        clearInterval(timer);
        setShowSubtitle(true);
      }
    }, 100);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-slate-900/20"></div>
        <div className="absolute top-10 left-10 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-pink-500/10 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="glass-effect rounded-3xl p-12 mb-8"
        >
          <h1 className="text-6xl md:text-8xl font-bold text-white mb-6">
            {text}
            <span className="inline-block w-1 h-16 bg-blue-400 ml-2 animate-pulse"></span>
          </h1>

          {showSubtitle && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <p className="text-2xl md:text-3xl text-blue-200 mb-8 font-light">
                <span className="gradient-text font-semibold">
                  Full Stack Engineer
                </span>{" "}
                specializing in modern web development
              </p>
              <p className="text-lg text-slate-300 mb-12 max-w-2xl mx-auto">
                まだ初心者ですが、革新的なWebアプリケーションを構築し、AIの統合による優れたユーザーエクスペリエンスを探求しています。
              </p>

              {/* GitHub Stats Preview */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1, duration: 0.5 }}
                  className="stats-card text-center"
                >
                  <div className="text-3xl font-bold text-blue-400">310</div>
                  <div className="text-sm text-slate-400">Total Commits</div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1.2, duration: 0.5 }}
                  className="stats-card text-center"
                >
                  <div className="text-3xl font-bold text-green-400">4</div>
                  <div className="text-sm text-slate-400">Total PRs</div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1.4, duration: 0.5 }}
                  className="stats-card text-center"
                >
                  <div className="text-3xl font-bold text-yellow-400">60</div>
                  <div className="text-sm text-slate-400">Repositories</div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1.6, duration: 0.5 }}
                  className="stats-card text-center"
                >
                  <div className="text-3xl font-bold text-purple-400">3</div>
                  <div className="text-sm text-slate-400">Issues</div>
                </motion.div>
              </div>
            </motion.div>
          )}
        </motion.div>

        {/* Scroll Indicator */}
        {showSubtitle && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2, duration: 0.5 }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          >
            <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-white rounded-full mt-2 animate-bounce"></div>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default HeroSection;
