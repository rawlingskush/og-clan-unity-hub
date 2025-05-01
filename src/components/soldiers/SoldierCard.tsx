
import React, { useState } from 'react';
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Soldier } from "@/types/soldier";
import { ExternalLink, Shield, Crosshair, User, Sword } from "lucide-react";
import { cn } from "@/lib/utils";
import { HoverCard, HoverCardTrigger, HoverCardContent } from "@/components/ui/hover-card";
import { useIsMobile } from "@/hooks/use-mobile";

interface SoldierCardProps {
  soldier: Soldier;
  animate?: boolean;
  delay?: number;
}

const SoldierCard = ({ soldier, animate = true, delay = 0 }: SoldierCardProps) => {
  const isMobile = useIsMobile();
  const [showQuickStats, setShowQuickStats] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  
  const getWeaponBadgeColor = (weapon: string) => {
    const weaponColors: Record<string, string> = {
      "BY15": "bg-red-600 hover:bg-red-700",
      "KRM-262": "bg-orange-500 hover:bg-orange-600",
      "HS0405": "bg-yellow-600 hover:bg-yellow-700",
      "XPR-50": "bg-green-600 hover:bg-green-700",
      "Striker": "bg-blue-600 hover:bg-blue-700",
      "QQ9": "bg-purple-600 hover:bg-purple-700",
      "MAC-10": "bg-violet-600 hover:bg-violet-700",
      "R9-0": "bg-pink-600 hover:bg-pink-700"
    };
    
    return weaponColors[weapon] || "bg-ogclan hover:bg-ogclan-dark";
  };
  
  const getWeaponIcon = (weapon: string) => {
    // Using Sword icon from lucide for all weapons
    return <Sword className="h-4 w-4 mr-1" />;
  };
  
  const getRoleIcon = (role: string) => {
    if (role.toLowerCase().includes("breach")) return <User className="h-4 w-4 mr-1" />;
    if (role.toLowerCase().includes("guard") || role.toLowerCase().includes("shield")) return <Shield className="h-4 w-4 mr-1" />;
    if (role.toLowerCase().includes("recon") || role.toLowerCase().includes("precision") || role.toLowerCase().includes("sniper")) return <Crosshair className="h-4 w-4 mr-1" />;
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
      chambas: { winRate: "76%", favMap: "Takeoff", kd: "4.4" },
      uncleB: { winRate: "69%", favMap: "Killhouse", kd: "4.0" },
    };
    
    // Default stats if ID not found
    return stats[id.toLowerCase() as keyof typeof stats] || { winRate: "70%", favMap: "Nuketown", kd: "4.0" };
  };
  
  const stats = getQuickStats(soldier.id);
  const accentColor = getWeaponBadgeColor(soldier.weapon).split(' ')[0]; // Get just the base color

  // Function to toggle quick stats on mobile
  const toggleQuickStats = () => {
    if (isMobile) {
      setShowQuickStats(prev => !prev);
    }
  };

  // Quick stats component
  const QuickStats = () => (
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
  );

  const animationStyles = {
    opacity: animate ? 1 : 0,
    transform: animate ? 'translateY(0)' : 'translateY(20px)',
    transition: `opacity 0.5s ease-out ${delay}ms, transform 0.5s ease-out ${delay}ms`
  };

  const hoverStyles = isHovered ? {
    transform: 'translateY(-8px) scale(1.02)',
    boxShadow: `0 10px 30px -5px rgba(212,175,55,0.3)`,
    borderColor: 'rgba(212,175,55,0.7)'
  } : {};

  // Avatar animation styles for initial load
  const avatarStyles = {
    transform: animate ? 'scale(1)' : 'scale(0.8)',
    opacity: animate ? 1 : 0,
    transition: `transform 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275) ${delay + 200}ms, opacity 0.6s ease ${delay + 200}ms`
  };

  return isMobile ? (
    <div style={animationStyles}>
      <Card 
        className="overflow-hidden transition-all duration-500 border-ogclan/30 bg-black/90 h-full relative"
        onClick={toggleQuickStats}
        style={{
          background: "linear-gradient(180deg, rgba(0,0,0,0.95) 0%, rgba(10,50,0,0.8) 100%)"
        }}
      >
        <div className="relative">
          {/* Animated Scanner Line */}
          <div className="scanner-line"></div>

          <CardContent className="p-4 relative">
            <div className="flex flex-col items-center">
              {/* Circular Image with pulse animation */}
              <div 
                className="w-28 h-28 rounded-full overflow-hidden border-2 border-ogclan mb-4 shadow-[0_0_10px_rgba(212,175,55,0.4)] animate-pulse-slow"
                style={avatarStyles}
              >
                <img 
                  src={soldier.imageUrl} 
                  alt={`${soldier.name} - ${soldier.role}`}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              
              {/* Name with military font style */}
              <h3 className="text-xl font-bold text-ogclan mb-1 animate-glow tracking-wider">{soldier.name}</h3>
              
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
            
            {/* Quick Stats for Mobile (Animated) */}
            {showQuickStats && (
              <div 
                className="absolute inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 animate-[fade-in_0.3s_ease-out]"
                style={{
                  background: "linear-gradient(180deg, rgba(0,0,0,0.85) 0%, rgba(10,30,0,0.9) 100%)"
                }}
              >
                <QuickStats />
              </div>
            )}
          </CardContent>
          
          <CardFooter className="flex justify-center p-2 bg-ogclan/10 border-t border-ogclan/20">
            <a 
              href={soldier.tiktokUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-ogclan hover:text-ogclan-light transition-colors"
              aria-label={`Follow ${soldier.name} on TikTok`}
              onClick={(e) => e.stopPropagation()}
            >
              {/* TikTok Icon */}
              <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M19.589 6.686a4.793 4.793 0 0 1-3.77-4.245V2h-3.445v13.672a2.896 2.896 0 0 1-5.201 1.743l-.002-.001.002.001a2.895 2.895 0 0 1 3.183-4.51v-3.5a6.329 6.329 0 0 0-5.394 10.692 6.33 6.33 0 0 0 10.857-4.424V8.687a8.182 8.182 0 0 0 4.773 1.526V6.79a4.831 4.831 0 0 1-1.003-.104z"></path>
              </svg>
              <span>Follow on TikTok</span>
              <ExternalLink size={14} />
            </a>
          </CardFooter>

          {/* Tap hint for mobile */}
          <div className="absolute top-2 right-2 text-xs text-ogclan/60 bg-black/50 px-2 py-1 rounded-full animate-pulse">
            Tap for stats
          </div>
        </div>
      </Card>
    </div>
  ) : (
    <div style={animationStyles}>
      <HoverCard>
        <HoverCardTrigger asChild>
          <Card
            className="overflow-hidden transition-all duration-500 border-ogclan/30 bg-black/90 h-full cursor-pointer"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            style={{
              ...hoverStyles,
              background: "linear-gradient(180deg, rgba(0,0,0,0.95) 0%, rgba(10,40,0,0.85) 100%)"
            }}
          >
            <div className="relative">
              {/* Animated Scanner Line */}
              <div className="scanner-line"></div>
              
              <CardContent className="p-4">
                <div className="flex flex-col items-center">
                  {/* Circular Image */}
                  <div 
                    className="w-32 h-32 rounded-full overflow-hidden border-2 border-ogclan mb-4 shadow-[0_0_10px_rgba(212,175,55,0.4)]"
                    style={{
                      ...avatarStyles,
                      boxShadow: isHovered ? '0 0 20px rgba(212,175,55,0.6)' : '0 0 10px rgba(212,175,55,0.4)',
                      transition: 'transform 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275), opacity 0.6s ease, box-shadow 0.3s ease'
                    }}
                  >
                    <img 
                      src={soldier.imageUrl} 
                      alt={`${soldier.name} - ${soldier.role}`}
                      className={`w-full h-full object-cover transition-transform duration-700 ${isHovered ? 'scale-110' : 'scale-100'}`}
                      loading="lazy"
                    />
                  </div>
                  
                  {/* Name with military font style */}
                  <h3 className="text-xl font-bold text-ogclan mb-1 tracking-wider animate-text-glow">{soldier.name}</h3>
                  
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
                
                {/* Stats overlay that slides up on hover */}
                <div 
                  className="absolute left-0 right-0 bottom-0 bg-black/80 backdrop-blur-sm p-4 transform transition-transform duration-300"
                  style={{
                    transform: isHovered ? 'translateY(0)' : 'translateY(100%)',
                    background: "linear-gradient(0deg, rgba(0,0,0,0.9) 0%, rgba(10,30,0,0.85) 100%)"
                  }}
                >
                  <QuickStats />
                </div>
              </CardContent>
              
              <CardFooter className="flex justify-center p-2 bg-ogclan/10 border-t border-ogclan/20 relative z-10">
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
              
              {/* Hover hint */}
              <div 
                className="absolute top-2 right-2 text-xs text-ogclan/60 bg-black/50 px-2 py-1 rounded-full transition-opacity duration-200"
                style={{ opacity: isHovered ? 0 : 0.6 }}
              >
                Hover for stats
              </div>
            </div>
          </Card>
        </HoverCardTrigger>
        
        <HoverCardContent className="w-64 border-ogclan/30 bg-black/90">
          <QuickStats />
        </HoverCardContent>
      </HoverCard>
    </div>
  );
};

export default SoldierCard;
