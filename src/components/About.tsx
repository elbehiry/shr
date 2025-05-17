
import { useState } from 'react';
import { useLanguage } from './LanguageSwitcher';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { Check, ChevronDown, ChevronUp } from 'lucide-react';
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  CarouselNext, 
  CarouselPrevious 
} from "@/components/ui/carousel";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const About = () => {
  const { t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  
  const cleaningItemsByRoom = {
    allRooms: [
      'vacuumFloors',
      'mopFloors',
      'dampDrySkirtingBoards',
      'dampDryDoorFrames',
      'dustShelvesJoinery',
      'dustFreeSurfaces',
      'dustCoveredSurfaces',
      'dustOffElectronics',
      'dustOffLamps',
      'dustPaintings',
      'polishMirrors',
    ],
    kitchen: [
      'refrigeratorExternallyCleaned',
      'ovenCleaningInOut',
      'cleaningStovetops',
      'dishwasherCleanedInOut',
      'cleaningSinks',
      'cabinetDoorsCleaned',
      'cleaningCabinetsGarbage',
      'cleaningKitchenHood',
    ],
    bathroom: [
      'cleaningAirVentsNotInside',
      'vacuumSweepingFloors',
    ],
    bedroom: [
      'dustFurniture',
      'dustDesk',
      'wipeBedside',
    ],
    other: [
      'windowCleaningBookedSeparately',
    ],
  };
  
  return (
    <section id="about" className="section-padding bg-shr-gray">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{t('aboutTitle')}</h2>
          <div className="h-1 w-20 bg-shr-blue-dark mx-auto"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <Carousel className="w-full">
              <CarouselContent>
                <CarouselItem>
                  <div className="aspect-square overflow-hidden rounded-lg shadow-lg">
                    <img 
                      src="https://images.unsplash.com/photo-1686178827149-6d55c72d81df?q=80&w=1770" 
                      alt="SHR Cleaning Professional" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </CarouselItem>
                <CarouselItem>
                  <div className="aspect-square overflow-hidden rounded-lg shadow-lg">
                    <img 
                      src="https://images.unsplash.com/photo-1618220179428-22790b461013?q=80&w=1770" 
                      alt="SHR Cleaning Service" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </CarouselItem>
              </CarouselContent>
              <div className="absolute inset-0 flex items-center justify-between pointer-events-none">
                <CarouselPrevious className="pointer-events-auto left-2" />
                <CarouselNext className="pointer-events-auto right-2" />
              </div>
            </Carousel>
          </div>
          
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">{t('aboutDescription')}</h3>
            <p className="text-gray-600">
              {t('aboutText')}
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white p-5 rounded-lg shadow-sm">
                <div className="text-shr-blue-dark mb-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h4 className="font-semibold">{t('professionalStaff')}</h4>
                <p className="text-sm text-gray-600">{t('trainedSpecialists')}</p>
              </div>
              <div className="bg-white p-5 rounded-lg shadow-sm">
                <div className="text-shr-blue-dark mb-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h4 className="font-semibold">{t('efficientService')}</h4>
                <p className="text-sm text-gray-600">{t('quickProcesses')}</p>
              </div>
              <div className="bg-white p-5 rounded-lg shadow-sm">
                <div className="text-shr-blue-dark mb-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <h4 className="font-semibold">{t('commercialResidential')}</h4>
                <p className="text-sm text-gray-600">{t('allPropertyTypes')}</p>
              </div>
              <div className="bg-white p-5 rounded-lg shadow-sm">
                <div className="text-shr-blue-dark mb-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
                  </svg>
                </div>
                <h4 className="font-semibold">{t('satisfactionGuarantee')}</h4>
                <p className="text-sm text-gray-600">{t('happinessPriority')}</p>
              </div>
            </div>
            
            <div className="mt-8">
              <div className="bg-white p-6 rounded-lg shadow">
                <h4 className="text-xl font-bold text-center mb-4">{t('cleaningIncluded')}</h4>
                <p className="text-gray-600 mb-6 text-center">{t('cleaningChecklistDescription')}</p>
                
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="all-rooms">
                    <AccordionTrigger className="font-semibold text-shr-blue-dark">
                      {t('allRooms')}
                    </AccordionTrigger>
                    <AccordionContent>
                      <ul className="space-y-2">
                        {cleaningItemsByRoom.allRooms.map((item, i) => (
                          <li key={i} className="flex items-start">
                            <Check className="h-5 w-5 text-shr-blue-dark shrink-0 mr-2" />
                            <span>{t(item)}</span>
                          </li>
                        ))}
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="kitchen">
                    <AccordionTrigger className="font-semibold text-shr-blue-dark">
                      {t('kitchen')}
                    </AccordionTrigger>
                    <AccordionContent>
                      <ul className="space-y-2">
                        {cleaningItemsByRoom.kitchen.map((item, i) => (
                          <li key={i} className="flex items-start">
                            <Check className="h-5 w-5 text-shr-blue-dark shrink-0 mr-2" />
                            <span>{t(item)}</span>
                          </li>
                        ))}
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="bathroom">
                    <AccordionTrigger className="font-semibold text-shr-blue-dark">
                      {t('bathroom')}
                    </AccordionTrigger>
                    <AccordionContent>
                      <ul className="space-y-2">
                        {cleaningItemsByRoom.bathroom.map((item, i) => (
                          <li key={i} className="flex items-start">
                            <Check className="h-5 w-5 text-shr-blue-dark shrink-0 mr-2" />
                            <span>{t(item)}</span>
                          </li>
                        ))}
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="bedroom">
                    <AccordionTrigger className="font-semibold text-shr-blue-dark">
                      {t('bedroom')}
                    </AccordionTrigger>
                    <AccordionContent>
                      <ul className="space-y-2">
                        {cleaningItemsByRoom.bedroom.map((item, i) => (
                          <li key={i} className="flex items-start">
                            <Check className="h-5 w-5 text-shr-blue-dark shrink-0 mr-2" />
                            <span>{t(item)}</span>
                          </li>
                        ))}
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="other">
                    <AccordionTrigger className="font-semibold text-shr-blue-dark">
                      {t('other')}
                    </AccordionTrigger>
                    <AccordionContent>
                      <ul className="space-y-2">
                        {cleaningItemsByRoom.other.map((item, i) => (
                          <li key={i} className="flex items-start">
                            <Check className="h-5 w-5 text-shr-blue-dark shrink-0 mr-2" />
                            <span>{t(item)}</span>
                          </li>
                        ))}
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
