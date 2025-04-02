
import React from 'react';
import AchievementsSection from './highlights/AchievementsSection';
import EventCard from './highlights/EventCard';
import BattleImagesSection from './highlights/BattleImagesSection';

const HighlightsSection = () => {
  const values = [{
    id: 1,
    title: "Celebrate Loyalty",
    description: "Join us for epic Call of Duty Mobile tournaments where OG Clan members honor our Cameroon roots while strengthening clan bonds."
  }, {
    id: 2,
    title: "Everyone Belongs",
    description: "Veterans share COD Mobile tactics. Inactive members reconnect. Newcomers find their place. We grow stronger together."
  }, {
    id: 3,
    title: "Level Up Together",
    description: "Face thrilling COD Mobile challenges. Earn exclusive rewards. Sharpen your skills in friendly competition."
  }];
  
  return (
    <div className="relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-64 bg-gradient-to-b from-ogclan/5 to-transparent opacity-30"></div>
      <div className="absolute -top-40 right-20 w-80 h-80 bg-ogclan/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-40 -left-20 w-80 h-80 bg-ogclan/5 rounded-full blur-3xl"></div>
      
      <div className="relative z-10">
        <AchievementsSection />

        <div className="relative mb-12">
          <div className="absolute -top-10 -left-10 w-48 h-48 bg-ogclan/5 rounded-full blur-3xl"></div>
          <EventCard features={values} />
        </div>

        <BattleImagesSection />
      </div>
    </div>
  );
};

export default HighlightsSection;
