import React from 'react';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { Check } from 'lucide-react';
import SizeSelector from './SizeSelector';
import PriceDisplay from './PriceDisplay';
import ContactButton from './ContactButton';
import FeaturesList from './FeaturesList';
import { calculatePrice } from './utils';
import { SqmOption } from './types';

interface MovingCleaningProps {
  t: (key: string) => string;
  sqmOptions: SqmOption[];
  selectedSqm: string;
  setSelectedSqm: (value: string) => void;
}

const MovingCleaning: React.FC<MovingCleaningProps> = ({ t, sqmOptions, selectedSqm, setSelectedSqm }) => {
  const price = calculatePrice(
    sqmOptions,
    selectedSqm,
    () => t('hours'),
    () => t('callForQuote')
  );

  const features = [
    t('movingFeature1'),
    t('movingFeature2'),
    t('movingFeature3')
  ];

  return (
    <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
      <h3 className="text-2xl font-semibold mb-6 text-center">{t('movingCleaning')}</h3>
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
          className="mt-6 mb-8"
        />
        
        {/* Moving Cleaning Checklist */}
        <div className="mt-4">
          <h3 className="text-xl font-semibold mb-6">{t('cleaningIncludedIn')} {t('movingCleaning')}</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
            <Accordion type="single" collapsible className="w-full">
              {/* Kitchen */}
              <AccordionItem value="kitchen" className="border border-gray-200 rounded-lg">
                <AccordionTrigger className="py-4 px-5 bg-gray-50 hover:bg-gray-100 rounded-t-lg text-lg font-medium text-shr-blue-dark">
                  {t('kitchen')}
                </AccordionTrigger>
                <AccordionContent className="bg-gray-50 rounded-b-lg p-5 pt-2">
                  <ul className="space-y-2 mt-2">
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
                </AccordionContent>
              </AccordionItem>
              
              {/* Bathroom */}
              <AccordionItem value="bathroom" className="border border-gray-200 rounded-lg">
                <AccordionTrigger className="py-4 px-5 bg-gray-50 hover:bg-gray-100 rounded-t-lg text-lg font-medium text-shr-blue-dark">
                  {t('bathroom')}
                </AccordionTrigger>
                <AccordionContent className="bg-gray-50 rounded-b-lg p-5 pt-2">
                  <ul className="space-y-2 mt-2">
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
                </AccordionContent>
              </AccordionItem>
              
              {/* Room */}
              <AccordionItem value="room" className="border border-gray-200 rounded-lg">
                <AccordionTrigger className="py-4 px-5 bg-gray-50 hover:bg-gray-100 rounded-t-lg text-lg font-medium text-shr-blue-dark">
                  {t('room')}
                </AccordionTrigger>
                <AccordionContent className="bg-gray-50 rounded-b-lg p-5 pt-2">
                  <ul className="space-y-2 mt-2">
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
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Accordion type="single" collapsible className="w-full">
              {/* Laundry */}
              <AccordionItem value="laundry" className="border border-gray-200 rounded-lg">
                <AccordionTrigger className="py-4 px-5 bg-gray-50 hover:bg-gray-100 rounded-t-lg text-lg font-medium text-shr-blue-dark">
                  {t('laundry')}
                </AccordionTrigger>
                <AccordionContent className="bg-gray-50 rounded-b-lg p-5 pt-2">
                  <ul className="space-y-2 mt-2">
                    <li className="flex items-start"><Check size={18} className="text-green-500 mr-2" /> {t('washingMachineCleaned')}</li>
                    <li className="flex items-start"><Check size={18} className="text-green-500 mr-2" /> {t('tumbleDryersCleaned')}</li>
                    <li className="flex items-start"><Check size={18} className="text-green-500 mr-2" /> {t('dryingCabinetsCleaned')}</li>
                    <li className="flex items-start"><Check size={18} className="text-green-500 mr-2" /> {t('wallsCeilingsDusted')}</li>
                    <li className="flex items-start"><Check size={18} className="text-green-500 mr-2" /> {t('floorsVacuumedWiped')}</li>
                    <li className="flex items-start"><Check size={18} className="text-green-500 mr-2" /> {t('floorDrainsCleaned')}</li>
                    <li className="flex items-start"><Check size={18} className="text-green-500 mr-2" /> {t('allWindowsCleaned')}</li>
                  </ul>
                  <p className="mt-4 text-sm text-gray-600">{t('sellerResponsibility')}</p>
                </AccordionContent>
              </AccordionItem>
              
              {/* Guarantee */}
              <AccordionItem value="guarantee" className="border border-gray-200 rounded-lg">
                <AccordionTrigger className="py-4 px-5 bg-gray-50 hover:bg-gray-100 rounded-t-lg text-lg font-medium text-shr-blue-dark">
                  {t('guarantee')}
                </AccordionTrigger>
                <AccordionContent className="bg-gray-50 rounded-b-lg p-5 pt-2">
                  <p className="mt-2">{t('guaranteeText')}</p>
                </AccordionContent>
              </AccordionItem>
              
              {/* Other */}
              <AccordionItem value="other" className="border border-gray-200 rounded-lg">
                <AccordionTrigger className="py-4 px-5 bg-gray-50 hover:bg-gray-100 rounded-t-lg text-lg font-medium text-shr-blue-dark">
                  {t('other')}
                </AccordionTrigger>
                <AccordionContent className="bg-gray-50 rounded-b-lg p-5 pt-2">
                  <ul className="space-y-2 mt-2">
                    <li className="flex items-start"><Check size={18} className="text-green-500 mr-2" /> {t('basementsSwept')}</li>
                    <li className="flex items-start"><Check size={18} className="text-green-500 mr-2" /> {t('furnishedBasementCleaned')}</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovingCleaning;
