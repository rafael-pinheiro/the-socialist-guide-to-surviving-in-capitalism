import { defineConfig } from 'astro/config';

// https://astro.build/config
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
import mdx from "@astrojs/mdx";

// https://astro.build/config
import vercel from "@astrojs/vercel/static";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), mdx()],
  experimental: {
    contentCollections: true
  },
  adapter: vercel()
});