
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
        "relative transition-colors duration-200",
        activeSection === id 
          ? "text-ogclan" 
          : "hover:text-ogclan-light"
      )}
    >
      {label}
    </NavigationMenuLink>
  );
};

export default NavLink;
