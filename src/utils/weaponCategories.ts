
// Updated weapon categories to properly match soldier weapons
export const weaponCategories = {
  shotgun: ["BY15", "KRM-262", "HS0405", "Argus", "Striker"],
  smg: ["QQ9", "FENNEC", "MAC-10", "MX9", "BP50"],
  sniper: ["XPR-50", "DLQ33"],
  ar: ["Kilo 141", "M13", "Type 25", "AK117", "Oden"]
};

export const filterSoldiers = (soldiers: any[], filter: string) => {
  if (filter === "all") return soldiers;
  
  return soldiers.filter(soldier => {
    switch(filter) {
      case "shotgun":
        return weaponCategories.shotgun.includes(soldier.weapon);
      case "sniper":
        return weaponCategories.sniper.includes(soldier.weapon);
      case "smg":
        return weaponCategories.smg.includes(soldier.weapon);
      case "assault":
        // Match both assault architect role and AR weapons
        return soldier.role.toLowerCase().includes("assault") || 
              weaponCategories.ar.includes(soldier.weapon);
      case "support":
        return soldier.role.toLowerCase().includes("support") || soldier.role.includes("🛡️");
      default:
        return true;
    }
  });
};
