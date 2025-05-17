
import { Button } from '@/components/ui/button';
import { Globe } from 'lucide-react';
import { useLanguage } from '@/hooks/useLanguage';

const LanguageSwitcher = () => {
  const { language, setLanguage } = useLanguage();

  const toggleLanguage = () => {
    setLanguage(language === 'sv' ? 'en' : 'sv');
  };

  return (
    <div className="flex items-center">
      <Button 
        variant="ghost" 
        className="text-sm font-medium px-2 flex items-center gap-2" 
        onClick={toggleLanguage}
      >
        <Globe size={16} />
        {language === 'sv' ? 'EN' : 'SV'}
      </Button>
    </div>
  );
};

export default LanguageSwitcher;
