
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
    
    // Special case for Battle Night - scroll to the timer section
    if (id === 'og-battle-night') {
      const timerSection = document.getElementById('battle-night-timer');
      if (timerSection) {
        const offsetTop = timerSection.getBoundingClientRect().top + window.pageYOffset;
        window.scrollTo({
          top: offsetTop - 100, // Add some offset to show the header above it
          behavior: 'auto'
        });
        return;
      }
    }
    
    // For all other links, use the regular handler
    handleNavClick(id);
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
