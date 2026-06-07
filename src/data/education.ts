import type { Education } from '@/types';

export const EDUCATION: Education[] = [
  {
    title:      'Bachelor of Computer Science',
    school:     'Padjadjaran University (UNPAD)',
    location:   'Sumedang, West Java, Indonesia',
    duration:   'Aug 2023 – Present (Expected 2027)',
    scoreLabel: 'Cumulative GPA',
    score:      '3.78 / 4.00',
    logoUrl:    '/images/education/unpad.png',
    details: [
      'Relevant Coursework: Statistics, Data Mining, Artificial Intelligence, Decision Support Systems, Database Systems I & II, System Information, Operations Research, Numerical Methods, Linear Algebra.',
      'Achievements:',
      'Selected as Team Leader of Universitas Padjadjaran Delegation ("Warlok" Team) for GEMASTIK 2025 Data Mining Competition.',
      'Semifinalist – Business Plan Competition by IFEST (Oct 2025).',
    ],
  },
  {
    title:      'Data Science & AI Machine Learning',
    school:     'Dibimbing.id',
    location:   'Online',
    duration:   'March 2026 – Present',
    scoreLabel: 'Status',
    score:      'Bootcamp',
    logoUrl:    '/images/education/dibimbing.png',
    details: [
      'Mastering advanced SQL for data analysis, including complex joins, subqueries, and window functions to extract and manipulate large-scale business datasets.',
      'Conducting in-depth exploratory data analysis (EDA) and statistical hypothesis testing using Python (Pandas, NumPy, Scikit-learn).',
      'Developing data storytelling and analytical insights through data visualization and unsupervised learning techniques.',
      'Applying supervised machine learning models and end-to-end data science workflows to solve business challenges.',
      'Gaining hands-on experience with deep learning (TensorFlow/PyTorch), NLP, time-series forecasting, and big data tools.',
    ],
  },
];