
import React, { memo } from 'react';
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

// Use memo for the individual tab components to prevent unnecessary re-renders
const MemoizedHomeCleaning = memo(HomeCleaning);
const MemoizedMovingCleaning = memo(MovingCleaning);
const MemoizedGeneralCleaning = memo(GeneralCleaning);
const MemoizedWindowCleaning = memo(WindowCleaning);
const MemoizedOfficeCleaning = memo(OfficeCleaning);
const MemoizedRecurringService = memo(RecurringService);

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
  return (
    <div className="tab-content" data-nosnippet="true" translate="no">
      {activeTab === 'home' && (
        <MemoizedHomeCleaning
          t={t}
          sqmOptions={sqmOptions}
          selectedSqm={selectedSqm}
          setSelectedSqm={setSelectedSqm}
          cleaningAreas={cleaningAreas}
        />
      )}

      {activeTab === 'moving' && (
        <MemoizedMovingCleaning
          t={t}
          sqmOptions={sqmOptions}
          selectedSqm={selectedSqm}
          setSelectedSqm={setSelectedSqm}
        />
      )}

      {activeTab === 'general' && (
        <MemoizedGeneralCleaning
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
        <MemoizedWindowCleaning
          t={t}
          windowTypes={windowTypes}
          windowCounts={windowCounts}
          handleCountChange={handleCountChange}
        />
      )}

      {activeTab === 'office' && <MemoizedOfficeCleaning t={t} />}

      {activeTab === 'recurring' && <MemoizedRecurringService t={t} />}
    </div>
  );
};

export default TabContent;
