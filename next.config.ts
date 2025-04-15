import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "img.clerk.com"
      },
      {
        protocol: "https",
        hostname: "zikdvdnrvqdvrrhvwjau.supabase.co"
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
