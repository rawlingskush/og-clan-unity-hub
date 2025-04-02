
import React from 'react';
import { cn } from '@/lib/utils';
import {
  NavigationMenuLink,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

interface NavLinkProps {
  id: string;
  label: string;
  activeSection: string;
  handleNavClick: (sectionId: string) => void;
}

const NavLink = ({ id, label, activeSection, handleNavClick }: NavLinkProps) => {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    
    // Special case for Battle Night - scroll to timer
    if (id === 'og-battle-night') {
      handleNavClick('battle-night-timer');
    } else {
      handleNavClick(id);
    }
  };
  
  return (
    <NavigationMenuLink 
      href={`#${id}`}
      onClick={handleClick}
      className={cn(
        navigationMenuTriggerStyle(),
        "relative px-3 py-2 transition-all duration-300 overflow-hidden group",
        activeSection === id 
          ? "text-black font-medium bg-ogclan" 
          : "text-white font-medium hover:text-black"
      )}
    >
      <span className="relative z-10">{label}</span>
      {/* Active background */}
      {activeSection === id && (
        <span className="absolute inset-0 bg-ogclan animate-pulse-slow z-0"></span>
      )}
      
      {/* Hover effect - gaming style */}
      <span className={cn(
        "absolute inset-0 transition-all duration-300 z-0 opacity-0 bg-ogclan",
        "group-hover:opacity-100 transform origin-bottom",
        "before:absolute before:content-[''] before:inset-0 before:bg-gradient-to-t before:from-ogclan-light before:to-ogclan before:opacity-30"
      )}></span>
      
      {/* Top border animation on hover */}
      <span className="absolute top-0 left-0 w-0 h-[2px] bg-ogclan-light group-hover:w-full transition-all duration-300 delay-75"></span>
      
      {/* Bottom border animation on hover */}
      <span className="absolute bottom-0 right-0 w-0 h-[2px] bg-ogclan-light group-hover:w-full transition-all duration-300 delay-75"></span>
    </NavigationMenuLink>
  );
};

export default NavLink;
