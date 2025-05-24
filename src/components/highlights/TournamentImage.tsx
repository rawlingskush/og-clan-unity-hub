
import React, { useState } from 'react';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { Skeleton } from '@/components/ui/skeleton';

interface TournamentImageProps {
  src: string;
  alt: string;
  tournament: string;
  className?: string;
}

const TournamentImage = ({ src, alt, tournament, className = "" }: TournamentImageProps) => {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  const handleLoad = () => {
    console.log(`Image loaded successfully: ${src} for ${tournament}`);
    setIsLoading(false);
  };

  const handleError = (e: React.SyntheticEvent<HTMLImageElement>) => {
    console.log(`Failed to load image: ${src} for tournament: ${tournament}`);
    console.log('Error details:', e);
    setIsLoading(false);
    setHasError(true);
  };

  if (hasError) {
    console.log(`Showing fallback for ${tournament} - image failed to load`);
    return (
      <div className={`bg-black/30 rounded border border-ogclan/20 flex items-center justify-center ${className}`}>
        <div className="text-center p-4">
          <div className="text-ogclan text-sm font-semibold mb-1">OG CLAN</div>
          <div className="text-gray-400 text-xs">{tournament}</div>
        </div>
      </div>
    );
  }

  return (
    <div className={`relative bg-black/30 rounded border border-ogclan/20 overflow-hidden group ${className}`}>
      {isLoading && (
        <div className="absolute inset-0 z-10">
          <Skeleton className="w-full h-full bg-gray-700" />
        </div>
      )}
      
      <AspectRatio ratio={16 / 10}>
        <img 
          src={src} 
          alt={alt}
          className="w-full h-full object-cover object-center 
                     opacity-80 group-hover:opacity-100 
                     transition-all duration-500 ease-in-out
                     filter contrast-125 brightness-110 saturate-110
                     group-hover:scale-110 group-hover:contrast-150
                     focus-clan-name"
          onLoad={handleLoad}
          onError={handleError}
          style={{
            objectPosition: 'center 30%'
          }}
        />
      </AspectRatio>
      
      {/* Overlay gradient to enhance text readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-black/10 
                      opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
      
      {/* Scanner line effect */}
      <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-ogclan/60 to-transparent 
                      opacity-0 group-hover:opacity-100 transition-opacity duration-300
                      animate-[scanner-line_2s_ease-in-out_infinite]" />
    </div>
  );
};

export default TournamentImage;
