
import React from 'react';
import { cn } from '@/lib/utils';

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
  // Size classes with increased sizes for better visibility
  const sizeClasses = {
    sm: 'w-14 h-14',  // Increased size for navigation
    md: 'w-20 h-20',  // Increased standard size
    lg: 'w-28 h-28',  // Increased larger presentation
    xl: 'w-36 h-36'   // Increased extra large for hero sections
  };

  return (
    <div className={cn('flex items-center', className)}>
      <div className={cn(
        sizeClasses[size],
        'rounded-lg flex items-center justify-center relative overflow-hidden shadow-lg'
      )}>
        <div className="absolute inset-0 bg-gradient-to-br from-black/40 to-transparent z-0"></div>
        <img 
          src="/lovable-uploads/121c8bf6-df5d-4619-8e8d-6ade33a6f709.png" 
          alt="OG Clan Logo" 
          className="w-full h-full object-contain drop-shadow-gold z-10 scale-110 animate-pulse-fast"
        />
      </div>
      
      {withText && (
        <span className="ml-5 font-bold text-3xl text-gradient-gold drop-shadow-gold">
          OG Clan
        </span>
      )}
    </div>
  );
};

export default Logo;
