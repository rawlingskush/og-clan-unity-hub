
import React, { useState, useRef, useEffect } from 'react';
import { cn } from '@/lib/utils';

interface ProgressiveImageProps {
  src: string;
  alt: string;
  className?: string;
  lowQualitySrc?: string;
  aspectRatio?: string;
  objectFit?: 'cover' | 'contain' | 'fill' | 'scale-down' | 'none';
  objectPosition?: string;
  onLoad?: () => void;
  onError?: (error: React.SyntheticEvent<HTMLImageElement>) => void;
}

const ProgressiveImage = ({
  src,
  alt,
  className = "",
  lowQualitySrc,
  aspectRatio = "16/10",
  objectFit = "cover",
  objectPosition = "center",
  onLoad,
  onError
}: ProgressiveImageProps) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const [hasError, setHasError] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleLoad = () => {
    setIsLoaded(true);
    onLoad?.();
  };

  const handleError = (e: React.SyntheticEvent<HTMLImageElement>) => {
    setHasError(true);
    onError?.(e);
  };

  return (
    <div 
      ref={containerRef}
      className={cn("relative overflow-hidden bg-black/20", className)}
      style={{ aspectRatio }}
    >
      {/* Low quality placeholder */}
      {lowQualitySrc && !isLoaded && isInView && (
        <img
          src={lowQualitySrc}
          alt={alt}
          className={cn(
            "absolute inset-0 w-full h-full blur-sm scale-110 transition-opacity duration-300",
            objectFit === 'cover' && "object-cover",
            objectFit === 'contain' && "object-contain",
            objectFit === 'fill' && "object-fill"
          )}
          style={{ objectPosition }}
        />
      )}

      {/* Main image */}
      {isInView && (
        <img
          ref={imgRef}
          src={src}
          alt={alt}
          loading="lazy"
          className={cn(
            "w-full h-full transition-opacity duration-500",
            objectFit === 'cover' && "object-cover",
            objectFit === 'contain' && "object-contain", 
            objectFit === 'fill' && "object-fill",
            isLoaded ? "opacity-100" : "opacity-0"
          )}
          style={{ objectPosition }}
          onLoad={handleLoad}
          onError={handleError}
        />
      )}

      {/* Loading state */}
      {!isLoaded && !hasError && isInView && (
        <div className="absolute inset-0 flex items-center justify-center bg-black/40">
          <div className="w-8 h-8 border-2 border-ogclan border-t-transparent rounded-full animate-spin"></div>
        </div>
      )}

      {/* Error state */}
      {hasError && (
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

export default ProgressiveImage;
