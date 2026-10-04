import { SITE_URL, AUTHOR_PORTFOLIO } from '@/lib/consts';

export const revalidate = 86400;

export async function GET() {
  const robotsTxt = `
# ==============================================================================
# Robots.txt for Priyam's Blog (https://blogs.priyam.tech)
# Optimized for Web Search Engines (SEO) & AI Search / LLM Crawlers (ASEO / GEO)
# ==============================================================================

User-agent: *
Allow: /
Disallow: /404

# ------------------------------------------------------------------------------
# Major Search Engine Crawlers
# ------------------------------------------------------------------------------
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

# ------------------------------------------------------------------------------
# AI Search Engines & LLM Retrieval Agents (Explicitly Allowed for ASEO / GEO)
# ------------------------------------------------------------------------------
User-agent: GPTBot
Allow: /

User-agent: ChatGPT-User
Allow: /

User-agent: OAI-SearchBot
Allow: /

User-agent: ClaudeBot
Allow: /

User-agent: Claude-Web
Allow: /

User-agent: anthropic-ai
Allow: /

User-agent: PerplexityBot
Allow: /

User-agent: Perplexity-User
Allow: /

User-agent: Google-Extended
Allow: /

User-agent: GoogleOther
Allow: /

User-agent: Applebot-Extended
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

User-agent: Diffbot
Allow: /

User-agent: DuckAssistBot
Allow: /

User-agent: YouBot
Allow: /

User-agent: Timpibot
Allow: /

# ------------------------------------------------------------------------------
# Host & Sitemaps
# ------------------------------------------------------------------------------
Host: ${SITE_URL}

Sitemap: ${SITE_URL}/sitemap.xml
Sitemap: ${SITE_URL}/sitemap-index.xml
Sitemap: ${SITE_URL}/sitemap-0.xml
Sitemap: ${SITE_URL}/rss.xml
Sitemap: ${AUTHOR_PORTFOLIO}/sitemap.xml

# ------------------------------------------------------------------------------
# LLM Context & Markdown Endpoints (https://llmstxt.org)
# ------------------------------------------------------------------------------
# LLMs.txt: ${SITE_URL}/llms.txt
# LLMs Full Context: ${SITE_URL}/llms-full.txt
# About (Markdown): ${SITE_URL}/about.md
# Tags (Markdown): ${SITE_URL}/tags.md
`.trim();

  return new Response(robotsTxt, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=86400, s-maxage=86400',
    },
  });
}
