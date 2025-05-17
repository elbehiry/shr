import { useLanguage } from './LanguageSwitcher';
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  CarouselNext, 
  CarouselPrevious 
} from "@/components/ui/carousel";
import { useEffect, useState, useRef } from "react";

const Testimonials = () => {
  const { t, currentLanguage } = useLanguage();
  const [autoPlay, setAutoPlay] = useState(true);
  const autoPlayRef = useRef<NodeJS.Timeout | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  
  const testimonials = {
    en: [
      {
        name: "Anna Johansson",
        position: "Homeowner",
        quote: "SHR Cleaning has transformed my home maintenance routine. Their team is professional, thorough, and always goes the extra mile. I've been a loyal customer now!",
        image: "https://randomuser.me/api/portraits/women/12.jpg"
      },
      {
        name: "Erik Lindberg",
        position: "Office Manager",
        quote: "We've tried several commercial cleaning services, but SHR stands out for their consistency and attention to detail. Our office has never looked better, and their staff is always courteous.",
        image: "https://randomuser.me/api/portraits/men/32.jpg"
      },
      {
        name: "Lina Andersson",
        position: "Property Manager",
        quote: "Managing multiple properties requires reliable partners. SHR Cleaning has been exceptional in handling our diverse cleaning needs, from regular maintenance to special projects.",
        image: "https://randomuser.me/api/portraits/women/44.jpg"
      },
      {
        name: "Marcus Holm",
        position: "Restaurant Owner",
        quote: "The cleanliness standards in our industry are extremely high. SHR has consistently delivered exceptional results, helping us maintain our reputation for excellence.",
        image: "https://randomuser.me/api/portraits/men/22.jpg"
      },
      {
        name: "Sofia Berg",
        position: "Clinic Director",
        quote: "In healthcare settings, cleanliness is critical. SHR understands this and provides meticulous service that meets our stringent requirements. Highly recommended!",
        image: "https://randomuser.me/api/portraits/women/28.jpg"
      }
    ],
    sv: [
      {
        name: "Anna Johansson",
        position: "Husägare",
        quote: "SHR Cleaning har förändrat min hemunderhållsrutin. Deras team är professionellt, noggrannt och går alltid den extra milen. Jag har varit en lojal kund nu!",
        image: "https://randomuser.me/api/portraits/women/12.jpg"
      },
      {
        name: "Erik Lindberg",
        position: "Kontorschef",
        quote: "Vi har provat flera kommersiella städtjänster, men SHR utmärker sig för sin konsekvens och uppmärksamhet på detaljer. Vårt kontor har aldrig sett bättre ut och deras personal är alltid artig.",
        image: "https://randomuser.me/api/portraits/men/32.jpg"
      },
      {
        name: "Lina Andersson",
        position: "Fastighetsförvaltare",
        quote: "Att hantera flera fastigheter kräver pålitliga partner. SHR Cleaning har varit exceptionella i att hantera våra olika städbehov, från regelbundet underhåll till specialprojekt.",
        image: "https://randomuser.me/api/portraits/women/44.jpg"
      },
      {
        name: "Marcus Holm",
        position: "Restaurangägare",
        quote: "Rengöringsstandarderna i vår bransch är extremt höga. SHR har konsekvent levererat exceptionella resultat som hjälpt oss att upprätthålla vårt rykte för excellens.",
        image: "https://randomuser.me/api/portraits/men/22.jpg"
      },
      {
        name: "Sofia Berg",
        position: "Klinikchef",
        quote: "I sjukvårdsmiljöer är renlighet kritiskt. SHR förstår detta och tillhandahåller noggrann service som uppfyller våra stränga krav. Starkt rekommenderad!",
        image: "https://randomuser.me/api/portraits/women/28.jpg"
      }
    ]
  };

  const currentTestimonials = currentLanguage === 'sv' ? testimonials.sv : testimonials.en;
  
  const nextSlide = () => {
    setActiveIndex((prevIndex) => 
      prevIndex === currentTestimonials.length - 1 ? 0 : prevIndex + 1
    );
  };
  
  // Auto play functionality
  useEffect(() => {
    if (autoPlay) {
      autoPlayRef.current = setInterval(() => {
        nextSlide();
      }, 5000); // Change slide every 5 seconds
    }
    
    return () => {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current);
      }
    };
  }, [autoPlay, activeIndex, currentLanguage]);
  
  // Pause auto-play on hover
  const handleMouseEnter = () => {
    setAutoPlay(false);
  };
  
  const handleMouseLeave = () => {
    setAutoPlay(true);
  };

  return (
    <section id="testimonials" className="section-padding bg-shr-blue bg-opacity-10">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{t('testimonialsTitle')}</h2>
          <div className="h-1 w-20 bg-shr-blue-dark mx-auto mb-6"></div>
        </div>
        
        <div className="relative px-4" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
            setApi={(api) => {
              api?.scrollTo(activeIndex);
            }}
          >
            <CarouselContent>
              {currentTestimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col h-full">
                    <div className="mb-4">
                      <svg className="h-8 w-8 text-shr-blue-dark" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                      </svg>
                    </div>
                    <p className="text-gray-600 italic mb-6 flex-grow">{testimonial.quote}</p>
                    <div className="flex items-center mt-4">
                      <img 
                        src={testimonial.image} 
                        alt={testimonial.name} 
                        className="h-12 w-12 rounded-full object-cover mr-4"
                      />
                      <div>
                        <h4 className="font-semibold">{testimonial.name}</h4>
                        <p className="text-sm text-gray-500">{testimonial.position}</p>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="hidden md:block">
              <CarouselPrevious className="-left-4" />
              <CarouselNext className="-right-4" />
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
