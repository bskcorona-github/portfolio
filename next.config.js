/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["github.com", "avatars.githubusercontent.com"],
  },
  // Vercel用の基本設定
  compress: true,
};

module.exports = nextConfig;
