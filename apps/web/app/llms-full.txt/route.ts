import { SITE_URL, BLOG_URL } from "@/lib/config";
import projects from "@/data/projectsData";
import templates from "@/data/templateData";

export const revalidate = 3600;

export async function GET() {
  const content = `# Gyanranjan Priyam — Full Technical Portfolio

- Website: ${SITE_URL}
- Blog: ${BLOG_URL}
- Projects: ${SITE_URL}/projects
- Templates: ${SITE_URL}/templates

## Projects
${projects.map((p) => `### ${p.title}\n${p.desc.join(" ")}\nTech: ${p.tech.join(", ")}\nLive: ${p.liveLink || ""}`).join("\n\n")}

## Templates
${templates.map((t) => `### ${t.title}\n${t.desc.join(" ")}\nTech: ${t.tech.join(", ")}\nLive: ${t.liveLink || ""}`).join("\n\n")}
`.trim();

  return new Response(content, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600, stale-while-revalidate=86400",
    },
  });
}