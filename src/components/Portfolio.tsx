import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';

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
    description: 'Collaborated in a group of two to build a custom implementation of the printf function in C prog. language. This project involved a deep understanding of variadic functions, format specifiers, and buffer management. It was an exciting challenge to replicate the behavior of the standard printf while ensuring memory efficiency and compatibility with different data types.',
    link: 'https://github.com/joshybobo/printf',
  },
{
    title: '𝗣𝗿𝗼𝗷𝗲𝗰𝘁: 𝗔𝗶𝗿𝗯𝗻𝗯 𝗖𝗹𝗼𝗻𝗲 | 𝗔𝗟𝗫 𝗦𝗼𝗳𝘁𝘄𝗮𝗿𝗲 𝗘𝗻𝗴𝗶𝗻𝗲𝗲𝗿𝗶𝗻𝗴 𝗣𝗿𝗼𝗴𝗿𝗮𝗺:',
  images: require('../assets/images/Airbnb.png'),
    description: 'Built a fully functional clone of the popular Airbnb website. The project includes advanced UI/UX elements, responsive layouts, interactive components, and a focus on mimicking the user experience of the original site. It was a solo project that helped enhance skills in React, TailwindCSS, and building scalable front-end web applications',
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
              className={`relative bg-white shadow-lg rounded-lg overflow-hidden transform transition-transform duration-300 ${
                hoveredProject === index ? 'scale-110' : 'scale-100'
              }`}
              onMouseEnter={() => setHoveredProject(index)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              {/* Display first image by default */}
              <img
                src={project.images[0]}
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
                <div className="absolute inset-0 bg-white bg-opacity-90 p-4 overflow-hidden">
                  {/* Carousel for project images */}
                  <Swiper
                    spaceBetween={10}
                    slidesPerView={1}
                    className="h-64"
                  >
                    {project.images.map((image, idx) => (
                      <SwiperSlide key={idx}>
                        <img
                          src={image}
                          alt={`Project ${index} - Slide ${idx}`}
                          className="w-full h-full object-cover rounded-lg"
                        />
                      </SwiperSlide>
                    ))}
                  </Swiper>

                  {/* Expanded Project Information */}
                  <div className="text-center mt-4">
                    <h3 className="text-2xl font-bold mb-2">{project.name}</h3>
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