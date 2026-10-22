import { renderReferenceOgImage } from "@/lib/reference-og";

export const alt = "Templates — Gyanranjan Priyam";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  const topRightLines = [
    "// TEMPLATES · STARTER KITS",
    "→ GSAP · MOTION · NEXT.JS · TAILWIND",
    "→ PRODUCTION READY ARCHITECTURE",
    "→ ACCESSIBLE UI & MICRO-INTERACTIONS",
    "→ 100% OPEN SOURCE & CLONEABLE",
    "// DESIGN SYSTEMS · READY",
  ];

  const bottomLeftLines = [
    "// PORTFOLIO · ARTIFACT",
    "→ AUTHOR: GYANRANJAN PRIYAM",
    "→ STARTER CODE & TEMPLATES",
    "→ REPO: GYANRANJAN-PRIYAM",
    "→ DOMAIN: WWW.PRIYAM.TECH",
    "// NEVER QUITS",
  ];

  return renderReferenceOgImage({
    title: "Starter Templates",
    subtitle: "for modern interactive web apps",
    topRightLines,
    bottomLeftLines,
  });
}
