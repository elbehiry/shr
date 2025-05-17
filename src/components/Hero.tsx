
import { Button } from '@/components/ui/button';
import { Phone } from 'lucide-react';
import { useLanguage } from '@/hooks/useLanguage';

const Hero = () => {
  const { t } = useLanguage();
  
  const handleLearnMore = () => {
    const servicesSection = document.getElementById('services');
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  return (
    <section id="home" className="relative min-h-screen flex items-center bg-gradient-to-b from-shr-blue to-white">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=1770')] bg-cover bg-center opacity-10"></div>
      
      <div className="container mx-auto px-4 z-10">
        <div className="max-w-3xl animate-fade-in">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-gray-800">
            {t('heroTitle')}
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-8">
            {t('heroDescription')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              className="cta-button flex items-center gap-2" 
              size="lg"
              onClick={() => window.location.href = 'tel:+46704019341'}
            >
              <Phone size={20} />
              +46 70 401 93 41
            </Button>
            <Button 
              variant="outline" 
              className="border-shr-blue-dark text-shr-blue-dark hover:bg-shr-blue hover:text-white" 
              size="lg"
              onClick={handleLearnMore}
            >
              {t('learnMore')}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
