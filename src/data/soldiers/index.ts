
import { Soldier } from "@/types/soldier";
import { team1Soldiers } from "./team1";
import { team2Soldiers } from "./team2";
import { team3Soldiers } from "./team3";
import { team4Soldiers } from "./team4";
import { team5Soldiers } from "./team5";

export const soldiers: Soldier[] = [
  // TIER 1 - OG CORE
  team1Soldiers.find(s => s.id === "kush")!, // Kush
  team3Soldiers.find(s => s.id === "exodus")!, // Exodus
  team1Soldiers.find(s => s.id === "chambas")!, // Chambas
  team3Soldiers.find(s => s.id === "dhamer")!, // Dhamer
  
  // TIER 2 - RISING FLAMES
  team1Soldiers.find(s => s.id === "damage")!, // Damage
  team2Soldiers.find(s => s.id === "favorite")!, // Favorite
  team2Soldiers.find(s => s.id === "pato")!, // Pato
  team5Soldiers.find(s => s.id === "lilnasty")!, // Lil Nasty
  team3Soldiers.find(s => s.id === "esquare")!, // Esquare
  team1Soldiers.find(s => s.id === "21")!, // 21
  
  // TIER 3 - STEADY SOLDIERS  
  team2Soldiers.find(s => s.id === "uncleB")!, // Uncle B
  team4Soldiers.find(s => s.id === "gamehouse")!, // Gamehouse
  team5Soldiers.find(s => s.id === "blacksavage")!, // Blacksavage
  team1Soldiers.find(s => s.id === "venom")!, // Venom
  team5Soldiers.find(s => s.id === "hated")!, // Hated
  team5Soldiers.find(s => s.id === "maddog")!, // Maddog
  
  // TIER 4 - NEEDS IMPROVEMENT / CASUAL
  team5Soldiers.find(s => s.id === "pinky")!, // Pinky
  team2Soldiers.find(s => s.id === "ogwhite")!, // OG White
].filter(Boolean);

export {
  team1Soldiers,
  team2Soldiers,
  team3Soldiers,
  team4Soldiers,
  team5Soldiers
};
