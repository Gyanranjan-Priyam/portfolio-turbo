import { SITE_URL } from "@/lib/config";
import templates from "@/data/templateData";

export const revalidate = 3600;

export async function GET() {
  const content = `# Templates & Starters Directory — Gyanranjan Priyam

> Collection of free and open-source web templates, boilerplates, and developer resources built by Gyanranjan Priyam.

- Portfolio: ${SITE_URL}
- Templates URL: ${SITE_URL}/templates
- Total Templates: ${templates.length}

---

${templates
  .map((t, idx) => {
    return `## ${idx + 1}. ${t.title}

- **URL**: ${SITE_URL}/templates/${t.id}
- **Markdown**: ${SITE_URL}/templates/${t.id}.md
- **Live Demo**: ${t.liveLink || "N/A"}
- **Source Code**: ${t.github || "N/A"}
- **Category**: ${t.category}
- **Year**: ${t.date}
- **Tech Stack**: ${t.tech.join(", ")}

### Description:
${t.desc.join("\n\n")}

${t.highlights && t.highlights.length > 0 ? `### Highlights:\n${t.highlights.map((h) => `- ${h}`).join("\n")}` : ""}
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
