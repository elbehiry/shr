
import React from 'react';
import { Button } from '@/components/ui/button';
import { Languages } from 'lucide-react';
import { useLanguage } from '@/localization/LanguageContext';

export const LanguageSwitcher = () => {
  const { currentLanguage, setLanguage } = useLanguage();

  const toggleLanguage = () => {
    setLanguage(currentLanguage === 'sv' ? 'en' : 'sv');
  };

  return (
    <Button 
      variant="ghost" 
      size="icon" 
      onClick={toggleLanguage} 
      className="text-shr-blue-dark hover:bg-gray-100 rounded-full"
      aria-label="Switch language"
    >
      <Languages className="h-5 w-5" />
    </Button>
  );
};

// Re-export the useLanguage hook and LanguageProvider for easy access
export { useLanguage, LanguageProvider } from '@/localization/LanguageContext';
