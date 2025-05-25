
export interface Soldier {
  id: string;
  name: string;
  role: string;
  weapon: string;
  bio: string;
  tiktokUrl: string;
  imageUrl: string;
  spotlight?: boolean;
  princess?: boolean; // New princess theme flag
  favoriteMap?: string;
  team?: number; // Team number (1-6) based on the image
  rank?: string; // Optional soldier rank
  active?: boolean; // Optional flag to mark active/featured soldiers
  stats?: {
    winRate?: string;
    kd?: string;
    favMap?: string;
    operatorSkill?: string;
    mvpTitles?: string;
    clutchMoments?: string;
    playStyle?: string;
  };
}
