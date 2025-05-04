
import React from 'react';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Legend } from 'recharts';
import ChartBase from './ChartBase';
import { ChartLegend, ChartLegendContent, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart';

const PerformanceChart = () => {
  // Sample data for the chart - improved performance numbers for elite clan
  const data = [
    { name: 'Jan', wins: 52, kills: 440 },
    { name: 'Feb', wins: 48, kills: 480 },
    { name: 'Mar', wins: 56, kills: 520 },
    { name: 'Apr', wins: 62, kills: 570 },
    { name: 'May', wins: 68, kills: 630 },
    { name: 'Jun', wins: 75, kills: 710 },
    { name: 'Jul', wins: 85, kills: 780 },
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
    <ChartBase data={data} config={chartConfig}>
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
        <ChartTooltip content={<ChartTooltipContent />} />
        <ChartLegend content={<ChartLegendContent />} />
      </LineChart>
    </ChartBase>
  );
};

export default PerformanceChart;
