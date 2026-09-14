import type { NextConfig } from "next";
const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'priyams-blogs.t3.storage.dev',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'api.qrserver.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'priyams-blogs.s3.amazonaws.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
  headers: async () => [
    {
      source: "/(.*)",
      headers: [
        { key: "X-Content-Type-Options", value: "nosniff" },
        { key: "X-Frame-Options", value: "SAMEORIGIN" },
        { key: "X-XSS-Protection", value: "1; mode=block" },
        { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
      ],
    },
  ],
  redirects: async () => [
    // Home aliases
    { source: "/home", destination: "/", statusCode: 301 },
    { source: "/index", destination: "/", statusCode: 301 },

    // About aliases (about is a section on homepage)
    { source: "/about", destination: "/", statusCode: 301 },
    { source: "/about-me", destination: "/", statusCode: 301 },
    { source: "/me", destination: "/", statusCode: 301 },

    // Projects aliases
    { source: "/project", destination: "/projects", statusCode: 301 },
    { source: "/project/:id", destination: "/projects/:id", statusCode: 301 },
    { source: "/work", destination: "/projects", statusCode: 301 },
    { source: "/portfolio", destination: "/projects", statusCode: 301 },

    // Blog aliases -> Redirect to standalone Astro blog app
    {
      source: "/blog",
      destination:
        process.env.NEXT_PUBLIC_BLOG_URL ||
        (process.env.NODE_ENV === "development"
          ? "http://localhost:4321"
          : "https://blogs.priyam.tech"),
      permanent: false,
    },
    {
      source: "/blog/:slug*",
      destination: `${
        process.env.NEXT_PUBLIC_BLOG_URL ||
        (process.env.NODE_ENV === "development"
          ? "http://localhost:4321"
          : "https://blogs.priyam.tech")
      }/:slug*`,
      permanent: false,
    },
    {
      source: "/blogs",
      destination:
        process.env.NEXT_PUBLIC_BLOG_URL ||
        (process.env.NODE_ENV === "development"
          ? "http://localhost:4321"
          : "https://blogs.priyam.tech"),
      permanent: false,
    },
    {
      source: "/blogs/:slug*",
      destination: `${
        process.env.NEXT_PUBLIC_BLOG_URL ||
        (process.env.NODE_ENV === "development"
          ? "http://localhost:4321"
          : "https://blogs.priyam.tech")
      }/:slug*`,
      permanent: false,
    },
    {
      source: "/articles",
      destination:
        process.env.NEXT_PUBLIC_BLOG_URL ||
        (process.env.NODE_ENV === "development"
          ? "http://localhost:4321"
          : "https://blogs.priyam.tech"),
      permanent: false,
    },
    {
      source: "/posts",
      destination:
        process.env.NEXT_PUBLIC_BLOG_URL ||
        (process.env.NODE_ENV === "development"
          ? "http://localhost:4321"
          : "https://blogs.priyam.tech"),
      permanent: false,
    },

    // Resume / CV
    { source: "/resume", destination: "/resume/resume.pdf", statusCode: 301 },
    { source: "/cv", destination: "/resume/resume.pdf", statusCode: 301 },

    // Contact
    { source: "/contact", destination: "/", statusCode: 301 },
  ],
};

export default nextConfig;
