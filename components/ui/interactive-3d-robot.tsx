"use client";

import React, { Suspense, useState, useEffect } from "react";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import SplineErrorBoundary from "./error-boundary";

interface InteractiveRobotSplineProps {
  scene: string;
  className?: string;
  disableSpline?: boolean;
}

interface LoadingSpinnerProps {
  size?: number;
  message?: string;
}

const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({
  size = 40,
  message = "3Dロボットを読み込み中...",
}) => (
  <div className="flex flex-col items-center justify-center h-full">
    <motion.div
      className="border-2 border-blue-500 border-t-transparent rounded-full"
      style={{ width: size, height: size }}
      animate={{ rotate: 360 }}
      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
      aria-hidden="true"
    />
    <p className="text-white/70 text-sm mt-4" aria-live="polite">
      {message}
    </p>
  </div>
);

const ErrorFallback: React.FC<{ error?: Error | null }> = ({ error }) => (
  <div className="flex flex-col items-center justify-center h-full text-center p-8">
    <div className="text-red-400 mb-4">
      <svg width="48" height="48" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 5h-2v6h2V7zm0 8h-2v2h2v-2z" />
      </svg>
    </div>
    <p className="text-white/70 text-sm mb-2">
      3Dロボットの読み込みに失敗しました
    </p>
    {error && <p className="text-red-400/70 text-xs">{error.message}</p>}
    <p className="text-white/50 text-xs mt-2">リロードして再試行してください</p>
  </div>
);

// 環境変数による制御
const isSplineEnabled =
  process.env.NODE_ENV === "development" ||
  process.env.NEXT_PUBLIC_ENABLE_SPLINE === "true";

// Next.js 14対応 - Error Boundaryで保護されたdynamic import
const SplineComponent = dynamic(() => import("@splinetool/react-spline"), {
  ssr: false,
  loading: () => <LoadingSpinner message="Splineライブラリを読み込み中..." />,
});

// 3Dロボットのプレースホルダーコンポーネント
const RobotPlaceholder: React.FC<{ reason?: string }> = ({
  reason = "メンテナンス中",
}) => (
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
      3Dロボットは現在{reason}です
    </motion.p>
    <motion.p
      className="text-white/40 text-xs"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1 }}
    >
      代わりにアニメーションでサイトを彩ります✨
    </motion.p>
  </div>
);

export const InteractiveRobotSpline: React.FC<InteractiveRobotSplineProps> = ({
  scene,
  className = "",
  disableSpline = false,
}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [error, setError] = useState<Error | null>(null);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const handleLoad = React.useCallback(() => {
    console.log("Spline scene loaded successfully");
    setIsLoading(false);
    setHasError(false);
  }, []);

  const handleError = React.useCallback((splineError: any) => {
    console.error("Spline scene error:", splineError);
    setIsLoading(false);
    setHasError(true);
    const errorObj =
      splineError instanceof Error
        ? splineError
        : new Error("Spline scene loading failed");
    setError(errorObj);
  }, []);

  // クライアントサイドでのみレンダリング
  if (!isMounted) {
    return (
      <div className={`relative ${className}`}>
        <div className="absolute inset-0 bg-black/20 backdrop-blur-sm flex items-center justify-center z-10">
          <LoadingSpinner message="クライアント環境を初期化中..." />
        </div>
      </div>
    );
  }

  // 環境変数またはpropsでSplineが無効化されている場合
  if (!isSplineEnabled || disableSpline) {
    const reason = !isSplineEnabled
      ? "本番環境で安定性のため無効化"
      : "メンテナンス中";
    return (
      <div className={`relative ${className}`}>
        <RobotPlaceholder reason={reason} />
      </div>
    );
  }

  return (
    <div
      className={`relative ${className}`}
      role="img"
      aria-label="3Dロボットアニメーション"
    >
      <SplineErrorBoundary>
        {/* Loading State */}
        {isLoading && !hasError && (
          <motion.div
            className="absolute inset-0 bg-black/20 backdrop-blur-sm flex items-center justify-center z-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <LoadingSpinner />
          </motion.div>
        )}

        {/* Error State */}
        {hasError && (
          <motion.div
            className="absolute inset-0 bg-black/20 backdrop-blur-sm flex items-center justify-center z-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <ErrorFallback error={error} />
          </motion.div>
        )}

        {/* Spline 3D Scene */}
        {!hasError && (
          <motion.div
            className="w-full h-full"
            initial={{ opacity: 0 }}
            animate={{ opacity: isLoading ? 0 : 1 }}
            transition={{ duration: 0.5 }}
          >
            <Suspense
              fallback={
                <LoadingSpinner message="Splineコンポーネントを準備中..." />
              }
            >
              <SplineComponent
                scene={scene}
                onLoad={handleLoad}
                onError={handleError}
                className="w-full h-full"
              />
            </Suspense>
          </motion.div>
        )}
      </SplineErrorBoundary>
    </div>
  );
};
