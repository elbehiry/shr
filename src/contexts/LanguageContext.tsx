
import { useState, createContext, ReactNode } from 'react';
import { translations } from '../data/translations';

// Define the supported languages
export type Language = 'sv' | 'en';

// Define the context type
export interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: keyof typeof translations.en | keyof typeof translations.sv) => string;
}

// Create the context
export const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Provider component
export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>('sv'); // Default to Swedish

  // Translation function
  const t = (key: keyof typeof translations.en | keyof typeof translations.sv): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};
