
import React from 'react';
import { 
  LineChart, 
  Line, 
  XAxis, 
  YAxis, 
  Tooltip,
  CartesianGrid, 
  Legend,
  ResponsiveContainer 
} from 'recharts';
import { ChartContainer, ChartTooltip, ChartTooltipContent, ChartLegend, ChartLegendContent } from '@/components/ui/chart';

const PerformanceChart = () => {
  // Sample data for the chart
  const data = [
    { name: 'Jan', wins: 20, kills: 340 },
    { name: 'Feb', wins: 25, kills: 390 },
    { name: 'Mar', wins: 30, kills: 420 },
    { name: 'Apr', wins: 22, kills: 400 },
    { name: 'May', wins: 28, kills: 450 },
    { name: 'Jun', wins: 35, kills: 500 },
    { name: 'Jul', wins: 40, kills: 580 },
  ];

  const chartConfig = {
    wins: {
      label: 'Tournament Wins',
      color: '#D4AF37',
    },
    kills: {
      label: 'Total Eliminations',
      color: '#B8860B',
    }
  };

  return (
    <div className="w-full h-64 md:h-80">
      <ChartContainer config={chartConfig}>
        <LineChart data={data} margin={{ top: 10, right: 10, left: 0, bottom: 20 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#333" opacity={0.3} />
          <XAxis 
            dataKey="name" 
            tick={{ fill: '#aaa' }} 
            axisLine={{ stroke: '#333' }}
            tickLine={{ stroke: '#333' }}
          />
          <YAxis 
            yAxisId="left"
            tick={{ fill: '#aaa' }} 
            axisLine={{ stroke: '#333' }} 
            tickLine={{ stroke: '#333' }}
          />
          <YAxis 
            yAxisId="right"
            orientation="right"
            tick={{ fill: '#aaa' }} 
            axisLine={{ stroke: '#333' }} 
            tickLine={{ stroke: '#333' }}
          />
          <ChartTooltip 
            content={<ChartTooltipContent />}
          />
          <Line 
            type="monotone" 
            dataKey="wins" 
            name="Wins" 
            yAxisId="left"
            stroke="var(--color-wins, #D4AF37)" 
            activeDot={{ r: 8, strokeWidth: 2, stroke: '#000' }} 
            strokeWidth={3}
          />
          <Line 
            type="monotone" 
            dataKey="kills" 
            name="Kills"
            yAxisId="right" 
            stroke="var(--color-kills, #B8860B)" 
            strokeWidth={3}
          />
          <ChartLegend content={<ChartLegendContent />} />
        </LineChart>
      </ChartContainer>
    </div>
  );
};

export default PerformanceChart;
