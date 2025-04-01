
import React from 'react';
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  Tooltip, 
  ResponsiveContainer,
  CartesianGrid
} from 'recharts';
import { ChartContainer, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart';

const ActivityChart = () => {
  // Sample data for the chart
  const data = [
    { name: 'Mon', activity: 30 },
    { name: 'Tue', activity: 45 },
    { name: 'Wed', activity: 60 },
    { name: 'Thu', activity: 40 },
    { name: 'Fri', activity: 70 },
    { name: 'Sat', activity: 90 },
    { name: 'Sun', activity: 100 },
  ];

  const chartConfig = {
    activity: {
      label: 'Active Members',
      color: '#D4AF37',
    }
  };

  return (
    <div className="w-full h-64 md:h-80">
      <ChartContainer config={chartConfig}>
        <BarChart data={data} margin={{ top: 10, right: 10, left: 0, bottom: 20 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#333" opacity={0.3} />
          <XAxis 
            dataKey="name" 
            tick={{ fill: '#aaa' }} 
            axisLine={{ stroke: '#333' }}
            tickLine={{ stroke: '#333' }}
          />
          <YAxis 
            tick={{ fill: '#aaa' }} 
            axisLine={{ stroke: '#333' }} 
            tickLine={{ stroke: '#333' }}
          />
          <ChartTooltip 
            content={<ChartTooltipContent />}
          />
          <Bar 
            dataKey="activity" 
            name="Activity" 
            fill="var(--color-activity, #D4AF37)" 
            radius={[4, 4, 0, 0]} 
          />
        </BarChart>
      </ChartContainer>
    </div>
  );
};

export default ActivityChart;
