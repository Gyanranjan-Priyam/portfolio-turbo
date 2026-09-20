import type { APIRoute } from "astro";
import { getCollection } from "astro:content";
import {
  SITE_TITLE,
  SITE_DESCRIPTION,
  SITE_URL,
  AUTHOR_NAME,
  AUTHOR_TWITTER,
  AUTHOR_PORTFOLIO,
} from "../consts";

export const GET: APIRoute = async () => {
  const posts = await getCollection("blog");
  const sortedPosts = posts.sort(
    (a, b) => (b.data.updatedDate || b.data.pubDate).valueOf() - (a.data.updatedDate || a.data.pubDate).valueOf()
  );

  const header = `# ${SITE_TITLE} — Full Content Index for LLMs

> ${SITE_DESCRIPTION}
> Author: ${AUTHOR_NAME} (${AUTHOR_PORTFOLIO} | @${AUTHOR_TWITTER.replace("@", "")})
> Generated from: ${SITE_URL}
> Total Articles: ${sortedPosts.length}

---
`;

  const articlesContent = sortedPosts
    .map((post, idx) => {
      const pubDateStr = post.data.pubDate.toISOString().split("T")[0];
      const updatedDateStr = post.data.updatedDate ? post.data.updatedDate.toISOString().split("T")[0] : pubDateStr;
      const tagsStr = post.data.tags?.join(", ") || "";
      const body = post.body || "";

      return `## Article ${idx + 1}: ${post.data.title}

- **URL**: ${SITE_URL}/${post.id}/
- **Author**: ${post.data.author || AUTHOR_NAME}
- **Published**: ${pubDateStr}
- **Updated**: ${updatedDateStr}
- **Category**: ${post.data.category || "Engineering"}
- **Reading Time**: ${post.data.readingTime || "5 min read"}
- **Tags**: ${tagsStr}
- **Summary**: ${post.data.description}

### Content:

${body.trim()}

---`;
    })
    .join("\n\n");

  const fullContent = `${header}\n${articlesContent}\n`;

  return new Response(fullContent, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=3600",
    },
  });
};
