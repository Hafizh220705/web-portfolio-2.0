import type { ComponentType } from 'react';

export type IconComponent = ComponentType<{ size?: number | string; className?: string }>;
export type ExperienceCategory = 'Internship' | 'Part Time' | 'Project Based' | 'Freelance';
export type CertificateCategory = 'Course' | 'Technical' | 'Competition';
export type VolunteerCategory = 'Organization' | 'Volunteer';

export type NeoColor =
  | 'bg-neo-green'
  | 'bg-neo-blue'
  | 'bg-neo-pink'
  | 'bg-neo-yellow';

export type TechItem = {
  name: string;
  Icon: ComponentType<{ size?: number | string; className?: string }>;
  className?: string;
};

export type ProjectCategory =
  | 'Web Dev'
  | 'Machine Learning'
  | 'Data Analysis'
  | 'Data Scientist'
  | 'Robotics'
  | 'Computer Vision';

export type Project = {
  title: string;
  description: string;
  image: string;
  detailImage?: string;          // foto kedua di modal
  category: ProjectCategory;
  year: string;
  tech: TechItem[];
  github: string;
  website?: string;
  drive?: string;
  drive2?: string;
  problem?: string;
  solution?: string[];
  results?: string[];
  featured?: boolean;
  showOnHome?: boolean;
};

export type Experience = {
  title: string;
  company: string;
  date: string;
  category: ExperienceCategory;
  description: string[];
  color: NeoColor;
  imageUrl?: string;
  supportingImages?: string[];
  companyLogo?: string;
  logoScale?: string;
};

export type Education = {
  title: string;
  school: string;
  location: string;
  duration: string;
  scoreLabel: string;
  score: string;
  logoUrl?: string;
  details: string[];
};

export type SkillItem = {
  name: string;
  Icon: ComponentType<{ className?: string }>;
  hoverClass: string;
};

export type Certificate = {
  title: string;
  issuer: string;
  date: string;
  category: CertificateCategory;
  color: NeoColor;
  link?: string;
  imageUrl?: string;
};

export type Volunteer = {
  role: string;
  organization: string;
  period: string;
  description: string;
  imageUrl?: string;
  supportingImages?: string[];
  orgLogo?: string;
  transparentLogo?: boolean;
  category: VolunteerCategory;
  color: NeoColor;
};

export type ContactItem = {
  iconName: 'email' | 'whatsapp' | 'location';
  color: NeoColor;
  label: string;
  value: string;
  href: string;
};

export type SocialLink = {
  iconName: 'linkedin' | 'github' | 'instagram';
  href: string;
  color: NeoColor | 'bg-white';
  label: string;
  username: string;
};

export type Highlight = {
  phrase: string;
  className: string;
};