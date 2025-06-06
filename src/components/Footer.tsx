
import { Phone, Mail } from 'lucide-react';
import { useLanguage } from './LanguageSwitcher';

const Footer = () => {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-800 text-white">
      <div className="container mx-auto py-12 px-4">
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <img 
                src="/lovable-uploads/77522d7c-5ba9-4a09-8571-f67143ca64c5.png"
                alt="SHR Städ Logo"
                className="h-20 w-auto" // Increased from h-16 to h-20
              />
            </div>
            <p className="text-gray-300 mb-4">
              {t('professionalServices')}
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">{t('quickLinks')}</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#home" className="text-gray-300 hover:text-shr-blue-dark transition-colors">{t('home')}</a>
                </li>
                <li>
                  <a href="#about" className="text-gray-300 hover:text-shr-blue-dark transition-colors">{t('about')}</a>
                </li>
                <li>
                  <a href="#services" className="text-gray-300 hover:text-shr-blue-dark transition-colors">{t('services')}</a>
                </li>
                <li>
                  <a href="#testimonials" className="text-gray-300 hover:text-shr-blue-dark transition-colors">{t('testimonials')}</a>
                </li>
                <li>
                  <a href="#contact" className="text-gray-300 hover:text-shr-blue-dark transition-colors">{t('contact')}</a>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">{t('contactInformation')}</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <Phone className="h-5 w-5 text-shr-blue-dark mr-3 mt-0.5" />
                  <a href="tel:+46704019341" className="text-gray-300 hover:text-shr-blue-dark transition-colors">+46 70 401 93 41</a>
                </li>
                <li className="flex items-start">
                  <Mail className="h-5 w-5 text-shr-blue-dark mr-3 mt-0.5" />
                  <a href="mailto:contact@shrstad.se" className="text-gray-300 hover:text-shr-blue-dark transition-colors">contact@shrstad.se</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-700">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 mb-4 md:mb-0">
              &copy; {currentYear} SHR. {t('allRightsReserved')}
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-gray-400 hover:text-shr-blue-dark transition-colors">Terms of Use</a>
              <a href="#" className="text-gray-400 hover:text-shr-blue-dark transition-colors">Privacy Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
