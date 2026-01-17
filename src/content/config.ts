
import { defineCollection, z } from "astro:content";

const blogCollection = defineCollection({
  schema: z.object({
    pubDate: z.string(),
    title: z.string(),
    tags: z.array(z.string()),
    description: z.string(),
    hero: z.object({
      src: z.string(),
      alt: z.string(),
    }).optional(),
  }),
});

export const collections = {
  'blog': blogCollection,
};
