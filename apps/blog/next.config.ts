import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "assets.priyam.tech" },
      { protocol: "https", hostname: "images.unsplash.com" },
    ],
  },
  async rewrites() {
    return [
      {
        source: "/:slug.md",
        destination: "/api/md/posts/:slug",
      },
    ];
  },
  async redirects() {
    return [
      {
        source: "/blogs",
        destination: "/",
        permanent: true,
      },
      {
        source: "/blogs/:slug*",
        destination: "/:slug*",
        permanent: true,
      },
      {
        source: "/blog",
        destination: "/",
        permanent: true,
      },
      {
        source: "/blog/:slug*",
        destination: "/:slug*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
