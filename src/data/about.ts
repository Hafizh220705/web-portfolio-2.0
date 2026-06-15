import type { Highlight } from '@/types';

export const ABOUT_PARAGRAPH =
  'Computer Science student at Universitas Padjadjaran specializing in Data Science and Data Analytics — transforming complex data into actionable insights and smarter business decisions.';

export const HIGHLIGHTS: Highlight[] = [
  { phrase: 'Computer Science',        className: 'hover:bg-neo-blue hover:text-white'  },
  { phrase: 'Universitas Padjadjaran', className: 'hover:bg-neo-pink hover:text-black'  },
  { phrase: 'Data Science',            className: 'hover:bg-neo-pink hover:text-black'  },
  { phrase: 'Data Analytics',          className: 'hover:bg-neo-pink hover:text-black'  },
  { phrase: 'actionable insights',     className: 'hover:bg-neo-yellow hover:text-black'},
  { phrase: 'business decisions',      className: 'hover:bg-neo-yellow hover:text-black'},
];

export const RESUME_PATH = 'https://drive.google.com/file/d/1GQA2cpmQIIX6Eh2VDVjKq1kAJh1PebZv/view?usp=sharing';

export const WHATSAPP_HREF = 'https://wa.me/6282290764213';

export const SOCIAL_FLOATING = [
  { href: 'https://instagram.com/hafizhfadhlm',     label: 'Instagram', position: 'top-left',     bgClass: 'bg-white hover:bg-neo-pink',    shape: 'rounded-lg',    delay: '0s' },
  { href: 'https://github.com/Hafizh220705',        label: 'GitHub',    position: 'top-right',    bgClass: 'bg-neo-yellow hover:scale-110', shape: 'rounded-full',  delay: '1s' },
  { href: 'https://linkedin.com/in/hafizhfadhlm',  label: 'LinkedIn',  position: 'bottom-left',  bgClass: 'bg-neo-blue hover:scale-110',   shape: '',              delay: '2s' },
] as const;