import { FaCode, FaDatabase, FaPython, FaSlidersH, FaRocket } from 'react-icons/fa';
import {
  SiArduino,
  SiNextdotjs,
  SiOllama,
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
import { FaSitemap, FaCompressArrowsAlt, FaSync } from 'react-icons/fa';
import { FaCircleNodes } from 'react-icons/fa6';
import { FaChartLine, FaPercent } from 'react-icons/fa';
import { SiGoogleplay } from '@icons-pack/react-simple-icons';
import { FaChartArea } from 'react-icons/fa';
import { SiFastapi, SiLangchain, SiHtml5, SiJavascript } from '@icons-pack/react-simple-icons';
import { FaVectorSquare } from 'react-icons/fa6';
import { SiCss } from '@icons-pack/react-simple-icons';
import { SiKotlin, SiReact, SiNodedotjs, SiFirebase, SiMysql, SiGooglemaps, SiLeaflet } from '@icons-pack/react-simple-icons';
import { FaMapMarkedAlt } from 'react-icons/fa';

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
  dbscan: { name: 'DBSCAN', Icon: FaCircleNodes, className: 'text-orange-600' },
  hierarchical: { name: 'Hierarchical', Icon: FaSitemap, className: 'text-purple-500' },
  pca: { name: 'PCA', Icon: FaCompressArrowsAlt, className: 'text-blue-400' },
  umap: { name: 'UMAP', Icon: FaProjectDiagram, className: 'text-pink-500' },
  crispdm: { name: 'CRISP-DM', Icon: FaSync, className: 'text-green-600' },
  playscraper: { name: 'Play Scraper', Icon: SiGoogleplay, className: 'text-green-500' },
  logisticregression: { name: 'Logistic Regression', Icon: FaChartLine, className: 'text-blue-600' },
  naivebayes: { name: 'Naive Bayes', Icon: FaPercent, className: 'text-purple-500' },
  xgboost: { name: 'XGBoost', Icon: FaRocket, className: 'text-blue-700' },
  optuna: { name: 'Optuna', Icon: FaSlidersH, className: 'text-indigo-500' },
  timeseries: { name: 'Time-Series', Icon: FaChartArea, className: 'text-teal-500' },
  fastapi: { name: 'FastAPI', Icon: SiFastapi, className: 'text-teal-500' },
  langchain: { name: 'LangChain', Icon: SiLangchain, className: 'text-green-600' },
  faiss: { name: 'FAISS', Icon: FaVectorSquare, className: 'text-blue-600' },
  ollama: { name: 'Ollama', Icon: SiOllama, className: 'text-gray-800' },
  html: { name: 'HTML', Icon: SiHtml5, className: 'text-orange-500' },
  css: { name: 'CSS', Icon: SiCss, className: 'text-blue-500' },
  javascript: { name: 'JavaScript', Icon: SiJavascript, className: 'text-yellow-400' },
  kotlin: { name: 'Kotlin', Icon: SiKotlin, className: 'text-purple-500' },
  reactjs: { name: 'React.js', Icon: SiReact, className: 'text-cyan-400' },
  nodejs: { name: 'Node.js', Icon: SiNodedotjs, className: 'text-green-600' },
  firebase: { name: 'Firebase', Icon: SiFirebase, className: 'text-yellow-500' },
  mysql: { name: 'MySQL', Icon: SiMysql, className: 'text-blue-600' },
  googlemaps: { name: 'Google Maps', Icon: SiGooglemaps, className: 'text-red-500' },
  leaflet: { name: 'Leaflet', Icon: SiLeaflet, className: 'text-green-500' },
gis: { name: 'GIS', Icon: FaMapMarkedAlt, className: 'text-teal-600' },
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
  {
    title: 'Student Well-Being: A Data Mining Approach to University Policy',
    description: 'An interactive data mining web application built to analyze and cluster multidimensional student well-being data, providing actionable insights for university stakeholders to design targeted support programs.',
    image: '/images/projects/student-well-1.png',
    detailImage: '/images/projects/student-well-2.png',
    category: 'Data Analyst',
    year: '2025',
    tech: [TECH.python, TECH.scikitlearn, TECH.kmeans, TECH.dbscan, TECH.hierarchical, TECH.pca, TECH.umap, TECH.crispdm],
    github: 'https://github.com/Hafizh220705/student-wellbeing-project-data-mining',
    website: 'https://student-wellbeing.streamlit.app/',
    drive: 'https://drive.google.com/file/d/1lUs_3ptHGCdDHV2Qx2yUuBubODHzhwIS/view?usp=sharing',
    problem:
      'Student well-being is a complex phenomenon spanning academic, physical, psychological, financial, and relational domains. Traditional surveys rely on simple averages, failing to capture the hidden correlations between these aspects, making it difficult for universities to identify at-risk student groups and allocate support resources effectively.',
    solution: [
      'Processed raw Likert-scale survey data through a rigorous Data Preprocessing pipeline (Cleaning, Integration, Z-Score Transformation, Discretization) and utilized PCA/UMAP for dimensionality reduction.',
      'Engineered three distinct unsupervised learning models—K-Means, Hierarchical Clustering, and DBSCAN—evaluating their performance using Silhouette Score, Davies-Bouldin Index, and Calinski-Harabasz Index to find the optimal segmentation.',
      'Developed a deployment-ready interactive dashboard visualizing the clusters, highlighting critical insights (e.g., the strong correlation between financial stress and psychological decline) and providing specific "Action Plans" for university policy makers.',

    ],
    results: [
      'K-Means provided the most stable segmentation, revealing distinct profiles such as students with high academic performance but critically low financial and psychological well-being.',
      'Proved analytically that financial pressures are a primary driver of mental health decline among students.',
      'Key Takeaways: This data-driven approach moves beyond generic campus policies, enabling universities to proactively detect at-risk students and deploy highly targeted interventions, such as specific scholarship allocations and focused counseling services.',
    ],
    featured: false,
    showOnHome: false,
  },
  {
    title: 'Public Sentiment Analysis: Local vs. Imported Applications and Their Implications for the Digital Economy',
    description: 'An NLP-driven research study analyzing 10,000 Google Play Store user reviews to benchmark public sentiment towards local versus imported applications across the E-Commerce, MaaS (Mobility as a Service), Finance, and EdTech sectors.',
    image: '/images/projects/public-sentiment-1.png',
    detailImage: '/images/projects/public-sentiment-2.png',
    category: 'Data Scientist',
    year: '2025',
    tech: [TECH.python, TECH.playscraper, TECH.gemini, TECH.tfidf, TECH.logisticregression, TECH.naivebayes],
    website: '',
    drive: 'https://drive.google.com/file/d/1ywOjQorm0y4avCxCYPCNLXaC8BNTAPUL/view?usp=sharing',
    problem:
      'The heavy dominance of foreign applications in Indonesia poses a risk of "digital colonialism" that could weaken national economic independence. Local developers and policymakers lack data-driven insights into actual user perceptions, specific feature complaints, and the driving factors behind why users prefer foreign competitors.',
    solution: [
      'Engineered a scraping pipeline using google-play-scraper to extract thousands of Indonesian reviews, subsequently applying Semi-Supervised Annotation (SSA) via the Gemini API to automate the initial sentiment labeling process.',
      'Developed a robust text preprocessing pipeline incorporating a custom normalization dictionary for Indonesian slang/abbreviations and Sastrawi stemming to clean and standardize highly unstructured review data.',
      'Built and validated a Logistic Regression classification model utilizing TF-IDF feature extraction (achieving an optimal 80:20 train-test split), and performed Aspect-Based Opinion Mining (ABOM) using WordCloud visualizations to extract actionable improvement areas.',

    ],
    results: [
      'Imported applications across E-Commerce, MaaS, Finance, and EdTech consistently garnered higher positive sentiment compared to their local counterparts (e.g., Duolingo achieved 88.6% positive sentiment vs. Ruangguru 75.6%).',
      'WordCloud analysis successfully mapped out specific critical pain points for local developers to address, such as integrity issues ("missing balances" in finance apps) and high shipping cost complaints in E-Commerce.',
      'Key Takeaways: This research empirically proves that local patriotism is insufficient to win the domestic market. To support Indonesia digital economic independence, local app developers must aggressively prioritize application performance (bug fixes) and payment system reliability based on actual user feedback.',
    ],
    featured: false,
    showOnHome: false,
  },
  {
    title: 'Food Price Forecasting in Indonesia Using Gradient Boosting',
    description: 'A machine learning forecasting project developed for the Datavidia 9.0 competition, utilizing an optimized XGBoost model to predict food commodity prices across 34 Indonesian provinces.',
    image: '/images/projects/forecasting-2.png',
    detailImage: '/images/projects/forecasting-3.png',
    category: 'Data Scientist',
    year: '2025',
    tech: [TECH.python, TECH.xgboost, TECH.optuna, TECH.timeseries],
    github: '',
    website: '',
    drive: 'https://drive.google.com/file/d/1CehSaTeGlcu-qXyf07OryuU1osP1G6ec/view?usp=sharing',
    problem:
      'Food price volatility poses a critical threat to national economic stability and food security. Traditional forecasting models, such as ARIMA and Linear Regression, struggle to accurately capture the complex, non-linear relationships across diverse macroeconomic factors, seasonal trends, and missing data.',
    solution: [
      'Engineered a comprehensive time-series dataset covering 13 food commodities from January 2022 to September 2024, integrating external macroeconomic indicators such as Google Trends search data, global commodity prices, and currency exchange rates (e.g., USD/IDR).',
      'Developed an advanced feature engineering pipeline that extracted datetime patterns and calculated multi-day historical price lags (1 to 7 days) alongside moving averages (3, 7, and 14 days) to capture both short and long-term market trends.',
      'Optimized an XGBoost regression model using the Optuna framework, executing 50 automated trials to fine-tune complex hyperparameters (including n_estimators, learning_rate, and max_depth) for peak predictive accuracy.',
    ],
    results: [
      'The optimized Gradient Boosting model successfully outperformed traditional baseline models, achieving a highly accurate average Mean Absolute Percentage Error (MAPE) of 0.05437.',
      'Feature importance analysis successfully identified that historical price lags, Google search trends, and USD/IDR exchange rates are the most critical drivers of local food price fluctuations.',
      'Key Takeaways: Integrating diverse alternative data sources—like search engine trends and global exchange rates—with non-linear ensemble models creates highly reliable forecasting systems. This enables policymakers and industry leaders to proactively mitigate the risks of food price volatility and design effective stabilization strategies.',
    ],
    featured: false,
    showOnHome: false,
  },
  {
    title: 'PahamJalan: AI-Powered Traffic Law Chatbot',
    description: 'An AI-driven web platform developed for the IT-Festival Software Development competition, utilizing Retrieval-Augmented Generation (RAG) to democratize Indonesian traffic laws by translating complex legal documents into easily understandable, interactive chatbot responses.',
    image: '/images/projects/pahamjalan-3.png',
    detailImage: '/images/projects/pahamjalan-2.png',
    category: 'Web Development',
    year: '2025',
    tech: [TECH.python, TECH.fastapi, TECH.langchain, TECH.faiss, TECH.ollama, TECH.html, TECH.css, TECH.javascript],
    github: 'https://github.com/dzackyahmad/PahamJalan',
    website: '',
    drive: 'https://drive.google.com/file/d/1P9nPSg568FsKXzG595uibXuau7r_2pc4/view?usp=sharing',
    problem:
      'Traffic laws in Indonesia are highly fragmented across hundreds of regulations (including UU No. 22 Tahun 2009, 48 Government Regulations, and 112 Ministerial Regulations) and written in dense legal jargon. This complexity causes a severe lack of legal literacy, with 73% of traffic violations in Jakarta stemming from public ignorance rather than intent, contributing to critically high accident rates.',
    solution: [
      'Directed the end-to-end project lifecycle, managing task delegation, system documentation, and development timelines to ensure timely delivery of a robust software prototype.',
      'Implemented a local AI chatbot infrastructure utilizing the open-source Mistral 7B model via Ollama, integrated with a LangChain and FAISS-powered RAG pipeline to ingest, index, and query official legal PDFs.',
      'Engineered the system to accurately translate complex legal jargon into conversational Indonesian while strictly citing specific legal articles and effectively filtering out out-of-topic queries.',
    ],
    results: [
      'Successfully delivered a functional, locally hosted prototype capable of rapidly retrieving and summarizing fragmented traffic regulations without relying on expensive, cloud-based commercial APIs.',
      'Created a scalable foundation that bridges the legal information gap, giving citizens immediate access to their driving rights and obligations.',
      'Key Takeaways: Open-source AI and RAG architectures provide a highly effective, cost-efficient solution for bridging the legal literacy gap in developing nations, transforming rigid government regulations into accessible public knowledge to help reduce traffic violations and improve road safety.',
    ],
    featured: false,
    showOnHome: false,
  },
  {
    title: 'SafePath: Real-Time Crime Mapping and Prevention System',
    description: 'A data-driven mobile application and web dashboard designed to visualize real-time crime hotspots through crowdsourced reports, providing citizens with safe navigation and equipping law enforcement with spatial analytics.',
    image: '/images/projects/safepath-1.png',
    detailImage: '/images/projects/safepath-2.png',
    category: 'Web Development',
    year: '2025',
    tech: [TECH.kotlin, TECH.reactjs, TECH.nodejs, TECH.firebase, TECH.mysql, TECH.googlemaps, TECH.leaflet, TECH.gis],
    github: 'https://github.com/luthfiarsd/SafePath',
    website: '',
    drive: 'https://drive.google.com/file/d/1UjhT-a-8N2YuPaVALxuAo2weDrjWowuj/view?usp=sharing',
    problem:
      'Indonesia experienced a significant spike in crime, reaching 584,991 recorded cases in 2023, yet citizens lack centralized, real-time access to area safety information. Furthermore, fragmented and unstructured crime data makes it highly difficult for law enforcement agencies to conduct accurate spatial analysis, pinpoint high-risk zones, and implement effective preventive measures.',
    solution: [
      'Engineered a mobile application utilizing Google Maps API and Leaflet to render an interactive crime hotspot map, featuring safe-route navigation and automated push notifications when users enter high-risk areas.',
      'Developed a crowdsourced reporting pipeline with an integrated SOS Panic Button, enabling users to submit geo-tagged incident reports (open or anonymous) with media attachments directly to a secure backend database.',
      'Built a comprehensive web-based analytical dashboard using React.js/Next.js for law enforcement to verify incoming reports, analyze spatial crime trends, and execute data-driven policing strategies.',
    ],
    results: [
      'Designed an optimized system architecture capable of processing and visualizing complex spatial crime data within < 3 seconds, ensuring rapid access to critical safety information.',
      'Established a transparent, two-way communication channel between citizens and authorities, completely digitizing the emergency reporting, location tracking, and verification process.',
      'Key Takeaways: Integrating Geographic Information Systems (GIS) with crowdsourced community data creates a highly effective public safety ecosystem. It empowers citizens to proactively avoid danger while transforming reactive policing into a proactive, data-driven strategy.',
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

];

export const HOME_PROJECTS = PROJECTS.filter((p) => p.showOnHome);

export const PROJECT_CATEGORIES = [
  'All',
  ...Array.from(new Set(PROJECTS.map((p) => p.category))),
];