
import React, { useState } from 'react';
import { Skeleton } from '@/components/ui/skeleton';
import { cn } from '@/lib/utils';

interface CODMEnhancedImageProps {
  src: string;
  alt: string;
  className?: string;
  aspectRatio?: string;
  loading?: 'lazy' | 'eager';
  objectFit?: 'cover' | 'contain' | 'fill';
  overlay?: boolean;
  tacticalGrid?: boolean;
  onLoad?: () => void;
}

const CODMEnhancedImage = ({
  src,
  alt,
  className = "",
  aspectRatio = "16/10",
  loading = "lazy",
  objectFit = "cover",
  overlay = false,
  tacticalGrid = false,
  onLoad
}: CODMEnhancedImageProps) => {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  const handleLoad = () => {
    setIsLoading(false);
    onLoad?.();
  };

  const handleError = () => {
    setIsLoading(false);
    setHasError(true);
  };

  return (
    <div 
      className={cn("relative overflow-hidden bg-black/20 border border-ogclan/20", className)}
      style={{ aspectRatio }}
    >
      {isLoading && (
        <div className="absolute inset-0 z-10">
          <Skeleton className="w-full h-full bg-gray-700/50" />
        </div>
      )}
      
      <img 
        src={src}
        alt={alt}
        loading={loading}
        className={cn(
          "w-full h-full transition-all duration-500 ease-in-out transform hover:scale-105",
          objectFit === 'cover' && "object-cover",
          objectFit === 'contain' && "object-contain",
          objectFit === 'fill' && "object-fill",
          isLoading ? "opacity-0" : "opacity-100"
        )}
        onLoad={handleLoad}
        onError={handleError}
      />
      
      {/* Tactical overlay */}
      {overlay && (
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-40"></div>
      )}
      
      {/* Tactical grid pattern */}
      {tacticalGrid && (
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAwIDEwIEwgNDAgMTAgTSAxMCAwIEwgMTAgNDAgTSAwIDIwIEwgNDAgMjAgTSAyMCAwIEwgMjAgNDAgTSAwIDMwIEwgNDAgMzAgTSAzMCAwIEwgMzAgNDAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyMTIsMTc1LDU1LDAuMDcpIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-20 hover:opacity-30 transition-opacity duration-300"></div>
      )}
      
      {hasError && (
        <div className="absolute inset-0 flex items-center justify-center bg-black/40">
          <div className="text-center p-4">
            <div className="text-ogclan text-sm font-semibold mb-1">OG CLAN</div>
            <div className="text-gray-400 text-xs">CODM Image Unavailable</div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CODMEnhancedImage;
