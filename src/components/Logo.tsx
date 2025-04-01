
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
  // Size classes with reduced dimensions
  const sizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-10 h-10',
    lg: 'w-14 h-14',
    xl: 'w-20 h-20'
  };

  return (
    <div className={cn('flex items-center group', className)}>
      <div className={cn(
        sizeClasses[size],
        'rounded-lg flex items-center justify-center relative overflow-hidden',
        'transition-all duration-300 hover:shadow-[0_0_10px_rgba(212,175,55,0.2)]'
      )}>
        {/* Background effects */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/40 to-transparent z-0"></div>
        
        {/* Simplified animation with less intensity */}
        <div className="absolute inset-0 bg-gradient-to-r from-ogclan-dark/20 via-transparent to-ogclan-light/20 animate-blink z-0 opacity-20 group-hover:opacity-40 transition-opacity duration-500"></div>
        
        {/* Simplified border effect */}
        <div className="absolute inset-0 border border-ogclan/30 group-hover:border-ogclan/40 transition-all duration-300 z-20"></div>
        
        {/* Zoomed logo image with subtle animation - using object-cover instead of object-contain and adding scale */}
        <div className="w-full h-full overflow-hidden relative">
          <img 
            src="/lovable-uploads/121c8bf6-df5d-4619-8e8d-6ade33a6f709.png" 
            alt="OG Clan Logo" 
            className="w-[120%] h-[120%] object-cover object-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10"
          />
        </div>
        
        {/* Subtle corner accents */}
        <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-ogclan/50 opacity-40 group-hover:opacity-60 transition-opacity duration-300 z-30"></div>
        <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-ogclan/50 opacity-40 group-hover:opacity-60 transition-opacity duration-300 z-30"></div>
        <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-ogclan/50 opacity-40 group-hover:opacity-60 transition-opacity duration-300 z-30"></div>
        <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-ogclan/50 opacity-40 group-hover:opacity-60 transition-opacity duration-300 z-30"></div>
      </div>
      
      {withText && (
        <div className="ml-3 flex items-center">
          <span className="font-bold text-lg text-gradient-gold drop-shadow-sm group-hover:drop-shadow-gold transition-all duration-300">
            OG Clan
          </span>
          <Sparkles className="w-3 h-3 text-ogclan ml-1 opacity-70" />
        </div>
      )}
    </div>
  );
};

export default Logo;
