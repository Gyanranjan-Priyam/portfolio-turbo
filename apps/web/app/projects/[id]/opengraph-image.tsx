import projects from "@/data/projectsData";
import { renderReferenceOgImage } from "@/lib/reference-og";

export const alt = "Project";
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
  const project = projects.find((p) => p.id === id);

  const rawTitle = project?.title || "Project";
  const title = rawTitle === rawTitle.toUpperCase() ? toTitleCase(rawTitle) : rawTitle;
  const company = project?.company || "Full Stack Engineering";
  const tech = project?.tech || ["Next.js", "TypeScript", "React"];

  const projectSubtitles: Record<string, string> = {
    "techfest-platform": "for live event operations & ticketing",
    "blogs-codebreakers": "for developer community publishing",
    "lms": "for modern education management",
    "cms": "for institutional campus workflows",
    "pos-system": "for real-time retail & stock control",
    "codebreakers-club": "for student developer communities",
  };

  const subtitle =
    projectSubtitles[id] ||
    `for ${company.toLowerCase().replace(/platform/i, "systems").trim()}`;

  const topRightLines = [
    "// PROJECT · SPECIFICATION",
    `→ STACK: ${tech.slice(0, 3).join(" · ").toUpperCase()}`,
    `→ CATEGORY: ${company.toUpperCase()}`,
    `→ RELEASE: ${project?.date || "2025"} BUILD`,
    "→ ARCHITECTURE: DISTRIBUTED / SSR",
    "// STATUS · VERIFIED DEPLOY",
  ];

  const bottomLeftLines = [
    "// ARTIFACT · DOSSIER",
    "→ AUTHOR: GYANRANJAN PRIYAM",
    "→ REPO: GYANRANJAN-PRIYAM",
    "→ SYSTEM: PRODUCTION READY",
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
