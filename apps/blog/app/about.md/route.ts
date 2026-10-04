import { AUTHOR_NAME, AUTHOR_PORTFOLIO, AUTHOR_GITHUB, AUTHOR_TWITTER, SITE_URL } from '@/lib/consts';

export const revalidate = 86400;

export async function GET() {
  const content = `# About Gyanranjan Priyam & Priyam's Blog

> Author & Engineer: Gyanranjan Priyam
> Blog URL: ${SITE_URL}
> Main Portfolio: ${AUTHOR_PORTFOLIO}
> GitHub: ${AUTHOR_GITHUB}
> Twitter/X: https://x.com/${AUTHOR_TWITTER.replace('@', '')}

---

## Introduction

Hi, I'm Gyanranjan Priyam — a fullstack software engineer focused on building high-performance web systems, intuitive user interfaces, and scalable distributed architectures.

## About This Blog

Priyam's Blog is a publication dedicated to technical deep dives, architectural case studies, performance benchmarks, and real-world software engineering practices.

### Topics Covered:
- **Fullstack Frameworks**: Next.js 16, React 19 Server Components, TypeScript.
- **Monorepo Systems**: Turborepo, Bun workspaces, shared design systems.
- **Motion & UI Engineering**: Tailwind CSS, accessible components, micro-interactions.
- **Databases & APIs**: PostgreSQL, Prisma ORM, REST, GraphQL.
- **AI Integration**: Grounding LLMs, prompt engineering, agentic systems.

## Contact & Connect

- Portfolio: ${AUTHOR_PORTFOLIO}
- Email: info@priyam.tech
- GitHub: ${AUTHOR_GITHUB}
`.trim();

  return new Response(content, {
    headers: {
      'Content-Type': 'text/markdown; charset=utf-8',
      'Cache-Control': 'public, max-age=86400, s-maxage=604800',
    },
  });
}
