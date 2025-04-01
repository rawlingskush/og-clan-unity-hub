
import * as React from "react";

const MOBILE_BREAKPOINT = 768;

export function useIsMobile() {
  const [isMobile, setIsMobile] = React.useState<boolean | undefined>(undefined);

  React.useEffect(() => {
    // Set initial value
    const checkMobile = () => {
      setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
    };
    
    // Check on mount
    checkMobile();
    
    // Setup event listener for window resize
    const mql = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`);
    
    // Modern approach with addEventListener
    const onChange = () => checkMobile();
    mql.addEventListener("change", onChange);
    
    // Add window resize listener as a fallback
    window.addEventListener("resize", checkMobile);
    
    // Cleanup listeners
    return () => {
      mql.removeEventListener("change", onChange);
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  // Default to mobile first approach if undefined during SSR
  return isMobile === undefined ? true : isMobile;
}
