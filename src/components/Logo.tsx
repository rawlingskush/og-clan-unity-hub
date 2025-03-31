
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
  // Increased size classes by ~20% for better visibility
  const sizeClasses = {
    sm: 'w-12 h-12', // Increased from w-10 h-10
    md: 'w-20 h-20', // Increased from w-16 h-16
    lg: 'w-28 h-28', // Increased from w-24 h-24
    xl: 'w-36 h-36'  // Increased from w-32 h-32
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
        <span className="ml-3 font-bold text-gradient-gold">
          OG Clan
        </span>
      )}
    </div>
  );
};

export default Logo;
