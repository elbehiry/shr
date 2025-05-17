
import React from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Check } from 'lucide-react';
import SizeSelector from './SizeSelector';
import PriceDisplay from './PriceDisplay';
import ContactButton from './ContactButton';
import FeaturesList from './FeaturesList';
import { calculatePrice } from './utils';
import { SqmOption, CleaningCategory } from './types';

interface HomeCleaningProps {
  t: (key: string) => string;
  sqmOptions: SqmOption[];
  selectedSqm: string;
  setSelectedSqm: (value: string) => void;
  cleaningAreas: CleaningCategory[];
}

const HomeCleaning: React.FC<HomeCleaningProps> = ({ 
  t, 
  sqmOptions, 
  selectedSqm, 
  setSelectedSqm,
  cleaningAreas 
}) => {
  const price = calculatePrice(
    sqmOptions,
    selectedSqm,
    () => t('hours'),
    () => t('callForQuote')
  );

  const features = [
    t('generalFeature1'),
    t('generalFeature2'),
    t('generalFeature3')
  ];

  return (
    <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
      <h3 className="text-2xl font-semibold mb-6 text-center">{t('homeCleaning')}</h3>
      
      <div className="w-full">
        <div className="max-w-md mx-auto mb-8">
          <SizeSelector
            label={t('homeSize')}
            sqmOptions={sqmOptions}
            selectedSqm={selectedSqm}
            setSelectedSqm={setSelectedSqm}
            selectSizeText={t('selectSize')}
          />

          <PriceDisplay
            title={t('estimatedPrice')}
            price={price}
          />

          <FeaturesList features={features} />

          <ContactButton
            label={selectedSqm === "140+" ? t('callForQuote') : t('bookNow')}
            className="mt-6 mb-8"
          />
        </div>

        {/* Home Cleaning Checklist - Full width content */}
        <div className="mt-4 w-full">
          <h3 className="text-xl font-semibold mb-6">{t('cleaningIncludedIn')} {t('homeCleaning')}</h3>
        </div>
      
        {/* First row - Cleaning areas in grid layout */}
        <div className="w-full mb-4">
          <Accordion type="single" collapsible className="w-full grid grid-cols-1 md:grid-cols-3 gap-4">
            {cleaningAreas.slice(0, 3).map(area => (
              <AccordionItem key={area.id} value={area.id} className="border border-gray-200 rounded-lg">
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
        
        {/* Second row - Additional cleaning areas */}
        <div className="w-full">
          <Accordion type="single" collapsible className="w-full grid grid-cols-1 md:grid-cols-3 gap-4">
            {cleaningAreas.slice(3).map(area => (
              <AccordionItem key={area.id} value={area.id} className="border border-gray-200 rounded-lg">
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
  );
};

export default HomeCleaning;
