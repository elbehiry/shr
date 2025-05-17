
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
    title: 'SHR städ',
    rutDeduction: 'Alla priser är angivna med RUT-avdrag.',
    
    // Navigation
    home: 'Hem',
    about: 'Om oss',
    services: 'Tjänster',
    pricing: 'Priser',
    testimonials: 'Recensioner',
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

    // Services
    servicesTitle: 'Våra tjänster',
    servicesDescription: 'Vi erbjuder ett brett utbud av städtjänster för att möta alla dina behov.',
    movingCleaningTitle: 'Flyttstädning',
    movingCleaningDescription: 'Omfattande städning när du flyttar in eller ut. Våra tjänster inkluderar rengöring av alla utrymmen, inklusive svåråtkomliga områden, fönster, och apparater.',
    regularCleaningTitle: 'Regelbunden städning',
    regularCleaningDescription: 'Schema för regelbunden städning på vecko-, varannan veckas- eller månadsbasis för att hålla ditt hem eller kontor skinande rent.',
    windowCleaningTitle: 'Fönsterputs',
    windowCleaningDescription: 'Professionell fönsterrengöring för både små och stora projekt, både inne och ute.',
    deepCleaningTitle: 'Djuprengöring',
    deepCleaningDescription: 'Intensiv städning för kraftigt nedsmutsade områden eller efter renoveringar.',
    officeCleaningTitle: 'Kontorsstädning',
    officeCleaningDescription: 'Skräddarsydda städlösningar för arbetsplatser, anpassade efter ditt företags schema och behov.',
    postConstructionTitle: 'Byggstädning',
    postConstructionDescription: 'Specialiserad städning efter byggprojekt för att ta bort damm, skräp och byggmaterial.',
    learnMore: 'Läs mer',
    
    // Pricing
    pricingTitle: 'Priser',
    pricingDescription: 'Transparent prissättning för alla våra tjänster. Kontakta oss för en anpassad offert.',
    homeCleaning: 'Hemstädning',
    movingCleaning: 'Flyttstädning',
    generalCleaning: 'Vanlig Städning',
    windowCleaning: 'Fönsterputs',
    officeCleaning: 'Kontorsstädning',
    recurringService: 'Återkommande tjänst',
    selectSize: 'Välj storlek',
    homeSize: 'Bostadens storlek',
    estimatedPrice: 'Uppskattad kostnad',
    hours: 'timmar',
    totalPrice: 'Totalt pris',
    callForQuote: 'Ring för offert',
    bookNow: 'Boka nu',
    movingFeature1: 'Allt inkluderat (golv, badrum, kök)',
    movingFeature2: 'Rengöring av vitvaror inuti och utanpå',
    movingFeature3: 'Alla fönster rengörs på båda sidor',
    generalFeature1: 'Anpassat till dina behov',
    generalFeature2: 'Fullt utrustade städproffs',
    generalFeature3: 'Miljövänliga städprodukter',
    selectWindowTypes: 'Välj fönstertyper och antal',
    customQuote: 'Anpassad offert',
    officeDescription: 'Vi förstår att varje arbetsplats är unik. Kontakta oss för en skräddarsydd offert för din kontorsstädning.',
    officeFactors: 'Vår prissättning beaktar:',
    officeFactor1: 'Storlek på kontoret och antal rum',
    officeFactor2: 'Städningens frekvens och omfattning',
    officeFactor3: 'Specifika behov eller krav',
    requestQuote: 'Begär offert',
    recurringDescription: 'Regelbunden städning för ditt hem. Anpassad till dina behov och schema.',
    weekly: 'VECKOVIS',
    weeklyDescription: 'Perfekt för familjer, hushåll med husdjur eller personer med hectic lifestyles som vill hålla en konsekvent renlighet.',
    biweekly: 'VARANNAN VECKA',
    biweeklyDescription: 'Vårt mest populära alternativ. Idealisk balans mellan regelbunden rengöring och kostnadseffektivitet.',
    monthly: 'MÅNADSVIS',
    monthlyDescription: 'Grundligare rengöring en gång i månaden, perfekt för mindre bostäder eller för dem som behöver lite extra hjälp då och då.',
    callForCustomPlan: 'Ring för anpassad plan',
    windowType1: 'Standardfönster',
    regularNoBars: 'Enkelt fönster utan spröjs',
    windowType2: 'Treglasfönster',
    tripleNoBars: 'Tre rutor utan spröjs',
    windowType3: 'Fönster med spröjs',
    tripleWithBars: 'Tre rutor med spröjs',
    windowType4: 'Stort specialfönster',
    unusualLarge: 'Ovanligt stort eller svårt',
    balconyDoorLarge: 'Stor balkongdörr',
    balconyDoorLargeDesc: 'Dörr med stort glasparti',
    balconyDoor: 'Balkongdörr',
    balconyDoorDesc: 'Standard balkongdörr',
    balconyFullGlazed: 'Inglasad balkong',
    balconyFullGlazedDesc: 'Helt inglasad balkong',
    balconyHalfGlazed: 'Delvis inglasad',
    balconyHalfGlazedDesc: 'Delvis inglasad balkong',

    // Testimonials
    testimonialsTitle: 'Vad våra kunder säger',
    testimonialsDescription: 'Läs recensioner från våra nöjda kunder.',
    
    // Contact
    contactTitle: 'Kontakta oss',
    contactDescription: 'Har du frågor eller vill boka en tjänst? Kontakta oss idag!',
    nameLabel: 'Namn',
    emailLabel: 'E-post',
    phoneLabel: 'Telefon',
    messageLabel: 'Meddelande',
    sendMessage: 'Skicka meddelande',
    addressTitle: 'Besök oss',
    phoneTitle: 'Ring oss',
    emailTitle: 'Mejla oss',
    hoursTitle: 'Öppettider',
    businessHours: 'Mån-Fre: 08:00 - 18:00',
    weekendHours: 'Lör-Sön: 10:00 - 16:00',
    
    // Footer
    allRightsReserved: 'Alla rättigheter förbehållna',
    privacyPolicy: 'Integritetspolicy',
    termsOfService: 'Användarvillkor',
  },
  en: {
    // General
    title: 'SHR städ',
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

    // Services
    servicesTitle: 'Our Services',
    servicesDescription: 'We offer a wide range of cleaning services to meet all your needs.',
    movingCleaningTitle: 'Move-in/out Cleaning',
    movingCleaningDescription: 'Comprehensive cleaning when moving in or out. Our services include cleaning all spaces, including hard-to-reach areas, windows, and appliances.',
    regularCleaningTitle: 'Regular Cleaning',
    regularCleaningDescription: 'Scheduled regular cleaning on a weekly, bi-weekly, or monthly basis to keep your home or office spotlessly clean.',
    windowCleaningTitle: 'Window Cleaning',
    windowCleaningDescription: 'Professional window cleaning for both small and large projects, inside and out.',
    deepCleaningTitle: 'Deep Cleaning',
    deepCleaningDescription: 'Intensive cleaning for heavily soiled areas or after renovations.',
    officeCleaningTitle: 'Office Cleaning',
    officeCleaningDescription: 'Tailored cleaning solutions for workplaces, adapted to your company\'s schedule and needs.',
    postConstructionTitle: 'Post-Construction Cleaning',
    postConstructionDescription: 'Specialized cleaning after building projects to remove dust, debris, and construction materials.',
    learnMore: 'Learn More',
    
    // Pricing
    pricingTitle: 'Pricing',
    pricingDescription: 'Transparent pricing for all our services. Contact us for a custom quote.',
    homeCleaning: 'Home Cleaning',
    movingCleaning: 'Moving Cleaning',
    generalCleaning: 'General Cleaning',
    windowCleaning: 'Window Cleaning',
    officeCleaning: 'Office Cleaning',
    recurringService: 'Recurring Service',
    selectSize: 'Select Size',
    homeSize: 'Home Size',
    estimatedPrice: 'Estimated Cost',
    hours: 'hours',
    totalPrice: 'Total Price',
    callForQuote: 'Call for Quote',
    bookNow: 'Book Now',
    movingFeature1: 'All inclusive (floors, bathroom, kitchen)',
    movingFeature2: 'Cleaning appliances inside and out',
    movingFeature3: 'All windows cleaned on both sides',
    generalFeature1: 'Tailored to your needs',
    generalFeature2: 'Fully equipped cleaning professionals',
    generalFeature3: 'Eco-friendly cleaning products',
    selectWindowTypes: 'Select window types and quantities',
    customQuote: 'Custom Quote',
    officeDescription: 'We understand that every workplace is unique. Contact us for a tailored quote for your office cleaning.',
    officeFactors: 'Our pricing considers:',
    officeFactor1: 'Office size and number of rooms',
    officeFactor2: 'Frequency and scope of cleaning',
    officeFactor3: 'Specific needs or requirements',
    requestQuote: 'Request Quote',
    recurringDescription: 'Regular cleaning for your home. Adapted to your needs and schedule.',
    weekly: 'WEEKLY',
    weeklyDescription: 'Perfect for families, households with pets, or individuals with hectic lifestyles who want to maintain consistent cleanliness.',
    biweekly: 'BI-WEEKLY',
    biweeklyDescription: 'Our most popular option. Ideal balance between regular cleaning and cost-effectiveness.',
    monthly: 'MONTHLY',
    monthlyDescription: 'More thorough cleaning once a month, perfect for smaller residences or those who need a little extra help now and then.',
    callForCustomPlan: 'Call for Custom Plan',
    windowType1: 'Standard Window',
    regularNoBars: 'Single window without grilles',
    windowType2: 'Triple Window',
    tripleNoBars: 'Three panes without grilles',
    windowType3: 'Window with Grilles',
    tripleWithBars: 'Three panes with grilles',
    windowType4: 'Large Special Window',
    unusualLarge: 'Unusually large or difficult',
    balconyDoorLarge: 'Large Balcony Door',
    balconyDoorLargeDesc: 'Door with large glass section',
    balconyDoor: 'Balcony Door',
    balconyDoorDesc: 'Standard balcony door',
    balconyFullGlazed: 'Fully Glazed Balcony',
    balconyFullGlazedDesc: 'Fully enclosed glass balcony',
    balconyHalfGlazed: 'Partially Glazed',
    balconyHalfGlazedDesc: 'Partially enclosed balcony',
    
    // Testimonials
    testimonialsTitle: 'What Our Customers Say',
    testimonialsDescription: 'Read reviews from our satisfied customers.',
    
    // Contact
    contactTitle: 'Contact Us',
    contactDescription: 'Have questions or want to book a service? Reach out to us today!',
    nameLabel: 'Name',
    emailLabel: 'Email',
    phoneLabel: 'Phone',
    messageLabel: 'Message',
    sendMessage: 'Send Message',
    addressTitle: 'Visit Us',
    phoneTitle: 'Call Us',
    emailTitle: 'Email Us',
    hoursTitle: 'Business Hours',
    businessHours: 'Mon-Fri: 08:00 - 18:00',
    weekendHours: 'Sat-Sun: 10:00 - 16:00',
    
    // Footer
    allRightsReserved: 'All Rights Reserved',
    privacyPolicy: 'Privacy Policy',
    termsOfService: 'Terms of Service',
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
