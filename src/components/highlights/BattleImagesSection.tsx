
import React from 'react';
import BattleImageCard from './BattleImageCard';

const BattleImagesSection = () => {
  const battleImages = [
    {
      id: 1,
      imageSrc: "/lovable-uploads/4ec7719d-df84-4f0a-a8a5-4ad80acc8ff3.png",
      title: "Elite Squad: OG Clan Warriors",
      shortTitle: "Elite Squad",
      description: "Our top operatives form the elite squad, representing OG Clan in the most competitive CODM tournaments.",
      animation: "slide-in-left" as const,
      delay: 0
    },
    {
      id: 2,
      imageSrc: "/lovable-uploads/18906822-e0ce-4f6c-94ef-5507b6818849.png",
      title: "Battle Squad: Elite Formation",
      shortTitle: "Battle Squad",
      description: "When the OG Battle Squad enters the field, opponents know they're in for a real challenge.",
      animation: "fade-in-up" as const,
      delay: 200
    },
    {
      id: 3,
      imageSrc: "/lovable-uploads/1cb31bbb-4233-43e5-81db-f5f2fabe0ac5.png",
      title: "Tactical Operative: Precision & Style",
      shortTitle: "Tactical Operative",
      description: "When precision meets style, our operatives deliver flawless execution in every mission.",
      animation: "fade-in-up" as const,
      delay: 400
    },
    {
      id: 4,
      imageSrc: "/lovable-uploads/4aff45e6-a800-4a02-8a26-f5cc53f2c562.png",
      title: "Special Forces: Day of the Dead",
      shortTitle: "Special Forces",
      description: "Our special forces unit brings fear to the battlefield with their legendary Day of the Dead tactics.",
      animation: "slide-in-right" as const,
      delay: 600
    }
  ];

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
      {battleImages.map((image) => (
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
  );
};

export default BattleImagesSection;
