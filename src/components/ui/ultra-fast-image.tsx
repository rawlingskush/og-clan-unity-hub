import React, { useState, useRef, useEffect } from 'react';
import { cn } from '@/lib/utils';

interface UltraFastImageProps {
  src: string;
  alt: string;
  className?: string;
  aspectRatio?: string;
  priority?: boolean;
  sizes?: string;
  quality?: number;
  objectFit?: 'cover' | 'contain' | 'fill';
  objectPosition?: string;
}

const UltraFastImage = ({
  src,
  alt,
  className = "",
  aspectRatio = "16/10",
  priority = false,
  sizes = "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw",
  quality = 85,
  objectFit = 'cover',
  objectPosition = 'center'
}: UltraFastImageProps) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(priority);
  const [hasError, setHasError] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Intersection Observer for lazy loading
  useEffect(() => {
    if (priority) return; // Skip lazy loading for priority images

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { 
        rootMargin: '50px',
        threshold: 0.1 
      }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, [priority]);

  // Fallback image
  const fallbackSrc = "/lovable-uploads/25b0b30a-3357-4fa2-8db5-dfc1c6e81e56.png";

  return (
    <div 
      ref={containerRef}
      className={cn("relative overflow-hidden bg-black/20 border border-primary/10", className)}
      style={{ aspectRatio }}
    >
      {/* Skeleton loader */}
      {!isLoaded && !hasError && (
        <div className="absolute inset-0 bg-gradient-to-r from-gray-700/30 via-gray-600/30 to-gray-700/30 bg-[length:200%_100%] animate-[shimmer_1.5s_infinite]" />
      )}
      
      {/* Main image */}
      {isInView && (
        <img
          ref={imgRef}
          src={hasError ? fallbackSrc : src}
          alt={alt}
          loading={priority ? "eager" : "lazy"}
          decoding="async"
          fetchPriority={priority ? "high" : "low"}
          sizes={sizes}
          className={cn(
            "w-full h-full transition-opacity duration-300 gpu-accelerated",
            objectFit === 'cover' && "object-cover",
            objectFit === 'contain' && "object-contain",
            objectFit === 'fill' && "object-fill",
            isLoaded ? "opacity-100" : "opacity-0"
          )}
          style={{ objectPosition }}
          onLoad={() => setIsLoaded(true)}
          onError={() => {
            if (!hasError) {
              setHasError(true);
              setIsLoaded(true);
            }
          }}
        />
      )}
      
      {/* Error state */}
      {hasError && isLoaded && (
        <div className="absolute inset-0 flex items-center justify-center bg-black/40">
          <div className="text-center p-4">
            <div className="text-primary text-sm font-semibold mb-1">OG CLAN</div>
            <div className="text-gray-400 text-xs">Loading...</div>
          </div>
        </div>
      )}
    </div>
  );
};

export default UltraFastImage;