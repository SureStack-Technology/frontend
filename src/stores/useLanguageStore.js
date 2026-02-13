import { create } from 'zustand';
import { fetchLocalizedRecords } from '../services/documentService';

import en from '../locales/en.json';
import es from '../locales/es.json';
import tr from '../locales/tr.json';

const locales = { en, es, tr };

/**
 * 1. Check if user previously selected a language in this browser
 * 2. Detect browser language (e.g., "en-US" -> "en")
 * 3. Use browser language if supported, otherwise default to "en"
 * @returns 
 */
const getInitialLanguage = () => {

    const saved = localStorage.getItem('app-lang');
    if (saved) return saved;

    const browserLang = navigator.language.split('-')[0];
    
    return locales.includes(browserLang) ? browserLang : 'en';
};

const useLanguageStore = create((set, get) => ({

  language: localStorage.getItem('app-lang') || 'en',
  staticLabels: locales[localStorage.getItem('app-lang') || 'en'] || locales.en,
  data: {
    values: [],
    features: [],
    advantages: []
  },
  loading: false,
  initialised: false,

  setLanguage: async (newLang) => {

    console.log("Set: ",newLang);
    
    
    set({ 
      language: newLang, 
      staticLabels: locales[newLang],
      loading: true 
    });

    localStorage.setItem('app-lang', newLang);
    
    // Fetch all data for the new language simultaneously
    try {
      const [values, features, advantages] = await Promise.all([
          fetchLocalizedRecords('values','value', newLang),
          fetchLocalizedRecords('features','feature', newLang),
          fetchLocalizedRecords('advantages','advantage', newLang)
      ]);

      set({ 
          data: { values, features, advantages }, 
          loading: false,
          initialised: true
      });
    } catch (err) {
      console.error("Language sync failed", err);
    } finally {
      set({ loading: false });
    }
  },

  // Helper to get nested keys like 'nav.features'
  t: (path) => {
    const labels = get().staticLabels;
    if (!labels) return path;
    return path.split('.').reduce((obj, key) => obj?.[key], labels) || path;
  },

  init: () => get().setLanguage(get().language)
}));

export default useLanguageStore;