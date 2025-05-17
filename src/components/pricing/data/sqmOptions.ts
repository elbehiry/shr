
import { SqmOption } from '../types';

// Square meter options for pricing calculations
export const getSqmOptions = (): SqmOption[] => [
  {
    value: "0-50",
    label: "0-50 m²",
    hours: 5,
    price: 1800
  }, 
  {
    value: "51-60",
    label: "51-60 m²",
    hours: 6,
    price: 2000
  }, 
  {
    value: "61-80",
    label: "61-80 m²",
    hours: 7,
    price: 2600
  }, 
  {
    value: "81-100",
    label: "81-100 m²",
    hours: 8,
    price: 3300
  }, 
  {
    value: "101-120",
    label: "101-120 m²",
    hours: 9,
    price: 3600
  }, 
  {
    value: "121-140",
    label: "121-140 m²",
    hours: 10,
    price: 4000
  }, 
  {
    value: "140+",
    label: "140+ m²",
    hours: 0,
    price: 0
  }
];
