import i18next from 'i18next';

// English translations
import enCommon from '../../public/locales/en/common.json';
import enNavigation from '../../public/locales/en/navigation.json';
import enHome from '../../public/locales/en/home.json';
import enAbout from '../../public/locales/en/about.json';
import enCategories from '../../public/locales/en/categories.json';
import enBlog from '../../public/locales/en/blog.json';

// Japanese translations
import jaCommon from '../../public/locales/ja/common.json';
import jaNavigation from '../../public/locales/ja/navigation.json';
import jaHome from '../../public/locales/ja/home.json';
import jaAbout from '../../public/locales/ja/about.json';
import jaCategories from '../../public/locales/ja/categories.json';
import jaBlog from '../../public/locales/ja/blog.json';

// Initialize i18next
i18next.init({
  lng: 'en',
  resources: {
    en: {
      common: enCommon,
      navigation: enNavigation,
      home: enHome,
      about: enAbout,
      categories: enCategories,
      blog: enBlog
    },
    ja: {
      common: jaCommon,
      navigation: jaNavigation,
      home: jaHome,
      about: jaAbout,
      categories: jaCategories,
      blog: jaBlog
    }
  }
});

// Utility function to translate
export function t(key) {
  const parts = key.split('.');
  const namespace = parts[0];
  const translationKey = parts[1];
  
  return i18next.t(translationKey, { ns: namespace });
}

// Language-specific URL helper
export function localizePath(path, lang) {
  const currentLang = lang || i18next.language;
  
  if (currentLang === 'en') {
    return path;
  }
  
  // If it's already a localized path, just return it
  if (path.startsWith(`/${currentLang}`)) {
    return path;
  }
  
  // Add language prefix for non-English paths
  return `/${currentLang}${path}`;
}

export default i18next;