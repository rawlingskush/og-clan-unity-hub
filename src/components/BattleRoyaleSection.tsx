
import React from 'react';
import AnimatedContent from './AnimatedContent';
import { ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';

const BattleRoyaleSection = () => {
  const handleJoinFightClick = () => {
    // Scroll to the join section
    const joinSection = document.getElementById('join');
    if (joinSection) {
      joinSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="battle-royale" className="relative py-20 overflow-hidden">
      {/* Background image with overlay */}
      <div 
        className="absolute inset-0 z-0 bg-black"
        style={{
          backgroundImage: 'url(/lovable-uploads/45ffa98e-e5e3-4e69-aa01-40bec47f9d28.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          opacity: 0.5,
        }}
      />
      
      {/* Dark gradient overlay for better text readability */}
      <div className="absolute inset-0 z-0 bg-gradient-to-r from-black/90 via-black/70 to-black/90" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="text-center lg:text-left">
            <AnimatedContent animation="fade-in-up">
              <h2 className="text-5xl md:text-6xl font-bold text-gradient-gold mb-6">
                Multiplayer Mayhem & Battle Royale Glory
              </h2>
              
              <p className="text-xl text-white leading-relaxed mb-8 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
                OG Clan thrives in the chaos of multiplayer showdowns and the thrill of Battle Royale. 
                From squad-based firefights to last-man-standing victories, we dominate every lobby. 
                Ready to drop in and fight with Cameroon's best? Join the action!
              </p>
              
              <button 
                onClick={handleJoinFightClick}
                className={cn(
                  "group relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold",
                  "bg-gradient-to-r from-red-600 to-blue-600 text-white rounded-md",
                  "hover:from-red-500 hover:to-blue-500 transition-all duration-300",
                  "shadow-[0_0_15px_rgba(239,68,68,0.4)] hover:shadow-[0_0_25px_rgba(239,68,68,0.6)]",
                  "overflow-hidden"
                )}
              >
                <span className="relative z-10 flex items-center">
                  Join the Fight
                  <ArrowRight className="ml-2 h-5 w-5 transform transition-transform duration-300 group-hover:translate-x-1" />
                </span>
                {/* Animated glow effect */}
                <span className="absolute inset-0 bg-gradient-to-r from-red-600/20 via-purple-500/20 to-blue-600/20 animate-pulse-slow"></span>
                {/* Animated corner accent */}
                <span className="absolute -top-1 -right-1 w-8 h-8 border-t-2 border-r-2 border-white/30"></span>
                <span className="absolute -bottom-1 -left-1 w-8 h-8 border-b-2 border-l-2 border-white/30"></span>
              </button>
            </AnimatedContent>
          </div>
          
          <div className="hidden lg:block">
            <AnimatedContent animation="slide-in-right">
              <div className="image-frame relative h-[400px] overflow-hidden">
                <img 
                  src="/lovable-uploads/45ffa98e-e5e3-4e69-aa01-40bec47f9d28.png" 
                  alt="OG Clan Battle Royale" 
                  className="absolute inset-0 w-full h-full object-cover rounded-lg transform hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-red-600/20 to-blue-600/20"></div>
                {/* Tech corner accents for gaming feel */}
                <div className="absolute top-0 left-0 w-12 h-12 border-t-2 border-l-2 border-ogclan"></div>
                <div className="absolute bottom-0 right-0 w-12 h-12 border-b-2 border-r-2 border-ogclan"></div>
              </div>
            </AnimatedContent>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BattleRoyaleSection;
