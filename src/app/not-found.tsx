"use client";

import Link from "next/link";
import { Navigation } from "@/components/ui/navigation";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-black flex flex-col">
      <Navigation />

      <div className="flex-1 flex items-center justify-center px-4">
        <div className="text-center">
          <h1 className="text-6xl font-bold text-white mb-4">404</h1>
          <h2 className="text-2xl font-semibold text-gray-300 mb-6">
            ページが見つかりません
          </h2>
          <p className="text-gray-400 mb-8 max-w-md">
            お探しのページは存在しないか、移動した可能性があります。
          </p>
          <Link
            href="/"
            className="inline-flex items-center space-x-2 px-6 py-3 bg-cyan-600 text-white rounded-lg hover:bg-cyan-700 transition-colors"
          >
            <span>ホームに戻る</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
