"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Navigation } from "@/components/ui/navigation";
import MatrixRain from "@/components/ui/matrix-code";

export default function NotFound() {
  return (
    <div className="relative min-h-screen bg-black overflow-hidden">
      <Navigation />

      {/* Matrix Code背景 - 赤色でエラー感を演出 */}
      <div className="fixed inset-0 z-0 opacity-30 pointer-events-none">
        <MatrixRain
          fontSize={16}
          color="#ef4444"
          characters="404ERRORNOTFOUNDページが見つかりません"
          fadeOpacity={0.05}
          speed={0.5}
        />
      </div>

      <div className="relative z-20 flex items-center justify-center min-h-screen px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <motion.h1
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-8xl md:text-9xl font-bold bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent mb-4"
          >
            404
          </motion.h1>
          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-2xl md:text-3xl font-semibold text-gray-300 mb-6"
          >
            ページが見つかりません
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="text-gray-400 mb-8 max-w-md mx-auto"
          >
            お探しのページは存在しないか、移動した可能性があります。
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            <Link
              href="/"
              className="inline-flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-cyan-600 to-blue-600 text-white rounded-2xl hover:from-cyan-700 hover:to-blue-700 transition-all duration-300 hover:scale-105 hover:shadow-xl"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                />
              </svg>
              <span>ホームに戻る</span>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
