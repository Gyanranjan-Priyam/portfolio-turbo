import { renderBlogOgImage } from "@/lib/blog-og";
import { SITE_TITLE, SITE_DESCRIPTION } from "@/lib/consts";

export const alt = SITE_TITLE;
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image() {
  const topRightLines = [
    "// BLOG · SPECIFICATION",
    "→ FRONTEND & PERFORMANCE",
    "→ NEXT.JS 16 · REACT 19 · TS",
    "→ CASE STUDIES & SYSTEMS",
    "// NEVER STOPS LEARNING",
  ];

  const bottomLeftLines = [
    "// PUBLICATION · DOSSIER",
    "→ AUTHOR: GYANRANJAN PRIYAM",
    "→ ROLE: FRONTEND DEVELOPER",
    "→ DOMAIN: BLOGS.PRIYAM.TECH",
    "// ALWAYS BUILDING",
  ];

  return renderBlogOgImage({
    title: "The Priyam's Blog",
    subtitle:
      SITE_DESCRIPTION ||
      "Articles, tutorials, and practical insights on modern web development and engineering.",
    category: "Engineering & Architecture",
    tags: ["React 19", "Next.js 16", "TypeScript", "Performance"],
    topRightLines,
    bottomLeftLines,
  });
}
