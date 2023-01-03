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
"en/10-organize.mdx": {
  id: "en/10-organize.mdx",
  slug: "en/10-organize",
  body: string,
  collection: "chapters",
  data: InferEntrySchema<"chapters">
},
"en/11-dont-care.mdx": {
  id: "en/11-dont-care.mdx",
  slug: "en/11-dont-care",
  body: string,
  collection: "chapters",
  data: InferEntrySchema<"chapters">
},
"en/12-health-is-everything.mdx": {
  id: "en/12-health-is-everything.mdx",
  slug: "en/12-health-is-everything",
  body: string,
  collection: "chapters",
  data: InferEntrySchema<"chapters">
},
"en/13-share-your-wage.mdx": {
  id: "en/13-share-your-wage.mdx",
  slug: "en/13-share-your-wage",
  body: string,
  collection: "chapters",
  data: InferEntrySchema<"chapters">
},
"en/14-dont-actually-work-the-whole-time.mdx": {
  id: "en/14-dont-actually-work-the-whole-time.mdx",
  slug: "en/14-dont-actually-work-the-whole-time",
  body: string,
  collection: "chapters",
  data: InferEntrySchema<"chapters">
},
"en/15-use-new-work-models-to-your-advantage.mdx": {
  id: "en/15-use-new-work-models-to-your-advantage.mdx",
  slug: "en/15-use-new-work-models-to-your-advantage",
  body: string,
  collection: "chapters",
  data: InferEntrySchema<"chapters">
},
"en/16-use-the-benefits.mdx": {
  id: "en/16-use-the-benefits.mdx",
  slug: "en/16-use-the-benefits",
  body: string,
  collection: "chapters",
  data: InferEntrySchema<"chapters">
},
"en/17-money-spending.mdx": {
  id: "en/17-money-spending.mdx",
  slug: "en/17-money-spending",
  body: string,
  collection: "chapters",
  data: InferEntrySchema<"chapters">
},
"en/18-avoid-brand-obsession.mdx": {
  id: "en/18-avoid-brand-obsession.mdx",
  slug: "en/18-avoid-brand-obsession",
  body: string,
  collection: "chapters",
  data: InferEntrySchema<"chapters">
},
"en/19-limiting-consumption.mdx": {
  id: "en/19-limiting-consumption.mdx",
  slug: "en/19-limiting-consumption",
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
"en/20-no-ethical-consumption-under-capitalism.mdx": {
  id: "en/20-no-ethical-consumption-under-capitalism.mdx",
  slug: "en/20-no-ethical-consumption-under-capitalism",
  body: string,
  collection: "chapters",
  data: InferEntrySchema<"chapters">
},
"en/21-renting-vs-buying.mdx": {
  id: "en/21-renting-vs-buying.mdx",
  slug: "en/21-renting-vs-buying",
  body: string,
  collection: "chapters",
  data: InferEntrySchema<"chapters">
},
"en/22-minitips.mdx": {
  id: "en/22-minitips.mdx",
  slug: "en/22-minitips",
  body: string,
  collection: "chapters",
  data: InferEntrySchema<"chapters">
},
"en/23-hope.mdx": {
  id: "en/23-hope.mdx",
  slug: "en/23-hope",
  body: string,
  collection: "chapters",
  data: InferEntrySchema<"chapters">
},
"en/3-working-more-does-not-equal-promotion.mdx": {
  id: "en/3-working-more-does-not-equal-promotion.mdx",
  slug: "en/3-working-more-does-not-equal-promotion",
  body: string,
  collection: "chapters",
  data: InferEntrySchema<"chapters">
},
"en/4-embellish-your-resume.mdx": {
  id: "en/4-embellish-your-resume.mdx",
  slug: "en/4-embellish-your-resume",
  body: string,
  collection: "chapters",
  data: InferEntrySchema<"chapters">
},
"en/5-take-opportunities.mdx": {
  id: "en/5-take-opportunities.mdx",
  slug: "en/5-take-opportunities",
  body: string,
  collection: "chapters",
  data: InferEntrySchema<"chapters">
},
"en/6-dont-be-intimidated.mdx": {
  id: "en/6-dont-be-intimidated.mdx",
  slug: "en/6-dont-be-intimidated",
  body: string,
  collection: "chapters",
  data: InferEntrySchema<"chapters">
},
"en/7-everyone-is-winging-it.mdx": {
  id: "en/7-everyone-is-winging-it.mdx",
  slug: "en/7-everyone-is-winging-it",
  body: string,
  collection: "chapters",
  data: InferEntrySchema<"chapters">
},
"en/8-everyone-is-alienated.mdx": {
  id: "en/8-everyone-is-alienated.mdx",
  slug: "en/8-everyone-is-alienated",
  body: string,
  collection: "chapters",
  data: InferEntrySchema<"chapters">
},
"en/9-take-better-paying-jobs.mdx": {
  id: "en/9-take-better-paying-jobs.mdx",
  slug: "en/9-take-better-paying-jobs",
  body: string,
  collection: "chapters",
  data: InferEntrySchema<"chapters">
},
},

	};

	type ContentConfig = typeof import("./config");
}
