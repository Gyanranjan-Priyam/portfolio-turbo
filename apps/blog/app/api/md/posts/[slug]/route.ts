import { getAllPosts, getPostBySlug } from '@/lib/posts';
import { SITE_URL, AUTHOR_NAME, AUTHOR_PORTFOLIO } from '@/lib/consts';

export const revalidate = 3600;

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((p) => ({
    slug: p.slug,
  }));
}

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    return new Response('Article not found', { status: 404 });
  }

  const pubDateStr = post.pubDate.split('T')[0];
  const updatedDateStr = post.updatedDate ? post.updatedDate.split('T')[0] : pubDateStr;
  const tagsStr = post.tags?.join(', ') || '';

  const frontmatter = `---
title: "${post.title.replace(/"/g, '\\"')}"
description: "${post.description.replace(/"/g, '\\"')}"
published: "${pubDateStr}"
updated: "${updatedDateStr}"
author: "${post.author || AUTHOR_NAME}"
authorUrl: "${AUTHOR_PORTFOLIO}"
category: "${post.category || 'Engineering'}"
readingTime: "${post.readingTime || '5 min read'}"
tags: [${post.tags?.map((t) => `"${t}"`).join(', ')}]
canonicalUrl: "${SITE_URL}/${post.slug}"
---`;

  const content = `${frontmatter}

# ${post.title}

> ${post.description}

- **Author**: [${post.author || AUTHOR_NAME}](${AUTHOR_PORTFOLIO})
- **Published**: ${pubDateStr}
- **Category**: ${post.category || 'Engineering'}
- **Reading Time**: ${post.readingTime || '5 min read'}
- **Tags**: ${tagsStr}
- **Canonical URL**: ${SITE_URL}/${post.slug}

---

${post.content.trim()}
`.trim();

  return new Response(content, {
    headers: {
      'Content-Type': 'text/markdown; charset=utf-8',
      'Cache-Control': 'public, max-age=3600, s-maxage=86400',
    },
  });
}
