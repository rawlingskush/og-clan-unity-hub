
import React, { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';
import Logo from './Logo';
import { Menu, X, ChevronDown, ChevronRight } from 'lucide-react';
import { Button } from './ui/button';
import { useIsMobile } from '@/hooks/use-mobile';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"
import { useToast } from '@/hooks/use-toast';

const Navbar = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [activeSection, setActiveSection] = useState('home');
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [expandedMobileItems, setExpandedMobileItems] = useState<string[]>([]);
  const isMobile = useIsMobile();
  const { toast } = useToast();

  // Track scroll position instead of just boolean
  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
      
      // Update active section based on scroll position
      const sections = ['home', 'about', 'highlights', 'sponsors', 'join', 'cod-points'];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Calculate opacity based on scroll position for a smoother effect
  const backgroundOpacity = Math.min(scrollPosition / 300, 0.7);
  const isScrolled = scrollPosition > 10;

  const handleNavClick = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: 'smooth'
      });
      setIsDrawerOpen(false);
    } else {
      toast({
        title: "Section not found",
        description: `The ${sectionId} section is not available yet.`,
        variant: "destructive",
      });
    }
  };

  const toggleMobileSubmenu = (itemId: string) => {
    setExpandedMobileItems(prev => 
      prev.includes(itemId) ? prev.filter(id => id !== itemId) : [...prev, itemId]
    );
  };

  const menuItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { 
      id: 'events', 
      label: 'Events', 
      subItems: [
        { id: 'og-battle-night', label: 'OG Battle Night', description: 'Our flagship monthly competition' },
        { id: 'weekly', label: 'Weekly Meetups', description: 'Regular gaming sessions with the crew' }
      ]
    },
    { id: 'sponsors', label: 'Sponsors' },
    { id: 'join', label: 'Join Us' },
    { id: 'cod-points', label: 'Get CoD Points' }
  ];

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
        isScrolled 
          ? 'py-2 backdrop-blur-md shadow-lg' 
          : 'py-4'
      )}
      style={{
        backgroundColor: `rgba(0, 0, 0, ${backgroundOpacity + 0.2})`,
        borderBottom: isScrolled ? '1px solid rgba(212, 175, 55, 0.15)' : 'none'
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <a 
            href="#home" 
            className="flex items-center group relative z-10"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('home');
            }}
          >
            <Logo withText={false} size="sm" className="transform transition-all duration-300 group-hover:scale-110 group-hover:drop-shadow-gold-lg" />
          </a>
          
          {/* Desktop Navigation using NavigationMenu for improved functionality */}
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
                      <NavigationMenuLink 
                        href={`#${item.id}`}
                        onClick={(e) => {
                          e.preventDefault();
                          handleNavClick(item.id);
                        }}
                        className={cn(
                          navigationMenuTriggerStyle(),
                          activeSection === item.id && "text-ogclan"
                        )}
                      >
                        {item.label}
                      </NavigationMenuLink>
                    </NavigationMenuItem>
                  );
                }
              })}
            </NavigationMenuList>
          </NavigationMenu>
          
          <div className="flex items-center">
            <a 
              href="#join" 
              className="bg-gradient-to-r from-ogclan-dark to-ogclan text-black font-medium px-5 py-2.5 rounded-lg transition-all duration-300 hover:from-ogclan hover:to-ogclan-light hover:shadow-[0_0_15px_rgba(212,175,55,0.4)] active:scale-[0.98]"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('join');
              }}
            >
              Join the Crew
            </a>
            
            {/* Mobile Navigation - Redesigned with Drawer component for better UX */}
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
                                  "flex justify-between items-center w-full px-4 py-3.5 rounded-lg font-medium text-lg",
                                  activeSection === item.id 
                                    ? "bg-ogclan/20 text-ogclan" 
                                    : "text-ogclan-light hover:bg-ogclan/10"
                                )}
                                onClick={() => toggleMobileSubmenu(item.id)}
                                aria-expanded={isExpanded}
                              >
                                {item.label}
                                <ChevronRight className={cn(
                                  "h-5 w-5 text-ogclan transition-transform",
                                  isExpanded && "transform rotate-90"
                                )} />
                              </button>
                              {isExpanded && (
                                <div className="ml-4 pl-4 border-l-2 border-ogclan/20 mt-2 mb-2 space-y-2">
                                  {item.subItems.map(subItem => (
                                    <button 
                                      key={subItem.id}
                                      className={cn(
                                        "flex flex-col items-start w-full px-4 py-3 rounded-md transition-colors",
                                        activeSection === subItem.id 
                                          ? "bg-ogclan/20 text-ogclan" 
                                          : "text-ogclan-light/80 hover:bg-ogclan/10 hover:text-ogclan-light"
                                      )}
                                      onClick={() => handleNavClick(subItem.id)}
                                    >
                                      <span className="font-medium">{subItem.label}</span>
                                      <span className="text-xs text-ogclan-light/60 mt-1">{subItem.description}</span>
                                    </button>
                                  ))}
                                </div>
                              )}
                            </div>
                          );
                        } else {
                          return (
                            <button 
                              key={item.id}
                              className={cn(
                                "w-full px-4 py-3.5 rounded-lg font-medium text-lg transition-colors",
                                activeSection === item.id 
                                  ? "bg-ogclan/20 text-ogclan" 
                                  : "text-ogclan-light hover:bg-ogclan/10 hover:text-ogclan-light"
                              )}
                              onClick={() => handleNavClick(item.id)}
                            >
                              {item.label}
                            </button>
                          );
                        }
                      })}
                    </div>
                    <DrawerFooter className="px-4 pt-2 pb-8">
                      <Button 
                        className="w-full bg-gradient-to-r from-ogclan-dark to-ogclan text-black font-medium py-6 rounded-lg transition-all duration-300 hover:from-ogclan hover:to-ogclan-light"
                        onClick={() => handleNavClick('join')}
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
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
