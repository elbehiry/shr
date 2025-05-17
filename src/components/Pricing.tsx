import React, { useState } from 'react';
import { useLanguage } from './LanguageSwitcher';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Phone, Check, Plus, Minus, ChevronDown, ChevronUp } from 'lucide-react';
import { Label } from './ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

interface WindowType {
  id: string;
  name: string;
  description: string;
  price: number;
  icon: React.ReactNode;
}
interface SqmOption {
  value: string;
  label: string;
  hours: number;
  price: number;
}
const Pricing = () => {
  const {
    t
  } = useLanguage();
  const [activeTab, setActiveTab] = useState('moving');
  const [isChecklistOpen, setIsChecklistOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string | null>(null);
  
  // Define included categories for the cleaning checklist (moved from Services.tsx)
  const includedCategories = [
    {
      id: 'all-rooms',
      title: t('allRooms'),
      items: [
        t('vacuumFloors'),
        t('mopFloors'),
        t('dampDrySkirtingBoards'),
        t('dampDryDoorFrames'),
        t('dustShelvesJoinery'),
      ]
    },
    {
      id: 'other-surfaces',
      title: t('allOtherSurfaces'),
      items: [
        t('dustFreeSurfaces'),
        t('dustCoveredSurfaces'),
        t('dustOffElectronics'),
        t('dustOffLamps'),
        t('polishMirrors'),
      ]
    },
    {
      id: 'bathroom',
      title: t('bathroom'),
      items: [
        t('cleaningSinks'),
        t('cleaningAirVentsNotInside'),
        t('vacuumSweepingFloors'),
      ]
    },
    {
      id: 'window',
      title: t('windowCleaning'),
      items: [
        t('windowCleaningBookedSeparately'),
      ]
    },
    {
      id: 'balcony',
      title: t('balcony'),
      items: [
        t('cleaningCabinetsGarbage'),
      ]
    },
    {
      id: 'additional',
      title: t('additionalServices'),
      items: [
        t('ovenCleaningInOut'),
        t('refrigeratorExternallyCleaned'),
        t('cleaningStovetops'),
        t('dishwasherCleanedInOut'),
      ]
    }
  ];
  
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
  const getSelectedSqmOption = () => {
    return sqmOptions.find(option => option.value === selectedSqm) || sqmOptions[0];
  };
  const calculateMovingPrice = () => {
    const option = getSelectedSqmOption();
    if (option.value === "140+") {
      return t('callForQuote');
    }
    return `${option.hours} ${t('hours')} - ${option.price} kr`;
  };
  const calculateWindowTotal = () => {
    return Object.entries(windowCounts).reduce((total, [id, count]) => {
      const windowType = windowTypes.find(w => w.id === id);
      return total + (windowType?.price || 0) * count;
    }, 0);
  };

  // Define cleaning areas for the checklist
  const cleaningAreas = [
    {
      id: 'kitchen',
      title: t('kitchen'),
      items: [
        t('vacuumFloors'),
        t('mopFloors'),
        t('dampDrySkirtingBoards'),
        t('dampDryDoorFrames'),
        t('dustShelvesJoinery'),
        t('dustFreeSurfaces'),
        t('dustCoveredSurfaces'),
        t('dustOffLamps'),
        t('polishMirrors'),
        t('dustFurniture')
      ]
    },
    {
      id: 'livingRoom',
      title: t('livingRoom'),
      items: [
        t('vacuumFloors'),
        t('mopFloors'),
        t('dampDrySkirtingBoards'),
        t('dampDryDoorFrames'),
        t('dustShelvesJoinery'),
        t('dustFreeSurfaces'),
        t('dustCoveredSurfaces'),
        t('dustOffElectronics'),
        t('dustOffLamps'),
        t('polishMirrors'),
        t('dustFurniture'),
        t('dustDesk'),
        t('dustPaintings')
      ]
    },
    {
      id: 'bedroom',
      title: t('bedroom'),
      items: [
        t('vacuumFloors'),
        t('mopFloors'),
        t('dampDrySkirtingBoards'),
        t('dampDryDoorFrames'),
        t('dustShelvesJoinery'),
        t('dustFreeSurfaces'),
        t('dustCoveredSurfaces'),
        t('dustOffElectronics'),
        t('dustOffLamps'),
        t('dustPaintings'),
        t('polishMirrors'),
        t('dustFurniture'),
        t('dustDesk'),
        t('wipeBedside')
      ]
    },
    {
      id: 'bathroom',
      title: t('bathroom'),
      items: [
        t('vacuumFloors'),
        t('mopFloors'),
        t('dampDrySkirtingBoards'),
        t('dampDryDoorFrames'),
        t('dustShelvesJoinery'),
        t('dustFreeSurfaces'),
        t('dustCoveredSurfaces'),
        t('dustOffLamps'),
        t('polishMirrors'),
        t('dustFurniture')
      ]
    },
    {
      id: 'hall',
      title: t('hall'),
      items: [
        t('vacuumFloors'),
        t('mopFloors'),
        t('dampDrySkirtingBoards'),
        t('dampDryDoorFrames'),
        t('dustShelvesJoinery'),
        t('dustFreeSurfaces'),
        t('dustCoveredSurfaces'),
        t('dustOffLamps'),
        t('polishMirrors'),
        t('dustFurniture')
      ]
    },
    {
      id: 'extraRoom',
      title: t('extraRoom'),
      items: [
        t('vacuumFloors'),
        t('mopFloors'),
        t('dampDrySkirtingBoards'),
        t('dampDryDoorFrames'),
        t('dustShelvesJoinery'),
        t('dustFreeSurfaces'),
        t('dustCoveredSurfaces'),
        t('dustOffElectronics'),
        t('dustOffLamps'),
        t('polishMirrors'),
        t('dustFurniture'),
        t('dustDesk'),
        t('wipeBedside'),
        t('dustPaintings')
      ]
    }
  ];
  
  return <section id="pricing" className="section-padding">
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
          <Button variant={activeTab === 'home' ? 'default' : 'outline'} onClick={() => setActiveTab('home')} className={activeTab === 'home' ? 'bg-shr-blue-dark hover:bg-shr-blue-dark/90' : ''}>
            {t('homeCleaning')}
          </Button>
          <Button variant={activeTab === 'moving' ? 'default' : 'outline'} onClick={() => setActiveTab('moving')} className={activeTab === 'moving' ? 'bg-shr-blue-dark hover:bg-shr-blue-dark/90' : ''}>
            {t('movingCleaning')}
          </Button>
          <Button variant={activeTab === 'general' ? 'default' : 'outline'} onClick={() => setActiveTab('general')} className={activeTab === 'general' ? 'bg-shr-blue-dark hover:bg-shr-blue-dark/90' : ''}>
            {t('generalCleaning')}
          </Button>
          <Button variant={activeTab === 'window' ? 'default' : 'outline'} onClick={() => setActiveTab('window')} className={activeTab === 'window' ? 'bg-shr-blue-dark hover:bg-shr-blue-dark/90' : ''}>
            {t('windowCleaning')}
          </Button>
          <Button variant={activeTab === 'office' ? 'default' : 'outline'} onClick={() => setActiveTab('office')} className={activeTab === 'office' ? 'bg-shr-blue-dark hover:bg-shr-blue-dark/90' : ''}>
            {t('officeCleaning')}
          </Button>
          <Button variant={activeTab === 'recurring' ? 'default' : 'outline'} onClick={() => setActiveTab('recurring')} className={activeTab === 'recurring' ? 'bg-shr-blue-dark hover:bg-shr-blue-dark/90' : ''}>
            {t('recurringService')}
          </Button>
        </div>

        {/* Home Cleaning */}
        {activeTab === 'home' && <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
            <h3 className="text-2xl font-semibold mb-6 text-center">{t('homeCleaning')}</h3>
            <div className="max-w-md mx-auto">
              <div className="mb-6">
                <Label htmlFor="sqm-home">{t('homeSize')}</Label>
                <Select value={selectedSqm} onValueChange={setSelectedSqm}>
                  <SelectTrigger className="w-full mt-1">
                    <SelectValue placeholder={t('selectSize')} />
                  </SelectTrigger>
                  <SelectContent>
                    {sqmOptions.map(option => <SelectItem key={option.value} value={option.value}>
                        {option.label}
                      </SelectItem>)}
                  </SelectContent>
                </Select>
              </div>

              <div className="bg-shr-gray p-6 rounded-lg">
                <h4 className="font-semibold mb-2">{t('estimatedPrice')}</h4>
                <p className="text-lg">{calculateMovingPrice()}</p>
              </div>

              <div className="mt-6 space-y-3">
                <p className="flex items-start">
                  <Check className="h-5 w-5 text-shr-blue-dark mr-2 shrink-0 mt-0.5" />
                  <span>{t('generalFeature1')}</span>
                </p>
                <p className="flex items-start">
                  <Check className="h-5 w-5 text-shr-blue-dark mr-2 shrink-0 mt-0.5" />
                  <span>{t('generalFeature2')}</span>
                </p>
                <p className="flex items-start">
                  <Check className="h-5 w-5 text-shr-blue-dark mr-2 shrink-0 mt-0.5" />
                  <span>{t('generalFeature3')}</span>
                </p>
              </div>

              <Button className="w-full mt-6 bg-shr-blue-dark hover:bg-shr-blue-dark/90 flex items-center justify-center gap-2" onClick={() => window.location.href = 'tel:+46704019341'}>
                <Phone size={20} />
                {selectedSqm === "140+" ? t('callForQuote') : t('bookNow')}
              </Button>

              {/* Home Cleaning Checklist - TRANSFORMED TO ACCORDION */}
              <div className="mt-8">
                <div className="w-full">
                  <h3 className="text-xl font-semibold mb-4 bg-shr-blue-dark text-white rounded-lg p-4">
                    {t('cleaningIncludedIn')} {t('homeCleaning')}
                  </h3>
                  
                  <div className="mt-4">
                    <p className="text-gray-700 mb-6">{t('cleaningChecklistDescription')}</p>
                    
                    <Accordion type="single" collapsible className="w-full">
                      {cleaningAreas.map((area) => (
                        <AccordionItem key={area.id} value={area.id} className="border-b border-gray-200">
                          <AccordionTrigger className="py-4 px-5 bg-gray-50 hover:bg-gray-100 rounded-t-lg text-lg font-medium text-shr-blue-dark">
                            {area.title}
                          </AccordionTrigger>
                          <AccordionContent className="bg-gray-50 rounded-b-lg p-5 pt-2">
                            <ul className="space-y-2 mt-2">
                              {area.items.map((item, index) => (
                                <li key={index} className="flex items-start">
                                  <Check size={18} className="text-green-500 mr-2 mt-1" /> 
                                  <span>{item}</span>
                                </li>
                              ))}
                            </ul>
                          </AccordionContent>
                        </AccordionItem>
                      ))}
                    </Accordion>
                  </div>
                </div>
              </div>
            </div>
          </div>}

        {/* Moving Cleaning */}
        {activeTab === 'moving' && <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
            <h3 className="text-2xl font-semibold mb-6 text-center">{t('movingCleaning')}</h3>
            <div className="max-w-md mx-auto">
              <div className="mb-6">
                <Label htmlFor="sqm">{t('homeSize')}</Label>
                <Select value={selectedSqm} onValueChange={setSelectedSqm}>
                  <SelectTrigger className="w-full mt-1">
                    <SelectValue placeholder={t('selectSize')} />
                  </SelectTrigger>
                  <SelectContent>
                    {sqmOptions.map(option => <SelectItem key={option.value} value={option.value}>
                        {option.label}
                      </SelectItem>)}
                  </SelectContent>
                </Select>
              </div>

              <div className="bg-shr-gray p-6 rounded-lg">
                <h4 className="font-semibold mb-2">{t('estimatedPrice')}</h4>
                <p className="text-lg">{calculateMovingPrice()}</p>
              </div>

              <div className="mt-6 space-y-3">
                <p className="flex items-start">
                  <Check className="h-5 w-5 text-shr-blue-dark mr-2 shrink-0 mt-0.5" />
                  <span>{t('movingFeature1')}</span>
                </p>
                <p className="flex items-start">
                  <Check className="h-5 w-5 text-shr-blue-dark mr-2 shrink-0 mt-0.5" />
                  <span>{t('movingFeature2')}</span>
                </p>
                <p className="flex items-start">
                  <Check className="h-5 w-5 text-shr-blue-dark mr-2 shrink-0 mt-0.5" />
                  <span>{t('movingFeature3')}</span>
                </p>
              </div>

              <Button className="w-full mt-6 bg-shr-blue-dark hover:bg-shr-blue-dark/90 flex items-center justify-center gap-2 mb-8" onClick={() => window.location.href = 'tel:+46704019341'}>
                <Phone size={20} />
                {selectedSqm === "140+" ? t('callForQuote') : t('bookNow')}
              </Button>
              
              {/* What's included in main cleaning section - Reorganized into 2 rows with 3 options each */}
              <div className="mb-8">
                <div className="text-center mb-6">
                  <h3 className="text-xl md:text-2xl font-bold text-shr-blue-dark">{t('includedMainCleaning')}</h3>
                  <p className="text-gray-600 mt-2 max-w-md mx-auto">
                    {t('cleaningChecklistDescription')}
                  </p>
                </div>
                
                {/* First row - 3 categories */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-3">
                  {includedCategories.slice(0, 3).map((category) => (
                    <div 
                      key={category.id}
                      className="border border-gray-200 rounded-lg overflow-hidden"
                    >
                      <Accordion type="single" collapsible className="w-full">
                        <AccordionItem value={category.id} className="border-0">
                          <AccordionTrigger className="py-3 px-3 bg-white hover:bg-gray-50 text-left font-semibold text-gray-800 transition-colors">
                            {category.title}
                          </AccordionTrigger>
                          <AccordionContent className="bg-gray-50 p-3">
                            <ul className="space-y-2">
                              {category.items.map((item, index) => (
                                <li key={index} className="flex items-start">
                                  <Check size={16} className="text-green-500 mr-2 mt-0.5" />
                                  <span className="text-sm">{item}</span>
                                </li>
                              ))}
                            </ul>
                          </AccordionContent>
                        </AccordionItem>
                      </Accordion>
                    </div>
                  ))}
                </div>
                
                {/* Second row - 3 categories */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                  {includedCategories.slice(3, 6).map((category) => (
                    <div 
                      key={category.id}
                      className="border border-gray-200 rounded-lg overflow-hidden"
                    >
                      <Accordion type="single" collapsible className="w-full">
                        <AccordionItem value={category.id} className="border-0">
                          <AccordionTrigger className="py-3 px-3 bg-white hover:bg-gray-50 text-left font-semibold text-gray-800 transition-colors">
                            {category.title}
                          </AccordionTrigger>
                          <AccordionContent className="bg-gray-50 p-3">
                            <ul className="space-y-2">
                              {category.items.map((item, index) => (
                                <li key={index} className="flex items-start">
                                  <Check size={16} className="text-green-500 mr-2 mt-0.5" />
                                  <span className="text-sm">{item}</span>
                                </li>
                              ))}
                            </ul>
                          </AccordionContent>
                        </AccordionItem>
                      </Accordion>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Moving Cleaning Checklist - Removed the collapsible button */}
              <div className="mt-4">
                <h3 className="text-xl font-semibold mb-6">{t('cleaningIncludedIn')} {t('movingCleaning')}</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {/* Kitchen */}
                  <div className="bg-gray-50 rounded-lg p-5">
                    <h4 className="text-lg font-semibold mb-4 text-shr-blue-dark">{t('kitchen')}</h4>
                    <ul className="space-y-2">
                      <li className="flex items-start"><Check size={18} className="text-green-500 mr-2" /> {t('vacuumFloors')}</li>
                      <li className="flex items-start"><Check size={18} className="text-green-500 mr-2" /> {t('mopFloors')}</li>
                      <li className="flex items-start"><Check size={18} className="text-green-500 mr-2" /> {t('dampDrySkirtingBoards')}</li>
                      <li className="flex items-start"><Check size={18} className="text-green-500 mr-2" /> {t('dampDryDoorFrames')}</li>
                      <li className="flex items-start"><Check size={18} className="text-green-500 mr-2" /> {t('dustShelvesJoinery')}</li>
                      <li className="flex items-start"><Check size={18} className="text-green-500 mr-2" /> {t('dustFreeSurfaces')}</li>
                      <li className="flex items-start"><Check size={18} className="text-green-500 mr-2" /> {t('dustCoveredSurfaces')}</li>
                      <li className="flex items-start"><Check size={18} className="text-green-500 mr-2" /> {t('dustOffLamps')}</li>
                      <li className="flex items-start"><Check size={18} className="text-green-500 mr-2" /> {t('polishMirrors')}</li>
                      <li className="flex items-start"><Check size={18} className="text-green-500 mr-2" /> {t('dustFurniture')}</li>
                    </ul>
                  </div>
                  
                  {/* Bathroom */}
                  <div className="bg-gray-50 rounded-lg p-5">
                    <h4 className="text-lg font-semibold mb-4 text-shr-blue-dark">{t('bathroom')}</h4>
                    <ul className="space-y-2">
                      <li className="flex items-start"><Check size={18} className="text-green-500 mr-2" /> {t('vacuumFloors')}</li>
                      <li className="flex items-start"><Check size={18} className="text-green-500 mr-2" /> {t('mopFloors')}</li>
                      <li className="flex items-start"><Check size={18} className="text-green-500 mr-2" /> {t('dampDrySkirtingBoards')}</li>
                      <li className="flex items-start"><Check size={18} className="text-green-500 mr-2" /> {t('dampDryDoorFrames')}</li>
                      <li className="flex items-start"><Check size={18} className="text-green-500 mr-2" /> {t('dustShelvesJoinery')}</li>
                      <li className="flex items-start"><Check size={18} className="text-green-500 mr-2" /> {t('dustFreeSurfaces')}</li>
                      <li className="flex items-start"><Check size={18} className="text-green-500 mr-2" /> {t('dustCoveredSurfaces')}</li>
                      <li className="flex items-start"><Check size={18} className="text-green-500 mr-2" /> {t('dustOffLamps')}</li>
                      <li className="flex items-start"><Check size={18} className="text-green-500 mr-2" /> {t('polishMirrors')}</li>
                      <li className="flex items-start"><Check size={18} className="text-green-500 mr-2" /> {t('dustFurniture')}</li>
                    </ul>
                  </div>
                  
                  {/* Room */}
                  <div className="bg-gray-50 rounded-lg p-5">
                    <h4 className="text-lg font-semibold mb-4 text-shr-blue-dark">{t('room')}</h4>
                    <ul className="space-y-2">
                      <li className="flex items-start"><Check size={18} className="text-green-500 mr-2" /> {t('wallsDusted')}</li>
                      <li className="flex items-start"><Check size={18} className="text-green-500 mr-2" /> {t('moldingsWiped')}</li>
                      <li className="flex items-start"><Check size={18} className="text-green-500 mr-2" /> {t('elementsCleaned')}</li>
                      <li className="flex items-start"><Check size={18} className="text-green-500 mr-2" /> {t('doorsCleaned')}</li>
                      <li className="flex items-start"><Check size={18} className="text-green-500 mr-2" /> {t('windowsAllSides')}</li>
                      <li className="flex items-start"><Check size={18} className="text-green-500 mr-2" /> {t('wardrobesWiped')}</li>
                      <li className="flex items-start"><Check size={18} className="text-green-500 mr-2" /> {t('blindsCleaned')}</li>
                      <li className="flex items-start"><Check size={18} className="text-green-500 mr-2" /> {t('floorsVacuumedWiped')}</li>
                      <li className="flex items-start"><Check size={18} className="text-green-500 mr-2" /> {t('allWindowsCleaned')}</li>
                    </ul>
                  </div>
                  
                  {/* Laundry */}
                  <div className="bg-gray-50 rounded-lg p-5">
                    <h4 className="text-lg font-semibold mb-4 text-shr-blue-dark">{t('laundry')}</h4>
                    <ul className="space-y-2">
                      <li className="flex items-start"><Check size={18} className="text-green-500 mr-2" /> {t('washingMachineCleaned')}</li>
                      <li className="flex items-start"><Check size={18} className="text-green-500 mr-2" /> {t('tumbleDryersCleaned')}</li>
                      <li className="flex items-start"><Check size={18} className="text-green-500 mr-2" /> {t('dryingCabinetsCleaned')}</li>
                      <li className="flex items-start"><Check size={18} className="text-green-500 mr-2" /> {t('wallsCeilingsDusted')}</li>
                      <li className="flex items-start"><Check size={18} className="text-green-500 mr-2" /> {t('floorsVacuumedWiped')}</li>
                      <li className="flex items-start"><Check size={18} className="text-green-500 mr-2" /> {t('floorDrainsCleaned')}</li>
                      <li className="flex items-start"><Check size={18} className="text-green-500 mr-2" /> {t('allWindowsCleaned')}</li>
                    </ul>
                    <p className="mt-4 text-sm text-gray-600">{t('sellerResponsibility')}</p>
                  </div>
                  
                  {/* Guarantee */}
                  <div className="bg-gray-50 rounded-lg p-5">
                    <h4 className="text-lg font-semibold mb-4 text-shr-blue-dark">{t('guarantee')}</h4>
                    <p>{t('guaranteeText')}</p>
                  </div>
                  
                  {/* Other */}
                  <div className="bg-gray-50 rounded-lg p-5">
                    <h4 className="text-lg font-semibold mb-4 text-shr-blue-dark">{t('other')}</h4>
                    <ul className="space-y-2">
                      <li className="flex items-start"><Check size={18} className="text-green-500 mr-2" /> {t('basementsSwept')}</li>
                      <li className="flex items-start"><Check size={18} className="text-green-500 mr-2" /> {t('furnishedBasementCleaned')}</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>}

        {/* General Cleaning */}
        {activeTab === 'general' && <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
            <h3 className="text-2xl font-semibold mb-6 text-center">{t('generalCleaning')}</h3>
            <div className="max-w-md mx-auto">
              <div className="mb-6">
                <Label htmlFor="sqm-general">{t('homeSize')}</Label>
                <Select value={selectedSqm} onValueChange={setSelectedSqm}>
                  <SelectTrigger className="w-full mt-1">
                    <SelectValue placeholder={t('selectSize')} />
                  </SelectTrigger>
                  <SelectContent>
                    {sqmOptions.map(option => <SelectItem key={option.value} value={option.value}>
                        {option.label}
                      </SelectItem>)}
                  </SelectContent>
                </Select>
              </div>

              <div className="bg-shr-gray p-6 rounded-lg">
                <h4 className="font-semibold mb-2">{t('estimatedPrice')}</h4>
                <p className="text-lg">{calculateMovingPrice()}</p>
              </div>

              <div className="mt-6 space-y-3">
                <p className="flex items-start">
                  <Check className="h-5 w-5 text-shr-blue-dark mr-2 shrink-0 mt-0.5" />
                  <span>{t('generalFeature1')}</span>
                </p>
                <p className="flex items-start">
                  <Check className="h-5 w-5 text-shr-blue-dark mr-2 shrink-0 mt-0.5" />
                  <span>{t('generalFeature2')}</span>
                </p>
                <p className="flex items-start">
                  <Check className="h-5 w-5 text-shr-blue-dark mr-2 shrink-0 mt-0.5" />
                  <span>{t('generalFeature3')}</span>
                </p>
              </div>

              <Button className="w-full mt-6 bg-shr-blue-dark hover:bg-shr-blue-dark/90 flex items-center justify-center gap-2" onClick={() => window.location.href = 'tel:+46704019341'}>
                <Phone size={20} />
                {selectedSqm === "140+" ? t('callForQuote') : t('bookNow')}
              </Button>
              
              {/* General Cleaning Checklist */}
              <div className="mt-8">
                <Collapsible open={isChecklistOpen} onOpenChange={setIsChecklistOpen} className="w-full">
                  <CollapsibleTrigger className="w-full bg-shr-blue-dark text-white rounded-lg p-4 flex justify-between items-center font-normal text-base">
                    <h3 className="text-xl font-semibold">{t('cleaningIncludedIn')} {t('generalCleaning')}</h3>
                    {isChecklistOpen ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
                  </CollapsibleTrigger>
                  
                  <CollapsibleContent className="mt-6 bg-white rounded-lg p-6 shadow-lg">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      {/* All Rooms */}
                      <div className="bg-gray-50 rounded-lg p-5">
                        <h4 className="text-lg font-semibold mb-4 text-shr-blue-dark">{t('allRooms')}</h4>
                        <ul className="space-y-2">
                          <li className="flex items-start"><Check size={18} className="text-green-500 mr-2" /> {t('vacuumingMoppingFloors')}</li>
                          <li className="flex items-start"><Check size={18} className="text-green-500 mr-2" /> {t('cleaningBaseboardsDoorlinings')}</li>
                          <li className="flex items-start"><Check size={18} className="text-green-500 mr-2" /> {t('cleaningFramesWindowsills')}</li>
                          <li className="flex items-start"><Check size={18} className="text-green-500 mr-2" /> {t('cleaningWardrobesExterior')}</li>
                          <li className="flex items-start"><Check size={18} className="text-green-500 mr-2" /> {t('cleaningElements')}</li>
                          <li className="flex items-start"><Check size={18} className="text-green-500 mr-2" /> {t('stainRemovalWalls')}</li>
                          <li className="flex items-start"><Check size={18} className="text-green-500 mr-2" /> {t('dustingShelvesPaintings')}</li>
                          <li className="flex items-start"><Check size={18} className="text-green-500 mr-2" /> {t('emptyingTrashcans')}</li>
                          <li className="flex items-start"><Check size={18} className="text-green-500 mr-2" /> {t('cleaningAirVents')}</li>
                          <li className="flex items-start"><Check size={18} className="text-green-500 mr-2" /> {t('shakingCarpets')}</li>
                          <li className="flex items-start"><Check size={18} className="text-green-500 mr-2" /> {t('vacuumingSofa')}</li>
                        </ul>
                      </div>
                      
                      {/* All Other Surfaces */}
                      <div className="bg-gray-50 rounded-lg p-5">
                        <h4 className="text-lg font-semibold mb-4 text-shr-blue-dark">{t('allOtherSurfaces')}</h4>
                        <ul className="space-y-2">
                          <li className="flex items-start"><Check size={18} className="text-green-500 mr-2" /> {t('refrigeratorExternallyCleaned')}</li>
                          <li className="flex items-start"><Check size={18} className="text-green-500 mr-2" /> {t('ovenCleaningInOut')}</li>
                          <li className="flex items-start"><Check size={18} className="text-green-500 mr-2" /> {t('cleaningStovetops')}</li>
                          <li className="flex items-start"><Check size={18} className="text-green-500 mr-2" /> {t('dishwasherCleanedInOut')}</li>
                          <li className="flex items-start"><Check size={18} className="text-green-500 mr-2" /> {t('cleaningSinks')}</li>
                          <li className="flex items-start"><Check size={18} className="text-green-500 mr-2" /> {t('cabinetDoorsCleaned')}</li>
                          <li className="flex items-start"><Check size={18} className="text-green-500 mr-2" /> {t('cleaningCabinetsGarbage')}</li>
                          <li className="flex items-start"><Check size={18} className="text-green-500 mr-2" /> {t('cleaningKitchenHood')}</li>
                          <li className="flex items-start"><Check size={18} className="text-green-500 mr-2" /> {t('cleaningAirVentsNotInside')}</li>
                        </ul>
                      </div>
                      
                      {/* Bathroom */}
                      <div className="bg-gray-50 rounded-lg p-5">
                        <h4 className="text-lg font-semibold mb-4 text-shr-blue-dark">{t('bathroom')}</h4>
                        <ul className="space-y-2">
                          <li className="flex items-start"><Check size={18} className="text-green-500 mr-2" /> {t('vacuumFloors')}</li>
                          <li className="flex items-start"><Check size={18} className="text-green-500 mr-2" /> {t('mopFloors')}</li>
                          <li className="flex items-start"><Check size={18} className="text-green-500 mr-2" /> {t('dampDrySkirtingBoards')}</li>
                          <li className="flex items-start"><Check size={18} className="text-green-500 mr-2" /> {t('dampDryDoorFrames')}</li>
                          <li className="flex items-start"><Check size={18} className="text-green-500 mr-2" /> {t('dustShelvesJoinery')}</li>
                          <li className="flex items-start"><Check size={18} className="text-green-500 mr-2" /> {t('dustFreeSurfaces')}</li>
                          <li className="flex items-start"><Check size={18} className="text-green-500 mr-2" /> {t('dustCoveredSurfaces')}</li>
                          <li className="flex items-start"><Check size={18} className="text-green-500 mr-2" /> {t('dustOffLamps')}</li>
                          <li className="flex items-start"><Check size={18} className="text-green-500 mr-2" /> {t('polishMirrors')}</li>
                          <li className="flex items-start"><Check size={18} className="text-green-500 mr-2" /> {t('dustFurniture')}</li>
                        </ul>
                      </div>
                      
                      {/* Balcony */}
                      <div className="bg-gray-50 rounded-lg p-5">
                        <h4 className="text-lg font-semibold mb-4 text-shr-blue-dark">{t('balcony')}</h4>
                        <ul className="space-y-2">
                          <li className="flex items-start"><Check size={18} className="text-green-500 mr-2" /> {t('vacuumSweepingFloors')}</li>
                        </ul>
                      </div>
                      
                      {/* Window Cleaning */}
                      <div className="bg-gray-50 rounded-lg p-5">
                        <h4 className="text-lg font-semibold mb-4 text-shr-blue-dark">{t('windowCleaning')}</h4>
                        <ul className="space-y-2">
                          <li className="flex items-start"><Check size={18} className="text-green-500 mr-2" /> {t('windowCleaningBookedSeparately')}</li>
                        </ul>
                      </div>
                      
                      {/* Desire */}
                      <div className="bg-gray-50 rounded-lg p-5">
                        <h4 className="text-lg font-semibold mb-4 text-shr-blue-dark">{t('desire')}</h4>
                        <p>{t('desireText')}</p>
                      </div>
                    </div>
                  </CollapsibleContent>
                </Collapsible>
              </div>
            </div>
          </div>}

        {/* Window Cleaning */}
        {activeTab === 'window' && <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
            <h3 className="text-2xl font-semibold mb-6 text-center">{t('windowCleaning')}</h3>
            <p className="text-center mb-8">{t('selectWindowTypes')}</p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
              {windowTypes.map(window => <Card key={window.id} className="overflow-hidden">
                  <CardHeader className="pb-2">
                    <div className="text-shr-blue-dark">{window.icon}</div>
                    <CardTitle className="text-lg">{window.name}</CardTitle>
                    <CardDescription>{window.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="font-semibold mb-2">{window.price} kr</p>
                    <div className="flex items-center justify-between">
                      <Button variant="outline" size="icon" onClick={() => handleCountChange(window.id, -1)} disabled={!windowCounts[window.id]}>
                        <Minus className="h-4 w-4" />
                      </Button>
                      <span className="mx-2 text-lg font-medium w-8 text-center">
                        {windowCounts[window.id] || 0}
                      </span>
                      <Button variant="outline" size="icon" onClick={() => handleCountChange(window.id, 1)}>
                        <Plus className="h-4 w-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>)}
            </div>

            <div className="max-w-md mx-auto">
              <div className="bg-shr-gray p-6 rounded-lg mb-6">
                <h4 className="font-semibold mb-2">{t('totalPrice')}</h4>
                <p className="text-2xl font-bold">{calculateWindowTotal()} kr</p>
              </div>

              <Button className="w-full bg-shr-blue-dark hover:bg-shr-blue-dark/90 flex items-center justify-center gap-2" onClick={() => window.location.href = 'tel:+46704019341'}>
                <Phone size={20} />
                {t('bookNow')}
              </Button>
            </div>
          </div>}

        {/* Office Cleaning */}
        {activeTab === 'office' && <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
            <h3 className="text-2xl font-semibold mb-6 text-center">{t('officeCleaning')}</h3>
            <p className="text-center max-w-2xl mx-auto mb-8">
              {t('officeDescription')}
            </p>
            
            <div className="max-w-md mx-auto">
              <div className="bg-shr-gray p-6 rounded-lg mb-6">
                <h4 className="font-semibold mb-4">{t('customQuote')}</h4>
                <p className="mb-2">{t('officeFactors')}</p>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-shr-blue-dark mr-2 shrink-0 mt-0.5" />
                    <span>{t('officeFactor1')}</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-shr-blue-dark mr-2 shrink-0 mt-0.5" />
                    <span>{t('officeFactor2')}</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-shr-blue-dark mr-2 shrink-0 mt-0.5" />
                    <span>{t('officeFactor3')}</span>
                  </li>
                </ul>
              </div>

              <Button className="w-full bg-shr-blue-dark hover:bg-shr-blue-dark/90 flex items-center justify-center gap-2" onClick={() => window.location.href = 'tel:+46704019341'}>
                <Phone size={20} />
                {t('requestQuote')}
              </Button>
            </div>
          </div>}

        {/* Recurring Service */}
        {activeTab === 'recurring' && <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
            <h3 className="text-2xl font-semibold mb-6 text-center">{t('recurringService')}</h3>
            <p className="text-center max-w-2xl mx-auto mb-8">
              {t('recurringDescription')}
            </p>
            
            <div className="max-w-md mx-auto">
              <div className="space-y-6 mb-8">
                <div className="bg-shr-gray p-6 rounded-lg">
                  <h4 className="font-semibold mb-4">{t('weekly')}</h4>
                  <p>{t('weeklyDescription')}</p>
                </div>
                
                <div className="bg-shr-gray p-6 rounded-lg">
                  <h4 className="font-semibold mb-4">{t('biweekly')}</h4>
                  <p>{t('biweeklyDescription')}</p>
                </div>
                
                <div className="bg-shr-gray p-6 rounded-lg">
                  <h4 className="font-semibold mb-4">{t('monthly')}</h4>
                  <p>{t('monthlyDescription')}</p>
                </div>
              </div>

              <Button className="w-full bg-shr-blue-dark hover:bg-shr-blue-dark/90 flex items-center justify-center gap-2" onClick={() => window.location.href = 'tel:+46704019341'}>
                <Phone size={20} />
                {t('callForCustomPlan')}
              </Button>
            </div>
          </div>}
      </div>
    </section>;
};
export default Pricing;
