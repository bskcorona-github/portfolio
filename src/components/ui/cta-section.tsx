"use client";

import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Github, Mail, ExternalLink, Rocket } from "lucide-react";

interface CTAButtonProps {
  href?: string;
  onClick?: () => void;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outline";
  icon?: React.ReactNode;
  delay?: number;
}

const CTAButton = ({
  href,
  onClick,
  children,
  variant = "primary",
  icon,
  delay = 0,
}: CTAButtonProps) => {
  const buttonVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        delay,
        ease: "easeOut",
      },
    },
  };

  const baseClasses =
    "group relative px-8 py-4 rounded-full font-medium transition-all duration-300 flex items-center gap-3 hover:scale-105";

  const variantClasses = {
    primary:
      "bg-blue-500/20 hover:bg-blue-500/30 text-blue-400 border border-blue-500/40 hover:border-blue-500/60",
    secondary:
      "bg-purple-500/20 hover:bg-purple-500/30 text-purple-400 border border-purple-500/40 hover:border-purple-500/60",
    outline:
      "bg-white/5 hover:bg-white/10 text-white border border-white/20 hover:border-white/40",
  };

  const classes = `${baseClasses} ${variantClasses[variant]}`;

  const content = (
    <motion.button
      variants={buttonVariants}
      className={classes}
      onClick={onClick}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {icon && (
        <span className="transition-transform duration-300 group-hover:translate-x-1">
          {icon}
        </span>
      )}
      <span>{children}</span>
    </motion.button>
  );

  if (href) {
    return (
      <motion.a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        variants={buttonVariants}
        className="inline-block"
      >
        <div className={classes}>
          {icon && (
            <span className="transition-transform duration-300 group-hover:translate-x-1">
              {icon}
            </span>
          )}
          <span>{children}</span>
        </div>
      </motion.a>
    );
  }

  return content;
};

export const CTASection: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-transparent">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-light text-white mb-6">
            今すぐ始めよう
          </h2>
          <p className="text-gray-400 text-xl max-w-2xl mx-auto">
            Magic MCPの革新的な体験を今すぐお試しください。
            <br />
            あなたのプロジェクトに新しい可能性を。
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16"
        >
          <CTAButton
            href="https://github.com/bskcorona-github/magic-website"
            variant="primary"
            icon={<Github className="size-5" />}
            delay={0}
          >
            GitHubで見る
          </CTAButton>

          <CTAButton
            onClick={scrollToTop}
            variant="secondary"
            icon={<Rocket className="size-5" />}
            delay={0.1}
          >
            体験を再開
          </CTAButton>

          <CTAButton
            href="mailto:contact@magic-mcp.com"
            variant="outline"
            icon={<Mail className="size-5" />}
            delay={0.2}
          >
            お問い合わせ
          </CTAButton>

          <CTAButton
            href="https://magic-website-p96o340vl-bsk-coronas-projects.vercel.app"
            variant="outline"
            icon={<ExternalLink className="size-5" />}
            delay={0.3}
          >
            ライブデモ
          </CTAButton>
        </motion.div>

        {/* 最終メッセージカード */}
        <motion.div
          initial={{ y: 50, opacity: 0, scale: 0.95 }}
          whileInView={{ y: 0, opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <Card className="relative backdrop-blur-xl bg-white/5 border-white/10 max-w-2xl mx-auto">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-600/10 rounded-lg"></div>
            <CardContent className="p-8">
              <div className="text-lg text-gray-300 mb-4">
                Magic MCPプロジェクトは、
              </div>
              <div className="text-2xl font-light text-white mb-4">
                テクノロジーとクリエイティビティの融合
              </div>
              <div className="text-gray-400">
                を通じて、Webの新しい可能性を探求し続けています。
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* 背景装飾 */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] opacity-5 pointer-events-none">
          <div className="w-full h-full rounded-full bg-gradient-to-b from-blue-500/20 to-purple-600/20 blur-3xl"></div>
        </div>
      </div>
    </section>
  );
};
