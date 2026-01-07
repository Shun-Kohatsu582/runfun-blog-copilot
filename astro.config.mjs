import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// Detect if we're running on Cloudflare Pages
const isCloudflarePages = process.env.CF_PAGES === 'true';
// For Cloudflare Pages, use the CLOUDFLARE_PAGES_URL environment variable if available
// Otherwise, fallback to GitHub Pages URL
const site = isCloudflarePages
  ? process.env.CF_PAGES_URL || 'https://runfun-blog.pages.dev'
  : 'https://shun-kohatsu582.github.io';
// Use root path '/' for all deployments
const base = '/';

export default defineConfig({
  site,
  base,
  output: 'static',
  build: {
    assets: '_assets'
  },
  integrations: [tailwind()],
});
