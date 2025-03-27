
import React from 'react';
import { cn } from '@/lib/utils';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  withText?: boolean;
}

const Logo = ({ className, size = 'md', withText = true }: LogoProps) => {
  const sizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-10 h-10',
    lg: 'w-14 h-14'
  };

  return (
    <div className={cn('flex items-center', className)}>
      <div className={cn(
        sizeClasses[size],
        'rounded-lg bg-gradient-to-br from-ogclan-dark via-ogclan to-ogclan-light flex items-center justify-center relative overflow-hidden shadow-md'
      )}>
        <div className="absolute inset-0 bg-black/10"></div>
        <span className="font-bold text-black relative z-10">OG</span>
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
