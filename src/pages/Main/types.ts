export interface Meeting {
  id: number;
  title: string;
  description: string;
  price: number;
  imageUrl: string;
  location: string;
  isHot?: boolean;
  type: MeetingType;
}

export type MeetingType = 'art' | 'reading' | 'cooking' | 'cycling' | 'exercise' | 'hiking' | 'music' | 'photography' | 'technology' | 'wine';
