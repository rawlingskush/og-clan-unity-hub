
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
          ? "text-black font-medium bg-ogclan" 
          : "text-white font-medium hover:text-black"
      )}
    >
      <span className="relative z-10">{label}</span>
      
      {/* Simple background hover effect */}
      <span className={cn(
        "absolute inset-0 z-0 bg-ogclan opacity-0 transition-opacity duration-300",
        "hover:opacity-100",
        activeSection === id && "opacity-100"
      )}></span>
      
      {/* Simple top border */}
      <span className="absolute top-0 left-0 right-0 h-[2px] bg-ogclan-light transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
    </NavigationMenuLink>
  );
};

export default NavLink;
