
import React from 'react';
import { cn } from '@/lib/utils';

interface NavbarBackgroundProps {
  scrollPosition: number;
  isScrolled: boolean;
  backgroundOpacity: number;
}

const NavbarBackground = ({ scrollPosition, isScrolled, backgroundOpacity }: NavbarBackgroundProps) => {
  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
        isScrolled 
          ? 'py-2 backdrop-blur-md shadow-lg' 
          : 'py-4'
      )}
      style={{
        backgroundColor: `rgba(0, 0, 0, ${backgroundOpacity + 0.2})`,
        borderBottom: isScrolled ? '1px solid rgba(212, 175, 55, 0.15)' : 'none'
      }}
    >
      {/* Children content will be rendered inside */}
    </header>
  );
};

export default NavbarBackground;
