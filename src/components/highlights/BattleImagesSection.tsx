import React from 'react';
import BattleImageCard from './BattleImageCard';
const BattleImagesSection = () => {
  const battleImages = [{
    id: 1,
    imageSrc: "/lovable-uploads/codm-twilight-heist.png",
    title: "Twilight Heist: Epic CODM Battle",
    shortTitle: "Twilight Heist",
    description: "Experience the intensity of Call of Duty Mobile's most thrilling game modes where OG Clan dominates the battlefield.",
    animation: "fade-in-up" as const,
    delay: 0
  }, {
    id: 2,
    imageSrc: "/lovable-uploads/4ec7719d-df84-4f0a-a8a5-4ad80acc8ff3.png",
    title: "Elite Squad: OG Clan Warriors",
    shortTitle: "Elite Squad",
    description: "Our top operatives form the elite squad, representing OG Clan in the most competitive CODM tournaments.",
    animation: "slide-in-left" as const,
    delay: 200
  }, {
    id: 3,
    imageSrc: "/lovable-uploads/1cb31bbb-4233-43e5-81db-f5f2fabe0ac5.png",
    title: "Tactical Operative: Precision & Style",
    shortTitle: "Tactical Operative",
    description: "When precision meets style, our operatives deliver flawless execution in every mission.",
    animation: "slide-in-right" as const,
    delay: 400
  }];
  return (
    <div className="relative py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Battle Highlights
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Witness our greatest moments and tactical victories in Call of Duty Mobile
          </p>
        </div>
        
        <div className="mobile-grid-center">
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
      </div>
    </div>
  );
};
export default BattleImagesSection;