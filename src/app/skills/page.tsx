"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { InteractiveRobotSpline } from "@/components/ui/interactive-3d-robot";
import { Navigation } from "@/components/ui/navigation";
import MatrixRain from "@/components/ui/matrix-code";
import { Card } from "@/components/ui/card";

// React Icons imports
import {
  SiTypescript,
  SiJavascript,
  SiPython,
  SiReact,
  SiNextdotjs,
  SiVuedotjs,
  SiNuxtdotjs,
  SiGo,
  SiPhp,
  SiLaravel,
  SiExpress,
  SiMui,
  SiMysql,
  SiPostgresql,
  SiMongodb,
  SiAmazon,
  SiAwslambda,
  SiVercel,
  SiDocker,
  SiGit,
  SiGithub,
  SiGitlab,
  SiJenkins,
  SiSonarqube,
  SiSlack,
  SiNotion,
  SiFigma,
  SiTailwindcss,
  SiPrisma,
  SiDiscord,
  SiUbuntu,
  SiPostman,
  SiGoogledrive,
} from "react-icons/si";
import { FaDatabase, FaServer, FaRobot } from "react-icons/fa";
import { VscCode } from "react-icons/vsc";
import { DiMsqlServer } from "react-icons/di";
import { MdWork, MdChat, MdGroup } from "react-icons/md";

export default function SkillsPage() {
  const [activeCategory, setActiveCategory] = useState("all");

  const ROBOT_SCENE_URL =
    "https://prod.spline.design/PyzDhpQ9E5f1E3MT/scene.splinecode";

  // プログラミング言語使用統計
  const languageStats = [
    { name: "TypeScript", percentage: 55.24, color: "#3178c6" },
    { name: "JavaScript", percentage: 23.79, color: "#f7df1e" },
    { name: "Python", percentage: 8.23, color: "#3776ab" },
    { name: "HTML", percentage: 5.01, color: "#e34f26" },
    { name: "CSS", percentage: 3.98, color: "#1572b6" },
    { name: "Vue", percentage: 3.76, color: "#4fc08d" },
  ];

  // 技術スタック詳細
  const skillCategories = [
    {
      id: "languages",
      name: "Languages & Frameworks",
      icon: "💻",
      skills: [
        { name: "TypeScript", icon: SiTypescript, color: "#3178c6" },
        { name: "JavaScript", icon: SiJavascript, color: "#f7df1e" },
        { name: "Python", icon: SiPython, color: "#3776ab" },
        { name: "React", icon: SiReact, color: "#61dafb" },
        { name: "Next.js", icon: SiNextdotjs, color: "#000000" },
        { name: "Vue.js", icon: SiVuedotjs, color: "#4fc08d" },
        { name: "Nuxt.js", icon: SiNuxtdotjs, color: "#00dc82" },
        { name: "Go", icon: SiGo, color: "#00add8" },
        { name: "PHP", icon: SiPhp, color: "#777bb4" },
        { name: "Laravel", icon: SiLaravel, color: "#ff2d20" },
        { name: "Express.js", icon: SiExpress, color: "#000000" },
        { name: "Material UI", icon: SiMui, color: "#007fff" },
        { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06b6d4" },
      ],
    },
    {
      id: "databases",
      name: "Databases",
      icon: "🗄️",
      skills: [
        { name: "MySQL", icon: SiMysql, color: "#4479a1" },
        { name: "PostgreSQL", icon: SiPostgresql, color: "#336791" },
        { name: "MongoDB", icon: SiMongodb, color: "#47a248" },
        { name: "SQL Server", icon: DiMsqlServer, color: "#cc2927" },
        { name: "Prisma", icon: SiPrisma, color: "#2d3748" },
        { name: "Redis", icon: FaDatabase, color: "#dc382d" },
        { name: "DBeaver", icon: FaDatabase, color: "#372e2e" },
        { name: "HeidiSQL", icon: FaDatabase, color: "#4b8bbe" },
      ],
    },
    {
      id: "cloud",
      name: "Cloud Services",
      icon: "☁️",
      skills: [
        { name: "AWS", icon: SiAmazon, color: "#ff9900" },
        { name: "AWS Lambda", icon: SiAwslambda, color: "#ff9900" },
        { name: "Vercel", icon: SiVercel, color: "#000000" },
        { name: "Docker", icon: SiDocker, color: "#2496ed" },
        { name: "SonarQube", icon: SiSonarqube, color: "#4e9bcd" },
        { name: "Jenkins", icon: SiJenkins, color: "#d33833" },
        { name: "Google Drive", icon: SiGoogledrive, color: "#4285f4" },
        { name: "MCP Server", icon: FaServer, color: "#6366f1" },
      ],
    },
    {
      id: "tools",
      name: "Development Tools",
      icon: "🛠️",
      skills: [
        { name: "VS Code", icon: VscCode, color: "#007acc" },
        { name: "Git", icon: SiGit, color: "#f05032" },
        { name: "Postman", icon: SiPostman, color: "#ff6c37" },
        { name: "Figma", icon: SiFigma, color: "#f24e1e" },
        { name: "Ubuntu", icon: SiUbuntu, color: "#e95420" },
      ],
    },
    {
      id: "version-control",
      name: "Version Control",
      icon: "📝",
      skills: [
        { name: "Git", icon: SiGit, color: "#f05032" },
        { name: "GitHub", icon: SiGithub, color: "#181717" },
        { name: "GitLab", icon: SiGitlab, color: "#fc6d26" },
        { name: "Sourcetree", icon: SiGit, color: "#0052cc" },
      ],
    },
    {
      id: "ci-cd",
      name: "CI/CD",
      icon: "⚙️",
      skills: [
        { name: "Jenkins", icon: SiJenkins, color: "#d33833" },
        { name: "GitHub Actions", icon: SiGithub, color: "#2088ff" },
      ],
    },
    {
      id: "project-management",
      name: "Project Management",
      icon: "📊",
      skills: [
        { name: "Redmine", icon: MdWork, color: "#b32025" },
        { name: "Backlog", icon: MdWork, color: "#6ab04c" },
        { name: "Chatwork", icon: MdChat, color: "#f37529" },
        { name: "Microsoft Teams", icon: MdGroup, color: "#6264a7" },
        { name: "TeamSpirit", icon: MdWork, color: "#00a0dc" },
      ],
    },
    {
      id: "ai-design",
      name: "AI & Design Tools",
      icon: "🎨",
      skills: [
        { name: "Claude", icon: FaRobot, color: "#ff6b35" },
        { name: "Figma", icon: SiFigma, color: "#f24e1e" },
        { name: "Notion", icon: SiNotion, color: "#000000" },
      ],
    },
    {
      id: "other-tools",
      name: "Other Tools",
      icon: "🔧",
      skills: [
        { name: "Slack", icon: SiSlack, color: "#4a154b" },
        { name: "Discord", icon: SiDiscord, color: "#5865f2" },
        { name: "Postman", icon: SiPostman, color: "#ff6c37" },
      ],
    },
  ];

  const allSkills = skillCategories.flatMap((category) => category.skills);
  const totalSkills = allSkills.length;

  const filteredCategories =
    activeCategory === "all"
      ? skillCategories
      : skillCategories.filter((category) => category.id === activeCategory);

  const categoryButtons = [
    { id: "all", name: "All Skills", count: totalSkills },
    ...skillCategories.map((cat) => ({
      id: cat.id,
      name: cat.name,
      count: cat.skills.length,
    })),
  ];

  return (
    <div className="relative bg-black overflow-hidden min-h-screen">
      {/* ナビゲーション */}
      <Navigation />

      {/* Matrix Code背景 - 最背面（30%透過） - 固定 */}
      <div className="fixed inset-0 z-0 opacity-30">
        <MatrixRain
          fontSize={14}
          color="#06b6d4"
          characters="01SkillsTypeScriptJavaScriptReactPythonAWSDockerGitHubCloudDev"
          fadeOpacity={0.05}
          speed={0.8}
        />
      </div>

      {/* 3Dロボット中間層 - 固定 */}
      <div className="fixed inset-0 z-10 opacity-40">
        <InteractiveRobotSpline
          scene={ROBOT_SCENE_URL}
          className="w-full h-full"
        />
      </div>

      {/* コンテンツ層 */}
      <div className="relative z-20 pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* ヘッダー */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl font-bold text-white mb-6">
              🚀{" "}
              <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                Skills & Technologies
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              これまでに習得した技術スタックとプログラミング言語の使用実績
            </p>
            <div className="mt-4 text-cyan-300 text-lg font-semibold">
              {totalSkills}+ Technologies
            </div>
          </motion.div>

          {/* プログラミング言語使用統計 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-16"
          >
            <Card className="p-8 bg-black/40 backdrop-blur-lg border border-white/10">
              <h2 className="text-2xl font-bold text-white mb-6 text-center">
                📊 プログラミング言語使用統計
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {languageStats.map((lang, index) => (
                  <motion.div
                    key={lang.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                    className="text-center"
                  >
                    <div className="mb-3">
                      <span className="text-white font-semibold text-lg">
                        {lang.name}
                      </span>
                    </div>
                    <div className="relative h-24 w-24 mx-auto mb-2">
                      <svg className="w-full h-full transform -rotate-90">
                        <circle
                          cx="48"
                          cy="48"
                          r="40"
                          stroke="rgba(255,255,255,0.1)"
                          strokeWidth="8"
                          fill="none"
                        />
                        <circle
                          cx="48"
                          cy="48"
                          r="40"
                          stroke={lang.color}
                          strokeWidth="8"
                          fill="none"
                          strokeLinecap="round"
                          strokeDasharray={`${2 * Math.PI * 40}`}
                          strokeDashoffset={`${
                            2 * Math.PI * 40 * (1 - lang.percentage / 100)
                          }`}
                          className="transition-all duration-1000 ease-out"
                        />
                      </svg>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-white font-bold text-sm">
                          {lang.percentage}%
                        </span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </Card>
          </motion.div>

          {/* Filter Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mb-12"
          >
            <div className="flex flex-wrap justify-center gap-3 mb-8">
              {categoryButtons.map((button) => (
                <button
                  key={button.id}
                  onClick={() => setActiveCategory(button.id)}
                  className={`px-4 py-2 rounded-full text-sm transition-all duration-300 ${
                    activeCategory === button.id
                      ? "bg-cyan-500 text-white shadow-lg"
                      : "bg-white/10 text-gray-300 hover:bg-white/20"
                  }`}
                >
                  {button.name} ({button.count})
                </button>
              ))}
            </div>
          </motion.div>

          {/* Skills Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {filteredCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 + categoryIndex * 0.1 }}
                className="group"
              >
                <Card className="h-full p-6 bg-black/40 backdrop-blur-lg border border-white/10 hover:bg-black/60 transition-all duration-300">
                  {/* Category Header */}
                  <div className="flex items-center mb-6">
                    <span className="text-3xl mr-3">{category.icon}</span>
                    <div>
                      <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                        {category.name}
                      </h3>
                      <p className="text-gray-400 text-sm">
                        {category.skills.length} technologies
                      </p>
                    </div>
                  </div>

                  {/* Skills */}
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, index) => {
                      const IconComponent = skill.icon;
                      return (
                        <motion.div
                          key={skill.name}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{
                            duration: 0.3,
                            delay: 0.8 + categoryIndex * 0.1 + index * 0.05,
                          }}
                          className="flex items-center px-3 py-1.5 bg-white/10 text-gray-300 text-sm rounded-full border border-white/20 hover:bg-cyan-500/20 hover:text-cyan-300 hover:border-cyan-400/50 transition-all duration-300 cursor-default"
                        >
                          <IconComponent
                            className="mr-2 text-base"
                            style={{ color: skill.color }}
                          />
                          <span>{skill.name}</span>
                        </motion.div>
                      );
                    })}
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* GitHub Profile Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-center mt-16"
          >
            <Card className="inline-block p-8 bg-black/40 backdrop-blur-lg border border-white/10">
              <div className="flex items-center space-x-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-cyan-400 mb-1">
                    {totalSkills}+
                  </div>
                  <div className="text-gray-300 text-sm">Technologies</div>
                </div>
                <div className="h-12 w-px bg-white/20"></div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-400 mb-1">
                    12+
                  </div>
                  <div className="text-gray-300 text-sm">Projects</div>
                </div>
                <div className="h-12 w-px bg-white/20"></div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-400 mb-1">
                    2+
                  </div>
                  <div className="text-gray-300 text-sm">Years Experience</div>
                </div>
              </div>
            </Card>
          </motion.div>

          {/* GitHub Link */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
            className="text-center mt-8"
          >
            <a
              href="https://github.com/bskcorona-github"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-3 px-8 py-4 bg-gradient-to-r from-cyan-600 to-blue-600 text-white rounded-2xl hover:from-cyan-700 hover:to-blue-700 transition-all duration-300 hover:scale-105 hover:shadow-xl"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
              <span className="text-lg font-semibold">View GitHub Profile</span>
            </a>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
