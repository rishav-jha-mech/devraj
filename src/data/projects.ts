export type ProjectCategory = 'web' | 'app' | 'game';

export interface ProjectScreen {
  src: string;
  alt: string;
}

export interface GameVideo {
  label: string;
  src: string;
}

export interface Project {
  id: string;
  category: ProjectCategory;
  name: string;
  ribbon?: string;
  thumbnail: string;
  tagline: string;
  description: string;
  techStack: string[];
  liveUrl?: string;
  githubUrl?: string;
  screens: ProjectScreen[];
  gameVideos?: GameVideo[];
}

export const projects: Project[] = [
  // ─── WEB ───────────────────────────────────────────────────────────────────
  {
    id: 'Placement_Management_System',
    category: 'web',
    name: 'Placement Management System',
    ribbon: 'NIT DGP',
    thumbnail: '/assets/img/projects/Placement Management/screens/1.webp',
    tagline: 'Made to keep track of the placement process, by ensuring proper communication between the placement coordinators and placement cell.',
    description: `Placements are crucial for job aspirants, and so is placement management. When there are 180+ companies coming for campus placements it is difficult to keep track of the status of the company. This website helps combat all of these problems with a two-account system for placement cell and coordinators, push notifications, CSV exports, and more.`,
    techStack: ['HTML', 'CSS', 'JavaScript', 'Bootstrap', 'Django', 'AWS EC2'],
    screens: Array.from({ length: 16 }, (_, i) => ({
      src: `/assets/img/projects/Placement Management/screens/${i + 1}.webp`,
      alt: `Placement Management System ${i + 1}`,
    })),
  },
  {
    id: 'Buzzpost',
    category: 'web',
    name: 'Buzzpost',
    ribbon: 'Django',
    thumbnail: '/assets/img/projects/Buzzpost/1.webp',
    tagline: 'Blogging website with a social media feel. Users can interact with other users and like and comment on their posts.',
    description: `Buzzpost is a blogging website where users can post their blogs and connect with each other. Features include home page, login/signup, trending page (top 5 bloggers + top 10 blogs), rich text editor (Tiny MCE), search, and full social interactions including likes and replies on comments.`,
    techStack: ['HTML', 'CSS', 'JavaScript', 'Django', 'Python Anywhere'],
    liveUrl: 'https://devraj2001.pythonanywhere.com/',
    screens: Array.from({ length: 5 }, (_, i) => ({
      src: `/assets/img/projects/Buzzpost/${i + 1}.webp`,
      alt: `Buzzpost ${i + 1}`,
    })),
  },
  {
    id: 'SamVaad',
    category: 'web',
    name: 'SamVaad',
    ribbon: 'React',
    thumbnail: '/assets/img/projects/Samvaad/web-poster.webp',
    tagline: 'Provides you with the latest news from all over the world in 7 different categories from different sources. My first React project.',
    description: `Samvaad provides you with the latest news from all over the world in 7 different categories from different sources. This was my first React project built from scratch. The backend is made using Flask and python requests which calls NewsApi, with a try-catch mechanism that can serve around 1500 requests per day.`,
    techStack: ['HTML', 'CSS', 'JavaScript', 'React', 'Flask', 'Cloudflare Pages'],
    liveUrl: 'https://samvaad.pages.dev',
    screens: [
      { src: '/assets/img/projects/Samvaad/web-poster.webp', alt: 'SamVaad poster' },
      ...Array.from({ length: 4 }, (_, i) => ({
        src: `/assets/img/projects/Samvaad/${i + 1}.webp`,
        alt: `SamVaad ${i + 1}`,
      })),
    ],
  },
  {
    id: 'K_Plus',
    category: 'web',
    name: 'K Plus',
    ribbon: 'Freelance',
    thumbnail: '/assets/img/projects/K Plus/1.webp',
    tagline: 'A platform which provides free and paid courses to the students along with free resources and notes.',
    description: `K PLUS provides educational services from classes 5-12, B.Com/BBA/CA, CS, CMA Foundation (online & offline). The website has landing pages, login/signup, student dashboard with courses/tests/quizzes, and an admin panel. Built with Django after migrating from React for better scalability. SEO optimized — ranks #1 on Google for "K Plus Classes".`,
    techStack: ['HTML', 'CSS', 'JavaScript', 'Bootstrap', 'Django', 'PostgreSQL', 'AWS'],
    liveUrl: 'https://www.kplusclasses.com',
    screens: Array.from({ length: 7 }, (_, i) => ({
      src: `/assets/img/projects/K Plus/${i + 1}.webp`,
      alt: `K Plus ${i + 1}`,
    })),
  },
  {
    id: 'Squid_Game',
    category: 'web',
    name: 'Squid Game',
    ribbon: 'Django',
    thumbnail: '/assets/img/projects/Squid Game/1.webp',
    tagline: 'Squid game theme website where users play and go through two elimination rounds.',
    description: `Squid game themed website where users play through two elimination rounds: "Green Light Red Light" (camera-based movement detection) and "Paper Candy" (shape cutting challenge). Built collectively with a team for an online college event that saw 300+ participants.`,
    techStack: ['HTML', 'CSS', 'JavaScript', 'Django', 'AWS'],
    githubUrl: 'https://github.com/prakritinitd/squid-game',
    screens: Array.from({ length: 9 }, (_, i) => ({
      src: `/assets/img/projects/Squid Game/${i + 1}.webp`,
      alt: `Squid Game ${i + 1}`,
    })),
  },
  {
    id: 'Treasures_at_Hogwarts',
    category: 'web',
    name: 'Treasures at Hogwarts',
    ribbon: 'Django',
    thumbnail: '/assets/img/projects/Treasures at Hogwarts/1.webp',
    tagline: 'Harry Potter themed treasure hunt website for a college fest with real-time leaderboard.',
    description: `Treasures at Hogwarts is a Harry Potter themed online treasure hunt website built for a college event. Features include real-time leaderboard, clue-based progression, and admin controls.`,
    techStack: ['HTML', 'CSS', 'JavaScript', 'Django'],
    screens: Array.from({ length: 4 }, (_, i) => ({
      src: `/assets/img/projects/Treasures at Hogwarts/${i + 1}.webp`,
      alt: `Treasures at Hogwarts ${i + 1}`,
    })),
  },

  // ─── APP ───────────────────────────────────────────────────────────────────
  {
    id: 'Samvaad_App',
    category: 'app',
    name: 'Samvaad',
    ribbon: 'React Native',
    thumbnail: '/assets/img/projects/SamvaadApp/app-poster.webp',
    tagline: 'Brings you news from 50+ countries across 7 categories. My first React Native project built from scratch.',
    description: `Samvaad provides you with the latest news from all over the world in 7 different categories from different sources. This was my first React Native project built from scratch. Backend uses Flask + NewsApi with a try-catch mechanism serving ~1500 requests/day.`,
    techStack: ['React Native', 'JavaScript', 'Flask'],
    githubUrl: 'https://github.com/rishav-jha-mech/SamVaad-App',
    screens: [
      { src: '/assets/img/projects/SamvaadApp/app-poster.webp', alt: 'Samvaad App poster' },
      ...Array.from({ length: 5 }, (_, i) => ({
        src: `/assets/img/projects/SamvaadApp/${i + 1}.webp`,
        alt: `Samvaad App ${i + 1}`,
      })),
    ],
  },
  {
    id: 'UV_Downloader',
    category: 'app',
    name: 'UV Downloader',
    ribbon: 'React Native',
    thumbnail: '/assets/img/projects/UV Downloader/app-poster-1.webp',
    tagline: 'Video downloader app supporting YouTube, Facebook, Instagram, Twitter and more with HD quality and built-in file manager.',
    description: `UV (Universal) Downloader enables users to download HD videos and high quality audio at high speeds from YouTube, Facebook, Instagram, Reddit and many more. Features a built-in file manager and web browser. Built through 3 versions — from JS + Context API → JS + Redux Core → TypeScript + Redux Toolkit + FFMPEG for merging separate audio/video tracks.`,
    techStack: ['React Native', 'TypeScript', 'Redux Toolkit', 'Flask', 'FFMPEG'],
    githubUrl: 'https://github.com/rishav-jha-mech/UV-Plus-App',
    screens: [
      { src: '/assets/img/projects/UV Downloader/app-poster-1.webp', alt: 'UV Downloader poster 1' },
      { src: '/assets/img/projects/UV Downloader/app-poster-2.webp', alt: 'UV Downloader poster 2' },
      ...Array.from({ length: 14 }, (_, i) => ({
        src: `/assets/img/projects/UV Downloader/${i + 1}.webp`,
        alt: `UV Downloader ${i + 1}`,
      })),
    ],
  },
  {
    id: 'Buzzpost_Blogging_App',
    category: 'app',
    name: 'Buzzpost Blogging App',
    ribbon: 'React Native',
    thumbnail: '/assets/img/projects/BuzzpostApp/app-poster.webp',
    tagline: 'Buzzpost is a blogging app which allows users to create their own blogs and share them with the world.',
    description: `Buzzpost app companion to the web platform. Features home, login/signup, trending screen, read/search blogs, write blogs with rich text editor, profile screens, and social interactions (likes, comments, replies).`,
    techStack: ['React Native', 'JavaScript', 'Django', 'Python Anywhere'],
    liveUrl: 'https://rj-freya.herokuapp.com',
    screens: [
      { src: '/assets/img/projects/BuzzpostApp/app-poster.webp', alt: 'Buzzpost App poster' },
      ...Array.from({ length: 17 }, (_, i) => ({
        src: `/assets/img/projects/BuzzpostApp/${i + 2}.webp`,
        alt: `Buzzpost App ${i + 2}`,
      })),
    ],
  },
  {
    id: 'Triunits',
    category: 'app',
    name: 'Triunits',
    ribbon: 'Flutter',
    thumbnail: '/assets/img/projects/Triunits/app-poster.webp',
    tagline: 'Cryptocurrency trading app with charts, graphs, and real-time market data. Currently on Google Play Store.',
    description: `<span class="fw-bold d-block mb-1">Company: <a class="ms-1" href="https://capricontechnology.com/" target="_blank" rel="noopener noreferrer">Capricon</a></span><span class="fw-bold d-block mb-3">Role: <span class="text-theme">Android Developer</span></span>Triunits is a cryptocurrency trading app with charts, graphs, and real-time market data. I worked on many screens from scratch and added shimmering loading effects. Also created a coin news API that scrapes, caches, and serves data to the app.`,
    techStack: ['Flutter', 'Dart', 'Flask', 'Redis', 'Python'],
    liveUrl: 'https://triunits.com/',
    screens: [
      { src: '/assets/img/projects/Triunits/app-poster.webp', alt: 'Triunits poster' },
      ...Array.from({ length: 23 }, (_, i) => ({
        src: `/assets/img/projects/Triunits/${i + 2}.webp`,
        alt: `Triunits ${i + 2}`,
      })),
    ],
  },
  {
    id: 'Tricket',
    category: 'app',
    name: 'Tricket',
    ribbon: 'Flutter',
    thumbnail: '/assets/img/projects/Tricket/app-poster.webp',
    tagline: 'Innovative real-time fantasy cricket game — project the score of the next spell and win cash prizes. 10k+ downloads.',
    description: `<span class="fw-bold d-block mb-1">Company: <a class="ms-1" href="https://tricket.in" target="_blank" rel="noopener noreferrer">Helpen.In</a></span><span class="fw-bold d-block mb-2">Role: <span class="text-theme ms-1">Flutter Developer</span></span>Tricket is an innovative real-time fantasy cricket game. Players project the score of the next SPELL (4-5 overs) and compete against others. The closer your projection, the more points you earn. Just 15 minutes per game. <strong>10k+ downloads as of March 2023.</strong>`,
    techStack: ['Flutter', 'Dart'],
    liveUrl: 'https://tricket.in',
    screens: [
      { src: '/assets/img/projects/Tricket/app-poster.webp', alt: 'Tricket poster' },
      ...Array.from({ length: 12 }, (_, i) => ({
        src: `/assets/img/projects/Tricket/${i + 2}.webp`,
        alt: `Tricket ${i + 2}`,
      })),
    ],
  },
  {
    id: 'Treklers',
    category: 'app',
    name: 'Treklers',
    ribbon: 'React Native',
    thumbnail: '/assets/img/projects/Treklers/app-poster.webp',
    tagline: 'Taxi booking app with real-time driver tracking, live location and emergency calling.',
    description: `<span class="fw-bold d-block mb-1">Company: <a class="ms-1" href="https://capricontechnology.com/" target="_blank" rel="noopener noreferrer">Capricon</a></span><span class="fw-bold d-block mb-2">Role: <span class="text-theme">Android Developer</span></span>Treklers is a Taxi Booking App built from scratch in TypeScript. Features real-time driver tracking, live location, and emergency calling. 50+ screens, currently under development.`,
    techStack: ['React Native', 'TypeScript'],
    screens: [
      { src: '/assets/img/projects/Treklers/app-poster.webp', alt: 'Treklers poster' },
      ...Array.from({ length: 33 }, (_, i) => ({
        src: `/assets/img/projects/Treklers/${i + 2}.webp`,
        alt: `Treklers ${i + 2}`,
      })),
    ],
  },

  // ─── GAME ──────────────────────────────────────────────────────────────────
  {
    id: 'No_Attack',
    category: 'game',
    name: 'No Attack',
    ribbon: 'Phaser',
    thumbnail: '/assets/img/projects/Games/no-attack.jpeg',
    tagline: 'Strategically place chess pieces on a grid without attacks to outlast your opponent in this turn-based game.',
    description: `The <strong>No Attack Game</strong> is a strategic chess-inspired game where players take turns placing pieces on an <strong>m x n grid</strong>, ensuring no two pieces can attack each other. The game is played over three rounds, with different combinations of <strong>Kings, Knights, Bishops, and Rooks</strong>. Features two board types: <strong>Normal</strong> and <strong>Blocked</strong> (with pre-defined squares where pieces cannot be placed).`,
    techStack: ['JavaScript', 'Phaser', 'HTML', 'CSS'],
    screens: [],
    gameVideos: [
      { label: 'Gameplay 1', src: '/assets/videos/no-attack-1.mp4' },
      { label: 'Gameplay 2', src: '/assets/videos/no-attack-2.mp4' },
    ],
  },
  {
    id: 'Chess_Moves',
    category: 'game',
    name: 'Chess Moves',
    ribbon: 'Phaser',
    thumbnail: '/assets/img/projects/Games/chess-moves.jpeg',
    tagline: 'Move your piece to land on the target block, or in the reverse variant, avoid it to outsmart your opponent.',
    description: `<strong>Chess Moves</strong> is a dynamic strategy game where players navigate chess pieces on a grid to achieve specific objectives. In the standard variant, guide your piece to land on a target block. In the reverse variant, avoid placing your piece on it. Tests <strong>spatial reasoning, foresight, and adaptability.</strong>`,
    techStack: ['JavaScript', 'Phaser', 'HTML', 'CSS'],
    screens: [],
    gameVideos: [
      { label: 'Gameplay 1', src: '/assets/videos/chess-moves-1.mp4' },
      { label: 'Gameplay 2', src: '/assets/videos/chess-moves-2.mp4' },
    ],
  },
  {
    id: 'Nims',
    category: 'game',
    name: 'Nims',
    ribbon: 'Phaser',
    thumbnail: '/assets/img/projects/Games/nims.jpeg',
    tagline: 'A 3-round tile-tapping strategy game with varying layouts, rules, and win conditions.',
    description: `Nims is a turn-based strategic tile-tapping game for two players played over three rounds. Tile arrangements vary: Grid, Line, Loop, or Piles. Win conditions: Normal (last tile wins) or Reverse (last tile loses). Best-of-three match format. Combines <strong>pattern recognition, planning, and strategic moves.</strong>`,
    techStack: ['JavaScript', 'Phaser', 'HTML', 'CSS'],
    screens: [],
    gameVideos: [
      { label: 'Gameplay 1', src: '/assets/videos/nims-1.mp4' },
      { label: 'Gameplay 2', src: '/assets/videos/nims-2.mp4' },
      { label: 'Gameplay 3', src: '/assets/videos/nims-3.mp4' },
    ],
  },
  {
    id: 'COC',
    category: 'game',
    name: 'Clash of Colours',
    ribbon: 'Phaser',
    thumbnail: '/assets/img/projects/Games/coc.jpeg',
    tagline: 'A turn-based strategy game where players color patterns under variant-specific boundary rules until one cannot move.',
    description: `<strong>Clash of Colours</strong> is a two-player strategy game where each player colors a pattern with their color following boundary rules. Four variants: No Sharing with Opponent / Sharing with Opponent / No Boundary Sharing / Required Boundary with Previous Cell. Best-of-three. The player unable to color any more cells loses.`,
    techStack: ['JavaScript', 'Phaser', 'HTML', 'CSS'],
    screens: [],
    gameVideos: [
      { label: 'Gameplay 1', src: '/assets/videos/coc-1.mp4' },
      { label: 'Gameplay 2', src: '/assets/videos/coc-2.mp4' },
    ],
  },
  {
    id: 'Rearrange',
    category: 'game',
    name: 'Rearrange',
    ribbon: 'Phaser',
    thumbnail: '/assets/img/projects/Games/rearrange.jpeg',
    tagline: 'Arrange tiles in order within grid constraints, solving sequential puzzles by finding the correct placement.',
    description: `<strong>Rearrange</strong> is a puzzle game where the player must arrange randomly placed tiles in increasing or decreasing order within a grid. No jumping or diagonal moves. After placing a tile, the player checks the answer — if incorrect, they continue until the correct order is found. Progress through levels as difficulty increases.`,
    techStack: ['JavaScript', 'Phaser', 'HTML', 'CSS'],
    screens: [],
    gameVideos: [
      { label: 'Gameplay', src: '/assets/videos/rearrange.mp4' },
    ],
  },
  {
    id: 'Slot_Turner',
    category: 'game',
    name: 'Slot Turner',
    ribbon: 'Phaser',
    thumbnail: '/assets/img/projects/Games/slot-machine.jpeg',
    tagline: 'Turn slot items to match the target value and answer the question.',
    description: `<strong>Slot Turner</strong> is a single-player puzzle game where you must turn items within a slot to match a specific target value. Each item can be rotated to different states. As levels progress, patterns get more complex and additional turning rules are introduced. Optional time limit adds pressure.`,
    techStack: ['JavaScript', 'Phaser', 'HTML', 'CSS'],
    screens: [],
    gameVideos: [
      { label: 'Gameplay', src: '/assets/videos/slot-turner.mp4' },
    ],
  },
];
