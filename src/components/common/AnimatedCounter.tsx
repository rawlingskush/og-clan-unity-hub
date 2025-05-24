
import React, { useEffect, useState, useRef } from 'react';
import { cn } from '@/lib/utils';

interface AnimatedCounterProps {
  value: number;
  duration?: number;
  className?: string;
  prefix?: string;
  suffix?: string;
  decimals?: number;
}

const AnimatedCounter = ({ 
  value, 
  duration = 2000, 
  className, 
  prefix = '', 
  suffix = '',
  decimals = 0 
}: AnimatedCounterProps) => {
  const [displayValue, setDisplayValue] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const counterRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !hasAnimated) {
          animateValue();
          setHasAnimated(true);
        }
      },
      { threshold: 0.1 }
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => {
      if (counterRef.current) {
        observer.unobserve(counterRef.current);
      }
    };
  }, [value, hasAnimated]);

  const animateValue = () => {
    let startValue = 0;
    const increment = value / (duration / 16);
    
    const updateValue = () => {
      startValue += increment;
      if (startValue >= value) {
        setDisplayValue(value);
        return;
      }
      setDisplayValue(startValue);
      requestAnimationFrame(updateValue);
    };
    
    requestAnimationFrame(updateValue);
  };

  return (
    <span 
      ref={counterRef} 
      className={cn(
        "inline-block transition-all duration-300 animate-counter-up",
        className
      )}
    >
      {prefix}{displayValue.toFixed(decimals)}{suffix}
    </span>
  );
};

export default AnimatedCounter;
