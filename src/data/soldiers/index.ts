
import { Soldier } from "@/types/soldier";
import { team1Soldiers } from "./team1";
import { team2Soldiers } from "./team2";
import { team3Soldiers } from "./team3";
import { team4Soldiers } from "./team4";
import { team5Soldiers } from "./team5";

// Combine all soldiers in the exact order they should appear
export const soldiers: Soldier[] = [
  ...team1Soldiers,
  ...team3Soldiers, // Team 3 comes second (Exodus is second)
  ...team2Soldiers,
  ...team4Soldiers,
  ...team5Soldiers
];

// Export individual team arrays for potential future use
export {
  team1Soldiers,
  team2Soldiers,
  team3Soldiers,
  team4Soldiers,
  team5Soldiers
};
