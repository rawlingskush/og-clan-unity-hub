
import React from 'react';
import BattleImageCard from './BattleImageCard';

const BattleImagesSection = () => {
  const battleImages = [
    {
      id: 1,
      imageSrc: "/lovable-uploads/a15dcbad-a5da-4907-9f61-2bb0814ccf9a.png",
      title: "Elite Squad: Clan Warriors",
      shortTitle: "Elite Squad",
      description: "Our top members form the elite squad, representing OG Clan in the most competitive tournaments.",
      animation: "slide-in-left" as const,
      delay: 0
    },
    {
      id: 2,
      imageSrc: "/lovable-uploads/abd25e00-c7ac-47cf-8f29-d3a09b17097a.png",
      title: "Battle Squad: Perfect Coordination",
      shortTitle: "Battle Squad",
      description: "When the OG Battle Squad enters the field, opponents know they're in for a real challenge.",
      animation: "fade-in-up" as const,
      delay: 200
    },
    {
      id: 3,
      imageSrc: "/lovable-uploads/e5378274-2a94-43fe-b1fd-30596884f957.png",
      title: "The Champion: Commander",
      shortTitle: "The Champion",
      description: "Our clan leader stands among the fallen, a testament to OG Clan's dominance in every battle.",
      animation: "slide-in-right" as const,
      delay: 400
    }
  ];

  return (
    <div className="grid md:grid-cols-3 gap-6">
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
