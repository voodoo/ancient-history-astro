import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  integrations: [tailwind()],
  base: '/ancient-history-astro',
  site: 'https://voodoo.github.io'
});