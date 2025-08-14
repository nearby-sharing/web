import path from 'path';
import { fileURLToPath } from 'url';

import { defineConfig } from 'astro/config';

import icon from "astro-icon";
import tailwindcss from "@tailwindcss/vite";
import sitemap from '@astrojs/sitemap';
import compress from 'astro-compress';
import { readingTimeRemarkPlugin } from './src/utils/frontmatter.mjs';

import { SITE } from './src/config.mjs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  site: SITE.origin,
  base: SITE.basePathname,
  trailingSlash: SITE.trailingSlash ? 'always' : 'never',

  output: 'static',

  markdown: {
    remarkPlugins: [readingTimeRemarkPlugin],
  },

  integrations: [
    sitemap(),

    compress({
      CSS: true,
      HTML: true,
      Image: false,
      JavaScript: true,
      SVG: false,

      Logger: 1,
    }),
    icon()
  ],

  vite: {
    resolve: {
      alias: {
        '~': path.resolve(__dirname, './src'),
      },
    },
    plugins: [tailwindcss()]
  },

  redirects: {
    '/docs/FAQ': '/faq',
    '/docs/faq': '/faq',
    '/docs/Privacy': '/privacy',
    '/docs/discord': '/community',
    '/docs/sponsor': '/sponsor',
    '/CREDITS': 'https://github.com/nearby-sharing/android/blob/master/CREDITS.md'
  }
});
