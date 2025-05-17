
import React from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Check, X, Info, AlertTriangle } from 'lucide-react';
import SizeSelector from './SizeSelector';
import PriceDisplay from './PriceDisplay';
import ContactButton from './ContactButton';
import FeaturesList from './FeaturesList';
import { calculatePrice } from './utils';
import { SqmOption, CleaningCategory } from './types';
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert";

interface GeneralCleaningProps {
  t: (key: string) => string;
  sqmOptions: SqmOption[];
  selectedSqm: string;
  setSelectedSqm: (value: string) => void;
  includedCategories: CleaningCategory[];
}

const GeneralCleaning: React.FC<GeneralCleaningProps> = ({ 
  t, 
  sqmOptions, 
  selectedSqm, 
  setSelectedSqm,
  includedCategories 
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

  const notIncludedItems = [
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

  return (
    <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
      <h3 className="text-2xl font-semibold mb-6 text-center">{t('generalCleaning')}</h3>
      
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
        
        {/* General Cleaning Checklist - Full width content */}
        <div className="mt-4 w-full">
          <h3 className="text-xl font-semibold mb-6">{t('cleaningIncludedIn')} {t('generalCleaning')}</h3>
        </div>

        {/* First row - Cleaning categories in grid layout */}
        <div className="w-full mb-4">
          <Accordion type="single" collapsible className="w-full grid grid-cols-1 md:grid-cols-3 gap-4">
            {includedCategories.slice(0, 3).map(category => (
              <AccordionItem key={category.id} value={category.id} className="border border-gray-200 rounded-lg">
                <AccordionTrigger className="py-4 px-5 bg-gray-50 hover:bg-gray-100 rounded-t-lg text-lg font-medium text-shr-blue-dark">
                  {category.title}
                </AccordionTrigger>
                <AccordionContent className="bg-gray-50 rounded-b-lg p-5 pt-2">
                  <ul className="space-y-2 mt-2">
                    {category.items.map((item, index) => (
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
        
        {/* Second row - Additional categories */}
        <div className="w-full mb-8">
          <Accordion type="single" collapsible className="w-full grid grid-cols-1 md:grid-cols-3 gap-4">
            {includedCategories.slice(3).map(category => (
              <AccordionItem key={category.id} value={category.id} className="border border-gray-200 rounded-lg">
                <AccordionTrigger className="py-4 px-5 bg-gray-50 hover:bg-gray-100 rounded-t-lg text-lg font-medium text-shr-blue-dark">
                  {category.title}
                </AccordionTrigger>
                <AccordionContent className="bg-gray-50 rounded-b-lg p-5 pt-2">
                  <ul className="space-y-2 mt-2">
                    {category.items.map((item, index) => (
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

        {/* NOT included section - Only shown on the General Cleaning tab */}
        <Alert className="w-full my-8 bg-gradient-to-r from-shr-blue/10 to-shr-blue/5 border border-shr-blue/20 rounded-lg p-6 shadow-sm">
          <AlertTriangle className="h-5 w-5 text-shr-blue-dark" />
          <AlertTitle className="text-xl font-semibold mb-3 text-gray-800">
            {t('notIncludedTitle')}
          </AlertTitle>
          <AlertDescription className="text-gray-700">
            <p className="mb-4">
              {t('notIncludedNewDescription')} 
              <a href="#" className="text-shr-blue-dark hover:text-blue-500 underline mx-1 font-medium">
                {t('termsLink')}
              </a>
              {t('notIncludedDescriptionEnd')}
            </p>
            
            <div className="space-y-5 mt-6">
              {notIncludedItems.map((item, index) => (
                <div key={index} className="flex items-start p-3 bg-white rounded-md border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                  <div className="p-2 bg-shr-gray rounded-full mr-4 flex-shrink-0">
                    <X size={16} className="text-shr-gray-dark" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800">{item.title}</h4>
                    <p className="text-gray-600 mt-1">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </AlertDescription>
        </Alert>
      </div>
    </div>
  );
};

export default GeneralCleaning;
