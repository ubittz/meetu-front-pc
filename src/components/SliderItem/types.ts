import { MouseEventHandler, PropsWithChildren } from 'react';

export type SliderItemProps = PropsWithChildren<{
  image: string;
  imageHeight?: number;
  title: string;
  hiddenButton?: boolean;
  buttonColor?: string;
  showContent: boolean;
  price?: string;
  onClickButton?: MouseEventHandler<HTMLDivElement>;}>;

