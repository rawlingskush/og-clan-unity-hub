
import React, { useEffect, useState, useRef } from 'react';

interface AchievementCardProps {
  icon: React.ReactNode;
  stat: string;
  label: string;
  title: string;
  description: string;
}

const AchievementCard = ({ icon, stat, label, title, description }: AchievementCardProps) => {
  const [displayValue, setDisplayValue] = useState('0');
  const cardRef = useRef<HTMLDivElement>(null);
  const hasAnimated = useRef(false);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !hasAnimated.current) {
          animateValue(stat);
          hasAnimated.current = true;
        }
      },
      { threshold: 0.1 }
    );
    
    if (cardRef.current) {
      observer.observe(cardRef.current);
    }
    
    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, [stat]);
  
  const animateValue = (targetValue: string) => {
    // Check if value contains a "+" sign
    const hasPlus = targetValue.includes('+');
    const cleanValue = hasPlus ? targetValue.replace('+', '') : targetValue;
    
    // Check if value contains a "%" sign
    const hasPercent = targetValue.includes('%');
    const numericValue = parseFloat(hasPercent ? cleanValue.replace('%', '') : cleanValue);
    
    // If not a number, just set the value directly
    if (isNaN(numericValue)) {
      setDisplayValue(targetValue);
      return;
    }
    
    // Start animation from 0 to target value
    let startValue = 0;
    const duration = 1500; // ms
    const increment = numericValue / (duration / 16); // 16ms is approx one frame at 60fps
    
    const updateValue = () => {
      startValue += increment;
      if (startValue >= numericValue) {
        startValue = numericValue;
        // Add back any suffix/prefix that was in original value
        let formattedValue = String(startValue);
        if (hasPercent) formattedValue += '%';
        if (hasPlus) formattedValue += '+';
        setDisplayValue(formattedValue);
        return;
      }
      
      // Format the current value as an integer or decimal based on original value
      let formattedValue = Number.isInteger(numericValue) 
        ? Math.floor(startValue).toString()
        : startValue.toFixed(1);
        
      setDisplayValue(formattedValue);
      requestAnimationFrame(updateValue);
    };
    
    requestAnimationFrame(updateValue);
  };

  return (
    <div ref={cardRef} className="highlight-card h-full transform transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_10px_30px_-15px_rgba(212,175,55,0.3)]">
      <div className="p-6 flex flex-col h-full">
        <div className="mb-4 p-3 rounded-full bg-ogclan/10 w-fit">
          {icon}
        </div>
        
        <div className="mb-6">
          <div className="text-4xl font-bold text-ogclan mb-1">
            {displayValue.includes('+') ? displayValue.replace('+', '') + '+' : displayValue}
          </div>
          <div className="text-sm uppercase tracking-wider text-ogclan-light font-medium">{label}</div>
        </div>
        
        <h3 className="text-xl font-bold text-ogclan mb-3">
          {title}
        </h3>
        
        <p className="text-gray-300 mt-auto">
          {description}
        </p>
      </div>
    </div>
  );
};

export default AchievementCard;
