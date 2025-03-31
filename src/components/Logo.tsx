
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
  const sizeClasses = {
    sm: 'w-10 h-10',
    md: 'w-16 h-16', // Increased from w-14 h-14
    lg: 'w-24 h-24', // Increased from w-20 h-20
    xl: 'w-32 h-32'
  };

  return (
    <div className={cn('flex items-center', className)}>
      <div className={cn(
        sizeClasses[size],
        'rounded-lg flex items-center justify-center relative overflow-hidden'
      )}>
        <img 
          src={variant === 'primary' 
            ? "/lovable-uploads/6c05815f-b567-49f6-94d3-be587bc340e9.png"
            : "/lovable-uploads/9d40ac01-6aa4-4626-aaa9-cd051a54ca6c.png"} 
          alt="OG Clan Logo" 
          className="w-full h-full object-contain drop-shadow-gold"
        />
      </div>
      
      {withText && (
        <span className="ml-3 font-bold text-gradient-gold">
          OG Clan
        </span>
      )}
    </div>
  );
};

export default Logo;
