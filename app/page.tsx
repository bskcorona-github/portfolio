"use client";

import React from "react";
import { HeroSection } from "@/components/ui/hero-odyssey";
import { Navigation } from "@/components/Navigation";

export default function Home() {
  return (
    <>
      {/* Skip to main content link */}
      {/* <a
        href="#main-content"
        className="skip-link"
        onClick={(e) => {
          e.preventDefault();
          document.getElementById("main-content")?.focus();
        }}
      >
        メインコンテンツにスキップ
      </a> */}

      <div className="relative w-full bg-black text-white overflow-hidden">
        {/* Navigation */}
        <header className="relative z-30 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <Navigation />
        </header>

        {/* Main Content */}
        <main
          id="main-content"
          className="focus:outline-none"
          tabIndex={-1}
          role="main"
          aria-label="ホームページメインコンテンツ"
        >
          <HeroSection />
        </main>
      </div>
    </>
  );
}
