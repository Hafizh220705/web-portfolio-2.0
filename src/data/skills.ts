import type { SkillItem } from '@/types';

// react-icons/fa
import {
  FaChartBar,
  FaCode,
  FaDatabase,
  FaEye,
  FaJava,
  FaJs,
  FaPhp,
  FaPython,
  FaRobot,
} from 'react-icons/fa';

// react-icons/fa6
import { FaBrain, FaCircleNodes } from 'react-icons/fa6';

// @icons-pack/react-simple-icons
import {
  SiCplusplus,
  SiHuggingface,
  SiKeras,
  SiNumpy,
  SiOpencv,
  SiPandas,
  SiPlotly,
  SiScikitlearn,
  SiTensorflow,
  SiTypescript,
} from '@icons-pack/react-simple-icons';

// ─── Programming Languages ───────────────────────────────────────────────────
export const PROGRAMMING_LANGUAGES: SkillItem[] = [
  { name: 'Python',     Icon: FaPython,     hoverClass: 'hover:bg-[#3776AB] hover:text-white' },
  { name: 'Java',       Icon: FaJava,       hoverClass: 'hover:bg-[#ED8B00] hover:text-white' },
  { name: 'JavaScript', Icon: FaJs,         hoverClass: 'hover:bg-[#F7DF1E] hover:text-black' },
  { name: 'TypeScript', Icon: SiTypescript, hoverClass: 'hover:bg-[#3178C6] hover:text-white' },
  { name: 'PHP',        Icon: FaPhp,        hoverClass: 'hover:bg-[#777BB4] hover:text-white' },
  { name: 'C++',        Icon: SiCplusplus,  hoverClass: 'hover:bg-[#00599C] hover:text-white' },
  { name: 'SQL',        Icon: FaDatabase,   hoverClass: 'hover:bg-[#336791] hover:text-white' },
];

// ─── ML Frameworks & Libraries ───────────────────────────────────────────────
export const ML_FRAMEWORKS: SkillItem[] = [
  { name: 'TensorFlow',    Icon: SiTensorflow,  hoverClass: 'hover:bg-[#FF6F00] hover:text-white' },
  { name: 'Keras',         Icon: SiKeras,       hoverClass: 'hover:bg-[#D00000] hover:text-white' },
  { name: 'Scikit-Learn',  Icon: SiScikitlearn, hoverClass: 'hover:bg-[#F7931E] hover:text-white' },
  { name: 'XGBoost',       Icon: FaRobot,       hoverClass: 'hover:bg-[#0073B7] hover:text-white' },
  { name: 'Random Forest', Icon: FaBrain,       hoverClass: 'hover:bg-[#228B22] hover:text-white' },
  { name: 'Hugging Face',  Icon: SiHuggingface, hoverClass: 'hover:bg-[#FFD21E] hover:text-black' },
  { name: 'IndoBERT',      Icon: FaBrain,       hoverClass: 'hover:bg-neo-pink hover:text-white'  },
];

// ─── Data Analysis ────────────────────────────────────────────────────────────
export const DATA_ANALYSIS: SkillItem[] = [
  { name: 'Pandas',   Icon: SiPandas,      hoverClass: 'hover:bg-[#150458] hover:text-white' },
  { name: 'NumPy',    Icon: SiNumpy,       hoverClass: 'hover:bg-[#013243] hover:text-white' },
  { name: 'EDA',      Icon: FaDatabase,    hoverClass: 'hover:bg-neo-blue hover:text-white'  },
  { name: 'CRISP-DM', Icon: FaCircleNodes, hoverClass: 'hover:bg-neo-green hover:text-black' },
];

// ─── Data Visualization ───────────────────────────────────────────────────────
export const DATA_VISUALIZATION: SkillItem[] = [
  { name: 'Matplotlib', Icon: FaChartBar, hoverClass: 'hover:bg-[#11557C] hover:text-white' },
  { name: 'Seaborn',    Icon: FaCode,     hoverClass: 'hover:bg-[#4C8CBF] hover:text-white' },
  { name: 'Plotly',     Icon: SiPlotly,   hoverClass: 'hover:bg-[#3F4F75] hover:text-white' },
];

// ─── Computer Vision ──────────────────────────────────────────────────────────
export const COMPUTER_VISION: SkillItem[] = [
  { name: 'OpenCV',    Icon: SiOpencv, hoverClass: 'hover:bg-[#5C3EE8] hover:text-white' },
  { name: 'MediaPipe', Icon: FaCode,   hoverClass: 'hover:bg-[#00C3A5] hover:text-white' },
  { name: 'CNN',       Icon: FaBrain,  hoverClass: 'hover:bg-[#FF6F00] hover:text-white' },
  { name: 'YOLO',      Icon: FaEye,    hoverClass: 'hover:bg-[#00FFFF] hover:text-black' },
];

// ─── NLP ──────────────────────────────────────────────────────────────────────
export const NLP_SKILLS: SkillItem[] = [
  { name: 'Sentiment Analysis', Icon: FaRobot,       hoverClass: 'hover:bg-neo-pink hover:text-white'  },
  { name: 'TF-IDF',             Icon: FaCode,        hoverClass: 'hover:bg-neo-blue hover:text-white'  },
  { name: 'Text Preprocessing', Icon: FaCode,        hoverClass: 'hover:bg-neo-green hover:text-black' },
  { name: 'IndoBERT',           Icon: FaBrain,       hoverClass: 'hover:bg-[#E34234] hover:text-white' },
  { name: 'Hugging Face',       Icon: SiHuggingface, hoverClass: 'hover:bg-[#FFD21E] hover:text-black' },
];