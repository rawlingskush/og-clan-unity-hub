
import { Soldier } from "@/types/soldier";
import { team1Soldiers } from "./team1";
import { team2Soldiers } from "./team2";
import { team3Soldiers } from "./team3";
import { team4Soldiers } from "./team4";
import { team5Soldiers } from "./team5";

// Only include soldiers who are still in the clan based on the updated roster
// Core members with profiles: Kush, Chambas, Slim, Starlight, Dhamer, Damage, Botgirl, Swizzy, Pato, Shinobi, Mikki, LilNasty, Esquare, Uncle B, Gamehouse, Blacksavage, Shady, Venom, Rex, Hated, Maddog, Muller, Pinky, Suspect

export const soldiers: Soldier[] = [
  // TIER 1 - OG CORE
  team1Soldiers.find(s => s.id === "kush")!, // Kush
  team1Soldiers.find(s => s.id === "chambas")!, // Chambas
  team3Soldiers.find(s => s.id === "slim")!, // Slim
  team5Soldiers.find(s => s.id === "starlight")!, // Starlight
  team3Soldiers.find(s => s.id === "dhamer")!, // Dhamer
  
  // TIER 2 - RISING FLAMES
  team1Soldiers.find(s => s.id === "damage")!, // Damage
  team2Soldiers.find(s => s.id === "botgirl")!, // Botgirl
  team1Soldiers.find(s => s.id === "swizzy")!, // Swizzy
  team2Soldiers.find(s => s.id === "pato")!, // Pato
  team1Soldiers.find(s => s.id === "johnwick")!, // COD~MIKKI
  team5Soldiers.find(s => s.id === "shinobi")!, // Shinobi
  team5Soldiers.find(s => s.id === "lilnasty")!, // Lil Nasty
  team3Soldiers.find(s => s.id === "esquare")!, // Esquare
  team1Soldiers.find(s => s.id === "lamenace")!, // Menace
  team1Soldiers.find(s => s.id === "21")!, // 21
  
  // TIER 3 - STEADY SOLDIERS  
  team2Soldiers.find(s => s.id === "uncleB")!, // Uncle B
  team4Soldiers.find(s => s.id === "gamehouse")!, // Gamehouse
  team5Soldiers.find(s => s.id === "blacksavage")!, // Blacksavage
  team1Soldiers.find(s => s.id === "shady")!, // Slim Shady
  team1Soldiers.find(s => s.id === "venom")!, // Venom
  team1Soldiers.find(s => s.id === "rex")!, // Rexo
  team5Soldiers.find(s => s.id === "hated")!, // Hated
  team5Soldiers.find(s => s.id === "maddog")!, // Maddog
  team5Soldiers.find(s => s.id === "muller")!, // Muller
  
  // TIER 4 - NEEDS IMPROVEMENT / CASUAL
  team5Soldiers.find(s => s.id === "pinky")!, // Pinky
  team5Soldiers.find(s => s.id === "suspect")!, // Suspect
  team4Soldiers.find(s => s.id === "ded")!, // Ded
].filter(Boolean); // Filter out any undefined entries

// Export team-specific arrays for potential future use
export {
  team1Soldiers,
  team2Soldiers,
  team3Soldiers,
  team4Soldiers,
  team5Soldiers
};
