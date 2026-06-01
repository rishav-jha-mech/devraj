export type SkillCategory = 'frontend' | 'backend' | 'app' | 'devops';

export interface Skill {
  name: string;
  percentage: number;
}

export interface SkillGroup {
  category: SkillCategory;
  title: string;
  subtitle: string;
  icon: string; // FA icon class or 'svg-backend'
  skills: Skill[];
}

export const skillGroups: SkillGroup[] = [
  {
    category: 'frontend',
    title: 'Frontend Developer',
    subtitle: 'More than 3 years of experience',
    icon: 'fa-solid fa-code',
    skills: [
      { name: 'HTML', percentage: 90 },
      { name: 'CSS', percentage: 95 },
      { name: 'JavaScript', percentage: 85 },
      { name: 'TypeScript', percentage: 80 },
      { name: 'React', percentage: 85 },
      { name: 'Tailwind', percentage: 80 },
    ],
  },
  {
    category: 'backend',
    title: 'Backend Developer',
    subtitle: 'More than 2 years of experience',
    icon: 'svg-backend',
    skills: [
      { name: 'Django', percentage: 90 },
      { name: 'Express JS', percentage: 80 },
      { name: 'Flask', percentage: 80 },
    ],
  },
  {
    category: 'app',
    title: 'App & Desktop Developer',
    subtitle: 'More than 2 years of experience',
    icon: 'fa-solid fa-mobile-screen-button',
    skills: [
      { name: 'React Native', percentage: 90 },
      { name: 'Flutter', percentage: 80 },
      { name: 'Tauri', percentage: 85 },
      { name: 'Electron', percentage: 75 },
    ],
  },
  {
    category: 'devops',
    title: 'DevOps & AI',
    subtitle: 'Cloud, tooling, and LLM integration',
    icon: 'fa-solid fa-terminal',
    skills: [
      { name: 'AWS', percentage: 80 },
      { name: 'Docker', percentage: 75 },
      { name: 'Cloudflare', percentage: 85 },
      { name: 'RAG / Knowledge Base', percentage: 75 },
    ],
  },
];
