
import { SqmOption, WindowType } from './types';

// Get the selected square meter option
export const getSelectedSqmOption = (sqmOptions: SqmOption[], selectedSqm: string): SqmOption => {
  return sqmOptions.find(option => option.value === selectedSqm) || sqmOptions[0];
};

// Calculate the price for moving/home cleaning based on square meters
export const calculatePrice = (
  sqmOptions: SqmOption[], 
  selectedSqm: string, 
  getHoursText: (hours: number) => string,
  getCallForQuoteText: () => string
): string => {
  const option = getSelectedSqmOption(sqmOptions, selectedSqm);
  if (option.value === "140+") {
    return getCallForQuoteText();
  }
  return `${option.hours} ${getHoursText(option.hours)} - ${option.price} kr`;
};

// Calculate window cleaning total price
export const calculateWindowTotal = (windowCounts: Record<string, number>, windowTypes: WindowType[]): number => {
  return Object.entries(windowCounts).reduce((total, [id, count]) => {
    const windowType = windowTypes.find(w => w.id === id);
    return total + (windowType?.price || 0) * count;
  }, 0);
};
