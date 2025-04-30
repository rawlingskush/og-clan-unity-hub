
import React from 'react';
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Soldier } from "@/types/soldier";
import { ExternalLink } from "lucide-react";
import { cn } from "@/lib/utils";

interface SoldierCardProps {
  soldier: Soldier;
}

const SoldierCard = ({ soldier }: SoldierCardProps) => {
  const getWeaponBadgeColor = (weapon: string) => {
    const weaponColors: Record<string, string> = {
      "BY15": "bg-red-600 hover:bg-red-700",
      "KRM-262": "bg-orange-500 hover:bg-orange-600",
      "HS0405": "bg-yellow-600 hover:bg-yellow-700",
      "R9-0": "bg-green-600 hover:bg-green-700",
      "Striker": "bg-blue-600 hover:bg-blue-700",
      "QQ9": "bg-purple-600 hover:bg-purple-700",
      "XPR-50": "bg-pink-600 hover:bg-pink-700"
    };
    
    return weaponColors[weapon] || "bg-ogclan hover:bg-ogclan-dark";
  };

  return (
    <Card className="overflow-hidden transition-all duration-300 hover:translate-y-[-5px] border-ogclan/30 hover:border-ogclan/70 hover:shadow-[0_0_15px_rgba(212,175,55,0.3)] bg-black">
      <CardContent className="p-4">
        <div className="flex flex-col items-center">
          {/* Circular Image */}
          <div className="w-32 h-32 rounded-full overflow-hidden border-2 border-ogclan mb-4 shadow-[0_0_10px_rgba(212,175,55,0.4)]">
            <img 
              src={soldier.imageUrl} 
              alt={soldier.name} 
              className="w-full h-full object-cover"
            />
          </div>
          
          {/* Name */}
          <h3 className="text-xl font-bold text-ogclan mb-1">{soldier.name}</h3>
          
          {/* Role Badge */}
          <Badge 
            className="mb-3 bg-ogclan/80 text-black hover:bg-ogclan"
            variant="secondary"
          >
            {soldier.role}
          </Badge>
          
          {/* Weapon Badge */}
          <Badge 
            className={cn("mb-4", getWeaponBadgeColor(soldier.weapon))}
          >
            {soldier.weapon}
          </Badge>
          
          {/* Bio */}
          <p className="text-center text-sm mb-4 text-gray-300">{soldier.bio}</p>
        </div>
      </CardContent>
      
      <CardFooter className="flex justify-center p-2 bg-ogclan/10 border-t border-ogclan/20">
        <a 
          href={soldier.tiktokUrl} 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-sm text-ogclan hover:text-ogclan-light transition-colors"
        >
          {/* TikTok Icon */}
          <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path d="M19.589 6.686a4.793 4.793 0 0 1-3.77-4.245V2h-3.445v13.672a2.896 2.896 0 0 1-5.201 1.743l-.002-.001.002.001a2.895 2.895 0 0 1 3.183-4.51v-3.5a6.329 6.329 0 0 0-5.394 10.692 6.33 6.33 0 0 0 10.857-4.424V8.687a8.182 8.182 0 0 0 4.773 1.526V6.79a4.831 4.831 0 0 1-1.003-.104z"></path>
          </svg>
          <span>Follow on TikTok</span>
          <ExternalLink size={14} />
        </a>
      </CardFooter>
    </Card>
  );
};

export default SoldierCard;
