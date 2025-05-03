
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
  active?: boolean; // Flag to mark active/featured soldiers
  // Performance statistics
  winRate?: string; // Elite win rate percentage
  kd?: string; // Kill/death ratio
  operatorSkill?: string; // Preferred operator skill
  mvpTitles?: string; // MVP titles won
  clutchMoments?: string; // Clutch moments (1v3+ wins)
  playStyle?: string; // Individual play style
}
