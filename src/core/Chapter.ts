import { CollectionEntry, getCollection, getEntry } from 'astro:content';
import fs from "node:fs";

export type Chapter = CollectionEntry<'chapters'>;

export const languages = fs.readdirSync("./src/content/chapters");

export function getChapters(lang: string): Promise<Chapter[]> {
  return getCollection('chapters', ({ id }) => id.startsWith(lang));
}

export async function getChapter(slug: string): Promise<Chapter> {
  return (await getCollection('chapters', (chapter) => chapter.slug === slug))[0];
}