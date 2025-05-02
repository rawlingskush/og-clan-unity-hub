
import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Soldier } from "@/types/soldier";
import { ExternalLink, Shield, Crosshair, User, Sword, Map } from "lucide-react";
import { cn } from "@/lib/utils";
import { HoverCard, HoverCardTrigger, HoverCardContent } from "@/components/ui/hover-card";
import AnimatedContent from "@/components/AnimatedContent";
import { useIsMobile } from "@/hooks/use-mobile";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

interface SoldierCardProps {
  soldier: Soldier;
}

const SoldierCard = ({ soldier }: SoldierCardProps) => {
  const isMobile = useIsMobile();
  const [showQuickStats, setShowQuickStats] = useState(false);
  const [sparkParticles, setSparkParticles] = useState<Array<{id: number, x: number, y: number, size: number, opacity: number}>>([]);
  const [favoriteMap, setFavoriteMap] = useState<string>('');
  
  // Generate random favorite map on component mount
  useEffect(() => {
    const maps = ["ISOLATED", "BLACKOUT", "ALCATRAZ"];
    const randomMap = maps[Math.floor(Math.random() * maps.length)];
    setFavoriteMap(randomMap);
  }, []);

  // Special effect for BOTGIRL - generate random spark particles on hover
  useEffect(() => {
    if (soldier.spotlight && sparkParticles.length > 0) {
      const timer = setInterval(() => {
        setSparkParticles(prev => 
          prev.map(particle => ({
            ...particle,
            y: particle.y - 1,
            opacity: particle.opacity - 0.02,
            size: particle.size * 0.98
          })).filter(p => p.opacity > 0)
        );
      }, 50);
      
      return () => clearInterval(timer);
    }
  }, [sparkParticles, soldier.spotlight]);

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
      "FENNEC": "bg-red-600 hover:bg-red-700",
      "MAC-10": "bg-yellow-600 hover:bg-yellow-700",
      
      // Snipers - green
      "XPR-50": "bg-green-600 hover:bg-green-700",
      
      // ARs - blue
      "Kilo 141": "bg-blue-600 hover:bg-blue-700",
      "AK117": "bg-blue-600 hover:bg-blue-700" // Added AK117 as blue (AR)
    };
    
    return weaponColors[weapon] || "bg-ogclan hover:bg-ogclan-dark";
  };
  
  const getWeaponIcon = (weapon: string) => {
    if (weapon === "XPR-50" || weapon === "DLQ33") return <Crosshair className="h-4 w-4 mr-1" />;
    if (weapon === "AK117" || weapon === "Kilo 141") return <Sword className="h-4 w-4 mr-1" />; // AR icon
    return <Sword className="h-4 w-4 mr-1" />;
  };
  
  const getRoleIcon = (role: string) => {
    if (role.includes("🛡️")) return <Shield className="h-4 w-4 mr-1" />;
    if (role.includes("🎯")) return <Crosshair className="h-4 w-4 mr-1" />;
    if (role.toLowerCase().includes("breach")) return <User className="h-4 w-4 mr-1" />;
    if (role.toLowerCase().includes("guard") || role.toLowerCase().includes("shield")) return <Shield className="h-4 w-4 mr-1" />;
    if (role.toLowerCase().includes("recon") || role.toLowerCase().includes("precision") || role.toLowerCase().includes("sniper")) return <Crosshair className="h-4 w-4 mr-1" />;
    return <Sword className="h-4 w-4 mr-1" />;
  };
  
  // Quick stats for hover card
  const getQuickStats = (id: string) => {
    // These would ideally come from a database, but we're hardcoding for now
    const stats = {
      kush: { winRate: "72%", favMap: favoriteMap, kd: "4.2" },
      exodus: { winRate: "68%", favMap: favoriteMap, kd: "3.8" },
      wizard: { winRate: "75%", favMap: favoriteMap, kd: "4.5" },
      mufasa: { winRate: "70%", favMap: favoriteMap, kd: "3.5" },
      dhamer: { winRate: "65%", favMap: favoriteMap, kd: "3.2" },
      gamehouse: { winRate: "66%", favMap: favoriteMap, kd: "3.9" },
      damage: { winRate: "71%", favMap: favoriteMap, kd: "4.1" },
      "23": { winRate: "74%", favMap: favoriteMap, kd: "4.3" },
      esquare: { winRate: "67%", favMap: favoriteMap, kd: "3.7" },
      pato: { winRate: "73%", favMap: favoriteMap, kd: "4.8" },
      chambas: { winRate: "76%", favMap: favoriteMap, kd: "4.4" },
      uncleB: { winRate: "69%", favMap: favoriteMap, kd: "4.0" },
      botgirl: { winRate: "78%", favMap: favoriteMap, kd: "4.6" },
      dna: { winRate: "77%", favMap: favoriteMap, kd: "5.2" },
      ded: { winRate: "72%", favMap: favoriteMap, kd: "4.3" },
      venom: { winRate: "70%", favMap: favoriteMap, kd: "3.9" },
      blacksavage: { winRate: "73%", favMap: favoriteMap, kd: "4.7" },
    };
    
    // Default stats if ID not found
    return stats[id.toLowerCase() as keyof typeof stats] || { winRate: "70%", favMap: favoriteMap, kd: "4.0" };
  };
  
  const stats = getQuickStats(soldier.id);
  const accentColor = getWeaponBadgeColor(soldier.weapon).split(' ')[0]; // Get just the base color

  // Function to toggle quick stats on mobile
  const toggleQuickStats = () => {
    if (isMobile) {
      setShowQuickStats(prev => !prev);
    }
  };

  // Function to generate spark particles for BOTGIRL
  const generateSparkParticles = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!soldier.spotlight) return;
    
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const newParticles = Array.from({ length: 5 }, (_, i) => ({
      id: Date.now() + i,
      x: x + (Math.random() * 40 - 20),
      y: y + (Math.random() * 40 - 20),
      size: 3 + Math.random() * 2,
      opacity: 0.8 + Math.random() * 0.2
    }));
    
    setSparkParticles(prev => [...prev, ...newParticles]);
  };

  // Quick stats component
  const QuickStats = () => (
    <div className="space-y-2">
      <h4 className="text-sm font-semibold text-ogclan">Quick Stats</h4>
      <div className="grid grid-cols-2 gap-1 text-xs">
        <div className="text-ogclan-muted">Win Rate</div>
        <div className="text-right font-semibold text-ogclan-light">{stats.winRate}</div>
        
        <div className="text-ogclan-muted">Favorite Map</div>
        <div className="text-right font-semibold text-ogclan-light flex items-center justify-end gap-1">
          <Map className="h-3 w-3" />
          {stats.favMap}
        </div>
        
        <div className="text-ogclan-muted">K/D Ratio</div>
        <div className="text-right font-semibold text-ogclan-light">{stats.kd}</div>
      </div>
    </div>
  );

  return isMobile ? (
    <AnimatedContent animation="fade-in-up" delay={200}>
      <Card 
        className={`overflow-hidden transition-all duration-300 border-ogclan/30 hover:border-ogclan/70 bg-black h-full relative ${
          showQuickStats ? 'quick-stats-active' : ''
        } ${soldier.spotlight ? 'spotlight-card' : ''}`}
        onClick={toggleQuickStats}
        onMouseMove={generateSparkParticles}
        onTouchMove={(e) => {
          // Convert touch event to mouse event for sparkles
          if (soldier.spotlight) {
            const touch = e.touches[0];
            const rect = e.currentTarget.getBoundingClientRect();
            const x = touch.clientX - rect.left;
            const y = touch.clientY - rect.top;
            
            const newParticles = Array.from({ length: 3 }, (_, i) => ({
              id: Date.now() + i,
              x: x + (Math.random() * 30 - 15),
              y: y + (Math.random() * 30 - 15),
              size: 2 + Math.random() * 2,
              opacity: 0.7 + Math.random() * 0.3
            }));
            
            setSparkParticles(prev => [...prev, ...newParticles]);
          }
        }}
      >
        <div className="relative">
          {/* Animated Scanner Line */}
          <div className="scanner-line"></div>

          {/* Spark particles for special card */}
          {soldier.spotlight && sparkParticles.map(particle => (
            <div 
              key={particle.id}
              className="absolute rounded-full bg-ogclan z-10 pointer-events-none"
              style={{
                left: `${particle.x}px`,
                top: `${particle.y}px`,
                width: `${particle.size}px`,
                height: `${particle.size}px`,
                opacity: particle.opacity,
                boxShadow: '0 0 8px rgba(212,175,55,0.8)'
              }}
            />
          ))}

          <CardContent className="p-4 relative">
            <div className="flex flex-col items-center">
              {/* Circular Image with pulse animation */}
              <div className={`w-28 h-28 rounded-full overflow-hidden border-2 mb-4 ${
                soldier.spotlight 
                  ? 'border-ogclan shadow-[0_0_15px_rgba(212,175,55,0.7)] animate-glow-pulse' 
                  : 'border-ogclan shadow-[0_0_10px_rgba(212,175,55,0.4)] animate-pulse-slow'
              }`}>
                <img 
                  src={soldier.imageUrl} 
                  alt={`${soldier.name} - ${soldier.role}`}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              
              {/* Name with military font style */}
              <h3 className={`text-xl font-bold mb-1 tracking-wider ${
                soldier.spotlight ? 'text-gradient-gold animate-glow' : 'text-ogclan'
              }`}>{soldier.name}</h3>
              
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

              {/* Favorite Map Badge */}
              <Badge 
                className="mb-2 bg-black/60 text-ogclan border border-ogclan/30 flex items-center gap-1"
                variant="outline"
              >
                <Map className="h-3 w-3" />
                Favorite Map: {stats.favMap}
              </Badge>
            </div>
            
            {/* Quick Stats for Mobile (Animated) */}
            {showQuickStats && (
              <div 
                className="absolute inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 animate-[fade-in_0.3s_ease-out]"
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
    </AnimatedContent>
  ) : (
    <HoverCard>
      <HoverCardTrigger asChild>
        <AnimatedContent animation="fade-in-up" delay={200}>
          <Card 
            className={`overflow-hidden transition-all duration-300 hover:translate-y-[-5px] hover:scale-105 border-ogclan/30 hover:border-ogclan/70 hover:shadow-[0_0_15px_${accentColor.replace('bg-', 'rgba(')},0.3)] bg-black h-full ${
              soldier.spotlight ? 'spotlight-card' : ''
            }`}
            onMouseMove={generateSparkParticles}
          >
            <div className="relative">
              {/* Animated Scanner Line */}
              <div className="scanner-line"></div>
              
              {/* Spark particles for special card */}
              {soldier.spotlight && sparkParticles.map(particle => (
                <div 
                  key={particle.id}
                  className="absolute rounded-full bg-ogclan z-10 pointer-events-none"
                  style={{
                    left: `${particle.x}px`,
                    top: `${particle.y}px`,
                    width: `${particle.size}px`,
                    height: `${particle.size}px`,
                    opacity: particle.opacity,
                    boxShadow: '0 0 8px rgba(212,175,55,0.8)'
                  }}
                />
              ))}
              
              <CardContent className="p-4">
                <div className="flex flex-col items-center">
                  {/* Circular Image */}
                  <div className={`w-32 h-32 rounded-full overflow-hidden border-2 mb-4 ${
                    soldier.spotlight 
                      ? 'border-ogclan shadow-[0_0_15px_rgba(212,175,55,0.7)] animate-glow-pulse' 
                      : 'border-ogclan shadow-[0_0_10px_rgba(212,175,55,0.4)]'
                  }`}>
                    <img 
                      src={soldier.imageUrl} 
                      alt={`${soldier.name} - ${soldier.role}`}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  
                  {/* Name with military font style */}
                  <h3 className={`text-xl font-bold mb-1 tracking-wider ${
                    soldier.spotlight ? 'text-gradient-gold animate-glow' : 'text-ogclan'
                  }`}>{soldier.name}</h3>
                  
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

                  {/* Favorite Map Badge */}
                  <Badge 
                    className="mb-2 bg-black/60 text-ogclan border border-ogclan/30 flex items-center gap-1"
                    variant="outline"
                  >
                    <Map className="h-3 w-3" />
                    Favorite Map: {stats.favMap}
                  </Badge>
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
            </div>
          </Card>
        </AnimatedContent>
      </HoverCardTrigger>
      
      <HoverCardContent className="w-64 border-ogclan/30">
        <QuickStats />
      </HoverCardContent>
    </HoverCard>
  );
};

export default SoldierCard;
