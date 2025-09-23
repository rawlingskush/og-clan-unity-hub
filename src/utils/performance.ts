// Performance optimization utilities

// Preload critical resources
export const preloadCriticalResources = () => {
  const criticalImages = [
    '/lovable-uploads/4173fde6-af6e-4572-9e29-450aabf69ecf.png', // Hero image
    '/src/assets/og-clan-esports-logo.jpg', // Logo
  ];

  criticalImages.forEach(src => {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.as = 'image';
    link.href = src;
    document.head.appendChild(link);
  });
};

// Lazy load non-critical CSS
export const loadNonCriticalCSS = () => {
  const nonCriticalStyles = [
    '/src/styles/animations.css',
    '/src/styles/advanced-animations.css',
    '/src/styles/tactical-elements.css'
  ];

  nonCriticalStyles.forEach(href => {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = href;
    link.media = 'print'; // Load as print media first
    link.onload = () => {
      link.media = 'all'; // Switch to all media after load
    };
    document.head.appendChild(link);
  });
};

// Optimize images with WebP support
export const getOptimizedImageSrc = (originalSrc: string, width?: number): string => {
  // Check if browser supports WebP
  const supportsWebP = (() => {
    const canvas = document.createElement('canvas');
    canvas.width = 1;
    canvas.height = 1;
    return canvas.toDataURL('image/webp').indexOf('webp') !== -1;
  })();

  // For production, you'd implement actual image optimization
  // For now, we'll add query parameters for optimization hints
  const optimizedSrc = originalSrc + (width ? `?w=${width}&q=85` : '?q=85');
  
  return optimizedSrc;
};

// Reduce layout shifts
export const preventLayoutShift = (element: HTMLElement, aspectRatio: string) => {
  element.style.aspectRatio = aspectRatio;
  element.style.width = '100%';
};

// Critical resource hints
export const addResourceHints = () => {
  // DNS prefetch for external resources
  const dnsPrefetch = [
    '//fonts.googleapis.com',
    '//fonts.gstatic.com'
  ];

  dnsPrefetch.forEach(href => {
    const link = document.createElement('link');
    link.rel = 'dns-prefetch';
    link.href = href;
    document.head.appendChild(link);
  });

  // Preconnect to critical origins
  const preconnect = [
    'https://fonts.googleapis.com',
    'https://fonts.gstatic.com'
  ];

  preconnect.forEach(href => {
    const link = document.createElement('link');
    link.rel = 'preconnect';
    link.href = href;
    link.crossOrigin = 'anonymous';
    document.head.appendChild(link);
  });
};