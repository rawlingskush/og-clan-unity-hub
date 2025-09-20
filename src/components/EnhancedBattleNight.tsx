import React from 'react';
import AnimatedContent from './AnimatedContent';
import HighlightsSection from './HighlightsSection';
import { Calendar, Clock, Users, Zap, Trophy, MapPin } from 'lucide-react';

const EnhancedBattleNight = () => {
  // Calculate time until next Battle Night (assuming Fridays at 9 PM GMT+1)
  const getNextBattleNight = () => {
    const now = new Date();
    const nextFriday = new Date();
    nextFriday.setDate(now.getDate() + (5 - now.getDay() + 7) % 7);
    nextFriday.setHours(21, 0, 0, 0); // 9 PM
    
    if (now.getDay() === 5 && now.getHours() < 21) {
      // If it's Friday and before 9 PM, use today
      nextFriday.setDate(now.getDate());
    }
    
    return nextFriday;
  };
  
  const [timeUntil, setTimeUntil] = React.useState('');
  
  React.useEffect(() => {
    const updateCountdown = () => {
      const nextBattle = getNextBattleNight();
      const now = new Date();
      const diff = nextBattle.getTime() - now.getTime();
      
      if (diff > 0) {
        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        
        if (days > 0) {
          setTimeUntil(`${days}d ${hours}h ${minutes}m`);
        } else {
          setTimeUntil(`${hours}h ${minutes}m`);
        }
      } else {
        setTimeUntil('Battle In Progress!');
      }
    };
    
    updateCountdown();
    const interval = setInterval(updateCountdown, 60000); // Update every minute
    
    return () => clearInterval(interval);
  }, []);
  
  const recentHighlights = [
    { map: 'Blackout', mode: 'Battle Royale', result: 'Victory', players: 4 },
    { map: 'Alcatraz', mode: 'Battle Royale', result: 'Victory', players: 4 },
    { map: 'Isolated', mode: 'Battle Royale', result: '2nd Place', players: 4 },
  ];
  
  return (
    <section id="og-battle-night" className="py-14 md:py-16 bg-gradient-to-b from-black to-black/95 relative overflow-hidden">
      {/* Enhanced background with tactical elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('/lovable-uploads/868831b3-078e-4cf4-b395-e9bfb9ec5c6f.png')] bg-cover bg-center opacity-10 mix-blend-overlay"></div>
        
        {/* Animated tactical grid */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-ogclan/30 to-transparent"></div>
          <div className="absolute top-0 left-0 h-full w-px bg-gradient-to-b from-transparent via-ogclan/30 to-transparent"></div>
          <div className="absolute top-0 right-0 h-full w-px bg-gradient-to-b from-transparent via-ogclan/30 to-transparent"></div>
          <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-ogclan/30 to-transparent"></div>
        </div>
        
        {/* Character backgrounds */}
        <div className="absolute top-0 left-0 w-1/3 h-full opacity-15 mix-blend-overlay">
          <div className="absolute inset-0 bg-[url('/lovable-uploads/4aff45e6-a800-4a02-8a26-f5cc53f2c562.png')] bg-cover bg-center bg-no-repeat transform scale-105 hover:scale-110 transition-transform duration-700"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-black/30 to-black/80"></div>
        </div>
        
        <div className="absolute top-0 right-0 w-full h-full bg-[url('/lovable-uploads/04437823-892f-480b-aaf9-a761c381fcef.png')] bg-no-repeat bg-right-top opacity-5 mix-blend-overlay transform scale-75 lg:scale-50 rotate-12"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/90 z-0"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Enhanced header with countdown */}
        <div className="text-center mb-12">
          <AnimatedContent animation="fade-in-up">
            <h2 className="text-5xl md:text-6xl font-bold text-gradient-gold mb-4 animate-glow">
              OG BATTLE NIGHT
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-ogclan-dark via-ogclan to-ogclan-dark mx-auto rounded-full mb-6"></div>
            
            {/* Live countdown */}
            <div className="bg-black/80 backdrop-blur-md border-2 border-ogclan/40 rounded-2xl p-6 max-w-md mx-auto mb-6 hover:border-ogclan/60 transition-all duration-300">
              <div className="flex items-center justify-center gap-2 mb-2">
                <Clock className="w-5 h-5 text-ogclan animate-pulse" />
                <span className="text-ogclan-light font-medium">Next Battle Night</span>
              </div>
              <div className="text-2xl font-bold text-ogclan animate-glow">
                {timeUntil}
              </div>
              <p className="text-sm text-ogclan-muted mt-1">Fridays 9 PM GMT+1</p>
            </div>
            
            <p className="text-xl md:text-2xl text-ogclan-light max-w-3xl mx-auto">
              Weekly Call of Duty Mobile tournaments where legends are born and necks are being pressed.
            </p>
            <p className="text-lg md:text-xl text-ogclan-light max-w-3xl mx-auto mt-4">
              Our Battle Nights are all about multiplayer chaos and Battle Royale glory, dropping into maps like <span className="font-semibold text-ogclan">Alcatraz</span>, <span className="font-semibold text-ogclan">Isolated</span>, <span className="font-semibold text-ogclan">Blackout</span>, and <span className="font-semibold text-ogclan">Krai</span>. Hot drops like <span className="font-semibold text-ogclan">Black Market</span>? We own them.
            </p>
          </AnimatedContent>
        </div>
        
        {/* Recent Battle Highlights */}
        <AnimatedContent animation="fade-in" delay={300}>
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-ogclan text-center mb-8">Latest Battle Results</h3>
            <div className="grid md:grid-cols-3 gap-6">
              {recentHighlights.map((highlight, index) => (
                <div key={index} className="bg-black/60 backdrop-blur-sm border border-ogclan/30 rounded-xl p-6 hover:border-ogclan/60 hover:bg-black/80 transition-all duration-300 group">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-ogclan" />
                      <span className="font-semibold text-ogclan-light">{highlight.map}</span>
                    </div>
                    <div className={`px-3 py-1 rounded-full text-xs font-bold ${
                      highlight.result === 'Victory' 
                        ? 'bg-green-500/20 text-green-400 border border-green-500/30' 
                        : 'bg-orange-500/20 text-orange-400 border border-orange-500/30'
                    }`}>
                      {highlight.result}
                    </div>
                  </div>
                  <p className="text-ogclan-muted text-sm mb-2">{highlight.mode}</p>
                  <div className="flex items-center gap-2 text-ogclan-muted text-sm">
                    <Users className="w-4 h-4" />
                    <span>{highlight.players} Players</span>
                  </div>
                  
                  {/* Animated progress bar for victories */}
                  {highlight.result === 'Victory' && (
                    <div className="mt-3 h-1 bg-ogclan/20 rounded-full overflow-hidden">
                      <div className="h-full bg-ogclan rounded-full animate-pulse group-hover:animate-none" style={{width: '100%'}}></div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </AnimatedContent>
        
        {/* Battle Stats */}
        <AnimatedContent animation="scale-in" delay={600}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            <div className="bg-black/60 backdrop-blur-sm border border-ogclan/30 rounded-xl p-4 text-center hover:border-ogclan/60 transition-all duration-300 hover:scale-105">
              <Trophy className="w-8 h-8 text-ogclan mx-auto mb-2" />
              <div className="text-2xl font-bold text-ogclan">47</div>
              <div className="text-ogclan-muted text-sm">Victories</div>
            </div>
            <div className="bg-black/60 backdrop-blur-sm border border-ogclan/30 rounded-xl p-4 text-center hover:border-ogclan/60 transition-all duration-300 hover:scale-105">
              <Zap className="w-8 h-8 text-ogclan mx-auto mb-2" />
              <div className="text-2xl font-bold text-ogclan">12</div>
              <div className="text-ogclan-muted text-sm">Tournaments</div>
            </div>
            <div className="bg-black/60 backdrop-blur-sm border border-ogclan/30 rounded-xl p-4 text-center hover:border-ogclan/60 transition-all duration-300 hover:scale-105">
              <Users className="w-8 h-8 text-ogclan mx-auto mb-2" />
              <div className="text-2xl font-bold text-ogclan">24</div>
              <div className="text-ogclan-muted text-sm">Active Warriors</div>
            </div>
            <div className="bg-black/60 backdrop-blur-sm border border-ogclan/30 rounded-xl p-4 text-center hover:border-ogclan/60 transition-all duration-300 hover:scale-105">
              <Calendar className="w-8 h-8 text-ogclan mx-auto mb-2" />
              <div className="text-2xl font-bold text-ogclan">2020</div>
              <div className="text-ogclan-muted text-sm">Since</div>
            </div>
          </div>
        </AnimatedContent>
        
        <HighlightsSection />
      </div>
    </section>
  );
};

export default EnhancedBattleNight;