import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Trophy, Calendar, Users, Target } from 'lucide-react';
import AnimatedContent from '../AnimatedContent';
import TournamentImage from '../highlights/TournamentImage';

const TournamentResults = () => {
  const [selectedResult, setSelectedResult] = useState(0);

  const results = [
    {
      id: 1,
      title: "TEF Esports Scrims Group 2 - Champion",
      date: "07/05/2025",
      image: "/lovable-uploads/4c615377-1ca3-481a-8613-9a759e0b5517.png",
      position: "1st Place",
      description: "Dominant victory as 'ONLY GREATS CAMEROON' with 125 place points and 112 kills for 349 total points",
      highlights: ["349 total points", "125 place points", "112 total kills", "Complete domination"]
    },
    {
      id: 2,
      title: "Aurora Scrims Group 2 - Victory",
      date: "11/05/2025",
      image: "/lovable-uploads/06436fca-12a3-40d0-a190-e9958c2dfe55.png",
      position: "1st Place",
      description: "Dominated Aurora Scrims with 86 place points and 89 total kills",
      highlights: ["264 total points", "Superior kill performance", "Tactical dominance"]
    },
    {
      id: 3,
      title: "TEF Esports Scrims Group 2 - Champion",
      date: "07/05/2025",
      image: "/lovable-uploads/ff993877-0fb3-43a2-4659-a054-712c4eca7352.png",
      position: "1st Place",
      description: "Crushing victory with 125 place points and 112 kills for 349 total points",
      highlights: ["349 total points", "125 place points", "Unmatched strategy"]
    },
    {
      id: 4,
      title: "TEF Esports Scrims - Strong Performance",
      date: "05/05/2025",
      image: "blob:https://lovable.dev/89180734-3c17-40df-aad6-6968ff558972",
      position: "7th Place",
      description: "Solid showing with 46 place points and 62 kills",
      highlights: ["170 total points", "Consistent gameplay", "Tactical excellence"]
    },
    {
      id: 5,
      title: "Aurora Scrims Group 2 - Elite Performance",
      date: "04/05/2025",
      image: "/lovable-uploads/9d279531-6784-4d25-830d-c46c99f72074.png",
      position: "8th Place",
      description: "Strong competition showing with 38 place points and 48 kills",
      highlights: ["145 total points", "Balanced approach", "Team coordination"]
    },
    {
      id: 6,
      title: "Aurora Scrims Group 2 - Rising Star",
      date: "02/05/2025",
      image: "/lovable-uploads/44d227d7-2c81-41b1-96b0-257a195f0166.png",
      position: "2nd Place",
      description: "Impressive second place with 88 place points and 72 kills",
      highlights: ["232 total points", "88 place points", "Elite positioning"]
    }
  ];

  const currentResult = results[selectedResult];

  return (
    <section className="py-12 md:py-16 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/lovable-uploads/868831b3-078e-4cf4-b395-e9bfb9ec5c6f.png')] bg-cover bg-center opacity-5 mix-blend-overlay"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/90 z-0"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-10">
          <AnimatedContent animation="fade-in-up">
            <h2 className="text-4xl md:text-6xl font-bold text-gradient-gold mb-4 animate-glow">
              TOURNAMENT RESULTS
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-ogclan-dark via-ogclan to-ogclan-dark mx-auto rounded-full mb-6"></div>
            <p className="text-lg md:text-2xl text-ogclan-light max-w-3xl mx-auto">
              Proven excellence in competitive gaming - Our victories speak for themselves
            </p>
          </AnimatedContent>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {/* Results Navigation */}
          <div className="md:col-span-1">
            <AnimatedContent animation="slide-in-left">
              <div className="space-y-3">
                {results.map((result, index) => (
                  <Card 
                    key={result.id}
                    className={`cursor-pointer transition-all duration-300 ${
                      selectedResult === index 
                        ? 'glass-card border-ogclan/50 shadow-[0_0_15px_rgba(212,175,55,0.3)]' 
                        : 'bg-black/40 border-gray-600 hover:border-ogclan/30'
                    }`}
                    onClick={() => setSelectedResult(index)}
                  >
                    <CardContent className="p-4">
                      <div className="flex items-center gap-3">
                        <div className="flex-shrink-0">
                          {result.position.includes('1st') ? (
                            <Trophy className="w-6 h-6 text-ogclan" />
                          ) : result.position.includes('2nd') ? (
                            <Trophy className="w-6 h-6 text-gray-400" />
                          ) : (
                            <Target className="w-6 h-6 text-ogclan-light" />
                          )}
                        </div>
                        <div className="flex-1 min-w-0">
                          <h3 className="font-semibold text-white text-sm truncate">
                            {result.title}
                          </h3>
                          <div className="flex items-center gap-2 mt-1">
                            <Calendar className="w-3 h-3 text-gray-400" />
                            <span className="text-xs text-gray-400">{result.date}</span>
                            <Badge 
                              variant="outline" 
                              className={`text-xs ${
                                result.position.includes('1st') 
                                  ? 'border-ogclan text-ogclan' 
                                  : result.position.includes('2nd')
                                    ? 'border-gray-400 text-gray-400'
                                    : 'border-ogclan-light text-ogclan-light'
                              }`}
                            >
                              {result.position}
                            </Badge>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </AnimatedContent>
          </div>

          {/* Selected Result Display */}
          <div className="md:col-span-2">
            <AnimatedContent animation="fade-in-up" key={selectedResult}>
              <Card className="glass-card h-full">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-xl md:text-2xl text-gradient-gold">
                      {currentResult.title}
                    </CardTitle>
                    <Badge 
                      variant="outline" 
                      className={`${
                        currentResult.position.includes('1st') 
                          ? 'border-ogclan text-ogclan' 
                          : currentResult.position.includes('2nd')
                            ? 'border-gray-400 text-gray-400'
                            : 'border-ogclan-light text-ogclan-light'
                      }`}
                    >
                      {currentResult.position}
                    </Badge>
                  </div>
                  <div className="flex items-center gap-4 text-sm text-gray-400">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {currentResult.date}
                    </div>
                    <div className="flex items-center gap-1">
                      <Users className="w-4 h-4" />
                      OG Clan
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <TournamentImage
                      src={currentResult.image}
                      alt={`${currentResult.title} - OG Clan performance`}
                      tournament={currentResult.title}
                      className="w-full rounded-lg shadow-lg"
                    />
                    
                    <div>
                      <p className="text-gray-300 mb-4">
                        {currentResult.description}
                      </p>
                      
                      <div>
                        <h4 className="text-ogclan font-semibold mb-2">Key Highlights:</h4>
                        <ul className="space-y-1">
                          {currentResult.highlights.map((highlight, index) => (
                            <li key={index} className="text-gray-300 text-sm flex items-center gap-2">
                              <div className="w-1.5 h-1.5 bg-ogclan rounded-full"></div>
                              {highlight}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </AnimatedContent>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TournamentResults;
