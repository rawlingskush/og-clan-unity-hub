
import { useState, useEffect } from 'react';

export interface PrincessParticle {
  id: number;
  x: number;
  y: number;
  size: number;
  opacity: number;
  type: 'heart' | 'star' | 'crown';
  color: string;
}

export function usePrincessSparkles(isPrincessCard: boolean) {
  const [princessParticles, setPrincessParticles] = useState<PrincessParticle[]>([]);

  // Princess particle animation lifecycle
  useEffect(() => {
    if (isPrincessCard && princessParticles.length > 0) {
      const timer = setInterval(() => {
        setPrincessParticles(prev => 
          prev.map(particle => ({
            ...particle,
            y: particle.y - 1.5,
            opacity: particle.opacity - 0.015,
            size: particle.size * 0.99
          })).filter(p => p.opacity > 0)
        );
      }, 50);
      
      return () => clearInterval(timer);
    }
  }, [princessParticles, isPrincessCard]);

  // Function to generate princess-themed particles
  const generatePrincessParticles = (e: React.MouseEvent<HTMLDivElement> | React.TouchEvent<HTMLDivElement>) => {
    if (!isPrincessCard) return;
    
    let x: number, y: number;
    
    if ('touches' in e) {
      const touch = e.touches[0];
      const rect = e.currentTarget.getBoundingClientRect();
      x = touch.clientX - rect.left;
      y = touch.clientY - rect.top;
    } else {
      const rect = e.currentTarget.getBoundingClientRect();
      x = e.clientX - rect.left;
      y = e.clientY - rect.top;
    }
    
    const particleCount = 'touches' in e ? 2 : 3;
    const colors = ['#ff69b4', '#ff1493', '#dda0dd', '#da70d6'];
    const types: ('heart' | 'star' | 'crown')[] = ['heart', 'star', 'crown'];
    
    const newParticles = Array.from({ length: particleCount }, (_, i) => ({
      id: Date.now() + i,
      x: x + (Math.random() * 30 - 15),
      y: y + (Math.random() * 30 - 15),
      size: 3 + Math.random() * 2,
      opacity: 0.8 + Math.random() * 0.2,
      type: types[Math.floor(Math.random() * types.length)],
      color: colors[Math.floor(Math.random() * colors.length)]
    }));
    
    setPrincessParticles(prev => [...prev, ...newParticles]);
  };

  return {
    princessParticles,
    generatePrincessParticles
  };
}
