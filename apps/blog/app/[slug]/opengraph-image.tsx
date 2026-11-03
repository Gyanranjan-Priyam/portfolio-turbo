import { renderBlogOgImage } from "@/lib/blog-og";
import { getPostBySlug } from "@/lib/posts";

export const alt = "Article OpenGraph Image";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

interface Props {
  params: Promise<{ slug: string }>;
}

export default async function Image({ params }: Props) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  const title = post?.title || "Priyam's Blog Article";
  const subtitle =
    post?.description || "An in-depth technical exploration and case study.";
  const category = post?.category || "Engineering";
  const readingTime = post?.readingTime || "5 min read";
  const tags =
    post?.tags && post.tags.length > 0
      ? post.tags
      : ["Engineering", "Web Architecture", "Frontend"];

  const topRightLines = [
    "// ARTICLE · SPECIFICATION",
    `→ ${category.toUpperCase()}${readingTime ? ` · ${readingTime.toUpperCase()}` : ""}`,
    "→ VERIFIED PERFORMANCE 99+",
    "// NEVER STOPS LEARNING",
  ];

  const bottomLeftLines = [
    "// PUBLICATION · DOSSIER",
    "→ AUTHOR: GYANRANJAN PRIYAM",
    "→ ROLE: FRONTEND DEVELOPER",
    "→ DOMAIN: BLOGS.PRIYAM.TECH",
    "// ALWAYS BUILDING",
  ];

  return renderBlogOgImage({
    title,
    subtitle,
    category,
    readingTime,
    tags,
    topRightLines,
    bottomLeftLines,
  });
}
