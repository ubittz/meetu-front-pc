export interface MeetingItem {
  id: number;
  image?: string;
  title: string;
  location: string;
  price: number;
  description: string;
  isHot?: boolean;
}

export type UserType = 'user' | 'host';
