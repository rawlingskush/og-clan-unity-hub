
import React from 'react';
import { Trophy, Target, Award } from 'lucide-react';
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

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {topResults.map((result, index) => (
          <AnimatedContent 
            key={result.id} 
            animation="fade-in-up" 
            delay={index * 100}
          >
            <div className="bg-black/30 rounded-lg border border-ogclan/20 p-4 hover:border-ogclan/40 transition-all duration-300 group">
              <TournamentImage 
                src={result.image}
                alt={`${result.tournament} tournament result`}
                tournament={result.tournament}
                className="mb-3"
              />
              
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center space-x-2">
                  {result.icon}
                  <span className="font-semibold text-white text-sm">
                    {result.position}
                  </span>
                </div>
                <span className="text-ogclan font-bold text-sm">
                  {result.points}
                </span>
              </div>
              
              <h4 className="text-white font-medium text-sm group-hover:text-ogclan transition-colors">
                {result.tournament}
              </h4>
            </div>
          </AnimatedContent>
        ))}
      </div>
    </div>
  );
};

export default ResultsShowcase;
