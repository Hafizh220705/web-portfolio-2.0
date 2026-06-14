import { FaCode, FaDatabase, FaPython } from 'react-icons/fa';
import {
  SiArduino,
  SiNextdotjs,
  SiPandas,
  SiScikitlearn,
  SiSupabase,
  SiTensorflow,
} from '@icons-pack/react-simple-icons';
import { FaDna, FaBrain } from 'react-icons/fa6';
import { FaChartPie, FaProjectDiagram, FaTree } from 'react-icons/fa';
import type { TechItem, Project } from '@/types';
import { FaFileAlt } from 'react-icons/fa';
import { SiHuggingface, SiGooglegemini } from '@icons-pack/react-simple-icons';
import { FaPlug, FaMicrochip } from 'react-icons/fa';

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
  geneticalgorithm: { name: 'Genetic Algorithm', Icon: FaDna, className: 'text-green-600' },
  fuzzylogic: { name: 'Fuzzy Logic', Icon: FaBrain, className: 'text-indigo-500' },
  kmeans: { name: 'K-Means', Icon: FaChartPie, className: 'text-blue-500' },
  apriori: { name: 'Apriori', Icon: FaProjectDiagram, className: 'text-amber-500' },
  randomforest: { name: 'Random Forest', Icon: FaTree, className: 'text-green-700' },
  huggingface: { name: 'Hugging Face', Icon: SiHuggingface, className: 'text-yellow-400' },
  indobert: { name: 'IndoBERT', Icon: FaBrain, className: 'text-red-500' },
  tfidf: { name: 'TF-IDF', Icon: FaFileAlt, className: 'text-slate-600' },
  gemini: { name: 'Gemini API', Icon: SiGooglegemini, className: 'text-blue-500' },
  serial: { name: 'Serial Comm', Icon: FaPlug, className: 'text-gray-600' },
  iot: { name: 'IoT Hardware', Icon: FaMicrochip, className: 'text-teal-600' },
};

// showOnHome: true  → tampil di homepage (ProjectSection)
// featured: true    → tampil badge "Featured" di halaman /projects

export const PROJECTS: Project[] = [
  {
    title: 'Credit Risk Intelligence Battle',
    description: 'A three-stage comparative study evaluating credit risk prediction methods by benchmarking human-intuition fuzzy rules against Genetic Algorithm (GA) optimization and Artificial Neural Network (ANN) data-driven learning.',
    image: '/images/projects/credit-risk.png',
    detailImage: '/images/projects/credit-risk-2.png',
    category: 'Machine Learning',
    year: '2026',
    tech: [TECH.python, TECH.scikitlearn, TECH.geneticalgorithm, TECH.fuzzylogic],
    github: 'https://github.com/Hafizh220705/credit-risk-intelligence-battle',
    website: 'https://credit-risk-intelligence-battle.streamlit.app/',
    drive: 'https://drive.google.com/file/d/1-TxC4d40MNPnJ1PhCDAs5QmcCq8UeIcS/view?usp=sharing',
    problem:
      'Traditional credit risk assessment systems rely heavily on human expert knowledge to define fuzzy rules and parameters. These manual designs tend to be uniform and symmetric, failing to accurately reflect the complex, asymmetric risk boundaries present in real-world financial data.',
    solution: [
      'Engineered a baseline Manual Mamdani Fuzzy Inference System (FIS) utilizing 27 hand-crafted rules structured purely on human logic.',
      'Optimized Membership Function (MF) parameters through a Genetic Algorithm (GA) employing chromosome encoding and fitness evaluation to dynamically adjust risk boundaries.',
      'Developed an ANN teacher model via Scikit-learn MLPClassifier to generate soft scores for data-driven FIS tuning, alongside conducting rigorous ablation studies to test extreme parameter configurations.',
    ],
    results: [
      'The manual human-intuition baseline yielded an initial accuracy of 43.73%.',
      'The GA-based optimization successfully boosted the FIS accuracy to 67.90%, representing a significant +24.17% improvement.',
      'The pure ANN model achieved a peak accuracy of 84.06%, while the ANN-guided FIS tuning reached 62.75%.',
      'Key Takeaways: Manual FIS is optimal for strict decision explainability, GA offers a solid balance between high accuracy and readable rules, and ANN is the definitive choice when maximizing pure predictive accuracy is the sole priority.',
    ],
    featured: true,
    showOnHome: true,
  },
  {
    title: 'Data-Driven Decision Support System for Game Launch Optimization',
    description: 'A comprehensive three-phase Decision Support System (DSS) web application named "Decision Wizard," designed to optimize video game launch strategies by integrating Clustering, Association Rules, and Goal-Seek predictive analytics.',
    image: '/images/projects/data-driven-dss.png',
    detailImage: '/images/projects/data-driven-dss-2.png',
    category: 'Data Scientist',
    year: '2025',
    tech: [TECH.python, TECH.flask, TECH.nextjs, TECH.kmeans, TECH.apriori, TECH.randomforest],
    github: 'https://github.com/Hafizh220705/decision-support-system-game',
    website: 'https://dss-video-games-frontend.onrender.com/',
    drive: 'https://drive.google.com/file/d/1wA-ikvfJf0dquD2BIDqiOsVvHIb3MT3I/view?usp=sharing',
    problem:
      'Strategic decisions in the highly competitive global gaming industry often rely on subjective intuition and suffer from regional biases. Developers and publishers lack an objective, data-driven benchmark to determine the exact minimum product quality (critic score) required to guarantee specific commercial sales targets, leading to suboptimal launches and failed ROI.',
    solution: [
      'Segmented the global gaming market into 4 distinct geographic clusters using the K-Means algorithm based on regional sales distribution ratios, eliminating traditional market assumptions.',
      'Discovered segment-specific success patterns and optimal genre-platform combinations by applying the Apriori algorithm to extract high-confidence Association Rules (e.g., proving a 72.7% confidence rate for PC Sports games in specific markets).',
      'Engineered a "Goal-Seek" strategic planning feature powered by a Random Forest Regressor and Binary Search to reverse-calculate the exact minimum Critic Score needed to hit user-defined sales targets.',
    ],
    results: [
      'Successfully deployed the interactive "Decision Wizard" web application utilizing a modern Next.js frontend and a Python/Flask backend.',
      'Achieved a solid 79.9% predictive model accuracy, proving through Feature Importance analysis that product quality (Critic Score at 34.7% importance) and market focus heavily outweigh traditional attributes like genre or platform.',
      'Key Takeaways: The system successfully transforms subjective management assumptions into calculable, prescriptive data. It enables product managers to conduct accurate feasibility studies, ensuring that massive development investments and Quality Assurance budgets are perfectly aligned with realistic financial goals before production begins.',
    ],
    featured: true,
    showOnHome: true,
  },
  {
    title: 'Public Sentiment Analysis on the Whoosh High-Speed Train Project',
    description: 'An NLP-driven comparative study analyzing public sentiment on YouTube regarding the Whoosh High-Speed Rail project, benchmarking classical TF-IDF machine learning models against a fine-tuned IndoBERT transformer.',
    image: '/images/projects/whoosh-1.png',
    detailImage: '/images/projects/whoosh-2.png',
    category: 'Data Scientist',
    year: '2025',
    tech: [TECH.python, TECH.scikitlearn, TECH.huggingface, TECH.indobert, TECH.tfidf, TECH.gemini],
    github: 'https://github.com/Hafizh220705/project-sentimen-analisis-korupsi-whoosh',
    drive2: 'https://drive.google.com/file/d/1Oi-8TJWIQlh1-x88XzDdCdRTdlmY3xyb/view?usp=sharing',
    drive: 'https://drive.google.com/file/d/1Qdo23dTkGrhwEEkvH7inGQ_JBxFUDA80/view?usp=sharing',
    problem:
      'Extracting public perception from a massive volume of unstructured, non-standard Indonesian social media comments is highly challenging. Furthermore, the collected dataset exhibited extreme class imbalance, heavily dominated by negative sentiment, which easily biases classification models and makes minority class prediction exceedingly difficult.',
    solution: [
      'Executed an LLM-Assisted Labeling pipeline utilizing the Gemini API to rapidly annotate comments, followed by rigorous preprocessing and Sastrawi stemming to normalize the dataset into 987 clean records.',
      'Developed a robust TF-IDF baseline utilizing Logistic Regression, Linear SVM, and Multinomial Naive Bayes to extract text features and classify sentiments.',
      'Fine-tuned a pre-trained IndoBERT model (indobenchmark/indobert-base-p2) to deeply capture the complex semantic contexts and local nuances of the Indonesian language.',
    ],
    results: [
      'The fine-tuned IndoBERT model achieved the highest overall accuracy at 65.66%, proving its strong potential in understanding local language contexts.',
      'However, the baseline Logistic Regression model outperformed IndoBERT in the macro-F1 metric (0.4527 vs. 0.4012), demonstrating superior stability and fairness across the heavily imbalanced sentiment classes.',
      'Key Takeaways: Classical TF-IDF models remain highly competitive and often more reliable than complex transformers when dealing with extreme label imbalances. Ultimately, data quality and class balance play a much more crucial role in NLP classification performance than raw model complexity.',
    ],
    featured: true,
    showOnHome: true,
  },
  {
    title: 'Real-Time Hand-Tracked Angklung Robot',
    description: 'An interactive cyber-physical robotics project that automates the traditional Indonesian Angklung instrument, allowing it to be played dynamically in real-time using webcam-detected hand gestures.',
    image: '/images/projects/angklung.png',
    detailImage: '/images/projects/angklung-2.png',
    category: 'Computer Vision',
    year: '2025',
    tech: [TECH.python, TECH.opencv, TECH.mediapipe, TECH.arduino, TECH.serial, TECH.iot],
    github: 'https://github.com/luthfiarsd/robot-angklung-hand-detection',
    drive: 'https://drive.google.com/file/d/1h2prt9n5J-x6Yf5HkoK5q-F6g0A6D7wa/view?usp=sharing',
    problem:
      'Playing the Angklung traditionally requires multiple people to coordinate and play different individual notes. The challenge was to modernize and automate this cultural heritage instrument for solo, interactive play using real-time gesture recognition, while still preserving its authentic, mechanical acoustic sound.',
    solution: [
      'Developed a robust computer vision pipeline using Python, OpenCV, and MediaPipe to detect hand landmarks, utilizing X-axis positions for the thumb and Y-axis positions for the other four fingers to accurately calculate 0 to 8 raised fingers.',
      'Engineered a stabilized serial communication bridge with frame debouncing to securely transmit the detected finger counts as byte commands (1-8) from the PC to the microcontroller.',
      'Programmed an Arduino Uno to process the serial data and map it to an 8-channel relay module, pulling the signal LOW to trigger mechanical actuators (solenoids/motors) that physically vibrate the bamboo instrument.',
    ],
    results: [
      'Successfully achieved fully synchronized, real-time hardware control, enabling the physical robot to play musical notes corresponding exactly to the user hand gestures without any significant system delay.',
      'Enabled a single user to intuitively command an entire 8-note Angklung set purely through contactless webcam interactions.',
      'Key Takeaways: This project highlights the seamless intersection of cultural preservation and modern automation, demonstrating how to successfully bridge AI-driven vision models (software) with mechanical relays and actuators (hardware) for zero-latency interactive systems.',
    ],
    featured: false,
    showOnHome: false,
  },
  // {
  //   title: '',
  //   description: '',
  //   image: '',
  //   detailImage: '',
  //   category: '',
  //   year: '',
  //   tech: [],
  //   github: '',
  //   website: '',
  //   drive: '',
  //   problem:
  //     '',
  //   solution: [
  //     '',
  //   ],
  //   results: [
  //     '',
  //   ],
  //   featured: false,
  //   showOnHome: false,
  // },
  // {
  //   title: '',
  //   description: '',
  //   image: '',
  //   detailImage: '',
  //   category: '',
  //   year: '',
  //   tech: [],
  //   github: '',
  //   website: '',
  //   drive: '',
  //   problem:
  //     '',
  //   solution: [
  //     '',
  //   ],
  //   results: [
  //     '',
  //   ],
  //   featured: false,
  //   showOnHome: false,
  // },
  
];

export const HOME_PROJECTS = PROJECTS.filter((p) => p.showOnHome);

export const PROJECT_CATEGORIES = [
  'All',
  ...Array.from(new Set(PROJECTS.map((p) => p.category))),
];