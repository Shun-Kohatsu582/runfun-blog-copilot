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
  const posts = await Astro2.glob(/* #__PURE__ */ Object.assign({"./blog/essential-stretches-for-runners.md": () => import('../chunks/essential-stretches-for-runners_BiMAeLOV.mjs').then(n => n._),"./blog/finding-your-ideal-running-pace.md": () => import('../chunks/finding-your-ideal-running-pace_BoGjr2Td.mjs').then(n => n._),"./blog/getting-started-with-running.md": () => import('../chunks/getting-started-with-running_DqM0Q9za.mjs').then(n => n._)}), () => "./blog/*.md");
  const sortedPosts = posts.sort(
    (a, b) => new Date(b.frontmatter.pubDate).valueOf() - new Date(a.frontmatter.pubDate).valueOf()
  );
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, { "title": "RunFun Blog - Running and Fun Activities", "data-astro-cid-j7pv25f6": true }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="intro" data-astro-cid-j7pv25f6> <h1 data-astro-cid-j7pv25f6>Welcome to RunFun Blog</h1> <p data-astro-cid-j7pv25f6>
Explore articles about running, fitness, and fun outdoor activities. Find tips, stories, and inspiration for your active lifestyle.
</p> </section> <section class="recent-posts" data-astro-cid-j7pv25f6> <h2 data-astro-cid-j7pv25f6>Recent Posts</h2> ${sortedPosts.length === 0 ? renderTemplate`<p data-astro-cid-j7pv25f6>No blog posts available yet. Check back soon!</p>` : renderTemplate`<div class="posts-grid" data-astro-cid-j7pv25f6> ${sortedPosts.map((post) => renderTemplate`${renderComponent($$result2, "BlogPostPreview", $$BlogPostPreview, { "title": post.frontmatter.title, "description": post.frontmatter.description, "pubDate": new Date(post.frontmatter.pubDate), "url": post.url, "heroImage": post.frontmatter.heroImage, "data-astro-cid-j7pv25f6": true })}`)} </div>`} </section> ` })} `;
}, "/home/runner/work/runfun-blog-copilot/runfun-blog-copilot/src/pages/index.astro", void 0);

const $$file = "/home/runner/work/runfun-blog-copilot/runfun-blog-copilot/src/pages/index.astro";
const $$url = "/runfun-blog-copilot";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
