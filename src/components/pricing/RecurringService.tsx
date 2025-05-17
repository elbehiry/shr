
import React from 'react';
import ContactButton from './ContactButton';

interface RecurringServiceProps {
  t: (key: string) => string;
}

const RecurringService: React.FC<RecurringServiceProps> = ({ t }) => {
  return (
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

        <ContactButton label={t('callForCustomPlan')} />
      </div>
    </div>
  );
};

export default RecurringService;
