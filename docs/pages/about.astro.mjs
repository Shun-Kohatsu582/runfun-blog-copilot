import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_5TcfeB0C.mjs';
import 'kleur/colors';
import { $ as $$MainLayout } from '../chunks/MainLayout_ZGj0UfbN.mjs';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const $$About = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, { "title": "About | RunFun Blog", "description": "Learn more about RunFun Blog", "data-astro-cid-kh7btl4r": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<h1 data-astro-cid-kh7btl4r>About RunFun Blog</h1> <div class="about-content" data-astro-cid-kh7btl4r> <p data-astro-cid-kh7btl4r>
Welcome to RunFun Blog, your destination for everything related to running 
      and outdoor activities. Our mission is to inspire and help people enjoy an 
      active lifestyle through informative and engaging content.
</p> <h2 data-astro-cid-kh7btl4r>What We Cover</h2> <ul data-astro-cid-kh7btl4r> <li data-astro-cid-kh7btl4r>Running tips and techniques</li> <li data-astro-cid-kh7btl4r>Gear reviews and recommendations</li> <li data-astro-cid-kh7btl4r>Training plans for beginners to advanced runners</li> <li data-astro-cid-kh7btl4r>Nutrition advice for active individuals</li> <li data-astro-cid-kh7btl4r>Stories and experiences from the running community</li> <li data-astro-cid-kh7btl4r>Fun outdoor activities to complement your running routine</li> </ul> <h2 data-astro-cid-kh7btl4r>Our Philosophy</h2> <p data-astro-cid-kh7btl4r>
We believe that running and outdoor activities should be enjoyable and accessible 
      to everyone. Whether you're a seasoned marathoner or just starting your fitness 
      journey, our content aims to provide value and inspiration for your active lifestyle.
</p> <h2 data-astro-cid-kh7btl4r>Get In Touch</h2> <p data-astro-cid-kh7btl4r>
Have questions, suggestions, or want to contribute to RunFun Blog? 
      We'd love to hear from you! Send us an email at <a href="mailto:contact@runfunblog.com" data-astro-cid-kh7btl4r>contact@runfunblog.com</a>.
</p> </div> ` })} `;
}, "/home/runner/work/runfun-blog-copilot/runfun-blog-copilot/src/pages/about.astro", void 0);

const $$file = "/home/runner/work/runfun-blog-copilot/runfun-blog-copilot/src/pages/about.astro";
const $$url = "/runfun-blog-copilot/about";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$About,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
