import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Users, Search, ExternalLink, Star } from 'lucide-react';
import { getSoldierByName, hasEliteProfile, getSoldierAnchor } from '@/utils/soldierMapping';

interface ClanMember {
  name: string;
  status: 'ACTIVE' | 'INACTIVE (PERSONAL)' | 'NO CLAN ACTIVITY';
}

const clanMembers: ClanMember[] = [
  { name: 'ФƓゝ21', status: 'ACTIVE' },
  { name: 'ФƓゝ23', status: 'ACTIVE' },
  { name: 'ФƓゝ1BTG', status: 'ACTIVE' },
  { name: 'ФƓゝAKAZA', status: 'ACTIVE' },
  { name: 'ФƓゝALVES', status: 'ACTIVE' },
  { name: 'ФƓゝAMMI', status: 'ACTIVE' },
  { name: 'ФƓゝBEBERIA', status: 'ACTIVE' },
  { name: 'ФƓゝBLACKSAVAGE', status: 'ACTIVE' },
  { name: 'ФƓゝBOTGIRL', status: 'ACTIVE' },
  { name: 'ФƓゝBOTLORDD', status: 'ACTIVE' },
  { name: 'ФƓゝBUNNY', status: 'INACTIVE (PERSONAL)' },
  { name: 'ФƓゝCHAKRA', status: 'ACTIVE' },
  { name: 'ФƓゝCHAMBAS', status: 'ACTIVE' },
  { name: 'ФƓゝCOD~MIKKI', status: 'ACTIVE' },
  { name: 'ФƓゝCONQUEST', status: 'ACTIVE' },
  { name: 'ФƓゝDAMAGE', status: 'ACTIVE' },
  { name: 'ФƓゝDCPIKIN', status: 'ACTIVE' },
  { name: 'ФƓゝDED', status: 'ACTIVE' },
  { name: 'ФƓゝDAHMER', status: 'ACTIVE' },
  { name: 'ФƓゝDIAN', status: 'ACTIVE' },
  { name: 'ФƓゝDRIPPA', status: 'ACTIVE' },
  { name: 'ФƓゝESQUARE', status: 'ACTIVE' },
  { name: 'ФƓゝEXODUSK', status: 'INACTIVE (PERSONAL)' },
  { name: 'ФƓゝFAVORITE', status: 'ACTIVE' },
  { name: 'ФƓゝFIXED', status: 'INACTIVE (PERSONAL)' },
  { name: 'ФƓゝGAMEHOUSE', status: 'ACTIVE' },
  { name: 'ФƓゝHARDMIKE', status: 'ACTIVE' },
  { name: 'ФƓゝHARRIS', status: 'ACTIVE' },
  { name: 'ФƓゝHATED', status: 'ACTIVE' },
  { name: 'ФƓゝICON', status: 'ACTIVE' },
  { name: 'ФƓゝK^VIEN77', status: 'ACTIVE' },
  { name: 'ФƓゝKAPPA', status: 'ACTIVE' },
  { name: 'ФƓゝKNIGHT', status: 'INACTIVE (PERSONAL)' },
  { name: 'ФƓゝKUSH', status: 'ACTIVE' },
  { name: 'ФƓゝLG-ACE', status: 'ACTIVE' },
  { name: 'ФƓゝLIL OP', status: 'ACTIVE' },
  { name: 'ФƓゝLILNASTY', status: 'ACTIVE' },
  { name: 'ФƓゝLUCIFER', status: 'ACTIVE' },
  { name: 'ФƓゝLIYZEEY', status: 'ACTIVE' },
  { name: 'ФƓゝMAFIA', status: 'ACTIVE' },
  { name: 'ФƓゝMAJOR', status: 'ACTIVE' },
  { name: 'ФƓゝZEUS', status: 'ACTIVE' },
  { name: 'ФƓゝMADDOG', status: 'ACTIVE' },
  { name: 'ФƓゝMENACE', status: 'ACTIVE' },
  { name: 'ФƓゝMŪŁŁER', status: 'ACTIVE' },
  { name: 'ФƓゝMULLERYT', status: 'ACTIVE' },
  { name: 'ФƓゝNO_FACE', status: 'ACTIVE' },
  { name: 'ФƓゝNOOB', status: 'ACTIVE' },
  { name: 'ФƓゝNOVAX', status: 'ACTIVE' },
  { name: 'ФƓゝOLOSHO', status: 'ACTIVE' },
  { name: 'ФƓゝOWNER', status: 'ACTIVE' },
  { name: 'ФƓゝPATO', status: 'ACTIVE' },
  { name: 'ФƓゝPINKY', status: 'ACTIVE' },
  { name: 'ФƓゝPUNISHER', status: 'ACTIVE' },
  { name: 'ФƓゝRAMZY', status: 'ACTIVE' },
  { name: 'ФƓゝREMA237', status: 'ACTIVE' },
  { name: 'ФƓゝREXO', status: 'ACTIVE' },
  { name: 'ФƓゝRICHBOY', status: 'ACTIVE' },
  { name: 'ФƓゝRUNTOWN', status: 'ACTIVE' },
  { name: 'ФƓゝSAVAGE', status: 'ACTIVE' },
  { name: 'ФƓゝSHADOW', status: 'ACTIVE' },
  { name: 'ФƓゝSHINØBI', status: 'ACTIVE' },
  { name: 'ФƓゝSL1M', status: 'ACTIVE' },
  { name: 'ФƓゝSLIM SHADY', status: 'ACTIVE' },
  { name: 'ФƓゝSMOKE', status: 'ACTIVE' },
  { name: 'ФƓゝSNAKESEYES', status: 'INACTIVE (PERSONAL)' },
  { name: 'ФƓゝSPARK', status: 'ACTIVE' },
  { name: 'ФƓゝSTARL1GHT', status: 'ACTIVE' },
  { name: 'ФƓゝSTAIN', status: 'INACTIVE (PERSONAL)' },
  { name: 'ФƓゝSUSPECT', status: 'ACTIVE' },
  { name: 'ФƓゝSWIZZY', status: 'ACTIVE' },
  { name: 'ФƓゝTELOS', status: 'ACTIVE' },
  { name: 'ФƓゝTEDDY', status: 'ACTIVE' },
  { name: 'ФƓゝUNCLE B', status: 'ACTIVE' },
  { name: 'ФƓゝVENOM', status: 'ACTIVE' },
  { name: 'ФƓゝWHITE', status: 'INACTIVE (PERSONAL)' },
  { name: 'ФƓゝWIZARD', status: 'ACTIVE' },
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
  const [searchTerm, setSearchTerm] = useState('');

  // Filter members based on search term
  const filteredMembers = useMemo(() => {
    if (!searchTerm.trim()) return clanMembers;
    
    return clanMembers.filter(member =>
      member.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [searchTerm]);

  const totalMembers = clanMembers.length;
  const activeMembers = clanMembers.filter(m => m.status === 'ACTIVE').length;
  const inactiveMembers = clanMembers.filter(m => m.status === 'INACTIVE (PERSONAL)').length;
  const noClanActivityMembers = clanMembers.filter(m => m.status === 'NO CLAN ACTIVITY').length;
  const eliteSquadMembers = clanMembers.filter(m => hasEliteProfile(m.name)).length;

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

      {/* Search Bar */}
      <div className="mb-6">
        <div className="relative max-w-md mx-auto">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
          <input
            type="text"
            placeholder="Search clan members..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-3 bg-black/40 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-ogclan/50 focus:bg-black/60 transition-all"
          />
        </div>
        {searchTerm && (
          <div className="text-center mt-2 text-sm text-gray-400">
            Showing {filteredMembers.length} of {totalMembers} members
          </div>
        )}
      </div>

      {/* Stats Summary */}
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-8">
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
        <div className="bg-black/60 border border-ogclan/20 rounded-lg p-4 text-center">
          <div className="text-2xl font-bold text-ogclan">{eliteSquadMembers}</div>
          <div className="text-sm text-gray-400">Elite Squad</div>
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
                  <th className="px-6 py-4 text-center text-sm font-semibold text-ogclan uppercase tracking-wider">
                    Profile
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {filteredMembers.map((member, index) => {
                  const soldier = getSoldierByName(member.name);
                  const hasProfile = hasEliteProfile(member.name);
                  
                  return (
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
                        <div className="flex items-center gap-2">
                          <div className="font-bold text-white group-hover:text-ogclan group-hover:text-shadow-[0_0_8px_rgba(212,175,55,0.4)] transition-all duration-300">
                            {member.name}
                          </div>
                          {hasProfile && (
                            <Star className="text-ogclan" size={16} />
                          )}
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
                      <td className="px-6 py-3 text-center">
                        {hasProfile && soldier ? (
                          <a
                            href={`/soldiers#${getSoldierAnchor(soldier)}`}
                            className="inline-flex items-center gap-1 text-ogclan hover:text-ogclan/80 transition-colors group/link"
                            title="View Elite Squad Profile"
                          >
                            <ExternalLink size={14} />
                            <span className="text-xs">Profile</span>
                          </a>
                        ) : (
                          <span className="text-xs text-gray-500">-</span>
                        )}
                      </td>
                    </motion.tr>
                  );
                })}
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