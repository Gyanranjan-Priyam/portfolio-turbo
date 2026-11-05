import type { Route } from "next"

import type { NavItem } from "@/types/nav"
import { SITE_URL, BLOG_URL } from "@/lib/config"

export const SITE_INFO = {
  name: "Gyanranjan Priyam",
  url: SITE_URL,
  ogImage: `${SITE_URL}/opengraph-image`,
  description:
    "Frontend Developer working at the intersection of web development, app development, and AI/ML to build scalable digital products people actually use.",
  keywords: [
    "Gyanranjan Priyam",
    "Frontend Developer",
    "Web Developer",
    "Next.js Developer",
    "React Developer",
    "Frontend Web Developer",
    "Software Engineer",
    "Portfolio",
    "JavaScript",
    "TypeScript",
    "Tailwind CSS",
    "GSAP Animation",
    "Web Applications",
    "Responsive Design",
    "AI/ML",
    "Next.js",
    "React",
    "Node.js",
  ],
}

export const LICENSE = {
  name: "MIT License",
  url: "https://github.com/Gyanranjan-Priyam/portfolio-turbo/blob/main/LICENSE",
}

export const META_THEME_COLORS = {
  light: "#ffffff",
  dark: "#09090b",
}

export const MAIN_NAV: NavItem<Route>[] = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "Works",
    items: [
      {
        title: "Projects",
        href: "/projects",
        description: "Case studies & builds",
      },
      {
        title: "Templates",
        href: "/templates",
        description: "Starters & boilerplates",
      },
    ],
  },
  {
    title: "Services",
    href: "/services" as Route,
  },
  {
    title: "Blog",
    href: BLOG_URL as Route,
  },
  {
    title: "Resume",
    href: "/resume" as Route,
  },
]

export const MOBILE_NAV: NavItem<Route>[] = MAIN_NAV

export const X_HANDLE = "@gr_priyam"
export const GITHUB_USERNAME = "gyanranjan-priyam"
export const SOURCE_CODE_GITHUB_REPO = "Gyanranjan-Priyam/portfolio-turbo"
export const SOURCE_CODE_GITHUB_URL = "https://github.com/Gyanranjan-Priyam/portfolio-turbo"

export const SPONSORSHIP_URL = "https://github.com/sponsors/gyanranjan-priyam"

export const UTM_PARAMS = {
  utm_source: "priyam.tech",
}
