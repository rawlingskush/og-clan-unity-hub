
import React, { useEffect, useState } from 'react';
import { useLazyLoading } from '@/hooks/use-lazy-loading';
import { Skeleton } from '@/components/ui/skeleton';
import { cn } from '@/lib/utils';

interface EnhancedImageProps {
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
  priority?: boolean;
}

const EnhancedImage = ({
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
  priority = false
}: EnhancedImageProps) => {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [currentSrc, setCurrentSrc] = useState(src);
  
  const { elementRef, isVisible } = useLazyLoading({
    threshold: 0.1,
    rootMargin: '50px'
  });

  // Use eager loading for priority images or when loading prop is eager
  const shouldLoad = priority || loading === 'eager' || isVisible;

  // IMPORTANT: keep internal src in sync with prop changes (e.g. carousels)
  useEffect(() => {
    setCurrentSrc(src);
    setIsLoading(true);
    setHasError(false);
  }, [src]);

  const handleLoad = () => {
    setIsLoading(false);
    onLoad?.();
  };

  const handleError = (e: React.SyntheticEvent<HTMLImageElement>) => {
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
      {(isLoading || !shouldLoad) && (
        <div className="absolute inset-0 z-10">
          <Skeleton className="w-full h-full bg-gray-700/50" />
        </div>
      )}
      
      {shouldLoad && (
        <img 
          src={currentSrc}
          alt={alt}
          loading={loading}
          decoding="async"
          className={cn(
            "w-full h-full transition-all duration-500 ease-in-out",
            objectFit === 'cover' && "object-cover",
            objectFit === 'contain' && "object-contain",
            objectFit === 'fill' && "object-fill",
            isLoading ? "opacity-0" : "opacity-100"
          )}
          style={{ objectPosition }}
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          {...{ fetchpriority: priority ? "high" : "low" }}
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
};

export default EnhancedImage;
