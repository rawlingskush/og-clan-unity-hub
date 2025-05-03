// Generate weapon categories
export const weaponBadgeColors: Record<string, string> = {
  // Shotguns - red
  "BY15": "bg-red-600",
  "KRM-262": "bg-red-600",
  "HS0405": "bg-red-600",
  "R9-0": "bg-red-600",
  "Striker": "bg-red-600",
  
  // SMGs - yellow
  "QQ9": "bg-yellow-600",
  "FENNEC": "bg-yellow-600",
  "MAC-10": "bg-yellow-600",
  
  // Snipers - green
  "DLQ33": "bg-green-600",
  "XPR-50": "bg-green-600",
  
  // ARs - blue
  "Kilo 141": "bg-blue-600",
  "AK117": "bg-blue-600",
  "Oden": "bg-blue-600"
};

// Generate play styles
export const playStyles = [
  "Aggressive Pusher", 
  "Silent Eliminator", 
  "Strategic Anchor", 
  "Support Specialist", 
  "Objective Focused", 
  "Precision Marksman"
];

// Generate operator skills
export const operatorSkills = ["Igniter", "Defender", "Smoke Bomber", "Medic", "Trickster", "Ninja"];

// Generate deterministic but impressive stats based on soldier id
export const generateDeterministicStats = (id: string) => {
  // Use a simple hash function to get a consistent number based on the soldier id
  let hash = 0;
  for (let i = 0; i < id.length; i++) {
    hash = ((hash << 5) - hash) + id.charCodeAt(i);
    hash |= 0; // Convert to 32bit integer
  }
  
  // Always keep win rate above 78% as requested in the QA check
  const winRate = 78 + Math.abs(hash % 18); // 78-96%
  
  // Keep KD above average
  const kdBase = 3 + Math.abs((hash >> 3) % 20) / 10; // 3.0-5.0
  
  // Generate other stats
  return {
    winRate: `${winRate}%`,
    kd: kdBase.toFixed(1),
    mvpTitles: `${5 + Math.abs((hash >> 6) % 10)}x`,
    clutchMoments: `${10 + Math.abs((hash >> 9) % 20)}`,
    playStyle: playStyles[Math.abs((hash >> 12) % playStyles.length)],
    operatorSkill: operatorSkills[Math.abs((hash >> 15) % operatorSkills.length)]
  };
};

// Get accent color based on weapon
export const getAccentColor = (weapon: string): string => {
  return weaponBadgeColors[weapon] || "bg-ogclan";
};
