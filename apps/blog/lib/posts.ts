import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import remarkGfm from 'remark-gfm';
import remarkHtml from 'remark-html';
import { createHighlighter } from 'shiki';
import { BlogPostData, MarkdownHeading } from './types';

export * from './types';

const postsDirectory = path.join(process.cwd(), 'content/blog');

function calculateReadingTime(text: string): string {
  const wordsPerMinute = 200;
  const words = text.trim().split(/\s+/).length;
  const minutes = Math.ceil(words / wordsPerMinute);
  return `${minutes} min read`;
}

function extractHeadings(markdown: string): MarkdownHeading[] {
  const headingRegex = /^(#{1,6})\s+(.+)$/gm;
  const headings: MarkdownHeading[] = [];
  let match;

  while ((match = headingRegex.exec(markdown)) !== null) {
    const depth = match[1].length;
    const text = match[2]
      .trim()
      .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1') // strip markdown links
      .replace(/[`*_~]/g, ''); // strip inline markdown formatting
    const slug = text
      .toLowerCase()
      .replace(/[^\w\s-]/g, '')
      .replace(/\s+/g, '-');
    headings.push({ slug, text, depth });
  }

  return headings;
}

let highlighterPromise: ReturnType<typeof createHighlighter> | null = null;
async function getHighlighter() {
  if (!highlighterPromise) {
    highlighterPromise = createHighlighter({
      themes: ['github-light', 'github-dark'],
      langs: [
        'javascript',
        'typescript',
        'tsx',
        'jsx',
        'html',
        'css',
        'json',
        'markdown',
        'bash',
        'powershell',
        'yaml',
        'sql',
        'python',
      ],
    });
  }
  return highlighterPromise;
}

export async function markdownToHtml(markdown: string): Promise<string> {
  const highlighter = await getHighlighter();

  // Process custom code fences with shiki
  const codeBlockRegex = /```([a-zA-Z0-9_-]*)\n([\s\S]*?)```/g;
  const processedMarkdown = markdown.replace(codeBlockRegex, (match, lang, code) => {
    const language = lang || 'text';
    try {
      const isSupported = highlighter.getLoadedLanguages().includes(language);
      const highlighted = highlighter.codeToHtml(code.trimEnd(), {
        lang: isSupported ? language : 'text',
        themes: {
          light: 'github-light',
          dark: 'github-dark',
        },
      });
      return `\n<div class="shiki-container">${highlighted}</div>\n`;
    } catch {
      return match;
    }
  });

  const processedContent = await remark()
    .use(remarkGfm)
    .use(remarkHtml, { sanitize: false })
    .process(processedMarkdown);

  let html = processedContent.toString();

  // Add IDs to headings (h1, h2, h3, h4) for Table of Contents scrolling
  html = html.replace(/<(h[1-4])(?:\s+id="([^"]*)")?>([\s\S]*?)<\/\1>/gi, (match, tag, existingId, innerHtml) => {
    const plainText = innerHtml.replace(/<[^>]+>/g, '').trim();
    const slug = existingId || plainText
      .toLowerCase()
      .replace(/[^\w\s-]/g, '')
      .replace(/\s+/g, '-');
    return `<${tag} id="${slug}">${innerHtml}</${tag}>`;
  });

  return html;
}

export function getAllPosts(): BlogPostData[] {
  if (!fs.existsSync(postsDirectory)) {
    return [];
  }

  const fileNames = fs.readdirSync(postsDirectory);
  const allPosts = fileNames
    .filter((fileName) => fileName.endsWith('.md') || fileName.endsWith('.mdx'))
    .map((fileName) => {
      const slug = fileName.replace(/\.mdx?$/, '');
      const fullPath = path.join(postsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, 'utf8');
      const { data, content } = matter(fileContents);

      const pubDate = data.pubDate
        ? new Date(data.pubDate).toISOString()
        : new Date().toISOString();
      const updatedDate = data.updatedDate
        ? new Date(data.updatedDate).toISOString()
        : undefined;

      const readingTime = data.readingTime || calculateReadingTime(content);
      const headings = extractHeadings(content);

      return {
        id: slug,
        slug,
        title: data.title || slug,
        description: data.description || '',
        pubDate,
        updatedDate,
        heroImage: data.heroImage,
        coverText: data.coverText,
        tags: Array.isArray(data.tags) ? data.tags : [],
        category: data.category || 'Engineering',
        author: data.author || 'Gyanranjan Priyam',
        authorImage: data.authorImage,
        readingTime,
        featured: Boolean(data.featured),
        content,
        headings,
      };
    });

  return allPosts.sort(
    (a, b) => new Date(b.pubDate).getTime() - new Date(a.pubDate).getTime()
  );
}

export async function getPostBySlug(slug: string): Promise<BlogPostData | null> {
  const posts = getAllPosts();
  const post = posts.find((p) => p.slug === slug);
  if (!post) return null;

  const htmlContent = await markdownToHtml(post.content);
  return {
    ...post,
    htmlContent,
  };
}

export function getAllTags(): string[] {
  const posts = getAllPosts();
  const tags = new Set<string>();
  posts.forEach((p) => {
    p.tags?.forEach((t) => tags.add(t));
  });
  return Array.from(tags).sort();
}

export function getPostsByTag(tag: string): BlogPostData[] {
  const posts = getAllPosts();
  return posts.filter((p) =>
    p.tags?.some((t) => t.toLowerCase() === tag.toLowerCase())
  );
}
