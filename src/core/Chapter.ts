import { CollectionEntry, getCollection, } from 'astro:content';

export type Chapter = CollectionEntry<'chapters'>;

export const languages = ['en'];

export function getChapters(lang: string): Promise<Chapter[]> {
  return getCollection('chapters', ({ id }) => id.startsWith(lang));
}

export async function getChapter(slug: string): Promise<Chapter> {
  return (await getCollection('chapters', (chapter) => chapter.slug === slug))[0];
}