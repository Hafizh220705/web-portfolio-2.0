import type { SkillItem } from '@/types';
import {
  FaPython, FaJava, FaJs, FaPhp, FaDatabase, FaCode, FaRobot,
} from 'react-icons/fa';
import {
  SiTypescript, SiCplusplus, SiTensorflow, SiScikitlearn,
} from 'react-icons/si';

export const DATA_SCIENCE_SKILLS: SkillItem[] = [
  { name: 'TensorFlow',         Icon: SiTensorflow,  hoverClass: 'hover:bg-[#FF6F00] hover:text-white' },
  { name: 'Scikit-Learn',       Icon: SiScikitlearn, hoverClass: 'hover:bg-[#F7931E] hover:text-white' },
  { name: 'Sentiment Analysis', Icon: FaRobot,       hoverClass: 'hover:bg-neo-pink hover:text-white'  },
  { name: 'Signal Processing',  Icon: FaCode,        hoverClass: 'hover:bg-neo-blue hover:text-white'  },
  { name: 'IndoBERT',           Icon: FaRobot,       hoverClass: 'hover:bg-neo-green hover:text-black' },
  { name: 'MediaPipe',          Icon: FaCode,        hoverClass: 'hover:bg-[#00C3A5] hover:text-white' },
];

export const PROGRAMMING_LANGUAGES: SkillItem[] = [
  { name: 'Python',     Icon: FaPython,     hoverClass: 'hover:bg-[#3776AB] hover:text-white' },
  { name: 'Java',       Icon: FaJava,       hoverClass: 'hover:bg-[#ED8B00] hover:text-white' },
  { name: 'JavaScript', Icon: FaJs,         hoverClass: 'hover:bg-[#F7DF1E] hover:text-black' },
  { name: 'TypeScript', Icon: SiTypescript, hoverClass: 'hover:bg-[#3178C6] hover:text-white' },
  { name: 'PHP',        Icon: FaPhp,        hoverClass: 'hover:bg-[#777BB4] hover:text-white' },
  { name: 'C++',        Icon: SiCplusplus,  hoverClass: 'hover:bg-[#00599C] hover:text-white' },
  { name: 'SQL',        Icon: FaDatabase,   hoverClass: 'hover:bg-[#336791] hover:text-white' },
];