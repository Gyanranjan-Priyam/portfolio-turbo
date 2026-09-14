import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const blog = defineCollection({
  loader: glob({ base: './src/content/blog', pattern: '**/*.{md,mdx}' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      pubDate: z.coerce.date(),
      updatedDate: z.coerce.date().optional(),
      heroImage: z.union([image(), z.string()]).optional(),
      tags: z.array(z.string()).default([]),
      category: z.string().default('Engineering'),
      author: z.string().default('Gyanranjan Priyam'),
      authorImage: z.string().optional(),
      readingTime: z.string().default('5 min read'),
      featured: z.boolean().default(false),
    }),
});

export const collections = { blog };
