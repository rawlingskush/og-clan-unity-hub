
import React, { useEffect, useState } from 'react';

const HeroBackground = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [scrollPosition, setScrollPosition] = useState(0);

  // Handle mouse movement for parallax effect
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20, // Normalized mouse position
        y: (e.clientY / window.innerHeight - 0.5) * 20
      });
    };

    // Handle scroll for parallax effect
    const handleScroll = () => {
      setScrollPosition(window.scrollY * 0.5);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      {/* Main background with parallax effect */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/80"></div>
        
        {/* Background image with parallax effect */}
        <div 
          className="absolute inset-0 bg-center bg-cover bg-no-repeat transition-transform duration-[300ms] ease-out"
          style={{
            backgroundImage: "url('/lovable-uploads/afb763c8-53f8-4c32-92ad-20ef2c253f23.png')",
            transform: `translate(${mousePosition.x * -0.1}px, ${mousePosition.y * -0.1}px) scale(1.1)`
          }}
        ></div>
        
        {/* Tactical grid overlay */}
        <div 
          className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAwIDEwIEwgNDAgMTAgTSAxMCAwIEwgMTAgNDAgTSAwIDIwIEwgNDAgMjAgTSAyMCAwIEwgMjAgNDAgTSAwIDMwIEwgNDAgMzAgTSAzMCAwIEwgMzAgNDAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyMTIsMTc1LDU1LDAuMDcpIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')]" 
          style={{ 
            opacity: 0.15,
            transform: `translateY(${scrollPosition * 0.1}px)` 
          }}
        ></div>
        
        {/* Gold glow effect */}
        <div 
          className="absolute top-1/2 left-1/2 w-[800px] h-[800px] -translate-x-1/2 -translate-y-1/2"
          style={{
            background: "radial-gradient(circle, rgba(212,175,55,0.15) 0%, transparent 70%)",
            transform: `translate(calc(-50% + ${mousePosition.x * 0.3}px), calc(-50% + ${mousePosition.y * 0.3}px))`,
            transition: 'transform 0.3s ease-out'
          }}
        ></div>

        {/* Animated scanner lines */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-ogclan/20 to-transparent"></div>
          <div className="absolute top-0 left-0 h-full w-[1px] bg-ogclan/20 animate-[scanner-line_8s_ease-in-out_infinite]"></div>
          <div className="absolute top-0 right-0 h-full w-[1px] bg-ogclan/20 animate-[scanner-line_12s_ease-in-out_infinite_reverse]"></div>
        </div>

        {/* Tactical targeting element */}
        <div 
          className="absolute top-1/4 right-1/4 w-40 h-40 opacity-20 transition-transform duration-700"
          style={{
            transform: `translate(${mousePosition.x * 0.3}px, ${mousePosition.y * 0.3}px)`,
          }}
        >
          <div className="absolute inset-0 rounded-full border border-ogclan/50 animate-pulse-slow"></div>
          <div className="absolute inset-[10px] rounded-full border border-ogclan/40"></div>
          <div className="absolute top-1/2 left-0 w-full h-[1px] bg-ogclan/40"></div>
          <div className="absolute top-0 left-1/2 w-[1px] h-full bg-ogclan/40"></div>
        </div>

        {/* Dynamic particles */}
        <div className="absolute inset-0">
          <div className="absolute h-2 w-2 rounded-full bg-ogclan/40 top-1/4 left-1/3 animate-[float_10s_infinite_ease-in-out]"></div>
          <div className="absolute h-3 w-3 rounded-full bg-ogclan/30 top-2/3 right-1/4 animate-[float_15s_infinite_ease-in-out_1s]"></div>
          <div className="absolute h-1 w-1 rounded-full bg-ogclan/50 top-1/2 left-2/3 animate-[float_7s_infinite_ease-in-out_0.5s]"></div>
        </div>
      </div>
    </>
  );
};

export default HeroBackground;
