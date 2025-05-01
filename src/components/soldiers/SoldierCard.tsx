
import React from 'react';
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Soldier } from "@/types/soldier";
import { ExternalLink, Shield, Crosshair, User, Sword } from "lucide-react";
import { cn } from "@/lib/utils";
import { HoverCard, HoverCardTrigger, HoverCardContent } from "@/components/ui/hover-card";

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
  
  const getWeaponIcon = (weapon: string) => {
    // Using Sword icon from lucide for all weapons
    return <Sword className="h-4 w-4 mr-1" />;
  };
  
  const getRoleIcon = (role: string) => {
    if (role.includes("Breach")) return <User className="h-4 w-4 mr-1" />;
    if (role.includes("Defensive")) return <Shield className="h-4 w-4 mr-1" />;
    if (role.includes("Recon") || role.includes("Precision")) return <Crosshair className="h-4 w-4 mr-1" />;
    return <Sword className="h-4 w-4 mr-1" />;
  };
  
  // Quick stats for hover card
  const getQuickStats = (id: string) => {
    // These would ideally come from a database, but we're hardcoding for now
    const stats = {
      kush: { winRate: "72%", favMap: "Nuketown", kd: "4.2" },
      exodus: { winRate: "68%", favMap: "Firing Range", kd: "3.8" },
      wizard: { winRate: "75%", favMap: "Standoff", kd: "4.5" },
      mufasa: { winRate: "70%", favMap: "Raid", kd: "3.5" },
      dhamer: { winRate: "65%", favMap: "Summit", kd: "3.2" },
      gamehouse: { winRate: "66%", favMap: "Crash", kd: "3.9" },
      damage: { winRate: "71%", favMap: "Crossfire", kd: "4.1" },
      "23": { winRate: "74%", favMap: "Hijacked", kd: "4.3" },
      esquare: { winRate: "67%", favMap: "Standoff", kd: "3.7" },
      pato: { winRate: "73%", favMap: "Crossfire", kd: "4.8" },
    };
    
    // Default stats if ID not found
    return stats[id.toLowerCase() as keyof typeof stats] || { winRate: "70%", favMap: "Nuketown", kd: "4.0" };
  };
  
  const stats = getQuickStats(soldier.id);
  const accentColor = getWeaponBadgeColor(soldier.weapon).split(' ')[0]; // Get just the base color

  return (
    <HoverCard>
      <HoverCardTrigger asChild>
        <Card className={`overflow-hidden transition-all duration-300 hover:translate-y-[-5px] hover:scale-105 border-ogclan/30 hover:border-ogclan/70 hover:shadow-[0_0_15px_${accentColor.replace('bg-', 'rgba(')},0.3)] bg-black h-full`}>
          <CardContent className="p-4">
            <div className="flex flex-col items-center">
              {/* Circular Image */}
              <div className="w-32 h-32 rounded-full overflow-hidden border-2 border-ogclan mb-4 shadow-[0_0_10px_rgba(212,175,55,0.4)]">
                <img 
                  src={soldier.imageUrl} 
                  alt={`${soldier.name} - ${soldier.role}`}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              
              {/* Name */}
              <h3 className="text-xl font-bold text-ogclan mb-1">{soldier.name}</h3>
              
              {/* Role Badge */}
              <Badge 
                className="mb-3 bg-ogclan/80 text-black hover:bg-ogclan flex items-center"
                variant="secondary"
                aria-label={`Role: ${soldier.role}`}
              >
                {getRoleIcon(soldier.role)}
                {soldier.role}
              </Badge>
              
              {/* Weapon Badge */}
              <Badge 
                className={cn("mb-4 flex items-center", getWeaponBadgeColor(soldier.weapon))}
                aria-label={`Weapon: ${soldier.weapon}`}
              >
                {getWeaponIcon(soldier.weapon)}
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
              aria-label={`Follow ${soldier.name} on TikTok`}
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
      </HoverCardTrigger>
      
      <HoverCardContent className="w-64 border-ogclan/30">
        <div className="space-y-2">
          <h4 className="text-sm font-semibold text-ogclan">Quick Stats</h4>
          <div className="grid grid-cols-2 gap-1 text-xs">
            <div className="text-ogclan-muted">Win Rate</div>
            <div className="text-right font-semibold text-ogclan-light">{stats.winRate}</div>
            
            <div className="text-ogclan-muted">Favorite Map</div>
            <div className="text-right font-semibold text-ogclan-light">{stats.favMap}</div>
            
            <div className="text-ogclan-muted">K/D Ratio</div>
            <div className="text-right font-semibold text-ogclan-light">{stats.kd}</div>
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
  );
};

export default SoldierCard;
