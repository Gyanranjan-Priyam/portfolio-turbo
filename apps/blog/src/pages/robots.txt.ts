import type { APIRoute } from "astro";
import { SITE_URL } from "../consts";

export const GET: APIRoute = async () => {
  const robotsTxt = `
# ==============================================================================
# Robots.txt for Priyam's Blog (https://blogs.priyam.tech)
# Optimized for Web Search Engines & AI LLM Crawlers
# ==============================================================================

User-agent: *
Allow: /
Disallow: /offline
Disallow: /404

# Major Search Engine Crawlers
User-agent: Googlebot
Allow: /

User-agent: Bingbot
Allow: /

User-agent: Applebot
Allow: /

User-agent: DuckDuckBot
Allow: /

User-agent: YandexBot
Allow: /

User-agent: Baiduspider
Allow: /

User-agent: Slurp
Allow: /

# AI Search & LLM Crawlers (Allowed for AI Indexing & Retrieval)
User-agent: GPTBot
Allow: /

User-agent: ChatGPT-User
Allow: /

User-agent: Google-Extended
Allow: /

User-agent: ClaudeBot
Allow: /

User-agent: Claude-Web
Allow: /

User-agent: PerplexityBot
Allow: /

User-agent: Amazonbot
Allow: /

User-agent: CCBot
Allow: /

User-agent: FacebookBot
Allow: /

User-agent: Bytespider
Allow: /

User-agent: Cohere-ai
Allow: /

User-agent: anthropic-ai
Allow: /

# Host
Host: ${SITE_URL}

# Sitemaps & Feeds
Sitemap: ${SITE_URL}/sitemap-index.xml
Sitemap: ${SITE_URL}/sitemap-0.xml
Sitemap: ${SITE_URL}/sitemap.xml
Sitemap: ${SITE_URL}/rss.xml

# LLM & AI Context Files
# https://llmstxt.org/
# https://blogs.priyam.tech/llms.txt
# https://blogs.priyam.tech/llms-full.txt
`.trim();

  return new Response(robotsTxt, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=86400, s-maxage=86400",
    },
  });
};
