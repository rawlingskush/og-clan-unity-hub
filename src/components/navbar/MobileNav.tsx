
import React from 'react';
import { cn } from '@/lib/utils';
import { ChevronRight, Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { MenuItem } from './types';

interface MobileNavProps {
  menuItems: MenuItem[];
  activeSection: string;
  handleNavClick: (sectionId: string) => void;
  isDrawerOpen: boolean;
  setIsDrawerOpen: (isOpen: boolean) => void;
  expandedMobileItems: string[];
  toggleMobileSubmenu: (itemId: string) => void;
}

const MobileNav = ({ 
  menuItems, 
  activeSection, 
  handleNavClick, 
  isDrawerOpen, 
  setIsDrawerOpen,
  expandedMobileItems,
  toggleMobileSubmenu
}: MobileNavProps) => {
  return (
    <div className="md:hidden ml-4">
      <Drawer open={isDrawerOpen} onOpenChange={setIsDrawerOpen}>
        <DrawerTrigger asChild>
          <Button
            variant="ghost"
            size="icon"
            className="text-ogclan hover:bg-ogclan/10 relative z-20"
          >
            <Menu className="h-6 w-6" />
          </Button>
        </DrawerTrigger>
        <DrawerContent className="bg-black/95 border-t border-ogclan/20 max-h-[85vh]">
          <div className="mx-auto w-full max-w-sm">
            <DrawerHeader>
              <DrawerTitle className="text-ogclan text-center text-xl font-orbitron">
                OG Clan Menu
              </DrawerTitle>
            </DrawerHeader>
            <div className="flex flex-col space-y-2 px-4 overflow-y-auto pb-4">
              {menuItems.map(item => {
                if (item.subItems) {
                  const isExpanded = expandedMobileItems.includes(item.id);
                  return (
                    <div key={item.id} className="w-full">
                      <button 
                        className={cn(
                          "flex justify-between items-center w-full px-4 py-3.5 rounded-lg font-medium text-lg transition-all duration-300",
                          activeSection === item.id 
                            ? "bg-ogclan/20 text-ogclan border-l-2 border-ogclan" 
                            : "text-ogclan-light hover:bg-ogclan/10 hover:border-l-2 hover:border-ogclan/50"
                        )}
                        onClick={() => toggleMobileSubmenu(item.id)}
                        aria-expanded={isExpanded}
                      >
                        {item.label}
                        <ChevronRight className={cn(
                          "h-5 w-5 text-ogclan transition-transform duration-300",
                          isExpanded && "transform rotate-90"
                        )} />
                      </button>
                      <div 
                        className={cn(
                          "ml-4 pl-4 border-l-2 border-ogclan/20 mt-2 mb-2 space-y-2 overflow-hidden transition-all duration-300",
                          isExpanded ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                        )}
                      >
                        {item.subItems.map(subItem => (
                          <button 
                            key={subItem.id}
                            className={cn(
                              "flex flex-col items-start w-full px-4 py-3 rounded-md transition-all duration-300",
                              activeSection === subItem.id 
                                ? "bg-ogclan/20 text-ogclan border-l-2 border-ogclan" 
                                : "text-ogclan-light/80 hover:bg-ogclan/10 hover:text-ogclan-light hover:border-l-2 hover:border-ogclan/50"
                            )}
                            onClick={() => {
                              handleNavClick(subItem.id);
                              setIsDrawerOpen(false); // Close drawer after navigation
                            }}
                          >
                            <span className="font-medium">{subItem.label}</span>
                            <span className="text-xs text-ogclan-light/60 mt-1">{subItem.description}</span>
                          </button>
                        ))}
                      </div>
                    </div>
                  );
                } else {
                  return (
                    <button 
                      key={item.id}
                      className={cn(
                        "w-full px-4 py-3.5 rounded-lg font-medium text-lg transition-all duration-300",
                        activeSection === item.id 
                          ? "bg-ogclan/20 text-ogclan border-l-2 border-ogclan" 
                          : "text-ogclan-light hover:bg-ogclan/10 hover:text-ogclan-light hover:border-l-2 hover:border-ogclan/50"
                      )}
                      onClick={() => {
                        handleNavClick(item.id);
                        setIsDrawerOpen(false); // Close drawer after navigation
                      }}
                    >
                      {item.label}
                    </button>
                  );
                }
              })}
            </div>
            <DrawerFooter className="px-4 pt-2 pb-8">
              <Button 
                className="w-full bg-gradient-to-r from-ogclan-dark to-ogclan text-black font-medium py-6 rounded-lg transition-all duration-300 hover:from-ogclan hover:to-ogclan-light hover:shadow-[0_0_15px_rgba(212,175,55,0.4)]"
                onClick={() => {
                  handleNavClick('join');
                  setIsDrawerOpen(false); // Close drawer after navigation
                }}
              >
                Join the Crew
              </Button>
              <DrawerClose asChild>
                <Button variant="outline" className="mt-2 border-ogclan/20 text-ogclan-light">
                  Close Menu
                </Button>
              </DrawerClose>
            </DrawerFooter>
          </div>
        </DrawerContent>
      </Drawer>
    </div>
  );
};

export default MobileNav;
