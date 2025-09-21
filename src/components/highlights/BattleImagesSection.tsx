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
  return;
};
export default BattleImagesSection;