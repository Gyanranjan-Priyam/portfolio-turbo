import { SITE_URL } from "@/lib/config";
import projects from "@/data/projectsData";

export const revalidate = 3600;

export async function generateStaticParams() {
  return projects.map((p) => ({
    id: p.id,
  }));
}

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const project = projects.find((p) => p.id === id);

  if (!project) {
    return new Response("Project not found", { status: 404 });
  }

  const highlights =
    "highlights" in project && Array.isArray((project as { highlights?: string[] }).highlights)
      ? (project as { highlights?: string[] }).highlights!.map((h) => `- ${h}`).join("\n")
      : "";

  const features =
    "features" in project && Array.isArray((project as { features?: { category: string; items: string[] }[] }).features)
      ? (project as { features: { category: string; items: string[] }[] }).features
          .map((f) => `### ${f.category}\n${f.items.map((it) => `- ${it}`).join("\n")}`)
          .join("\n\n")
      : "";

  const techLayers =
    "techDetailed" in project && Array.isArray((project as { techDetailed?: { layer: string; value: string }[] }).techDetailed)
      ? (project as { techDetailed: { layer: string; value: string }[] }).techDetailed
          .map((t) => `- **${t.layer}**: ${t.value}`)
          .join("\n")
      : "";

  const content = `# Project Case Study: ${project.title}

> Built by Gyanranjan Priyam (${SITE_URL})
> Tech Stack: ${project.tech.join(", ")}
> Timeline: ${project.date} | Category/Company: ${project.company}

- Canonical URL: ${SITE_URL}/projects/${project.id}
- Live Demo: ${project.liveLink || "N/A"}
- Source Code: ${project.github || "Private / Proprietary"}
- Role: ${project.role || "Developer"}

---

## Overview

${project.desc.join("\n\n")}

${highlights ? `--- \n\n## Key Highlights\n\n${highlights}\n` : ""}

${features ? `--- \n\n## Feature Breakdown\n\n${features}\n` : ""}

${techLayers ? `--- \n\n## Architecture & Tech Stack\n\n${techLayers}\n` : ""}

---

## Author & Creator

- Developer: Gyanranjan Priyam
- Portfolio: ${SITE_URL}
- GitHub: https://github.com/gyanranjan-priyam
- LinkedIn: https://linkedin.com/in/gyanranjan-priyam
- Twitter: https://x.com/gr_priyam
`.trim();

  return new Response(content, {
    headers: {
      "Content-Type": "text/markdown; charset=utf-8",
      "Cache-Control": "public, max-age=3600, stale-while-revalidate=86400",
    },
  });
}
