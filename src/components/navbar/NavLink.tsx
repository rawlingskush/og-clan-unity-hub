
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
        "relative transition-all duration-300",
        activeSection === id 
          ? "text-ogclan" 
          : "text-white hover:text-ogclan-light group"
      )}
    >
      {label}
      <span className="absolute inset-x-0 bottom-1 h-[2px] bg-ogclan-light/0 transform scale-x-0 group-hover:scale-x-100 group-hover:bg-ogclan-light/70 transition-all duration-300"></span>
    </NavigationMenuLink>
  );
};

export default NavLink;
