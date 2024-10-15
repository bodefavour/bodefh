import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import '../styles.css'; // Ensure to include the necessary Swiper styles

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
              className={`relative bg-white shadow-lg rounded-lg overflow-hidden transition-all duration-300 ${
                hoveredProject === index ? 'transform scale-125 z-10' : 'scale-100'
              }`}
              style={
                hoveredProject === index
                  ? { maxWidth: '80vw', height: '60vh', position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }
                  : {}
              }
              onMouseEnter={() => setHoveredProject(index)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              {/* Display first image by default */}
              <img
                src={project.images}
                alt={project.title}
                className="w-full h-48 object-cover"
              />

              {/* Project name */}
              <div className="p-4">
                <h3 className="text-xl font-bold mb-2 text-center">
                  {project.title}
                </h3>
              </div>

              {/* Expanded content on hover */}
              {hoveredProject === index && (
                <div className="absolute inset-0 bg-white bg-opacity-95 p-4 rounded-lg overflow-y-auto">
                  {/* Carousel for project images */}
                  <Swiper spaceBetween={10} slidesPerView={1} className="h-64">
                    <SwiperSlide>
                      <img
                        src={project.images}
                        alt={project.title}
                        className="w-full h-full object-cover rounded-lg"
                      />
                    </SwiperSlide>
                  </Swiper>

                  {/* Expanded Project Information */}
                  <div className="text-center mt-4">
                    <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                    <p className="text-gray-700">{project.description}</p>
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg mt-4"
                    >
                      View Project
                    </a>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;