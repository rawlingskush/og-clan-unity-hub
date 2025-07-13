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
      {/* Header */}
      <div className="text-center space-y-4">
        <div className="flex items-center justify-center gap-3">
          <Shield className="text-ogclan" size={24} />
          <h2 className="text-3xl font-bold text-white">TACTICAL ROSTER</h2>
          <TrendingUp className="text-ogclan" size={24} />
        </div>
        
        <p className="text-gray-400 max-w-2xl mx-auto">
          Strategic hierarchy displaying our soldiers by performance tier. 
          Click on soldiers with profiles to view their detailed stats.
        </p>
        
        <div className="flex items-center justify-center gap-6 text-sm">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-ogclan" />
            <span className="text-gray-300">Has Profile</span>
          </div>
          <div className="text-gray-400">
            Total: {totalSoldiers} Soldiers
          </div>
        </div>
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

      {/* Footer Notes */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="mt-12 p-6 rounded-lg border border-ogclan/20 bg-ogclan/5"
      >
        <h3 className="text-lg font-semibold text-ogclan mb-4">📌 NOTES TO THE CLAN</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-300">
          <div className="space-y-2">
            <p>💬 This tracker uplifts — not to shame</p>
            <p>🔄 Everyone's tier can change — effort is the key</p>
          </div>
          <div className="space-y-2">
            <p>🤝 Leaders: guide & support those below</p>
            <p>📊 Tracker updates monthly after scrims, comps, battle nights & commitment</p>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default TierRosterSection;