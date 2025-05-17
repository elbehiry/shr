
import React, { useCallback } from 'react';
import { Button } from '@/components/ui/button';

interface PricingTabsProps {
  activeTab: string;
  onTabChange: (tabName: string) => void;
  t: (key: string) => string;
}

const PricingTabs: React.FC<PricingTabsProps> = ({ activeTab, onTabChange, t }) => {
  // Use useCallback to prevent unnecessary renders
  const handleTabClick = useCallback((tabName: string) => {
    onTabChange(tabName);
  }, [onTabChange]);

  return (
    <div className="flex flex-wrap justify-center gap-4 mb-8">
      <Button 
        variant={activeTab === 'home' ? 'default' : 'outline'} 
        onClick={() => handleTabClick('home')} 
        className={activeTab === 'home' ? 'bg-shr-blue-dark hover:bg-shr-blue-dark/90' : ''}
        aria-label={t('homeCleaning')}
      >
        {t('homeCleaning')}
      </Button>
      <Button 
        variant={activeTab === 'moving' ? 'default' : 'outline'} 
        onClick={() => handleTabClick('moving')} 
        className={activeTab === 'moving' ? 'bg-shr-blue-dark hover:bg-shr-blue-dark/90' : ''}
        aria-label={t('movingCleaning')}
      >
        {t('movingCleaning')}
      </Button>
      <Button 
        variant={activeTab === 'general' ? 'default' : 'outline'} 
        onClick={() => handleTabClick('general')} 
        className={activeTab === 'general' ? 'bg-shr-blue-dark hover:bg-shr-blue-dark/90' : ''}
        aria-label={t('generalCleaning')}
      >
        {t('generalCleaning')}
      </Button>
      <Button 
        variant={activeTab === 'window' ? 'default' : 'outline'} 
        onClick={() => handleTabClick('window')} 
        className={activeTab === 'window' ? 'bg-shr-blue-dark hover:bg-shr-blue-dark/90' : ''}
        aria-label={t('windowCleaning')}
      >
        {t('windowCleaning')}
      </Button>
      <Button 
        variant={activeTab === 'office' ? 'default' : 'outline'} 
        onClick={() => handleTabClick('office')} 
        className={activeTab === 'office' ? 'bg-shr-blue-dark hover:bg-shr-blue-dark/90' : ''}
        aria-label={t('officeCleaning')}
      >
        {t('officeCleaning')}
      </Button>
      <Button 
        variant={activeTab === 'recurring' ? 'default' : 'outline'} 
        onClick={() => handleTabClick('recurring')} 
        className={activeTab === 'recurring' ? 'bg-shr-blue-dark hover:bg-shr-blue-dark/90' : ''}
        aria-label={t('recurringService')}
      >
        {t('recurringService')}
      </Button>
    </div>
  );
};

export default PricingTabs;
