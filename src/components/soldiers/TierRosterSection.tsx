import React from 'react';
import { motion } from 'framer-motion';
import { Shield, TrendingUp } from 'lucide-react';
import { tierData } from '@/data/tiers';
import TierCard from './TierCard';

interface TierRosterSectionProps {
  onSoldierClick?: (soldier: any) => void;
}

const TierRosterSection = ({ onSoldierClick }: TierRosterSectionProps) => {
  const totalSoldiers = tierData.reduce((acc, tier) => acc + tier.soldiers.length, 0);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="space-y-6"
    >
      {/* Enhanced Header */}
      <div className="text-center space-y-6 mb-8">
        {/* Main Title with Glow Effect */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative"
        >
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="p-3 rounded-xl bg-gradient-to-br from-ogclan/30 to-ogclan/10 border border-ogclan/20 backdrop-blur-sm">
              <Shield className="text-ogclan" size={28} />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-ogclan via-white to-ogclan bg-clip-text text-transparent tracking-wide">
              PROGRESS TRACKER
            </h2>
            <div className="p-3 rounded-xl bg-gradient-to-br from-ogclan/30 to-ogclan/10 border border-ogclan/20 backdrop-blur-sm">
              <TrendingUp className="text-ogclan" size={28} />
            </div>
          </div>
          
          {/* Subtitle */}
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
          >
            Strategic hierarchy displaying our <span className="text-ogclan font-semibold">OG Clan warriors</span> by performance tier
          </motion.p>
        </motion.div>
        
        {/* Stats Bar */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="flex flex-wrap items-center justify-center gap-6 text-sm"
        >
          <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-ogclan/10 border border-ogclan/20 backdrop-blur-sm">
            <div className="w-3 h-3 rounded-full bg-gradient-to-r from-ogclan to-ogclan-glow animate-pulse" />
            <span className="text-ogclan font-medium">Has Profile</span>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm">
            <span className="text-white font-medium">Total Warriors:</span>
            <span className="text-ogclan font-bold text-lg">{totalSoldiers}</span>
          </div>
        </motion.div>

        {/* Instruction */}
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-sm text-gray-400 font-medium"
        >
          💡 Click on warriors with profiles to view detailed stats
        </motion.p>
      </div>

      {/* Tiers */}
      <div className="space-y-4">
        {tierData.map((tier, index) => (
          <TierCard
            key={tier.id}
            tier={tier}
            index={index}
            onSoldierClick={onSoldierClick}
          />
        ))}
      </div>

      {/* Enhanced Clan Notes Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="mt-16 relative"
      >
        {/* Pinned Announcement Style */}
        <div className="relative bg-gradient-to-br from-ogclan/20 via-ogclan/10 to-black/50 rounded-2xl border-2 border-ogclan/30 shadow-2xl backdrop-blur-sm overflow-hidden">
          {/* Decorative corner pins */}
          <div className="absolute top-2 left-2 w-3 h-3 bg-ogclan rounded-full shadow-lg"></div>
          <div className="absolute top-2 right-2 w-3 h-3 bg-ogclan rounded-full shadow-lg"></div>
          <div className="absolute bottom-2 left-2 w-3 h-3 bg-ogclan rounded-full shadow-lg"></div>
          <div className="absolute bottom-2 right-2 w-3 h-3 bg-ogclan rounded-full shadow-lg"></div>
          
          {/* Tactical grid overlay */}
          <div className="absolute inset-0 opacity-5">
            <div className="grid grid-cols-12 gap-px h-full">
              {Array.from({ length: 144 }).map((_, i) => (
                <div key={i} className="bg-ogclan/20"></div>
              ))}
            </div>
          </div>
          
          <div className="relative p-8">
            {/* Header with enhanced styling */}
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="w-8 h-8 bg-ogclan/20 rounded-lg flex items-center justify-center">
                <span className="text-xl">📌</span>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-ogclan tracking-wide">
                CLAN NOTES & GUIDELINES
              </h3>
              <div className="w-8 h-8 bg-ogclan/20 rounded-lg flex items-center justify-center">
                <span className="text-xl">📌</span>
              </div>
            </div>
            
            {/* Content Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 text-gray-200">
              {/* Left Column */}
              <div className="space-y-4">
                <div className="flex items-start gap-3 group">
                  <div className="w-8 h-8 bg-blue-500/20 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-blue-500/30 transition-colors">
                    <span className="text-lg">💬</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-blue-300 mb-1">Positive Environment</h4>
                    <p className="text-sm leading-relaxed">This tracker uplifts — not to shame. We support each other's growth.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3 group">
                  <div className="w-8 h-8 bg-green-500/20 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-green-500/30 transition-colors">
                    <span className="text-lg">🔄</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-green-300 mb-1">Growth Mindset</h4>
                    <p className="text-sm leading-relaxed">Everyone's tier can change — effort is the key to advancement.</p>
                  </div>
                </div>
              </div>
              
              {/* Right Column */}
              <div className="space-y-4">
                <div className="flex items-start gap-3 group">
                  <div className="w-8 h-8 bg-yellow-500/20 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-yellow-500/30 transition-colors">
                    <span className="text-lg">🤝</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-yellow-300 mb-1">Leadership Responsibility</h4>
                    <p className="text-sm leading-relaxed">Leaders: guide & support those below. Lead by example.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3 group">
                  <div className="w-8 h-8 bg-purple-500/20 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-purple-500/30 transition-colors">
                    <span className="text-lg">📊</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-purple-300 mb-1">Regular Updates</h4>
                    <p className="text-sm leading-relaxed">Tracker updates monthly after scrims, comps, battle nights & commitment assessment.</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Bottom emphasis */}
            <div className="mt-8 pt-6 border-t border-ogclan/20 text-center">
              <p className="text-ogclan font-medium tracking-wide">
                🎯 <span className="text-lg">STAY ACTIVE • STAY LOYAL • STAY OG</span> 🎯
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default TierRosterSection;