
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
        "relative px-3 py-2 transition-all duration-300",
        activeSection === id 
          ? "text-ogclan font-medium" 
          : "text-white font-medium hover:text-ogclan"
      )}
    >
      <span className="relative z-10">{label}</span>
      <span className={cn(
        "absolute inset-0 rounded-md -z-0 transition-all duration-300 opacity-0",
        activeSection === id 
          ? "bg-gradient-to-b from-ogclan/20 to-transparent opacity-100" 
          : "hover:opacity-100 hover:bg-gradient-to-b hover:from-ogclan/10 hover:to-transparent"
      )}></span>
    </NavigationMenuLink>
  );
};

export default NavLink;
