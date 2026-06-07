import { FaCode, FaDatabase, FaPython } from 'react-icons/fa';
import {
  SiArduino,
  SiNextdotjs,
  SiPandas,
  SiScikitlearn,
  SiSupabase,
  SiTensorflow,
} from '@icons-pack/react-simple-icons';
import type { TechItem, Project } from '@/types';

const TECH: Record<string, TechItem> = {
  nextjs:      { name: 'Next.js',      Icon: SiNextdotjs,   className: 'text-black'         },
  supabase:    { name: 'Supabase',     Icon: SiSupabase,    className: 'text-[#3ECF8E]'     },
  postgresql:  { name: 'PostgreSQL',   Icon: FaDatabase,    className: 'text-blue-600'       },
  python:      { name: 'Python',       Icon: FaPython,      className: 'text-yellow-500'     },
  tensorflow:  { name: 'TensorFlow',   Icon: SiTensorflow,  className: 'text-orange-500'     },
  arduino:     { name: 'Arduino',      Icon: SiArduino,     className: 'text-cyan-500'       },
  pandas:      { name: 'Pandas',       Icon: SiPandas,      className: 'text-purple-600'     },
  scikitlearn: { name: 'Scikit-learn', Icon: SiScikitlearn, className: 'text-orange-400'     },
  mediapipe:   { name: 'MediaPipe',    Icon: FaCode,        className: 'text-slate-700'      },
  plotly:      { name: 'Plotly',       Icon: FaCode,        className: 'text-slate-700'      },
  opencv:      { name: 'OpenCV',       Icon: FaCode,        className: 'text-slate-700'      },
  flask:       { name: 'Flask',        Icon: FaCode,        className: 'text-slate-700'      },
};

// showOnHome: true  → tampil di homepage (ProjectSection)
// featured: true    → tampil badge "Featured" di halaman /projects

export const PROJECTS: Project[] = [
  {
    title:       'The Intelligence Battle: Human Expert vs. Evolutionary Tuning & Neuro-Fuzzy',
    description: 'A comparative study exploring whether machines can design better decision systems than human experts. Evaluated three approaches: Manual Mamdani FIS (43.73%), Genetic Algorithm-optimized FIS (+24.17% → 67.90%), and ANN-guided Neuro-Fuzzy (84.06%).',
    image:       '/images/projects/safepath.jpg',
    category:    'Machine Learning',
    year:        '2024',
    tech:        [TECH.python, TECH.scikitlearn],
    github:      'https://github.com/Hafizh220705/safepath',
    featured:    true,
    showOnHome:  true,
  },
  {
    title:       'EEG Emotion Classification',
    description: 'Emotion classification research based on EEG signals using Muse S device and deep learning models to detect 4 emotion classes.',
    image:       '/images/projects/eeg.jpg',
    category:    'Machine Learning',
    year:        '2024',
    tech:        [TECH.python, TECH.tensorflow],
    github:      'https://github.com/Hafizh220705/eeg-classification',
    featured:    true,
    showOnHome:  true,
  },
  {
    title:       'Robotic Angklung',
    description: 'Automated angklung robotic system controlled using Computer Vision (MediaPipe) and Arduino for servo control.',
    image:       '/images/projects/angklung.jpg',
    category:    'Robotics',
    year:        '2023',
    tech:        [TECH.python, TECH.arduino, TECH.mediapipe],
    github:      'https://github.com/Hafizh220705/robotic-angklung',
    showOnHome:  true,
  },
  {
    title:       'Sales Dashboard Analysis',
    description: 'Sales data analysis with interactive visualizations using Pandas and Plotly to identify trends and patterns.',
    image:       '/images/projects/sales.jpg',
    category:    'Data Analysis',
    year:        '2024',
    tech:        [TECH.python, TECH.pandas, TECH.plotly],
    github:      'https://github.com/Hafizh220705/sales-dashboard',
  },
  {
    title:       'Sentiment Analysis NLP',
    description: 'NLP model for sentiment analysis of e-commerce product reviews using fine-tuned BERT on an Indonesian language dataset.',
    image:       '/images/projects/nlp.jpg',
    category:    'Machine Learning',
    year:        '2023',
    tech:        [TECH.python, TECH.tensorflow, TECH.scikitlearn],
    github:      'https://github.com/Hafizh220705/sentiment-nlp',
  },
  {
    title:       'Smart Attendance System',
    description: 'Automatic attendance system based on face recognition using OpenCV and Flask as a REST API backend.',
    image:       '/images/projects/attendance.jpg',
    category:    'Machine Learning',
    year:        '2023',
    tech:        [TECH.python, TECH.opencv, TECH.flask],
    github:      'https://github.com/Hafizh220705/smart-attendance',
  },
];

export const HOME_PROJECTS = PROJECTS.filter((p) => p.showOnHome);

export const PROJECT_CATEGORIES = [
  'All',
  ...Array.from(new Set(PROJECTS.map((p) => p.category))),
];