
import React, { useState } from 'react';
import { Skeleton } from '@/components/ui/skeleton';
import { cn } from '@/lib/utils';

interface CODMEnhancedImageProps {
  src: string;
  alt: string;
  className?: string;
  fallbackSrc?: string;
  aspectRatio?: string;
  loading?: 'lazy' | 'eager';
  objectFit?: 'cover' | 'contain' | 'fill' | 'scale-down' | 'none';
  objectPosition?: string;
  onLoad?: () => void;
  onError?: (error: React.SyntheticEvent<HTMLImageElement>) => void;
  mobileOptimized?: boolean;
  tacticalOverlay?: boolean;
}

const CODMEnhancedImage = ({
  src,
  alt,
  className = "",
  fallbackSrc = "/lovable-uploads/25b0b30a-3357-4fa2-8db5-dfc1c6e81e56.png",
  aspectRatio = "16/10",
  loading = "lazy",
  objectFit = "cover",
  objectPosition = "center",
  onLoad,
  onError,
  mobileOptimized = true,
  tacticalOverlay = false
}: CODMEnhancedImageProps) => {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [currentSrc, setCurrentSrc] = useState(src);

  const handleLoad = () => {
    console.log(`CODM enhanced image loaded successfully: ${currentSrc}`);
    setIsLoading(false);
    onLoad?.();
  };

  const handleError = (e: React.SyntheticEvent<HTMLImageElement>) => {
    console.log(`CODM enhanced image failed to load: ${currentSrc}, switching to fallback`);
    setIsLoading(false);
    setHasError(true);
    
    if (currentSrc !== fallbackSrc) {
      setCurrentSrc(fallbackSrc);
      setHasError(false);
      setIsLoading(true);
    }
    
    onError?.(e);
  };

  return (
    <div 
      className={cn(
        "relative overflow-hidden bg-black/20 border border-ogclan/20",
        mobileOptimized && "transform-gpu will-change-transform",
        tacticalOverlay && "before:absolute before:inset-0 before:bg-gradient-to-t before:from-black/60 before:to-transparent before:z-10",
        className
      )}
      style={{ aspectRatio }}
    >
      {isLoading && (
        <div className="absolute inset-0 z-20">
          <Skeleton className="w-full h-full bg-gray-700/50 animate-pulse" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-ogclan text-xs font-semibold animate-pulse">Loading CODM Asset...</div>
          </div>
        </div>
      )}
      
      <img 
        src={currentSrc}
        alt={alt}
        loading={loading}
        className={cn(
          "w-full h-full transition-all duration-500 ease-in-out",
          objectFit === 'cover' && "object-cover",
          objectFit === 'contain' && "object-contain",
          objectFit === 'fill' && "object-fill",
          mobileOptimized && "transform-gpu",
          isLoading ? "opacity-0 scale-105" : "opacity-100 scale-100"
        )}
        style={{ objectPosition }}
        onLoad={handleLoad}
        onError={handleError}
      />
      
      {tacticalOverlay && !isLoading && (
        <div className="absolute inset-0 z-10 pointer-events-none">
          <div className="absolute top-2 right-2 w-2 h-2 bg-ogclan rounded-full animate-pulse"></div>
          <div className="absolute bottom-2 left-2 w-8 h-1 bg-gradient-to-r from-ogclan to-transparent opacity-60"></div>
        </div>
      )}
      
      {hasError && currentSrc === fallbackSrc && (
        <div className="absolute inset-0 flex items-center justify-center bg-black/40 z-30">
          <div className="text-center p-4">
            <div className="text-ogclan text-sm font-semibold mb-1">OG CLAN</div>
            <div className="text-gray-400 text-xs">CODM Asset Unavailable</div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CODMEnhancedImage;
