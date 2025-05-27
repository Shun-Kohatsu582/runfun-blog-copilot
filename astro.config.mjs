import { defineConfig } from 'astro/config';

// Detect if we're running on Cloudflare Pages
const isCloudflarePages = process.env.CF_PAGES === 'true';
// For Cloudflare Pages, use the CLOUDFLARE_PAGES_URL environment variable if available
// Otherwise, fallback to GitHub Pages URL
const site = isCloudflarePages 
  ? process.env.CF_PAGES_URL || 'https://runfun-blog.pages.dev'
  : 'https://shun-kohatsu582.github.io';
// For Cloudflare Pages, use root path; for GitHub Pages, use repository name
const base = isCloudflarePages ? '/' : '/runfun-blog-copilot';

export default defineConfig({
  site,
  base,
  build: {
    assets: '_assets'
  },
  integrations: [],
});