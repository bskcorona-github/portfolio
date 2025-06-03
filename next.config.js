/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["github.com", "avatars.githubusercontent.com"],
  },
  // Vercel用の最適化設定
  output: "standalone",
  // 静的ファイルの最適化
  compress: true,
  // パブリックディレクトリの確保
  assetPrefix: process.env.NODE_ENV === "production" ? "" : "",
  // 動的インポートの最適化
  experimental: {
    optimizeCss: true,
  },
};

module.exports = nextConfig;
