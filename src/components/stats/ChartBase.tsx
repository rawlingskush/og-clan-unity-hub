
import React from 'react';
import { ChartContainer } from '@/components/ui/chart';

interface ChartBaseProps {
  children: React.ReactElement;
  data: Array<Record<string, any>>;
  config: Record<string, { label: string; color: string }>;
  height?: string;
}

const ChartBase = ({ children, data, config, height = "h-64 md:h-80" }: ChartBaseProps) => {
  return (
    <div className={`w-full ${height} group transition-all duration-300 hover:shadow-[0_0_15px_rgba(212,175,55,0.2)]`}>
      <ChartContainer config={config}>
        {children}
      </ChartContainer>
    </div>
  );
};

export default ChartBase;
