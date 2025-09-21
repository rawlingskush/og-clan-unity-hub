
import React from 'react';
import BattleImageCard from './BattleImageCard';

const BattleImagesSection = () => {
  const battleImages = [
    {
      id: 1,
      imageSrc: "/lovable-uploads/codm-twilight-heist.png",
      title: "Twilight Heist: Epic CODM Battle",
      shortTitle: "Twilight Heist",
      description: "Experience the intensity of Call of Duty Mobile's most thrilling game modes where OG Clan dominates the battlefield.",
      animation: "fade-in-up" as const,
      delay: 0
    },
    {
      id: 2,
      imageSrc: "/lovable-uploads/4ec7719d-df84-4f0a-a8a5-4ad80acc8ff3.png",
      title: "Elite Squad: OG Clan Warriors",
      shortTitle: "Elite Squad", 
      description: "Our top operatives form the elite squad, representing OG Clan in the most competitive CODM tournaments.",
      animation: "slide-in-left" as const,
      delay: 200
    },
    {
      id: 3,
      imageSrc: "/lovable-uploads/1cb31bbb-4233-43e5-81db-f5f2fabe0ac5.png",
      title: "Tactical Operative: Precision & Style",
      shortTitle: "Tactical Operative",
      description: "When precision meets style, our operatives deliver flawless execution in every mission.",
      animation: "slide-in-right" as const,
      delay: 400
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-background/50 to-background relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,hsl(var(--primary))_0%,transparent_70%)] opacity-5" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-orbitron font-bold text-gradient-gold mb-4">
            BATTLE SHOWCASE
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto mb-6" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Epic moments captured from the frontlines of Mobile warfare
          </p>
        </div>

        {/* Battle Images Grid */}
        <div className="battle-showcase-mobile md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-8 max-w-6xl mx-auto">
          {battleImages.map((image, index) => (
            <BattleImageCard
              key={image.id}
              imageSrc={image.imageSrc}
              title={image.title}
              shortTitle={image.shortTitle}
              description={image.description}
              animation={image.animation}
              delay={image.delay}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BattleImagesSection;
