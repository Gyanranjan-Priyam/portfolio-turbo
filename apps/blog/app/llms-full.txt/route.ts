import { getAllPosts } from '@/lib/posts';
import {
  SITE_TITLE,
  SITE_DESCRIPTION,
  SITE_URL,
  AUTHOR_NAME,
  AUTHOR_TWITTER,
  AUTHOR_PORTFOLIO,
} from '@/lib/consts';

export async function GET() {
  const posts = getAllPosts();

  const header = `# ${SITE_TITLE} — Full Content Index for LLMs

> ${SITE_DESCRIPTION}
> Author: ${AUTHOR_NAME} (${AUTHOR_PORTFOLIO} | @${AUTHOR_TWITTER.replace('@', '')})
> Generated from: ${SITE_URL}
> Total Articles: ${posts.length}

---
`;

  const articlesContent = posts
    .map((post, idx) => {
      const pubDateStr = post.pubDate.split('T')[0];
      const updatedDateStr = post.updatedDate ? post.updatedDate.split('T')[0] : pubDateStr;
      const tagsStr = post.tags?.join(', ') || '';
      const body = post.content || '';

      return `## Article ${idx + 1}: ${post.title}

- **URL**: ${SITE_URL}/${post.slug}/
- **Author**: ${post.author || AUTHOR_NAME}
- **Published**: ${pubDateStr}
- **Updated**: ${updatedDateStr}
- **Category**: ${post.category || 'Engineering'}
- **Reading Time**: ${post.readingTime || '5 min read'}
- **Tags**: ${tagsStr}
- **Summary**: ${post.description}

### Content:

${body.trim()}

---`;
    })
    .join('\n\n');

  const fullContent = `${header}\n${articlesContent}\n`;

  return new Response(fullContent, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=3600, s-maxage=3600',
    },
  });
}
