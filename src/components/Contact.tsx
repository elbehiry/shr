
import { Button } from '@/components/ui/button';
import { Phone, Mail } from 'lucide-react';
import { useLanguage } from './LanguageSwitcher';

const Contact = () => {
  const { t } = useLanguage();
  
  return (
    <section id="contact" className="section-padding">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{t('contactUs')}</h2>
          <div className="h-1 w-20 bg-shr-blue-dark mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            {t('readyForCleaner')}
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="flex h-full">
            <div className="bg-shr-gray p-8 rounded-lg w-full flex flex-col h-full">
              <h3 className="text-2xl font-semibold mb-6">{t('getInTouch')}</h3>
              
              <div className="space-y-6 flex-grow">
                <div className="flex items-start">
                  <div className="bg-white p-3 rounded-full mr-4 shadow-sm">
                    <Phone className="h-6 w-6 text-shr-blue-dark" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg">{t('phone')}</h4>
                    <a href="tel:+46704019341" className="text-gray-600 hover:text-shr-blue-dark transition-colors">+46 70 401 93 41</a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-white p-3 rounded-full mr-4 shadow-sm">
                    <Mail className="h-6 w-6 text-shr-blue-dark" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg">{t('email')}</h4>
                    <a href="mailto:contact@shrstad.se" className="text-gray-600 hover:text-shr-blue-dark transition-colors">contact@shrstad.se</a>
                    <p className="text-sm text-gray-500 mt-1">We'll respond within 24 hours</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <Button 
                  className="cta-button w-full md:w-auto flex items-center justify-center gap-2" 
                  size="lg"
                  onClick={() => window.location.href = 'tel:+46704019341'}
                >
                  <Phone size={20} />
                  {t('callNow')}
                </Button>
              </div>
            </div>
          </div>
          
          {/* Service Areas */}
          <div className="flex h-full">
            <div className="bg-white p-8 rounded-lg shadow-md border border-gray-100 w-full flex flex-col h-full">
              <h3 className="text-2xl font-semibold mb-6">{t('serviceAreas')}</h3>
              <p className="text-gray-600 mb-6 flex-grow">
                {t('serviceAreasDescription') || "We proudly provide our exceptional cleaning services to the following areas:"}
              </p>
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold mb-2 text-shr-blue-dark">Stockholm</h4>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-2 text-shr-blue-dark">Sörmland</h4>
                </div>
              </div>
              
              <div className="mt-8">
                <p className="text-center italic text-gray-500">
                  {t('notSure')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
