/** @type {import('astro-i18next').AstroI18nextConfig} */
export default {
  defaultLocale: "en",
  locales: ["en", "ja"],
  namespaces: ["common", "blog", "navigation", "home", "about", "categories"],
  defaultNamespace: "common",
  load: ["server", "client"],
};