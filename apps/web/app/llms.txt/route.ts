import { SITE_URL, BLOG_URL } from "@/lib/config";
import projects from "@/data/projectsData";
import templates from "@/data/templateData";
import { experiences } from "@/data/experienceData";
import { education, certifications } from "@/data/educationData";

export const revalidate = 3600;

export async function GET() {
  const formatDescription = (descriptionParts: string[]) => descriptionParts.join(" ");

  const content = `# Gyanranjan Priyam — Full Stack Developer & AI Engineer

> Full Stack Developer and AI Engineer specializing in Next.js, React, TypeScript, Node.js, and AI/ML integrations. Building scalable products, modern web experiences, and developer tools.

- Canonical URL: ${SITE_URL}
- Blog: ${BLOG_URL}
- GitHub: https://github.com/gyanranjan-priyam
- LinkedIn: https://linkedin.com/in/gyanranjan-priyam
- Twitter/X: https://x.com/gr_priyam
- Instagram: https://instagram.com/gyanranjanpriyam
- Contact Email: info@priyam.tech
- Resume: https://assets.priyam.tech/resume/resume.pdf

---

## Core Documentation & LLM Endpoints

- [Full Site Context (Consolidated)](${SITE_URL}/llms-full.txt): Complete technical portfolio documentation including all projects, architecture breakdowns, templates, experience, and education in a single file.
- [About & Biography (Markdown)](${SITE_URL}/about.md): Detailed personal bio, developer philosophy, background, and contact points.
- [Projects Index (Markdown)](${SITE_URL}/projects.md): Complete list of production projects, case studies, and engineering highlights.
- [Templates Index (Markdown)](${SITE_URL}/templates.md): Open-source boilerplates, UI kits, and starter templates.
- [Privacy Policy (Markdown)](${SITE_URL}/privacy.md): Website privacy policy and data governance.
- [Engineering Blog (LLMs.txt)](${BLOG_URL}/llms.txt): Machine-readable index of all technical articles on web performance, Next.js, and system architecture.

---

## Featured Projects (${projects.length})

${projects
  .map((p) => {
    const desc = formatDescription(p.desc);
    const tech = p.tech.join(", ");
    return `### [${p.title}](${SITE_URL}/projects/${p.id}.md)
- **Live URL**: ${p.liveLink || "N/A"}
- **Source Code**: ${p.github || "Private / Proprietary"}
- **Tech Stack**: ${tech}
- **Role & Company**: ${p.role || p.company} (${p.date})
- **Summary**: ${desc}
- **Markdown Version**: ${SITE_URL}/projects/${p.id}.md`;
  })
  .join("\n\n")}

---

## Developer Templates & Starters (${templates.length})

${templates
  .map((t) => {
    const desc = formatDescription(t.desc);
    const tech = t.tech.join(", ");
    return `### [${t.title}](${SITE_URL}/templates/${t.id}.md)
- **Live Demo**: ${t.liveLink || "N/A"}
- **Source Code**: ${t.github || "N/A"}
- **Tech Stack**: ${tech}
- **Category**: ${t.category} (${t.date})
- **Summary**: ${desc}
- **Markdown Version**: ${SITE_URL}/templates/${t.id}.md`;
  })
  .join("\n\n")}

---

## Professional Work Experience

${experiences
  .map(
    (e) => `### ${e.title} at ${e.company}
- **Period**: ${e.period}
- **Responsibilities**:
${e.content.map((d: string) => `  - ${d}`).join("\n")}`
  )
  .join("\n\n")}

---

## Education & Academic Background

${education
  .map(
    (ed) => `### ${ed.degree}
- **Institution**: ${ed.school} (${ed.period})
- **Score/Marks**: ${ed.marks || "In Progress"}`
  )
  .join("\n\n")}

---

## Certifications & Accreditations

${certifications
  .map((c) => `- **${c.name}** — ${c.issuer} (${c.year})`)
  .join("\n")}

---

## Core Technical Skills

- **Languages**: TypeScript, JavaScript (ESNext), Python, SQL, HTML5, CSS3/SCSS
- **Frontend Frameworks & UI**: Next.js 16 (App Router, Server Components), React 19, Tailwind CSS, shadcn/ui, Radix UI, Base UI, Framer Motion, GSAP, Lenis, Three.js
- **Backend & Databases**: Node.js, Bun, PostgreSQL, MongoDB, Redis, Prisma ORM, Better Auth, REST APIs, GraphQL
- **AI & Emerging Tech**: Gemini API, OpenAI / OpenRouter, Claude integrations, LLM RAG pipelines, Prompt Engineering, Agentic Workflows
- **DevOps & Infrastructure**: Docker, Git, GitHub Actions, Vercel, Cloudflare Pages/Workers, AWS S3, Nginx, Linux
- **SEO & Web Optimization**: ASEO (AI Search Engine Optimization), Schema.org JSON-LD, Core Web Vitals, Responsive Design, PWA

---

## Main Site Navigation

- [Home / Portfolio](${SITE_URL}): Interactive showcase with hero, career timeline, education, certifications, and live contact dock.
- [Projects](${SITE_URL}/projects): Filterable grid of all featured client, commercial, and open-source projects.
- [Templates](${SITE_URL}/templates): Production-grade boilerplates and design templates.
- [Blog](${BLOG_URL}): High-depth technical writing on engineering, systems, and developer career.
- [Privacy Policy](${SITE_URL}/privacy): User privacy details.
`.trim();

  return new Response(content, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600, stale-while-revalidate=86400",
    },
  });
}
