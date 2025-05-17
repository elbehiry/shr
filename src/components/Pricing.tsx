import React, { useState } from 'react';
import { useLanguage } from '@/hooks/useLanguage';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Check, Info, Phone, Minus, Plus } from 'lucide-react';
import { Label } from './ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';

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
  const { t } = useLanguage();
  const [activeTab, setActiveTab] = useState('moving');
  
  // Define square meter options
  const sqmOptions: SqmOption[] = [
    { value: "0-50", label: "0-50 m²", hours: 5, price: 1800 },
    { value: "51-60", label: "51-60 m²", hours: 6, price: 2000 },
    { value: "61-80", label: "61-80 m²", hours: 7, price: 2600 },
    { value: "81-100", label: "81-100 m²", hours: 8, price: 3300 },
    { value: "101-120", label: "101-120 m²", hours: 9, price: 3600 },
    { value: "121-140", label: "121-140 m²", hours: 10, price: 4000 },
    { value: "140+", label: "140+ m²", hours: 0, price: 0 },
  ];
  
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
    balconyHalf: 0,
  });
  
  const windowTypes: WindowType[] = [
    {
      id: 'type1',
      name: t('windowType1'),
      description: t('regularNoBars'),
      price: 100,
      icon: (
        <svg viewBox="0 0 24 24" className="h-12 w-12 mx-auto mb-2" stroke="currentColor" fill="none" strokeWidth="2">
          <rect x="2" y="3" width="20" height="18" rx="1" />
          <line x1="12" y1="3" x2="12" y2="21" />
        </svg>
      )
    },
    {
      id: 'type2',
      name: t('windowType2'),
      description: t('tripleNoBars'),
      price: 120,
      icon: (
        <svg viewBox="0 0 24 24" className="h-12 w-12 mx-auto mb-2" stroke="currentColor" fill="none" strokeWidth="2">
          <rect x="2" y="3" width="20" height="18" rx="1" />
          <line x1="8" y1="3" x2="8" y2="21" />
          <line x1="16" y1="3" x2="16" y2="21" />
        </svg>
      )
    },
    {
      id: 'type3',
      name: t('windowType3'),
      description: t('tripleWithBars'),
      price: 140,
      icon: (
        <svg viewBox="0 0 24 24" className="h-12 w-12 mx-auto mb-2" stroke="currentColor" fill="none" strokeWidth="2">
          <rect x="2" y="3" width="20" height="18" rx="1" />
          <line x1="8" y1="3" x2="8" y2="21" />
          <line x1="16" y1="3" x2="16" y2="21" />
          <line x1="2" y1="12" x2="22" y2="12" />
        </svg>
      )
    },
    {
      id: 'type4',
      name: t('windowType4'),
      description: t('unusualLarge'),
      price: 160,
      icon: (
        <svg viewBox="0 0 24 24" className="h-12 w-12 mx-auto mb-2" stroke="currentColor" fill="none" strokeWidth="2">
          <rect x="2" y="3" width="20" height="18" rx="1" />
          <path d="M12 3 L12 21" strokeDasharray="2 2" />
        </svg>
      )
    },
    {
      id: 'balconyDoorLarge',
      name: t('balconyDoorLarge'),
      description: t('balconyDoorLargeDesc'),
      price: 150,
      icon: (
        <svg viewBox="0 0 24 24" className="h-12 w-12 mx-auto mb-2" stroke="currentColor" fill="none" strokeWidth="2">
          <rect x="3" y="2" width="18" height="20" rx="1" />
          <circle cx="18" cy="12" r="1" />
        </svg>
      )
    },
    {
      id: 'balconyDoor',
      name: t('balconyDoor'),
      description: t('balconyDoorDesc'),
      price: 100,
      icon: (
        <svg viewBox="0 0 24 24" className="h-12 w-12 mx-auto mb-2" stroke="currentColor" fill="none" strokeWidth="2">
          <rect x="3" y="2" width="18" height="20" rx="1" />
          <rect x="12" y="6" width="6" height="6" />
          <circle cx="18" cy="12" r="1" />
        </svg>
      )
    },
    {
      id: 'balconyFull',
      name: t('balconyFullGlazed'),
      description: t('balconyFullGlazedDesc'),
      price: 950,
      icon: (
        <svg viewBox="0 0 24 24" className="h-12 w-12 mx-auto mb-2" stroke="currentColor" fill="none" strokeWidth="2">
          <rect x="2" y="3" width="20" height="18" rx="1" />
          <line x1="6" y1="3" x2="6" y2="21" />
          <line x1="10" y1="3" x2="10" y2="21" />
          <line x1="14" y1="3" x2="14" y2="21" />
          <line x1="18" y1="3" x2="18" y2="21" />
        </svg>
      )
    },
    {
      id: 'balconyHalf',
      name: t('balconyHalfGlazed'),
      description: t('balconyHalfGlazedDesc'),
      price: 600,
      icon: (
        <svg viewBox="0 0 24 24" className="h-12 w-12 mx-auto mb-2" stroke="currentColor" fill="none" strokeWidth="2">
          <rect x="2" y="3" width="20" height="18" rx="1" />
          <line x1="7" y1="3" x2="7" y2="21" />
          <line x1="12" y1="3" x2="12" y2="21" />
          <line x1="17" y1="3" x2="17" y2="21" />
        </svg>
      )
    },
  ];

  const handleCountChange = (id: string, change: number) => {
    setWindowCounts(prev => {
      const currentCount = prev[id] || 0;
      const newCount = Math.max(0, currentCount + change);
      return { ...prev, [id]: newCount };
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
  
  // Fix the calculation function
  const calculateWindowTotal = () => {
    return Object.entries(windowCounts).reduce((total, [id, count]) => {
      const windowType = windowTypes.find(w => w.id === id);
      return total + (windowType ? windowType.price * count : 0);
    }, 0);
  };

  // Fix the phone buttons to prevent navigation and just call the phone number
  const handlePhoneClick = (e: React.MouseEvent) => {
    e.preventDefault();
    window.location.href = 'tel:+46704019341';
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
        </div>
        
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          <Button 
            variant={activeTab === 'moving' ? 'default' : 'outline'}
            onClick={() => setActiveTab('moving')}
            className={activeTab === 'moving' ? 'bg-shr-blue-dark hover:bg-shr-blue-dark/90' : ''}
          >
            {t('movingCleaning')}
          </Button>
          <Button 
            variant={activeTab === 'general' ? 'default' : 'outline'}
            onClick={() => setActiveTab('general')}
            className={activeTab === 'general' ? 'bg-shr-blue-dark hover:bg-shr-blue-dark/90' : ''}
          >
            {t('generalCleaning')}
          </Button>
          <Button 
            variant={activeTab === 'window' ? 'default' : 'outline'}
            onClick={() => setActiveTab('window')}
            className={activeTab === 'window' ? 'bg-shr-blue-dark hover:bg-shr-blue-dark/90' : ''}
          >
            {t('windowCleaning')}
          </Button>
          <Button 
            variant={activeTab === 'office' ? 'default' : 'outline'}
            onClick={() => setActiveTab('office')}
            className={activeTab === 'office' ? 'bg-shr-blue-dark hover:bg-shr-blue-dark/90' : ''}
          >
            {t('officeCleaning')}
          </Button>
          <Button 
            variant={activeTab === 'recurring' ? 'default' : 'outline'}
            onClick={() => setActiveTab('recurring')}
            className={activeTab === 'recurring' ? 'bg-shr-blue-dark hover:bg-shr-blue-dark/90' : ''}
          >
            {t('recurringService')}
          </Button>
        </div>

        {/* Moving Cleaning */}
        {activeTab === 'moving' && (
          <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
            <h3 className="text-2xl font-semibold mb-6 text-center">{t('movingCleaning')}</h3>
            <div className="max-w-md mx-auto">
              <div className="mb-6">
                <Label htmlFor="sqm">{t('homeSize')}</Label>
                <Select value={selectedSqm} onValueChange={setSelectedSqm}>
                  <SelectTrigger className="w-full mt-1">
                    <SelectValue placeholder={t('selectSize')} />
                  </SelectTrigger>
                  <SelectContent>
                    {sqmOptions.map((option) => (
                      <SelectItem key={option.value} value={option.value}>
                        {option.label}
                      </SelectItem>
                    ))}
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

              <Button
                className="w-full mt-6 bg-shr-blue-dark hover:bg-shr-blue-dark/90 flex items-center justify-center gap-2"
                onClick={handlePhoneClick}
              >
                <Phone size={20} />
                {selectedSqm === "140+" ? t('callForQuote') : t('bookNow')}
              </Button>
            </div>
          </div>
        )}

        {/* General Cleaning */}
        {activeTab === 'general' && (
          <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
            <h3 className="text-2xl font-semibold mb-6 text-center">{t('generalCleaning')}</h3>
            <div className="max-w-md mx-auto">
              <div className="mb-6">
                <Label htmlFor="sqm-general">{t('homeSize')}</Label>
                <Select value={selectedSqm} onValueChange={setSelectedSqm}>
                  <SelectTrigger className="w-full mt-1">
                    <SelectValue placeholder={t('selectSize')} />
                  </SelectTrigger>
                  <SelectContent>
                    {sqmOptions.map((option) => (
                      <SelectItem key={option.value} value={option.value}>
                        {option.label}
                      </SelectItem>
                    ))}
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

              <Button
                className="w-full mt-6 bg-shr-blue-dark hover:bg-shr-blue-dark/90 flex items-center justify-center gap-2"
                onClick={handlePhoneClick}
              >
                <Phone size={20} />
                {selectedSqm === "140+" ? t('callForQuote') : t('bookNow')}
              </Button>
            </div>
          </div>
        )}

        {/* Window Cleaning */}
        {activeTab === 'window' && (
          <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
            <h3 className="text-2xl font-semibold mb-6 text-center">{t('windowCleaning')}</h3>
            <p className="text-center mb-8">{t('selectWindowTypes')}</p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
              {windowTypes.map((window) => (
                <Card key={window.id} className="overflow-hidden">
                  <CardHeader className="pb-2">
                    <div className="text-shr-blue-dark">{window.icon}</div>
                    <CardTitle className="text-lg">{window.name}</CardTitle>
                    <CardDescription>{window.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="font-semibold mb-2">{window.price} kr</p>
                    <div className="flex items-center justify-between">
                      <Button 
                        variant="outline"
                        size="icon"
                        onClick={() => handleCountChange(window.id, -1)}
                        disabled={!windowCounts[window.id]}
                      >
                        <Minus className="h-4 w-4" />
                      </Button>
                      <span className="mx-2 text-lg font-medium w-8 text-center">
                        {windowCounts[window.id] || 0}
                      </span>
                      <Button 
                        variant="outline"
                        size="icon"
                        onClick={() => handleCountChange(window.id, 1)}
                      >
                        <Plus className="h-4 w-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="max-w-md mx-auto">
              <div className="bg-shr-gray p-6 rounded-lg mb-6">
                <h4 className="font-semibold mb-2">{t('totalPrice')}</h4>
                <p className="text-2xl font-bold">{calculateWindowTotal()} kr</p>
              </div>

              <Button
                className="w-full bg-shr-blue-dark hover:bg-shr-blue-dark/90 flex items-center justify-center gap-2"
                onClick={handlePhoneClick}
              >
                <Phone size={20} />
                {t('bookNow')}
              </Button>
            </div>
          </div>
        )}

        {/* Office Cleaning */}
        {activeTab === 'office' && (
          <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
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

              <Button
                className="w-full bg-shr-blue-dark hover:bg-shr-blue-dark/90 flex items-center justify-center gap-2"
                onClick={handlePhoneClick}
              >
                <Phone size={20} />
                {t('requestQuote')}
              </Button>
            </div>
          </div>
        )}

        {/* Recurring Service */}
        {activeTab === 'recurring' && (
          <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
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

              <Button
                className="w-full bg-shr-blue-dark hover:bg-shr-blue-dark/90 flex items-center justify-center gap-2"
                onClick={handlePhoneClick}
              >
                <Phone size={20} />
                {t('callForCustomPlan')}
              </Button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Pricing;
