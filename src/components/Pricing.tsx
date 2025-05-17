import { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useLanguage } from './LanguageSwitcher';
import { Check } from 'lucide-react';
import CleaningChecklist from './CleaningChecklist';

const Pricing = () => {
  const { t } = useLanguage();
  const [activeTab, setActiveTab] = useState('homeClean');
  const [selectedSize, setSelectedSize] = useState('small');
  
  // Map pricing tabs to cleaning checklist service types
  const getChecklistType = (): 'homeClean' | 'moveClean' | 'generalClean' => {
    switch (activeTab) {
      case 'moveClean':
        return 'moveClean';
      case 'generalClean':
        return 'generalClean';
      default:
        return 'homeClean';
    }
  };

  return (
    <section id="pricing" className="section-padding bg-shr-gray">
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
        
        <Tabs 
          defaultValue="homeClean" 
          value={activeTab}
          onValueChange={setActiveTab}
          className="max-w-4xl mx-auto"
        >
          <TabsList className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2 bg-transparent mb-8">
            <TabsTrigger 
              value="homeClean"
              className="data-[state=active]:bg-shr-blue-dark data-[state=active]:text-white"
            >
              {t('homeCleaning')}
            </TabsTrigger>
            <TabsTrigger 
              value="moveClean" 
              className="data-[state=active]:bg-shr-blue-dark data-[state=active]:text-white"
            >
              {t('movingCleaning')}
            </TabsTrigger>
            <TabsTrigger 
              value="generalClean" 
              className="data-[state=active]:bg-shr-blue-dark data-[state=active]:text-white"
            >
              {t('generalCleaning')}
            </TabsTrigger>
            <TabsTrigger 
              value="windowClean" 
              className="data-[state=active]:bg-shr-blue-dark data-[state=active]:text-white"
            >
              {t('windowCleaning')}
            </TabsTrigger>
            <TabsTrigger 
              value="officeClean" 
              className="data-[state=active]:bg-shr-blue-dark data-[state=active]:text-white"
            >
              {t('officeCleaning')}
            </TabsTrigger>
            <TabsTrigger 
              value="recurring" 
              className="data-[state=active]:bg-shr-blue-dark data-[state=active]:text-white"
            >
              {t('recurringService')}
            </TabsTrigger>
          </TabsList>
          
          {/* Show cleaning checklist for home, move and general cleaning tabs */}
          {(activeTab === 'homeClean' || activeTab === 'moveClean' || activeTab === 'generalClean') && (
            <div className="mb-8">
              <CleaningChecklist serviceType={getChecklistType()} />
            </div>
          )}
          
          {/* Tab contents */}
          <TabsContent value="homeClean" className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
            <h3 className="text-xl font-semibold mb-6">{t('selectSize')}</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div 
                className={`border rounded-lg p-5 cursor-pointer transition-all ${selectedSize === 'small' ? 'border-shr-blue-dark bg-blue-50' : 'border-gray-200 hover:border-shr-blue-dark'}`}
                onClick={() => setSelectedSize('small')}
              >
                <h4 className="font-semibold text-lg">&lt; 60 m<sup>2</sup></h4>
                <p className="text-gray-600 mb-4">{t('estimatedPrice')}: 3-4 {t('hours')}</p>
                <p className="font-bold text-xl">1200-1600 kr</p>
              </div>
              
              <div 
                className={`border rounded-lg p-5 cursor-pointer transition-all ${selectedSize === 'medium' ? 'border-shr-blue-dark bg-blue-50' : 'border-gray-200 hover:border-shr-blue-dark'}`}
                onClick={() => setSelectedSize('medium')}
              >
                <h4 className="font-semibold text-lg">60-100 m<sup>2</sup></h4>
                <p className="text-gray-600 mb-4">{t('estimatedPrice')}: 4-6 {t('hours')}</p>
                <p className="font-bold text-xl">1600-2400 kr</p>
              </div>
              
              <div 
                className={`border rounded-lg p-5 cursor-pointer transition-all ${selectedSize === 'large' ? 'border-shr-blue-dark bg-blue-50' : 'border-gray-200 hover:border-shr-blue-dark'}`}
                onClick={() => setSelectedSize('large')}
              >
                <h4 className="font-semibold text-lg">&gt; 100 m<sup>2</sup></h4>
                <p className="text-gray-600 mb-4">{t('estimatedPrice')}: 6+ {t('hours')}</p>
                <p className="font-bold text-xl">{t('callForQuote')}</p>
              </div>
            </div>
            
            <div className="mt-8">
              <h3 className="font-semibold mb-4">{t('movingFeature1')}</h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {[
                  t('generalFeature1'),
                  t('generalFeature2'),
                  t('generalFeature3'),
                  t('movingFeature3')
                ].map((feature, index) => (
                  <li key={index} className="flex items-center">
                    <Check className="h-5 w-5 text-green-500 mr-2" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="mt-8 flex justify-center">
              <button className="cta-button" onClick={() => window.location.href = 'tel:+46704019341'}>
                {t('bookNow')}
              </button>
            </div>
          </TabsContent>
          
          <TabsContent value="moveClean" className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
            {/* Moving cleaning tab content - same as home cleaning */}
            <h3 className="text-xl font-semibold mb-6">{t('selectSize')}</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div 
                className={`border rounded-lg p-5 cursor-pointer transition-all ${selectedSize === 'small' ? 'border-shr-blue-dark bg-blue-50' : 'border-gray-200 hover:border-shr-blue-dark'}`}
                onClick={() => setSelectedSize('small')}
              >
                <h4 className="font-semibold text-lg">&lt; 60 m<sup>2</sup></h4>
                <p className="text-gray-600 mb-4">{t('estimatedPrice')}: 3-4 {t('hours')}</p>
                <p className="font-bold text-xl">1200-1600 kr</p>
              </div>
              
              <div 
                className={`border rounded-lg p-5 cursor-pointer transition-all ${selectedSize === 'medium' ? 'border-shr-blue-dark bg-blue-50' : 'border-gray-200 hover:border-shr-blue-dark'}`}
                onClick={() => setSelectedSize('medium')}
              >
                <h4 className="font-semibold text-lg">60-100 m<sup>2</sup></h4>
                <p className="text-gray-600 mb-4">{t('estimatedPrice')}: 4-6 {t('hours')}</p>
                <p className="font-bold text-xl">1600-2400 kr</p>
              </div>
              
              <div 
                className={`border rounded-lg p-5 cursor-pointer transition-all ${selectedSize === 'large' ? 'border-shr-blue-dark bg-blue-50' : 'border-gray-200 hover:border-shr-blue-dark'}`}
                onClick={() => setSelectedSize('large')}
              >
                <h4 className="font-semibold text-lg">&gt; 100 m<sup>2</sup></h4>
                <p className="text-gray-600 mb-4">{t('estimatedPrice')}: 6+ {t('hours')}</p>
                <p className="font-bold text-xl">{t('callForQuote')}</p>
              </div>
            </div>
            
            <div className="mt-8">
              <h3 className="font-semibold mb-4">{t('movingFeature1')}</h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {[
                  t('movingFeature1'),
                  t('movingFeature2'),
                  t('movingFeature3'),
                  t('generalFeature1')
                ].map((feature, index) => (
                  <li key={index} className="flex items-center">
                    <Check className="h-5 w-5 text-green-500 mr-2" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="mt-8 flex justify-center">
              <button className="cta-button" onClick={() => window.location.href = 'tel:+46704019341'}>
                {t('bookNow')}
              </button>
            </div>
          </TabsContent>
          
          <TabsContent value="generalClean" className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
            {/* General cleaning content */}
            <h3 className="text-xl font-semibold mb-6">{t('selectSize')}</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Size options... */}
              <div 
                className={`border rounded-lg p-5 cursor-pointer transition-all ${selectedSize === 'small' ? 'border-shr-blue-dark bg-blue-50' : 'border-gray-200 hover:border-shr-blue-dark'}`}
                onClick={() => setSelectedSize('small')}
              >
                <h4 className="font-semibold text-lg">&lt; 60 m<sup>2</sup></h4>
                <p className="text-gray-600 mb-4">{t('estimatedPrice')}: 2-3 {t('hours')}</p>
                <p className="font-bold text-xl">800-1200 kr</p>
              </div>
              
              <div 
                className={`border rounded-lg p-5 cursor-pointer transition-all ${selectedSize === 'medium' ? 'border-shr-blue-dark bg-blue-50' : 'border-gray-200 hover:border-shr-blue-dark'}`}
                onClick={() => setSelectedSize('medium')}
              >
                <h4 className="font-semibold text-lg">60-100 m<sup>2</sup></h4>
                <p className="text-gray-600 mb-4">{t('estimatedPrice')}: 3-4 {t('hours')}</p>
                <p className="font-bold text-xl">1200-1600 kr</p>
              </div>
              
              <div 
                className={`border rounded-lg p-5 cursor-pointer transition-all ${selectedSize === 'large' ? 'border-shr-blue-dark bg-blue-50' : 'border-gray-200 hover:border-shr-blue-dark'}`}
                onClick={() => setSelectedSize('large')}
              >
                <h4 className="font-semibold text-lg">&gt; 100 m<sup>2</sup></h4>
                <p className="text-gray-600 mb-4">{t('estimatedPrice')}: 4+ {t('hours')}</p>
                <p className="font-bold text-xl">{t('callForQuote')}</p>
              </div>
            </div>
            
            <div className="mt-8">
              <h3 className="font-semibold mb-4">{t('totalPrice')}</h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {[
                  t('generalFeature1'),
                  t('generalFeature2'),
                  t('generalFeature3'),
                  t('movingFeature1')
                ].map((feature, index) => (
                  <li key={index} className="flex items-center">
                    <Check className="h-5 w-5 text-green-500 mr-2" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="mt-8 flex justify-center">
              <button className="cta-button" onClick={() => window.location.href = 'tel:+46704019341'}>
                {t('bookNow')}
              </button>
            </div>
          </TabsContent>
          
          <TabsContent value="windowClean" className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
            <h3 className="text-xl font-semibold mb-6">{t('selectWindowTypes')}</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="border rounded-lg p-5">
                <h4 className="font-semibold text-lg">{t('windowType1')}</h4>
                <p className="text-gray-600 mb-2">{t('regularNoBars')}</p>
                <p className="font-bold text-xl">100 kr / st</p>
              </div>
              
              <div className="border rounded-lg p-5">
                <h4 className="font-semibold text-lg">{t('windowType2')}</h4>
                <p className="text-gray-600 mb-2">{t('tripleNoBars')}</p>
                <p className="font-bold text-xl">150 kr / st</p>
              </div>
              
              <div className="border rounded-lg p-5">
                <h4 className="font-semibold text-lg">{t('windowType3')}</h4>
                <p className="text-gray-600 mb-2">{t('tripleWithBars')}</p>
                <p className="font-bold text-xl">200 kr / st</p>
              </div>
              
              <div className="border rounded-lg p-5">
                <h4 className="font-semibold text-lg">{t('windowType4')}</h4>
                <p className="text-gray-600 mb-2">{t('unusualLarge')}</p>
                <p className="font-bold text-xl">{t('customQuote')}</p>
              </div>
              
              <div className="border rounded-lg p-5">
                <h4 className="font-semibold text-lg">{t('balconyDoorLarge')}</h4>
                <p className="text-gray-600 mb-2">{t('balconyDoorLargeDesc')}</p>
                <p className="font-bold text-xl">200 kr / st</p>
              </div>
              
              <div className="border rounded-lg p-5">
                <h4 className="font-semibold text-lg">{t('balconyDoor')}</h4>
                <p className="text-gray-600 mb-2">{t('balconyDoorDesc')}</p>
                <p className="font-bold text-xl">150 kr / st</p>
              </div>
              
              <div className="border rounded-lg p-5">
                <h4 className="font-semibold text-lg">{t('balconyFullGlazed')}</h4>
                <p className="text-gray-600 mb-2">{t('balconyFullGlazedDesc')}</p>
                <p className="font-bold text-xl">{t('customQuote')}</p>
              </div>
              
              <div className="border rounded-lg p-5">
                <h4 className="font-semibold text-lg">{t('balconyHalfGlazed')}</h4>
                <p className="text-gray-600 mb-2">{t('balconyHalfGlazedDesc')}</p>
                <p className="font-bold text-xl">{t('customQuote')}</p>
              </div>
            </div>
            
            <div className="mt-8 flex justify-center">
              <button className="cta-button" onClick={() => window.location.href = 'tel:+46704019341'}>
                {t('requestQuote')}
              </button>
            </div>
          </TabsContent>
          
          <TabsContent value="officeClean" className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
            <div className="text-center mb-8">
              <h3 className="text-xl font-semibold mb-4">{t('officeCleaning')}</h3>
              <p className="text-gray-600 max-w-2xl mx-auto">
                {t('officeDescription')}
              </p>
            </div>
            
            <div className="bg-shr-gray p-6 rounded-lg mb-8">
              <h4 className="font-semibold mb-4">{t('officeFactors')}</h4>
              <ul className="space-y-3">
                {[
                  t('officeFactor1'),
                  t('officeFactor2'),
                  t('officeFactor3')
                ].map((factor, index) => (
                  <li key={index} className="flex items-center">
                    <Check className="h-5 w-5 text-green-500 mr-2" />
                    <span>{factor}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="mt-8 flex justify-center">
              <button className="cta-button" onClick={() => window.location.href = 'tel:+46704019341'}>
                {t('requestQuote')}
              </button>
            </div>
          </TabsContent>
          
          <TabsContent value="recurring" className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
            <div className="text-center mb-8">
              <h3 className="text-xl font-semibold mb-4">{t('recurringService')}</h3>
              <p className="text-gray-600 max-w-2xl mx-auto">
                {t('recurringDescription')}
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="border rounded-lg p-5 hover:shadow-md transition-shadow">
                <h4 className="font-semibold text-lg text-center mb-2">{t('weekly')}</h4>
                <p className="text-gray-600 mb-4 text-center">400 kr / {t('hours')}</p>
                <p className="text-sm text-gray-500 mb-4">
                  {t('weeklyDescription')}
                </p>
                <div className="mt-4 text-center">
                  <button 
                    className="text-shr-blue-dark hover:underline font-medium"
                    onClick={() => window.location.href = 'tel:+46704019341'}
                  >
                    {t('callForCustomPlan')}
                  </button>
                </div>
              </div>
              
              <div className="border-2 border-shr-blue-dark rounded-lg p-5 hover:shadow-md transition-shadow relative">
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-shr-blue-dark text-white text-xs py-1 px-3 rounded-full">
                  Popular
                </div>
                <h4 className="font-semibold text-lg text-center mb-2">{t('biweekly')}</h4>
                <p className="text-gray-600 mb-4 text-center">400 kr / {t('hours')}</p>
                <p className="text-sm text-gray-500 mb-4">
                  {t('biweeklyDescription')}
                </p>
                <div className="mt-4 text-center">
                  <button 
                    className="text-shr-blue-dark hover:underline font-medium"
                    onClick={() => window.location.href = 'tel:+46704019341'}
                  >
                    {t('callForCustomPlan')}
                  </button>
                </div>
              </div>
              
              <div className="border rounded-lg p-5 hover:shadow-md transition-shadow">
                <h4 className="font-semibold text-lg text-center mb-2">{t('monthly')}</h4>
                <p className="text-gray-600 mb-4 text-center">400 kr / {t('hours')}</p>
                <p className="text-sm text-gray-500 mb-4">
                  {t('monthlyDescription')}
                </p>
                <div className="mt-4 text-center">
                  <button 
                    className="text-shr-blue-dark hover:underline font-medium"
                    onClick={() => window.location.href = 'tel:+46704019341'}
                  >
                    {t('callForCustomPlan')}
                  </button>
                </div>
              </div>
            </div>
            
            <div className="mt-8 flex justify-center">
              <button className="cta-button" onClick={() => window.location.href = 'tel:+46704019341'}>
                {t('requestQuote')}
              </button>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default Pricing;
