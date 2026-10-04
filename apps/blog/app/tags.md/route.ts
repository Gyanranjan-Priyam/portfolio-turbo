import { getAllPosts, getAllTags, getPostsByTag } from '@/lib/posts';
import { SITE_URL } from '@/lib/consts';

export const revalidate = 3600;

export async function GET() {
  const tags = getAllTags();

  const content = `# Topic Tags & Categories — Priyam's Blog

> Taxonomy of technical topics and published articles on Priyam's Blog.

- Blog URL: ${SITE_URL}
- Total Topics: ${tags.length}

---

${tags
  .map((tag) => {
    const posts = getPostsByTag(tag);
    return `## ${tag} (${posts.length} articles)
- Topic Page: ${SITE_URL}/tags/${encodeURIComponent(tag)}
${posts.map((p) => `- [${p.title}](${SITE_URL}/${p.slug}.md) (${p.pubDate.split('T')[0]})`).join('\n')}`;
  })
  .join('\n\n')}
`.trim();

  return new Response(content, {
    headers: {
      'Content-Type': 'text/markdown; charset=utf-8',
      'Cache-Control': 'public, max-age=3600, s-maxage=86400',
    },
  });
}
