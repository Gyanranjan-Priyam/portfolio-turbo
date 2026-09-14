import * as fs from "fs";
import * as path from "path";

interface TiptapMark {
  type: string;
  attrs?: Record<string, any>;
}

interface TiptapNode {
  type: string;
  attrs?: Record<string, any>;
  content?: TiptapNode[];
  text?: string;
  marks?: TiptapMark[];
}

interface BlogComponent {
  id: string;
  type: "richtext" | "imagetext" | "imageuploader" | "videoplayer" | "code" | "table";
  order: number;
  content?: any;
  text?: string | null;
  imageKey?: string | null;
  alignment?: string | null;
  videoUrl?: string | null;
  videoType?: string | null;
}

interface Blog {
  id: string;
  title: string;
  slug: string;
  shortDescription: string;
  thumbnailKey?: string | null;
  tags: string[];
  published: boolean;
  createdAt: string;
  updatedAt: string;
  components: BlogComponent[];
  user?: {
    name?: string;
  };
}

function getImageUrl(key: string | null | undefined): string {
  if (!key) return "";
  if (key.startsWith("http://") || key.startsWith("https://")) return key;
  return `https://assets.priyam.tech/${key}`;
}

// Convert a single inline node with marks to markdown
function formatInlineNode(node: TiptapNode): string {
  if (node.type === "hardBreak") return "\n";
  if (!node.text) return "";

  let text = node.text;

  if (node.marks && node.marks.length > 0) {
    for (const mark of node.marks) {
      if (mark.type === "bold") {
        text = `**${text}**`;
      } else if (mark.type === "italic") {
        text = `*${text}*`;
      } else if (mark.type === "strike") {
        text = `~~${text}~~`;
      } else if (mark.type === "code") {
        text = `\`${text}\``;
      } else if (mark.type === "link" && mark.attrs?.href) {
        text = `[${text}](${mark.attrs.href})`;
      }
    }
  }

  return text;
}

// Convert children inline nodes to text
function renderInlineContent(nodes?: TiptapNode[]): string {
  if (!nodes || !Array.isArray(nodes)) return "";
  return nodes.map(formatInlineNode).join("");
}

// Recursively convert Tiptap doc nodes to Markdown
function tiptapToMarkdown(doc: TiptapNode): string {
  if (!doc) return "";
  const parts: string[] = [];

  const nodes = doc.content || (Array.isArray(doc) ? doc : [doc]);

  for (const node of nodes) {
    switch (node.type) {
      case "heading": {
        // Demote h1 to h2 so page title remains the unique h1
        const rawLevel = node.attrs?.level || 2;
        const level = Math.min(6, Math.max(2, rawLevel === 1 ? 2 : rawLevel));
        const prefix = "#".repeat(level);
        let headingText = renderInlineContent(node.content).trim();
        // Remove enclosing bold/italic marks if the entire heading is bold
        headingText = headingText.replace(/^\*\*(.*?)\*\*$/, "$1").replace(/^\*(.*?)\*$/, "$1").trim();
        if (headingText) {
          parts.push(`\n${prefix} ${headingText}\n`);
        }
        break;
      }
      case "paragraph": {
        const pText = renderInlineContent(node.content);
        if (pText.trim()) {
          parts.push(`\n${pText}\n`);
        }
        break;
      }
      case "blockquote": {
        const quoteContent = tiptapToMarkdown({ type: "doc", content: node.content });
        const quoteLines = quoteContent
          .trim()
          .split("\n")
          .map((line) => `> ${line}`)
          .join("\n");
        if (quoteLines.trim()) {
          parts.push(`\n${quoteLines}\n`);
        }
        break;
      }
      case "codeBlock": {
        const lang = node.attrs?.language || "";
        const codeText = node.content?.map((n: TiptapNode) => n.text || "").join("") || "";
        if (codeText.trim()) {
          parts.push(`\n\`\`\`${lang}\n${codeText}\n\`\`\`\n`);
        }
        break;
      }
      case "bulletList": {
        const listItems = (node.content || [])
          .map((item: TiptapNode) => {
            const itemText = (item.content || [])
              .map((c: TiptapNode) => {
                if (c.type === "paragraph") return renderInlineContent(c.content);
                return tiptapToMarkdown({ type: "doc", content: [c] }).trim();
              })
              .join("\n  ");
            return `- ${itemText}`;
          })
          .join("\n");
        parts.push(`\n${listItems}\n`);
        break;
      }
      case "orderedList": {
        const start = node.attrs?.start || 1;
        const listItems = (node.content || [])
          .map((item: TiptapNode, idx: number) => {
            const itemText = (item.content || [])
              .map((c: TiptapNode) => {
                if (c.type === "paragraph") return renderInlineContent(c.content);
                return tiptapToMarkdown({ type: "doc", content: [c] }).trim();
              })
              .join("\n  ");
            return `${start + idx}. ${itemText}`;
          })
          .join("\n");
        parts.push(`\n${listItems}\n`);
        break;
      }
      case "image": {
        const src = node.attrs?.src || "";
        const alt = node.attrs?.alt || "Image";
        parts.push(`\n![${alt}](${src})\n`);
        break;
      }
      case "horizontalRule": {
        parts.push(`\n---\n`);
        break;
      }
      default: {
        if (node.content) {
          parts.push(tiptapToMarkdown({ type: "doc", content: node.content }));
        }
      }
    }
  }

  return parts.join("\n");
}

function tableToMarkdown(tableData: {
  headers?: string[];
  rows?: string[][];
  alignment?: ("left" | "center" | "right")[];
}): string {
  if (!tableData.rows || tableData.rows.length === 0) return "";

  const headers = tableData.headers && tableData.headers.length > 0
    ? tableData.headers
    : tableData.rows[0].map((_, i) => `Column ${i + 1}`);

  const alignMap = {
    left: ":---",
    center: ":---:",
    right: "---:",
  };

  const alignments = (tableData.alignment || []).map(
    (a) => alignMap[a] || ":---"
  );
  while (alignments.length < headers.length) {
    alignments.push(":---");
  }

  const headerLine = `| ${headers.join(" | ")} |`;
  const separatorLine = `| ${alignments.join(" | ")} |`;
  const rowsLines = tableData.rows
    .map((row) => `| ${row.join(" | ")} |`)
    .join("\n");

  return `\n${headerLine}\n${separatorLine}\n${rowsLines}\n`;
}

function calculateReadingTime(text: string): string {
  const words = text.trim().split(/\s+/).filter(Boolean).length;
  const minutes = Math.max(1, Math.ceil(words / 200));
  return `${minutes} min read`;
}

function inferCategory(tags: string[], title: string): string {
  const allText = `${title} ${tags.join(" ")}`.toLowerCase();
  if (allText.includes("security") || allText.includes("breach") || allText.includes("cve")) {
    return "Security";
  }
  if (allText.includes("journey") || allText.includes("student") || allText.includes("mantri") || allText.includes("personal") || allText.includes("career")) {
    return "Career & Journey";
  }
  if (allText.includes("nextjs") || allText.includes("react") || allText.includes("ssr") || allText.includes("csr") || allText.includes("web development") || allText.includes("tools")) {
    return "Engineering";
  }
  return "Engineering";
}

function cleanMarkdown(raw: string): string {
  return raw
    // Replace multiple consecutive empty lines with maximum 2
    .replace(/\n{3,}/g, "\n\n")
    .trim();
}

async function run() {
  const dumpPath = path.resolve(__dirname, "blogs-dump.json");
  if (!fs.existsSync(dumpPath)) {
    console.error("blogs-dump.json not found! Run fetch-blogs.ts first.");
    return;
  }

  const blogs: Blog[] = JSON.parse(fs.readFileSync(dumpPath, "utf-8"));
  const targetDir = path.resolve(__dirname, "../../blog/src/content/blog");

  if (!fs.existsSync(targetDir)) {
    fs.mkdirSync(targetDir, { recursive: true });
  }

  console.log(`Starting migration of ${blogs.length} blogs to ${targetDir}...`);

  for (const blog of blogs) {
    if (!blog.published) {
      console.log(`Skipping draft: ${blog.slug}`);
      continue;
    }

    const componentParts: string[] = [];

    for (const comp of blog.components) {
      switch (comp.type) {
        case "richtext": {
          if (comp.content) {
            const md = tiptapToMarkdown(comp.content);
            if (md.trim()) componentParts.push(md.trim());
          }
          break;
        }
        case "imagetext": {
          const parts: string[] = [];
          if (comp.imageKey) {
            parts.push(`![Image](${getImageUrl(comp.imageKey)})`);
          }
          if (comp.text) {
            parts.push(comp.text);
          }
          if (parts.length > 0) {
            componentParts.push(parts.join("\n\n"));
          }
          break;
        }
        case "imageuploader": {
          if (comp.imageKey) {
            componentParts.push(`![${blog.title}](${getImageUrl(comp.imageKey)})`);
          }
          break;
        }
        case "videoplayer": {
          if (comp.videoUrl) {
            componentParts.push(`[Watch Video](${comp.videoUrl})`);
          }
          break;
        }
        case "code": {
          if (comp.content) {
            const { code, fileName, language } = comp.content;
            if (code && code.trim()) {
              const lang = language || "";
              const fileHeader = fileName ? `// ${fileName}\n` : "";
              componentParts.push(`\`\`\`${lang}\n${fileHeader}${code.trim()}\n\`\`\``);
            }
          }
          break;
        }
        case "table": {
          if (comp.content) {
            const tableMd = tableToMarkdown(comp.content);
            if (tableMd.trim()) componentParts.push(tableMd.trim());
          }
          break;
        }
      }
    }

    const bodyContent = cleanMarkdown(componentParts.join("\n\n"));
    const readingTime = calculateReadingTime(bodyContent);
    const category = inferCategory(blog.tags, blog.title);
    const heroImage = blog.thumbnailKey ? getImageUrl(blog.thumbnailKey) : "";
    const pubDate = new Date(blog.createdAt).toISOString().split("T")[0];
    const tagsFormatted = JSON.stringify(blog.tags || []);

    // Build Frontmatter
    const frontmatterLines = [
      "---",
      `title: ${JSON.stringify(blog.title)}`,
      `description: ${JSON.stringify(blog.shortDescription || blog.title)}`,
      `pubDate: ${pubDate}`,
      heroImage ? `heroImage: ${JSON.stringify(heroImage)}` : null,
      `tags: ${tagsFormatted}`,
      `category: ${JSON.stringify(category)}`,
      `author: ${JSON.stringify(blog.user?.name || "Gyanranjan Priyam")}`,
      `readingTime: ${JSON.stringify(readingTime)}`,
      `featured: ${blog.slug === "everything-new-in-next-js-16-2-4-a-complete-feature-breakdown"}`,
      "---",
    ].filter(Boolean);

    const fullDoc = `${frontmatterLines.join("\n")}\n\n${bodyContent}\n`;

    const filePath = path.join(targetDir, `${blog.slug}.md`);
    fs.writeFileSync(filePath, fullDoc, "utf-8");
    console.log(`✓ Migrated: ${blog.slug}.md (${readingTime}, ${blog.components.length} components)`);
  }

  console.log("\nMigration completed successfully!");
}

run().catch(console.error);
