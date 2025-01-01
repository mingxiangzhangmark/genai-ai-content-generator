import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  // reactStrictMode: true,
  images: {
    domains: ["cdn-icons-png.flaticon.com"], // 添加 Flaticon 域名
  },
};

export default nextConfig;
