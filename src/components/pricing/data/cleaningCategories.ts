
import { CleaningCategory } from '../types';

// Get cleaning categories for different areas with translations
export const getCleaningAreas = (t: (key: string) => string): CleaningCategory[] => [
  {
    id: 'kitchen',
    title: t('kitchen'),
    items: [t('vacuumFloors'), t('mopFloors'), t('dampDrySkirtingBoards'), t('dampDryDoorFrames'), t('dustShelvesJoinery'), t('dustFreeSurfaces'), t('dustCoveredSurfaces'), t('dustOffLamps'), t('polishMirrors'), t('dustFurniture')]
  }, 
  {
    id: 'livingRoom',
    title: t('livingRoom'),
    items: [t('vacuumFloors'), t('mopFloors'), t('dampDrySkirtingBoards'), t('dampDryDoorFrames'), t('dustShelvesJoinery'), t('dustFreeSurfaces'), t('dustCoveredSurfaces'), t('dustOffElectronics'), t('dustOffLamps'), t('polishMirrors'), t('dustFurniture'), t('dustDesk'), t('dustPaintings')]
  }, 
  {
    id: 'bedroom',
    title: t('bedroom'),
    items: [t('vacuumFloors'), t('mopFloors'), t('dampDrySkirtingBoards'), t('dampDryDoorFrames'), t('dustShelvesJoinery'), t('dustFreeSurfaces'), t('dustCoveredSurfaces'), t('dustOffElectronics'), t('dustOffLamps'), t('dustPaintings'), t('polishMirrors'), t('dustFurniture'), t('dustDesk'), t('wipeBedside')]
  }, 
  {
    id: 'bathroom',
    title: t('bathroom'),
    items: [t('vacuumFloors'), t('mopFloors'), t('dampDrySkirtingBoards'), t('dampDryDoorFrames'), t('dustShelvesJoinery'), t('dustFreeSurfaces'), t('dustCoveredSurfaces'), t('dustOffLamps'), t('polishMirrors'), t('dustFurniture')]
  }, 
  {
    id: 'hall',
    title: t('hall'),
    items: [t('vacuumFloors'), t('mopFloors'), t('dampDrySkirtingBoards'), t('dampDryDoorFrames'), t('dustShelvesJoinery'), t('dustFreeSurfaces'), t('dustCoveredSurfaces'), t('dustOffLamps'), t('polishMirrors'), t('dustFurniture')]
  }, 
  {
    id: 'extraRoom',
    title: t('extraRoom'),
    items: [t('vacuumFloors'), t('mopFloors'), t('dampDrySkirtingBoards'), t('dampDryDoorFrames'), t('dustShelvesJoinery'), t('dustFreeSurfaces'), t('dustCoveredSurfaces'), t('dustOffElectronics'), t('dustOffLamps'), t('polishMirrors'), t('dustFurniture'), t('dustDesk'), t('wipeBedside'), t('dustPaintings')]
  }
];

// Get included categories for specific cleaning services
export const getIncludedCategories = (t: (key: string) => string): CleaningCategory[] => [
  {
    id: 'all-rooms',
    title: t('allRooms'),
    items: [t('vacuumFloors'), t('mopFloors'), t('dampDrySkirtingBoards'), t('dampDryDoorFrames'), t('dustShelvesJoinery')]
  }, 
  {
    id: 'other-surfaces',
    title: t('allOtherSurfaces'),
    items: [t('dustFreeSurfaces'), t('dustCoveredSurfaces'), t('dustOffElectronics'), t('dustOffLamps'), t('polishMirrors')]
  }, 
  {
    id: 'bathroom',
    title: t('bathroom'),
    items: [t('cleaningSinks'), t('cleaningAirVentsNotInside'), t('vacuumSweepingFloors')]
  }, 
  {
    id: 'window',
    title: t('windowCleaning'),
    items: [t('windowCleaningBookedSeparately')]
  }, 
  {
    id: 'balcony',
    title: t('balcony'),
    items: [t('cleaningCabinetsGarbage')]
  }, 
  {
    id: 'additional',
    title: t('additionalServices'),
    items: [t('ovenCleaningInOut'), t('refrigeratorExternallyCleaned'), t('cleaningStovetops'), t('dishwasherCleanedInOut')]
  }
];

// Get not included items for general cleaning with translations
export const getNotIncludedItems = (t: (key: string) => string) => [
  {
    title: t('glazedBalcony'),
    description: t('glazedBalconyDesc')
  },
  {
    title: t('specialFloorTreatment'),
    description: t('specialFloorTreatmentDesc')
  },
  {
    title: t('householdAppliances'),
    description: t('householdAppliancesDesc')
  },
  {
    title: t('scrubberUse'),
    description: t('scrubberUseDesc')
  },
  {
    title: t('looseItemsRemoval'),
    description: t('looseItemsRemovalDesc')
  }
];

// Get translations for NOT included section
export const getNotIncludedTranslations = (t: (key: string) => string) => ({
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
  additionalServices: t('additionalServices') || 'Additional Services'
});
