
import React from 'react';
import { cn } from '@/lib/utils';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu";
import NavLink from './NavLink';
import { MenuItem } from './types';

interface DesktopNavProps {
  menuItems: MenuItem[];
  activeSection: string;
  handleNavClick: (sectionId: string) => void;
}

const DesktopNav = ({ menuItems, activeSection, handleNavClick }: DesktopNavProps) => {
  return (
    <NavigationMenu className="hidden md:flex">
      <NavigationMenuList>
        {menuItems.map(item => {
          if (item.subItems) {
            return (
              <NavigationMenuItem key={item.id}>
                <NavigationMenuTrigger
                  className={cn(
                    "relative px-3 py-2 transition-all duration-300 font-medium overflow-hidden group",
                    activeSection === item.id 
                      ? "text-black bg-ogclan" 
                      : "text-white hover:text-black"
                  )}
                >
                  <span className="relative z-10">{item.label}</span>
                  
                  {/* Active background with pulse animation */}
                  {activeSection === item.id && (
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
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid gap-2 p-4 w-[240px] bg-black/90 backdrop-blur-md border border-ogclan/30 rounded-md shadow-lg shadow-black/50">
                    {item.subItems.map(subItem => (
                      <li key={subItem.id}>
                        <NavigationMenuLink 
                          href={`#${subItem.id}`}
                          onClick={(e) => {
                            e.preventDefault();
                            handleNavClick(subItem.id);
                          }}
                          className={cn(
                            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-all duration-300 group relative overflow-hidden",
                            activeSection === subItem.id 
                              ? "bg-ogclan text-black" 
                              : "hover:text-black"
                          )}
                        >
                          {/* Hover background effect for submenu items */}
                          <span className={cn(
                            "absolute inset-0 transition-all duration-300 z-0 opacity-0 bg-ogclan",
                            "group-hover:opacity-100",
                            "before:absolute before:content-[''] before:inset-0 before:bg-gradient-to-r before:from-ogclan before:to-ogclan-light before:opacity-30"
                          )}></span>
                          
                          <div className={cn(
                            "text-sm font-medium leading-none transition-colors duration-300 relative z-10", 
                            activeSection === subItem.id 
                              ? "text-black" 
                              : "text-white group-hover:text-black"
                          )}>
                            {subItem.label}
                          </div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground relative z-10 group-hover:text-black/70">
                            {subItem.description}
                          </p>
                        </NavigationMenuLink>
                      </li>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            );
          } else {
            return (
              <NavigationMenuItem key={item.id}>
                <NavLink 
                  id={item.id} 
                  label={item.label} 
                  activeSection={activeSection} 
                  handleNavClick={handleNavClick} 
                />
              </NavigationMenuItem>
            );
          }
        })}
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default DesktopNav;
