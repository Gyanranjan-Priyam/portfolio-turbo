import { getAllPosts, getAllTags } from '@/lib/posts';
import { SITE_URL } from '@/lib/consts';

export const revalidate = 3600;

export async function GET() {
  const posts = getAllPosts();
  const tags = getAllTags();
  const now = new Date().toISOString();

  const staticPages = [
    {
      url: `${SITE_URL}/`,
      lastmod: posts[0] ? new Date(posts[0].updatedDate || posts[0].pubDate).toISOString() : now,
      changefreq: 'daily',
      priority: '1.0',
    },
    {
      url: `${SITE_URL}/about`,
      lastmod: now,
      changefreq: 'monthly',
      priority: '0.8',
    },
    {
      url: `${SITE_URL}/llms.txt`,
      lastmod: now,
      changefreq: 'weekly',
      priority: '0.9',
    },
    {
      url: `${SITE_URL}/llms-full.txt`,
      lastmod: now,
      changefreq: 'weekly',
      priority: '0.9',
    },
    {
      url: `${SITE_URL}/about.md`,
      lastmod: now,
      changefreq: 'monthly',
      priority: '0.7',
    },
    {
      url: `${SITE_URL}/tags.md`,
      lastmod: now,
      changefreq: 'weekly',
      priority: '0.7',
    },
  ];

  // Article HTML pages
  const postPages = posts.map((post) => ({
    url: `${SITE_URL}/${post.slug}`,
    lastmod: new Date(post.updatedDate || post.pubDate).toISOString(),
    changefreq: 'weekly',
    priority: '0.9',
  }));

  // Article Markdown pages for AI Search Optimization
  const postMdPages = posts.map((post) => ({
    url: `${SITE_URL}/${post.slug}.md`,
    lastmod: new Date(post.updatedDate || post.pubDate).toISOString(),
    changefreq: 'weekly',
    priority: '0.8',
  }));

  // Tag pages
  const tagPages = tags.map((tag) => ({
    url: `${SITE_URL}/tags/${encodeURIComponent(tag)}`,
    lastmod: now,
    changefreq: 'weekly',
    priority: '0.7',
  }));

  const allUrls = [...staticPages, ...postPages, ...postMdPages, ...tagPages];

  const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:news="http://www.google.com/schemas/sitemap-news/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"
        xmlns:video="http://www.google.com/schemas/sitemap-video/1.1">
${allUrls
  .map(
    (item) => `  <url>
    <loc>${item.url}</loc>
    <lastmod>${item.lastmod}</lastmod>
    <changefreq>${item.changefreq}</changefreq>
    <priority>${item.priority}</priority>
  </url>`
  )
  .join('\n')}
</urlset>`.trim();

  return new Response(sitemapXml, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, max-age=3600, s-maxage=86400',
    },
  });
}
