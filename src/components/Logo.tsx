
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
  // Increased size classes significantly for better visibility
  const sizeClasses = {
    sm: 'w-16 h-16', // Increased from w-12 h-12
    md: 'w-28 h-28', // Increased from w-20 h-20
    lg: 'w-36 h-36', // Increased from w-28 h-28
    xl: 'w-48 h-48'  // Increased from w-36 h-36
  };

  return (
    <div className={cn('flex items-center', className)}>
      <div className={cn(
        sizeClasses[size],
        'rounded-lg flex items-center justify-center relative overflow-hidden'
      )}>
        <img 
          src="/lovable-uploads/121c8bf6-df5d-4619-8e8d-6ade33a6f709.png" 
          alt="OG Clan Logo" 
          className="w-full h-full object-contain drop-shadow-gold"
        />
      </div>
      
      {withText && (
        <span className="ml-4 font-bold text-2xl text-gradient-gold">
          OG Clan
        </span>
      )}
    </div>
  );
};

export default Logo;
