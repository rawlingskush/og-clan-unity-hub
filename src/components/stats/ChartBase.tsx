
import React from 'react';
import { ChartContainer } from '@/components/ui/chart';
import { useIsMobile } from '@/hooks/use-mobile';

interface ChartBaseProps {
  children: React.ReactElement;
  data: Array<Record<string, any>>;
  config: Record<string, { label: string; color: string }>;
  height?: string;
}

const ChartBase = ({ children, data, config, height }: ChartBaseProps) => {
  const isMobile = useIsMobile();
  const chartHeight = height || (isMobile ? "h-52" : "h-64 md:h-80");
  
  return (
    <div className={`w-full ${chartHeight} group transition-all duration-300 hover:shadow-[0_0_15px_rgba(212,175,55,0.2)]`}>
      <ChartContainer config={config}>
        {children}
      </ChartContainer>
    </div>
  );
};

export default ChartBase;
