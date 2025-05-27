import { defineMiddleware } from "astro:middleware";
import i18next from "./utils/i18n";

export const onRequest = defineMiddleware(async (context, next) => {
  // Extract language from URL: /ja/path -> ja
  const { pathname } = context.url;
  const langMatch = pathname.match(/^\/([a-z]{2})\//);
  const language = langMatch ? langMatch[1] : 'en';
  
  // Set the language for i18next
  if (language === 'ja') {
    await i18next.changeLanguage('ja');
  } else {
    await i18next.changeLanguage('en');
  }
  
  return next();
});