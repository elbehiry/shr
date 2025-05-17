
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
  // Use React.memo'd components or render conditionally with &&
  return (
    <>
      {activeTab === 'home' && (
        <HomeCleaning
          t={t}
          sqmOptions={sqmOptions}
          selectedSqm={selectedSqm}
          setSelectedSqm={setSelectedSqm}
          cleaningAreas={cleaningAreas}
        />
      )}

      {activeTab === 'moving' && (
        <MovingCleaning
          t={t}
          sqmOptions={sqmOptions}
          selectedSqm={selectedSqm}
          setSelectedSqm={setSelectedSqm}
        />
      )}

      {activeTab === 'general' && (
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
      )}

      {activeTab === 'window' && (
        <WindowCleaning
          t={t}
          windowTypes={windowTypes}
          windowCounts={windowCounts}
          handleCountChange={handleCountChange}
        />
      )}

      {activeTab === 'office' && <OfficeCleaning t={t} />}

      {activeTab === 'recurring' && <RecurringService t={t} />}
    </>
  );
};

export default TabContent;
