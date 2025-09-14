
import { Soldier } from "@/types/soldier";
import { team1Soldiers } from "./team1";
import { team2Soldiers } from "./team2";
import { team3Soldiers } from "./team3";
import { team4Soldiers } from "./team4";
import { team5Soldiers } from "./team5";

// Official order format: Kush, Exodus, Wizard, Damage, 23, Dhamar, Slim, Botgirl, Esquare, Blacksavage, Gamehouse, Pato, Uncle B, White
// Additional soldiers come after the core sequence
export const soldiers: Soldier[] = [
  // Core sequence - official format
  team1Soldiers.find(s => s.id === "kush")!, // Kush
  team3Soldiers.find(s => s.id === "exodus")!, // Exodus
  team1Soldiers.find(s => s.id === "wizard")!, // Wizard
  team1Soldiers.find(s => s.id === "damage")!, // Damage
  team5Soldiers.find(s => s.id === "starlight")!, // Starlight
  team3Soldiers.find(s => s.id === "dhamer")!, // Dhamar
  team3Soldiers.find(s => s.id === "slim")!, // Slim
  team2Soldiers.find(s => s.id === "botgirl")!, // Botgirl
  team3Soldiers.find(s => s.id === "esquare")!, // Esquare
  team5Soldiers.find(s => s.id === "blacksavage")!, // Blacksavage
  team4Soldiers.find(s => s.id === "gamehouse")!, // Gamehouse
  team2Soldiers.find(s => s.id === "pato")!, // Pato
  team2Soldiers.find(s => s.id === "uncleB")!, // Uncle B
  team2Soldiers.find(s => s.id === "ogwhite")!, // White
  
  // Additional soldiers after core sequence
  team1Soldiers.find(s => s.id === "rex")!, // Rex
  team1Soldiers.find(s => s.id === "swizzy")!, // Swizzy
  team1Soldiers.find(s => s.id === "venom")!, // Venom
  team5Soldiers.find(s => s.id === "lilnasty")!, // Lil Nasty - moved up beside Venom
  team1Soldiers.find(s => s.id === "chambas")!, // Chambas - restored to lineup
  team1Soldiers.find(s => s.id === "21")!, // 21
  team1Soldiers.find(s => s.id === "shady")!, // Shady
  team1Soldiers.find(s => s.id === "lamenace")!, // Lamenace
  team4Soldiers.find(s => s.id === "dna")!, // DNA
  team4Soldiers.find(s => s.id === "ded")!, // Ded
  team1Soldiers.find(s => s.id === "johnwick")!, // John Wick
  team5Soldiers.find(s => s.id === "shinobi")!, // Shinobi
  team5Soldiers.find(s => s.id === "maddog")!, // Mad Dog
  team5Soldiers.find(s => s.id === "muller")!, // Muller
  team5Soldiers.find(s => s.id === "hated")! // Hated
];

// Export team-specific arrays for potential future use
export {
  team1Soldiers,
  team2Soldiers,
  team3Soldiers,
  team4Soldiers,
  team5Soldiers
};
