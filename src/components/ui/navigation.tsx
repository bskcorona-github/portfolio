"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const Navigation: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (path: string) => pathname === path;

  const navItems = [
    { href: "/", label: "ホーム" },
    { href: "/experience", label: "職務経歴" },
    { href: "/projects", label: "プロジェクト" },
    { href: "/skills", label: "スキル" },
    { href: "/contact", label: "お問い合わせ" },
  ];

  return (
    <>
      {/* デスクトップ・モバイル共通ナビゲーション */}
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <div className="backdrop-blur-xl bg-black/20 rounded-full py-4 flex justify-between items-center">
          {/* ロゴ */}
          <div className="flex items-center">
            <Link
              href="/"
              className="flex items-center text-2xl font-bold hover:opacity-80 transition-opacity"
            >
              <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                <path
                  d="M20 5L5 20L20 35L35 20L20 5Z"
                  stroke="white"
                  strokeWidth="2"
                />
              </svg>
              <span className="ml-2 text-white font-bold">Kinjo_Tatsuro</span>
            </Link>

            {/* デスクトップナビゲーション */}
            <div className="hidden md:flex items-center space-x-6 ml-8">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`px-4 py-2 text-sm transition-colors rounded-full ${
                    isActive(item.href)
                      ? "bg-gray-800/50 text-white"
                      : "text-gray-300 hover:text-white hover:bg-gray-800/30"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          {/* モバイルメニューボタン */}
          <div className="flex items-center">
            <button
              className="md:hidden p-2 rounded-md focus:outline-none text-white"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="メニューを開閉"
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-menu"
            >
              {mobileMenuOpen ? (
                <svg
                  className="h-6 w-6 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="h-6 w-6 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </motion.div>

      {/* モバイルメニュー */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="md:hidden fixed inset-0 z-50 bg-black/50 backdrop-blur-lg"
          role="dialog"
          aria-modal="true"
          id="mobile-menu"
        >
          <div className="flex flex-col items-center justify-center h-full space-y-6 text-lg">
            <button
              className="absolute top-6 right-6 p-2 text-white"
              onClick={() => setMobileMenuOpen(false)}
            >
              <svg
                className="h-6 w-6 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`px-6 py-3 rounded-full transition-colors ${
                  isActive(item.href)
                    ? "bg-gray-800/50 text-white"
                    : "text-gray-300 hover:text-white hover:bg-gray-800/30"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </motion.div>
      )}
    </>
  );
};
