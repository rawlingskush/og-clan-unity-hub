
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
  return (
    <NavigationMenuLink 
      href={`#${id}`}
      onClick={(e) => {
        e.preventDefault();
        handleNavClick(id);
      }}
      className={cn(
        navigationMenuTriggerStyle(),
        "relative transition-colors duration-300",
        activeSection === id 
          ? "text-ogclan after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2px] after:bg-ogclan" 
          : "hover:text-ogclan-light after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2px] after:bg-ogclan after:origin-bottom-right after:scale-x-0 hover:after:origin-bottom-left hover:after:scale-x-100 after:transition-transform after:duration-300"
      )}
    >
      {label}
    </NavigationMenuLink>
  );
};

export default NavLink;
