import { writable } from 'svelte/store';
import { browser } from '$app/environment';

function createLanguageStore() {
  const getInitialLanguage = () => {
    if (!browser) return 'ko';
    
    const savedLang = localStorage.getItem('language');
    if (savedLang) return savedLang;
    
    const browserLang = navigator.language.toLowerCase();
    return browserLang.startsWith('ko') ? 'ko' : 'en';
  };

  const { subscribe, set, update } = writable(getInitialLanguage());

  return {
    subscribe,
    setLanguage: (lang) => {
      if (browser) {
        localStorage.setItem('language', lang);
      }
      set(lang);
    },
    toggleLanguage: () => {
      update(lang => {
        const newLang = lang === 'ko' ? 'en' : 'ko';
        if (browser) {
          localStorage.setItem('language', newLang);
        }
        return newLang;
      });
    }
  };
}

export const language = createLanguageStore();