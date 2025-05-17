
import React, { createContext, useContext, useState, ReactNode } from 'react';
import { Button } from '@/components/ui/button';
import { Languages } from 'lucide-react';

interface LanguageContextType {
  currentLanguage: string;
  setLanguage: (lang: string) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType>({
  currentLanguage: 'sv',
  setLanguage: () => {},
  t: () => '',
});

export const useLanguage = () => useContext(LanguageContext);

interface LanguageProviderProps {
  children: ReactNode;
}

const translations: Record<string, Record<string, string>> = {
  sv: {
    // General
    title: 'SHRstäd.se',
    rutDeduction: 'Alla priser är angivna med RUT-avdrag.',
    
    // Navigation
    home: 'Hem',
    about: 'Om oss',
    services: 'Tjänster',
    pricing: 'Priser',
    testimonials: 'Omdömen',
    contact: 'Kontakt',
    
    // Hero
    heroTitle: 'Professionella Städtjänster',
    heroSubtitle: 'För hem och företag',
    heroDescription: 'Vi erbjuder högkvalitativa städtjänster för bostäder och företag. Vårt team av erfarna professionella ser till att ditt utrymme är skinande rent.',
    contactUs: 'Kontakta oss',
    getQuote: 'Få offert',
    
    // About
    aboutTitle: 'Om SHR städ',
    aboutDescription: 'Din tillförlitliga städpartner',
    aboutText: 'SHR städ har levererat förstklassiga städtjänster i över 10 år. Vårt dedikerade team strävar efter perfektion i varje uppdrag, oavsett om det är en liten lägenhet eller stora kontorsutrymmen. Vi använder miljövänliga produkter och moderna tekniker för att säkerställa att ditt utrymme är inte bara rent utan även hälsosamt.',
    professionalStaff: 'Professionell personal',
    trainedSpecialists: 'Utbildade och erfarna specialister',
    efficientService: 'Effektiv service',
    quickProcesses: 'Snabba och grundliga processer',
    commercialResidential: 'Kommersiell & bostäder',
    allPropertyTypes: 'Tjänster för alla fastighetstyper',
    satisfactionGuarantee: 'Nöjdhetsgaranti',
    happinessPriority: 'Din tillfredsställelse är vår prioritet',
    cleaningIncluded: 'DETTA INGÅR I STÄDNINGEN',
    cleaningChecklistDescription: 'Vi utgår från denna checklista och anpassar den efter dina behov. Detta säkerställer att vi bibehåller en kontinuerligt hög kvalitet.',

    // Room names
    kitchen: 'KÖK',
    livingRoom: 'VARDAGSRUM',
    bedroom: 'SOVRUM',
    bathroom: 'BADRUM',
    hall: 'HALL',
    extraRoom: 'EXTRA RUM',
    room: 'RUM',
    laundry: 'TVÄTTSTUGA',
    allRooms: 'ALLA RUM',
    allOtherSurfaces: 'ALLA ANDRA YTOR',
    balcony: 'BALKONG',
    guarantee: 'GARANTI',
    other: 'ÖVRIGT',
    desire: 'ÖNSKEMÅL',
    additionalServices: 'YTTERLIGARE TJÄNSTER',
    
    // Cleaning checklist items
    vacuumFloors: 'Dammsuga golv',
    mopFloors: 'Våttorka golv',
    dampDrySkirtingBoards: 'Fukttorka socklar',
    dampDryDoorFrames: 'Fukttorka dörrkarmar',
    dustShelvesJoinery: 'Damma hyllor och snickerier',
    dustFreeSurfaces: 'Damma fria ytor',
    dustCoveredSurfaces: 'Damma täckta ytor',
    dustOffElectronics: 'Damma av elektronik',
    dustOffLamps: 'Damma av lampor',
    dustPaintings: 'Damma tavlor',
    polishMirrors: 'Putsa speglar',
    dustFurniture: 'Damma möbler',
    dustDesk: 'Damma skrivbord',
    wipeBedside: 'Torka av sängbord och sänggavlar',
    cleaningIncludedIn: 'DETTA INGÅR I',
    
    // New items for moving cleaning
    wallsDusted: 'Väggar dammas av',
    moldingsWiped: 'Lister och andra snickerier torkas av',
    elementsCleaned: 'Element rengörs',
    doorsCleaned: 'Dörrar rengörs',
    windowsAllSides: 'Fönster rengörs på alla sidor',
    wardrobesWiped: 'Garderober torkas ur',
    blindsCleaned: 'Persienner rengörs',
    floorsVacuumedWiped: 'Golv dammsugs och torkas',
    allWindowsCleaned: 'Alla fönster rengörs',
    washingMachineCleaned: 'Tvättmaskin rengörs invändigt och utvändigt',
    tumbleDryersCleaned: 'Torktumlare rengörs invändigt och utvändigt',
    dryingCabinetsCleaned: 'Torkskåp rengörs invändigt och utvändigt',
    wallsCeilingsDusted: 'Väggar och tak dammas av',
    floorDrainsCleaned: 'Golvbrunnar rengörs',
    sellerResponsibility: 'Säljaren ansvarar för att golvbrunnsgaller går att lyfta bort samt att vitvaror, maskiner och annan utrustning går att dra fram för städning. Eventuella badkarsfronter måste också vara avhängda.',
    guaranteeText: 'Köparen besiktigar städningen och om den inte godkänns kan ni vara helt säkra på att vi justerar fel och brister; Allt för att ni som kund ska kunna känna er trygga med ert köp.',
    basementsSwept: 'Källarutrymmen/förråd sopas ur',
    furnishedBasementCleaned: 'Inredd källare städas som vanligt',
    
    // New items for general cleaning
    vacuumingMoppingFloors: 'Dammsugning och våttorkning av golv',
    cleaningBaseboardsDoorlinings: 'Rengöring av socklar, dörrfoder, dörrar, eluttag och strömbrytare',
    cleaningFramesWindowsills: 'Rengöring av karmar, fönsterbänkar och målade ytor',
    cleaningWardrobesExterior: 'Rengöring av garderober, utvändigt',
    cleaningElements: 'Rengöring av element',
    stainRemovalWalls: 'Fläckborttagning på väggar',
    dustingShelvesPaintings: 'Dammtorkning av hyllor och tavlor',
    emptyingTrashcans: 'Tömning av papperskorgar',
    cleaningAirVents: 'Rengöring av friskluftventiler',
    shakingCarpets: 'Skakning av mindre mattor',
    vacuumingSofa: 'Dammsugning av möbler/soffa',
    refrigeratorExternallyCleaned: 'Kyl, sval och frys rengörs utvändigt',
    ovenCleaningInOut: 'Ugn invändigt och utvändigt, rengöring av ugnsplåtar',
    cleaningStovetops: 'Rengöring av spishällar',
    dishwasherCleanedInOut: 'Diskmaskin rengörs invändigt och utvändigt',
    cleaningSinks: 'Rengöring av diskhoar, köksbänkar och kakel',
    cabinetDoorsCleaned: 'Skåpsluckor/skåpslock rengörs',
    cleaningCabinetsGarbage: 'Rengöring in- och utvändigt av skåp där sopbehållare är placerade',
    cleaningKitchenHood: 'Rengöring av köksfläkt och filter',
    cleaningAirVentsNotInside: 'Rengöring av friskluftventiler (ej invändigt)',
    vacuumSweepingFloors: 'Dammsugning/sopning av golv',
    windowCleaningBookedSeparately: 'Fönsterputs bokas separat.',
    desireText: 'Vi kan anpassa vårt uppdrag efter dina önskemål. Om dina önskemål avviker från checklistan, vänligen begär en offert så kan vi ge dig ett exakt pris.',
    
    // NOT included section - Swedish translations
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

    // Services
    servicesTitle: 'Våra tjänster',
    servicesDescription: 'Vi erbjuder ett brett utbud av städtjänster för att möta alla dina behov.',
    residentialCleaning: 'Hemstädning',
    residentialDescription: 'Professionell städning för ditt hem, skräddarsydd efter dina specifika behov.',
    commercialCleaning: 'Kontorsstädning',
    commercialDescription: 'Städtjänster för kontor och kommersiella utrymmen, anpassade efter företagets behov.',
    specialtyCleaning: 'Specialstädning',
    specialtyDescription: 'Specialiserade tjänster för specifika behov som mattvätt, fönsterputs m.m.',
    recurringService: 'Återkommande tjänst',
    recurringDescription: 'Regelbunden städning enligt ditt schema: veckovis, varannan vecka eller månadsvis.',
    
    // New translations for service features
    regularMaintenance: 'Regelbundet underhåll',
    deepCleaning: 'Djuprengöring',
    houseMoving: 'Flyttstädning',
    customSchedules: 'Anpassade scheman',
    officeCleaning: 'Kontorstädning',
    retailSpaces: 'Butikslokaler',
    medicalFacilities: 'Vårdinrättningar',
    afterHoursService: 'Service efter arbetstid',
    carpetCleaning: 'Mattvätt',
    windowWashing: 'Fönsterputs',
    postConstruction: 'Efter renovering',
    eventCleanup: 'Evenemangsstäd',
    weeklyService: 'Veckovis service',
    biweeklyOptions: 'Varannan vecka',
    monthlyDeepCleaning: 'Månadsvis djuprengöring',
    customizedSchedules: 'Anpassade scheman',
    
    // Additional services translations
    getQuoteButton: 'Få offert',
    getInTouch: 'Kontakta oss',
    serviceAreas: 'Våra serviceområden',
    readyForCleaner: 'Redo för professionell städning?',
    professionalServices: 'Professionella tjänster',
    quickLinks: 'Snabblänkar',
    contactInformation: 'Kontaktinformation',
    ourServices: 'Våra tjänster',
    ourServicesDescription: 'Vi erbjuder ett brett utbud av städtjänster för att möta alla dina behov.',
    requestQuote: 'Begär offert',
    
    // Pricing section
    pricingTitle: 'Våra priser',
    pricingDescription: '',
    homeCleaning: 'Hemstädning',
    movingCleaning: 'Flyttstädning',
    generalCleaning: 'Storstädning',
    windowCleaning: 'Fönsterputs',
    homeSize: 'Bostadens storlek',
    selectSize: 'Välj storlek',
    estimatedPrice: 'Uppskattat pris',
    bookNow: 'Boka nu',
    callForQuote: 'Ring för offert',
    hours: 'timmar',
    customQuote: 'Anpassad offert',
    
    // Testimonials section
    testimonialsTitle: 'Vad våra kunder säger',
    
    // Features for the different cleaning services
    generalFeature1: 'Omfattande rengöring av alla ytor',
    generalFeature2: 'Miljövänliga rengöringsmedel',
    generalFeature3: 'Erfarna städare med omsorg för detaljer',
    
    movingFeature1: 'Professionell flyttstädning enligt checklista',
    movingFeature2: 'Godkänd av besiktningsman',
    movingFeature3: 'Fullständig rengöring av alla utrymmen',
    
    // Window types descriptions
    windowType1: 'Standard Fönster',
    regularNoBars: 'Vanligt fönster utan spröjs',
    windowType2: 'Tredelat Fönster',
    tripleNoBars: 'Tredelat fönster utan spröjs',
    windowType3: 'Tredelat med Spröjs',
    tripleWithBars: 'Tredelat fönster med spröjs',
    windowType4: 'Specialfönster',
    unusualLarge: 'Ovanligt stort eller svåråtkomligt',
    balconyDoorLarge: 'Stor Balkongdörr',
    balconyDoorLargeDesc: 'Stor balkongdörr med fönster',
    balconyDoor: 'Balkongdörr',
    balconyDoorDesc: 'Standard balkongdörr',
    balconyFullGlazed: 'Helglasad Balkong',
    balconyFullGlazedDesc: 'Fullständigt inglasad balkong',
    balconyHalfGlazed: 'Halvglasad Balkong',
    balconyHalfGlazedDesc: 'Delvis inglasad balkong',
    
    totalPrice: 'Totalt Pris',
    
    // Recurring service descriptions
    weekly: 'Veckovis',
    weeklyDescription: 'Regelbunden grundlig städning varje vecka för ett konsekvent rent hem',
    biweekly: 'Varannan Vecka',
    biweeklyDescription: 'Den mest populära tjänsten för hushåll som behöver regelbunden städning',
    monthly: 'Månadsvis',
    monthlyDescription: 'Djuprengöring en gång i månaden för att upprätthålla hemmets renhet',
    callForCustomPlan: 'Ring för anpassad plan',
  },
  
  en: {
    // General
    title: 'SHRstäd.se',
    rutDeduction: 'All prices are quoted with RUT deductions.',
    
    // Navigation
    home: 'Home',
    about: 'About',
    services: 'Services',
    pricing: 'Pricing',
    testimonials: 'Testimonials',
    contact: 'Contact',
    
    // Hero
    heroTitle: 'Professional Cleaning Services',
    heroSubtitle: 'For homes and businesses',
    heroDescription: 'We offer high-quality cleaning services for residential and commercial properties. Our team of experienced professionals ensures your space is spotlessly clean.',
    contactUs: 'Contact Us',
    getQuote: 'Get Quote',
    
    // About
    aboutTitle: 'About SHR städ',
    aboutDescription: 'Your reliable cleaning partner',
    aboutText: 'SHR städ has been delivering top-notch cleaning services for over 10 years. Our dedicated team strives for perfection in every assignment, whether it\'s a small apartment or large office spaces. We use eco-friendly products and modern techniques to ensure your space is not just clean but healthy.',
    professionalStaff: 'Professional Staff',
    trainedSpecialists: 'Trained and experienced specialists',
    efficientService: 'Efficient Service',
    quickProcesses: 'Quick and thorough processes',
    commercialResidential: 'Commercial & Residential',
    allPropertyTypes: 'Services for all property types',
    satisfactionGuarantee: 'Satisfaction Guarantee',
    happinessPriority: 'Your satisfaction is our priority',
    cleaningIncluded: 'THIS IS INCLUDED IN CLEANING',
    cleaningChecklistDescription: 'We start from this checklist and adapt it to your needs. This ensures that we maintain a continuous high quality.',
    
    // Room names
    kitchen: 'KITCHEN',
    livingRoom: 'LIVING ROOM',
    bedroom: 'BEDROOM',
    bathroom: 'BATHROOM',
    hall: 'HALL',
    extraRoom: 'EXTRA ROOM',
    room: 'ROOM',
    laundry: 'LAUNDRY',
    allRooms: 'ALL ROOMS',
    allOtherSurfaces: 'ALL OTHER SURFACES',
    balcony: 'BALCONY',
    guarantee: 'GUARANTEE',
    other: 'OTHER',
    desire: 'DESIRE',
    additionalServices: 'ADDITIONAL SERVICES',
    
    // Cleaning checklist items
    vacuumFloors: 'Vacuum floors',
    mopFloors: 'Mop floors',
    dampDrySkirtingBoards: 'Damp-dry skirting boards',
    dampDryDoorFrames: 'Damp-dry door frames',
    dustShelvesJoinery: 'Dust shelves & joinery',
    dustFreeSurfaces: 'Dust free surfaces',
    dustCoveredSurfaces: 'Dust covered surfaces',
    dustOffElectronics: 'Dust off electronics',
    dustOffLamps: 'Dust off lamps',
    dustPaintings: 'Dusting paintings',
    polishMirrors: 'Polish mirrors',
    dustFurniture: 'Dust the furniture',
    dustDesk: 'Dust the desk',
    wipeBedside: 'Wipe bedside tables & headboards',
    cleaningIncludedIn: 'THIS IS INCLUDED IN',
    
    // New items for moving cleaning
    wallsDusted: 'Walls are dusted',
    moldingsWiped: 'Moldings and other joinery are wiped down',
    elementsCleaned: 'Elements are cleaned',
    doorsCleaned: 'Doors are cleaned',
    windowsAllSides: 'Windows are cleaned on all sides',
    wardrobesWiped: 'Wardrobes are wiped out',
    blindsCleaned: 'Blinds are cleaned',
    floorsVacuumedWiped: 'Floors are vacuumed and wiped',
    allWindowsCleaned: 'All windows are cleaned',
    washingMachineCleaned: 'Washing machine is cleaned inside & out',
    tumbleDryersCleaned: 'Tumble dryers are cleaned inside & out',
    dryingCabinetsCleaned: 'Drying cabinets are cleaned inside & out',
    wallsCeilingsDusted: 'Walls and ceilings are dusted',
    floorDrainsCleaned: 'Floor drains are cleaned',
    sellerResponsibility: 'The seller is responsible for ensuring that floor drain covers can be removed and that appliances, machines and other equipment can be pushed forward for cleaning. Any bathtub fronts must also be hung off.',
    guaranteeText: 'The buyer inspects the cleaning and if it is not approved, you can be sure that we will adjust the errors and any mistakes; All so that you as a customer can feel secure in your purchase.',
    basementsSwept: 'Basements/storage areas are swept out',
    furnishedBasementCleaned: 'Furnished basement is cleaned as usual',
    
    // New items for general cleaning
    vacuumingMoppingFloors: 'Vacuuming and mopping floors',
    cleaningBaseboardsDoorlinings: 'Cleaning of baseboards, door linings, doors, electrical sockets and switches',
    cleaningFramesWindowsills: 'Cleaning of frames, window sills and painted surfaces',
    cleaningWardrobesExterior: 'Cleaning of wardrobes, exterior',
    cleaningElements: 'Cleaning of elements',
    stainRemovalWalls: 'Stain removal from walls',
    dustingShelvesPaintings: 'Dusting shelves and paintings',
    emptyingTrashcans: 'Emptying trash cans',
    cleaningAirVents: 'Cleaning of air vents',
    shakingCarpets: 'Shaking out smaller carpets',
    vacuumingSofa: 'Vacuuming furniture/sofa',
    refrigeratorExternallyCleaned: 'Refrigerator, cooler and freezer are cleaned externally',
    ovenCleaningInOut: 'Oven inside and outside, cleaning of oven trays',
    cleaningStovetops: 'Cleaning of stovetops/hobs',
    dishwasherCleanedInOut: 'Dishwasher is cleaned inside and out',
    cleaningSinks: 'Cleaning of sinks, kitchen counters and tiles',
    cabinetDoorsCleaned: 'Cabinet doors/cabinet lids are cleaned',
    cleaningCabinetsGarbage: 'Cleaning inside and outside of cabinets where garbage containers are located',
    cleaningKitchenHood: 'Cleaning of kitchen hood and filter',
    cleaningAirVentsNotInside: 'Cleaning of air vents (not inside)',
    vacuumSweepingFloors: 'Vacuuming/sweeping floors',
    windowCleaningBookedSeparately: 'Window cleaning is booked separately.',
    desireText: 'We can adapt our assignment to your wishes. If your wishes deviate from the checklist, please request a quote and we can give you an exact price.',

    // NOT included section - English translations
    notIncludedTitle: 'The following are NOT included in the price and will be charged extra',
    notIncludedNewDescription: 'The following items are not included or are charged extra',
    termsLink: 'here',
    notIncludedDescriptionEnd: 'for full information on what is included, not included and what is charged extra.',
    glazedBalcony: 'Glazed Balcony',
    glazedBalconyDesc: 'Cleaning of the glazed balcony is NOT included in the price and will be charged extra.',
    specialFloorTreatment: 'Special Floor Treatment',
    specialFloorTreatmentDesc: 'Floor treatment such as waxing or polishing floors with polish is NOT included and will be charged extra if desired.',
    householdAppliances: 'Household appliances',
    householdAppliancesDesc: 'Cleaning of household appliances (washing machine, dryer and dishwasher) is not included in the price, and will be charged extra if desired.',
    scrubberUse: 'Use of scrubber',
    scrubberUseDesc: 'Use of a scrubber for very dirty floors is not included in the price and will be charged extra if necessary.',
    looseItemsRemoval: 'Removal of loose items',
    looseItemsRemovalDesc: 'Removal of loose items to be thrown away is NOT included in the price and is charged extra per hour.',
    
    // Services
    servicesTitle: 'Our Services',
    servicesDescription: 'We offer a wide range of cleaning services to meet all your needs.',
    residentialCleaning: 'Residential Cleaning',
    residentialDescription: 'Professional cleaning for your home, tailored to your specific needs.',
    commercialCleaning: 'Commercial Cleaning',
    commercialDescription: 'Cleaning services for offices and commercial spaces, adapted to business needs.',
    specialtyCleaning: 'Specialty Cleaning',
    specialtyDescription: 'Specialized services for specific needs like carpet cleaning, window washing, etc.',
    recurringService: 'Recurring Service',
    recurringDescription: 'Regular cleaning on your schedule: weekly, bi-weekly, or monthly.',
    
    // New translations for service features
    regularMaintenance: 'Regular Maintenance',
    deepCleaning: 'Deep Cleaning',
    houseMoving: 'House Moving',
    customSchedules: 'Custom Schedules',
    officeCleaning: 'Office Cleaning',
    retailSpaces: 'Retail Spaces',
    medicalFacilities: 'Medical Facilities',
    afterHoursService: 'After Hours Service',
    carpetCleaning: 'Carpet Cleaning',
    windowWashing: 'Window Washing',
    postConstruction: 'Post-Construction',
    eventCleanup: 'Event Cleanup',
    weeklyService: 'Weekly Service',
    biweeklyOptions: 'Bi-weekly Options',
    monthlyDeepCleaning: 'Monthly Deep Cleaning',
    customizedSchedules: 'Customized Schedules',
    
    // Additional services translations
    getQuoteButton: 'Get Quote',
    getInTouch: 'Contact Us',
    serviceAreas: 'Our Service Areas',
    readyForCleaner: 'Ready for Professional Cleaning?',
    professionalServices: 'Professional Services',
    quickLinks: 'Quick Links',
    contactInformation: 'Contact Information',
    ourServices: 'Our Services',
    ourServicesDescription: 'We offer a wide range of cleaning services to meet all your needs.',
    requestQuote: 'Request Quote',
    
    // Pricing section
    pricingTitle: 'Our Prices',
    pricingDescription: '',
    homeCleaning: 'Home Cleaning',
    movingCleaning: 'Moving Cleaning',
    generalCleaning: 'General Cleaning',
    windowCleaning: 'Window Cleaning',
    homeSize: 'Home Size',
    selectSize: 'Select Size',
    estimatedPrice: 'Estimated Price',
    bookNow: 'Book Now',
    callForQuote: 'Call for Quote',
    hours: 'hours',
    customQuote: 'Custom Quote',
    
    // Testimonials section
    testimonialsTitle: 'What Our Clients Say',
    
    // Features for the different cleaning services
    generalFeature1: 'Comprehensive cleaning of all surfaces',
    generalFeature2: 'Eco-friendly cleaning products',
    generalFeature3: 'Experienced cleaners with attention to detail',
    
    movingFeature1: 'Professional move-out cleaning according to checklist',
    movingFeature2: 'Approved by property inspectors',
    movingFeature3: 'Complete cleaning of all spaces',
    
    // Window types descriptions
    windowType1: 'Standard Window',
    regularNoBars: 'Regular window without bars',
    windowType2: 'Triple Window',
    tripleNoBars: 'Triple window without bars',
    windowType3: 'Triple with Bars',
    tripleWithBars: 'Triple window with bars',
    windowType4: 'Special Window',
    unusualLarge: 'Unusually large or hard to reach',
    balconyDoorLarge: 'Large Balcony Door',
    balconyDoorLargeDesc: 'Large balcony door with window',
    balconyDoor: 'Balcony Door',
    balconyDoorDesc: 'Standard balcony door',
    balconyFullGlazed: 'Fully Glazed Balcony',
    balconyFullGlazedDesc: 'Fully enclosed glass balcony',
    balconyHalfGlazed: 'Half Glazed Balcony',
    balconyHalfGlazedDesc: 'Partially enclosed glass balcony',
    
    totalPrice: 'Total Price',
    
    // Recurring service descriptions
    weekly: 'Weekly',
    weeklyDescription: 'Regular thorough cleaning every week for a consistently clean home',
    biweekly: 'Bi-Weekly',
    biweeklyDescription: 'The most popular service for households that need regular cleaning',
    monthly: 'Monthly',
    monthlyDescription: 'Deep cleaning once a month to maintain home cleanliness',
    callForCustomPlan: 'Call for custom plan',
  },
};

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [currentLanguage, setCurrentLanguage] = useState<string>('sv');

  const setLanguage = (lang: string) => {
    setCurrentLanguage(lang);
  };

  const t = (key: string): string => {
    return translations[currentLanguage]?.[key] || key;
  };

  return (
    <LanguageContext.Provider value={{ currentLanguage, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const LanguageSwitcher = () => {
  const { currentLanguage, setLanguage } = useLanguage();

  const toggleLanguage = () => {
    setLanguage(currentLanguage === 'sv' ? 'en' : 'sv');
  };

  return (
    <Button 
      variant="ghost" 
      size="icon" 
      onClick={toggleLanguage} 
      className="text-shr-blue-dark hover:bg-gray-100 rounded-full"
      aria-label="Switch language"
    >
      <Languages className="h-5 w-5" />
    </Button>
  );
};
