// @ts-check
import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'astro/config';


import sitemap from '@astrojs/sitemap';


export default defineConfig({
  site: 'https://mattcotter.dev',

  server: {
    host: true, 
  },

  vite: {
    plugins: [tailwindcss()]
  },

  markdown: {
    shikiConfig: {
      theme: 'andromeeda',
    },
  },

  integrations: [sitemap({
    filter: (page) => !page.includes('/tags/'),
  }),],
});