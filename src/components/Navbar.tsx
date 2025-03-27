
import React, { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';
import Logo from './Logo';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

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
          ? 'bg-black/80 backdrop-blur-md shadow-md py-4 border-b border-ogclan/20' 
          : 'bg-transparent py-6'
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <a 
            href="#" 
            className="text-2xl font-bold text-ogclan flex items-center"
          >
            <Logo withText={true} />
          </a>
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#about" className="navbar-link">About</a>
            <a href="#highlights" className="navbar-link">Highlights</a>
            <a href="#join" className="navbar-link">Join Us</a>
          </nav>
          <div>
            <a 
              href="#join" 
              className="btn-primary"
            >
              Join the Crew
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
