import { useEffect } from 'react';

/**
 * Hook for performance optimizations
 */
export const usePerformanceOptimization = () => {
  useEffect(() => {
    // Preload critical resources
    const preloadImages = () => {
      const criticalImages = [
        '/lovable-uploads/4173fde6-af6e-4572-9e29-450aabf69ecf.png', // Hero image
        '/lovable-uploads/c4b280fd-ce29-419b-b041-29712bd93d6a.png',
        '/lovable-uploads/bf526ad4-9c9b-4af1-ada0-4e60faba51b0.png',
      ];

      criticalImages.forEach(src => {
        const img = new Image();
        img.src = src;
      });
    };

    // Preload on idle
    if ('requestIdleCallback' in window) {
      requestIdleCallback(preloadImages);
    } else {
      setTimeout(preloadImages, 1000);
    }

    // Clean up any memory leaks
    return () => {
      // Cleanup if needed
    };
  }, []);

  useEffect(() => {
    // Add performance monitoring
    const observer = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        if (entry.entryType === 'largest-contentful-paint') {
          // Track LCP in production
          if (process.env.NODE_ENV === 'production') {
            // TODO: Send to analytics service
          }
        }
      }
    });

    try {
      observer.observe({ entryTypes: ['largest-contentful-paint'] });
    } catch (e) {
      // Observer not supported in this browser
    }

    return () => observer.disconnect();
  }, []);
};