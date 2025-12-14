"use client";

import { useState, useEffect } from "react";

interface GitHubStats {
  totalCommits: number;
  totalRepos: number;
  stars: number;
  pullRequests: number;
  issues: number;
  languages: {
    name: string;
    percentage: number;
    color: string;
  }[];
  updatedAt: string;
}

const DEFAULT_STATS: GitHubStats = {
  totalCommits: 310,
  totalRepos: 60,
  stars: 0,
  pullRequests: 4,
  issues: 3,
  languages: [
    { name: "TypeScript", percentage: 55.24, color: "#3178c6" },
    { name: "JavaScript", percentage: 23.79, color: "#f7df1e" },
    { name: "Python", percentage: 8.23, color: "#3776ab" },
    { name: "Go", percentage: 5, color: "#00add8" },
    { name: "Others", percentage: 7.74, color: "#6e7681" },
  ],
  updatedAt: new Date().toISOString(),
};

export function useGitHubStats() {
  const [stats, setStats] = useState<GitHubStats>(DEFAULT_STATS);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const response = await fetch("/api/github-stats");
        if (!response.ok) {
          throw new Error("Failed to fetch GitHub stats");
        }
        const data = await response.json();
        setStats(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Unknown error");
        // エラー時はデフォルト値を使用（既に設定済み）
      } finally {
        setIsLoading(false);
      }
    };

    fetchStats();
  }, []);

  return { stats, isLoading, error };
}
