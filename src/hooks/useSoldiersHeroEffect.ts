
import { useState, useEffect } from 'react';

export function useSoldiersHeroEffect(scrollPosition: number) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  
  // Calculate opacity and transform based on scroll position
  const opacity = Math.max(0.2, 1 - scrollPosition * 0.003);
  const scale = Math.max(0.8, 1 - scrollPosition * 0.0005);
  const translateY = scrollPosition * 0.3;
  
  // Parallax effect for background on mouse move
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20
      });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    
    // Animation entrance effect
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 300);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      clearTimeout(timer);
    };
  }, []);
  
  return {
    mousePosition,
    isVisible,
    opacity,
    scale,
    translateY
  };
}
