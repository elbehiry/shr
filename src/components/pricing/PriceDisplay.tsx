
import React from 'react';

interface PriceDisplayProps {
  title: string;
  price: string | number;
  className?: string;
}

const PriceDisplay: React.FC<PriceDisplayProps> = ({ title, price, className = "" }) => {
  return (
    <div className={`bg-shr-gray p-6 rounded-lg ${className}`}>
      <h4 className="font-semibold mb-2">{title}</h4>
      <p className="text-lg">{typeof price === 'number' ? `${price} kr` : price}</p>
    </div>
  );
};

export default PriceDisplay;
