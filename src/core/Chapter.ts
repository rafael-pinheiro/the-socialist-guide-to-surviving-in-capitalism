import { CollectionEntry, getCollection } from 'astro:content';

export type Chapter = CollectionEntry<'chapters'>;
export type ChaptersByLanguage = Record<string, Chapter[]>;

const sort = (chapters: Chapter[]) => chapters.sort((a, b) => a.data.sortOrder - b.data.sortOrder);
export const getLanguage = (chapter: Chapter) => chapter.slug.split("/")[0];

export async function getChapters(): Promise<Chapter[]> {
  return sort(await getCollection('chapters'));
}

export async function getByLanguage(): Promise<ChaptersByLanguage> {
  const chapters = (await getCollection("chapters")).reduce(
    (result, current) => {
      const lang = getLanguage(current);

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

export async function getPrevious(chapter: Chapter): Promise<Chapter | undefined> {
  const lang = getLanguage(chapter);
  return (await getCollection(
    "chapters",
    ({ slug, data }) => data.sortOrder === chapter.data.sortOrder - 1 && slug.startsWith(lang)
  ))?.[0];
}

export async function getNext(chapter: Chapter): Promise<Chapter | undefined> {
  const lang = getLanguage(chapter);
  return (await getCollection(
    "chapters",
    ({ slug, data }) => data.sortOrder === chapter.data.sortOrder + 1 && slug.startsWith(lang)
  ))?.[0];
}