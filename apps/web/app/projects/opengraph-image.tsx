import { renderReferenceOgImage } from "@/lib/reference-og";

export const alt = "Projects — Gyanranjan Priyam";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  const topRightLines = [
    "// PROJECTS · DIRECTORY",
    "→ PRODUCTION BUILDS & CASE STUDIES",
    "→ FULLSTACK · DISTRIBUTED ARCHITECTURE",
    "→ NEXT.JS 16 · TS · POSTGRESQL · AI",
    "→ VERIFIED PERFORMANCE 99+",
    "// ACTIVE BUILDS · LIVE",
  ];

  const bottomLeftLines = [
    "// PORTFOLIO · ARTIFACT",
    "→ AUTHOR: GYANRANJAN PRIYAM",
    "→ ROLE: FULL STACK DEVELOPER",
    "→ REPO: GYANRANJAN-PRIYAM",
    "→ DOMAIN: WWW.PRIYAM.TECH",
    "// NEVER QUITS",
  ];

  return renderReferenceOgImage({
    title: "Engineering Projects",
    subtitle: "for scalable web applications",
    topRightLines,
    bottomLeftLines,
  });
}
