
import React, { useState, useEffect } from 'react';
import { Shield } from 'lucide-react';
import AnimatedContent from '@/components/AnimatedContent';

const RecruitmentNote = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const position = window.scrollY;
      const windowHeight = window.innerHeight;
      const element = document.getElementById('recruitment-note');
      
      if (element) {
        const elementTop = element.getBoundingClientRect().top;
        
        if (elementTop < windowHeight * 0.75) {
          setIsVisible(true);
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    // Initial check
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="recruitment-note" className="py-12 bg-black relative overflow-hidden">
      {/* Tactical grid background */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAwIDEwIEwgNDAgMTAgTSAxMCAwIEwgMTAgNDAgTSAwIDIwIEwgNDAgMjAgTSAyMCAwIEwgMjAgNDAgTSAwIDMwIEwgNDAgMzAgTSAzMCAwIEwgMzAgNDAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyMTIsMTc1LDU1LDAuMDUpIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-10 pointer-events-none"></div>

      {/* Scanner line */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-ogclan/30 to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-ogclan/30 to-transparent"></div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4">
        <AnimatedContent
          animation={isVisible ? "fade-in-up" : ""}
          className="relative border border-ogclan/20 bg-black/70 backdrop-blur-sm p-6 transition-all duration-700"
          style={{
            transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
            opacity: isVisible ? 1 : 0
          }}
        >
          {/* Tactical corner elements */}
          <div className="absolute top-0 left-0 w-5 h-5 border-t border-l border-ogclan/60"></div>
          <div className="absolute top-0 right-0 w-5 h-5 border-t border-r border-ogclan/60"></div>
          <div className="absolute bottom-0 left-0 w-5 h-5 border-b border-l border-ogclan/60"></div>
          <div className="absolute bottom-0 right-0 w-5 h-5 border-b border-r border-ogclan/60"></div>

          {/* Scanning line effect */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute h-[2px] w-full bg-gradient-to-r from-transparent via-ogclan/30 to-transparent animate-[tactical-scan_3s_linear_infinite]"></div>
          </div>

          <div className="flex items-center justify-center mb-4">
            <div className="w-12 h-[1px] bg-ogclan/40"></div>
            <Shield className="mx-3 h-5 w-5 text-ogclan" />
            <div className="w-12 h-[1px] bg-ogclan/40"></div>
          </div>

          <h3 className="text-2xl font-orbitron text-center text-gradient-gold mb-4">RECRUITMENT BRIEFING</h3>
          
          <p className="text-gray-300 mb-3 text-center">
            Our soldiers are the backbone of OG Clan Cameroon's tactical operations. Each operator is carefully selected based on their unique combat style and commitment to excellence.
          </p>
          
          <p className="text-gray-300 mb-4 text-center">
            The enrollment process is rigorous, designed to identify those with both the skill and mentality required for our high-stakes competitive environment.
          </p>

          <div className="text-center mt-6">
            <span className="inline-block text-sm border border-ogclan/30 bg-black/50 px-3 py-1 text-ogclan animate-pulse-slow">
              ACTIVE RECRUITMENT STATUS: <span className="font-bold">ONGOING</span>
            </span>
          </div>
        </AnimatedContent>
      </div>
    </section>
  );
};

export default RecruitmentNote;
