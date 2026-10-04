export interface MarkdownHeading {
  slug: string;
  text: string;
  depth: number;
}

export interface BlogPostData {
  id: string;
  slug: string;
  title: string;
  description: string;
  pubDate: string; // ISO string
  updatedDate?: string;
  heroImage?: string;
  coverText?: string;
  tags: string[];
  category: string;
  author: string;
  authorImage?: string;
  readingTime: string;
  featured: boolean;
  content: string;
  htmlContent?: string;
  headings: MarkdownHeading[];
}

const placeholders = [
  '/blog-placeholder-2.jpg',
  '/blog-placeholder-3.jpg',
  '/blog-placeholder-4.jpg',
  '/blog-placeholder-5.jpg',
];

const slugToPlaceholderMap: Record<string, string> = {
  'my-role-in-hackverse-26-organising-managing-and-building-the-hackathon': '/blog-placeholder-3.jpg',
  'securing-1st-position-in-sih-internal-round-and-our-problem-statement-journey': '/blog-placeholder-2.jpg',
  'when-code-meets-curriculum-the-unspoken-grind-of-being-a-student-and-a-developer': '/blog-placeholder-3.jpg',
  'the-tools-i-actually-use-to-build-production-level-websites': '/blog-placeholder-4.jpg',
  'from-electrical-engineering-to-web-development-my-unexpected-journey-into-coding': '/blog-placeholder-5.jpg',
  'my-journey-to-becoming-a-gfg-campus-mantri-doubts-a-shaky-interview-and-an-unexpected-yes': '/blog-placeholder-3.jpg',
  'successfully-completing-my-geeksforgeeks-campus-mantri-journey-months-of-growth-and-leadership': '/blog-placeholder-4.jpg',
};

export function getPlaceholderImage(id: string): string {
  if (slugToPlaceholderMap[id]) {
    return slugToPlaceholderMap[id];
  }
  let hash = 0;
  for (let i = 0; i < id.length; i++) {
    hash = (hash << 5) - hash + id.charCodeAt(i);
    hash |= 0;
  }
  return placeholders[Math.abs(hash) % placeholders.length];
}

