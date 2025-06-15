
import React, { useRef, useEffect, useState } from 'react';
import { motion, useSpring } from 'framer-motion';

// Simple animated tactical background for homepage hero.
const TacticalBackground = () => {
  const bgRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const x = useSpring(0, { stiffness: 60, damping: 20 });
  const y = useSpring(0, { stiffness: 60, damping: 20 });

  useEffect(() => {
    const handle = (e: MouseEvent) => {
      if (!bgRef.current) return;
      const { innerWidth, innerHeight } = window;
      const cenX = innerWidth / 2;
      const cenY = innerHeight / 2;
      setMousePos({
        x: (e.clientX - cenX) / cenX,
        y: (e.clientY - cenY) / cenY,
      });
      x.set((e.clientX - cenX) * 0.08);
      y.set((e.clientY - cenY) * 0.08);
    };
    window.addEventListener('mousemove', handle);

    return () => window.removeEventListener('mousemove', handle);
  }, [x, y]);

  return (
    <motion.div 
      ref={bgRef}
      className="absolute inset-0 -z-10 overflow-hidden select-none"
      style={{
        background: "radial-gradient(circle at 60% 40%, #161a1f 40%, #020202 100%)",
      }}
    >
      {/* Animated background/parallax: tactical image */}
      <motion.div
        className="absolute inset-0 bg-[url('/lovable-uploads/ca8b1db8-bd70-4f24-b900-6b87f878e42b.png')] bg-cover bg-center opacity-30"
        style={{ x, y, scale: 1.08 }}
        animate={{
          filter: [
            'brightness(.98) blur(0.5px)',
            'brightness(1.02) blur(1.2px)',
            'brightness(.98) blur(0.5px)'
          ],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          repeatType: "mirror"
        }}
      />
      {/* Tactical grid overlay */}
      <div className="absolute inset-0 pointer-events-none bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAwIDEwIEwgNDAgMTAgTSAxMCAwIEwgMTAgNDAgTSAwIDIwIEwgNDAgMjAgTSAyMCAwIEwgMjAgNDAgTSAwIDMwIEwgNDAgMzAgTSAzMCAwIEwgMzAgNDAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyMTIsMTc1LDU1LDAuMTApIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-15" />
      {/* Scanner line, animated */}
      <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-ogclan/50 to-transparent animate-[scanner-line_10s_linear_infinite]" />
      {/* Top corner HUD elements, gently pulsing */}
      <motion.div
        className="absolute top-6 left-6 w-12 h-12 border border-ogclan/20 opacity-20"
        animate={{ scale: [1, 1.04, 1] }}
        transition={{ duration: 2.4, repeat: Infinity }}
      >
        <div className="absolute top-0 left-0 w-3 h-3 border-t border-l border-ogclan/40"></div>
        <div className="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-ogclan/40"></div>
      </motion.div>
      <motion.div
        className="absolute top-6 right-6 w-12 h-12 border border-ogclan/20 opacity-20"
        animate={{ scale: [1, 1.04, 1] }}
        transition={{ duration: 2.1, repeat: Infinity, delay: 0.8 }}
      >
        <div className="absolute top-0 right-0 w-3 h-3 border-t border-r border-ogclan/40"></div>
        <div className="absolute bottom-0 left-0 w-3 h-3 border-b border-l border-ogclan/40"></div>
      </motion.div>
    </motion.div>
  );
};

export default TacticalBackground;

