
import React from 'react';
import AnimatedContent from './AnimatedContent';
import { ChartContainer, ChartLegend, ChartLegendContent } from '@/components/ui/chart';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import StatsCard from './stats/StatsCard';
import ActivityChart from './stats/ActivityChart';
import PerformanceChart from './stats/PerformanceChart';
import { Trophy, Users, Star, TrendingUp } from 'lucide-react';

const ClanStatsSection = () => {
  return (
    <section id="clan-stats" className="py-20 md:py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/lovable-uploads/868831b3-078e-4cf4-b395-e9bfb9ec5c6f.png')] bg-cover bg-center opacity-5 mix-blend-overlay"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/90 z-0"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <AnimatedContent animation="fade-in-up">
            <h2 className="text-5xl md:text-6xl font-bold text-gradient-gold mb-4 animate-glow">
              CLAN STATISTICS
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-ogclan-dark via-ogclan to-ogclan-dark mx-auto rounded-full mb-6"></div>
            <p className="text-xl md:text-2xl text-ogclan-light max-w-3xl mx-auto">
              Our journey in numbers
            </p>
          </AnimatedContent>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          <AnimatedContent animation="fade-in-up" delay={150}>
            <StatsCard 
              title="Members" 
              value="66+" 
              icon={<Users className="w-8 h-8 text-ogclan" />}
              description="Active players"
            />
          </AnimatedContent>
          
          <AnimatedContent animation="fade-in-up" delay={300}>
            <StatsCard 
              title="Tournaments" 
              value="12+" 
              icon={<Trophy className="w-8 h-8 text-ogclan" />}
              description="Victories earned"
            />
          </AnimatedContent>
          
          <AnimatedContent animation="fade-in-up" delay={450}>
            <StatsCard 
              title="Rating" 
              value="4.8" 
              icon={<Star className="w-8 h-8 text-ogclan" />}
              description="Average member rating"
            />
          </AnimatedContent>
          
          <AnimatedContent animation="fade-in-up" delay={600}>
            <StatsCard 
              title="Growth" 
              value="69%" 
              icon={<TrendingUp className="w-8 h-8 text-ogclan" />}
              description="Annual expansion"
            />
          </AnimatedContent>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <AnimatedContent animation="fade-in-up" delay={300}>
            <Card className="glass-card h-full">
              <CardHeader>
                <CardTitle className="text-2xl text-gradient-gold">Member Activity</CardTitle>
              </CardHeader>
              <CardContent className="pt-4">
                <ActivityChart />
              </CardContent>
            </Card>
          </AnimatedContent>
          
          <AnimatedContent animation="fade-in-up" delay={450}>
            <Card className="glass-card h-full">
              <CardHeader>
                <CardTitle className="text-2xl text-gradient-gold">Performance Metrics</CardTitle>
              </CardHeader>
              <CardContent className="pt-4">
                <PerformanceChart />
              </CardContent>
            </Card>
          </AnimatedContent>
        </div>
      </div>
    </section>
  );
};

export default ClanStatsSection;
