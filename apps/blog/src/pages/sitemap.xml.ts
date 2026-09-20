import type { APIRoute } from "astro";
import { getCollection } from "astro:content";
import { SITE_URL } from "../consts";

export const GET: APIRoute = async () => {
  const posts = await getCollection("blog");
  const sortedPosts = posts.sort(
    (a, b) => (b.data.updatedDate || b.data.pubDate).valueOf() - (a.data.updatedDate || a.data.pubDate).valueOf()
  );

  const uniqueTags = [
    ...new Set(posts.flatMap((post) => post.data.tags || [])),
  ];

  const staticPages = [
    {
      url: `${SITE_URL}/`,
      lastmod: sortedPosts[0] ? (sortedPosts[0].data.updatedDate || sortedPosts[0].data.pubDate).toISOString() : new Date().toISOString(),
      changefreq: "daily",
      priority: "1.0",
    },
    {
      url: `${SITE_URL}/about/`,
      lastmod: new Date().toISOString(),
      changefreq: "monthly",
      priority: "0.8",
    },
  ];

  const postPages = sortedPosts.map((post) => ({
    url: `${SITE_URL}/${post.id}/`,
    lastmod: (post.data.updatedDate || post.data.pubDate).toISOString(),
    changefreq: "weekly",
    priority: "0.9",
  }));

  const tagPages = uniqueTags.map((tag) => ({
    url: `${SITE_URL}/tags/${encodeURIComponent(tag)}/`,
    lastmod: new Date().toISOString(),
    changefreq: "weekly",
    priority: "0.7",
  }));

  const allUrls = [...staticPages, ...postPages, ...tagPages];

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
  .join("\n")}
</urlset>`.trim();

  return new Response(sitemapXml, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=3600",
    },
  });
};
