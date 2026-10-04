import { SITE_URL } from "@/lib/config";
import projects from "@/data/projectsData";

export const revalidate = 3600;

export async function GET() {
  const content = `# Projects Directory — Gyanranjan Priyam

> Collection of production web applications, open-source tools, and developer platforms built by Gyanranjan Priyam.

- Portfolio: ${SITE_URL}
- Projects URL: ${SITE_URL}/projects
- Total Projects: ${projects.length}

---

${projects
  .map((p, idx) => {
    return `## ${idx + 1}. ${p.title}

- **URL**: ${SITE_URL}/projects/${p.id}
- **Markdown**: ${SITE_URL}/projects/${p.id}.md
- **Live Link**: ${p.liveLink || "N/A"}
- **GitHub**: ${p.github || "Private"}
- **Tech Stack**: ${p.tech.join(", ")}
- **Timeline**: ${p.date}
- **Role/Company**: ${p.role || p.company}

### Description:
${p.desc.join("\n\n")}

${"highlights" in p && Array.isArray((p as { highlights?: string[] }).highlights) ? `### Key Highlights:\n${(p as { highlights: string[] }).highlights.map((h) => `- ${h}`).join("\n")}` : ""}
`;
  })
  .join("\n---\n\n")}
`.trim();

  return new Response(content, {
    headers: {
      "Content-Type": "text/markdown; charset=utf-8",
      "Cache-Control": "public, max-age=3600, stale-while-revalidate=86400",
    },
  });
}
