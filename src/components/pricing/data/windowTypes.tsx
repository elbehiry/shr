
import React from 'react';
import { WindowType } from '../types';

// Helper function to create window type definitions with translations
export const getWindowTypes = (t: (key: string) => string): WindowType[] => [
  {
    id: 'type1',
    name: t('windowType1'),
    description: t('regularNoBars'),
    price: 100,
    icon: <svg viewBox="0 0 24 24" className="h-12 w-12 mx-auto mb-2" stroke="currentColor" fill="none" strokeWidth="2">
          <rect x="2" y="3" width="20" height="18" rx="1" />
          <line x1="12" y1="3" x2="12" y2="21" />
        </svg>
  },
  {
    id: 'type2',
    name: t('windowType2'),
    description: t('tripleNoBars'),
    price: 120,
    icon: <svg viewBox="0 0 24 24" className="h-12 w-12 mx-auto mb-2" stroke="currentColor" fill="none" strokeWidth="2">
          <rect x="2" y="3" width="20" height="18" rx="1" />
          <line x1="8" y1="3" x2="8" y2="21" />
          <line x1="16" y1="3" x2="16" y2="21" />
        </svg>
  },
  {
    id: 'type3',
    name: t('windowType3'),
    description: t('tripleWithBars'),
    price: 140,
    icon: <svg viewBox="0 0 24 24" className="h-12 w-12 mx-auto mb-2" stroke="currentColor" fill="none" strokeWidth="2">
          <rect x="2" y="3" width="20" height="18" rx="1" />
          <line x1="8" y1="3" x2="8" y2="21" />
          <line x1="16" y1="3" x2="16" y2="21" />
          <line x1="2" y1="12" x2="22" y2="12" />
        </svg>
  },
  {
    id: 'type4',
    name: t('windowType4'),
    description: t('unusualLarge'),
    price: 160,
    icon: <svg viewBox="0 0 24 24" className="h-12 w-12 mx-auto mb-2" stroke="currentColor" fill="none" strokeWidth="2">
          <rect x="2" y="3" width="20" height="18" rx="1" />
          <path d="M12 3 L12 21" strokeDasharray="2 2" />
        </svg>
  },
  {
    id: 'balconyDoorLarge',
    name: t('balconyDoorLarge'),
    description: t('balconyDoorLargeDesc'),
    price: 150,
    icon: <svg viewBox="0 0 24 24" className="h-12 w-12 mx-auto mb-2" stroke="currentColor" fill="none" strokeWidth="2">
          <rect x="3" y="2" width="18" height="20" rx="1" />
          <circle cx="18" cy="12" r="1" />
        </svg>
  },
  {
    id: 'balconyDoor',
    name: t('balconyDoor'),
    description: t('balconyDoorDesc'),
    price: 100,
    icon: <svg viewBox="0 0 24 24" className="h-12 w-12 mx-auto mb-2" stroke="currentColor" fill="none" strokeWidth="2">
          <rect x="3" y="2" width="18" height="20" rx="1" />
          <rect x="12" y="6" width="6" height="6" />
          <circle cx="18" cy="12" r="1" />
        </svg>
  },
  {
    id: 'balconyFull',
    name: t('balconyFullGlazed'),
    description: t('balconyFullGlazedDesc'),
    price: 950,
    icon: <svg viewBox="0 0 24 24" className="h-12 w-12 mx-auto mb-2" stroke="currentColor" fill="none" strokeWidth="2">
          <rect x="2" y="3" width="20" height="18" rx="1" />
          <line x1="6" y1="3" x2="6" y2="21" />
          <line x1="10" y1="3" x2="10" y2="21" />
          <line x1="14" y1="3" x2="14" y2="21" />
          <line x1="18" y1="3" x2="18" y2="21" />
        </svg>
  },
  {
    id: 'balconyHalf',
    name: t('balconyHalfGlazed'),
    description: t('balconyHalfGlazedDesc'),
    price: 600,
    icon: <svg viewBox="0 0 24 24" className="h-12 w-12 mx-auto mb-2" stroke="currentColor" fill="none" strokeWidth="2">
          <rect x="2" y="3" width="20" height="18" rx="1" />
          <line x1="7" y1="3" x2="7" y2="21" />
          <line x1="12" y1="3" x2="12" y2="21" />
          <line x1="17" y1="3" x2="17" y2="21" />
        </svg>
  }
];

// Initialize window counts with zeros
export const getInitialWindowCounts = (): Record<string, number> => ({
  type1: 0,
  type2: 0,
  type3: 0,
  type4: 0,
  balconyDoorLarge: 0,
  balconyDoor: 0,
  balconyFull: 0,
  balconyHalf: 0
});
