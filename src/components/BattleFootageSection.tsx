import React, { useState } from 'react';
import { Play, Trophy, Target, Users, ExternalLink } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const BattleFootageSection = () => {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  const videoMetrics = [
    { label: "Epic Moments", value: "47+", icon: <Trophy className="w-4 h-4" /> },
    { label: "Victory Streaks", value: "12+", icon: <Target className="w-4 h-4" /> },
    { label: "Squad Plays", value: "88+", icon: <Users className="w-4 h-4" /> },
  ];

  const handleVideoClick = () => {
    // Open the TikTok clan highlights video in a new tab
    window.open('https://www.tiktok.com/@ogclancameroon/video/7548786351215234326?is_from_webapp=1&sender_device=pc', '_blank');
  };

  return (
    <section className="py-20 bg-gradient-to-b from-background to-background/50 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,hsl(var(--primary))_0%,transparent_70%)] opacity-10" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,hsl(var(--accent))_0%,transparent_70%)] opacity-10" />
      
      <div className="container mx-auto px-4 relative z-10 max-w-6xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 text-primary border-primary/30">
            🎬 BATTLE FOOTAGE
          </Badge>
          <h2 className="text-4xl md:text-6xl font-orbitron font-bold text-gradient-gold mb-6">
            LEGENDARY MOMENTS
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto mb-6" />
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Witness the intensity, skill, and teamwork that defines OG Clan's dominance on the battlefield
          </p>
        </div>

        {/* Video Metrics */}
        <div className="grid grid-cols-3 gap-4 mb-12 max-w-2xl mx-auto">
          {videoMetrics.map((metric, index) => (
            <Card key={metric.label} className="bg-gradient-to-br from-card/30 to-card/60 backdrop-blur-lg border border-primary/20">
              <CardContent className="p-4 text-center">
                <div className="mb-2 text-primary flex justify-center">
                  {metric.icon}
                </div>
                <div className="text-xl font-bold text-gradient-gold">{metric.value}</div>
                <div className="text-xs text-muted-foreground">{metric.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Featured Video */}
        <Card className="max-w-4xl mx-auto bg-gradient-to-br from-card/20 to-card/40 backdrop-blur-lg border border-primary/30 overflow-hidden">
          <CardContent className="p-0">
            <div className="relative aspect-video bg-gradient-to-br from-primary/20 to-accent/20">
              {/* Video Thumbnail/Placeholder */}
              <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-background/80 to-background/60 backdrop-blur-sm">
                <div className="text-center">
                  <div className="mb-6 p-6 bg-primary/20 rounded-full inline-block">
                    <Play className="w-12 h-12 text-primary" />
                  </div>
                  <h3 className="text-2xl font-orbitron font-bold text-gradient-gold mb-3">
                    OG CLAN CAMEROON HIGHLIGHTS
                  </h3>
                  <p className="text-muted-foreground mb-6 max-w-md mx-auto">
                    Watch our elite Cameroonian warriors dominate the battlefield with legendary skill and tactical precision
                  </p>
                  <button
                    onClick={handleVideoClick}
                    className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-primary to-accent text-primary-foreground font-medium rounded-lg transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-primary/25 group"
                  >
                    <Play className="mr-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                    Watch Battle Footage
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </button>
                </div>
              </div>

              {/* Tactical HUD Overlay */}
              <div className="absolute top-4 left-4 right-4 flex justify-between items-start z-10">
                <Badge variant="secondary" className="bg-primary/20 text-primary border-primary/30">
                  ⚡ LIVE FOOTAGE
                </Badge>
                <Badge variant="outline" className="bg-card/30 text-foreground border-primary/30">
                  HD QUALITY
                </Badge>
              </div>

              {/* Bottom Info Bar */}
              <div className="absolute bottom-4 left-4 right-4 z-10">
                <div className="bg-card/60 backdrop-blur-lg border border-primary/20 rounded-lg p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-orbitron font-semibold text-gradient-gold">OG Clan Cameroon</h4>
                      <p className="text-xs text-muted-foreground">Elite highlights reel</p>
                    </div>
                    <div className="text-right">
                      <div className="text-sm font-medium text-primary">OG CLAN</div>
                      <div className="text-xs text-muted-foreground">Battle Ready</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-6">
            Ready to join the ranks and create your own legendary moments?
          </p>
          <button 
            className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-card/30 to-card/60 hover:from-card/50 hover:to-card/80 border border-primary/30 hover:border-primary/50 text-foreground font-medium rounded-lg transition-all duration-300 hover:scale-105 backdrop-blur-lg"
            onClick={() => window.location.hash = '#join'}
          >
            <Users className="mr-2 h-5 w-5" />
            Join OG Clan
          </button>
        </div>
      </div>
    </section>
  );
};

export default BattleFootageSection;