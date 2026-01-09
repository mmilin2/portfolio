// Navigation types
export interface NavItem {
  id: string;
  label: string;
}

// Experience types
export interface Experience {
  company: string;
  title: string;
  location: string;
  period: string;
  highlights: string[];
  tech: string[];
}

// Skill types
export interface Skill {
  name: string;
  level: number;
}

export interface SkillCategory {
  category: string;
  icon: string;
  skills: Skill[];
}

export interface Certification {
  name: string;
  issuer: string;
  date: string;
  icon: string;
}

// Education types
export interface Education {
  degree: string;
  school: string;
  location: string;
  period: string;
  icon: string;
  highlights: string[];
}

// Component Props types
export interface HeaderProps {
  activeSection: string;
}

export interface StatData {
  number: string;
  label: string;
}
