
import React, { useState } from 'react';
import Logo from './Logo';
import { useIsMobile } from '@/hooks/use-mobile';
import { useToast } from '@/hooks/use-toast';
import { useAuth } from '@/contexts/AuthContext';
import DesktopNav from './navbar/DesktopNav';
import MobileNav from './navbar/MobileNav';
import { MenuItem } from './navbar/types';
import { useScrollSpy } from '@/hooks/use-scroll-spy';
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { Users, Shield, LogOut } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [expandedMobileItems, setExpandedMobileItems] = useState<string[]>([]);
  const isMobile = useIsMobile();
  const { toast } = useToast();
  const navigate = useNavigate();
  const location = useLocation();
  const isHomePage = location.pathname === '/';
  const { user, signOut } = useAuth();

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
    
    // Ensure scroll to top when navigating to soldiers page
    if (path === '/soldiers') {
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }, 100);
    }
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
    { id: 'cod-points', label: 'Get CoD Points' }
    // Removed the Soldiers page link from navigation
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
            onClick={() => {
              navigate('/');
              setTimeout(() => {
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }, 100);
            }}
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
          
          <div className="flex items-center gap-2 md:gap-3">
            {/* Our Soldiers Button - Next to Join the Crew */}
            <button 
              className="flex bg-gradient-to-r from-tactical-highlight to-tactical-highlight/80 text-black font-medium px-2 py-2 md:px-4 md:py-2.5 rounded-lg transition-all duration-300 
                       hover:from-tactical-highlight/90 hover:to-tactical-highlight hover:shadow-[0_0_15px_rgba(212,175,55,0.3)] active:scale-[0.98] items-center text-xs md:text-base"
              onClick={() => handlePageNavigation('/soldiers')}
            >
              <Users className="mr-1 md:mr-2 h-3 w-3 md:h-4 md:w-4" />
              <span className="whitespace-nowrap">Our Soldiers</span>
            </button>
            
            {user ? (
              <div className="flex items-center gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => navigate('/admin')}
                  className="flex items-center gap-1 text-xs md:text-sm px-2 md:px-3"
                >
                  <Shield className="h-3 w-3 md:h-4 md:w-4" />
                  <span className="hidden md:inline">Admin</span>
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={signOut}
                  className="flex items-center gap-1 text-xs md:text-sm px-2 md:px-3"
                >
                  <LogOut className="h-3 w-3 md:h-4 md:w-4" />
                  <span className="hidden md:inline">Sign Out</span>
                </Button>
              </div>
            ) : (
              <>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => navigate('/auth')}
                  className="flex items-center gap-1 text-xs md:text-sm px-2 md:px-3"
                >
                  <Shield className="h-3 w-3 md:h-4 md:w-4" />
                  <span className="hidden md:inline">Admin</span>
                </Button>
                
                {/* Join the Crew Button */}
                <button 
                  className="bg-gradient-to-r from-ogclan-dark to-ogclan text-black font-medium px-2 py-2 md:px-5 md:py-2.5 rounded-lg transition-all duration-300 hover:from-ogclan hover:to-ogclan-light hover:shadow-[0_0_15px_rgba(212,175,55,0.4)] active:scale-[0.98] text-xs md:text-base"
                  onClick={() => handleNavClick('join')}
                >
                  <span className="whitespace-nowrap">Join the Crew</span>
                </button>
              </>
            )}
            
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
