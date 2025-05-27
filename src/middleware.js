import { defineMiddleware } from "astro:middleware";
import { i18next, createI18nextConfig } from "astro-i18next";

export const onRequest = defineMiddleware(async (context, next) => {
  const config = createI18nextConfig(context.url);
  await i18next.init(config);
  
  return next();
});