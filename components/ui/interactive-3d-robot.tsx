"use client";

import { Suspense } from "react";
import dynamic from "next/dynamic";

interface InteractiveRobotSplineProps {
  scene: string;
  className?: string;
}

// シンプルなローディング表示
const LoadingFallback = ({ className }: { className?: string }) => (
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
    </div>
  </div>
);

// Magic Website風のシンプルなSpline統合
const Spline = dynamic(() => import("@splinetool/react-spline"), {
  ssr: false,
  loading: () => <LoadingFallback />,
});

export function InteractiveRobotSpline({
  scene,
  className,
}: InteractiveRobotSplineProps) {
  return (
    <div className={className}>
      <Suspense fallback={<LoadingFallback />}>
        <Spline scene={scene} />
      </Suspense>
    </div>
  );
}
