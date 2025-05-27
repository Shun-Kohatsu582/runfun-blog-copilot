import { b as createAstro, c as createComponent, d as addAttribute, e as renderHead, f as renderSlot, a as renderTemplate } from './astro/server_5TcfeB0C.mjs';
import 'kleur/colors';
import 'clsx';
/* empty css                                                   */

const $$Astro = createAstro("https://shun-kohatsu582.github.io");
const $$MainLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$MainLayout;
  const { title, description = "A blog about running and fun activities" } = Astro2.props;
  return renderTemplate`<html lang="en" data-astro-cid-ouamjn2i> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>${title}</title><meta name="description"${addAttribute(description, "content")}><link rel="icon" type="image/svg+xml" href="/favicon.svg">${renderHead()}</head> <body data-astro-cid-ouamjn2i> <header data-astro-cid-ouamjn2i> <div class="container" data-astro-cid-ouamjn2i> <h1 data-astro-cid-ouamjn2i>RunFun Blog</h1> <nav data-astro-cid-ouamjn2i> <ul data-astro-cid-ouamjn2i> <li data-astro-cid-ouamjn2i><a href="/" data-astro-cid-ouamjn2i>Home</a></li> <li data-astro-cid-ouamjn2i><a href="/blog" data-astro-cid-ouamjn2i>Blog</a></li> <li data-astro-cid-ouamjn2i><a href="/about" data-astro-cid-ouamjn2i>About</a></li> </ul> </nav> </div> </header> <main class="container" data-astro-cid-ouamjn2i> ${renderSlot($$result, $$slots["default"])} </main> <footer data-astro-cid-ouamjn2i> <div class="container" data-astro-cid-ouamjn2i> <p data-astro-cid-ouamjn2i>&copy; ${(/* @__PURE__ */ new Date()).getFullYear()} RunFun Blog. All rights reserved.</p> </div> </footer> </body></html>`;
}, "/home/runner/work/runfun-blog-copilot/runfun-blog-copilot/src/layouts/MainLayout.astro", void 0);

export { $$MainLayout as $ };
