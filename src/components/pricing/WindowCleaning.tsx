
import React from 'react';
import { Plus, Minus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import PriceDisplay from './PriceDisplay';
import ContactButton from './ContactButton';
import { calculateWindowTotal } from './utils';
import { WindowType } from './types';

interface WindowCleaningProps {
  t: (key: string) => string;
  windowTypes: WindowType[];
  windowCounts: Record<string, number>;
  handleCountChange: (id: string, change: number) => void;
}

const WindowCleaning: React.FC<WindowCleaningProps> = ({ 
  t, 
  windowTypes, 
  windowCounts, 
  handleCountChange 
}) => {
  const totalPrice = calculateWindowTotal(windowCounts, windowTypes);

  return (
    <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
      <h3 className="text-2xl font-semibold mb-6 text-center">{t('windowCleaning')}</h3>
      <p className="text-center mb-8">{t('selectWindowTypes')}</p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {windowTypes.map(window => (
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
        <PriceDisplay
          title={t('totalPrice')}
          price={totalPrice}
          className="mb-6"
        />

        <ContactButton label={t('bookNow')} />
      </div>
    </div>
  );
};

export default WindowCleaning;
