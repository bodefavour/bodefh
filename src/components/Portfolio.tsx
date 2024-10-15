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
              className="relative bg-white shadow-lg rounded-lg overflow-hidden transition-all duration-300 transform hover:scale-105"
              onClick={() => setHoveredProject(index)}
            >
              <img
                src={project.images}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-bold mb-2 text-center">{project.title}</h3>
              </div>
            </div>
          ))}
        </div>

        {/* Modal to display zoomed-in project details */}
        {hoveredProject !== null && (
          <div
            className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50"
            onClick={() => setHoveredProject(null)} // Close modal when clicking outside the content
          >
            <div
              className="bg-white p-6 rounded-lg max-w-4xl mx-auto relative"
              onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the content
            >
              {/* Carousel for project images */}
              <Swiper spaceBetween={10} slidesPerView={1} className="h-64">
                <SwiperSlide>
                  <img
                    src={projects[hoveredProject].images}
                    alt={projects[hoveredProject].title}
                    className="w-full h-full object-cover rounded-lg"
                  />
                </SwiperSlide>
              </Swiper>

              {/* Expanded Project Information */}
              <div className="text-center mt-4">
                <h3 className="text-2xl font-bold mb-2">{projects[hoveredProject].title}</h3>
                <p className="text-gray-700">{projects[hoveredProject].description}</p>
                <a
                  href={projects[hoveredProject].link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg mt-4"
                >
                  View Project
                </a>
              </div>

              {/* Close button */}
              <button
                className="absolute top-4 right-4 bg-red-500 text-white rounded-full px-4 py-2"
                onClick={() => setHoveredProject(null)}
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Portfolio;