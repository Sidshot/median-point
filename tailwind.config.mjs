/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	darkMode: 'class',
	theme: {
		extend: {
			colors: {
				brand: {
					DEFAULT: '#b91c1c',
					dark: '#ef4444',
				},
				base: {
					DEFAULT: '#1a1a1a',
					dark: '#e5e5e5',
				},
				bg: {
					DEFAULT: '#fdfdfd',
					dark: '#121212',
				}
			},
			fontFamily: {
				sans: ['Inter', 'sans-serif'],
				serif: ['"Libre Baskerville"', 'serif'],
			}
		},
	},
	plugins: [],
}
