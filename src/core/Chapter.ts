import { CollectionEntry, getCollection } from 'astro:content';

export type Chapter = CollectionEntry<'chapters'>;
export type ChaptersByLanguage = Record<string, Chapter[]>;

const sort = (chapters: Chapter[]) => chapters.sort((a, b) => a.data.sortOrder - b.data.sortOrder);

export async function getChapters(): Promise<Chapter[]> {
  return sort(await getCollection('chapters'));
}

export async function getByLanguage(): Promise<ChaptersByLanguage> {
  const chapters = (await getCollection("chapters")).reduce(
    (result, current) => {
      const [lang] = current.slug.split("/");

      result[lang] = result[lang] || [];
      result[lang].push(current);

      return result;
    },
    {} as ChaptersByLanguage
  );

  for (let language in chapters) {
    sort(chapters[language]);
  }

  return chapters;
}