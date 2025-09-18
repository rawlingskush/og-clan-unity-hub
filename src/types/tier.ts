export interface TierData {
  id: number;
  name: string;
  title: string;
  description: string;
  theme: {
    primary: string;
    secondary: string;
    accent: string;
    bg: string;
  };
  soldiers: TierSoldier[];
}

export interface TierSoldier {
  name: string;
  fullName: string;
  emoji: string;
  status: string;
  hasProfile?: boolean;
  profileId?: string;
}

export type ViewMode = 'gallery' | 'tactical' | 'members';