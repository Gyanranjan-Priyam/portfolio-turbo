import type { APIContext } from "astro";
import { getCollection } from "astro:content";
import rss from "@astrojs/rss";
import { SITE_DESCRIPTION, SITE_TITLE, AUTHOR_NAME, SITE_URL } from "../consts";

export async function GET(context: APIContext) {
  const posts = await getCollection("blog");
  const sortedPosts = posts.sort(
    (a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf()
  );

  const siteUrl = context.site?.toString() || SITE_URL;

  return rss({
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    site: siteUrl,
    customData: `<language>en-us</language>
<copyright>© ${new Date().getFullYear()} ${AUTHOR_NAME}. All rights reserved.</copyright>
<docs>https://cyber.harvard.edu/rss/rss.html</docs>
<generator>Astro v5 RSS Generator</generator>`,
    items: sortedPosts.map((post) => ({
      title: post.data.title,
      description: post.data.description,
      pubDate: post.data.pubDate,
      link: `/${post.id}/`,
      categories: post.data.tags || [],
      author: `${post.data.author || AUTHOR_NAME}`,
      commentsUrl: `${siteUrl}/${post.id}/`,
    })),
  });
}
