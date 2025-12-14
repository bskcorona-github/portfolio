import { NextResponse } from "next/server";

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

const GITHUB_USERNAME = "bskcorona-github";

// キャッシュ用の変数（ISRの代わりにメモリキャッシュ）
let cachedStats: GitHubStats | null = null;
let cacheTime: number | null = null;
const CACHE_DURATION = 60 * 60 * 1000; // 1時間

async function fetchGitHubStats(): Promise<GitHubStats> {
  try {
    // 認証ヘッダーの準備
    const headers: HeadersInit = {
      Accept: "application/vnd.github.v3+json",
    };
    if (process.env.GITHUB_TOKEN) {
      headers.Authorization = `token ${process.env.GITHUB_TOKEN}`;
    }

    // ユーザー情報を取得
    const userResponse = await fetch(
      `https://api.github.com/users/${GITHUB_USERNAME}`,
      {
        headers,
        next: { revalidate: 3600 }, // 1時間ごとに再検証
      }
    );

    if (!userResponse.ok) {
      throw new Error("Failed to fetch GitHub user data");
    }

    const userData = await userResponse.json();

    // リポジトリ情報を取得
    const reposResponse = await fetch(
      `https://api.github.com/users/${GITHUB_USERNAME}/repos?per_page=100&sort=updated`,
      {
        headers,
        next: { revalidate: 3600 },
      }
    );

    if (!reposResponse.ok) {
      throw new Error("Failed to fetch GitHub repos data");
    }

    const reposData = await reposResponse.json();

    // 言語の集計
    const languageCounts: Record<string, number> = {};
    let totalSize = 0;

    for (const repo of reposData) {
      if (repo.language) {
        languageCounts[repo.language] =
          (languageCounts[repo.language] || 0) + (repo.size || 1);
        totalSize += repo.size || 1;
      }
    }

    // 言語をパーセンテージに変換
    const languageColors: Record<string, string> = {
      TypeScript: "#3178c6",
      JavaScript: "#f7df1e",
      Python: "#3776ab",
      Go: "#00add8",
      PHP: "#777bb4",
      HTML: "#e34c26",
      CSS: "#563d7c",
      Shell: "#89e051",
    };

    const languages = Object.entries(languageCounts)
      .map(([name, size]) => ({
        name,
        percentage: Math.round((size / totalSize) * 100 * 100) / 100,
        color: languageColors[name] || "#6e7681",
      }))
      .sort((a, b) => b.percentage - a.percentage)
      .slice(0, 5);

    // スターの合計
    const totalStars = reposData.reduce(
      (sum: number, repo: { stargazers_count: number }) =>
        sum + repo.stargazers_count,
      0
    );

    return {
      totalCommits: 310, // コミット数はGraphQL APIが必要なため、暫定値
      totalRepos: userData.public_repos,
      stars: totalStars,
      pullRequests: 4, // PRはSearch APIが必要
      issues: 3, // IssueもSearch APIが必要
      languages,
      updatedAt: new Date().toISOString(),
    };
  } catch (error) {
    console.error("GitHub API Error:", error);
    // エラー時はフォールバック値を返す
    return {
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
  }
}

export async function GET() {
  // キャッシュチェック
  const now = Date.now();
  if (cachedStats && cacheTime && now - cacheTime < CACHE_DURATION) {
    return NextResponse.json(cachedStats);
  }

  // 新しいデータを取得
  const stats = await fetchGitHubStats();

  // キャッシュを更新
  cachedStats = stats;
  cacheTime = now;

  return NextResponse.json(stats, {
    headers: {
      "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=86400",
    },
  });
}
