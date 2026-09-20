import type { APIRoute } from "astro";
import { getCollection } from "astro:content";
import {
  SITE_TITLE,
  SITE_DESCRIPTION,
  SITE_URL,
  AUTHOR_NAME,
  AUTHOR_TWITTER,
  AUTHOR_GITHUB,
  AUTHOR_PORTFOLIO,
} from "../consts";

export const GET: APIRoute = async () => {
  const posts = await getCollection("blog");
  const sortedPosts = posts.sort(
    (a, b) => (b.data.updatedDate || b.data.pubDate).valueOf() - (a.data.updatedDate || a.data.pubDate).valueOf()
  );

  const uniqueTags = [
    ...new Set(posts.flatMap((post) => post.data.tags || [])),
  ];

  const content = `# ${SITE_TITLE}

> ${SITE_DESCRIPTION}

- Author: ${AUTHOR_NAME}
- Portfolio: ${AUTHOR_PORTFOLIO}
- Blog URL: ${SITE_URL}
- GitHub: ${AUTHOR_GITHUB}
- Twitter/X: https://x.com/${AUTHOR_TWITTER.replace("@", "")}
- RSS Feed: ${SITE_URL}/rss.xml
- Sitemap: ${SITE_URL}/sitemap.xml
- Full LLM Context: ${SITE_URL}/llms-full.txt

## About This Blog

Priyam's Blog is an engineering-focused publication by Gyanranjan Priyam covering:
- Full-stack web development (React 19, Next.js 16, Astro, TypeScript, Node.js, Tailwind CSS)
- System design, web security, and high-performance frontend architecture
- Developer tooling, production workflows, and monorepo engineering (Turborepo, Bun)
- Student developer journey, campus leadership, and GeeksforGeeks Campus Mantri experiences
- Technical tutorials, deep dives, and real-world project retrospectives

---

## Published Articles (${sortedPosts.length})

${sortedPosts
  .map((post) => {
    const pubDateStr = post.data.pubDate.toISOString().split("T")[0];
    const tagsStr = post.data.tags && post.data.tags.length > 0 ? ` | Tags: ${post.data.tags.join(", ")}` : "";
    const readingTimeStr = post.data.readingTime ? ` | ${post.data.readingTime}` : "";
    return `### [${post.data.title}](${SITE_URL}/${post.id}/)
- **Published**: ${pubDateStr}${readingTimeStr}${tagsStr}
- **Category**: ${post.data.category || "Engineering"}
- **Summary**: ${post.data.description}
- **URL**: ${SITE_URL}/${post.id}/`;
  })
  .join("\n\n")}

---

## Topic Categories & Tags

${uniqueTags.map((tag) => `- [${tag}](${SITE_URL}/tags/${encodeURIComponent(tag)}/)`).join("\n")}

---

## Main Site Navigation

- [Home / Blog Archive](${SITE_URL}/): Index of all engineering articles with search and filtering
- [About the Author](${SITE_URL}/about/): Background, technical philosophy, and contact details
- [Full LLM Dump](${SITE_URL}/llms-full.txt): Complete full-text markdown of all published posts for LLM ingestion
`.trim();

  return new Response(content, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=3600",
    },
  });
};
