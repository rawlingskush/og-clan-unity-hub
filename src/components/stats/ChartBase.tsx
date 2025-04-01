
import React, { ReactNode } from 'react';
import { ChartContainer, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart';

interface ChartBaseProps {
  children: ReactNode;
  data: Array<Record<string, any>>;
  config: Record<string, { label: string; color: string }>;
  height?: string;
}

const ChartBase = ({ children, data, config, height = "h-64 md:h-80" }: ChartBaseProps) => {
  return (
    <div className={`w-full ${height}`}>
      <ChartContainer config={config}>
        {children}
        <ChartTooltip 
          content={<ChartTooltipContent />}
        />
      </ChartContainer>
    </div>
  );
};

export default ChartBase;
