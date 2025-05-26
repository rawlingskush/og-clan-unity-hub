
import { Soldier } from "@/types/soldier";
import { team1Soldiers } from "./team1";
import { team2Soldiers } from "./team2";
import { team3Soldiers } from "./team3";
import { team4Soldiers } from "./team4";
import { team5Soldiers } from "./team5";

// Combine all teams with SWIZZY moved to the bottom
export const soldiers: Soldier[] = [
  // All soldiers except SWIZZY first
  ...team1Soldiers.filter(soldier => soldier.id !== "swizzy"),
  ...team2Soldiers,
  ...team3Soldiers,
  ...team4Soldiers,
  ...team5Soldiers,
  // SWIZZY at the bottom
  ...team1Soldiers.filter(soldier => soldier.id === "swizzy")
];

// Export team arrays for potential future use
export {
  team1Soldiers,
  team2Soldiers,
  team3Soldiers,
  team4Soldiers,
  team5Soldiers
};
