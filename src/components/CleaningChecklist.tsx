
import { useState } from 'react';
import { useLanguage } from './LanguageSwitcher';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Check } from 'lucide-react';

type CleaningItem = {
  title: string;
  items: string[];
  description?: string;
};

interface CleaningChecklistProps {
  serviceType: 'homeClean' | 'moveClean' | 'generalClean';
}

const CleaningChecklist = ({ serviceType }: CleaningChecklistProps) => {
  const { t } = useLanguage();

  // Define sections based on service type
  const getSections = (): CleaningItem[] => {
    if (serviceType === 'moveClean') {
      return [
        {
          title: t('kitchen'),
          items: [
            t('vacuumFloors'),
            t('mopFloors'),
            t('dampDrySkirtingBoards'),
            t('dampDryDoorFrames'),
            t('dustShelvesJoinery'),
            t('dustFreeSurfaces'),
            t('dustCoveredSurfaces'),
            t('dustOffLamps'),
            t('polishMirrors'),
            t('dustFurniture')
          ]
        },
        {
          title: t('bathroom'),
          items: [
            t('vacuumFloors'),
            t('mopFloors'),
            t('dampDrySkirtingBoards'),
            t('dampDryDoorFrames'),
            t('dustShelvesJoinery'),
            t('dustFreeSurfaces'),
            t('dustCoveredSurfaces'),
            t('dustOffLamps'),
            t('polishMirrors'),
            t('dustFurniture')
          ]
        },
        {
          title: t('room'),
          items: [
            t('wallsDusted'),
            t('moldingsWiped'),
            t('elementsCleaned'),
            t('doorsCleaned'),
            t('windowsAllSides'),
            t('wardrobesWiped'),
            t('blindsCleaned'),
            t('floorsVacuumedWiped'),
            t('allWindowsCleaned')
          ]
        },
        {
          title: t('laundry'),
          items: [
            t('washingMachineCleaned'),
            t('tumbleDryersCleaned'),
            t('dryingCabinetsCleaned'),
            t('wallsCeilingsDusted'),
            t('floorsVacuumedWiped'),
            t('floorDrainsCleaned'),
            t('allWindowsCleaned')
          ],
          description: t('sellerResponsibility')
        },
        {
          title: t('guarantee'),
          items: [],
          description: t('guaranteeText')
        },
        {
          title: t('other'),
          items: [
            t('basementsSwept'),
            t('furnishedBasementCleaned')
          ]
        }
      ];
    } else if (serviceType === 'generalClean') {
      return [
        {
          title: t('allRooms'),
          items: [
            t('vacuumingMoppingFloors'),
            t('cleaningBaseboardsDoorlinings'),
            t('cleaningFramesWindowsills'),
            t('cleaningWardrobesExterior'),
            t('cleaningElements'),
            t('stainRemovalWalls'),
            t('dustingShelvesPaintings'),
            t('emptyingTrashcans'),
            t('cleaningAirVents'),
            t('shakingCarpets'),
            t('vacuumingSofa')
          ]
        },
        {
          title: t('allOtherSurfaces'),
          items: [
            t('refrigeratorExternallyCleaned'),
            t('ovenCleaningInOut'),
            t('cleaningStovetops'),
            t('dishwasherCleanedInOut'),
            t('cleaningSinks'),
            t('cabinetDoorsCleaned'),
            t('cleaningCabinetsGarbage'),
            t('cleaningKitchenHood'),
            t('cleaningAirVentsNotInside')
          ]
        },
        {
          title: t('bathroom'),
          items: [
            t('vacuumFloors'),
            t('mopFloors'),
            t('dampDrySkirtingBoards'),
            t('dampDryDoorFrames'),
            t('dustShelvesJoinery'),
            t('dustFreeSurfaces'),
            t('dustCoveredSurfaces'),
            t('dustOffLamps'),
            t('polishMirrors'),
            t('dustFurniture')
          ]
        },
        {
          title: t('balcony'),
          items: [
            t('vacuumSweepingFloors')
          ]
        },
        {
          title: t('windowCleaningBookedSeparately'),
          items: []
        },
        {
          title: t('desire'),
          items: [],
          description: t('desireText')
        }
      ];
    } else {
      // Home cleaning
      return [
        {
          title: t('kitchen'),
          items: [
            t('vacuumFloors'),
            t('mopFloors'),
            t('dampDrySkirtingBoards'),
            t('dampDryDoorFrames'),
            t('dustShelvesJoinery'),
            t('dustFreeSurfaces'),
            t('dustCoveredSurfaces'),
            t('dustOffLamps'),
            t('polishMirrors'),
            t('dustFurniture')
          ]
        },
        {
          title: t('livingRoom'),
          items: [
            t('vacuumFloors'),
            t('mopFloors'),
            t('dampDrySkirtingBoards'),
            t('dampDryDoorFrames'),
            t('dustShelvesJoinery'),
            t('dustFreeSurfaces'),
            t('dustCoveredSurfaces'),
            t('dustOffElectronics'),
            t('dustOffLamps'),
            t('polishMirrors'),
            t('dustFurniture'),
            t('dustDesk'),
            t('dustPaintings')
          ]
        },
        {
          title: t('bedroom'),
          items: [
            t('vacuumFloors'),
            t('mopFloors'),
            t('dampDrySkirtingBoards'),
            t('dampDryDoorFrames'),
            t('dustShelvesJoinery'),
            t('dustFreeSurfaces'),
            t('dustCoveredSurfaces'),
            t('dustOffElectronics'),
            t('dustOffLamps'),
            t('dustPaintings'),
            t('polishMirrors'),
            t('dustFurniture'),
            t('dustDesk'),
            t('wipeBedside')
          ]
        },
        {
          title: t('bathroom'),
          items: [
            t('vacuumFloors'),
            t('mopFloors'),
            t('dampDrySkirtingBoards'),
            t('dampDryDoorFrames'),
            t('dustShelvesJoinery'),
            t('dustFreeSurfaces'),
            t('dustCoveredSurfaces'),
            t('dustOffLamps'),
            t('polishMirrors'),
            t('dustFurniture')
          ]
        },
        {
          title: t('hall'),
          items: [
            t('vacuumFloors'),
            t('mopFloors'),
            t('dampDrySkirtingBoards'),
            t('dampDryDoorFrames'),
            t('dustShelvesJoinery'),
            t('dustFreeSurfaces'),
            t('dustCoveredSurfaces'),
            t('dustOffLamps'),
            t('polishMirrors'),
            t('dustFurniture')
          ]
        },
        {
          title: t('extraRoom'),
          items: [
            t('vacuumFloors'),
            t('mopFloors'),
            t('dampDrySkirtingBoards'),
            t('dampDryDoorFrames'),
            t('dustShelvesJoinery'),
            t('dustFreeSurfaces'),
            t('dustCoveredSurfaces'),
            t('dustOffElectronics'),
            t('dustOffLamps'),
            t('polishMirrors'),
            t('dustFurniture'),
            t('dustDesk'),
            t('wipeBedside'),
            t('dustPaintings')
          ]
        }
      ];
    }
  };

  const sections = getSections();

  return (
    <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
      <h3 className="text-xl font-semibold mb-4">{t('cleaningIncluded')}</h3>
      <p className="text-gray-600 mb-6">{t('cleaningChecklistDescription')}</p>
      
      <Accordion type="multiple" className="w-full space-y-2">
        {sections.map((section, index) => (
          <AccordionItem
            key={index}
            value={`item-${index}`}
            className="bg-shr-gray rounded-md overflow-hidden"
          >
            <AccordionTrigger className="px-4 py-3 hover:no-underline font-medium hover:bg-gray-100 transition-colors">
              {section.title}
            </AccordionTrigger>
            <AccordionContent className="px-4 py-3 bg-white border-t border-gray-100">
              <ul className="space-y-2">
                {section.items.map((item, i) => (
                  <li key={i} className="flex items-start">
                    <span className="text-green-500 mr-2 mt-0.5">
                      <Check className="h-5 w-5" />
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
                {section.description && (
                  <li className="mt-3 text-gray-600 italic px-7">
                    {section.description}
                  </li>
                )}
              </ul>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

export default CleaningChecklist;
