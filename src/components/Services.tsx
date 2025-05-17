
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useLanguage } from './LanguageSwitcher';

const Services = () => {
  const { t } = useLanguage();
  
  const serviceImages = [
    "https://images.unsplash.com/photo-1618220179428-22790b461013?q=80&w=1770", // Black and brown fruit on wooden plate
    "https://images.unsplash.com/photo-1686178827149-6d55c72d81df?q=80&w=1770" // Previously added image
  ];
  
  const services = [
    {
      title: t('movingCleaningTitle'),
      description: t('movingCleaningDescription'),
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
      ),
      features: [t('movingFeature1'), t('movingFeature2'), t('movingFeature3')]
    },
    {
      title: t('regularCleaningTitle'),
      description: t('regularCleaningDescription'),
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
      features: [t('generalFeature1'), t('generalFeature2'), t('generalFeature3')]
    },
    {
      title: t('windowCleaningTitle'),
      description: t('windowCleaningDescription'),
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
      features: [t('generalFeature1'), t('generalFeature2'), t('generalFeature3')]
    },
    {
      title: t('officeCleaningTitle'),
      description: t('officeCleaningDescription'),
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      ),
      features: [t('officeFactor1'), t('officeFactor2'), t('officeFactor3')]
    }
  ];

  return (
    <section id="services" className="section-padding">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{t('servicesTitle')}</h2>
          <div className="h-1 w-20 bg-shr-blue-dark mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            {t('servicesDescription')}
          </p>
        </div>
        
        {/* Service images */}
        <div className="flex justify-center mb-12 space-x-4 overflow-x-auto py-4">
          {serviceImages.map((image, i) => (
            <div key={i} className="flex-shrink-0 w-64 h-48 md:w-80 md:h-60 overflow-hidden rounded-lg shadow-md">
              <img src={image} alt={`Service ${i+1}`} className="w-full h-full object-cover transition-transform hover:scale-105 duration-300" />
            </div>
          ))}
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300 border-t-4 border-shr-blue-dark">
              <CardHeader className="pb-2">
                <div className="text-shr-blue-dark mb-4">{service.icon}</div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 mb-4">{service.description}</CardDescription>
                <ul className="text-sm space-y-1">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <svg className="h-5 w-5 text-shr-blue-dark shrink-0 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <button 
            className="cta-button"
            onClick={() => window.location.href = 'tel:+46704019341'}
          >
            {t('callForQuote')}
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;
