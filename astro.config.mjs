// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://aslishah.github.io',
  integrations: [mdx(), sitemap()],
  // Preserve URLs from the old Jekyll site so external links keep working.
  redirects: {
    '/Mujmal': '/apps/mujmal-al-hikma/',
    '/Ikhwan': '/apps/ikhwan-al-safa/',
    '/Ismaili': '/apps/digit-corpus/',
    '/Fatimid': '/apps/',
    '/projects': '/blog/',
  },
});
