import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    inlineCss: true,
  },
  async headers() {
    return [
      {
        source: "/demo/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
    ];
  },
  async redirects() {
    return [
      {
        source: "/favicon.ico",
        destination: "/icon.svg",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
