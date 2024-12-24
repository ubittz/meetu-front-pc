type MeetingType = 'art' | 'reading' | 'cooking' | 'cycling' | 'exercise' | 'hiking' | 'music' | 'photography' | 'technology' | 'wine';

interface Meeting {
  id: number;
  title: string;
  imageUrl: string | undefined;
  location: string;
  price: number;
  description: string;
  createdAt: Date;
  isHot?: boolean;
  type: MeetingType;
}

export type { Meeting, MeetingType };
