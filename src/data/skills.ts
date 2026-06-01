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
    subtitle: 'More than 2 years of experience',
    icon: 'fa-solid fa-code',
    skills: [
      { name: 'HTML', percentage: 90 },
      { name: 'CSS', percentage: 95 },
      { name: 'JavaScript', percentage: 85 },
      { name: 'TypeScript', percentage: 70 },
      { name: 'React', percentage: 80 },
      { name: 'Bootstrap', percentage: 90 },
      { name: 'Tailwind', percentage: 80 },
    ],
  },
  {
    category: 'backend',
    title: 'Backend Developer',
    subtitle: 'More than 1.5 years of experience',
    icon: 'svg-backend',
    skills: [
      { name: 'Django', percentage: 90 },
      { name: 'Express JS', percentage: 80 },
      { name: 'Flask', percentage: 80 },
    ],
  },
  {
    category: 'app',
    title: 'App Developer',
    subtitle: 'More than 1 year of experience',
    icon: 'fa-solid fa-mobile-screen-button',
    skills: [
      { name: 'Flutter', percentage: 80 },
      { name: 'React Native', percentage: 90 },
    ],
  },
  {
    category: 'devops',
    title: 'DevOps',
    subtitle: 'More than 1 year of experience',
    icon: 'fa-solid fa-terminal',
    skills: [
      { name: 'AWS', percentage: 80 },
      { name: 'Heroku', percentage: 90 },
      { name: 'Cloudflare', percentage: 100 },
      { name: 'Git', percentage: 80 },
    ],
  },
];
