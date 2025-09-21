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
    window.open('https://www.tiktok.com/@ogclancameroon/video/7544029346097368322?is_from_webapp=1&sender_device=pc', '_blank');
  };

  return (
    <section className="py-12 bg-gradient-to-b from-background to-background/50 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,hsl(var(--primary))_0%,transparent_70%)] opacity-10" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,hsl(var(--accent))_0%,transparent_70%)] opacity-10" />
      
      <div className="container mx-auto px-4 relative z-10 max-w-5xl">
        {/* Section Header */}
        <div className="text-center mb-8">
          <Badge variant="outline" className="mb-3 text-primary border-primary/30">
            🎬 BATTLE FOOTAGE
          </Badge>
          <h2 className="text-3xl md:text-4xl font-orbitron font-bold text-gradient-gold mb-4">
            LEGENDARY MOMENTS
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto mb-4" />
          <p className="text-base text-muted-foreground max-w-2xl mx-auto">
            Witness OG Clan's tactical excellence in action
          </p>
        </div>

        {/* Featured Video */}
        <Card className="max-w-3xl mx-auto bg-gradient-to-br from-card/20 to-card/40 backdrop-blur-lg border border-primary/30 overflow-hidden">
          <CardContent className="p-0">
            <div className="relative aspect-video bg-gradient-to-br from-primary/20 to-accent/20">
              {/* Epic CODM Background */}
              <div className="absolute inset-0">
                <img 
                  src="/lovable-uploads/codm-twilight-heist.png" 
                  alt="CODM Twilight Heist Battle" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-background/70 to-background/50 backdrop-blur-[1px]" />
              </div>
              {/* Video Thumbnail/Placeholder */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="mb-4 p-4 bg-primary/20 rounded-full inline-block">
                    <Play className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-orbitron font-bold text-gradient-gold mb-2">
                    OG CLAN CAMEROON HIGHLIGHTS
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4 max-w-sm mx-auto">
                    Elite Cameroonian warriors in action
                  </p>
                  <button
                    onClick={handleVideoClick}
                    className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-primary to-accent text-primary-foreground font-medium rounded-lg transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-primary/25 group"
                  >
                    <Play className="mr-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    Watch Highlights
                    <ExternalLink className="ml-2 h-3 w-3" />
                  </button>
                </div>
              </div>

              {/* Tactical HUD Overlay */}
              <div className="absolute top-3 left-3 right-3 flex justify-between items-start z-10">
                <Badge variant="secondary" className="bg-primary/20 text-primary border-primary/30 text-xs">
                  ⚡ LIVE FOOTAGE
                </Badge>
                <Badge variant="outline" className="bg-card/30 text-foreground border-primary/30 text-xs">
                  HD QUALITY
                </Badge>
              </div>

              {/* Bottom Info Bar */}
              <div className="absolute bottom-3 left-3 right-3 z-10">
                <div className="bg-card/60 backdrop-blur-lg border border-primary/20 rounded-lg p-3">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-orbitron font-semibold text-gradient-gold text-sm">OG Clan Cameroon</h4>
                      <p className="text-xs text-muted-foreground">Elite highlights reel</p>
                    </div>
                    <div className="text-right">
                      <div className="text-xs font-medium text-primary">OG CLAN</div>
                      <div className="text-xs text-muted-foreground">Battle Ready</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default BattleFootageSection;