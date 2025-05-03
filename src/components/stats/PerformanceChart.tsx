
import React from 'react';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Legend, Tooltip, ResponsiveContainer } from 'recharts';
import ChartBase from './ChartBase';
import { ChartLegend, ChartLegendContent, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart';

const PerformanceChart = () => {
  // Enhanced data for the chart showing elite performance
  const data = [
    { name: 'Jan', wins: 45, kills: 380 },
    { name: 'Feb', wins: 48, kills: 410 },
    { name: 'Mar', wins: 52, kills: 450 },
    { name: 'Apr', wins: 58, kills: 490 },
    { name: 'May', wins: 62, kills: 530 },
    { name: 'Jun', wins: 69, kills: 570 },
    { name: 'Jul', wins: 75, kills: 620 },
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
      <ResponsiveContainer width="100%" height={300}>
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
            domain={[0, 'dataMax + 10']}
          />
          <YAxis 
            yAxisId="right"
            orientation="right"
            tick={{ fill: '#aaa' }} 
            axisLine={{ stroke: '#333' }} 
            tickLine={{ stroke: '#333' }}
            domain={[0, 'dataMax + 100']}
          />
          <Line 
            type="monotone" 
            dataKey="wins" 
            name="Wins" 
            yAxisId="left"
            stroke="var(--color-wins, #D4AF37)" 
            activeDot={{ r: 8, strokeWidth: 2, stroke: '#000' }} 
            strokeWidth={3}
            animationDuration={1500}
          />
          <Line 
            type="monotone" 
            dataKey="kills" 
            name="Kills"
            yAxisId="right" 
            stroke="var(--color-kills, #B8860B)" 
            strokeWidth={3}
            animationDuration={1500}
            animationBegin={300}
          />
          <ChartTooltip content={<ChartTooltipContent />} />
          <ChartLegend content={<ChartLegendContent />} />
        </LineChart>
      </ResponsiveContainer>
    </ChartBase>
  );
};

export default PerformanceChart;
