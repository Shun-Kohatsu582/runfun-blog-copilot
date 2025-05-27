import i18next from 'i18next';

// Japanese translations
import jaCommon from '../../public/locales/ja/common.json';
import jaNavigation from '../../public/locales/ja/navigation.json';
import jaHome from '../../public/locales/ja/home.json';
import jaAbout from '../../public/locales/ja/about.json';
import jaCategories from '../../public/locales/ja/categories.json';
import jaBlog from '../../public/locales/ja/blog.json';

// Initialize i18next with Japanese only
i18next.init({
  lng: 'ja',
  resources: {
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

// Simplified path helper with no language prefix
export function localizePath(path) {
  return path;
}

export default i18next;