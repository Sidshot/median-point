// @ts-check

import vercel from '@astrojs/vercel';
import react from '@astrojs/react';
import keystatic from '@keystatic/astro';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';
import remarkBreaks from 'remark-breaks';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://median-point.vercel.app',
  output: 'server',
  adapter: vercel({
    includeFiles: ['./keystatic.config.ts']
  }),
  integrations: [mdx(), sitemap(), react(), keystatic()],

  vite: {
    plugins: [tailwindcss()],
  },
  markdown: {
    remarkPlugins: [remarkBreaks]
  }
});