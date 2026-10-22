import templates from "@/data/templateData";
import { renderReferenceOgImage } from "@/lib/reference-og";

export const alt = "Template";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

function toTitleCase(str: string): string {
  return str
    .toLowerCase()
    .split(/\s+/)
    .filter(Boolean)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

export default async function Image({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const template = templates.find((t) => t.id === id);

  const rawTitle = template?.title || "Starter Template";
  const title = rawTitle === rawTitle.toUpperCase() ? toTitleCase(rawTitle) : rawTitle;
  const category = template?.category || template?.company || "Starter Kit";
  const tech = template?.tech || ["Next.js", "React", "Tailwind CSS"];

  const templateSubtitles: Record<string, string> = {
    "gsap-portfolio": "for interactive motion & storytelling",
    "saas-ui": "for high-conversion web applications",
    "animated-portfolio": "for creative developers & designers",
  };

  const subtitle =
    templateSubtitles[id] || "for modern web experiences";

  const topRightLines = [
    "// TEMPLATE · SPECIFICATION",
    `→ STACK: ${tech.slice(0, 3).join(" · ").toUpperCase()}`,
    `→ CATEGORY: ${category.toUpperCase()}`,
    "→ PERFORMANCE: 60FPS SMOOTH",
    "→ READY: CLONE & DEPLOY",
    "// VERIFIED STARTER KIT",
  ];

  const bottomLeftLines = [
    "// ARTIFACT · DOSSIER",
    "→ AUTHOR: GYANRANJAN PRIYAM",
    "→ LICENSE: OPEN SOURCE",
    "→ REPO: GYANRANJAN-PRIYAM",
    "→ DOMAIN: WWW.PRIYAM.TECH",
    "// NEVER QUITS",
  ];

  return renderReferenceOgImage({
    title,
    subtitle,
    topRightLines,
    bottomLeftLines,
  });
}
