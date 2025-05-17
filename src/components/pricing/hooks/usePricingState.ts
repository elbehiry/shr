
import { useState, useCallback } from 'react';
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
  
  // Use useCallback to memoize the tab change handler
  const handleTabChange = useCallback((tabName: string) => {
    // Only update if it's different to avoid unnecessary re-renders
    if (tabName !== activeTab) {
      setActiveTab(tabName);
    }
  }, [activeTab]);
  
  // Use useCallback to memoize the count change handler
  const handleCountChange = useCallback((id: string, change: number) => {
    setWindowCounts(prev => {
      const currentCount = prev[id] || 0;
      const newCount = Math.max(0, currentCount + change);
      return {
        ...prev,
        [id]: newCount
      };
    });
  }, []);
  
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
