
import { useState } from 'react';
import { getSqmOptions } from '../data/sqmOptions';
import { getInitialWindowCounts } from '../data/windowTypes';
import { SqmOption } from '../types';

export const usePricingState = () => {
  const sqmOptions = getSqmOptions();
  
  // Tab state
  const [activeTab, setActiveTab] = useState('home');
  
  // Square meter selection state
  const [selectedSqm, setSelectedSqm] = useState(sqmOptions[0].value);
  
  // Window cleaning calculator state
  const [windowCounts, setWindowCounts] = useState(getInitialWindowCounts());
  
  const handleTabChange = (tabName: string) => {
    // Simple direct state update without any DOM manipulation
    setActiveTab(tabName);
  };
  
  const handleCountChange = (id: string, change: number) => {
    setWindowCounts(prev => {
      const currentCount = prev[id] || 0;
      const newCount = Math.max(0, currentCount + change);
      return {
        ...prev,
        [id]: newCount
      };
    });
  };
  
  return {
    activeTab,
    selectedSqm,
    windowCounts,
    sqmOptions,
    handleTabChange,
    setSelectedSqm,
    handleCountChange
  };
};
