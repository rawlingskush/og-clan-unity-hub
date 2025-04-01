
import React from 'react';
import { BarChart, Bar, CartesianGrid, XAxis, YAxis, Cell, Tooltip } from 'recharts';
import ChartBase from './ChartBase';
import { HoverCard, HoverCardTrigger, HoverCardContent } from '@/components/ui/hover-card';
import { Users } from 'lucide-react';

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

  const CustomTooltip = ({ active, payload, label }: any) => {
    if (!active || !payload || !payload.length) return null;
    
    const value = payload[0].value;
    
    return (
      <div className="glass-card p-3 border border-ogclan/30 shadow-lg">
        <p className="text-ogclan font-medium text-sm">{label}</p>
        <div className="flex items-center gap-2 mt-2">
          <Users className="w-4 h-4 text-ogclan" />
          <span className="text-xl font-bold text-white">{value}</span>
          <span className="text-xs text-gray-400">members</span>
        </div>
        <div className="mt-2 pt-2 border-t border-ogclan/20 text-xs text-gray-400">
          {value < 50 ? 'Low activity' : value < 80 ? 'Moderate activity' : 'High activity'}
        </div>
      </div>
    );
  };

  return (
    <ChartBase data={data} config={chartConfig}>
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
        <Tooltip content={<CustomTooltip />} cursor={{ fill: 'rgba(212, 175, 55, 0.1)' }} />
        <Bar 
          dataKey="activity" 
          name="Activity" 
          fill="var(--color-activity, #D4AF37)" 
          radius={[4, 4, 0, 0]}
        >
          {data.map((entry, index) => (
            <Cell 
              key={`cell-${index}`}
              fill={`var(--color-activity, ${entry.activity < 50 
                ? '#A67C00' 
                : entry.activity < 80 
                  ? '#D4AF37' 
                  : '#FFD700'
              })`}
              className="hover:opacity-80 transition-opacity duration-300"
            />
          ))}
        </Bar>
      </BarChart>
    </ChartBase>
  );
};

export default ActivityChart;
