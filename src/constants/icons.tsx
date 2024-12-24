import { SVGAttributes } from 'react';

type DefaultIconProps = SVGAttributes<SVGSVGElement>;

export function DefaultUserIcon(props: DefaultIconProps) {
  return (
    <svg width='41' height='49' viewBox='0 0 41 49' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
      <path
        d='M20.4991 23.6921C26.8131 23.6921 31.9317 18.5852 31.9317 12.2855C31.9317 5.98582 26.8131 0.878906 20.4991 0.878906C14.1851 0.878906 9.06653 5.98582 9.06653 12.2855C9.06653 18.5852 14.1851 23.6921 20.4991 23.6921Z'
        fill='#EDEDED'
      />
      <path
        d='M4.16099 49.5592C1.86364 49.5592 0 47.8756 0 45.7998C0 34.6299 9.22331 25.4951 20.5 25.4951C31.7767 25.4951 41 34.6366 41 45.7998C41 47.8756 39.1364 49.5592 36.839 49.5592H4.16099Z'
        fill='#EDEDED'
      />
    </svg>
  );
}

export function PlusIcon(props: DefaultIconProps) {
  return (
    <svg width='10' height='10' viewBox='0 0 10 10' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
      <path d='M1 5H9M5 9V1' stroke='white' strokeLinecap='round' strokeLinejoin='round' />
    </svg>
  );
}
