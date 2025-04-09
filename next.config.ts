import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "img.clerk.com"
      }
    ]
  },
  experimental: {
    serverActions: {
      bodySizeLimit: "5mb"
    }
  },
  reactStrictMode: false
};

export default nextConfig;
