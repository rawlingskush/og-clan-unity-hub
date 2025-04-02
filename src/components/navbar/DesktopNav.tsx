
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
                      ? "text-black bg-ogclan" 
                      : "text-white hover:text-black"
                  )}
                >
                  <span className="relative z-10">{item.label}</span>
                  
                  {/* Simple background hover effect */}
                  <span className={cn(
                    "absolute inset-0 z-0 bg-ogclan opacity-0 transition-opacity duration-300",
                    "hover:opacity-100",
                    activeSection === item.id && "opacity-100"
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
                            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors duration-300",
                            activeSection === subItem.id 
                              ? "bg-ogclan text-black" 
                              : "hover:bg-ogclan hover:text-black"
                          )}
                        >
                          <div className={cn(
                            "text-sm font-medium leading-none", 
                            activeSection === subItem.id 
                              ? "text-black" 
                              : "text-white"
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
