type MeetingStatus = 'upcoming' | 'confirmed' | 'completed'; // 전체, 진행 예정, 모임 확정, 진행 완료

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
  status: MeetingStatus;
}

export type { Meeting, MeetingType, MeetingStatus };
