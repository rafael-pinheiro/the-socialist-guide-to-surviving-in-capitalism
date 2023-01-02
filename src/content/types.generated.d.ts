declare module 'astro:content' {
	export { z } from 'astro/zod';
	export type CollectionEntry<C extends keyof typeof entryMap> =
		typeof entryMap[C][keyof typeof entryMap[C]] & Render;

	type BaseCollectionConfig<S extends import('astro/zod').ZodRawShape> = {
		schema?: S;
		slug?: (entry: {
			id: CollectionEntry<keyof typeof entryMap>['id'];
			defaultSlug: string;
			collection: string;
			body: string;
			data: import('astro/zod').infer<import('astro/zod').ZodObject<S>>;
		}) => string | Promise<string>;
	};
	export function defineCollection<S extends import('astro/zod').ZodRawShape>(
		input: BaseCollectionConfig<S>
	): BaseCollectionConfig<S>;

	export function getEntry<C extends keyof typeof entryMap, E extends keyof typeof entryMap[C]>(
		collection: C,
		entryKey: E
	): Promise<typeof entryMap[C][E] & Render>;
	export function getCollection<
		C extends keyof typeof entryMap,
		E extends keyof typeof entryMap[C]
	>(
		collection: C,
		filter?: (data: typeof entryMap[C][E]) => boolean
	): Promise<(typeof entryMap[C][E] & Render)[]>;

	type InferEntrySchema<C extends keyof typeof entryMap> = import('astro/zod').infer<
		import('astro/zod').ZodObject<Required<ContentConfig['collections'][C]>['schema']>
	>;

	type Render = {
		render(): Promise<{
			Content: import('astro').MarkdownInstance<{}>['Content'];
			headings: import('astro').MarkdownHeading[];
			injectedFrontmatter: Record<string, any>;
		}>;
	};

	const entryMap: {
		"chapters": {
"en/Avoid-brand-obsession.mdx": {
  id: "en/Avoid-brand-obsession.mdx",
  slug: "en/Avoid-brand-obsession",
  body: string,
  collection: "chapters",
  data: any
},
"en/Cover.mdx": {
  id: "en/Cover.mdx",
  slug: "en/Cover",
  body: string,
  collection: "chapters",
  data: any
},
"en/Dont-actually-work-the-whole-time.mdx": {
  id: "en/Dont-actually-work-the-whole-time.mdx",
  slug: "en/Dont-actually-work-the-whole-time",
  body: string,
  collection: "chapters",
  data: any
},
"en/Dont-be-intimidated.mdx": {
  id: "en/Dont-be-intimidated.mdx",
  slug: "en/Dont-be-intimidated",
  body: string,
  collection: "chapters",
  data: any
},
"en/Dont-care.mdx": {
  id: "en/Dont-care.mdx",
  slug: "en/Dont-care",
  body: string,
  collection: "chapters",
  data: any
},
"en/Embellish-your-resume.mdx": {
  id: "en/Embellish-your-resume.mdx",
  slug: "en/Embellish-your-resume",
  body: string,
  collection: "chapters",
  data: any
},
"en/Everyone-is-alienated.mdx": {
  id: "en/Everyone-is-alienated.mdx",
  slug: "en/Everyone-is-alienated",
  body: string,
  collection: "chapters",
  data: any
},
"en/Everyone-is-winging-it.mdx": {
  id: "en/Everyone-is-winging-it.mdx",
  slug: "en/Everyone-is-winging-it",
  body: string,
  collection: "chapters",
  data: any
},
"en/Health-is-everything.mdx": {
  id: "en/Health-is-everything.mdx",
  slug: "en/Health-is-everything",
  body: string,
  collection: "chapters",
  data: any
},
"en/Hope.mdx": {
  id: "en/Hope.mdx",
  slug: "en/Hope",
  body: string,
  collection: "chapters",
  data: any
},
"en/Intro.mdx": {
  id: "en/Intro.mdx",
  slug: "en/Intro",
  body: string,
  collection: "chapters",
  data: any
},
"en/Limiting-consumption.mdx": {
  id: "en/Limiting-consumption.mdx",
  slug: "en/Limiting-consumption",
  body: string,
  collection: "chapters",
  data: any
},
"en/MINITIPS.mdx": {
  id: "en/MINITIPS.mdx",
  slug: "en/MINITIPS",
  body: string,
  collection: "chapters",
  data: any
},
"en/No-ethical-consumption-under-capitalism.mdx": {
  id: "en/No-ethical-consumption-under-capitalism.mdx",
  slug: "en/No-ethical-consumption-under-capitalism",
  body: string,
  collection: "chapters",
  data: any
},
"en/No-one-will-notice-if-something-at-work-disappears.mdx": {
  id: "en/No-one-will-notice-if-something-at-work-disappears.mdx",
  slug: "en/No-one-will-notice-if-something-at-work-disappears",
  body: string,
  collection: "chapters",
  data: any
},
"en/Organize.mdx": {
  id: "en/Organize.mdx",
  slug: "en/Organize",
  body: string,
  collection: "chapters",
  data: any
},
"en/Renting-vs-Buying.mdx": {
  id: "en/Renting-vs-Buying.mdx",
  slug: "en/Renting-vs-Buying",
  body: string,
  collection: "chapters",
  data: any
},
"en/Share-your-wage.mdx": {
  id: "en/Share-your-wage.mdx",
  slug: "en/Share-your-wage",
  body: string,
  collection: "chapters",
  data: any
},
"en/Spending.mdx": {
  id: "en/Spending.mdx",
  slug: "en/Spending",
  body: string,
  collection: "chapters",
  data: any
},
"en/Take-better-paying-jobs.mdx": {
  id: "en/Take-better-paying-jobs.mdx",
  slug: "en/Take-better-paying-jobs",
  body: string,
  collection: "chapters",
  data: any
},
"en/Take-opportunities.mdx": {
  id: "en/Take-opportunities.mdx",
  slug: "en/Take-opportunities",
  body: string,
  collection: "chapters",
  data: any
},
"en/Use-new-work-models-to-your-advantage.mdx": {
  id: "en/Use-new-work-models-to-your-advantage.mdx",
  slug: "en/Use-new-work-models-to-your-advantage",
  body: string,
  collection: "chapters",
  data: any
},
"en/Use-the-benefits.mdx": {
  id: "en/Use-the-benefits.mdx",
  slug: "en/Use-the-benefits",
  body: string,
  collection: "chapters",
  data: any
},
"en/Work.mdx": {
  id: "en/Work.mdx",
  slug: "en/Work",
  body: string,
  collection: "chapters",
  data: any
},
"en/Working-more-does-not-equal-promotion.mdx": {
  id: "en/Working-more-does-not-equal-promotion.mdx",
  slug: "en/Working-more-does-not-equal-promotion",
  body: string,
  collection: "chapters",
  data: any
},
"en/avoid-brand-obsession.mdx": {
  id: "en/avoid-brand-obsession.mdx",
  slug: "en/avoid-brand-obsession",
  body: string,
  collection: "chapters",
  data: any
},
"en/cover.mdx": {
  id: "en/cover.mdx",
  slug: "en/cover",
  body: string,
  collection: "chapters",
  data: any
},
"en/dont-actually-work-the-whole-time.mdx": {
  id: "en/dont-actually-work-the-whole-time.mdx",
  slug: "en/dont-actually-work-the-whole-time",
  body: string,
  collection: "chapters",
  data: any
},
"en/dont-be-intimidated.mdx": {
  id: "en/dont-be-intimidated.mdx",
  slug: "en/dont-be-intimidated",
  body: string,
  collection: "chapters",
  data: any
},
"en/dont-care.mdx": {
  id: "en/dont-care.mdx",
  slug: "en/dont-care",
  body: string,
  collection: "chapters",
  data: any
},
"en/embellish-your-resume.mdx": {
  id: "en/embellish-your-resume.mdx",
  slug: "en/embellish-your-resume",
  body: string,
  collection: "chapters",
  data: any
},
"en/everyone-is-alienated.mdx": {
  id: "en/everyone-is-alienated.mdx",
  slug: "en/everyone-is-alienated",
  body: string,
  collection: "chapters",
  data: any
},
"en/everyone-is-winging-it.mdx": {
  id: "en/everyone-is-winging-it.mdx",
  slug: "en/everyone-is-winging-it",
  body: string,
  collection: "chapters",
  data: any
},
"en/health-is-everything.mdx": {
  id: "en/health-is-everything.mdx",
  slug: "en/health-is-everything",
  body: string,
  collection: "chapters",
  data: any
},
"en/hope.mdx": {
  id: "en/hope.mdx",
  slug: "en/hope",
  body: string,
  collection: "chapters",
  data: any
},
"en/intro.mdx": {
  id: "en/intro.mdx",
  slug: "en/intro",
  body: string,
  collection: "chapters",
  data: any
},
"en/limiting-consumption.mdx": {
  id: "en/limiting-consumption.mdx",
  slug: "en/limiting-consumption",
  body: string,
  collection: "chapters",
  data: any
},
"en/minitips.mdx": {
  id: "en/minitips.mdx",
  slug: "en/minitips",
  body: string,
  collection: "chapters",
  data: any
},
"en/no-ethical-consumption-under-capitalism.mdx": {
  id: "en/no-ethical-consumption-under-capitalism.mdx",
  slug: "en/no-ethical-consumption-under-capitalism",
  body: string,
  collection: "chapters",
  data: any
},
"en/no-one-will-notice-if-something-at-work-disappears.mdx": {
  id: "en/no-one-will-notice-if-something-at-work-disappears.mdx",
  slug: "en/no-one-will-notice-if-something-at-work-disappears",
  body: string,
  collection: "chapters",
  data: any
},
"en/organize.mdx": {
  id: "en/organize.mdx",
  slug: "en/organize",
  body: string,
  collection: "chapters",
  data: any
},
"en/renting-vs-Buying.mdx": {
  id: "en/renting-vs-Buying.mdx",
  slug: "en/renting-vs-Buying",
  body: string,
  collection: "chapters",
  data: any
},
"en/share-your-wage.mdx": {
  id: "en/share-your-wage.mdx",
  slug: "en/share-your-wage",
  body: string,
  collection: "chapters",
  data: any
},
"en/spending.mdx": {
  id: "en/spending.mdx",
  slug: "en/spending",
  body: string,
  collection: "chapters",
  data: any
},
"en/take-better-paying-jobs.mdx": {
  id: "en/take-better-paying-jobs.mdx",
  slug: "en/take-better-paying-jobs",
  body: string,
  collection: "chapters",
  data: any
},
"en/take-opportunities.mdx": {
  id: "en/take-opportunities.mdx",
  slug: "en/take-opportunities",
  body: string,
  collection: "chapters",
  data: any
},
"en/use-new-work-models-to-your-advantage.mdx": {
  id: "en/use-new-work-models-to-your-advantage.mdx",
  slug: "en/use-new-work-models-to-your-advantage",
  body: string,
  collection: "chapters",
  data: any
},
"en/use-the-benefits.mdx": {
  id: "en/use-the-benefits.mdx",
  slug: "en/use-the-benefits",
  body: string,
  collection: "chapters",
  data: any
},
"en/work.mdx": {
  id: "en/work.mdx",
  slug: "en/work",
  body: string,
  collection: "chapters",
  data: any
},
"en/working-more-does-not-equal-promotion.mdx": {
  id: "en/working-more-does-not-equal-promotion.mdx",
  slug: "en/working-more-does-not-equal-promotion",
  body: string,
  collection: "chapters",
  data: any
},
},

	};

	type ContentConfig = never;
}
