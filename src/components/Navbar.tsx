
import React, { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';
import Logo from './Logo';
import { Menu, X } from 'lucide-react';
import { Button } from './ui/button';

const Navbar = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
        backgroundColor: `rgba(0, 0, 0, ${backgroundOpacity})`,
        borderBottom: isScrolled ? '1px solid rgba(212, 175, 55, 0.15)' : 'none'
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <a 
            href="#" 
            className="flex items-center group"
          >
            <Logo withText={false} size="sm" className="transform transition-all duration-300 group-hover:scale-110 group-hover:drop-shadow-gold-lg" />
          </a>
          
          <nav className="hidden md:flex items-center space-x-6">
            {/* New hover effect style */}
            <a href="#" className="text-ogclan px-4 py-2 rounded-md transition-all duration-300 hover:bg-ogclan/10 hover:text-ogclan-light relative overflow-hidden group">
              <span className="relative z-10">Home</span>
              <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-ogclan/0 via-ogclan/5 to-ogclan/0 -translate-x-full group-hover:translate-x-0 transition-transform duration-700"></span>
            </a>
            <a href="#about" className="text-ogclan px-4 py-2 rounded-md transition-all duration-300 hover:bg-ogclan/10 hover:text-ogclan-light relative overflow-hidden group">
              <span className="relative z-10">About</span>
              <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-ogclan/0 via-ogclan/5 to-ogclan/0 -translate-x-full group-hover:translate-x-0 transition-transform duration-700"></span>
            </a>
            <a href="#og-battle-night" className="text-ogclan px-4 py-2 rounded-md transition-all duration-300 hover:bg-ogclan/10 hover:text-ogclan-light relative overflow-hidden group">
              <span className="relative z-10">Events</span>
              <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-ogclan/0 via-ogclan/5 to-ogclan/0 -translate-x-full group-hover:translate-x-0 transition-transform duration-700"></span>
            </a>
            <a href="#sponsors" className="text-ogclan px-4 py-2 rounded-md transition-all duration-300 hover:bg-ogclan/10 hover:text-ogclan-light relative overflow-hidden group">
              <span className="relative z-10">Sponsors</span>
              <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-ogclan/0 via-ogclan/5 to-ogclan/0 -translate-x-full group-hover:translate-x-0 transition-transform duration-700"></span>
            </a>
            <a href="#join" className="text-ogclan px-4 py-2 rounded-md transition-all duration-300 hover:bg-ogclan/10 hover:text-ogclan-light relative overflow-hidden group">
              <span className="relative z-10">Join Us</span>
              <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-ogclan/0 via-ogclan/5 to-ogclan/0 -translate-x-full group-hover:translate-x-0 transition-transform duration-700"></span>
            </a>
          </nav>
          
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
              className="ml-4 text-ogclan hover:bg-ogclan/10 md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
        
        {/* Mobile menu with improved styling and transitions */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-3 py-3 border-t border-ogclan/20 animate-fade-in">
            <nav className="flex flex-col space-y-3">
              <a href="#" className="text-ogclan hover:text-ogclan-light transition-colors duration-300 font-medium px-2 py-1.5 rounded-md hover:bg-ogclan/5" onClick={closeMobileMenu}>Home</a>
              <a href="#about" className="text-ogclan hover:text-ogclan-light transition-colors duration-300 font-medium px-2 py-1.5 rounded-md hover:bg-ogclan/5" onClick={closeMobileMenu}>About</a>
              <a href="#og-battle-night" className="text-ogclan hover:text-ogclan-light transition-colors duration-300 font-medium px-2 py-1.5 rounded-md hover:bg-ogclan/5" onClick={closeMobileMenu}>Events</a>
              <a href="#sponsors" className="text-ogclan hover:text-ogclan-light transition-colors duration-300 font-medium px-2 py-1.5 rounded-md hover:bg-ogclan/5" onClick={closeMobileMenu}>Sponsors</a>
              <a href="#join" className="text-ogclan hover:text-ogclan-light transition-colors duration-300 font-medium px-2 py-1.5 rounded-md hover:bg-ogclan/5" onClick={closeMobileMenu}>Join Us</a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
