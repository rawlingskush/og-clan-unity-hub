
export interface Soldier {
  id: string;
  name: string;
  role: string;
  weapon: string;
  bio: string;
  tiktokUrl: string;
  imageUrl: string;
  spotlight?: boolean;
  favoriteMap?: string;
  team?: number; // Team number (1-6) based on the image
  rank?: string; // Optional soldier rank
}
