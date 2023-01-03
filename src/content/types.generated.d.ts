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
"en/0-cover.mdx": {
  id: "en/0-cover.mdx",
  slug: "en/0-cover",
  body: string,
  collection: "chapters",
  data: InferEntrySchema<"chapters">
},
"en/1-intro.mdx": {
  id: "en/1-intro.mdx",
  slug: "en/1-intro",
  body: string,
  collection: "chapters",
  data: InferEntrySchema<"chapters">
},
"en/2-work.mdx": {
  id: "en/2-work.mdx",
  slug: "en/2-work",
  body: string,
  collection: "chapters",
  data: InferEntrySchema<"chapters">
},
"en/avoid-brand-obsession.mdx": {
  id: "en/avoid-brand-obsession.mdx",
  slug: "en/avoid-brand-obsession",
  body: string,
  collection: "chapters",
  data: InferEntrySchema<"chapters">
},
"en/dont-actually-work-the-whole-time.mdx": {
  id: "en/dont-actually-work-the-whole-time.mdx",
  slug: "en/dont-actually-work-the-whole-time",
  body: string,
  collection: "chapters",
  data: InferEntrySchema<"chapters">
},
"en/dont-be-intimidated.mdx": {
  id: "en/dont-be-intimidated.mdx",
  slug: "en/dont-be-intimidated",
  body: string,
  collection: "chapters",
  data: InferEntrySchema<"chapters">
},
"en/dont-care.mdx": {
  id: "en/dont-care.mdx",
  slug: "en/dont-care",
  body: string,
  collection: "chapters",
  data: InferEntrySchema<"chapters">
},
"en/embellish-your-resume.mdx": {
  id: "en/embellish-your-resume.mdx",
  slug: "en/embellish-your-resume",
  body: string,
  collection: "chapters",
  data: InferEntrySchema<"chapters">
},
"en/everyone-is-alienated.mdx": {
  id: "en/everyone-is-alienated.mdx",
  slug: "en/everyone-is-alienated",
  body: string,
  collection: "chapters",
  data: InferEntrySchema<"chapters">
},
"en/everyone-is-winging-it.mdx": {
  id: "en/everyone-is-winging-it.mdx",
  slug: "en/everyone-is-winging-it",
  body: string,
  collection: "chapters",
  data: InferEntrySchema<"chapters">
},
"en/health-is-everything.mdx": {
  id: "en/health-is-everything.mdx",
  slug: "en/health-is-everything",
  body: string,
  collection: "chapters",
  data: InferEntrySchema<"chapters">
},
"en/hope.mdx": {
  id: "en/hope.mdx",
  slug: "en/hope",
  body: string,
  collection: "chapters",
  data: InferEntrySchema<"chapters">
},
"en/limiting-consumption.mdx": {
  id: "en/limiting-consumption.mdx",
  slug: "en/limiting-consumption",
  body: string,
  collection: "chapters",
  data: InferEntrySchema<"chapters">
},
"en/minitips.mdx": {
  id: "en/minitips.mdx",
  slug: "en/minitips",
  body: string,
  collection: "chapters",
  data: InferEntrySchema<"chapters">
},
"en/no-ethical-consumption-under-capitalism.mdx": {
  id: "en/no-ethical-consumption-under-capitalism.mdx",
  slug: "en/no-ethical-consumption-under-capitalism",
  body: string,
  collection: "chapters",
  data: InferEntrySchema<"chapters">
},
"en/no-one-will-notice-if-something-at-work-disappears.mdx": {
  id: "en/no-one-will-notice-if-something-at-work-disappears.mdx",
  slug: "en/no-one-will-notice-if-something-at-work-disappears",
  body: string,
  collection: "chapters",
  data: InferEntrySchema<"chapters">
},
"en/organize.mdx": {
  id: "en/organize.mdx",
  slug: "en/organize",
  body: string,
  collection: "chapters",
  data: InferEntrySchema<"chapters">
},
"en/renting-vs-Buying.mdx": {
  id: "en/renting-vs-Buying.mdx",
  slug: "en/renting-vs-Buying",
  body: string,
  collection: "chapters",
  data: InferEntrySchema<"chapters">
},
"en/share-your-wage.mdx": {
  id: "en/share-your-wage.mdx",
  slug: "en/share-your-wage",
  body: string,
  collection: "chapters",
  data: InferEntrySchema<"chapters">
},
"en/spending.mdx": {
  id: "en/spending.mdx",
  slug: "en/spending",
  body: string,
  collection: "chapters",
  data: InferEntrySchema<"chapters">
},
"en/take-better-paying-jobs.mdx": {
  id: "en/take-better-paying-jobs.mdx",
  slug: "en/take-better-paying-jobs",
  body: string,
  collection: "chapters",
  data: InferEntrySchema<"chapters">
},
"en/take-opportunities.mdx": {
  id: "en/take-opportunities.mdx",
  slug: "en/take-opportunities",
  body: string,
  collection: "chapters",
  data: InferEntrySchema<"chapters">
},
"en/use-new-work-models-to-your-advantage.mdx": {
  id: "en/use-new-work-models-to-your-advantage.mdx",
  slug: "en/use-new-work-models-to-your-advantage",
  body: string,
  collection: "chapters",
  data: InferEntrySchema<"chapters">
},
"en/use-the-benefits.mdx": {
  id: "en/use-the-benefits.mdx",
  slug: "en/use-the-benefits",
  body: string,
  collection: "chapters",
  data: InferEntrySchema<"chapters">
},
"en/working-more-does-not-equal-promotion.mdx": {
  id: "en/working-more-does-not-equal-promotion.mdx",
  slug: "en/working-more-does-not-equal-promotion",
  body: string,
  collection: "chapters",
  data: InferEntrySchema<"chapters">
},
},

	};

	type ContentConfig = typeof import("./config");
}
