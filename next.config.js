/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    appDir: true,
  },
  images: {
    domains: [
      "github.com",
      "avatars.githubusercontent.com",
      "res.cloudinary.com",
    ],
  },
  // Vercel用の基本設定
  compress: true,
  transpilePackages: ["@splinetool/react-spline", "@splinetool/runtime"],
  // SSRでのSplineエラーを回避
  webpack: (config, { isServer }) => {
    if (isServer) {
      config.externals = config.externals || [];
      config.externals.push("@splinetool/react-spline");
    }
    return config;
  },
};

module.exports = nextConfig;
