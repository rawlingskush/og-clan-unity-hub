
import React from 'react';
import AnimatedContent from '../AnimatedContent';

interface BattleImageCardProps {
  imageSrc: string;
  title: string;
  shortTitle: string;
  description: string;
  animation?: 'slide-in-left' | 'fade-in-up' | 'slide-in-right';
  delay?: number;
}

const BattleImageCard = ({ 
  imageSrc, 
  title, 
  shortTitle, 
  description, 
  animation = 'fade-in-up',
  delay = 0
}: BattleImageCardProps) => {
  return (
    <AnimatedContent animation={animation} delay={delay}>
      <div className="battle-image-card relative group overflow-hidden rounded-2xl border border-ogclan/20 transform transition-all duration-500 hover:shadow-[0_5px_30px_rgba(212,175,55,0.3)]">
        <img 
          src={imageSrc} 
          alt={title} 
          className="w-full h-[350px] object-cover transition-transform duration-700 group-hover:scale-110"
          loading="lazy"
        />
        
        {/* Character overlay enhancement */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent opacity-60"></div>
        
        {/* Tactical grid overlay */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAwIDEwIEwgNDAgMTAgTSAxMCAwIEwgMTAgNDAgTSAwIDIwIEwgNDAgMjAgTSAyMCAwIEwgMjAgNDAgTSAwIDMwIEwgNDAgMzAgTSAzMCAwIEwgMzAgNDAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyMTIsMTc1LDU1LDAuMDcpIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-20 group-hover:opacity-30 transition-opacity duration-300"></div>
        
        {/* Overlay with glassmorphism effect */}
        <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent backdrop-blur-[2px] group-hover:backdrop-blur-[4px]"></div>
          <div className="absolute bottom-0 left-0 right-0 p-5 text-center z-10 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
            <h4 className="text-xl font-bold text-white mb-3 border-b border-ogclan pb-2">{title}</h4>
            <p className="text-white/90">{description}</p>
          </div>
          
          {/* Glowing decorative elements */}
          <div className="absolute top-6 left-6 w-10 h-10 border-t-2 border-l-2 border-ogclan/80 shadow-[0_0_10px_rgba(212,175,55,0.3)]"></div>
          <div className="absolute top-6 right-6 w-10 h-10 border-t-2 border-r-2 border-ogclan/80 shadow-[0_0_10px_rgba(212,175,55,0.3)]"></div>
          <div className="absolute bottom-6 left-6 w-10 h-10 border-b-2 border-l-2 border-ogclan/80 shadow-[0_0_10px_rgba(212,175,55,0.3)]"></div>
          <div className="absolute bottom-6 right-6 w-10 h-10 border-b-2 border-r-2 border-ogclan/80 shadow-[0_0_10px_rgba(212,175,55,0.3)]"></div>
        </div>
        
        {/* Static label */}
        <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent group-hover:opacity-0 transition-opacity duration-300">
          <h3 className="text-xl font-bold text-ogclan">{shortTitle}</h3>
          <p className="text-gray-300 text-sm md:text-base">{description}</p>
        </div>
      </div>
    </AnimatedContent>
  );
};

export default BattleImageCard;
