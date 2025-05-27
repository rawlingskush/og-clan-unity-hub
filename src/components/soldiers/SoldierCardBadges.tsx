
import React from 'react';
import ProBadge from './ProBadge';

interface SoldierCardBadgesProps {
  weapon: string;
  isPro?: boolean;
  isPrincess?: boolean;
  isSpotlight?: boolean;
}

const SoldierCardBadges = ({ 
  weapon, 
  isPro = false, 
  isPrincess = false, 
  isSpotlight = false 
}: SoldierCardBadgesProps) => {
  const getWeaponBadgeColor = () => {
    const weaponColors: Record<string, string> = {
      "BY15": "bg-red-600",
      "KRM-262": "bg-red-600", 
      "HS0405": "bg-red-600",
      "R9-0": "bg-red-600",
      "Striker": "bg-red-600",
      "QQ9": "bg-yellow-600",
      "FENNEC": isPrincess ? "bg-pink-600" : "bg-yellow-600",
      "MAC-10": "bg-yellow-600",
      "XPR-50": "bg-green-600",
      "DLQ33": "bg-green-600",
      "Kilo 141": "bg-blue-600",
      "AK117": "bg-blue-600",
      "Oden": "bg-blue-600"
    };
    
    return weaponColors[weapon] || "bg-ogclan";
  };

  return (
    <div className="flex flex-col gap-1">
      {/* Pro Badge */}
      {isPro && <ProBadge />}
      
      {/* Princess Badge */}
      {isPrincess && (
        <span className="bg-pink-500 text-white text-xs px-2 py-1 rounded-full font-semibold">
          👑 Princess
        </span>
      )}
      
      {/* Weapon Badge */}
      <span className={`${getWeaponBadgeColor()} text-white text-xs px-2 py-1 rounded-full font-semibold`}>
        {weapon}
      </span>
    </div>
  );
};

export default SoldierCardBadges;
