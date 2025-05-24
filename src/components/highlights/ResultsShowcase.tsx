
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Trophy, Target, TrendingUp } from 'lucide-react';
import AnimatedContent from '../AnimatedContent';

const ResultsShowcase = () => {
  const topResults = [
    {
      id: 1,
      tournament: "Aurora Scrims",
      position: "1st",
      points: "264",
      image: "/lovable-uploads/06436fca-12a3-40d0-a190-e9958c2dfe55.png",
      icon: <Trophy className="w-6 h-6 text-ogclan" />
    },
    {
      id: 2,
      tournament: "TEF Esports",
      position: "1st", 
      points: "349",
      image: "/lovable-uploads/ff993877-0fb3-43a2-4659-a054-712c4eca7352.png",
      icon: <Trophy className="w-6 h-6 text-ogclan" />
    },
    {
      id: 3,
      tournament: "Aurora Scrims",
      position: "2nd",
      points: "232",
      image: "/lovable-uploads/44d227d7-2c81-41b1-96b0-257a195f0166.png",
      icon: <Target className="w-6 h-6 text-gray-400" />
    }
  ];

  return (
    <div className="mt-8">
      <AnimatedContent animation="fade-in-up">
        <div className="text-center mb-6">
          <h3 className="text-2xl md:text-3xl font-bold text-gradient-gold mb-2">
            Recent Tournament Victories
          </h3>
          <p className="text-ogclan-light">
            Dominating the competitive scene with consistent top placements
          </p>
        </div>
      </AnimatedContent>

      <div className="grid md:grid-cols-3 gap-4">
        {topResults.map((result, index) => (
          <AnimatedContent 
            key={result.id} 
            animation="scale-in" 
            delay={200 + index * 100}
          >
            <Card className="glass-card group hover:shadow-[0_0_20px_rgba(212,175,55,0.3)] transition-all duration-300 cursor-pointer">
              <CardContent className="p-4">
                <div className="text-center space-y-3">
                  <div className="flex justify-center">
                    {result.icon}
                  </div>
                  
                  <div>
                    <h4 className="font-bold text-white">{result.tournament}</h4>
                    <p className="text-sm text-gray-400">Tournament</p>
                  </div>
                  
                  <div className="bg-black/50 rounded-lg p-3 border border-ogclan/20">
                    <div className="text-2xl font-bold text-ogclan mb-1">
                      {result.position}
                    </div>
                    <div className="text-sm text-gray-300">
                      {result.points} points
                    </div>
                  </div>
                  
                  <div className="h-24 bg-black/30 rounded border border-ogclan/20 overflow-hidden">
                    <img 
                      src={result.image} 
                      alt={`${result.tournament} results`}
                      className="w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity duration-300"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          </AnimatedContent>
        ))}
      </div>
    </div>
  );
};

export default ResultsShowcase;
