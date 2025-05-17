
import React from 'react';
import { Check } from 'lucide-react';
import ContactButton from './ContactButton';
import FeaturesList from './FeaturesList';

interface OfficeCleaningProps {
  t: (key: string) => string;
}

const OfficeCleaning: React.FC<OfficeCleaningProps> = ({ t }) => {
  const officeFactors = [
    t('officeSize'),
    t('roomCount'),
    t('cleaningFrequency')
  ];

  return (
    <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
      <h3 className="text-2xl font-semibold mb-6 text-center">{t('officeCleaning')}</h3>
      <p className="text-center max-w-2xl mx-auto mb-8">
        {t('commercialDescription')}
      </p>
      
      <div className="max-w-md mx-auto">
        <div className="bg-shr-gray p-6 rounded-lg mb-6">
          <h4 className="font-semibold mb-4">{t('customQuote')}</h4>
          <p className="mb-2">{t('factorsAffectingPrice')}</p>
          <FeaturesList features={officeFactors} />
        </div>

        <ContactButton label={t('requestQuote')} />
      </div>
    </div>
  );
};

export default OfficeCleaning;
