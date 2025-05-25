import React from 'react';
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { Crosshair, Shield, Sword, Map } from "lucide-react";

interface SoldierCardBadgesProps {
  role: string;
  weapon: string;
  favoriteMap: string;
  isPrincess?: boolean;
}

const SoldierCardBadges = ({ role, weapon, favoriteMap, isPrincess = false }: SoldierCardBadgesProps) => {
  const getWeaponBadgeColor = (weapon: string) => {
    const weaponColors: Record<string, string> = {
      // Shotguns - red
      "BY15": "bg-red-600 hover:bg-red-700",
      "KRM-262": "bg-red-600 hover:bg-red-700",
      "HS0405": "bg-red-600 hover:bg-red-700",
      "R9-0": "bg-red-600 hover:bg-red-700",
      "Striker": "bg-red-600 hover:bg-red-700",
      
      // SMGs - yellow
      "QQ9": "bg-yellow-600 hover:bg-yellow-700",
      "FENNEC": "bg-yellow-600 hover:bg-yellow-700",
      "MAC-10": "bg-yellow-600 hover:bg-yellow-700",
      
      // Snipers - green
      "XPR-50": "bg-green-600 hover:bg-green-700",
      "DLQ33": "bg-green-600 hover:bg-green-700",
      
      // ARs - blue
      "Kilo 141": "bg-blue-600 hover:bg-blue-700",
      "AK117": "bg-blue-600 hover:bg-blue-700",
      "Oden": "bg-blue-600 hover:bg-blue-700"
    };
    
    return weaponColors[weapon] || "bg-ogclan hover:bg-ogclan-dark";
  };
  
  const getWeaponIcon = (weapon: string) => {
    // Sniper weapons
    if (weapon === "XPR-50" || weapon === "DLQ33") 
      return <Crosshair className="h-4 w-4 mr-1" />;
    
    // Assault rifles
    if (weapon === "AK117" || weapon === "Kilo 141" || weapon === "Oden") 
      return <Sword className="h-4 w-4 mr-1" />; 
    
    // SMGs
    if (weapon === "QQ9" || weapon === "FENNEC" || weapon === "MAC-10") 
      return <Sword className="h-4 w-4 mr-1" />; 
    
    // Shotguns and default
    return <Sword className="h-4 w-4 mr-1" />;
  };
  
  const getRoleIcon = (role: string) => {
    if (role.includes("🛡️")) return <Shield className="h-4 w-4 mr-1" />;
    if (role.includes("🎯")) return <Crosshair className="h-4 w-4 mr-1" />;
    if (role.toLowerCase().includes("breach")) return <Sword className="h-4 w-4 mr-1" />;
    if (role.toLowerCase().includes("guard") || role.toLowerCase().includes("shield")) 
      return <Shield className="h-4 w-4 mr-1" />;
    if (role.toLowerCase().includes("recon") || role.toLowerCase().includes("precision") || 
        role.toLowerCase().includes("sniper")) 
      return <Crosshair className="h-4 w-4 mr-1" />;
    if (role.toLowerCase().includes("assault")) return <Sword className="h-4 w-4 mr-1" />;
    return <Sword className="h-4 w-4 mr-1" />;
  };

  return (
    <>
      {/* Role Badge */}
      <Badge 
        className="mb-3 bg-ogclan/80 text-black hover:bg-ogclan flex items-center"
        variant="secondary"
        aria-label={`Role: ${role}`}
      >
        {getRoleIcon(role)}
        {role}
      </Badge>
      
      {/* Weapon Badge */}
      <Badge 
        className={cn("mb-4 flex items-center", getWeaponBadgeColor(weapon))}
        aria-label={`Weapon: ${weapon}`}
      >
        {getWeaponIcon(weapon)}
        {weapon}
      </Badge>
      
      {/* Favorite Map Badge */}
      <Badge 
        className="mb-2 bg-black/60 text-ogclan border border-ogclan/30 flex items-center gap-1"
        variant="outline"
      >
        <Map className="h-3 w-3" />
        Favorite Map: {favoriteMap}
      </Badge>
    </>
  );
};

export default SoldierCardBadges;
