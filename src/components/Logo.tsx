
import React from 'react';
import { cn } from '@/lib/utils';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  withText?: boolean;
}

const Logo = ({ className, size = 'md', withText = true }: LogoProps) => {
  const sizeClasses = {
    sm: 'w-10 h-10',
    md: 'w-14 h-14',
    lg: 'w-20 h-20'
  };

  return (
    <div className={cn('flex items-center', className)}>
      <div className={cn(
        sizeClasses[size],
        'rounded-lg flex items-center justify-center relative overflow-hidden'
      )}>
        <img 
          src="/lovable-uploads/241d467c-0a24-42c2-8c5d-05228936ef6b.png" 
          alt="OG Clan Logo" 
          className="w-full h-full object-contain"
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
