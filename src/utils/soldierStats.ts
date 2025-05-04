
// Random stat generation utilities for soldier cards

export const generateSoldierStats = (soldierName: string) => {
  // Generate random favorite map
  const maps = ["ISOLATED", "BLACKOUT", "ALCATRAZ"];
  const favoriteMap = maps[Math.floor(Math.random() * maps.length)];
  
  // Generate random play styles
  const playStyles = [
    "Aggressive Pusher", 
    "Silent Eliminator", 
    "Strategic Anchor", 
    "Support Specialist", 
    "Objective Focused", 
    "Precision Marksman"
  ];
  
  // Generate random operator skills
  const operatorSkills = ["Igniter", "Defender", "Trickster", "Medic", "Smoke Bomber", "Ninja"];
  
  // Return stats object with enhanced elite values
  return {
    winRate: `${85 + Math.floor(Math.random() * 12)}%`, // Elite win rates (85-97%)
    favMap: favoriteMap,
    kd: (3.5 + Math.random() * 1.5).toFixed(1), // Higher K/D ratio (3.5-5.0)
    operatorSkill: operatorSkills[Math.floor(Math.random() * operatorSkills.length)],
    mvpTitles: `${Math.floor(8 + Math.random() * 12)}x`, // More MVP titles (8-20x)
    clutchMoments: `${Math.floor(10 + Math.random() * 15)}`, // More clutch moments (10-25)
    playStyle: playStyles[Math.floor(Math.random() * playStyles.length)]
  };
};
