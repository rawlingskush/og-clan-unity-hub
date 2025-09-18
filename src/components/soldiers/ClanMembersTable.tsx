import React from 'react';
import { motion } from 'framer-motion';
import { Users } from 'lucide-react';

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
  { name: 'ФƓゝDARKCLOWN', status: 'ACTIVE' },
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
  { name: 'ФƓゝꪜꪮꪀ', status: 'ACTIVE' },
];

const getStatusColor = (status: ClanMember['status']): string => {
  switch (status) {
    case 'ACTIVE':
      return 'text-emerald-400';
    case 'INACTIVE (PERSONAL)':
      return 'text-yellow-400';
    case 'NO CLAN ACTIVITY':
      return 'text-red-400';
    default:
      return 'text-gray-400';
  }
};

const getStatusBadge = (status: ClanMember['status']): string => {
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
  const inactiveMembers = clanMembers.filter(m => m.status === 'INACTIVE (PERSONAL)').length;
  const noClanActivityMembers = clanMembers.filter(m => m.status === 'NO CLAN ACTIVITY').length;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full max-w-6xl mx-auto"
    >
      {/* Header */}
      <div className="flex items-center justify-center gap-3 mb-8">
        <Users className="text-ogclan" size={24} />
        <h2 className="text-heading-2 text-gradient-enhanced font-bold">📜 OG Clan Members</h2>
      </div>

      {/* Stats Summary */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        <div className="bg-black/60 border border-white/10 rounded-lg p-4 text-center">
          <div className="text-2xl font-bold text-white">{totalMembers}</div>
          <div className="text-sm text-gray-400">Total Members</div>
        </div>
        <div className="bg-black/60 border border-emerald-500/20 rounded-lg p-4 text-center">
          <div className="text-2xl font-bold text-emerald-400">{activeMembers}</div>
          <div className="text-sm text-gray-400">Active</div>
        </div>
        <div className="bg-black/60 border border-yellow-500/20 rounded-lg p-4 text-center">
          <div className="text-2xl font-bold text-yellow-400">{inactiveMembers}</div>
          <div className="text-sm text-gray-400">Inactive</div>
        </div>
        <div className="bg-black/60 border border-red-500/20 rounded-lg p-4 text-center">
          <div className="text-2xl font-bold text-red-400">{noClanActivityMembers}</div>
          <div className="text-sm text-gray-400">No Activity</div>
        </div>
      </div>

      {/* Members Table */}
      <div className="bg-black/40 backdrop-blur-sm border border-white/10 rounded-lg overflow-hidden">
        <div className="overflow-x-auto">
          <div className="max-h-[500px] overflow-y-auto">
            <table className="w-full">
              <thead className="sticky top-0 bg-black/80 backdrop-blur-sm border-b border-white/10">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-ogclan uppercase tracking-wider">
                    Player Name
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-ogclan uppercase tracking-wider">
                    Status
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {clanMembers.map((member, index) => (
                  <motion.tr
                    key={member.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ 
                      duration: 0.3,
                      delay: Math.min(index * 0.02, 1) // Cap the delay to prevent too long animations
                    }}
                    className="hover:bg-white/5 transition-colors group"
                  >
                    <td className="px-6 py-3">
                      <div className="font-bold text-white group-hover:text-ogclan group-hover:text-shadow-[0_0_8px_rgba(212,175,55,0.4)] transition-all duration-300">
                        {member.name}
                      </div>
                    </td>
                    <td className="px-6 py-3">
                      <div className="flex items-center gap-2">
                        <span className="text-sm">{getStatusBadge(member.status)}</span>
                        <span className={`font-medium text-sm ${getStatusColor(member.status)}`}>
                          {member.status}
                        </span>
                      </div>
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Update Note */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        className="mt-8 text-center"
      >
        <div className="bg-black/30 border border-white/10 rounded-lg p-6">
          <p className="text-sm text-gray-300 leading-relaxed">
            This list is updated monthly. We take every soldier's progress seriously — it's not perfect yet, 
            but it shows we care about you as part of <span className="text-ogclan font-semibold">OG CLAN</span>.
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ClanMembersTable;