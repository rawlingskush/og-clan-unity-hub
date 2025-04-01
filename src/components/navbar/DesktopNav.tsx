
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
                    activeSection === item.id && "text-ogclan"
                  )}
                >
                  {item.label}
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid gap-3 p-4 w-[240px]">
                    {item.subItems.map(subItem => (
                      <li key={subItem.id}>
                        <NavigationMenuLink 
                          href={`#${subItem.id}`}
                          onClick={(e) => {
                            e.preventDefault();
                            handleNavClick(subItem.id);
                          }}
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                        >
                          <div className="text-sm font-medium leading-none">{subItem.label}</div>
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
