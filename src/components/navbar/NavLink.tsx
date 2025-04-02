
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
        "relative px-3 py-2 transition-all duration-300 text-white font-medium hover:text-black"
      )}
    >
      <span className="relative z-10">{label}</span>
      
      {/* Cool hover background effect */}
      <span className="absolute inset-0 z-0 bg-ogclan opacity-0 transition-opacity duration-300 hover:opacity-100"></span>
    </NavigationMenuLink>
  );
};

export default NavLink;
