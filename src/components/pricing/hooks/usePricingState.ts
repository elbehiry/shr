
import { useState, useCallback, useEffect } from 'react';
import { getSqmOptions } from '../data/sqmOptions';
import { getInitialWindowCounts } from '../data/windowTypes';

export const usePricingState = () => {
  const sqmOptions = getSqmOptions();
  
  // Tab state - try to restore from localStorage if available
  const [activeTab, setActiveTab] = useState(() => {
    const savedTab = localStorage.getItem('activeTab');
    return savedTab || 'home';
  });
  
  // Square meter selection state
  const [selectedSqm, setSelectedSqm] = useState(sqmOptions[0].value);
  
  // Window cleaning calculator state
  const [windowCounts, setWindowCounts] = useState(getInitialWindowCounts());
  
  // Use useCallback to memoize the tab change handler
  const handleTabChange = useCallback((tabName: string) => {
    // Only update if it's different to avoid unnecessary re-renders
    if (tabName !== activeTab) {
      setActiveTab(tabName);
      // Save to localStorage
      localStorage.setItem('activeTab', tabName);
    }
  }, [activeTab]);

  // Ensure any tab state is properly persisted
  useEffect(() => {
    localStorage.setItem('activeTab', activeTab);
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
