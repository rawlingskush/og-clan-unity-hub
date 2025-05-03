
import { useState, useEffect } from 'react';

export interface SparkParticle {
  id: number;
  x: number;
  y: number;
  size: number;
  opacity: number;
}

/**
 * Custom hook to manage spark particle effects for soldier cards
 * @param isActiveCard Whether the card should display spark effects
 */
export const useSoldierSparkles = (isActiveCard: boolean) => {
  const [sparkParticles, setSparkParticles] = useState<SparkParticle[]>([]);
  
  // Effect to animate existing particles
  useEffect(() => {
    if ((isActiveCard) && sparkParticles.length > 0) {
      const timer = setInterval(() => {
        setSparkParticles(prev => 
          prev.map(particle => ({
            ...particle,
            y: particle.y - 1,
            opacity: particle.opacity - 0.02,
            size: particle.size * 0.98
          })).filter(p => p.opacity > 0)
        );
      }, 50);
      
      return () => clearInterval(timer);
    }
  }, [sparkParticles, isActiveCard]);

  // Function to generate spark particles
  const generateSparkParticles = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isActiveCard) return;
    
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const newParticles = Array.from({ length: 5 }, (_, i) => ({
      id: Date.now() + i,
      x: x + (Math.random() * 40 - 20),
      y: y + (Math.random() * 40 - 20),
      size: 3 + Math.random() * 2,
      opacity: 0.8 + Math.random() * 0.2
    }));
    
    setSparkParticles(prev => [...prev, ...newParticles]);
  };

  // Convert touch event to mouse event for sparkles
  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    if (isActiveCard) {
      const touch = e.touches[0];
      const rect = e.currentTarget.getBoundingClientRect();
      const x = touch.clientX - rect.left;
      const y = touch.clientY - rect.top;
      
      const newParticles = Array.from({ length: 3 }, (_, i) => ({
        id: Date.now() + i,
        x: x + (Math.random() * 30 - 15),
        y: y + (Math.random() * 30 - 15),
        size: 2 + Math.random() * 2,
        opacity: 0.7 + Math.random() * 0.3
      }));
      
      setSparkParticles(prev => [...prev, ...newParticles]);
    }
  };
  
  return {
    sparkParticles,
    generateSparkParticles,
    handleTouchMove
  };
};
