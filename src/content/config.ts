import { z, defineCollection } from 'astro:content';

const chapters = defineCollection({
  schema: {
    title: z.string(),
    sortOrder: z.number(),
  }
});

export const collections = { chapters };