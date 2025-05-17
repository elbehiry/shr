
import React, { useState } from 'react';
import { useLanguage } from './LanguageSwitcher';
import { Button } from '@/components/ui/button';

// Import components
import HomeCleaning from './pricing/HomeCleaning';
import MovingCleaning from './pricing/MovingCleaning';
import GeneralCleaning from './pricing/GeneralCleaning';
import WindowCleaning from './pricing/WindowCleaning';
import OfficeCleaning from './pricing/OfficeCleaning';
import RecurringService from './pricing/RecurringService';

// Import types
import { SqmOption, WindowType, CleaningCategory } from './pricing/types';

const Pricing = () => {
  const { t } = useLanguage();
  // Changed default tab to 'home'
  const [activeTab, setActiveTab] = useState('home');
  const [isChecklistOpen, setIsChecklistOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string | null>(null);

  // Define included categories for the cleaning checklist
  const includedCategories: CleaningCategory[] = [{
    id: 'all-rooms',
    title: t('allRooms'),
    items: [t('vacuumFloors'), t('mopFloors'), t('dampDrySkirtingBoards'), t('dampDryDoorFrames'), t('dustShelvesJoinery')]
  }, {
    id: 'other-surfaces',
    title: t('allOtherSurfaces'),
    items: [t('dustFreeSurfaces'), t('dustCoveredSurfaces'), t('dustOffElectronics'), t('dustOffLamps'), t('polishMirrors')]
  }, {
    id: 'bathroom',
    title: t('bathroom'),
    items: [t('cleaningSinks'), t('cleaningAirVentsNotInside'), t('vacuumSweepingFloors')]
  }, {
    id: 'window',
    title: t('windowCleaning'),
    items: [t('windowCleaningBookedSeparately')]
  }, {
    id: 'balcony',
    title: t('balcony'),
    items: [t('cleaningCabinetsGarbage')]
  }, {
    id: 'additional',
    title: t('additionalServices'),
    items: [t('ovenCleaningInOut'), t('refrigeratorExternallyCleaned'), t('cleaningStovetops'), t('dishwasherCleanedInOut')]
  }];

  // Add translations for NOT included section
  const notIncludedTranslations = {
    notIncludedTitle: t('notIncludedTitle') || 'The following are NOT included in the price and will be charged extra',
    notIncludedNewDescription: t('notIncludedNewDescription') || 'The following items are not included or are charged extra',
    termsLink: t('termsLink') || 'here',
    notIncludedDescriptionEnd: t('notIncludedDescriptionEnd') || 'for full information on what is included, not included and what is charged extra.',
    glazedBalcony: t('glazedBalcony') || 'Glazed Balcony',
    glazedBalconyDesc: t('glazedBalconyDesc') || 'Cleaning of the glazed balcony is NOT included in the price and will be charged extra.',
    specialFloorTreatment: t('specialFloorTreatment') || 'Special Floor Treatment',
    specialFloorTreatmentDesc: t('specialFloorTreatmentDesc') || 'Floor treatment such as waxing or polishing floors with polish is NOT included and will be charged extra if desired.',
    householdAppliances: t('householdAppliances') || 'Household appliances',
    householdAppliancesDesc: t('householdAppliancesDesc') || 'Cleaning of household appliances (washing machine, dryer and dishwasher) is not included in the price, and will be charged extra if desired.',
    scrubberUse: t('scrubberUse') || 'Use of scrubber',
    scrubberUseDesc: t('scrubberUseDesc') || 'Use of a scrubber for very dirty floors is not included in the price and will be charged extra if necessary.',
    looseItemsRemoval: t('looseItemsRemoval') || 'Removal of loose items',
    looseItemsRemovalDesc: t('looseItemsRemovalDesc') || 'Removal of loose items to be thrown away is NOT included in the price and is charged extra per hour.',
    additionalServices: t('additionalServices') || 'Additional Services',
  };
  
  // Add Swedish translations
  const notIncludedTranslationsSv = {
    notIncludedTitle: 'Följande ingår INTE i priset och debiteras extra',
    notIncludedNewDescription: 'Följande artiklar ingår inte eller debiteras extra',
    termsLink: 'här',
    notIncludedDescriptionEnd: 'för fullständig information om vad som ingår, inte ingår och vad som debiteras extra.',
    glazedBalcony: 'Inglasad balkong',
    glazedBalconyDesc: 'Rengöring av den inglasade balkongen ingår INTE i priset och debiteras extra.',
    specialFloorTreatment: 'Speciell golvbehandling',
    specialFloorTreatmentDesc: 'Golvbehandling som vaxning eller polering av golv med polish ingår INTE och debiteras extra om så önskas.',
    householdAppliances: 'Hushållsapparater',
    householdAppliancesDesc: 'Rengöring av hushållsapparater (tvättmaskin, torktumlare och diskmaskin) ingår inte i priset och debiteras extra om så önskas.',
    scrubberUse: 'Användning av skurmaskin',
    scrubberUseDesc: 'Användning av en skurmaskin för mycket smutsiga golv ingår inte i priset och debiteras extra om det behövs.',
    looseItemsRemoval: 'Borttagning av lösa föremål',
    looseItemsRemovalDesc: 'Borttagning av lösa föremål som ska kastas ingår INTE i priset och debiteras extra per timme.',
    additionalServices: 'Ytterligare tjänster',
  };
  
  // Original useLanguage hook structure assumes t function handles these translations
  // and they're likely loaded from a language file or object
  // For simplicity, we're adding these translations directly to the component
  
  const toggleSection = (sectionId: string) => {
    setActiveSection(activeSection === sectionId ? null : sectionId);
  };

  // Define square meter options
  const sqmOptions: SqmOption[] = [{
    value: "0-50",
    label: "0-50 m²",
    hours: 5,
    price: 1800
  }, {
    value: "51-60",
    label: "51-60 m²",
    hours: 6,
    price: 2000
  }, {
    value: "61-80",
    label: "61-80 m²",
    hours: 7,
    price: 2600
  }, {
    value: "81-100",
    label: "81-100 m²",
    hours: 8,
    price: 3300
  }, {
    value: "101-120",
    label: "101-120 m²",
    hours: 9,
    price: 3600
  }, {
    value: "121-140",
    label: "121-140 m²",
    hours: 10,
    price: 4000
  }, {
    value: "140+",
    label: "140+ m²",
    hours: 0,
    price: 0
  }];

  // Pre-select the lowest sqm option
  const [selectedSqm, setSelectedSqm] = useState(sqmOptions[0].value);

  // Window cleaning calculator state
  const [windowCounts, setWindowCounts] = useState<Record<string, number>>({
    type1: 0,
    type2: 0,
    type3: 0,
    type4: 0,
    balconyDoorLarge: 0,
    balconyDoor: 0,
    balconyFull: 0,
    balconyHalf: 0
  });
  
  const windowTypes: WindowType[] = [{
    id: 'type1',
    name: t('windowType1'),
    description: t('regularNoBars'),
    price: 100,
    icon: <svg viewBox="0 0 24 24" className="h-12 w-12 mx-auto mb-2" stroke="currentColor" fill="none" strokeWidth="2">
          <rect x="2" y="3" width="20" height="18" rx="1" />
          <line x1="12" y1="3" x2="12" y2="21" />
        </svg>
  }, {
    id: 'type2',
    name: t('windowType2'),
    description: t('tripleNoBars'),
    price: 120,
    icon: <svg viewBox="0 0 24 24" className="h-12 w-12 mx-auto mb-2" stroke="currentColor" fill="none" strokeWidth="2">
          <rect x="2" y="3" width="20" height="18" rx="1" />
          <line x1="8" y1="3" x2="8" y2="21" />
          <line x1="16" y1="3" x2="16" y2="21" />
        </svg>
  }, {
    id: 'type3',
    name: t('windowType3'),
    description: t('tripleWithBars'),
    price: 140,
    icon: <svg viewBox="0 0 24 24" className="h-12 w-12 mx-auto mb-2" stroke="currentColor" fill="none" strokeWidth="2">
          <rect x="2" y="3" width="20" height="18" rx="1" />
          <line x1="8" y1="3" x2="8" y2="21" />
          <line x1="16" y1="3" x2="16" y2="21" />
          <line x1="2" y1="12" x2="22" y2="12" />
        </svg>
  }, {
    id: 'type4',
    name: t('windowType4'),
    description: t('unusualLarge'),
    price: 160,
    icon: <svg viewBox="0 0 24 24" className="h-12 w-12 mx-auto mb-2" stroke="currentColor" fill="none" strokeWidth="2">
          <rect x="2" y="3" width="20" height="18" rx="1" />
          <path d="M12 3 L12 21" strokeDasharray="2 2" />
        </svg>
  }, {
    id: 'balconyDoorLarge',
    name: t('balconyDoorLarge'),
    description: t('balconyDoorLargeDesc'),
    price: 150,
    icon: <svg viewBox="0 0 24 24" className="h-12 w-12 mx-auto mb-2" stroke="currentColor" fill="none" strokeWidth="2">
          <rect x="3" y="2" width="18" height="20" rx="1" />
          <circle cx="18" cy="12" r="1" />
        </svg>
  }, {
    id: 'balconyDoor',
    name: t('balconyDoor'),
    description: t('balconyDoorDesc'),
    price: 100,
    icon: <svg viewBox="0 0 24 24" className="h-12 w-12 mx-auto mb-2" stroke="currentColor" fill="none" strokeWidth="2">
          <rect x="3" y="2" width="18" height="20" rx="1" />
          <rect x="12" y="6" width="6" height="6" />
          <circle cx="18" cy="12" r="1" />
        </svg>
  }, {
    id: 'balconyFull',
    name: t('balconyFullGlazed'),
    description: t('balconyFullGlazedDesc'),
    price: 950,
    icon: <svg viewBox="0 0 24 24" className="h-12 w-12 mx-auto mb-2" stroke="currentColor" fill="none" strokeWidth="2">
          <rect x="2" y="3" width="20" height="18" rx="1" />
          <line x1="6" y1="3" x2="6" y2="21" />
          <line x1="10" y1="3" x2="10" y2="21" />
          <line x1="14" y1="3" x2="14" y2="21" />
          <line x1="18" y1="3" x2="18" y2="21" />
        </svg>
  }, {
    id: 'balconyHalf',
    name: t('balconyHalfGlazed'),
    description: t('balconyHalfGlazedDesc'),
    price: 600,
    icon: <svg viewBox="0 0 24 24" className="h-12 w-12 mx-auto mb-2" stroke="currentColor" fill="none" strokeWidth="2">
          <rect x="2" y="3" width="20" height="18" rx="1" />
          <line x1="7" y1="3" x2="7" y2="21" />
          <line x1="12" y1="3" x2="12" y2="21" />
          <line x1="17" y1="3" x2="17" y2="21" />
        </svg>
  }];
  
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

  // Define cleaning areas for the checklist
  const cleaningAreas: CleaningCategory[] = [{
    id: 'kitchen',
    title: t('kitchen'),
    items: [t('vacuumFloors'), t('mopFloors'), t('dampDrySkirtingBoards'), t('dampDryDoorFrames'), t('dustShelvesJoinery'), t('dustFreeSurfaces'), t('dustCoveredSurfaces'), t('dustOffLamps'), t('polishMirrors'), t('dustFurniture')]
  }, {
    id: 'livingRoom',
    title: t('livingRoom'),
    items: [t('vacuumFloors'), t('mopFloors'), t('dampDrySkirtingBoards'), t('dampDryDoorFrames'), t('dustShelvesJoinery'), t('dustFreeSurfaces'), t('dustCoveredSurfaces'), t('dustOffElectronics'), t('dustOffLamps'), t('polishMirrors'), t('dustFurniture'), t('dustDesk'), t('dustPaintings')]
  }, {
    id: 'bedroom',
    title: t('bedroom'),
    items: [t('vacuumFloors'), t('mopFloors'), t('dampDrySkirtingBoards'), t('dampDryDoorFrames'), t('dustShelvesJoinery'), t('dustFreeSurfaces'), t('dustCoveredSurfaces'), t('dustOffElectronics'), t('dustOffLamps'), t('dustPaintings'), t('polishMirrors'), t('dustFurniture'), t('dustDesk'), t('wipeBedside')]
  }, {
    id: 'bathroom',
    title: t('bathroom'),
    items: [t('vacuumFloors'), t('mopFloors'), t('dampDrySkirtingBoards'), t('dampDryDoorFrames'), t('dustShelvesJoinery'), t('dustFreeSurfaces'), t('dustCoveredSurfaces'), t('dustOffLamps'), t('polishMirrors'), t('dustFurniture')]
  }, {
    id: 'hall',
    title: t('hall'),
    items: [t('vacuumFloors'), t('mopFloors'), t('dampDrySkirtingBoards'), t('dampDryDoorFrames'), t('dustShelvesJoinery'), t('dustFreeSurfaces'), t('dustCoveredSurfaces'), t('dustOffLamps'), t('polishMirrors'), t('dustFurniture')]
  }, {
    id: 'extraRoom',
    title: t('extraRoom'),
    items: [t('vacuumFloors'), t('mopFloors'), t('dampDrySkirtingBoards'), t('dampDryDoorFrames'), t('dustShelvesJoinery'), t('dustFreeSurfaces'), t('dustCoveredSurfaces'), t('dustOffElectronics'), t('dustOffLamps'), t('polishMirrors'), t('dustFurniture'), t('dustDesk'), t('wipeBedside'), t('dustPaintings')]
  }];

  // Fix the tab switching to avoid DOM manipulation errors
  const handleTabChange = (tabName: string) => {
    // Use a safe tab switching approach
    setTimeout(() => {
      setActiveTab(tabName);
    }, 0);
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
        
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          <Button 
            variant={activeTab === 'home' ? 'default' : 'outline'} 
            onClick={() => handleTabChange('home')} 
            className={activeTab === 'home' ? 'bg-shr-blue-dark hover:bg-shr-blue-dark/90' : ''}
            aria-label={t('homeCleaning')}
          >
            {t('homeCleaning')}
          </Button>
          <Button 
            variant={activeTab === 'moving' ? 'default' : 'outline'} 
            onClick={() => handleTabChange('moving')} 
            className={activeTab === 'moving' ? 'bg-shr-blue-dark hover:bg-shr-blue-dark/90' : ''}
            aria-label={t('movingCleaning')}
          >
            {t('movingCleaning')}
          </Button>
          <Button 
            variant={activeTab === 'general' ? 'default' : 'outline'} 
            onClick={() => handleTabChange('general')} 
            className={activeTab === 'general' ? 'bg-shr-blue-dark hover:bg-shr-blue-dark/90' : ''}
            aria-label={t('generalCleaning')}
          >
            {t('generalCleaning')}
          </Button>
          <Button 
            variant={activeTab === 'window' ? 'default' : 'outline'} 
            onClick={() => handleTabChange('window')} 
            className={activeTab === 'window' ? 'bg-shr-blue-dark hover:bg-shr-blue-dark/90' : ''}
            aria-label={t('windowCleaning')}
          >
            {t('windowCleaning')}
          </Button>
          <Button 
            variant={activeTab === 'office' ? 'default' : 'outline'} 
            onClick={() => handleTabChange('office')} 
            className={activeTab === 'office' ? 'bg-shr-blue-dark hover:bg-shr-blue-dark/90' : ''}
            aria-label={t('officeCleaning')}
          >
            {t('officeCleaning')}
          </Button>
          <Button 
            variant={activeTab === 'recurring' ? 'default' : 'outline'} 
            onClick={() => handleTabChange('recurring')} 
            className={activeTab === 'recurring' ? 'bg-shr-blue-dark hover:bg-shr-blue-dark/90' : ''}
            aria-label={t('recurringService')}
          >
            {t('recurringService')}
          </Button>
        </div>

        {/* Conditionally render the appropriate tab content */}
        <div className="tab-content-container">
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

          {activeTab === 'office' && (
            <OfficeCleaning t={t} />
          )}

          {activeTab === 'recurring' && (
            <RecurringService t={t} />
          )}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
