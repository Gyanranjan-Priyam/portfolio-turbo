import { BLOG_URL } from "./config";

export interface LatestPost {
  title: string;
  href: string;
  date?: string;
  external?: boolean;
}

export const FALLBACK_POSTS: LatestPost[] = [
  {
    title: "My Role in HackVerse '26: Organising, Managing & Building the Hackathon",
    href: `${BLOG_URL}/my-role-in-hackverse-26-organising-managing-and-building-the-hackathon`,
    date: "Oct 2, 2026",
    external: true,
  },
  {
    title: "Securing 1st Position in SIH Internal Round & Problem Statement Journey",
    href: `${BLOG_URL}/securing-1st-position-in-sih-internal-round-and-our-problem-statement-journey`,
    date: "Sep 8, 2026",
    external: true,
  },
];

function parseFrontmatter(fileContents: string): { title?: string; pubDate?: string } {
  const match = fileContents.match(/^---\r?\n([\s\S]*?)\r?\n---/);
  if (!match) return {};
  const yaml = match[1];
  const titleMatch = yaml.match(/^title:\s*["']?(.*?)["']?$/m);
  const pubDateMatch = yaml.match(/^pubDate:\s*["']?(.*?)["']?$/m);
  return {
    title: titleMatch ? titleMatch[1].trim() : undefined,
    pubDate: pubDateMatch ? pubDateMatch[1].trim() : undefined,
  };
}

export function getLatestBlogPosts(limit = 2): LatestPost[] {
  if (typeof window !== "undefined") {
    return FALLBACK_POSTS.slice(0, limit);
  }

  try {
    // Dynamic require so bundlers do not try to bundle fs into client components
    // eslint-disable-next-line @typescript-eslint/no-require-imports
    const fs = require("fs");
    // eslint-disable-next-line @typescript-eslint/no-require-imports
    const path = require("path");

    const candidateDirs = [
      path.resolve(process.cwd(), "../blog/content/blog"),
      path.resolve(process.cwd(), "apps/blog/content/blog"),
      path.resolve(process.cwd(), "../../apps/blog/content/blog"),
    ];

    const blogDir = candidateDirs.find((dir: string) => fs.existsSync(dir));

    if (!blogDir) {
      return FALLBACK_POSTS.slice(0, limit);
    }

    const files = (fs.readdirSync(blogDir) as string[]).filter(
      (f: string) => f.endsWith(".md") || f.endsWith(".mdx")
    );

    const posts = files.map((fileName: string) => {
      const slug = fileName.replace(/\.mdx?$/, "");
      const fullPath = path.join(blogDir, fileName);
      const fileContents = fs.readFileSync(fullPath, "utf8");
      const data = parseFrontmatter(fileContents);

      return {
        title: (data.title as string) || slug,
        slug,
        pubDate: data.pubDate ? new Date(data.pubDate).toISOString() : new Date().toISOString(),
        href: `${BLOG_URL}/${slug}`,
        external: true,
      };
    });

    posts.sort((a, b) => new Date(b.pubDate).getTime() - new Date(a.pubDate).getTime());

    return posts.slice(0, limit).map((p) => ({
      title: p.title,
      href: p.href,
      external: true,
    }));
  } catch (error) {
    console.error("Error reading latest blog posts in web footer:", error);
    return FALLBACK_POSTS.slice(0, limit);
  }
}
