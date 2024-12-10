export interface Meeting {
  id: number;
  title: string;
  description: string;
  price: number;
  imageUrl?: string;
  location: string;
  isHot?: boolean;
}
