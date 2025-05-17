
import React from 'react';
import { Check } from 'lucide-react';

interface FeaturesListProps {
  features: string[];
}

const FeaturesList: React.FC<FeaturesListProps> = ({ features }) => {
  return (
    <div className="mt-6 space-y-3">
      {features.map((feature, index) => (
        <p key={index} className="flex items-start">
          <Check className="h-5 w-5 text-shr-blue-dark mr-2 shrink-0 mt-0.5" />
          <span>{feature}</span>
        </p>
      ))}
    </div>
  );
};

export default FeaturesList;
