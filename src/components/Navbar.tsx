
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
          : 'bg-transparent py-4'
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <a 
            href="#" 
            className="flex items-center"
          >
            <Logo withText={false} size="md" />
          </a>
          
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#about" className="navbar-link">About</a>
            <a href="#highlights" className="navbar-link">Highlights</a>
            <a href="#sponsors" className="navbar-link">Sponsors</a>
            <a href="#join" className="navbar-link">Join Us</a>
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
          <div className="md:hidden mt-4 py-4 border-t border-ogclan/20">
            <nav className="flex flex-col space-y-4">
              <a href="#about" className="navbar-link">About</a>
              <a href="#highlights" className="navbar-link">Highlights</a>
              <a href="#sponsors" className="navbar-link">Sponsors</a>
              <a href="#join" className="navbar-link">Join Us</a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
