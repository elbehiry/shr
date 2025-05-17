
import React, { useState } from 'react';
import { useLanguage } from './LanguageSwitcher';
import PricingTabs from './pricing/PricingTabs';
import TabContent from './pricing/TabContent';

// Import data utility files
import { getSqmOptions } from './pricing/data/sqmOptions';
import { getWindowTypes, getInitialWindowCounts } from './pricing/data/windowTypes';
import { 
  getCleaningAreas, 
  getIncludedCategories, 
  getNotIncludedTranslations 
} from './pricing/data/cleaningCategories';

const Pricing = () => {
  const { t } = useLanguage();
  const [activeTab, setActiveTab] = useState('home');
  
  // Get data from utility files
  const sqmOptions = getSqmOptions();
  const windowTypes = getWindowTypes(t);
  const cleaningAreas = getCleaningAreas(t);
  const includedCategories = getIncludedCategories(t);
  const notIncludedTranslations = getNotIncludedTranslations(t);
  
  // Pre-select the lowest sqm option
  const [selectedSqm, setSelectedSqm] = useState(sqmOptions[0].value);

  // Window cleaning calculator state
  const [windowCounts, setWindowCounts] = useState(getInitialWindowCounts());
  
  const handleCountChange = (id: string, change: number) => {
    setWindowCounts(prev => {
      const currentCount = prev[id] || 0;
      const newCount = Math.max(0, currentCount + change);
      return {
        ...prev,
        [id]: newCount
      };
    });
  };

  // Handle tab changes
  const handleTabChange = (tabName: string) => {
    setActiveTab(tabName);
  };

  return (
    <section id="pricing" className="section-padding">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{t('pricingTitle')}</h2>
          <div className="h-1 w-20 bg-shr-blue-dark mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            {t('pricingDescription')}
          </p>
          <p className="text-gray-600 max-w-2xl mx-auto mt-2 font-medium">
            {t('rutDeduction')}
          </p>
        </div>
        
        <PricingTabs 
          activeTab={activeTab} 
          onTabChange={handleTabChange}
          t={t}
        />

        <div className="tab-content-container">
          <TabContent 
            activeTab={activeTab}
            t={t}
            sqmOptions={sqmOptions}
            selectedSqm={selectedSqm}
            setSelectedSqm={setSelectedSqm}
            cleaningAreas={cleaningAreas}
            includedCategories={includedCategories}
            windowTypes={windowTypes}
            windowCounts={windowCounts}
            handleCountChange={handleCountChange}
            notIncludedTranslations={notIncludedTranslations}
          />
        </div>
      </div>
    </section>
  );
};

export default Pricing;
