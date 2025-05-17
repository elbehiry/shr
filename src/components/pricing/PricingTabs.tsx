
import React, { useCallback } from 'react';
import { Button } from '@/components/ui/button';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';

interface PricingTabsProps {
  activeTab: string;
  onTabChange: (tabName: string) => void;
  t: (key: string) => string;
}

const PricingTabs: React.FC<PricingTabsProps> = ({ activeTab, onTabChange, t }) => {
  // Use useCallback to prevent unnecessary renders
  const handleTabClick = useCallback((tabName: string) => {
    if (activeTab !== tabName) {
      onTabChange(tabName);
    }
  }, [onTabChange, activeTab]);

  return (
    <Tabs value={activeTab} onValueChange={handleTabClick} className="w-full">
      <TabsList className="flex flex-wrap justify-center gap-4 mb-8 bg-transparent h-auto p-0">
        <TabsTrigger 
          value="home"
          className={`${activeTab === 'home' ? 'bg-shr-blue-dark hover:bg-shr-blue-dark/90 text-white' : 'bg-white border border-input'} px-4 py-2 rounded-md font-medium transition-colors`}
          aria-label={t('homeCleaning')}
        >
          {t('homeCleaning')}
        </TabsTrigger>
        <TabsTrigger 
          value="moving"
          className={`${activeTab === 'moving' ? 'bg-shr-blue-dark hover:bg-shr-blue-dark/90 text-white' : 'bg-white border border-input'} px-4 py-2 rounded-md font-medium transition-colors`}
          aria-label={t('movingCleaning')}
        >
          {t('movingCleaning')}
        </TabsTrigger>
        <TabsTrigger 
          value="general"
          className={`${activeTab === 'general' ? 'bg-shr-blue-dark hover:bg-shr-blue-dark/90 text-white' : 'bg-white border border-input'} px-4 py-2 rounded-md font-medium transition-colors`}
          aria-label={t('generalCleaning')}
        >
          {t('generalCleaning')}
        </TabsTrigger>
        <TabsTrigger 
          value="window"
          className={`${activeTab === 'window' ? 'bg-shr-blue-dark hover:bg-shr-blue-dark/90 text-white' : 'bg-white border border-input'} px-4 py-2 rounded-md font-medium transition-colors`}
          aria-label={t('windowCleaning')}
        >
          {t('windowCleaning')}
        </TabsTrigger>
        <TabsTrigger 
          value="office"
          className={`${activeTab === 'office' ? 'bg-shr-blue-dark hover:bg-shr-blue-dark/90 text-white' : 'bg-white border border-input'} px-4 py-2 rounded-md font-medium transition-colors`}
          aria-label={t('officeCleaning')}
        >
          {t('officeCleaning')}
        </TabsTrigger>
        <TabsTrigger 
          value="recurring"
          className={`${activeTab === 'recurring' ? 'bg-shr-blue-dark hover:bg-shr-blue-dark/90 text-white' : 'bg-white border border-input'} px-4 py-2 rounded-md font-medium transition-colors`}
          aria-label={t('recurringService')}
        >
          {t('recurringService')}
        </TabsTrigger>
      </TabsList>
    </Tabs>
  );
};

export default React.memo(PricingTabs);
