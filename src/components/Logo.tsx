
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
  // Size classes with more appropriate sizes
  const sizeClasses = {
    sm: 'w-10 h-10',  // Reduced size for navigation
    md: 'w-16 h-16',  // Standard size
    lg: 'w-24 h-24',  // Larger presentation
    xl: 'w-32 h-32'   // Extra large for hero sections
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
          className="w-full h-full object-contain drop-shadow-gold z-10 scale-110"
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
