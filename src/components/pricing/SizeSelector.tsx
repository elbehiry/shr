
import React from 'react';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { SqmOption } from './types';

interface SizeSelectorProps {
  label: string;
  sqmOptions: SqmOption[];
  selectedSqm: string;
  setSelectedSqm: (value: string) => void;
  selectSizeText: string;
}

const SizeSelector: React.FC<SizeSelectorProps> = ({ 
  label, 
  sqmOptions, 
  selectedSqm, 
  setSelectedSqm, 
  selectSizeText 
}) => {
  const selectId = `sqm-selector-${Math.random().toString(36).substring(2, 9)}`; // Create a unique ID for each instance
  
  return (
    <div className="mb-6">
      <Label htmlFor={selectId}>{label}</Label>
      <Select value={selectedSqm} onValueChange={setSelectedSqm}>
        <SelectTrigger className="w-full mt-1" id={selectId}>
          <SelectValue placeholder={selectSizeText} />
        </SelectTrigger>
        <SelectContent>
          {sqmOptions.map(option => (
            <SelectItem key={option.value} value={option.value}>
              {option.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};

export default SizeSelector;
