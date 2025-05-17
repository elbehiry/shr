
import { useState } from 'react';
import { useLanguage } from './LanguageSwitcher';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { Check, ChevronDown, ChevronUp } from 'lucide-react';

const About = () => {
  const { t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <section id="about" className="section-padding bg-shr-gray">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{t('aboutTitle')}</h2>
          <div className="h-1 w-20 bg-shr-blue-dark mx-auto"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="aspect-square overflow-hidden rounded-lg shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1605184858581-da8f4ac4c8c8?q=80&w=1770" 
                alt="SHR Cleaning Professional" 
                className="w-full h-full object-cover"
              />
            </div>
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
          </div>
        </div>

        {/* Cleaning Checklist Section */}
        <div className="mt-16">
          <Collapsible open={isOpen} onOpenChange={setIsOpen} className="w-full">
            <CollapsibleTrigger className="w-full bg-shr-blue-dark text-white rounded-lg p-4 flex justify-between items-center">
              <h3 className="text-xl font-semibold">{t('cleaningIncluded')}</h3>
              {isOpen ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
            </CollapsibleTrigger>
            
            <CollapsibleContent className="mt-6 bg-white rounded-lg p-6 shadow-lg">
              <p className="text-gray-700 mb-8">{t('cleaningChecklistDescription')}</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* Kitchen */}
                <div className="bg-gray-50 rounded-lg p-5">
                  <h4 className="text-lg font-semibold mb-4 text-shr-blue-dark">{t('kitchen')}</h4>
                  <ul className="space-y-2">
                    <li className="flex items-center"><Check size={18} className="text-green-500 mr-2" /> Vacuum floors</li>
                    <li className="flex items-center"><Check size={18} className="text-green-500 mr-2" /> Mop floors</li>
                    <li className="flex items-center"><Check size={18} className="text-green-500 mr-2" /> Damp-dry skirting boards</li>
                    <li className="flex items-center"><Check size={18} className="text-green-500 mr-2" /> Damp-dry door frames</li>
                    <li className="flex items-center"><Check size={18} className="text-green-500 mr-2" /> Dust shelves & joinery</li>
                    <li className="flex items-center"><Check size={18} className="text-green-500 mr-2" /> Dust free surfaces</li>
                    <li className="flex items-center"><Check size={18} className="text-green-500 mr-2" /> Dust covered surfaces</li>
                    <li className="flex items-center"><Check size={18} className="text-green-500 mr-2" /> Dust off lamps</li>
                    <li className="flex items-center"><Check size={18} className="text-green-500 mr-2" /> Polish mirrors</li>
                    <li className="flex items-center"><Check size={18} className="text-green-500 mr-2" /> Dust the furniture</li>
                  </ul>
                </div>
                
                {/* Living Room */}
                <div className="bg-gray-50 rounded-lg p-5">
                  <h4 className="text-lg font-semibold mb-4 text-shr-blue-dark">{t('livingRoom')}</h4>
                  <ul className="space-y-2">
                    <li className="flex items-center"><Check size={18} className="text-green-500 mr-2" /> Vacuum floors</li>
                    <li className="flex items-center"><Check size={18} className="text-green-500 mr-2" /> Mop floors</li>
                    <li className="flex items-center"><Check size={18} className="text-green-500 mr-2" /> Damp-dry skirting boards</li>
                    <li className="flex items-center"><Check size={18} className="text-green-500 mr-2" /> Damp-dry door frames</li>
                    <li className="flex items-center"><Check size={18} className="text-green-500 mr-2" /> Dust shelves & joinery</li>
                    <li className="flex items-center"><Check size={18} className="text-green-500 mr-2" /> Dust free surfaces</li>
                    <li className="flex items-center"><Check size={18} className="text-green-500 mr-2" /> Dust covered surfaces</li>
                    <li className="flex items-center"><Check size={18} className="text-green-500 mr-2" /> Dust off electronics</li>
                    <li className="flex items-center"><Check size={18} className="text-green-500 mr-2" /> Dust off lamps</li>
                    <li className="flex items-center"><Check size={18} className="text-green-500 mr-2" /> Polish mirrors</li>
                    <li className="flex items-center"><Check size={18} className="text-green-500 mr-2" /> Dust the furniture</li>
                    <li className="flex items-center"><Check size={18} className="text-green-500 mr-2" /> Dust the desk</li>
                    <li className="flex items-center"><Check size={18} className="text-green-500 mr-2" /> Dusting paintings</li>
                  </ul>
                </div>
                
                {/* Bedroom */}
                <div className="bg-gray-50 rounded-lg p-5">
                  <h4 className="text-lg font-semibold mb-4 text-shr-blue-dark">{t('bedroom')}</h4>
                  <ul className="space-y-2">
                    <li className="flex items-center"><Check size={18} className="text-green-500 mr-2" /> Vacuum floors</li>
                    <li className="flex items-center"><Check size={18} className="text-green-500 mr-2" /> Mop floors</li>
                    <li className="flex items-center"><Check size={18} className="text-green-500 mr-2" /> Damp-dry skirting boards</li>
                    <li className="flex items-center"><Check size={18} className="text-green-500 mr-2" /> Damp-dry door frames</li>
                    <li className="flex items-center"><Check size={18} className="text-green-500 mr-2" /> Dust shelves & joinery</li>
                    <li className="flex items-center"><Check size={18} className="text-green-500 mr-2" /> Dust free surfaces</li>
                    <li className="flex items-center"><Check size={18} className="text-green-500 mr-2" /> Dust covered surfaces</li>
                    <li className="flex items-center"><Check size={18} className="text-green-500 mr-2" /> Dust off electronics</li>
                    <li className="flex items-center"><Check size={18} className="text-green-500 mr-2" /> Dust off lamps</li>
                    <li className="flex items-center"><Check size={18} className="text-green-500 mr-2" /> Dusting paintings</li>
                    <li className="flex items-center"><Check size={18} className="text-green-500 mr-2" /> Polish mirrors</li>
                    <li className="flex items-center"><Check size={18} className="text-green-500 mr-2" /> Dust the furniture</li>
                    <li className="flex items-center"><Check size={18} className="text-green-500 mr-2" /> Dust the desk</li>
                    <li className="flex items-center"><Check size={18} className="text-green-500 mr-2" /> Wipe bedside tables & headboards</li>
                  </ul>
                </div>
                
                {/* Bathroom */}
                <div className="bg-gray-50 rounded-lg p-5">
                  <h4 className="text-lg font-semibold mb-4 text-shr-blue-dark">{t('bathroom')}</h4>
                  <ul className="space-y-2">
                    <li className="flex items-center"><Check size={18} className="text-green-500 mr-2" /> Vacuum floors</li>
                    <li className="flex items-center"><Check size={18} className="text-green-500 mr-2" /> Mop floors</li>
                    <li className="flex items-center"><Check size={18} className="text-green-500 mr-2" /> Damp-dry skirting boards</li>
                    <li className="flex items-center"><Check size={18} className="text-green-500 mr-2" /> Damp-dry door frames</li>
                    <li className="flex items-center"><Check size={18} className="text-green-500 mr-2" /> Dust shelves & joinery</li>
                    <li className="flex items-center"><Check size={18} className="text-green-500 mr-2" /> Dust free surfaces</li>
                    <li className="flex items-center"><Check size={18} className="text-green-500 mr-2" /> Dust covered surfaces</li>
                    <li className="flex items-center"><Check size={18} className="text-green-500 mr-2" /> Dust off lamps</li>
                    <li className="flex items-center"><Check size={18} className="text-green-500 mr-2" /> Polish mirrors</li>
                    <li className="flex items-center"><Check size={18} className="text-green-500 mr-2" /> Dust the furniture</li>
                  </ul>
                </div>
                
                {/* Hall */}
                <div className="bg-gray-50 rounded-lg p-5">
                  <h4 className="text-lg font-semibold mb-4 text-shr-blue-dark">{t('hall')}</h4>
                  <ul className="space-y-2">
                    <li className="flex items-center"><Check size={18} className="text-green-500 mr-2" /> Vacuum floors</li>
                    <li className="flex items-center"><Check size={18} className="text-green-500 mr-2" /> Mop floors</li>
                    <li className="flex items-center"><Check size={18} className="text-green-500 mr-2" /> Damp-dry skirting boards</li>
                    <li className="flex items-center"><Check size={18} className="text-green-500 mr-2" /> Damp-dry door frames</li>
                    <li className="flex items-center"><Check size={18} className="text-green-500 mr-2" /> Dust shelves & joinery</li>
                    <li className="flex items-center"><Check size={18} className="text-green-500 mr-2" /> Dust free surfaces</li>
                    <li className="flex items-center"><Check size={18} className="text-green-500 mr-2" /> Dust covered surfaces</li>
                    <li className="flex items-center"><Check size={18} className="text-green-500 mr-2" /> Dust off lamps</li>
                    <li className="flex items-center"><Check size={18} className="text-green-500 mr-2" /> Polish mirrors</li>
                    <li className="flex items-center"><Check size={18} className="text-green-500 mr-2" /> Dust the furniture</li>
                  </ul>
                </div>
                
                {/* Extra Room */}
                <div className="bg-gray-50 rounded-lg p-5">
                  <h4 className="text-lg font-semibold mb-4 text-shr-blue-dark">{t('extraRoom')}</h4>
                  <ul className="space-y-2">
                    <li className="flex items-center"><Check size={18} className="text-green-500 mr-2" /> Vacuum floors</li>
                    <li className="flex items-center"><Check size={18} className="text-green-500 mr-2" /> Mop floors</li>
                    <li className="flex items-center"><Check size={18} className="text-green-500 mr-2" /> Damp-dry skirting boards</li>
                    <li className="flex items-center"><Check size={18} className="text-green-500 mr-2" /> Damp-dry door frames</li>
                    <li className="flex items-center"><Check size={18} className="text-green-500 mr-2" /> Dust shelves & joinery</li>
                    <li className="flex items-center"><Check size={18} className="text-green-500 mr-2" /> Dust free surfaces</li>
                    <li className="flex items-center"><Check size={18} className="text-green-500 mr-2" /> Dust covered surfaces</li>
                    <li className="flex items-center"><Check size={18} className="text-green-500 mr-2" /> Dust off electronics</li>
                    <li className="flex items-center"><Check size={18} className="text-green-500 mr-2" /> Dust off lamps</li>
                    <li className="flex items-center"><Check size={18} className="text-green-500 mr-2" /> Polish mirrors</li>
                    <li className="flex items-center"><Check size={18} className="text-green-500 mr-2" /> Dust the furniture</li>
                    <li className="flex items-center"><Check size={18} className="text-green-500 mr-2" /> Dust the desk</li>
                    <li className="flex items-center"><Check size={18} className="text-green-500 mr-2" /> Wipe bedside tables & headboards</li>
                    <li className="flex items-center"><Check size={18} className="text-green-500 mr-2" /> Dusting paintings</li>
                  </ul>
                </div>
              </div>
            </CollapsibleContent>
          </Collapsible>
        </div>
      </div>
    </section>
  );
};

export default About;
