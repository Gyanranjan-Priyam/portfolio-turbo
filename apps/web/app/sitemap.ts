import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/config";
import projects from "@/data/projectsData";
import templates from "@/data/templateData";

export const revalidate = 3600;

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const now = new Date();

  // Project HTML pages
  const projectEntries: MetadataRoute.Sitemap = projects.map((project) => ({
    url: `${SITE_URL}/projects/${project.id}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  // Project Markdown pages for AI Search Optimization
  const projectMdEntries: MetadataRoute.Sitemap = projects.map((project) => ({
    url: `${SITE_URL}/projects/${project.id}.md`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  // Template HTML pages
  const templatesEntries: MetadataRoute.Sitemap = templates.map((template) => ({
    url: `${SITE_URL}/templates/${template.id}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  // Template Markdown pages for AI Search Optimization
  const templatesMdEntries: MetadataRoute.Sitemap = templates.map((template) => ({
    url: `${SITE_URL}/templates/${template.id}.md`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [
    // Core HTML pages
    {
      url: SITE_URL,
      lastModified: now,
      changeFrequency: "daily",
      priority: 1.0,
    },
    {
      url: `${SITE_URL}/projects`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    ...projectEntries,
    {
      url: `${SITE_URL}/templates`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    ...templatesEntries,
    {
      url: `${SITE_URL}/privacy`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.5,
    },

    // AI Context & LLMs.txt endpoints (ASEO)
    {
      url: `${SITE_URL}/llms.txt`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/llms-full.txt`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/about.md`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/projects.md`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    ...projectMdEntries,
    {
      url: `${SITE_URL}/templates.md`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    ...templatesMdEntries,
    {
      url: `${SITE_URL}/privacy.md`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.4,
    },
  ];
}
