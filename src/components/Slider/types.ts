import { HTMLAttributes, ReactNode } from 'react';

import { Settings } from 'react-slick';

// 기존 SliderProps 확장하여 onSlideChange 추가
export interface SliderProps extends HTMLAttributes<HTMLDivElement> {
  sliderProps?: Settings; 
  items: ReactNode[]; 
  gap?: number; 
  itemSize?: number; 
  onSlideChange?: (index: number) => void; }