
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
        />
        
        {/* Overlay with glassmorphism effect */}
        <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent backdrop-blur-[2px]"></div>
          <div className="absolute bottom-0 left-0 right-0 p-5 text-center z-10 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
            <h4 className="text-xl font-bold text-white mb-3 border-b border-ogclan pb-2">{title}</h4>
            <p className="text-white/90">{description}</p>
          </div>
          
          {/* Decorative elements */}
          <div className="absolute top-6 left-6 w-10 h-10 border-t-2 border-l-2 border-ogclan/80"></div>
          <div className="absolute top-6 right-6 w-10 h-10 border-t-2 border-r-2 border-ogclan/80"></div>
          <div className="absolute bottom-6 left-6 w-10 h-10 border-b-2 border-l-2 border-ogclan/80"></div>
          <div className="absolute bottom-6 right-6 w-10 h-10 border-b-2 border-r-2 border-ogclan/80"></div>
        </div>
        
        {/* Static label */}
        <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent group-hover:opacity-0 transition-opacity duration-300">
          <h3 className="text-xl font-bold text-ogclan">{shortTitle}</h3>
          <p className="text-gray-300">{description}</p>
        </div>
      </div>
    </AnimatedContent>
  );
};

export default BattleImageCard;
