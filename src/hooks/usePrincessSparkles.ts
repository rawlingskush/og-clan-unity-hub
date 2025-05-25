
import { useState, useEffect, useRef } from 'react';

export interface PrincessParticle {
  id: number;
  x: number;
  y: number;
  size: number;
  opacity: number;
  type: 'heart' | 'star' | 'crown';
  color: string;
  velocity: { x: number; y: number };
}

export function usePrincessSparkles(isPrincessCard: boolean) {
  const [princessParticles, setPrincessParticles] = useState<PrincessParticle[]>([]);
  const animationFrameRef = useRef<number>();
  const lastUpdateRef = useRef<number>(0);

  // Enhanced particle animation with RAF for better mobile performance
  useEffect(() => {
    if (isPrincessCard && princessParticles.length > 0) {
      const animate = (timestamp: number) => {
        // Throttle updates to 30fps for better mobile performance
        if (timestamp - lastUpdateRef.current >= 33) {
          setPrincessParticles(prev => 
            prev.map(particle => ({
              ...particle,
              x: particle.x + particle.velocity.x,
              y: particle.y + particle.velocity.y,
              opacity: particle.opacity - 0.012,
              size: particle.size * 0.995
            })).filter(p => p.opacity > 0 && p.y > -50)
          );
          lastUpdateRef.current = timestamp;
        }
        
        if (princessParticles.length > 0) {
          animationFrameRef.current = requestAnimationFrame(animate);
        }
      };
      
      animationFrameRef.current = requestAnimationFrame(animate);
      
      return () => {
        if (animationFrameRef.current) {
          cancelAnimationFrame(animationFrameRef.current);
        }
      };
    }
  }, [princessParticles.length, isPrincessCard]);

  // Optimized particle generation for mobile
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
    
    // Reduce particle count for better mobile performance
    const particleCount = 'touches' in e ? 1 : 2;
    const colors = ['#ff69b4', '#ff1493', '#dda0dd', '#da70d6'];
    const types: ('heart' | 'star' | 'crown')[] = ['heart', 'star', 'crown'];
    
    const newParticles = Array.from({ length: particleCount }, (_, i) => ({
      id: Date.now() + i,
      x: x + (Math.random() * 20 - 10),
      y: y + (Math.random() * 20 - 10),
      size: 3 + Math.random() * 1.5,
      opacity: 0.8 + Math.random() * 0.2,
      type: types[Math.floor(Math.random() * types.length)],
      color: colors[Math.floor(Math.random() * colors.length)],
      velocity: {
        x: (Math.random() - 0.5) * 0.8,
        y: -1.2 - Math.random() * 0.5
      }
    }));
    
    setPrincessParticles(prev => {
      // Limit max particles for performance
      const maxParticles = 'ontouchstart' in window ? 8 : 12;
      const combined = [...prev, ...newParticles];
      return combined.slice(-maxParticles);
    });
  };

  return {
    princessParticles,
    generatePrincessParticles
  };
}
