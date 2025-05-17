
import React from 'react';
import { Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface ContactButtonProps {
  label: string;
  isCallForQuote?: boolean;
  className?: string;
}

const ContactButton: React.FC<ContactButtonProps> = ({ 
  label, 
  isCallForQuote = false,
  className = ""
}) => {
  return (
    <Button 
      className={`w-full bg-shr-blue-dark hover:bg-shr-blue-dark/90 flex items-center justify-center gap-2 ${className}`} 
      onClick={() => window.location.href = 'tel:+46704019341'}
    >
      <Phone size={20} />
      {label}
    </Button>
  );
};

export default ContactButton;
