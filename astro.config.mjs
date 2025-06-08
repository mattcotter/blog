// @ts-check
import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'astro/config';


// https://astro.build/config
export default defineConfig({
  site: 'https://www.mattcotter.dev',
  server: {
    host: true, 
  },
  vite: {
    plugins: [tailwindcss()]
  }
});