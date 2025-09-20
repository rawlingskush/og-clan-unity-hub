
import React from 'react';
import AnimatedContent from './AnimatedContent';
import { ChartContainer, ChartLegend, ChartLegendContent } from '@/components/ui/chart';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import StatsCard from './stats/StatsCard';
import ActivityChart from './stats/ActivityChart';
import PerformanceChart from './stats/PerformanceChart';
import { Trophy, Users, Star, TrendingUp } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';

const ClanStatsSection = () => {
  const isMobile = useIsMobile();
  
  return (
    <section id="clan-stats" className="py-12 md:py-16 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/lovable-uploads/868831b3-078e-4cf4-b395-e9bfb9ec5c6f.png')] bg-cover bg-center opacity-5 mix-blend-overlay"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/90 z-0"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-10">
          <AnimatedContent animation="fade-in-up">
            <h2 className="text-4xl md:text-6xl font-bold text-gradient-gold mb-4 animate-glow">
              CLAN STATISTICS
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-ogclan-dark via-ogclan to-ogclan-dark mx-auto rounded-full mb-6"></div>
            <p className="text-lg md:text-2xl text-ogclan-light max-w-3xl mx-auto">
              Our journey in numbers
            </p>
          </AnimatedContent>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-6 mb-6 md:mb-8">
          <AnimatedContent animation="fade-in-up" delay={150}>
            <StatsCard 
              title="Members" 
              value="88+" 
              icon={<Users className="w-6 h-6 md:w-8 md:h-8 text-ogclan" />}
              description="Active players"
            />
          </AnimatedContent>
          
          <AnimatedContent animation="fade-in-up" delay={300}>
            <StatsCard 
              title="Tournaments" 
              value="47+" 
              icon={<Trophy className="w-6 h-6 md:w-8 md:h-8 text-ogclan" />}
              description="Victories earned"
            />
          </AnimatedContent>
          
          <AnimatedContent animation="fade-in-up" delay={450}>
            <StatsCard 
              title="Rating" 
              value="4.9" 
              icon={<Star className="w-6 h-6 md:w-8 md:h-8 text-ogclan" />}
              description="Average member rating"
            />
          </AnimatedContent>
          
          <AnimatedContent animation="fade-in-up" delay={600}>
            <StatsCard 
              title="Growth" 
              value="127%" 
              icon={<TrendingUp className="w-6 h-6 md:w-8 md:h-8 text-ogclan" />}
              description="Annual expansion"
            />
          </AnimatedContent>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          <AnimatedContent animation="fade-in-up" delay={300}>
            <Card className="glass-card h-full">
              <CardHeader className="pb-2 md:pb-4">
                <CardTitle className="text-xl md:text-2xl text-gradient-gold">Member Activity</CardTitle>
              </CardHeader>
              <CardContent className={isMobile ? "p-2" : "pt-4"}>
                <ActivityChart />
              </CardContent>
            </Card>
          </AnimatedContent>
          
          <AnimatedContent animation="fade-in-up" delay={450}>
            <Card className="glass-card h-full">
              <CardHeader className="pb-2 md:pb-4">
                <CardTitle className="text-xl md:text-2xl text-gradient-gold">Performance Metrics</CardTitle>
              </CardHeader>
              <CardContent className={isMobile ? "p-2" : "pt-4"}>
                <PerformanceChart />
              </CardContent>
            </Card>
          </AnimatedContent>
        </div>
        
        {/* View Clan Members Button */}
        <AnimatedContent animation="fade-in-up" delay={750}>
          <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8">
            <button 
              className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-emerald-600 to-emerald-500 text-white font-medium rounded-lg transition-all duration-300 hover:from-emerald-500 hover:to-emerald-400 hover:shadow-[0_0_20px_rgba(16,185,129,0.4)] active:scale-[0.98] text-lg"
              onClick={() => window.open('/soldiers?view=members', '_self')}
            >
              <Users className="mr-2 h-6 w-6" />
              <span>View All Clan Members</span>
            </button>
            
            <button 
              className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-primary/20 to-accent/20 hover:from-primary/30 hover:to-accent/30 border border-primary/30 hover:border-primary/50 text-white font-medium rounded-lg transition-all duration-300 hover:scale-105 active:scale-[0.98] text-lg"
              onClick={() => window.open('/soldiers?view=gallery', '_self')}
            >
              <Trophy className="mr-2 h-6 w-6" />
              <span>Browse Elite Warriors</span>
            </button>
          </div>
          <p className="text-center text-muted-foreground mt-4 max-w-lg mx-auto">
            Explore our complete roster and discover the tactical organization behind our success
          </p>
        </AnimatedContent>
      </div>
    </section>
  );
};

export default ClanStatsSection;
