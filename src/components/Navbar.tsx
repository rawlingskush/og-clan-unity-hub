
import React, { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

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
          ? 'bg-white/80 backdrop-blur-md shadow-sm py-4' 
          : 'bg-transparent py-6'
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <a 
            href="#" 
            className="text-2xl font-bold text-gray-900 flex items-center"
          >
            <div className="w-10 h-10 bg-ogclan rounded-lg flex items-center justify-center text-white mr-3">
              OG
            </div>
            <span className="hidden sm:inline">OG Clan</span>
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
