import { z, defineCollection } from 'astro:content';

const chapters = defineCollection({
  schema: {
    title: z.string(),
    titleModifier: z.string().optional(),
    sortOrder: z.number(),
  }
});

export const collections = { chapters };