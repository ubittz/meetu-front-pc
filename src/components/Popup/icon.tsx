import { DefaultIconProps } from "@@types/common";


export function Cancel(props: DefaultIconProps) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 26 26" fill="none" {...props}>
    <path d="M1 1L25 25M25 1L1 25" stroke="#555555" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}