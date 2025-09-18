import { soldiers } from '@/data/soldiers';
import { Soldier } from '@/types/soldier';

// Comprehensive clan name mapping that handles all variations
const clanNameMappings: Record<string, string> = {
  // Team 1
  "ФƓǝ21": "21",
  "ФƓǝSWIZZY": "swizzy", 
  "ФƓǝSHADY": "shady",
  "ФƓǝLAMENACE": "lamenace",
  "ФƓǝDAMAGE": "damage",
  "ФƓǝKUSH": "kush",
  "ФƓǝCHAMBAS": "chambas",
  "ФƓǝVENOM": "venom",
  "ФƓǝC0D~MIKKI": "johnwick",
  
  // Team 2
  "ФƓǝBOT-GIRL": "botgirl",
  "ФƓǝUNCLE B": "uncleB",
  "ФƓǝWHITEএ": "ogwhite",
  
  // Team 3
  "ФƓǝEXODUSKI": "exodus",
  "ФƓǝSL1M": "slim",
  "ФƓǝDHAMER": "dhamer",
  "ФƓǝESQUARE": "esquare",
  
  // Team 4
  "ФƓǝGAMEHOUSE": "gamehouse",
  "ФƓǝDNA": "dna",
  "ФƓǝDED": "ded",
  
  // Team 5
  "ФƓǝLILNASTY": "lilnasty",
  "ФƓǝSTARL1GHT": "starlight",
  "ФƓǝSHINØBI": "shinobi",
  "ФƓǝMÄÐÐŌĠ": "maddog",
  "ФƓǝMULLER": "muller",
  "ФƓǝHATED": "hated",
  "ФƓǝTIGER": "tiger",
  "ФƓǝSUSPECT": "suspect",
  "ФƓǝOVERKILL": "overkill",
  "ФƓǝPINKY": "pinky",
  
  // Additional mappings from clan list
  "ФƓǝREXO": "rex",
  "ФƓǝWIɀƛRÐ": "wizard",
  "ФƓǝƤÅTФ": "pato"
};

// Create mapping from clan names to soldier profiles
export const createSoldierMapping = () => {
  const mapping = new Map<string, Soldier>();
  
  soldiers.forEach(soldier => {
    // Map both regular name and clan name (if different) to the soldier
    mapping.set(soldier.name, soldier);
    if (soldier.clanName && soldier.clanName !== soldier.name) {
      mapping.set(soldier.clanName, soldier);
    }
    
    // Also check our comprehensive mapping
    const soldierIdFromClanName = Object.entries(clanNameMappings).find(
      ([clanName, soldierId]) => soldierId === soldier.id
    );
    if (soldierIdFromClanName) {
      mapping.set(soldierIdFromClanName[0], soldier);
    }
  });
  
  return mapping;
};

// Get soldier profile by clan name
export const getSoldierByName = (clanName: string): Soldier | undefined => {
  const mapping = createSoldierMapping();
  
  // First try direct mapping
  let soldier = mapping.get(clanName);
  if (soldier) return soldier;
  
  // Try with comprehensive mapping
  const soldierId = clanNameMappings[clanName];
  if (soldierId) {
    return soldiers.find(s => s.id === soldierId);
  }
  
  // Try case-insensitive search as fallback
  for (const [mappedName, mappedSoldier] of mapping.entries()) {
    if (mappedName.toLowerCase().includes(clanName.toLowerCase().replace(/ф/gi, '').replace(/ɠ/gi, '').replace(/ǝ/gi, ''))) {
      return mappedSoldier;
    }
  }
  
  return undefined;
};

// Check if a clan member has an Elite Squad profile
export const hasEliteProfile = (clanName: string): boolean => {
  return getSoldierByName(clanName) !== undefined;
};

// Get soldier anchor link
export const getSoldierAnchor = (soldier: Soldier): string => {
  return `og-${soldier.id.toLowerCase()}`;
};