
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
                    "relative px-3 py-2 transition-all duration-300 font-medium",
                    activeSection === item.id 
                      ? "text-ogclan" 
                      : "text-white hover:text-white"
                  )}
                >
                  <span className="relative z-10">{item.label}</span>
                  <span className={cn(
                    "absolute inset-0 rounded-md -z-0 transition-all duration-300",
                    activeSection === item.id 
                      ? "bg-ogclan/30 opacity-100" 
                      : "opacity-0 hover:opacity-100 hover:bg-ogclan/50"
                  )}></span>
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
                            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-all duration-300",
                            activeSection === subItem.id 
                              ? "bg-ogclan/30 text-ogclan" 
                              : "hover:bg-ogclan/50"
                          )}
                        >
                          <div className={cn(
                            "text-sm font-medium leading-none transition-colors duration-300", 
                            activeSection === subItem.id 
                              ? "text-ogclan" 
                              : "text-white hover:text-white"
                          )}>
                            {subItem.label}
                          </div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
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
