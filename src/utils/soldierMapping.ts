import { soldiers } from '@/data/soldiers';
import { Soldier } from '@/types/soldier';

// Comprehensive clan name mapping that handles all variations
// Using the exact characters from the clan members list (ゝ not ǝ)
const clanNameMappings: Record<string, string> = {
  // Team 1
  "ФƓゝ21": "21",
  "ФƓゝSWIZZY": "swizzy", 
  "ФƓゝSHADY": "shady",
  "ФƓゝLAMENACE": "lamenace",
  "ФƓゝDAMAGE": "damage",
  "ФƓゝKUSH": "kush",
  "ФƓゝCHAMBAS": "chambas",
  "ФƓゝVENOM": "venom",
  "ФƓゝC0D~MIKKI": "johnwick",
  "ФƓゝREXO": "rex",
  "ФƓゝWIɀƛRÐ": "wizard",
  
  // Team 2
  "ФƓゝBOT-GIRL": "botgirl",
  "ФƓゝUNCLE B": "uncleB",
  "ФƓゝWHITEএ": "ogwhite",
  "ФƓゝƤÅTФ": "pato",
  
  // Team 3
  "ФƓゝEXODUSKI": "exodus",
  "ФƓゝSL1M": "slim",
  "ФƓゝDHAMER": "dhamer",
  "ФƓゝESQUARE": "esquare",
  
  // Team 4
  "ФƓǝGAMEHOUSE": "gamehouse", // This one actually uses ǝ in the data
  "ФƓゝDNA": "dna",
  "ФƓゝDED": "ded",
  
  // Team 5
  "ФƓゝLILNASTY": "lilnasty",
  "ФƓゝSTARL1GHT": "starlight",
  "ФƓゝSHINØBI": "shinobi",
  "ФƓゝMÄÐÐŌĠ": "maddog",
  "ФƓゝMULLER": "muller",
  "ФƓゝHATED": "hated",
  "ФƓゝTIGER": "tiger",
  "ФƓゝSUSPECT": "suspect",
  "ФƓゝOVERKILL": "overkill",
  "ФƓゝPINKY": "pinky",
  
  // Additional soldiers that might exist
  "ФƓゝBLACKSAVAGE": "blacksavage",
  
  // Fallback mappings with both character variations
  "ФƓǝ21": "21",
  "ФƓǝSWIZZY": "swizzy", 
  "ФƓǝSHADY": "shady",
  "ФƓǝLAMENACE": "lamenace",
  "ФƓǝDAMAGE": "damage",
  "ФƓǝKUSH": "kush",
  "ФƓǝCHAMBAS": "chambas",
  "ФƓǝVENOM": "venom",
  "ФƓǝC0D~MIKKI": "johnwick",
  "ФƓǝREXO": "rex",
  "ФƓǝWIɀƛRÐ": "wizard",
  "ФƓǝBOT-GIRL": "botgirl",
  "ФƓǝUNCLE B": "uncleB",
  "ФƓǝWHITEএ": "ogwhite",
  "ФƓǝƤÅTФ": "pato",
  "ФƓǝEXODUSKI": "exodus",
  "ФƓǝSL1M": "slim",
  "ФƓǝDHAMER": "dhamer",
  "ФƓǝESQUARE": "esquare",
  "ФƓǝDNA": "dna",
  "ФƓǝDED": "ded",
  "ФƓǝLILNASTY": "lilnasty",
  "ФƓǝSTARL1GHT": "starlight",
  "ФƓǝSHINØBI": "shinobi",
  "ФƓǝMÄÐÐŌĠ": "maddog",
  "ФƓǝMULLER": "muller",
  "ФƓǝHATED": "hated",
  "ФƓǝTIGER": "tiger",
  "ФƓǝSUSPECT": "suspect",
  "ФƓǝOVERKILL": "overkill",
  "ФƓǝPINKY": "pinky"
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