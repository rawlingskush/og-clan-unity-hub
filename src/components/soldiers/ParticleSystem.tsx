
import React from 'react';
import { motion } from 'framer-motion';

interface Particle {
  id: number;
  x: number;
  y: number;
  delay: number;
}

interface ParticleSystemProps {
  particles: Particle[];
  mousePosition: { x: number; y: number };
}

const ParticleSystem = ({ particles, mousePosition }: ParticleSystemProps) => {
  return (
    <div className="particle-container">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="particle"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ 
            opacity: [0, 1, 0],
            scale: [0, 1, 0],
            x: `${particle.x + mousePosition.x * 20}%`,
            y: `${particle.y + mousePosition.y * 20}%`
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            delay: particle.delay,
            ease: "easeInOut"
          }}
        />
      ))}
    </div>
  );
};

export default ParticleSystem;
