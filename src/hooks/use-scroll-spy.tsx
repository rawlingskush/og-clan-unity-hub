
import { useState, useEffect } from 'react';
import { useIsMobile } from './use-mobile';

interface UseScrollSpyOptions {
  sectionIds: string[];
  offset?: number;
}

export function useScrollSpy({ sectionIds, offset = 100 }: UseScrollSpyOptions) {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [activeSection, setActiveSection] = useState(sectionIds[0] || '');
  const isMobile = useIsMobile();
  
  // Adjust offset for mobile devices
  const effectiveOffset = isMobile ? 70 : offset;

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
          if (rect.top <= effectiveOffset && rect.bottom >= effectiveOffset) {
            if (activeSection !== section) {
              setActiveSection(section);
            }
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    // Initial call to set the active section on mount
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, [activeSection, sectionIds, effectiveOffset, isMobile]);

  // Function to navigate to a section, improved to support child elements
  const scrollToSection = (sectionId: string) => {
    // Try to find the specific element first (for sub-sections like timers)
    const targetElement = document.getElementById(sectionId);
    
    if (targetElement) {
      // Set as active section immediately for better UX
      const parentSection = findParentSection(targetElement, sectionIds);
      if (parentSection) {
        setActiveSection(parentSection);
      }
      
      // Direct scroll with positioning calculation for consistent behavior
      const offsetTop = targetElement.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: offsetTop - (isMobile ? 70 : 80), // Adjust offset based on device and header height
        behavior: 'auto' // Use 'auto' instead of 'smooth' for iOS compatibility
      });
      
      return true;
    }
    
    return false;
  };
  
  // Helper function to find the parent section of an element
  const findParentSection = (element: HTMLElement, sectionIds: string[]): string | null => {
    let current: HTMLElement | null = element;
    
    while (current) {
      if (sectionIds.includes(current.id)) {
        return current.id;
      }
      current = current.parentElement;
    }
    
    return null;
  };

  return {
    scrollPosition,
    activeSection,
    scrollToSection,
    isScrolled: scrollPosition > 10
  };
}
