import { getAllPosts } from '@/lib/posts';
import { SITE_DESCRIPTION, SITE_TITLE, AUTHOR_NAME, SITE_URL } from '@/lib/consts';

export async function GET() {
  const posts = getAllPosts();

  const rssItems = posts
    .map((post) => {
      const pubDateRfc822 = new Date(post.pubDate).toUTCString();
      const categoriesXml = post.tags
        .map((t) => `<category>${t}</category>`)
        .join('');

      return `
    <item>
      <title><![CDATA[${post.title}]]></title>
      <description><![CDATA[${post.description}]]></description>
      <link>${SITE_URL}/${post.slug}/</link>
      <guid isPermaLink="true">${SITE_URL}/${post.slug}/</guid>
      <pubDate>${pubDateRfc822}</pubDate>
      <author>${post.author || AUTHOR_NAME}</author>
      ${categoriesXml}
    </item>`;
    })
    .join('');

  const rssXml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title><![CDATA[${SITE_TITLE}]]></title>
    <description><![CDATA[${SITE_DESCRIPTION}]]></description>
    <link>${SITE_URL}</link>
    <atom:link href="${SITE_URL}/rss.xml" rel="self" type="application/rss+xml"/>
    <language>en-us</language>
    <copyright>© ${new Date().getFullYear()} ${AUTHOR_NAME}. All rights reserved.</copyright>
    <docs>https://cyber.harvard.edu/rss/rss.html</docs>
    <generator>Next.js 16 RSS Generator</generator>
    ${rssItems}
  </channel>
</rss>`.trim();

  return new Response(rssXml, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, max-age=3600, s-maxage=3600',
    },
  });
}
