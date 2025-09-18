import { soldiers } from '@/data/soldiers';
import { Soldier } from '@/types/soldier';

// Create mapping from clan names to soldier profiles
export const createSoldierMapping = () => {
  const mapping = new Map<string, Soldier>();
  
  soldiers.forEach(soldier => {
    // Map both regular name and clan name (if different) to the soldier
    mapping.set(soldier.name, soldier);
    if (soldier.clanName && soldier.clanName !== soldier.name) {
      mapping.set(soldier.clanName, soldier);
    }
  });
  
  return mapping;
};

// Get soldier profile by clan name
export const getSoldierByName = (clanName: string): Soldier | undefined => {
  const mapping = createSoldierMapping();
  return mapping.get(clanName);
};

// Check if a clan member has an Elite Squad profile
export const hasEliteProfile = (clanName: string): boolean => {
  return getSoldierByName(clanName) !== undefined;
};

// Get soldier anchor link
export const getSoldierAnchor = (soldier: Soldier): string => {
  return `og-${soldier.id.toLowerCase()}`;
};