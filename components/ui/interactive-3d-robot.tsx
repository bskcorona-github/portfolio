"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";

interface InteractiveRobotSplineProps {
  scene: string;
  className?: string;
}

// より堅牢なフォールバックコンポーネント
const FallbackComponent = ({ className }: { className?: string }) => (
  <div
    className={`w-full h-full flex items-center justify-center bg-gradient-to-br from-purple-900/20 to-blue-900/20 backdrop-blur-sm text-white ${className}`}
  >
    <div className="flex flex-col items-center justify-center space-y-4">
      <div className="w-24 h-24 border-4 border-blue-500/30 border-t-blue-500 rounded-full animate-spin"></div>
      <div className="text-center space-y-2">
        <h3 className="text-lg font-semibold text-white/90">
          3D Experience Loading
        </h3>
        <p className="text-sm text-white/60">
          革新的な3Dロボット体験を準備中...
        </p>
      </div>
      <div className="flex space-x-1">
        <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
        <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse delay-100"></div>
        <div className="w-2 h-2 bg-cyan-500 rounded-full animate-pulse delay-200"></div>
      </div>
    </div>
  </div>
);

// 安全なSplineコンポーネント
const SafeSplineComponent = dynamic(
  async () => {
    try {
      const module = await import("@splinetool/react-spline");
      return module.default;
    } catch (error) {
      console.warn("Spline module failed to load:", error);
      // フォールバックコンポーネントを返す
      return () => <FallbackComponent />;
    }
  },
  {
    ssr: false,
    loading: () => <FallbackComponent />,
  }
);

export function InteractiveRobotSpline({
  scene,
  className,
}: InteractiveRobotSplineProps) {
  const [isMounted, setIsMounted] = useState(false);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    setIsMounted(true);

    // グローバルエラーハンドラー
    const handleError = (event: ErrorEvent) => {
      if (
        event.message?.includes("Super constructor null") ||
        event.message?.includes("spline") ||
        event.filename?.includes("spline")
      ) {
        console.warn(
          "Spline error detected, switching to fallback:",
          event.message
        );
        setHasError(true);
        event.preventDefault();
      }
    };

    const handleUnhandledRejection = (event: PromiseRejectionEvent) => {
      if (
        event.reason?.message?.includes("spline") ||
        event.reason?.stack?.includes("spline")
      ) {
        console.warn("Spline promise rejection detected:", event.reason);
        setHasError(true);
        event.preventDefault();
      }
    };

    window.addEventListener("error", handleError);
    window.addEventListener("unhandledrejection", handleUnhandledRejection);

    return () => {
      window.removeEventListener("error", handleError);
      window.removeEventListener(
        "unhandledrejection",
        handleUnhandledRejection
      );
    };
  }, []);

  // サーバーサイドまたは初期化前の状態
  if (!isMounted) {
    return <FallbackComponent className={className} />;
  }

  // エラーが発生した場合のフォールバック
  if (hasError) {
    return <FallbackComponent className={className} />;
  }

  return (
    <div className={className}>
      <SafeSplineComponent scene={scene} onError={() => setHasError(true)} />
    </div>
  );
}
