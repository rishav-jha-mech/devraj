export interface ExperienceEntry {
  title: string;
  org: string;
  date: string;
  side: 'left' | 'right';
  highlight?: boolean; // bold/colored date
}

export const education: ExperienceEntry[] = [
  { title: 'Matriculation', org: "St' Stephens School", date: 'Completed May 2017', side: 'left' },
  { title: 'Intermediate', org: "St' Stephens School", date: 'Completed May 2019', side: 'right' },
  { title: 'Bachelor of Technology', org: 'National Institute of Technology Durgapur', date: '2020 to 2024', side: 'left', highlight: true },
];

export const work: ExperienceEntry[] = [
  { title: 'React Developer', org: 'Tech Particle', date: 'April 2021 to June 2021', side: 'left' },
  { title: 'Android Developer', org: 'Triunits', date: 'Jan 2022 to May 2022', side: 'right' },
  { title: 'Flutter Developer', org: 'Helpen.in', date: 'April 2022 to May 2022', side: 'left' },
  { title: 'App Developer', org: 'Capricon Technology', date: 'June 2022 to May 2024', side: 'right' },
  { title: 'Summer Intern', org: 'Reliance Industries Limited', date: 'May 2023 to July 2023', side: 'left' },
  { title: 'GSoC Contributor', org: 'Palisadoes Foundation', date: 'May 2023 to Oct 2023', side: 'right' },
  { title: 'Software Developer', org: 'Cuemath', date: 'Oct 2023 to Present', side: 'left', highlight: true },
];
