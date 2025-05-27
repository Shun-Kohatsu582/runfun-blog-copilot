import { b as createAstro, c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_5TcfeB0C.mjs';
import 'kleur/colors';
import { $ as $$MainLayout } from '../chunks/MainLayout_ZGj0UfbN.mjs';
import { $ as $$BlogPostPreview } from '../chunks/BlogPostPreview_B7tTFZHu.mjs';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro("https://shun-kohatsu582.github.io");
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const posts = await Astro2.glob(/* #__PURE__ */ Object.assign({"./essential-stretches-for-runners.md": () => import('../chunks/essential-stretches-for-runners_BiMAeLOV.mjs').then(n => n._),"./finding-your-ideal-running-pace.md": () => import('../chunks/finding-your-ideal-running-pace_BoGjr2Td.mjs').then(n => n._),"./getting-started-with-running.md": () => import('../chunks/getting-started-with-running_DqM0Q9za.mjs').then(n => n._)}), () => "./*.md");
  const sortedPosts = posts.sort(
    (a, b) => new Date(b.frontmatter.pubDate).valueOf() - new Date(a.frontmatter.pubDate).valueOf()
  );
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, { "title": "Blog | RunFun Blog", "description": "Read our latest articles about running and fun activities", "data-astro-cid-5tznm7mj": true }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<h1 data-astro-cid-5tznm7mj>All Blog Posts</h1> ${sortedPosts.length === 0 ? renderTemplate`<p data-astro-cid-5tznm7mj>No blog posts available yet. Check back soon!</p>` : renderTemplate`<div class="posts-grid" data-astro-cid-5tznm7mj> ${sortedPosts.map((post) => renderTemplate`${renderComponent($$result2, "BlogPostPreview", $$BlogPostPreview, { "title": post.frontmatter.title, "description": post.frontmatter.description, "pubDate": new Date(post.frontmatter.pubDate), "url": post.url, "heroImage": post.frontmatter.heroImage, "data-astro-cid-5tznm7mj": true })}`)} </div>`}` })} `;
}, "/home/runner/work/runfun-blog-copilot/runfun-blog-copilot/src/pages/blog/index.astro", void 0);

const $$file = "/home/runner/work/runfun-blog-copilot/runfun-blog-copilot/src/pages/blog/index.astro";
const $$url = "/runfun-blog-copilot/blog";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
