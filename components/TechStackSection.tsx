"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  SiTypescript,
  SiJavascript,
  SiReact,
  SiNextdotjs,
  SiVuedotjs,
  SiNuxtdotjs,
  SiGo,
  SiPhp,
  SiLaravel,
  SiExpress,
  SiMysql,
  SiPostgresql,
  SiMongodb,
  SiAmazonaws,
  SiVercel,
  SiDocker,
  SiGit,
  SiGithub,
  SiGitlab,
  SiTailwindcss,
  SiPrisma,
  SiDiscord,
  SiHtml5,
  SiCss3,
  SiPython,
  SiMui,
  SiFigma,
  SiOpenai,
  SiNotion,
} from "react-icons/si";
import { BiLogoGoLang } from "react-icons/bi";
import { TbRobot, TbDatabase, TbCode } from "react-icons/tb";
import { FaDatabase } from "react-icons/fa";

const TechStackSection = () => {
  const languageStats = [
    {
      name: "TypeScript",
      percentage: 55.24,
      color: "#3178c6",
      icon: SiTypescript,
    },
    {
      name: "JavaScript",
      percentage: 23.79,
      color: "#f7df1e",
      icon: SiJavascript,
    },
    { name: "Python", percentage: 8.23, color: "#3776ab", icon: SiPython },
    { name: "HTML", percentage: 5.01, color: "#e34f26", icon: SiHtml5 },
    { name: "CSS", percentage: 3.98, color: "#1572b6", icon: SiCss3 },
    { name: "Vue", percentage: 3.76, color: "#4fc08d", icon: SiVuedotjs },
  ];

  const techStacks = {
    "Languages & Frameworks": [
      { name: "TypeScript", icon: SiTypescript, color: "#3178c6" },
      { name: "JavaScript", icon: SiJavascript, color: "#f7df1e" },
      { name: "React", icon: SiReact, color: "#61dafb" },
      { name: "Next.js", icon: SiNextdotjs, color: "#000000" },
      { name: "Vue.js", icon: SiVuedotjs, color: "#4fc08d" },
      { name: "Nuxt.js", icon: SiNuxtdotjs, color: "#00dc82" },
      { name: "Go", icon: BiLogoGoLang, color: "#00add8" },
      { name: "PHP", icon: SiPhp, color: "#777bb4" },
      { name: "Laravel", icon: SiLaravel, color: "#ff2d20" },
      { name: "Express.js", icon: SiExpress, color: "#000000" },
      { name: "Material UI", icon: SiMui, color: "#007fff" },
    ],
    "Databases & Database Tools": [
      { name: "MySQL", icon: SiMysql, color: "#4479a1" },
      { name: "PostgreSQL", icon: SiPostgresql, color: "#336791" },
      { name: "MongoDB", icon: SiMongodb, color: "#47a248" },
      { name: "DBeaver", icon: TbDatabase, color: "#2c5282" },
      { name: "HeidiSQL", icon: FaDatabase, color: "#4479a1" },
    ],
    "AI & Development Tools": [
      { name: "Claude", icon: SiOpenai, color: "#ff6b35" },
      { name: "MCP Server", icon: TbRobot, color: "#8b5cf6" },
      { name: "Figma", icon: SiFigma, color: "#f24e1e" },
      { name: "Notion", icon: SiNotion, color: "#000000" },
      { name: "Cursor", icon: TbCode, color: "#6366f1" },
    ],
    "Tools & Cloud": [
      { name: "AWS", icon: SiAmazonaws, color: "#ff9900" },
      { name: "Vercel", icon: SiVercel, color: "#000000" },
      { name: "Docker", icon: SiDocker, color: "#2496ed" },
      { name: "Git", icon: SiGit, color: "#f05032" },
      { name: "GitHub", icon: SiGithub, color: "#181717" },
      { name: "GitLab", icon: SiGitlab, color: "#fc6d26" },
      { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06b6d4" },
      { name: "Prisma", icon: SiPrisma, color: "#2d3748" },
      { name: "Discord", icon: SiDiscord, color: "#5865f2" },
    ],
  };

  return (
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold text-white mb-6">
            🛠 <span className="gradient-text">Skills & Tools</span>
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            現代的なWeb開発に特化した技術スタックとツールセット
          </p>
        </motion.div>

        {/* Language Usage Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="glass-effect rounded-3xl p-8 mb-12"
        >
          <h3 className="text-2xl font-bold text-white mb-8 text-center">
            Most Used Languages
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              {languageStats.map((lang, index) => (
                <motion.div
                  key={lang.name}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-center space-x-4"
                >
                  <lang.icon
                    className="w-6 h-6"
                    style={{ color: lang.color }}
                  />
                  <div className="flex-1">
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-white font-medium">
                        {lang.name}
                      </span>
                      <span className="text-slate-300 text-sm">
                        {lang.percentage}%
                      </span>
                    </div>
                    <div className="w-full bg-slate-700 rounded-full h-2">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${lang.percentage}%` }}
                        transition={{ duration: 1, delay: index * 0.1 }}
                        className="h-2 rounded-full"
                        style={{ backgroundColor: lang.color }}
                      />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
            <div className="flex items-center justify-center">
              <div className="relative w-64 h-64">
                <svg
                  className="w-full h-full transform -rotate-90"
                  viewBox="0 0 100 100"
                >
                  {languageStats.map((lang, index) => {
                    const prevPercentage = languageStats
                      .slice(0, index)
                      .reduce((sum, l) => sum + l.percentage, 0);
                    const strokeDasharray = `${lang.percentage} ${
                      100 - lang.percentage
                    }`;
                    const strokeDashoffset = 100 - prevPercentage;
                    return (
                      <motion.circle
                        key={lang.name}
                        cx="50"
                        cy="50"
                        r="40"
                        fill="transparent"
                        stroke={lang.color}
                        strokeWidth="8"
                        strokeDasharray={strokeDasharray}
                        strokeDashoffset={strokeDashoffset}
                        initial={{ strokeDasharray: "0 100" }}
                        whileInView={{ strokeDasharray }}
                        transition={{ duration: 1, delay: index * 0.2 }}
                        className="drop-shadow-lg"
                      />
                    );
                  })}
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-white">310</div>
                    <div className="text-sm text-slate-400">Commits</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Tech Stack Grid */}
        {Object.entries(techStacks).map(
          ([category, technologies], categoryIndex) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
              className="mb-12"
            >
              <h3 className="text-2xl font-bold text-white mb-6">{category}</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
                {technologies.map((tech, index) => (
                  <motion.div
                    key={tech.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.05 }}
                    whileHover={{ scale: 1.05, y: -5 }}
                    className="tech-icon group cursor-pointer"
                  >
                    <tech.icon
                      className="w-8 h-8 mx-auto mb-2 transition-colors duration-300"
                      style={{ color: tech.color }}
                    />
                    <p className="text-xs text-center text-slate-300 group-hover:text-white transition-colors duration-300">
                      {tech.name}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )
        )}
      </div>
    </section>
  );
};

export default TechStackSection;
