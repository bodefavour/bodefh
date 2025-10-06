// Projects Data File
// Edit this file to easily add, update, or remove projects from your portfolio

export interface Project {
  title: string;
  images: any;
  description: string;
  link: string;
  category: 'E-commerce' | 'Web Development' | 'Mobile Apps' | 'Open Source';
  tags: string[];
  featured?: boolean;
}

export const projects: Project[] = [
  {
    title: 'Boshan',
    images: require('../assets/images/Boshan.png'),
    description: 'A sophisticated e-commerce website for a cosmetic brand featuring three distinct phases: wait-list, pre-launch, and launch with seamless transitions.',
    link: 'https://www.boshan.co/',
    category: 'E-commerce',
    tags: ['React', 'E-commerce', 'UI/UX'],
    featured: true
  },
  {
    title: 'UNIOSUN Hostel Management',
    images: require('../assets/images/hmsr.png'),
    description: 'Real estate management system for Osun State University, streamlining hostel booking for students with an intuitive interface.',
    link: 'https://github.com/bodefavour/hostel-management2',
    category: 'Web Development',
    tags: ['Full-Stack', 'Management System'],
    featured: true
  },
  {
    title: 'Bella Books',
    images: require('../assets/images/Bellabooks.png'),
    description: 'Full-featured e-commerce bookstore with advanced UI/UX, responsive design, and seamless shopping experience.',
    link: 'https://shopbellabooks.com/',
    category: 'E-commerce',
    tags: ['React', 'TailwindCSS', 'E-commerce'],
    featured: true
  },
  {
    title: 'TextCleaner',
    images: require('../assets/images/Text.png'),
    description: 'Productivity tool for styling LinkedIn texts with intuitive formatting options and real-time preview.',
    link: 'https://textcleaner.net/',
    category: 'Web Development',
    tags: ['Utility', 'React', 'Productivity']
  },
  {
    title: 'SokoSQ',
    images: require('../assets/images/Sokosq.png'),
    description: 'AI-powered social commerce platform enabling SMEs to create high-converting stores with integrated marketing tools in minutes.',
    link: 'https://www.sokosq.com/',
    category: 'E-commerce',
    tags: ['AI', 'E-commerce', 'SaaS'],
    featured: true
  },
  {
    title: 'Lacrim World',
    images: require('../assets/images/Lacrim.png'),
    description: 'Premium fashion brand website showcasing collections with elegant design and smooth user experience.',
    link: 'https://lwdigitalz.com/',
    category: 'Web Development',
    tags: ['Fashion', 'React', 'E-commerce']
  },
  {
    title: 'Cetrix',
    images: require('../assets/images/Cetrix.png'),
    description: 'Unified platform for managing utility bills, airtime, data, and TV subscriptions with secure payment integration.',
    link: 'https://www.cetrix.org/',
    category: 'Web Development',
    tags: ['FinTech', 'Full-Stack', 'API']
  },
  {
    title: 'Skyflo Mobile App',
    images: require('../assets/images/Skyflo.png'),
    description: 'Fashion brand mobile app built with Flutter, featuring catalog browsing, wishlist, and seamless checkout.',
    link: 'https://github.com/bodefavour/AirBnB_clone',
    category: 'Mobile Apps',
    tags: ['Flutter', 'Dart', 'Mobile']
  },
  {
    title: 'Harmony Hub',
    images: require('../assets/images/HarmonyHub.png'),
    description: 'Christian music streaming app with curated playlists, genre filtering, and smooth audio playback experience.',
    link: 'https://bodefavour.github.io/Harmony-Hub-web/',
    category: 'Mobile Apps',
    tags: ['Flutter', 'Dart', 'Streaming'],
    featured: true
  },
  {
    title: 'Custom Printf',
    images: require('../assets/images/Printf.png'),
    description: 'Custom implementation of the printf function in C with support for multiple format specifiers and buffer management.',
    link: 'https://github.com/joshybobo/printf',
    category: 'Open Source',
    tags: ['C', 'Systems Programming']
  },
  {
    title: 'Airbnb Clone',
    images: require('../assets/images/Airbnb.png'),
    description: 'Full-stack clone of Airbnb with property listings, booking system, and responsive design.',
    link: 'https://github.com/bodefavour/AirBnB_clone',
    category: 'Web Development',
    tags: ['React', 'TailwindCSS', 'Full-Stack']
  },
];

// To add a new project, simply add a new object to the array above
// Make sure to:
// 1. Add your project image to src/assets/images/
// 2. Follow the Project interface structure
// 3. Choose the appropriate category
// 4. Add relevant tags
// 5. Set featured: true for showcase projects
