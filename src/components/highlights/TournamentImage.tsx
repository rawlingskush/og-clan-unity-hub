
import React from 'react';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import EnhancedImage from '@/components/ui/enhanced-image';

interface TournamentImageProps {
  src: string;
  alt: string;
  tournament: string;
  className?: string;
}

const TournamentImage = ({ src, alt, tournament, className = "" }: TournamentImageProps) => {
  const handleError = (e: React.SyntheticEvent<HTMLImageElement>) => {
    // Image failed to load - error handling could be added here if needed
  };

  return (
    <div className={`relative bg-black/30 rounded border border-ogclan/20 overflow-hidden group ${className}`}>
      <AspectRatio ratio={16 / 10}>
        <EnhancedImage
          src={src}
          alt={alt}
          className="group-hover:scale-110 transition-transform duration-500 ease-in-out
                     filter contrast-125 brightness-110 saturate-110
                     group-hover:contrast-150"
          objectPosition="center 30%"
          onError={handleError}
        />
      </AspectRatio>
      
      {/* Enhanced overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/20 
                      opacity-60 group-hover:opacity-80 transition-opacity duration-300 pointer-events-none" />
      
      {/* Enhanced scanner line effect */}
      <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-ogclan/70 to-transparent 
                      opacity-0 group-hover:opacity-100 transition-opacity duration-300
                      animate-[scanner-line_2s_ease-in-out_infinite]" />
      
      {/* Tournament label overlay */}
      <div className="absolute bottom-2 left-2 right-2">
        <div className="bg-black/60 backdrop-blur-sm rounded px-2 py-1 border border-ogclan/30">
          <div className="text-ogclan text-xs font-semibold">{tournament}</div>
        </div>
      </div>
    </div>
  );
};

export default TournamentImage;
