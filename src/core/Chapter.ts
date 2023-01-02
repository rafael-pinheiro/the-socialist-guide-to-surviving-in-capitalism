import { CollectionEntry, getCollection, } from 'astro:content';

export type Chapter = CollectionEntry<'chapters'>;

export const languages = ['en'];

export async function getChapters(lang: string): Promise<Chapter[]> {
  return (await getCollection('chapters', ({ id }) => id.startsWith(lang))).sort((a, b) => a.data.sortOrder - b.data.sortOrder);
}

export async function getChapter(slug: string): Promise<Chapter> {
  return (await getCollection('chapters', (chapter) => chapter.slug === slug))[0];
}