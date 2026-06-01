export interface PortfolioSlide {
  id: string;             // matches project id for modal reuse
  name: string;
  subtitle: string;
  description: string;
  image: string;
  readMoreModalId: string;
  viewScreensModalId: string;
}

export const portfolioSlides: PortfolioSlide[] = [
  {
    id: 'Placement_Management_System',
    name: 'Placement Management System',
    subtitle: 'Managing hassle-free placements',
    description: 'Made to keep track of the placement process, by ensuring proper communication between the placement coordinators and placement cell.',
    image: '/assets/img/projects/Placement Management/1.webp',
    readMoreModalId: 'readMorePortfolioPlacement_Management_System',
    viewScreensModalId: 'viewScreensPortfolioPlacement_Management_System',
  },
  {
    id: 'UV_Downloader',
    name: 'UV Downloader',
    subtitle: 'Download YouTube Videos',
    description: 'UV Downloader is a video downloader app which allows users to download videos from various platforms like Youtube, Facebook, Instagram, Twitter, etc.',
    image: '/assets/img/projects/UV Downloader/app-poster-1.webp',
    readMoreModalId: 'readMorePortfolioUV_Downloader',
    viewScreensModalId: 'viewScreensPortfolioUV_Downloader',
  },
  {
    id: 'Treklers',
    name: 'Treklers',
    subtitle: 'Booking rides made easy',
    description: 'Treklers is a Taxi Booking App that allows users to book a cab and track the driver in real-time. It has several options like live location and emergency calling.',
    image: '/assets/img/projects/Treklers/app-poster.webp',
    readMoreModalId: 'readMorePortfolioTreklers',
    viewScreensModalId: 'viewScreensPortfolioTreklers',
  },
];
