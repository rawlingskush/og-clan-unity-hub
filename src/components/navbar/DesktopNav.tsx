
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
                    "transition-all duration-300 group relative",
                    activeSection === item.id 
                      ? "text-ogclan" 
                      : "text-white hover:text-ogclan-light"
                  )}
                >
                  {item.label}
                  <span className="absolute inset-x-0 bottom-1 h-[2px] bg-ogclan-light/0 transform scale-x-0 group-hover:scale-x-100 group-hover:bg-ogclan-light/70 transition-all duration-300"></span>
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid gap-3 p-4 w-[240px] bg-black/95 backdrop-blur-md border border-ogclan/20">
                    {item.subItems.map(subItem => (
                      <li key={subItem.id}>
                        <NavigationMenuLink 
                          href={`#${subItem.id}`}
                          onClick={(e) => {
                            e.preventDefault();
                            handleNavClick(subItem.id);
                          }}
                          className={cn(
                            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-all duration-300 group",
                            activeSection === subItem.id 
                              ? "bg-ogclan/20 text-ogclan" 
                              : "hover:bg-ogclan/10"
                          )}
                        >
                          <div className={cn(
                            "text-sm font-medium leading-none transition-colors duration-300", 
                            activeSection === subItem.id 
                              ? "text-ogclan" 
                              : "text-white group-hover:text-ogclan-light"
                          )}>
                            {subItem.label}
                          </div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground group-hover:text-ogclan-light/70 transition-colors duration-300">
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
