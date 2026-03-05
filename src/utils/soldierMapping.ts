import { soldiers } from '@/data/soldiers';
import { Soldier } from '@/types/soldier';

// Comprehensive clan name mapping that handles all variations
const clanNameMappings: Record<string, string> = {
  // Team 1
  "ѲǤゝ21": "21",
  "ѲǤゝSWIZZY": "swizzy", 
  "ѲǤゝSHADY": "shady",
  "ѲǤゝLAMENACE": "lamenace",
  "ѲǤゝDAMAGE": "damage",
  "ѲǤゝKUSH": "kush",
  "ѲǤゝCHAMBAS": "chambas",
  "ѲǤゝVENOM": "venom",
  "ѲǤゝC0D~MIKKI": "johnwick",
  "ѲǤゝCOD~MIKKI": "johnwick",
  "ѲǤゝREXO": "rex",
  "ѲǤゝWIɀƛRÐ": "wizard",
  
  // Team 2
  "ѲǤゝBOT-GIRL": "botgirl",
  "ѲǤゝBOTGIRL": "botgirl",
  "ѲǤゝUNCLE B": "uncleB",
  "ѲǤゝWHITEএ": "ogwhite",
  "ѲǤゝWHITE": "ogwhite",
  "ѲǤゝƤÅTФ": "pato",
  "ѲǤゝPATO": "pato",
  "ѲǤゝFAVORITE": "favorite",
  "ѲǤゝNOOB": "noob",
  
  // Team 3
  "ѲǤゝEXODUSKI": "exodus",
  "ѲǤゝEXODUSK": "exodus",
  "ѲǤゝSL1M": "slim",
  "ѲǤゝDHAMER": "dhamer",
  "ѲǤゝDAHMER": "dhamer",
  "ѲǤゝESQUARE": "esquare",
  
  // Team 4
  "ѲǤゝGAMEHOUSE": "gamehouse",
  "ѲǤゝDNA": "dna",
  "ѲǤゝDED": "ded",
  
  // Team 5
  "ѲǤゝLILNASTY": "lilnasty",
  "ѲǤゝSHINØBI": "shinobi",
  "ѲǤゝMÄÐÐŌĠ": "maddog",
  "ѲǤゝMADDOG": "maddog",
  "ѲǤゝMULLER": "muller",
  "ѲǤゝMULLERYT": "muller",
  "ѲǤゝHATED": "hated",
  "ѲǤゝTIGER": "tiger",
  "ѲǤゝSUSPECT": "suspect",
  "ѲǤゝPINKY": "pinky",
  "ѲǤゝBLACKSAVAGE": "blacksavage",
  "ѲǤゝSLIM SHADY": "shady",
  
  // Legacy mappings with old clan tag (for backwards compatibility)
  "ФƓゝKUSH": "kush",
  "ФƓゝCHAMBAS": "chambas",
  "ФƓゝSWIZZY": "swizzy",
  "ФƓゝDAMAGE": "damage",
  "ФƓゝVENOM": "venom",
  "ФƓゝREXO": "rex",
  "ФƓゝBOTGIRL": "botgirl",
  "ФƓゝBOT-GIRL": "botgirl",
  "ФƓゝUNCLE B": "uncleB",
  "ФƓゝWHITE": "ogwhite",
  "ФƓゝWHITEএ": "ogwhite",
  "ФƓǝGAMEHOUSE": "gamehouse",
  "ФƓゝFAVORITE": "favorite",
  "ФƓゝNOOB": "noob",
  "ФƓゝEXODUSKI": "exodus",
  "ФƓゝSL1M": "slim",
  "ФƓゝDHAMER": "dhamer",
  "ФƓゝDAHMER": "dhamer",
  "ФƓゝESQUARE": "esquare",
  "ФƓゝLILNASTY": "lilnasty",
  "ФƓゝSHINØBI": "shinobi",
  "ФƓゝMÄÐÐŌĠ": "maddog",
  "ФƓゝMADDOG": "maddog",
  "ФƓゝMULLER": "muller",
  "ФƓゝHATED": "hated",
  "ФƓゝSUSPECT": "suspect",
  "ФƓゝPINKY": "pinky",
  "ФƓゝC0D~MIKKI": "johnwick",
  "ФƓゝCOD~MIKKI": "johnwick",
  "ФƓゝ21": "21",
  "ФƓゝSHADY": "shady",
  "ФƓゝLAMENACE": "lamenace",
  "ФƓゝBLACKSAVAGE": "blacksavage",
  "ФƓゝDED": "ded",
  "ФƓゝDNA": "dna",
  "ФƓゝMULLERYT": "muller",
  "ФƓゝSLIM SHADY": "shady",
  "ФƓゝTIGER": "tiger"
};

// Create mapping from clan names to soldier profiles
export const createSoldierMapping = () => {
  const mapping = new Map<string, Soldier>();
  
  soldiers.forEach(soldier => {
    mapping.set(soldier.name, soldier);
    if (soldier.clanName && soldier.clanName !== soldier.name) {
      mapping.set(soldier.clanName, soldier);
    }
    
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
  
  let soldier = mapping.get(clanName);
  if (soldier) return soldier;
  
  const soldierId = clanNameMappings[clanName];
  if (soldierId) {
    return soldiers.find(s => s.id === soldierId);
  }
  
  // Try case-insensitive search as fallback
  for (const [mappedName, mappedSoldier] of mapping.entries()) {
    if (mappedName.toLowerCase().includes(clanName.toLowerCase().replace(/ф/gi, '').replace(/ɠ/gi, '').replace(/ǝ/gi, '').replace(/ѳ/gi, '').replace(/ǥ/gi, ''))) {
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
