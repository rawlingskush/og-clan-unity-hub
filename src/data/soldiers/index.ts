
import { Soldier } from "@/types/soldier";
import { team1Soldiers } from "./team1";
import { team2Soldiers } from "./team2";
import { team3Soldiers } from "./team3";
import { team4Soldiers } from "./team4";
import { team5Soldiers } from "./team5";

// Original order: Kush first, then Exodus, then Wizard, etc.
export const soldiers: Soldier[] = [
  // Start with OG Kush (team 1)
  team1Soldiers.find(s => s.id === "kush")!,
  
  // Then Exodus (team 3)
  team3Soldiers.find(s => s.id === "exodus")!,
  
  // Then Wizard (team 1)
  team1Soldiers.find(s => s.id === "wizard")!,
  
  // Continue with rest of team 1
  ...team1Soldiers.filter(s => s.id !== "kush" && s.id !== "wizard"),
  
  // Then team 2
  ...team2Soldiers,
  
  // Then rest of team 3
  ...team3Soldiers.filter(s => s.id !== "exodus"),
  
  // Then remaining teams
  ...team4Soldiers,
  ...team5Soldiers
];

// Export team-specific arrays for potential future use
export {
  team1Soldiers,
  team2Soldiers,
  team3Soldiers,
  team4Soldiers,
  team5Soldiers
};
