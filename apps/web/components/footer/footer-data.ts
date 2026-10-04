import { BLOG_URL } from "@/lib/config";
import { getLatestBlogPosts, type LatestPost } from "@/lib/latest-posts";

export interface NavLinkItem {
  title: string;
  href?: string;
  external?: boolean;
  badge?: string;
}

export interface BuildInfo {
  commitShortSha: string | null;
  commitUrl: string | null;
  environment: "production" | "preview" | "development";
  date: string;
}

export interface FooterConfig {
  siteTitle: string;
  siteSubtitle: string;
  craftedBy: {
    handle: string;
    href: string;
  };
  status: {
    label: string;
    available: boolean;
  };
  build: BuildInfo;
  deployedOn: string;
  sourceCodeUrl: string;
  license: {
    name: string;
    url: string;
  };
  exploreLinks: NavLinkItem[];
  productLinks: NavLinkItem[];
  resourceLinks: NavLinkItem[];
  connectLinks: NavLinkItem[];
  latestWriting: LatestPost[];
  socialLinks: {
    x: string;
    github: string;
    linkedin: string;
    instagram: string;
    email: string;
  };
}

export function getFooterConfig(): FooterConfig {
  return {
    siteTitle: "Gyanranjan Priyam",
    siteSubtitle:
      "There is still so much I don’t know, and that is exactly what keeps me moving.",
    craftedBy: {
      handle: "@gr_priyam",
      href: "https://x.com/gr_priyam",
    },
    status: {
      label: "Available for hire & freelance",
      available: true,
    },
    build: {
      commitShortSha: "main",
      commitUrl: "https://github.com/Gyanranjan-Priyam/portfolio-turbo",
      environment: "production",
      date: "2026-10-02",
    },
    deployedOn: "Vercel",
    sourceCodeUrl: "https://github.com/Gyanranjan-Priyam/portfolio-turbo",
    license: {
      name: "MIT License",
      url: "https://github.com/Gyanranjan-Priyam/portfolio-turbo/blob/main/LICENSE",
    },
    exploreLinks: [
      { title: "About", href: "/#about" },
      { title: "Projects", href: "/projects" },
      { title: "Experience", href: "/#experience" },
      { title: "Skills", href: "/#skills" },
      { title: "Certifications", href: "/#education" },
    ],
    productLinks: [
      { title: "Building...", badge: "Soon" },
    ],
    resourceLinks: [
      { title: "Blog", href: BLOG_URL, external: true },
      { title: "Templates", href: "/templates" },
      { title: "Resume", href: "/resume/resume.pdf", external: true },
      {
        title: "Source Code",
        href: "https://github.com/Gyanranjan-Priyam/portfolio-turbo",
        external: true,
      },
      { title: "llms.txt", href: "/llms.txt", external: true },
    ],
    connectLinks: [
      { title: "Email", href: "mailto:info@priyam.tech", external: true },
      {
        title: "GitHub",
        href: "https://github.com/gyanranjan-priyam",
        external: true,
      },
      {
        title: "LinkedIn",
        href: "https://linkedin.com/in/gyanranjan-priyam",
        external: true,
      },
      { title: "X", href: "https://x.com/gr_priyam", external: true },
      {
        title: "Instagram",
        href: "https://instagram.com/gyanranjanpriyam",
        external: true,
      },
    ],
    latestWriting: getLatestBlogPosts(2),
    socialLinks: {
      x: "https://x.com/gr_priyam",
      github: "https://github.com/gyanranjan-priyam",
      linkedin: "https://linkedin.com/in/gyanranjan-priyam",
      instagram: "https://instagram.com/gyanranjanpriyam",
      email: "mailto:info@priyam.tech",
    },
  };
}

export const DEFAULT_FOOTER_CONFIG: FooterConfig = getFooterConfig();
