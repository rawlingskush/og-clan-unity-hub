
import React, { useState, useCallback } from 'react';
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
  priority?: boolean;
  sizes?: string;
}

const LazyImage = React.memo(({
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
  sizes = "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
}: LazyImageProps) => {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [currentSrc, setCurrentSrc] = useState(src);
  
  const { elementRef, isVisible } = useLazyLoading({
    threshold: 0.1,
    rootMargin: '50px'
  });

  const shouldLoad = priority || isVisible;

  const handleLoad = useCallback(() => {
    setIsLoading(false);
    onLoad?.();
  }, [onLoad]);

  const handleError = useCallback((e: React.SyntheticEvent<HTMLImageElement>) => {
    setIsLoading(false);
    setHasError(true);
    
    if (currentSrc !== fallbackSrc) {
      setCurrentSrc(fallbackSrc);
      setHasError(false);
      setIsLoading(true);
    }
    
    onError?.(e);
  }, [currentSrc, fallbackSrc, onError]);

  return (
    <div 
      ref={elementRef}
      className={cn("relative overflow-hidden bg-black/20 border border-ogclan/20", className)}
      style={{ aspectRatio }}
    >
      {(isLoading || !shouldLoad) && (
        <div className="absolute inset-0 z-10">
          <Skeleton className="w-full h-full bg-gray-700/50 animate-pulse" />
        </div>
      )}
      
      {shouldLoad && (
        <img 
          src={currentSrc}
          alt={alt}
          loading={priority ? "eager" : "lazy"}
          decoding="async"
          className={cn(
            "w-full h-full transition-opacity duration-300 ease-in-out",
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
});

LazyImage.displayName = 'LazyImage';

export default LazyImage;
