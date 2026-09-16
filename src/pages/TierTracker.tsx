import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Target, Users, Crown, Star, Shield } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import TierRosterSection from '@/components/soldiers/TierRosterSection';
import { tierData } from '@/data/tiers';
import { cn } from '@/lib/utils';
const TierTracker = () => {
  const totalSoldiers = tierData.reduce((acc, tier) => acc + tier.soldiers.length, 0);
  const stats = [{
    icon: Users,
    label: 'Total Warriors',
    value: totalSoldiers,
    color: 'text-blue-400'
  }, {
    icon: Trophy,
    label: 'Active Tiers',
    value: tierData.length,
    color: 'text-yellow-400'
  }, {
    icon: Crown,
    label: 'Tier 1 Elites',
    value: tierData[0]?.soldiers.length || 0,
    color: 'text-purple-400'
  }, {
    icon: Star,
    label: 'Rising Stars',
    value: tierData[3]?.soldiers.length || 0,
    color: 'text-green-400'
  }];
  return <div className="min-h-screen bg-black">
      <Navbar />
      
      {/* Hero Section */}
      <motion.section initial={{
      opacity: 0,
      y: 20
    }} animate={{
      opacity: 1,
      y: 0
    }} transition={{
      duration: 0.8
    }} className="relative pt-20 pb-16 overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-tactical-dark via-black to-black opacity-90" />
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-96 h-96 bg-ogclan/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-0 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl" />
        </div>

        <div className="container relative z-10 mx-auto px-4 text-center">
          <h1 className="font-orbitron text-4xl md:text-6xl font-bold text-gradient-gold mb-4">
            TIER TRACKER
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Live tier progression for all {totalSoldiers} OG warriors.
          </p>
        </div>
      </motion.section>

      {/* Tier Roster Section */}
      <motion.section initial={{
      opacity: 0
    }} animate={{
      opacity: 1
    }} transition={{
      delay: 1,
      duration: 0.8
    }} className="relative">
        <TierRosterSection />
      </motion.section>

      <Footer />
    </div>;
};
export default TierTracker;