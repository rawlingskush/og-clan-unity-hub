
import React, { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';
import Logo from './Logo';
import { Menu, X, ChevronDown } from 'lucide-react';
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

const Navbar = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const isMobile = useIsMobile();

  // Track scroll position instead of just boolean
  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  // Calculate opacity based on scroll position for a smoother effect
  const backgroundOpacity = Math.min(scrollPosition / 300, 0.7);
  const isScrolled = scrollPosition > 10;

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
        isScrolled 
          ? 'py-2 backdrop-blur-md shadow-lg' 
          : 'py-4'
      )}
      style={{
        backgroundColor: `rgba(0, 0, 0, ${backgroundOpacity + 0.2})`, // Increased base opacity
        borderBottom: isScrolled ? '1px solid rgba(212, 175, 55, 0.15)' : 'none'
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <a 
            href="#" 
            className="flex items-center group relative z-10"
          >
            <Logo withText={false} size="sm" className="transform transition-all duration-300 group-hover:scale-110 group-hover:drop-shadow-gold-lg" />
          </a>
          
          {/* Desktop Navigation using NavigationMenu for improved functionality */}
          <NavigationMenu className="hidden md:flex">
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuLink href="#" className={navigationMenuTriggerStyle()}>
                  Home
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink href="#about" className={navigationMenuTriggerStyle()}>
                  About
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger>
                  Events
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid gap-3 p-4 w-[220px]">
                    <li>
                      <NavigationMenuLink 
                        href="#og-battle-night"
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                      >
                        <div className="text-sm font-medium leading-none">OG Battle Night</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          Our flagship monthly competition
                        </p>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink 
                        href="#"
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                      >
                        <div className="text-sm font-medium leading-none">Weekly Meetups</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          Regular gaming sessions with the crew
                        </p>
                      </NavigationMenuLink>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink href="#sponsors" className={navigationMenuTriggerStyle()}>
                  Sponsors
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink href="#join" className={navigationMenuTriggerStyle()}>
                  Join Us
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
          
          <div className="flex items-center">
            <a 
              href="#join" 
              className="bg-gradient-to-r from-ogclan-dark to-ogclan text-black font-medium px-5 py-2.5 rounded-lg transition-all duration-300 hover:from-ogclan hover:to-ogclan-light hover:shadow-[0_0_15px_rgba(212,175,55,0.4)] active:scale-[0.98]"
            >
              Join the Crew
            </a>
            
            <Button
              variant="ghost"
              size="icon"
              className="ml-4 text-ogclan hover:bg-ogclan/10 md:hidden relative z-20"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
        
        {/* Improved mobile menu with better visibility and animations */}
        {mobileMenuOpen && (
          <div className="md:hidden fixed inset-x-0 top-[60px] bottom-0 z-10 bg-black/95 backdrop-blur-sm animate-in slide-in-from-top">
            <nav className="flex flex-col h-full p-4">
              <div className="py-2 border-b border-ogclan/20 mb-4">
                <h3 className="text-ogclan text-lg font-bold">OG Clan Navigation</h3>
              </div>
              
              <div className="flex-1 flex flex-col space-y-2 overflow-y-auto">
                <a 
                  href="#" 
                  className="flex items-center text-ogclan hover:text-ogclan-light transition-colors duration-300 font-medium px-4 py-3 rounded-lg hover:bg-ogclan/10" 
                  onClick={closeMobileMenu}
                >
                  <span className="text-xl">Home</span>
                </a>
                
                <a 
                  href="#about" 
                  className="flex items-center text-ogclan hover:text-ogclan-light transition-colors duration-300 font-medium px-4 py-3 rounded-lg hover:bg-ogclan/10" 
                  onClick={closeMobileMenu}
                >
                  <span className="text-xl">About</span>
                </a>
                
                <div className="py-2">
                  <div className="flex items-center text-ogclan px-4 py-2 font-medium">
                    <span className="text-xl">Events</span>
                    <ChevronDown className="h-4 w-4 ml-1" />
                  </div>
                  <div className="ml-6 mt-1 border-l-2 border-ogclan/30 pl-4 space-y-2">
                    <a 
                      href="#og-battle-night" 
                      className="flex items-center text-ogclan-light hover:text-ogclan transition-colors duration-300 font-medium px-2 py-2 rounded-md hover:bg-ogclan/5" 
                      onClick={closeMobileMenu}
                    >
                      <span>OG Battle Night</span>
                    </a>
                    <a 
                      href="#" 
                      className="flex items-center text-ogclan-light hover:text-ogclan transition-colors duration-300 font-medium px-2 py-2 rounded-md hover:bg-ogclan/5"
                      onClick={closeMobileMenu}
                    >
                      <span>Weekly Meetups</span>
                    </a>
                  </div>
                </div>
                
                <a 
                  href="#sponsors" 
                  className="flex items-center text-ogclan hover:text-ogclan-light transition-colors duration-300 font-medium px-4 py-3 rounded-lg hover:bg-ogclan/10" 
                  onClick={closeMobileMenu}
                >
                  <span className="text-xl">Sponsors</span>
                </a>
                
                <a 
                  href="#join" 
                  className="flex items-center text-ogclan hover:text-ogclan-light transition-colors duration-300 font-medium px-4 py-3 rounded-lg hover:bg-ogclan/10" 
                  onClick={closeMobileMenu}
                >
                  <span className="text-xl">Join Us</span>
                </a>
              </div>
              
              <div className="mt-auto pt-4 border-t border-ogclan/20">
                <a 
                  href="#join" 
                  className="block w-full text-center bg-gradient-to-r from-ogclan-dark to-ogclan text-black font-medium py-3 rounded-lg transition-all duration-300 hover:from-ogclan hover:to-ogclan-light"
                  onClick={closeMobileMenu}
                >
                  Join the Crew
                </a>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
