import { Soldier } from '@/types/soldier';
import runtownImage from '@/assets/runtown.png.asset.json';
import dcpikinImage from '@/assets/dcpikin.png.asset.json';
import vien77Image from '@/assets/vien77.png.asset.json';
import mambaImage from '@/assets/mamba.png.asset.json';
import btgImage from '@/assets/btg.png.asset.json';
import lamarHarrisImage from '@/assets/lamar-harris.png.asset.json';
import sadiaImage from '@/assets/sadia.png.asset.json';

export const newMemberSoldiers: Soldier[] = [
  {
    id: 'runtown', name: 'ѲǤゝ RUNTOWN', clanName: 'ѲǤゝRUNTOWN',
    role: 'Assault Specialist', weapon: 'AK117',
    bio: 'Runtown brings steady energy to OG Clan. With his favorite AK117 in hand, he is ready to push forward alongside the squad and make every engagement count.',
    tiktokUrl: '', imageUrl: runtownImage.url
  },
  {
    id: 'dcpikin', name: 'ѲǤゝ DCPIKIN', clanName: 'ѲǤゝDCPIKIN',
    role: 'Tactical Assault', weapon: 'Type 19',
    bio: 'DcPikin steps into the action with his trusted Type 19. A proud OG warrior, he brings a team-first spirit and the determination to keep improving with every match.',
    tiktokUrl: '', imageUrl: dcpikinImage.url
  },
  {
    id: 'vien77', name: 'ѲǤゝ VIEN77', clanName: 'ѲǤゝK^VIEN77',
    role: 'Assault Operator', weapon: 'Type 19',
    bio: 'Vien77 favors the versatility of the Type 19. Whether holding a position or moving with the team, he is here to represent OG Clan and grow stronger alongside his fellow warriors.',
    tiktokUrl: '', imageUrl: vien77Image.url
  },
  {
    id: 'mamba', name: 'ѲǤゝ MAMBA', clanName: 'ѲǤゝMAMBA',
    role: 'Close-Quarters Specialist', weapon: 'KRM-262',
    bio: 'Mamba brings the KRM-262 to the fight, ready for those close-range encounters where timing matters most. He joins the squad with a fighting spirit and pride in the OG name.',
    tiktokUrl: '', imageUrl: mambaImage.url
  },
  {
    id: 'btg', name: 'ѲǤゝ BTG', clanName: 'ѲǤゝ1BTG',
    role: 'Assault Specialist', weapon: 'Type 19',
    bio: 'BTG keeps his Type 19 close and his squad closer. A rising OG warrior, he brings determination to every match and keeps working toward the next level.',
    tiktokUrl: '', imageUrl: btgImage.url
  },
  {
    id: 'lamar', name: 'ѲǤゝ LAMAR', clanName: 'ѲǤゝLAMAR',
    role: 'Shotgun Operator', weapon: 'HS0405',
    bio: 'Lamar favors the HS0405 for up-close engagements. Proud to stand with OG Clan, he is ready to take on the next challenge with his squad at his side.',
    tiktokUrl: '', imageUrl: lamarHarrisImage.url
  },
  {
    id: 'harris', name: 'ѲǤゝ HARRIS', clanName: 'ѲǤゝHARRIS',
    role: 'Close-Range Fighter', weapon: 'HS0405',
    bio: 'Harris brings his favorite HS0405 into close-range battles. A steady presence in OG Clan, he keeps sharpening his game and supporting the warriors around him.',
    tiktokUrl: '', imageUrl: lamarHarrisImage.url
  },
  {
    id: 'sadia', name: 'ѲǤゝ SADIA', clanName: 'ѲǤゝSADIA',
    role: 'Grace & Firepower', weapon: 'AK117',
    bio: 'Sadia joins OG Clan with grace, confidence, and her favorite AK117. A beautiful addition to our warrior family, she brings a fierce spirit to the battlefield — standing proudly alongside the girls and the whole squad.',
    tiktokUrl: '', imageUrl: sadiaImage.url, princess: true, spotlight: true, active: true
  }
];