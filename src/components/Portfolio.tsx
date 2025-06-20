import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import '../index.css'; // Ensure to include the necessary Swiper styles

const projects = [
  {
    title: 'Boshan',
    images: require('../assets/images/Boshan.png'),
    description: 'Built a fully functional website for a cosmetic brand, featuring three different phases; Wait-list phase, pre-launch phase and a launch phase.',
    link: 'https://www.boshan.co/',
  },
{
  title: 'UNIOSUN Hostel Management System',
  images: require('../assets/images/hmsr.png'),
  description: `A mini real estate side project to serve as Osun State University Hostels Management System, easing booking of hostels by students (Still in Development)`,
  link: 'https://github.com/bodefavour/hostel-management2',
},
{
    title: 'Bella Books',
    images: require('../assets/images/Bellabooks.png'),
    description: 'Built a fully functional e-commerce book store with advanced UI/UX elements, responsive layouts, and interactive components using React and TailwindCSS.',
    link: 'https://shopbellabooks.com/',
  },
{
    title: 'TextCleaner',
    images: require('../assets/images/Text.png'),
    description: 'A text editor website build for styling LinkedIn texts (Built as a side project)',
    link: 'https://textcleaner.net/',
  },
{
  title: 'SokoSQ',
  images: require('../assets/images/Sokosq.png'),
  description: `An AI-Powered Social Commerce
for SMEs to Transact, that helps create high-converting stores equipped with AI marketing and business tools in 3 minutes. No tech skills needed!`,
  link: 'https://www.sokosq.com/',
},
{
    title: 'Lacrim World',
    images: require('../assets/images/Lacrim.png'),
    description: 'Lacrim World, a fashion brand based in the heart of USA',
    link: 'https://lwdigitalz.com/',
  },
{
    title: 'Cetrix',
    images: require('../assets/images/Cetrix.png'),
    description: 'Manage all your utility bills, airtime, data, TV subscriptions, and more in one secure platform. Save time and money with Cetrix.',
    link: 'https://www.cetrix.org/',
  },
{
    title: 'Skyflo Mobile App',
    images: require('../assets/images/Skyflo.png'),
    description: 'A fashion brand mobile app built using Flutter (Still in Development).',
    link: 'https://github.com/bodefavour/AirBnB_clone',
  },
{
    title: 'Harmony Hub',
    images: require('../assets/images/HarmonyHub.png'),
    description: 'Developed Harmony Hub, a Christian music streaming mobile app using Flutter and Dart. The app provides users with a variety of Christian songs to stream, organized by genre and artist.',
    link: 'https://bodefavour.github.io/Harmony-Hub-web/',
  },
  {
    title: 'Custom Printf',
    images: require('../assets/images/Printf.png'),
    description: 'Collaborated in a group of two to build a custom implementation of the printf function in C. This project involved a deep understanding of variadic functions, format specifiers, and buffer management.',
    link: 'https://github.com/joshybobo/printf',
  },
  {
    title: 'Airbnb Clone',
    images: require('../assets/images/Airbnb.png'),
    description: 'Built a fully functional clone of the popular Airbnb website with advanced UI/UX elements, responsive layouts, and interactive components using React and TailwindCSS.',
    link: 'https://github.com/bodefavour/AirBnB_clone',
  },
  // Add more projects here
];

const Portfolio: React.FC = () => {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  return (
    <section className="py-16 bg-black" id="portfolio">
      <div className="container mx-auto px-6 lg:px-20">
        <h2 className="text-4xl font-bold text-center text-white mb-6">View My Works</h2>
        <h3 className="text-2xl font-light text-center text-white mb-6">(Hover with Keyboard/ Click on Mobile) to view more details</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`relative bg-white shadow-lg rounded-lg overflow-hidden transition-all duration-300 transform ${
  hoveredProject === index
    ? 'scale-105 md:scale-110 z-10 max-w-xs md:max-w-screen-md'
    : 'scale-100'
              }`}
              onMouseEnter={() => setHoveredProject(index)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              {/* Card Image with Padding */}
              <div className="p-4">
                <img
                  src={project.images}
                  alt={project.title}
                  className="w-full h-80 object-contain p-4" // Added padding so the image stays inside the card without zooming
                />
              </div>

              {/* Card Content */}
              <div className="p-4">
                <h3 className="text-xl font-bold mb-2 text-center">{project.title}</h3>
                {hoveredProject === index && (
                  <div className="transition-opacity duration-300 opacity-100">
                    <p className="text-gray-700 text-center">
                      {project.description}
                    </p>
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg mt-4 text-center"
                    >
                      View Project
                    </a>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
