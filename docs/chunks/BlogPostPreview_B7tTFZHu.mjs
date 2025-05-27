import { b as createAstro, c as createComponent, m as maybeRenderHead, d as addAttribute, a as renderTemplate } from './astro/server_5TcfeB0C.mjs';
import 'kleur/colors';
import 'clsx';
/* empty css                         */

const $$Astro = createAstro("https://shun-kohatsu582.github.io");
const $$BlogPostPreview = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$BlogPostPreview;
  const { title, description, pubDate, url, heroImage } = Astro2.props;
  const formattedDate = pubDate.toLocaleDateString("en-us", {
    year: "numeric",
    month: "short",
    day: "numeric"
  });
  return renderTemplate`${maybeRenderHead()}<div class="post-preview" data-astro-cid-mocbi3ka> ${heroImage && renderTemplate`<a${addAttribute(url, "href")} class="image-link" data-astro-cid-mocbi3ka> <img${addAttribute(heroImage, "src")}${addAttribute(title, "alt")} data-astro-cid-mocbi3ka> </a>`} <div class="content" data-astro-cid-mocbi3ka> <div class="meta" data-astro-cid-mocbi3ka> <time${addAttribute(pubDate.toISOString(), "datetime")} data-astro-cid-mocbi3ka>${formattedDate}</time> </div> <h2 class="title" data-astro-cid-mocbi3ka><a${addAttribute(url, "href")} data-astro-cid-mocbi3ka>${title}</a></h2> <p class="description" data-astro-cid-mocbi3ka>${description}</p> <a${addAttribute(url, "href")} class="read-more" data-astro-cid-mocbi3ka>Read more →</a> </div> </div> `;
}, "/home/runner/work/runfun-blog-copilot/runfun-blog-copilot/src/components/BlogPostPreview.astro", void 0);

export { $$BlogPostPreview as $ };
