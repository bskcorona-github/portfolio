"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const Navigation: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (path: string) => {
    if (path === "/" && pathname === "/") return true;
    if (path !== "/" && pathname.startsWith(path)) return true;
    return false;
  };

  const navItems = [
    { href: "/", label: "Home", ariaLabel: "ホームページ" },
    {
      href: "/sections/experience",
      label: "Experience",
      ariaLabel: "経験・職歴",
    },
    {
      href: "/sections/projects",
      label: "Projects",
      ariaLabel: "プロジェクト",
    },
    { href: "/sections/skills", label: "Skills", ariaLabel: "技術スキル" },
  ];

  return (
    <>
      {/* Navigation */}
      <motion.nav
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="px-4 backdrop-blur-3xl bg-black/50 rounded-50 py-4 flex justify-between items-center relative z-50"
        role="navigation"
        aria-label="メインナビゲーション"
      >
        <div className="flex items-center">
          <Link
            href="/"
            className="text-2xl font-bold"
            aria-label="ホームに戻る"
          >
            <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center hover:scale-110 transition-transform duration-300">
              <span className="text-white font-bold">C</span>
            </div>
          </Link>
          <div className="hidden md:flex items-center space-x-6 ml-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                aria-label={item.ariaLabel}
                className={`px-4 py-2 text-sm transition-all duration-300 rounded-full relative ${
                  isActive(item.href)
                    ? "bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-white border border-blue-500/30"
                    : "hover:text-gray-300 hover:bg-white/10"
                }`}
              >
                {item.label}
                {isActive(item.href) && (
                  <motion.div
                    layoutId="activeIndicator"
                    className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-blue-400 rounded-full"
                    initial={false}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </Link>
            ))}
            <button
              className="px-4 py-2 text-sm hover:text-gray-300 transition-colors"
              aria-label="コンタクト"
            >
              Contact
            </button>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <a
            href="https://github.com/bskcorona-github"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:block px-4 py-2 text-sm hover:text-gray-300 transition-colors"
            aria-label="GitHubプロフィール（新しいタブで開く）"
          >
            GitHub
          </a>
          <button
            className="px-4 py-2 bg-gray-800/80 backdrop-blur-sm rounded-full text-sm hover:bg-gray-700/80 transition-colors"
            aria-label="ポートフォリオメニュー"
          >
            Portfolio
          </button>
          <button
            className="md:hidden p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="モバイルメニューを開く"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? (
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
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
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
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
      </motion.nav>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="md:hidden fixed inset-0 z-50 bg-black/95 backdrop-blur-lg"
          role="dialog"
          aria-modal="true"
          aria-label="モバイルナビゲーションメニュー"
        >
          <div className="flex flex-col items-center justify-center h-full space-y-6 text-lg">
            <button
              className="absolute top-6 right-6 p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-md"
              onClick={() => setMobileMenuOpen(false)}
              aria-label="メニューを閉じる"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
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
                aria-label={item.ariaLabel}
                className={`px-6 py-3 rounded-full transition-all duration-300 ${
                  isActive(item.href)
                    ? "bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-white border border-blue-500/30"
                    : "hover:bg-gray-800/50"
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <button className="px-6 py-3" aria-label="コンタクト">
              Contact
            </button>
            <a
              href="https://github.com/bskcorona-github"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3"
              aria-label="GitHubプロフィール（新しいタブで開く）"
            >
              GitHub
            </a>
            <button
              className="px-6 py-3 bg-gray-800/80 backdrop-blur-sm rounded-full"
              aria-label="ポートフォリオメニュー"
            >
              Portfolio
            </button>
          </div>
        </motion.div>
      )}
    </>
  );
};
