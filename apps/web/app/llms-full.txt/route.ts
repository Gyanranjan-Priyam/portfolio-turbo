import { SITE_URL, BLOG_URL } from "@/lib/config";
import projects from "@/data/projectsData";
import templates from "@/data/templateData";
import { experiences } from "@/data/experienceData";
import { education, certifications } from "@/data/educationData";
import { skillCategories } from "@/data/skillCategories";

export const revalidate = 3600;

export async function GET() {
  const content = `# Gyanranjan Priyam — Full Technical Portfolio & Comprehensive Context

> Full Stack Developer and AI Engineer specializing in Next.js 16, React 19, TypeScript, PostgreSQL, Prisma, Tailwind CSS, and AI/ML integrations.
> Canonical URL: ${SITE_URL}
> Blog: ${BLOG_URL}
> GitHub: https://github.com/gyanranjan-priyam
> LinkedIn: https://linkedin.com/in/gyanranjan-priyam
> Twitter/X: https://x.com/gr_priyam
> Email: info@priyam.tech
> Resume: https://assets.priyam.tech/resume/resume.pdf

---

## Executive Summary & Background

Gyanranjan Priyam is an Electrical Engineering student at Government College of Engineering, Kalahandi, and a passionate Full-Stack Software Developer. He builds modern, high-performance web applications, developer starter kits, and AI-enabled platforms. He is also a technical writer, mentor, and former GeeksforGeeks Campus Mantri.

His core strengths include:
- Designing scalable web architectures using Next.js (App Router, Server Components) and React 19.
- Implementing intuitive, responsive user interfaces with Tailwind CSS, shadcn/ui, Framer Motion, and GSAP.
- Developing robust backend systems with Node.js, Bun, Prisma ORM, and PostgreSQL.
- Integrating LLM APIs (Gemini, OpenAI, Claude) to build intelligent user-facing features.
- Advanced Search Engine Optimization (SEO) and AI Search Engine Optimization (ASEO / GEO).

---

## Technical Skills & Proficiencies

${skillCategories
  .map((cat) => `### Category ${cat.number}: ${cat.title}\n${cat.skills.map((s) => `- ${s.name}`).join("\n")}`)
  .join("\n\n")}

---

## Professional Experience

${experiences
  .map(
    (exp) => `### ${exp.title} — ${exp.company}
- **Period**: ${exp.period}
- **Key Contributions**:
${exp.content.map((d: string) => `  - ${d}`).join("\n")}`
  )
  .join("\n\n")}

---

## Education

${education
  .map(
    (ed) => `### ${ed.degree}
- **Institution**: ${ed.school}
- **Duration**: ${ed.period}
- **Grade/Score**: ${ed.marks || "Ongoing"}`
  )
  .join("\n\n")}

---

## Certifications

${certifications
  .map((c) => `- **${c.name}** issued by ${c.issuer} (${c.year})`)
  .join("\n")}

---

## Full Projects Catalog (${projects.length} Projects)

${projects
  .map((p, idx) => {
    const highlights =
      "highlights" in p && Array.isArray((p as { highlights?: string[] }).highlights)
        ? (p as { highlights?: string[] }).highlights!.map((h) => `  - ${h}`).join("\n")
        : "  - Production-ready full stack implementation";

    const featuresList =
      "features" in p && Array.isArray((p as { features?: { category: string; items: string[] }[] }).features)
        ? (p as { features: { category: string; items: string[] }[] }).features
            .map((f) => `  - **${f.category}**: ${f.items.join(", ")}`)
            .join("\n")
        : "";

    const techDetailedList =
      "techDetailed" in p && Array.isArray((p as { techDetailed?: { layer: string; value: string }[] }).techDetailed)
        ? (p as { techDetailed: { layer: string; value: string }[] }).techDetailed
            .map((t) => `  - **${t.layer}**: ${t.value}`)
            .join("\n")
        : "";

    return `### Project ${idx + 1}: ${p.title}

- **Project ID**: ${p.id}
- **Canonical Page**: ${SITE_URL}/projects/${p.id}
- **Markdown URL**: ${SITE_URL}/projects/${p.id}.md
- **Live Demo**: ${p.liveLink || "N/A"}
- **Source Code**: ${p.github || "Private / Proprietary"}
- **Role**: ${p.role || "Lead Developer"}
- **Timeline**: ${p.date}
- **Tech Stack**: ${p.tech.join(", ")}

#### Overview:
${p.desc.join("\n\n")}

#### Key Highlights:
${highlights}

${featuresList ? `#### Categorized Features:\n${featuresList}` : ""}

${techDetailedList ? `#### Architecture & Tech Layers:\n${techDetailedList}` : ""}
`;
  })
  .join("\n---\n\n")}

---

## Templates & Starters Catalog (${templates.length} Templates)

${templates
  .map((t, idx) => {
    const highlights =
      t.highlights && t.highlights.length > 0
        ? t.highlights.map((h) => `  - ${h}`).join("\n")
        : "  - High quality starter kit";

    const features =
      t.features && t.features.length > 0
        ? t.features.map((f) => `  - ${f}`).join("\n")
        : "";

    return `### Template ${idx + 1}: ${t.title}

- **Template ID**: ${t.id}
- **Canonical Page**: ${SITE_URL}/templates/${t.id}
- **Markdown URL**: ${SITE_URL}/templates/${t.id}.md
- **Live Demo**: ${t.liveLink || "N/A"}
- **Source Code**: ${t.github || "N/A"}
- **Category**: ${t.category}
- **Year**: ${t.date}
- **Tech Stack**: ${t.tech.join(", ")}

#### Description:
${t.desc.join("\n\n")}

#### Key Highlights:
${highlights}

${features ? `#### Features:\n${features}` : ""}
`;
  })
  .join("\n---\n\n")}

---

## Contact & Social Profiles

- **Email**: info@priyam.tech
- **Website**: ${SITE_URL}
- **Blog**: ${BLOG_URL}
- **GitHub**: https://github.com/gyanranjan-priyam
- **LinkedIn**: https://linkedin.com/in/gyanranjan-priyam
- **Twitter/X**: https://x.com/gr_priyam
- **Instagram**: https://instagram.com/gyanranjanpriyam
- **Resume**: https://assets.priyam.tech/resume/resume.pdf
`.trim();

  return new Response(content, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600, stale-while-revalidate=86400",
    },
  });
}