
import React from 'react';
import HomeCleaning from './HomeCleaning';
import MovingCleaning from './MovingCleaning';
import GeneralCleaning from './GeneralCleaning';
import WindowCleaning from './WindowCleaning';
import OfficeCleaning from './OfficeCleaning';
import RecurringService from './RecurringService';
import { SqmOption, CleaningCategory, WindowType } from './types';

interface TabContentProps {
  activeTab: string;
  t: (key: string) => string;
  sqmOptions: SqmOption[];
  selectedSqm: string;
  setSelectedSqm: (value: string) => void;
  cleaningAreas: CleaningCategory[];
  includedCategories: CleaningCategory[];
  windowTypes: WindowType[];
  windowCounts: Record<string, number>;
  handleCountChange: (id: string, change: number) => void;
  notIncludedTranslations: Record<string, string>;
}

const TabContent: React.FC<TabContentProps> = ({
  activeTab,
  t,
  sqmOptions,
  selectedSqm,
  setSelectedSqm,
  cleaningAreas,
  includedCategories,
  windowTypes,
  windowCounts,
  handleCountChange,
  notIncludedTranslations
}) => {
  // Render content based on active tab
  if (activeTab === 'home') {
    return (
      <HomeCleaning
        t={t}
        sqmOptions={sqmOptions}
        selectedSqm={selectedSqm}
        setSelectedSqm={setSelectedSqm}
        cleaningAreas={cleaningAreas}
      />
    );
  }

  if (activeTab === 'moving') {
    return (
      <MovingCleaning
        t={t}
        sqmOptions={sqmOptions}
        selectedSqm={selectedSqm}
        setSelectedSqm={setSelectedSqm}
      />
    );
  }

  if (activeTab === 'general') {
    return (
      <GeneralCleaning
        t={(key) => {
          // Special handling for the new NOT included section translations
          if (key in notIncludedTranslations) {
            return notIncludedTranslations[key as keyof typeof notIncludedTranslations];
          }
          return t(key);
        }}
        sqmOptions={sqmOptions}
        selectedSqm={selectedSqm}
        setSelectedSqm={setSelectedSqm}
        includedCategories={includedCategories}
      />
    );
  }

  if (activeTab === 'window') {
    return (
      <WindowCleaning
        t={t}
        windowTypes={windowTypes}
        windowCounts={windowCounts}
        handleCountChange={handleCountChange}
      />
    );
  }

  if (activeTab === 'office') {
    return <OfficeCleaning t={t} />;
  }

  if (activeTab === 'recurring') {
    return <RecurringService t={t} />;
  }

  return null;
};

export default TabContent;
