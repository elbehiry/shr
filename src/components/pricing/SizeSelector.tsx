
import React, { useMemo } from 'react';
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
  // Create a stable ID that won't change during renders or translations
  const selectId = useMemo(() => `sqm-selector-${Math.random().toString(36).substring(2, 9)}`, []);
  
  return (
    <div className="mb-6" data-nosnippet="true" translate="no">
      <Label htmlFor={selectId} data-nosnippet="true" translate="no">{label}</Label>
      <Select value={selectedSqm} onValueChange={setSelectedSqm}>
        <SelectTrigger className="w-full mt-1" id={selectId} data-nosnippet="true" translate="no">
          <SelectValue placeholder={selectSizeText} data-nosnippet="true" translate="no" />
        </SelectTrigger>
        <SelectContent>
          {sqmOptions.map(option => (
            <SelectItem 
              key={option.value} 
              value={option.value} 
              data-nosnippet="true" 
              translate="no"
            >
              <span data-nosnippet="true" translate="no">{option.label}</span>
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};

export default SizeSelector;
