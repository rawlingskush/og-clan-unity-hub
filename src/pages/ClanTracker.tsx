import React from 'react';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from '@/components/ui/table';

interface Member {
  name: string;
  status: 'ACTIVE' | 'INACTIVE (PERSONAL)' | 'NO CLAN ACTIVITY';
}

const members: Member[] = [
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

const getStatusColor = (status: Member['status']) => {
  switch (status) {
    case 'ACTIVE':
      return 'text-green-400';
    case 'INACTIVE (PERSONAL)':
      return 'text-yellow-400';
    case 'NO CLAN ACTIVITY':
      return 'text-red-400';
    default:
      return 'text-gray-400';
  }
};

const getStatusIcon = (status: Member['status']) => {
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

const ClanTracker = () => {
  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      
      <main className="pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center py-12"
          >
            <h1 className="text-4xl md:text-6xl font-orbitron font-bold text-white mb-4">
              📜 <span className="text-gradient-gold">OG CLAN</span> TRACKER
            </h1>
            <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
              Complete roster of all OG Blood members and their current activity status
            </p>
          </motion.div>

          {/* Members Table */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-gray-900/50 backdrop-blur-sm rounded-lg border border-ogclan/20 shadow-2xl overflow-hidden mb-8"
          >
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow className="border-b border-ogclan/30 hover:bg-transparent">
                    <TableHead className="text-ogclan font-orbitron font-semibold text-lg py-4 px-6">
                      Player Name
                    </TableHead>
                    <TableHead className="text-ogclan font-orbitron font-semibold text-lg py-4 px-6">
                      Status
                    </TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {members.map((member, index) => (
                    <TableRow 
                      key={member.name}
                      className="border-b border-gray-800/50 hover:bg-gray-800/30 transition-all duration-300 group"
                    >
                      <TableCell className="py-4 px-6">
                        <span className="font-bold text-white group-hover:text-ogclan transition-colors duration-300 font-orbitron text-sm md:text-base group-hover:drop-shadow-[0_0_8px_rgba(212,175,55,0.4)]">
                          {member.name}
                        </span>
                      </TableCell>
                      <TableCell className="py-4 px-6">
                        <div className="flex items-center gap-2">
                          <span className="text-lg">{getStatusIcon(member.status)}</span>
                          <span className={`font-medium text-sm md:text-base ${getStatusColor(member.status)}`}>
                            {member.status}
                          </span>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </motion.div>

          {/* Footer Note */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center pb-12"
          >
            <div className="bg-gray-900/30 backdrop-blur-sm rounded-lg border border-ogclan/10 p-6 max-w-4xl mx-auto">
              <p className="text-gray-300 text-sm md:text-base leading-relaxed">
                <span className="text-ogclan font-semibold">Note:</span> This list is updated monthly. 
                We take every soldier's progress seriously — it's not perfect yet, but it shows we care about you as part of <span className="text-ogclan font-bold">OG Blood</span>.
              </p>
            </div>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ClanTracker;