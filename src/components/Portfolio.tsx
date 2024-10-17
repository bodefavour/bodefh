import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import '../index.css'; // Ensure to include the necessary Swiper styles

const projects = [
  {
    title: 'Harmony Hub',
    images: require('../assets/images/HarmonyHub.png'),
    description: 'Developed Harmony Hub, a Christian music streaming mobile app using Flutter and Dart. The app provides users with a variety of Christian songs to stream, organized by genre and artist. You can download the app from the Harmony Hub Landing Page, which includes the app’s download link and additional information about the app features.',
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
    <section className="py-16 bg-gray-100" id="portfolio">
      <div className="container mx-auto px-6 lg:px-20">
        <h2 className="text-4xl font-bold text-center mb-6">Portfolio</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`relative bg-white shadow-lg rounded-lg overflow-hidden transition-all duration-300 transform ${
  hoveredProject === index
    ? 'scale-70 md:scale-90 z-10 max-w-xs md:max-w-screen-md'
    : 'scale-50'
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
