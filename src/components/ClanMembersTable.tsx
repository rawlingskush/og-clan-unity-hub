import React from 'react';
import { motion } from 'framer-motion';

interface ClanMember {
  name: string;
  status: 'ACTIVE' | 'INACTIVE (PERSONAL)' | 'NO CLAN ACTIVITY';
}

const clanMembers: ClanMember[] = [
  { name: 'ФƓゝ13', status: 'ACTIVE' },
  { name: 'ФƓゝ21', status: 'ACTIVE' },
  { name: 'ФƓ_AKAZA', status: 'ACTIVE' },
  { name: 'ФƓゝALVES', status: 'ACTIVE' },
  { name: 'ФƓゝAMINUTE', status: 'ACTIVE' },
  { name: 'ФƓゝBOTLORDD', status: 'ACTIVE' },
  { name: 'ФƓゝBOT-GIRL', status: 'ACTIVE' },
  { name: 'ФƓゝBRAWNZY', status: 'INACTIVE (PERSONAL)' },
  { name: 'ФƓゝBUNNT', status: 'ACTIVE' },
  { name: 'ФƓゝC0D~MIKKI', status: 'ACTIVE' },
  { name: 'ФƓゝCHAMBAS', status: 'ACTIVE' },
  { name: 'ФƓゝCНÃKRÃ', status: 'ACTIVE' },
  { name: 'ФƓゝCONQÜËST', status: 'ACTIVE' },
  { name: 'ФƓゝCULT', status: 'NO CLAN ACTIVITY' },
  { name: 'ФƓゝDAMAGE', status: 'ACTIVE' },
  { name: 'ФƓゝDED', status: 'NO CLAN ACTIVITY' },
  { name: 'ФƓゝDHAMER', status: 'ACTIVE' },
  { name: 'ФƓゝDNA', status: 'INACTIVE (PERSONAL)' },
  { name: 'ФƓゝDRIPS', status: 'NO CLAN ACTIVITY' },
  { name: 'ФƓゝDRIZZY', status: 'ACTIVE' },
  { name: 'ФƓゝFABISCO', status: 'ACTIVE' },
  { name: 'ФƓゝESQUARE', status: 'ACTIVE' },
  { name: 'ФƓゝEXODUSKI', status: 'ACTIVE' },
  { name: 'ФƓゝGUILLAUME', status: 'ACTIVE' },
  { name: 'ФƓゝHABIBI', status: 'ACTIVE' },
  { name: 'ФƓゝHARDMIKE', status: 'ACTIVE' },
  { name: 'ФƓゝHARRIS', status: 'ACTIVE' },
  { name: 'ФƓゝHATED', status: 'ACTIVE' },
  { name: 'ФƓゝIPSA', status: 'ACTIVE' },
  { name: 'ФƓゝKÄPPÄ', status: 'ACTIVE' },
  { name: 'ФƓゝKENDRA', status: 'ACTIVE' },
  { name: 'ФƓゝKUSH', status: 'ACTIVE' },
  { name: 'ФƓゝLAMENACE', status: 'ACTIVE' },
  { name: 'ФƓゝLEGEND', status: 'ACTIVE' },
  { name: 'ФƓゝLILNASTY', status: 'ACTIVE' },
  { name: 'ФƓゝMAFIA', status: 'ACTIVE' },
  { name: 'ФƓゝMAJOR', status: 'ACTIVE' },
  { name: 'ФƓゝMATIC', status: 'NO CLAN ACTIVITY' },
  { name: 'ФƓゝMULLER', status: 'ACTIVE' },
  { name: 'ФƓゝMÄÐÐŌĠ', status: 'ACTIVE' },
  { name: 'ФƓゝMØLLY', status: 'ACTIVE' },
  { name: 'ФƓゝMŪŁŁER', status: 'ACTIVE' },
  { name: 'ФƓゝÑØØB»', status: 'INACTIVE (PERSONAL)' },
  { name: 'ФƓゝNOVAX', status: 'ACTIVE' },
  { name: 'ФƓゝOWNER', status: 'ACTIVE' },
  { name: 'ФƓゝOVERKILL', status: 'ACTIVE' },
  { name: 'ФƓゝƤÅTФ', status: 'ACTIVE' },
  { name: 'ФƓゝPINKY', status: 'ACTIVE' },
  { name: 'ФƓゝPUNISHER', status: 'ACTIVE' },
  { name: 'ФƓゝRENZO', status: 'ACTIVE' },
  { name: 'ФƓゝREXO', status: 'ACTIVE' },
  { name: 'ФƓゝSEPH', status: 'ACTIVE' },
  { name: 'ФƓゝSHADY', status: 'ACTIVE' },
  { name: 'ФƓゝSHINØBI', status: 'ACTIVE' },
  { name: 'ФƓゝSLOW', status: 'ACTIVE' },
  { name: 'ФƓゝSL1M', status: 'ACTIVE' },
  { name: 'ФƓゝSPRIZER', status: 'ACTIVE' },
  { name: 'ФƓゝSTAIN', status: 'ACTIVE' },
  { name: 'ФƓゝSTARL1GHT', status: 'ACTIVE' },
  { name: 'ФƓゝSUSREX', status: 'ACTIVE' },
  { name: 'ФƓゝSUSPECT', status: 'ACTIVE' },
  { name: 'ФƓゝSWIZZY', status: 'ACTIVE' },
  { name: 'ФƓゝSAMMY', status: 'ACTIVE' },
  { name: 'ФƓゝSNAKEYES', status: 'ACTIVE' },
  { name: 'ФƓゝTÉLOS', status: 'ACTIVE' },
  { name: 'ФƓゝTIGER', status: 'ACTIVE' },
  { name: 'ФƓゝUNCLE B', status: 'ACTIVE' },
  { name: 'ФƓゝVENOM', status: 'ACTIVE' },
  { name: 'ФƓゝVENOM TT', status: 'ACTIVE' },
  { name: 'ФƓゝWHITEএ', status: 'ACTIVE' },
  { name: 'ФƓゝWIZ', status: 'NO CLAN ACTIVITY' },
  { name: 'ФƓゝWIɀƛRÐ', status: 'ACTIVE' },
  { name: 'ФƓゝƊHƛMӠR', status: 'ACTIVE' },
  { name: 'ФƓゝҜภเﻮђ', status: 'ACTIVE' },
  { name: 'ФƓゝꪜꪮꪀ', status: 'ACTIVE' }
];

const getStatusColor = (status: ClanMember['status']) => {
  switch (status) {
    case 'ACTIVE':
      return 'text-green-400';
    case 'INACTIVE (PERSONAL)':
      return 'text-yellow-400';
    case 'NO CLAN ACTIVITY':
      return 'text-red-400';
    default:
      return 'text-white';
  }
};

const getStatusIcon = (status: ClanMember['status']) => {
  switch (status) {
    case 'ACTIVE':
      return '🟢';
    case 'INACTIVE (PERSONAL)':
      return '🟡';
    case 'NO CLAN ACTIVITY':
      return '🔴';
    default:
      return '⚪';
  }
};

const ClanMembersTable = () => {
  const totalMembers = clanMembers.length;
  const activeMembers = clanMembers.filter(m => m.status === 'ACTIVE').length;
  const inactivePersonal = clanMembers.filter(m => m.status === 'INACTIVE (PERSONAL)').length;
  const noClanActivity = clanMembers.filter(m => m.status === 'NO CLAN ACTIVITY').length;

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-8"
      >
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
          📜 <span className="text-gradient-gold">OG Clan Members</span>
        </h1>
        <div className="flex flex-wrap justify-center gap-4 text-sm md:text-base mb-6">
          <div className="bg-black/50 border border-ogclan/30 rounded-lg px-4 py-2">
            <span className="text-ogclan font-semibold">Total: {totalMembers}</span>
          </div>
          <div className="bg-black/50 border border-green-400/30 rounded-lg px-4 py-2">
            <span className="text-green-400 font-semibold">🟢 Active: {activeMembers}</span>
          </div>
          <div className="bg-black/50 border border-yellow-400/30 rounded-lg px-4 py-2">
            <span className="text-yellow-400 font-semibold">🟡 Inactive: {inactivePersonal}</span>
          </div>
          <div className="bg-black/50 border border-red-400/30 rounded-lg px-4 py-2">
            <span className="text-red-400 font-semibold">🔴 No Activity: {noClanActivity}</span>
          </div>
        </div>
      </motion.div>

      {/* Table Container */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="bg-black/80 backdrop-blur-sm border border-ogclan/30 rounded-xl overflow-hidden shadow-2xl"
      >
        {/* Table Header */}
        <div className="bg-gradient-to-r from-ogclan/20 to-ogclan/10 border-b border-ogclan/30 px-6 py-4">
          <div className="grid grid-cols-2 gap-4">
            <h3 className="text-lg font-bold text-ogclan">Player Name</h3>
            <h3 className="text-lg font-bold text-ogclan">Status</h3>
          </div>
        </div>

        {/* Table Body */}
        <div className="max-h-[60vh] overflow-y-auto">
          {clanMembers.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: index * 0.01 }}
              className="border-b border-ogclan/10 hover:bg-ogclan/5 transition-all duration-300 group"
            >
              <div className="grid grid-cols-2 gap-4 px-6 py-4">
                <div className="flex items-center">
                  <span className="text-white font-bold text-sm md:text-base group-hover:text-ogclan transition-colors duration-300 group-hover:drop-shadow-[0_0_8px_rgba(212,175,55,0.6)]">
                    {member.name}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span>{getStatusIcon(member.status)}</span>
                  <span className={`font-medium text-sm md:text-base ${getStatusColor(member.status)}`}>
                    {member.status}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Footer Note */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="text-center mt-8"
      >
        <div className="bg-black/60 backdrop-blur-sm border border-ogclan/20 rounded-lg px-6 py-4 max-w-4xl mx-auto">
          <p className="text-gray-300 text-sm md:text-base leading-relaxed">
            "This list is updated monthly. We take every soldier's progress seriously — it's not perfect yet, but it shows we care about you as part of <span className="text-ogclan font-semibold">OG CLAN</span>."
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default ClanMembersTable;