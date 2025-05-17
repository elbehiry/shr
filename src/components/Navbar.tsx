
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Phone } from 'lucide-react';
import LanguageSwitcher, { useLanguage } from '@/components/LanguageSwitcher';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { t } = useLanguage();
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <div className="flex items-center">
          <h1 className="text-2xl font-bold text-shr-blue-dark">SHR</h1>
          <span className="ml-2 text-gray-600 hidden sm:inline">städ</span>
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <a href="#home" className="text-gray-800 hover:text-shr-blue-dark font-medium">{t('home')}</a>
          <a href="#about" className="text-gray-800 hover:text-shr-blue-dark font-medium">{t('about')}</a>
          <a href="#services" className="text-gray-800 hover:text-shr-blue-dark font-medium">{t('services')}</a>
          <a href="#testimonials" className="text-gray-800 hover:text-shr-blue-dark font-medium">{t('testimonials')}</a>
          <a href="#contact" className="text-gray-800 hover:text-shr-blue-dark font-medium">{t('contact')}</a>
        </nav>
        
        <div className="flex items-center gap-4">
          <LanguageSwitcher />
          <Button 
            variant="default" 
            className="flex items-center gap-2 bg-shr-blue-dark hover:bg-blue-500"
            onClick={() => window.location.href = 'tel:+46704019341'}
          >
            <Phone size={16} />
            <span className="hidden sm:inline">{t('callNow')}</span>
          </Button>
          
          {/* Mobile menu button */}
          <button 
            className="md:hidden text-gray-800"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor" 
              className="w-6 h-6"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white shadow-lg absolute top-full left-0 right-0">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <a href="#home" className="text-gray-800 hover:text-shr-blue-dark font-medium py-2" onClick={() => setIsMobileMenuOpen(false)}>{t('home')}</a>
            <a href="#about" className="text-gray-800 hover:text-shr-blue-dark font-medium py-2" onClick={() => setIsMobileMenuOpen(false)}>{t('about')}</a>
            <a href="#services" className="text-gray-800 hover:text-shr-blue-dark font-medium py-2" onClick={() => setIsMobileMenuOpen(false)}>{t('services')}</a>
            <a href="#testimonials" className="text-gray-800 hover:text-shr-blue-dark font-medium py-2" onClick={() => setIsMobileMenuOpen(false)}>{t('testimonials')}</a>
            <a href="#contact" className="text-gray-800 hover:text-shr-blue-dark font-medium py-2" onClick={() => setIsMobileMenuOpen(false)}>{t('contact')}</a>
            <div className="py-2">
              <LanguageSwitcher />
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
