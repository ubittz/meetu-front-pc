export interface MeetingItem {
  imageUrl: string | undefined;
  id: number;
  image?: string;
  title: string;
  location: string;
  price: number;
  description: string;
  isHot?: boolean;
}

export interface ReviewItem {
  id: number;
  title: string; // 모임으로 대체 필요 (모임명)
  rating: number;
  content: string;
  createdAt: string;
  user: {
    id: number;
    nickname: string;
  };
}

export type UserType = 'user' | 'host';
