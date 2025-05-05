
import React, { useState } from 'react';
import Logo from './Logo';
import { useIsMobile } from '@/hooks/use-mobile';
import { useToast } from '@/hooks/use-toast';
import DesktopNav from './navbar/DesktopNav';
import MobileNav from './navbar/MobileNav';
import { MenuItem } from './navbar/types';
import { useScrollSpy } from '@/hooks/use-scroll-spy';
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { Users } from 'lucide-react';

const Navbar = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [expandedMobileItems, setExpandedMobileItems] = useState<string[]>([]);
  const isMobile = useIsMobile();
  const { toast } = useToast();
  const navigate = useNavigate();
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  // List of all section IDs in the page
  const sectionIds = ['home', 'about', 'og-battle-night', 'highlights', 'sponsors', 'join', 'cod-points'];
  
  // Use our custom scroll spy hook
  const { scrollPosition, activeSection, scrollToSection, isScrolled } = useScrollSpy({
    sectionIds,
    offset: 100
  });

  const handleNavClick = (sectionId: string) => {
    // If we're on the homepage, scroll to the section
    if (isHomePage) {
      const success = scrollToSection(sectionId);
      
      if (!success) {
        toast({
          title: "Section not found",
          description: `The ${sectionId} section is not available yet.`,
          variant: "destructive",
        });
      }
    } else {
      // If we're on another page, navigate to homepage and then scroll
      navigate(`/#${sectionId}`);
    }
    
    // Close mobile drawer if open
    setIsDrawerOpen(false);
  };

  const handlePageNavigation = (path: string) => {
    navigate(path);
    setIsDrawerOpen(false);
  };

  const toggleMobileSubmenu = (itemId: string) => {
    setExpandedMobileItems(prev => 
      prev.includes(itemId) ? prev.filter(id => id !== itemId) : [...prev, itemId]
    );
  };

  // Calculate opacity based on scroll position for a smoother effect
  const backgroundOpacity = Math.min(scrollPosition / 300, 0.7);

  const menuItems: MenuItem[] = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'og-battle-night', label: 'Battle Night' },
    { id: 'sponsors', label: 'Sponsors' },
    { id: 'join', label: 'Join Us' },
    { id: 'cod-points', label: 'Get CoD Points' },
    // Adding the new Soldiers page link
    { id: 'soldiers', label: 'Our Soldiers', isPage: true, path: '/soldiers' }
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? 'py-2 backdrop-blur-md shadow-lg' : 'py-4'
      }`}
      style={{
        backgroundColor: `rgba(0, 0, 0, ${backgroundOpacity + 0.2})`,
        borderBottom: isScrolled ? '1px solid rgba(212,175,55,0.15)' : 'none'
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <button 
            className="flex items-center group relative z-10"
            onClick={() => navigate('/')}
            aria-label="Go to home page"
          >
            <Logo withText={false} size="sm" className="transform transition-all duration-300 group-hover:scale-110 group-hover:drop-shadow-gold-lg" />
          </button>
          
          {/* Desktop Navigation */}
          <DesktopNav 
            menuItems={menuItems} 
            activeSection={activeSection} 
            handleNavClick={handleNavClick}
            handlePageNavigation={handlePageNavigation}
            currentPath={location.pathname}
          />
          
          <div className="flex items-center space-x-3">
            {/* Our Soldiers Button - New Addition */}
            <button 
              className="hidden md:flex bg-black border border-ogclan text-ogclan font-medium px-4 py-2.5 rounded-lg transition-all duration-300 
                       hover:bg-ogclan/10 hover:shadow-[0_0_15px_rgba(212,175,55,0.3)] active:scale-[0.98] items-center"
              onClick={() => handlePageNavigation('/soldiers')}
            >
              <Users className="mr-2 h-4 w-4" />
              Our Soldiers
            </button>
            
            {/* Join the Crew Button */}
            <button 
              className="bg-gradient-to-r from-ogclan-dark to-ogclan text-black font-medium px-5 py-2.5 rounded-lg transition-all duration-300 hover:from-ogclan hover:to-ogclan-light hover:shadow-[0_0_15px_rgba(212,175,55,0.4)] active:scale-[0.98]"
              onClick={() => handleNavClick('join')}
            >
              Join the Crew
            </button>
            
            {/* Mobile Navigation */}
            <MobileNav 
              menuItems={menuItems}
              activeSection={activeSection}
              handleNavClick={handleNavClick}
              handlePageNavigation={handlePageNavigation}
              isDrawerOpen={isDrawerOpen}
              setIsDrawerOpen={setIsDrawerOpen}
              expandedMobileItems={expandedMobileItems}
              toggleMobileSubmenu={toggleMobileSubmenu}
              currentPath={location.pathname}
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
