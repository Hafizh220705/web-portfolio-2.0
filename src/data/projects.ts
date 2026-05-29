import type { ComponentType } from 'react';
import { FaCode, FaDatabase, FaPython } from 'react-icons/fa';
import {
  SiArduino,
  SiNextdotjs,
  SiPandas,
  SiScikitlearn,
  SiSupabase,
  SiTensorflow,
} from '@icons-pack/react-simple-icons';

type TechIcon = ComponentType<{ size?: number | string; className?: string }>;

export type TechItem = {
  name: string;
  Icon: TechIcon;
  className?: string;
};

export type Project = {
  title: string;
  description: string;
  image: string;
  category: string;
  year: string;
  tech: TechItem[];
  github: string;
  website?: string;
  featured?: boolean;
  showOnHome?: boolean;
};

const TECH: Record<string, TechItem> = {
  nextjs: { name: 'Next.js', Icon: SiNextdotjs, className: 'text-black' },
  supabase: { name: 'Supabase', Icon: SiSupabase, className: 'text-[#3ECF8E]' },
  postgresql: { name: 'PostgreSQL', Icon: FaDatabase, className: 'text-blue-600' },
  python: { name: 'Python', Icon: FaPython, className: 'text-yellow-500' },
  tensorflow: { name: 'TensorFlow', Icon: SiTensorflow, className: 'text-orange-500' },
  arduino: { name: 'Arduino', Icon: SiArduino, className: 'text-cyan-500' },
  pandas: { name: 'Pandas', Icon: SiPandas, className: 'text-purple-600' },
  scikitlearn: { name: 'Scikit-learn', Icon: SiScikitlearn, className: 'text-orange-400' },
  mediapipe: { name: 'MediaPipe', Icon: FaCode, className: 'text-slate-700' },
  plotly: { name: 'Plotly', Icon: FaCode, className: 'text-slate-700' },
  opencv: { name: 'OpenCV', Icon: FaCode, className: 'text-slate-700' },
  flask: { name: 'Flask', Icon: FaCode, className: 'text-slate-700' },
};

export const PROJECTS: Project[] = [
  {
    title: 'SafePath',
    description:
      'Platform pelaporan kriminalitas dan keamanan publik berbasis web untuk meningkatkan kesadaran keamanan lingkungan masyarakat.',
    image: '/images/projects/safepath.jpg',
    category: 'Web Dev',
    year: '2024',
    tech: [TECH.nextjs, TECH.supabase, TECH.postgresql],
    github: 'https://github.com/Hafizh220705/safepath',
    website: 'https://safepath-demo.com',
    featured: true,
    showOnHome: true,
  },
  {
    title: 'EEG Emotion Classification',
    description:
      'Riset klasifikasi emosi berbasis sinyal EEG menggunakan perangkat Muse S dan model deep learning untuk mendeteksi 4 kelas emosi.',
    image: '/images/projects/eeg.jpg',
    category: 'Machine Learning',
    year: '2024',
    tech: [TECH.python, TECH.tensorflow],
    github: 'https://github.com/Hafizh220705/eeg-classification',
    featured: true,
    showOnHome: true,
  },
  {
    title: 'Robotic Angklung',
    description:
      'Sistem robotika angklung otomatis yang dikontrol menggunakan Computer Vision (MediaPipe) dan Arduino untuk kontrol servo.',
    image: '/images/projects/angklung.jpg',
    category: 'Robotics',
    year: '2023',
    tech: [TECH.python, TECH.arduino, TECH.mediapipe],
    github: 'https://github.com/Hafizh220705/robotic-angklung',
    showOnHome: true,
  },
  {
    title: 'Sales Dashboard Analysis',
    description:
      'Analisis data penjualan dengan visualisasi interaktif menggunakan Pandas dan Plotly untuk mengidentifikasi tren dan pola.',
    image: '/images/projects/sales.jpg',
    category: 'Data Analysis',
    year: '2024',
    tech: [TECH.python, TECH.pandas, TECH.plotly],
    github: 'https://github.com/Hafizh220705/sales-dashboard',
  },
  {
    title: 'Sentiment Analysis NLP',
    description:
      'Model NLP untuk analisis sentimen ulasan produk e-commerce menggunakan BERT fine-tuned pada dataset Bahasa Indonesia.',
    image: '/images/projects/nlp.jpg',
    category: 'Machine Learning',
    year: '2023',
    tech: [TECH.python, TECH.tensorflow, TECH.scikitlearn],
    github: 'https://github.com/Hafizh220705/sentiment-nlp',
  },
  {
    title: 'Smart Attendance System',
    description:
      'Sistem absensi otomatis berbasis face recognition menggunakan OpenCV dan Flask sebagai backend REST API.',
    image: '/images/projects/attendance.jpg',
    category: 'Machine Learning',
    year: '2023',
    tech: [TECH.python, TECH.opencv, TECH.flask],
    github: 'https://github.com/Hafizh220705/smart-attendance',
  },
];

export const HOME_PROJECTS = PROJECTS.filter((project) => project.showOnHome);

export const PROJECT_CATEGORIES = [
  'All',
  ...Array.from(new Set(PROJECTS.map((project) => project.category))),
];
