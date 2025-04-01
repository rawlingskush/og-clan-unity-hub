
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
  // Size classes with visual effects, but preserving dimensions
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
        'rounded-lg flex items-center justify-center relative overflow-hidden',
        'transition-all duration-300 hover:shadow-[0_0_15px_rgba(212,175,55,0.3)]'
      )}>
        {/* Background effects */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/40 to-transparent z-0"></div>
        
        {/* Improved animation with less intensity */}
        <div className="absolute inset-0 bg-gradient-to-r from-ogclan-dark/30 via-transparent to-ogclan-light/30 animate-blink z-0 opacity-20 group-hover:opacity-60 transition-opacity duration-700"></div>
        
        {/* Simplified border effect */}
        <div className="absolute inset-0 border border-ogclan/30 group-hover:border-ogclan/60 transition-all duration-500 z-20"></div>
        
        {/* Main logo image with subtle animation */}
        <img 
          src="/lovable-uploads/121c8bf6-df5d-4619-8e8d-6ade33a6f709.png" 
          alt="OG Clan Logo" 
          className="w-full h-full object-contain z-10 scale-100 animate-glow"
        />
        
        {/* Subtle corner accents */}
        <div className="absolute top-0 left-0 w-3 h-3 border-t border-l border-ogclan/70 opacity-50 group-hover:opacity-90 transition-opacity duration-300 z-30"></div>
        <div className="absolute top-0 right-0 w-3 h-3 border-t border-r border-ogclan/70 opacity-50 group-hover:opacity-90 transition-opacity duration-300 z-30 animation-delay-300"></div>
        <div className="absolute bottom-0 left-0 w-3 h-3 border-b border-l border-ogclan/70 opacity-50 group-hover:opacity-90 transition-opacity duration-300 z-30 animation-delay-600"></div>
        <div className="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-ogclan/70 opacity-50 group-hover:opacity-90 transition-opacity duration-300 z-30 animation-delay-900"></div>
      </div>
      
      {withText && (
        <div className="ml-5 flex items-center">
          <span className="font-bold text-3xl text-gradient-gold drop-shadow-sm group-hover:drop-shadow-gold transition-all duration-300">
            OG Clan
          </span>
          <Sparkles className="w-5 h-5 text-ogclan ml-1 opacity-70" />
        </div>
      )}
    </div>
  );
};

export default Logo;
