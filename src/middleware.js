import { defineMiddleware } from "astro:middleware";
import i18next from "./utils/i18n";

export const onRequest = defineMiddleware(async (context, next) => {
  // Always use Japanese
  await i18next.changeLanguage('ja');
  
  return next();
});