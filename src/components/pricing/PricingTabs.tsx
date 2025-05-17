
import React from 'react';
import { Button } from '@/components/ui/button';

interface PricingTabsProps {
  activeTab: string;
  onTabChange: (tabName: string) => void;
  t: (key: string) => string;
}

const PricingTabs: React.FC<PricingTabsProps> = ({ activeTab, onTabChange, t }) => {
  return (
    <div className="flex flex-wrap justify-center gap-4 mb-8">
      <Button 
        variant={activeTab === 'home' ? 'default' : 'outline'} 
        onClick={() => onTabChange('home')} 
        className={activeTab === 'home' ? 'bg-shr-blue-dark hover:bg-shr-blue-dark/90' : ''}
        aria-label={t('homeCleaning')}
      >
        {t('homeCleaning')}
      </Button>
      <Button 
        variant={activeTab === 'moving' ? 'default' : 'outline'} 
        onClick={() => onTabChange('moving')} 
        className={activeTab === 'moving' ? 'bg-shr-blue-dark hover:bg-shr-blue-dark/90' : ''}
        aria-label={t('movingCleaning')}
      >
        {t('movingCleaning')}
      </Button>
      <Button 
        variant={activeTab === 'general' ? 'default' : 'outline'} 
        onClick={() => onTabChange('general')} 
        className={activeTab === 'general' ? 'bg-shr-blue-dark hover:bg-shr-blue-dark/90' : ''}
        aria-label={t('generalCleaning')}
      >
        {t('generalCleaning')}
      </Button>
      <Button 
        variant={activeTab === 'window' ? 'default' : 'outline'} 
        onClick={() => onTabChange('window')} 
        className={activeTab === 'window' ? 'bg-shr-blue-dark hover:bg-shr-blue-dark/90' : ''}
        aria-label={t('windowCleaning')}
      >
        {t('windowCleaning')}
      </Button>
      <Button 
        variant={activeTab === 'office' ? 'default' : 'outline'} 
        onClick={() => onTabChange('office')} 
        className={activeTab === 'office' ? 'bg-shr-blue-dark hover:bg-shr-blue-dark/90' : ''}
        aria-label={t('officeCleaning')}
      >
        {t('officeCleaning')}
      </Button>
      <Button 
        variant={activeTab === 'recurring' ? 'default' : 'outline'} 
        onClick={() => onTabChange('recurring')} 
        className={activeTab === 'recurring' ? 'bg-shr-blue-dark hover:bg-shr-blue-dark/90' : ''}
        aria-label={t('recurringService')}
      >
        {t('recurringService')}
      </Button>
    </div>
  );
};

export default PricingTabs;
