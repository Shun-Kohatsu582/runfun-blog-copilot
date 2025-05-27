import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://shun-kohatsu582.github.io',
  base: '/runfun-blog-copilot',
  build: {
    assets: '_assets'
  },
  integrations: [],
});