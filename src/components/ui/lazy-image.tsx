
import React, { useState } from 'react';
import { useLazyLoading } from '@/hooks/use-lazy-loading';
import { Skeleton } from '@/components/ui/skeleton';
import { cn } from '@/lib/utils';

interface LazyImageProps {
  src: string;
  alt: string;
  className?: string;
  fallbackSrc?: string;
  aspectRatio?: string;
  objectFit?: 'cover' | 'contain' | 'fill' | 'scale-down' | 'none';
  objectPosition?: string;
  onLoad?: () => void;
  onError?: (error: React.SyntheticEvent<HTMLImageElement>) => void;
  priority?: boolean; // Skip lazy loading for above-the-fold images
  sizes?: string; // Responsive image sizes
  quality?: number; // Image quality hint
}

const LazyImage = ({
  src,
  alt,
  className = "",
  fallbackSrc = "/lovable-uploads/25b0b30a-3357-4fa2-8db5-dfc1c6e81e56.png",
  aspectRatio = "16/10",
  objectFit = "cover",
  objectPosition = "center",
  onLoad,
  onError,
  priority = false,
  sizes = "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw",
  quality = 75
}: LazyImageProps) => {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [currentSrc, setCurrentSrc] = useState(src);
  
  const { elementRef, isVisible } = useLazyLoading({
    threshold: 0.1,
    rootMargin: '100px' // Load images 100px before they come into view
  });

  // Skip lazy loading for priority images (above the fold)
  const shouldLoad = priority || isVisible;

  const handleLoad = () => {
    console.log(`Lazy image loaded successfully: ${currentSrc}`);
    setIsLoading(false);
    onLoad?.();
  };

  const handleError = (e: React.SyntheticEvent<HTMLImageElement>) => {
    console.log(`Lazy image failed to load: ${currentSrc}, switching to fallback`);
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
      ref={elementRef}
      className={cn("relative overflow-hidden bg-black/20 border border-ogclan/20", className)}
      style={{ aspectRatio }}
    >
      {/* Loading skeleton */}
      {(isLoading || !shouldLoad) && (
        <div className="absolute inset-0 z-10">
          <Skeleton className="w-full h-full bg-gray-700/50 animate-pulse" />
          {!shouldLoad && (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-ogclan/50 text-xs">Loading...</div>
            </div>
          )}
        </div>
      )}
      
      {/* Actual image - only render when should load */}
      {shouldLoad && (
        <img 
          src={currentSrc}
          alt={alt}
          loading={priority ? "eager" : "lazy"}
          decoding="async"
          className={cn(
            "w-full h-full transition-all duration-500 ease-in-out",
            objectFit === 'cover' && "object-cover",
            objectFit === 'contain' && "object-contain",
            objectFit === 'fill' && "object-fill",
            isLoading ? "opacity-0" : "opacity-100"
          )}
          style={{ objectPosition }}
          sizes={sizes}
          onLoad={handleLoad}
          onError={handleError}
        />
      )}
      
      {/* Error fallback */}
      {hasError && currentSrc === fallbackSrc && (
        <div className="absolute inset-0 flex items-center justify-center bg-black/40">
          <div className="text-center p-4">
            <div className="text-ogclan text-sm font-semibold mb-1">OG CLAN</div>
            <div className="text-gray-400 text-xs">Image Unavailable</div>
          </div>
        </div>
      )}
    </div>
  );
};

export default LazyImage;
