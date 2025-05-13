"use client"

import type { ReactNode } from 'react';
import { createContext, useContext, useEffect, useMemo, useState } from 'react';
import { useLocalStorage } from '@/hooks/use-local-storage';
import { LOCAL_STORAGE_KEYS } from '@/lib/constants';

import enTranslations from '@/locales/en.json';
import esTranslations from '@/locales/es.json';

type Locale = "en" | "es";

interface LanguageContextType {
  language: Locale;
  setLanguage: (language: Locale) => void;
  t: (key: string, replacements?: Record<string, string | number>) => string;
}

const translations: Record<Locale, any> = {
  en: enTranslations,
  es: esTranslations,
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [mounted, setMounted] = useState(false);
  const [language, setLanguageState] = useLocalStorage<Locale>(
    LOCAL_STORAGE_KEYS.LANGUAGE,
    () => {
      if (typeof navigator !== 'undefined') {
        const browserLang = navigator.language.split('-')[0];
        if (browserLang === 'es') return 'es';
      }
      return 'en'; // Default language
    }
  );

  useEffect(() => {
    setMounted(true);
  }, []);
  
  const setLanguage = (lang: Locale) => {
    setLanguageState(lang);
    if (typeof document !== 'undefined') {
      document.documentElement.lang = lang;
    }
  };

  useEffect(() => {
    if (typeof document !== 'undefined') {
      document.documentElement.lang = language;
    }
  }, [language]);

  const t = (key: string, replacements?: Record<string, string | number>): string => {
    const keys = key.split('.');
    let text = translations[language];
    try {
      for (const k of keys) {
        text = text[k];
        if (text === undefined) throw new Error(`Translation key "${key}" not found for language "${language}" in segment "${k}"`);
      }
    } catch (e) {
      console.warn((e as Error).message);
      // Fallback to English if translation not found in current language
      text = translations['en'];
      try {
        for (const k of keys) {
          text = text[k];
          if (text === undefined) throw new Error(`Fallback translation key "${key}" not found for language "en" in segment "${k}"`);
        }
      } catch (fallbackError) {
         console.error((fallbackError as Error).message);
        return key; // Return key itself if not found in English either
      }
    }


    if (typeof text !== 'string') {
      console.warn(`Translation for key "${key}" is not a string for language "${language}". Found: ${typeof text}`);
      return key;
    }
    
    if (replacements) {
      Object.entries(replacements).forEach(([placeholder, value]) => {
        text = text.replace(new RegExp(`{${placeholder}}`, 'g'), String(value));
      });
    }
    return text;
  };

  const value = useMemo(() => ({ language, setLanguage, t }), [language, setLanguage, t]);

  if (!mounted) {
    // Avoid hydration mismatch by rendering nothing or a loader until client-side language is determined
    return null; 
  }

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
