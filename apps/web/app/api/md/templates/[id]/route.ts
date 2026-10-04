import { SITE_URL } from "@/lib/config";
import templates from "@/data/templateData";

export const revalidate = 3600;

export async function generateStaticParams() {
  return templates.map((t) => ({
    id: t.id,
  }));
}

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const template = templates.find((t) => t.id === id);

  if (!template) {
    return new Response("Template not found", { status: 404 });
  }

  const highlights =
    template.highlights && template.highlights.length > 0
      ? template.highlights.map((h) => `- ${h}`).join("\n")
      : "";

  const features =
    template.features && template.features.length > 0
      ? template.features.map((f) => `- ${f}`).join("\n")
      : "";

  const content = `# Template: ${template.title}

> Created by Gyanranjan Priyam (${SITE_URL})
> Tech Stack: ${template.tech.join(", ")}
> Category: ${template.category} (${template.date})

- Canonical URL: ${SITE_URL}/templates/${template.id}
- Live Demo: ${template.liveLink || "N/A"}
- Source Code: ${template.github || "N/A"}

---

## Overview

${template.desc.join("\n\n")}

${highlights ? `--- \n\n## Key Highlights\n\n${highlights}\n` : ""}

${features ? `--- \n\n## Core Features\n\n${features}\n` : ""}

---

## Author & Creator

- Developer: Gyanranjan Priyam
- Portfolio: ${SITE_URL}
- GitHub: https://github.com/gyanranjan-priyam
- Twitter: https://x.com/gr_priyam
`.trim();

  return new Response(content, {
    headers: {
      "Content-Type": "text/markdown; charset=utf-8",
      "Cache-Control": "public, max-age=3600, stale-while-revalidate=86400",
    },
  });
}
