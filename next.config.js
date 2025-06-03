/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["github.com", "avatars.githubusercontent.com"],
  },
  // Vercel用の基本設定
  compress: true,
  transpilePackages: ["@splinetool/react-spline", "@splinetool/runtime"],
};

module.exports = nextConfig;
