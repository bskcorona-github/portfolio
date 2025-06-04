"use client";

import React from "react";
import { motion } from "framer-motion";

interface SplineErrorBoundaryState {
  hasError: boolean;
  error?: Error;
}

interface SplineErrorBoundaryProps {
  children: React.ReactNode;
  fallback?: React.ReactNode;
}

class SplineErrorBoundary extends React.Component<
  SplineErrorBoundaryProps,
  SplineErrorBoundaryState
> {
  constructor(props: SplineErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): SplineErrorBoundaryState {
    console.error("Spline Error Boundary caught an error:", error);
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error("Spline Error Boundary - Error details:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback;
      }

      return (
        <div className="flex flex-col items-center justify-center h-full text-center p-8 bg-gradient-to-br from-gray-900/20 to-black/40 backdrop-blur-sm">
          <motion.div
            className="w-32 h-32 bg-gradient-to-br from-blue-500/20 to-purple-600/20 rounded-full flex items-center justify-center mb-6"
            animate={{
              scale: [1, 1.1, 1],
              rotate: [0, 10, -10, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <div className="w-20 h-20 bg-gradient-to-tr from-blue-400 to-purple-500 rounded-full flex items-center justify-center">
              <svg
                width="40"
                height="40"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="text-white"
              >
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
              </svg>
            </div>
          </motion.div>
          <motion.p
            className="text-white/60 text-sm mb-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            3D体験は一時的に利用できません
          </motion.p>
          <motion.p
            className="text-white/40 text-xs"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            美しいアニメーションでサイトを彩ります✨
          </motion.p>
        </div>
      );
    }

    return this.props.children;
  }
}

export default SplineErrorBoundary;
