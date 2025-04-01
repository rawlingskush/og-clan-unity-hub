
import React from 'react';
import { ChartContainer, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart';

interface ChartBaseProps {
  children: React.ReactElement;
  data: Array<Record<string, any>>;
  config: Record<string, { label: string; color: string }>;
  height?: string;
}

const ChartBase = ({ children, data, config, height = "h-64 md:h-80" }: ChartBaseProps) => {
  return (
    <div className={`w-full ${height}`}>
      <ChartContainer config={config}>
        {children}
      </ChartContainer>
    </div>
  );
};

export default ChartBase;
