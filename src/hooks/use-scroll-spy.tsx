
import { useState, useEffect } from 'react';

interface UseScrollSpyOptions {
  sectionIds: string[];
  offset?: number;
}

export function useScrollSpy({ sectionIds, offset = 100 }: UseScrollSpyOptions) {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [activeSection, setActiveSection] = useState(sectionIds[0] || '');

  useEffect(() => {
    const handleScroll = () => {
      // Update scroll position
      setScrollPosition(window.scrollY);
      
      // Get all section elements that exist in the DOM
      const availableSections = sectionIds.filter(id => document.getElementById(id));
      
      // Find the section that's currently most visible in the viewport
      for (const section of availableSections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          // Consider a section "active" when its top part is near the top of the viewport
          if (rect.top <= offset && rect.bottom >= offset) {
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
  }, [activeSection, sectionIds, offset]);

  // Function to navigate to a section with smooth scrolling
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      // Set as active section immediately for better UX
      setActiveSection(sectionId);
      
      // Smooth scroll with an offset to account for fixed header
      window.scrollTo({
        top: element.offsetTop - 80, // Adjust this offset based on your header height
        behavior: 'smooth'
      });
      
      return true;
    }
    return false;
  };

  return {
    scrollPosition,
    activeSection,
    scrollToSection,
    isScrolled: scrollPosition > 10
  };
}
