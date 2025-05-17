
import React from 'react';

// Shared types
export interface SqmOption {
  value: string;
  label: string;
  hours: number;
  price: number;
}

export interface WindowType {
  id: string;
  name: string;
  description: string;
  price: number;
  icon: React.ReactNode;
}

export interface CleaningCategory {
  id: string;
  title: string;
  items: string[];
}
