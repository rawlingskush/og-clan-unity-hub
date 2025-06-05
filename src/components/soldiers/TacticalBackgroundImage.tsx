
import React from 'react';
import EnhancedImage from '@/components/ui/enhanced-image';

interface TacticalBackgroundImageProps {
  className?: string;
}

const TacticalBackgroundImage = ({ className = "" }: TacticalBackgroundImageProps) => {
  return (
    <div className={`absolute inset-0 overflow-hidden ${className}`}>
      {/* Enhanced red tactical scene background with improved visibility */}
      <div className="absolute inset-0 opacity-40">
        <EnhancedImage
          src="/lovable-uploads/0c704830-7af8-461b-8087-f18ad958ea7a.png"
          alt="Tactical Combat Scene"
          className="w-full h-full object-cover"
          objectFit="cover"
          loading="eager"
        />
      </div>
      
      {/* Enhanced tactical duo with better positioning */}
      <div className="absolute bottom-0 right-0 w-2/3 h-4/5 opacity-50 hidden lg:block">
        <EnhancedImage
          src="/lovable-uploads/663adc16-1686-4cd2-ad80-6543f489a16e.png"
          alt="Tactical Operators"
          className="w-full h-full object-cover object-right-bottom"
          objectFit="cover"
          loading="eager"
        />
      </div>

      {/* Dynamic gradient overlays for depth */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/30 to-black/70"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-black/40"></div>
      <div className="absolute inset-0 bg-gradient-to-br from-ogclan/5 via-transparent to-red-900/10"></div>
      
      {/* Enhanced animated tactical grid with multiple layers */}
      <div 
        className="absolute inset-0 opacity-20 animate-pulse"
        style={{ 
          backgroundImage: `
            linear-gradient(rgba(212, 175, 55, 0.4) 1px, transparent 1px),
            linear-gradient(90deg, rgba(212, 175, 55, 0.4) 1px, transparent 1px)
          `,
          backgroundSize: '80px 80px',
          animationDuration: '4s'
        }}
      />
      
      {/* Secondary grid for layered effect */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{ 
          backgroundImage: `
            linear-gradient(rgba(212, 175, 55, 0.6) 0.5px, transparent 0.5px),
            linear-gradient(90deg, rgba(212, 175, 55, 0.6) 0.5px, transparent 0.5px)
          `,
          backgroundSize: '20px 20px'
        }}
      />
      
      {/* Enhanced scanning effects with multiple layers */}
      <div className="absolute inset-0">
        {/* Top scanning line */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-ogclan/80 to-transparent animate-pulse">
          <div className="absolute top-0 left-0 w-1/3 h-full bg-gradient-to-r from-transparent via-ogclan to-transparent animate-[slide-in-right_8s_linear_infinite]"></div>
        </div>
        
        {/* Bottom scanning line */}
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-ogclan/80 to-transparent animate-pulse" style={{ animationDelay: '2s' }}>
          <div className="absolute bottom-0 right-0 w-1/3 h-full bg-gradient-to-l from-transparent via-ogclan to-transparent animate-[slide-out-right_6s_linear_infinite]"></div>
        </div>
        
        {/* Vertical scanning lines */}
        <div className="absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-transparent via-ogclan/60 to-transparent animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute right-0 top-0 w-1 h-full bg-gradient-to-b from-transparent via-ogclan/60 to-transparent animate-pulse" style={{ animationDelay: '3s' }}></div>
      </div>
      
      {/* Dynamic particle effects */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Floating tactical indicators */}
        <div className="absolute top-1/4 left-1/6 w-2 h-2 bg-ogclan/60 rounded-full animate-ping" style={{ animationDelay: '0s', animationDuration: '3s' }}></div>
        <div className="absolute top-2/3 right-1/4 w-1.5 h-1.5 bg-red-400/50 rounded-full animate-ping" style={{ animationDelay: '1.5s', animationDuration: '4s' }}></div>
        <div className="absolute bottom-1/3 left-1/3 w-1 h-1 bg-blue-400/40 rounded-full animate-ping" style={{ animationDelay: '2.5s', animationDuration: '5s' }}></div>
        <div className="absolute top-1/2 right-1/6 w-1.5 h-1.5 bg-ogclan/40 rounded-full animate-ping" style={{ animationDelay: '4s', animationDuration: '3.5s' }}></div>
        
        {/* Moving light streaks */}
        <div className="absolute top-1/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-ogclan/30 to-transparent">
          <div className="absolute top-0 w-20 h-px bg-gradient-to-r from-transparent via-ogclan/80 to-transparent animate-[slide-in-right_12s_linear_infinite]"></div>
        </div>
        <div className="absolute bottom-1/3 right-0 w-full h-px bg-gradient-to-l from-transparent via-red-400/20 to-transparent">
          <div className="absolute top-0 right-0 w-16 h-px bg-gradient-to-l from-transparent via-red-400/60 to-transparent animate-[slide-out-right_10s_linear_infinite]"></div>
        </div>
      </div>
      
      {/* Enhanced corner tactical elements */}
      <div className="absolute top-4 left-4 w-8 h-8 border-l-2 border-t-2 border-ogclan/50 opacity-60 animate-pulse"></div>
      <div className="absolute top-4 right-4 w-8 h-8 border-r-2 border-t-2 border-ogclan/50 opacity-60 animate-pulse" style={{ animationDelay: '1s' }}></div>
      <div className="absolute bottom-4 left-4 w-8 h-8 border-l-2 border-b-2 border-ogclan/50 opacity-60 animate-pulse" style={{ animationDelay: '2s' }}></div>
      <div className="absolute bottom-4 right-4 w-8 h-8 border-r-2 border-b-2 border-ogclan/50 opacity-60 animate-pulse" style={{ animationDelay: '3s' }}></div>
      
      {/* Subtle holographic overlay effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-ogclan/5 via-transparent to-transparent opacity-30 animate-pulse" style={{ animationDuration: '6s' }}></div>
    </div>
  );
};

export default TacticalBackgroundImage;
