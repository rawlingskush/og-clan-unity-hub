
import React, { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';
import Logo from './Logo';
import { Menu } from 'lucide-react';
import { Button } from './ui/button';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        scrolled 
          ? 'bg-black/80 backdrop-blur-md shadow-md py-2 border-b border-ogclan/20' 
          : 'bg-transparent py-3'
      )}
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
            <a href="#about" className="text-ogclan hover:text-ogclan-light transition-colors duration-300 font-medium relative overflow-hidden group">
              <span>About</span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-ogclan-light group-hover:w-full transition-all duration-300"></span>
            </a>
            <a href="#highlights" className="text-ogclan hover:text-ogclan-light transition-colors duration-300 font-medium relative overflow-hidden group">
              <span>Highlights</span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-ogclan-light group-hover:w-full transition-all duration-300"></span>
            </a>
            <a href="#sponsors" className="text-ogclan hover:text-ogclan-light transition-colors duration-300 font-medium relative overflow-hidden group">
              <span>Sponsors</span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-ogclan-light group-hover:w-full transition-all duration-300"></span>
            </a>
            <a href="#join" className="text-ogclan hover:text-ogclan-light transition-colors duration-300 font-medium relative overflow-hidden group">
              <span>Join Us</span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-ogclan-light group-hover:w-full transition-all duration-300"></span>
            </a>
          </nav>
          
          <div className="flex items-center">
            <a 
              href="#join" 
              className="btn-primary"
            >
              Join the Crew
            </a>
            
            <Button
              variant="ghost"
              size="icon"
              className="ml-4 text-ogclan hover:bg-ogclan/10 md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <Menu className="h-6 w-6" />
            </Button>
          </div>
        </div>
        
        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-3 py-3 border-t border-ogclan/20">
            <nav className="flex flex-col space-y-3">
              <a href="#about" className="text-ogclan hover:text-ogclan-light transition-colors duration-300 font-medium">About</a>
              <a href="#highlights" className="text-ogclan hover:text-ogclan-light transition-colors duration-300 font-medium">Highlights</a>
              <a href="#sponsors" className="text-ogclan hover:text-ogclan-light transition-colors duration-300 font-medium">Sponsors</a>
              <a href="#join" className="text-ogclan hover:text-ogclan-light transition-colors duration-300 font-medium">Join Us</a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
