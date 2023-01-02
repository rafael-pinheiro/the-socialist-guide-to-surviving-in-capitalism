const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				commie: '#de0000',
			},
			fontFamily: {
				'cover-title': ['freich', ...defaultTheme.fontFamily.sans],
				'chapter-title': ['freich-fill', ...defaultTheme.fontFamily.sans]
			}
		},
	},
	plugins: [],
};
