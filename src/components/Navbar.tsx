
import React, { useEffect, useState } from 'react';
import Logo from './Logo';
import { Button } from './ui/button';
import { useIsMobile } from '@/hooks/use-mobile';
import { useToast } from '@/hooks/use-toast';
import DesktopNav from './navbar/DesktopNav';
import MobileNav from './navbar/MobileNav';
import { MenuItem } from './navbar/types';

const Navbar = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [activeSection, setActiveSection] = useState('home');
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [expandedMobileItems, setExpandedMobileItems] = useState<string[]>([]);
  const isMobile = useIsMobile();
  const { toast } = useToast();

  // Track scroll position and update active section
  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
      
      // Update active section based on scroll position
      const sections = ['home', 'about', 'og-battle-night', 'weekly', 'highlights', 'sponsors', 'join', 'cod-points'];
      
      // Get all section elements that exist in the DOM
      const availableSections = sections.filter(id => document.getElementById(id));
      
      // Find the section that's currently most visible in the viewport
      for (const section of availableSections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          // Consider a section "active" when its top part is near the top of the viewport
          if (rect.top <= 100 && rect.bottom >= 100) {
            if (activeSection !== section) {
              setActiveSection(section);
            }
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    // Initial call to set the active section on mount
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, [activeSection]);

  // Calculate opacity based on scroll position for a smoother effect
  const backgroundOpacity = Math.min(scrollPosition / 300, 0.7);
  const isScrolled = scrollPosition > 10;

  const handleNavClick = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      // Set as active section immediately for better UX
      setActiveSection(sectionId);
      
      // Smooth scroll with a slight delay for visual transition
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: 'smooth'
      });
      
      // Close mobile drawer if open
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

  const menuItems: MenuItem[] = [
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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? 'py-2 backdrop-blur-md shadow-lg' : 'py-4'
      }`}
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
          
          {/* Desktop Navigation */}
          <DesktopNav 
            menuItems={menuItems} 
            activeSection={activeSection} 
            handleNavClick={handleNavClick} 
          />
          
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
            
            {/* Mobile Navigation */}
            <MobileNav 
              menuItems={menuItems}
              activeSection={activeSection}
              handleNavClick={handleNavClick}
              isDrawerOpen={isDrawerOpen}
              setIsDrawerOpen={setIsDrawerOpen}
              expandedMobileItems={expandedMobileItems}
              toggleMobileSubmenu={toggleMobileSubmenu}
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
