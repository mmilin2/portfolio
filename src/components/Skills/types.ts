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
