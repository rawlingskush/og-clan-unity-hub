
import { useState, useEffect, useRef, useCallback } from 'react';

export interface OptimizedParticle {
  id: number;
  x: number;
  y: number;
  size: number;
  opacity: number;
  velocity?: { x: number; y: number };
  type?: 'spark' | 'heart' | 'star' | 'crown';
  color?: string;
}

export function useOptimizedSparkles(isActive: boolean, maxParticles: number = 8) {
  const [particles, setParticles] = useState<OptimizedParticle[]>([]);
  const animationFrameRef = useRef<number>();
  const lastUpdateRef = useRef<number>(0);
  const particleIdRef = useRef(0);

  // Optimized animation loop with throttling
  useEffect(() => {
    if (!isActive || particles.length === 0) {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      return;
    }

    const animate = (timestamp: number) => {
      // Throttle to 30fps for better mobile performance
      if (timestamp - lastUpdateRef.current >= 33) {
        setParticles(prev => 
          prev.map(particle => ({
            ...particle,
            x: particle.x + (particle.velocity?.x || 0),
            y: particle.y + (particle.velocity?.y || -1),
            opacity: particle.opacity - 0.015,
            size: particle.size * 0.99
          })).filter(p => p.opacity > 0 && p.y > -50)
        );
        lastUpdateRef.current = timestamp;
      }
      
      animationFrameRef.current = requestAnimationFrame(animate);
    };
    
    animationFrameRef.current = requestAnimationFrame(animate);
    
    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [isActive, particles.length]);

  // Optimized particle generation
  const generateParticles = useCallback((e: React.MouseEvent | React.TouchEvent, particleType: 'spark' | 'princess' = 'spark') => {
    if (!isActive) return;
    
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
    
    const particleCount = 'touches' in e ? 1 : 2;
    const colors = particleType === 'princess' 
      ? ['#ff69b4', '#ff1493', '#dda0dd'] 
      : ['#D4AF37'];
    const types = particleType === 'princess' 
      ? ['heart', 'star', 'crown'] as const
      : ['spark'] as const;
    
    const newParticles = Array.from({ length: particleCount }, () => ({
      id: ++particleIdRef.current,
      x: x + (Math.random() * 20 - 10),
      y: y + (Math.random() * 20 - 10),
      size: 2 + Math.random() * 2,
      opacity: 0.8,
      velocity: {
        x: (Math.random() - 0.5) * 0.8,
        y: -1 - Math.random() * 0.5
      },
      type: types[Math.floor(Math.random() * types.length)],
      color: colors[Math.floor(Math.random() * colors.length)]
    }));
    
    setParticles(prev => {
      const combined = [...prev, ...newParticles];
      return combined.slice(-maxParticles); // Limit particles for performance
    });
  }, [isActive, maxParticles]);

  // Clear particles when component unmounts or becomes inactive
  useEffect(() => {
    if (!isActive) {
      setParticles([]);
    }
  }, [isActive]);

  return {
    particles,
    generateParticles
  };
}
