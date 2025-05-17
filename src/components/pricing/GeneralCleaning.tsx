
import React, { useState } from 'react';
import { Check, ChevronUp, ChevronDown } from 'lucide-react';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import SizeSelector from './SizeSelector';
import PriceDisplay from './PriceDisplay';
import ContactButton from './ContactButton';
import FeaturesList from './FeaturesList';
import { calculatePrice } from './utils';
import { SqmOption, CleaningCategory } from './types';

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
  const [isChecklistOpen, setIsChecklistOpen] = useState(false);

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
      <h3 className="text-2xl font-semibold mb-6 text-center">{t('generalCleaning')}</h3>
      <div className="max-w-md mx-auto">
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
          className="mt-6"
        />
        
        {/* General Cleaning Checklist */}
        <div className="mt-8">
          <Collapsible open={isChecklistOpen} onOpenChange={setIsChecklistOpen} className="w-full">
            <CollapsibleTrigger className="w-full bg-shr-blue-dark text-white rounded-lg p-4 flex justify-between items-center font-normal text-base">
              <h3 className="text-xl font-semibold">{t('cleaningIncludedIn')} {t('generalCleaning')}</h3>
              {isChecklistOpen ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
            </CollapsibleTrigger>
            
            <CollapsibleContent className="mt-6 bg-white rounded-lg p-6 shadow-lg">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {includedCategories.map((category) => (
                  <div key={category.id} className="bg-gray-50 rounded-lg p-5">
                    <h4 className="text-lg font-semibold mb-4 text-shr-blue-dark">{category.title}</h4>
                    <ul className="space-y-2">
                      {category.items.map((item, index) => (
                        <li key={index} className="flex items-start">
                          <Check size={18} className="text-green-500 mr-2" /> {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </CollapsibleContent>
          </Collapsible>
        </div>
      </div>
    </div>
  );
};

export default GeneralCleaning;
