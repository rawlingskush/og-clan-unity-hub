
import { useState, useEffect } from 'react';

export interface SparkParticle {
  id: number;
  x: number;
  y: number;
  size: number;
  opacity: number;
}

export function useSoldierSparkles(isActiveCard: boolean) {
  const [sparkParticles, setSparkParticles] = useState<SparkParticle[]>([]);

  // Special effect for spotlight soldiers - manage spark particles lifecycle
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
  const generateSparkParticles = (e: React.MouseEvent<HTMLDivElement> | React.TouchEvent<HTMLDivElement>) => {
    if (!isActiveCard) return;
    
    let x: number, y: number;
    
    if ('touches' in e) {
      // Touch event
      const touch = e.touches[0];
      const rect = e.currentTarget.getBoundingClientRect();
      x = touch.clientX - rect.left;
      y = touch.clientY - rect.top;
    } else {
      // Mouse event
      const rect = e.currentTarget.getBoundingClientRect();
      x = e.clientX - rect.left;
      y = e.clientY - rect.top;
    }
    
    const particleCount = 'touches' in e ? 3 : 5;
    const spreadFactor = 'touches' in e ? 15 : 20;
    const sizeFactor = 'touches' in e ? 2 : 3;
    
    const newParticles = Array.from({ length: particleCount }, (_, i) => ({
      id: Date.now() + i,
      x: x + (Math.random() * spreadFactor*2 - spreadFactor),
      y: y + (Math.random() * spreadFactor*2 - spreadFactor),
      size: sizeFactor + Math.random() * 2,
      opacity: 0.7 + Math.random() * 0.3
    }));
    
    setSparkParticles(prev => [...prev, ...newParticles]);
  };

  return {
    sparkParticles,
    generateSparkParticles
  };
}
