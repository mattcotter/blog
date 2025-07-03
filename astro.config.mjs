// @ts-check
import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'astro/config';


export default defineConfig({
  site: 'https://www.mattcotter.dev',
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
});