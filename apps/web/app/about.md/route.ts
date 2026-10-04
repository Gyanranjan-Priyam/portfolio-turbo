import { SITE_URL, BLOG_URL } from "@/lib/config";
import { experiences } from "@/data/experienceData";
import { education, certifications } from "@/data/educationData";
import { skillCategories } from "@/data/skillCategories";

export const revalidate = 3600;

export async function GET() {
  const content = `# About Gyanranjan Priyam

> Electrical Engineer by degree, Full-Stack Developer and AI Engineer by passion.

- Website: ${SITE_URL}
- Blog: ${BLOG_URL}
- GitHub: https://github.com/gyanranjan-priyam
- LinkedIn: https://linkedin.com/in/gyanranjan-priyam
- Twitter/X: https://x.com/gr_priyam
- Email: info@priyam.tech
- Resume: https://assets.priyam.tech/resume/resume.pdf

---

## Bio & Background

I am Gyanranjan Priyam, a software engineer and electrical engineering student at Government College of Engineering, Kalahandi. I specialize in full-stack web development, scalable cloud architecture, and AI-enabled software solutions.

I have led community initiatives as a GeeksforGeeks Campus Mantri, mentored fellow student developers, built production-grade web applications handling thousands of users, and contributed actively to open-source projects including the Google Gemini CLI ecosystem.

---

## Technical Skills

${skillCategories
  .map(
    (cat) => `### ${cat.number}. ${cat.title}
${cat.skills.map((s) => `- ${s.name}`).join("\n")}`
  )
  .join("\n\n")}

---

## Experience & Career Journey

${experiences
  .map(
    (e) => `### ${e.title} at ${e.company}
- **Duration**: ${e.period}
${e.content.map((d: string) => `- ${d}`).join("\n")}`
  )
  .join("\n\n")}

---

## Education

${education
  .map(
    (ed) => `### ${ed.degree}
- **Institution**: ${ed.school} (${ed.period})
- **Performance**: ${ed.marks || "Ongoing"}`
  )
  .join("\n\n")}

---

## Certifications

${certifications
  .map((c) => `- **${c.name}** — ${c.issuer} (${c.year})`)
  .join("\n")}
`.trim();

  return new Response(content, {
    headers: {
      "Content-Type": "text/markdown; charset=utf-8",
      "Cache-Control": "public, max-age=3600, stale-while-revalidate=86400",
    },
  });
}
