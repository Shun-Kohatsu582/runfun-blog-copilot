import { b as createAstro, c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead, d as addAttribute, f as renderSlot } from './astro/server_5TcfeB0C.mjs';
import 'kleur/colors';
import { $ as $$MainLayout } from './MainLayout_ZGj0UfbN.mjs';
/* empty css                                                   */

const $$Astro = createAstro("https://shun-kohatsu582.github.io");
const $$BlogPostLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$BlogPostLayout;
  const { title, description, pubDate, updatedDate, heroImage } = Astro2.props;
  const formattedPubDate = pubDate.toLocaleDateString("en-us", {
    year: "numeric",
    month: "long",
    day: "numeric"
  });
  const formattedUpdatedDate = updatedDate?.toLocaleDateString("en-us", {
    year: "numeric",
    month: "long",
    day: "numeric"
  });
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, { "title": title, "description": description, "data-astro-cid-2q5oecfc": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<article class="blog-post" data-astro-cid-2q5oecfc> ${heroImage && renderTemplate`<img${addAttribute(heroImage, "src")}${addAttribute(title, "alt")} class="hero-image" data-astro-cid-2q5oecfc>`} <h1 class="title" data-astro-cid-2q5oecfc>${title}</h1> <div class="post-meta" data-astro-cid-2q5oecfc> <time${addAttribute(pubDate.toISOString(), "datetime")} data-astro-cid-2q5oecfc>Published on ${formattedPubDate}</time> ${updatedDate && renderTemplate`<div class="updated-date" data-astro-cid-2q5oecfc> <time${addAttribute(updatedDate.toISOString(), "datetime")} data-astro-cid-2q5oecfc>
Updated on ${formattedUpdatedDate} </time> </div>`} </div> <div class="post-content" data-astro-cid-2q5oecfc> ${renderSlot($$result2, $$slots["default"])} </div> </article> ` })} `;
}, "/home/runner/work/runfun-blog-copilot/runfun-blog-copilot/src/layouts/BlogPostLayout.astro", void 0);

export { $$BlogPostLayout as $ };
