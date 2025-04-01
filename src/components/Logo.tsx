
import React from 'react';
import { cn } from '@/lib/utils';
import { Sparkles } from 'lucide-react';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  withText?: boolean;
  variant?: 'primary' | 'secondary';
}

const Logo = ({ 
  className, 
  size = 'md', 
  withText = true, 
  variant = 'primary' 
}: LogoProps) => {
  // Size classes with visual effects
  const sizeClasses = {
    sm: 'w-24 h-24',
    md: 'w-36 h-36',
    lg: 'w-48 h-48',
    xl: 'w-64 h-64'
  };

  return (
    <div className={cn('flex items-center group', className)}>
      <div className={cn(
        sizeClasses[size],
        'rounded-lg flex items-center justify-center relative overflow-hidden shadow-lg',
        'transition-all duration-500 hover:shadow-[0_0_25px_rgba(212,175,55,0.5)]'
      )}>
        {/* Enhanced background effects */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/40 to-transparent z-0"></div>
        
        {/* Improved animation glow effect with stronger blink */}
        <div className="absolute inset-0 bg-gradient-to-r from-ogclan-dark/40 via-transparent to-ogclan-light/40 animate-blink z-0 opacity-30 group-hover:opacity-100 transition-opacity duration-700"></div>
        
        {/* Animated border effect with stronger visibility */}
        <div className="absolute inset-0 border-2 border-ogclan/30 group-hover:border-ogclan/90 transition-all duration-700 z-20 animate-pulse-slow"></div>
        
        {/* Enhanced image with stronger pulse animation */}
        <img 
          src="/lovable-uploads/121c8bf6-df5d-4619-8e8d-6ade33a6f709.png" 
          alt="OG Clan Logo" 
          className="w-full h-full object-contain drop-shadow-gold z-10 scale-110 animate-glow"
        />
        
        {/* Corner accent effects with improved visibility */}
        <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-ogclan/90 opacity-50 group-hover:opacity-100 transition-opacity duration-500 z-30 animate-blink"></div>
        <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-ogclan/90 opacity-50 group-hover:opacity-100 transition-opacity duration-500 z-30 animate-blink animation-delay-300"></div>
        <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-ogclan/90 opacity-50 group-hover:opacity-100 transition-opacity duration-500 z-30 animate-blink animation-delay-600"></div>
        <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-ogclan/90 opacity-50 group-hover:opacity-100 transition-opacity duration-500 z-30 animate-blink animation-delay-900"></div>
      </div>
      
      {withText && (
        <div className="ml-5 flex items-center">
          <span className="font-bold text-3xl bg-gradient-to-r from-ogclan-dark via-ogclan to-ogclan-light bg-clip-text text-transparent drop-shadow-gold group-hover:drop-shadow-gold-lg transition-all duration-300">
            OG Clan
          </span>
          <Sparkles className="w-5 h-5 text-ogclan ml-1 animate-blink" />
        </div>
      )}
    </div>
  );
};

export default Logo;
