import React from 'react';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ClanMembersTable from '@/components/soldiers/ClanMembersTable';
import { Users, TrendingUp, Target, Award } from 'lucide-react';

const ClanMembers = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800">
        <Navbar />
        
        {/* Hero Section */}
        <section className="relative pt-20 pb-16 px-4 overflow-hidden">
          {/* Background Effects */}
          <div className="absolute inset-0 bg-gradient-to-r from-ogclan/5 via-transparent to-ogclan/5"></div>
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-ogclan/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-ogclan/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
          
          <div className="relative max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                <span className="text-gradient-enhanced">OG CLAN</span>
                <br />
                <span className="text-white">MEMBERS</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
                Complete roster of our elite Call of Duty Mobile warriors with tier progression tracking
              </p>
            </motion.div>

            {/* Stats Overview */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-12"
            >
              <div className="bg-black/40 backdrop-blur-sm border border-ogclan/20 rounded-xl p-6">
                <Users className="w-8 h-8 text-ogclan mx-auto mb-2" />
                <div className="text-2xl font-bold text-white">50+</div>
                <div className="text-sm text-gray-400">Total Members</div>
              </div>
              <div className="bg-black/40 backdrop-blur-sm border border-green-500/20 rounded-xl p-6">
                <TrendingUp className="w-8 h-8 text-green-400 mx-auto mb-2" />
                <div className="text-2xl font-bold text-green-400">85%</div>
                <div className="text-sm text-gray-400">Active Rate</div>
              </div>
              <div className="bg-black/40 backdrop-blur-sm border border-purple-500/20 rounded-xl p-6">
                <Target className="w-8 h-8 text-purple-400 mx-auto mb-2" />
                <div className="text-2xl font-bold text-purple-400">6</div>
                <div className="text-sm text-gray-400">Tier Levels</div>
              </div>
              <div className="bg-black/40 backdrop-blur-sm border border-yellow-500/20 rounded-xl p-6">
                <Award className="w-8 h-8 text-yellow-400 mx-auto mb-2" />
                <div className="text-2xl font-bold text-yellow-400">12</div>
                <div className="text-sm text-gray-400">Elite Squad</div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Members Table Section */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <ClanMembersTable />
            </motion.div>
          </div>
        </section>

        <Footer />
      </div>
  );
};

export default ClanMembers;