
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Trophy, Target, TrendingUp, Award } from 'lucide-react';
import AnimatedContent from '../AnimatedContent';
import TournamentImage from './TournamentImage';

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
      image: "/lovable-uploads/4c615377-1ca3-481a-8613-9a759e0b5517.png",
      icon: <Trophy className="w-6 h-6 text-ogclan" />
    },
    {
      id: 3,
      tournament: "Aurora Scrims",
      position: "2nd",
      points: "232",
      image: "/lovable-uploads/44d227d7-2c81-41b1-96b0-257a195f0166.png",
      icon: <Target className="w-6 h-6 text-gray-400" />
    },
    {
      id: 4,
      tournament: "Preacher Event",
      position: "Top 10",
      points: "Elite",
      image: "/lovable-uploads/d4e42496-3767-4526-b7f9-9a3cd143b1b4.png",
      icon: <Award className="w-6 h-6 text-purple-400" />
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

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
        {topResults.map((result, index) => (
          <AnimatedContent 
            key={result.id} 
            animation="scale-in" 
            delay={200 + index * 100}
          >
            <Card 
              className="glass-card group hover-effect cursor-pointer"
              onClick={() => {
                const statsSection = document.getElementById('clan-stats');
                if (statsSection) {
                  statsSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              <CardContent className="p-4">
                <div className="text-center space-y-3">
                  <div className="flex justify-center">
                    {result.icon}
                  </div>
                  
                  <div>
                    <h4 className="font-bold text-white">{result.tournament}</h4>
                    <p className="text-sm text-gray-400">Tournament</p>
                  </div>
                  
                  <div className="bg-black/50 rounded-lg p-3 border border-ogclan/20 tactical-border">
                    <div className="text-2xl font-bold text-ogclan mb-1">
                      {result.position}
                    </div>
                    <div className="text-sm text-gray-300">
                      {result.points === "Elite" ? "Elite Competition" : `${result.points} points`}
                    </div>
                  </div>
                  
                  <TournamentImage
                    src={result.image}
                    alt={`${result.tournament} results - OG Clan performance`}
                    tournament={result.tournament}
                    className="h-32"
                  />
                </div>
              </CardContent>
            </Card>
          </AnimatedContent>
        ))}
      </div>
      
      {/* View More Stats CTA */}
      <div className="text-center mt-8">
        <button 
          onClick={() => {
            const statsSection = document.getElementById('clan-stats');
            if (statsSection) {
              statsSection.scrollIntoView({ behavior: 'smooth' });
            }
          }}
          className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-primary/20 to-accent/20 hover:from-primary/30 hover:to-accent/30 border border-primary/30 hover:border-primary/50 text-white font-semibold rounded-lg transition-all duration-300 hover:scale-105 group"
        >
          <TrendingUp className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
          <span>View Detailed Statistics</span>
        </button>
      </div>
    </div>
  );
};

export default ResultsShowcase;
