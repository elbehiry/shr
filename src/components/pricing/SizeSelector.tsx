
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
  const selectId = "sqm-selector"; // Create a unique ID for the select component
  
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
