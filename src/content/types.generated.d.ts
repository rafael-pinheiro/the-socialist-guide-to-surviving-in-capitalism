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
"en/0-Cover.mdx": {
  id: "en/0-Cover.mdx",
  slug: "en/0-Cover",
  body: string,
  collection: "chapters",
  data: any
},
"en/1-Intro.mdx": {
  id: "en/1-Intro.mdx",
  slug: "en/1-Intro",
  body: string,
  collection: "chapters",
  data: any
},
"en/10-Organize.mdx": {
  id: "en/10-Organize.mdx",
  slug: "en/10-Organize",
  body: string,
  collection: "chapters",
  data: any
},
"en/11-Dont-care.mdx": {
  id: "en/11-Dont-care.mdx",
  slug: "en/11-Dont-care",
  body: string,
  collection: "chapters",
  data: any
},
"en/12-Health-is-everything.mdx": {
  id: "en/12-Health-is-everything.mdx",
  slug: "en/12-Health-is-everything",
  body: string,
  collection: "chapters",
  data: any
},
"en/13-Share-your-wage.mdx": {
  id: "en/13-Share-your-wage.mdx",
  slug: "en/13-Share-your-wage",
  body: string,
  collection: "chapters",
  data: any
},
"en/14-Dont-actually-work-the-whole-time.mdx": {
  id: "en/14-Dont-actually-work-the-whole-time.mdx",
  slug: "en/14-Dont-actually-work-the-whole-time",
  body: string,
  collection: "chapters",
  data: any
},
"en/15-Use-new-work-models-to-your-advantage.mdx": {
  id: "en/15-Use-new-work-models-to-your-advantage.mdx",
  slug: "en/15-Use-new-work-models-to-your-advantage",
  body: string,
  collection: "chapters",
  data: any
},
"en/16-No-one-will-notice-if-something-at-work-disappears.mdx": {
  id: "en/16-No-one-will-notice-if-something-at-work-disappears.mdx",
  slug: "en/16-No-one-will-notice-if-something-at-work-disappears",
  body: string,
  collection: "chapters",
  data: any
},
"en/17-Use-the-benefits.mdx": {
  id: "en/17-Use-the-benefits.mdx",
  slug: "en/17-Use-the-benefits",
  body: string,
  collection: "chapters",
  data: any
},
"en/18-Spending.mdx": {
  id: "en/18-Spending.mdx",
  slug: "en/18-Spending",
  body: string,
  collection: "chapters",
  data: any
},
"en/19-Avoid-brand-obsession.mdx": {
  id: "en/19-Avoid-brand-obsession.mdx",
  slug: "en/19-Avoid-brand-obsession",
  body: string,
  collection: "chapters",
  data: any
},
"en/2-Work.mdx": {
  id: "en/2-Work.mdx",
  slug: "en/2-Work",
  body: string,
  collection: "chapters",
  data: any
},
"en/20-Limiting-consumption.mdx": {
  id: "en/20-Limiting-consumption.mdx",
  slug: "en/20-Limiting-consumption",
  body: string,
  collection: "chapters",
  data: any
},
"en/21-No-ethical-consumption-under-capitalism.mdx": {
  id: "en/21-No-ethical-consumption-under-capitalism.mdx",
  slug: "en/21-No-ethical-consumption-under-capitalism",
  body: string,
  collection: "chapters",
  data: any
},
"en/22-Renting-vs-Buying.mdx": {
  id: "en/22-Renting-vs-Buying.mdx",
  slug: "en/22-Renting-vs-Buying",
  body: string,
  collection: "chapters",
  data: any
},
"en/23-MINITIPS.mdx": {
  id: "en/23-MINITIPS.mdx",
  slug: "en/23-MINITIPS",
  body: string,
  collection: "chapters",
  data: any
},
"en/24-Hope.mdx": {
  id: "en/24-Hope.mdx",
  slug: "en/24-Hope",
  body: string,
  collection: "chapters",
  data: any
},
"en/3-Working-more-does-not-equal-promotion.mdx": {
  id: "en/3-Working-more-does-not-equal-promotion.mdx",
  slug: "en/3-Working-more-does-not-equal-promotion",
  body: string,
  collection: "chapters",
  data: any
},
"en/4-Embellish-your-resume.mdx": {
  id: "en/4-Embellish-your-resume.mdx",
  slug: "en/4-Embellish-your-resume",
  body: string,
  collection: "chapters",
  data: any
},
"en/5-Take-opportunities.mdx": {
  id: "en/5-Take-opportunities.mdx",
  slug: "en/5-Take-opportunities",
  body: string,
  collection: "chapters",
  data: any
},
"en/6-Dont-be-intimidated.mdx": {
  id: "en/6-Dont-be-intimidated.mdx",
  slug: "en/6-Dont-be-intimidated",
  body: string,
  collection: "chapters",
  data: any
},
"en/7-Everyone-is-winging-it.mdx": {
  id: "en/7-Everyone-is-winging-it.mdx",
  slug: "en/7-Everyone-is-winging-it",
  body: string,
  collection: "chapters",
  data: any
},
"en/8-Everyone-is-alienated.mdx": {
  id: "en/8-Everyone-is-alienated.mdx",
  slug: "en/8-Everyone-is-alienated",
  body: string,
  collection: "chapters",
  data: any
},
"en/9-Take-better-paying-jobs.mdx": {
  id: "en/9-Take-better-paying-jobs.mdx",
  slug: "en/9-Take-better-paying-jobs",
  body: string,
  collection: "chapters",
  data: any
},
},

	};

	type ContentConfig = never;
}
