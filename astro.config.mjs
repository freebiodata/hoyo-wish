import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://hoyowish.top',
  trailingSlash: 'ignore',
  integrations: [sitemap()],
});
