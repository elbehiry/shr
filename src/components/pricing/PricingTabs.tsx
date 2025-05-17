
import React from 'react';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';

interface PricingTabsProps {
  activeTab: string;
  onTabChange: (tabName: string) => void;
  t: (key: string) => string;
}

const PricingTabs: React.FC<PricingTabsProps> = ({ activeTab, onTabChange, t }) => {
  // Create tab options with their values and labels
  const tabOptions = [
    { value: 'home', label: t('homeCleaning') },
    { value: 'moving', label: t('movingCleaning') },
    { value: 'general', label: t('generalCleaning') },
    { value: 'window', label: t('windowCleaning') },
    { value: 'office', label: t('officeCleaning') },
    { value: 'recurring', label: t('recurringService') },
  ];

  return (
    <div className="w-full">
      <Tabs 
        value={activeTab} 
        onValueChange={onTabChange} 
        defaultValue={activeTab}
        className="w-full"
      >
        <TabsList className="flex flex-wrap justify-center gap-4 mb-8 bg-transparent h-auto p-0">
          {tabOptions.map((tab) => (
            <TabsTrigger 
              key={tab.value}
              value={tab.value}
              className={`${activeTab === tab.value ? 'bg-shr-blue-dark hover:bg-shr-blue-dark/90 text-white' : 'bg-white border border-input'} px-4 py-2 rounded-md font-medium transition-colors`}
              aria-label={tab.label}
            >
              {tab.label}
            </TabsTrigger>
          ))}
        </TabsList>
      </Tabs>
    </div>
  );
};

export default React.memo(PricingTabs);
