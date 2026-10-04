import { getAllPosts, getAllTags } from '@/lib/posts';
import {
  SITE_TITLE,
  SITE_DESCRIPTION,
  SITE_URL,
  AUTHOR_NAME,
  AUTHOR_TWITTER,
  AUTHOR_GITHUB,
  AUTHOR_PORTFOLIO,
} from '@/lib/consts';

export const revalidate = 3600;

export async function GET() {
  const posts = getAllPosts();
  const tags = getAllTags();

  const content = `# ${SITE_TITLE}

> ${SITE_DESCRIPTION}

- Author: ${AUTHOR_NAME}
- Portfolio: ${AUTHOR_PORTFOLIO}
- Blog Homepage: ${SITE_URL}
- GitHub: ${AUTHOR_GITHUB}
- Twitter/X: https://x.com/${AUTHOR_TWITTER.replace('@', '')}
- RSS Feed: ${SITE_URL}/rss.xml
- Sitemap: ${SITE_URL}/sitemap.xml
- Main Portfolio LLMs.txt: ${AUTHOR_PORTFOLIO}/llms.txt

---

## Core Documentation & Context Feeds

- [Full Content Dump (Consolidated Markdown)](${SITE_URL}/llms-full.txt): Complete full-text markdown of all published articles for fast LLM ingestion and RAG embedding.
- [About the Author & Publication (Markdown)](${SITE_URL}/about.md): Technical philosophy, career journey, campus leadership, and engineering background.
- [Topic Categories & Tag Index (Markdown)](${SITE_URL}/tags.md): All article categories, tags, and classification taxonomy.

---

## Published Technical Articles (${posts.length})

${posts
  .map((post) => {
    const pubDateStr = post.pubDate.split('T')[0];
    const tagsStr = post.tags && post.tags.length > 0 ? ` | Tags: ${post.tags.join(', ')}` : '';
    const readingTimeStr = post.readingTime ? ` | ${post.readingTime}` : '';
    return `### [${post.title}](${SITE_URL}/${post.slug}.md)
- **Published**: ${pubDateStr}${readingTimeStr}${tagsStr}
- **Category**: ${post.category || 'Engineering'}
- **Author**: ${post.author || AUTHOR_NAME}
- **Summary**: ${post.description}
- **Web Article**: ${SITE_URL}/${post.slug}
- **Markdown Source**: ${SITE_URL}/${post.slug}.md`;
  })
  .join('\n\n')}

---

## Topics & Tags

${tags.map((tag) => `- [${tag}](${SITE_URL}/tags/${encodeURIComponent(tag)}): Articles categorized under "${tag}"`).join('\n')}

---

## Site Navigation

- [Blog Archive / Home](${SITE_URL}): Chronological index of all articles with live search.
- [About Page](${SITE_URL}/about): Background on author and publication.
- [Main Developer Portfolio](${AUTHOR_PORTFOLIO}): Projects, interactive apps, and career highlights.
`.trim();

  return new Response(content, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=3600, s-maxage=86400',
    },
  });
}
