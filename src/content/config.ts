// src/content/config.ts
import { defineCollection, z } from 'astro:content';

const blogCollection = defineCollection({
  type: 'content', // 'content' for Markdown/MDX, 'data' for JSON/YAML
  schema: z.object({
    title: z.string(),
    pubDate: z.coerce.date(), // Automatically converts date strings to Date objects
    description: z.string().optional(), // Optional field
    author: z.string().default('Matt Cotter'), // Default value if not provided
    image: z.string().optional(), // Optional image URL
    tags: z.array(z.string()).optional(), // Optional array of strings
    isDraft: z.boolean().default(false), // Useful for draft posts
  }),
});

export const collections = {
  blog: blogCollection,
};