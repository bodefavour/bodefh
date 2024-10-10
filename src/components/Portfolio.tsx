import React from 'react';

const projects = [
  {
    title: 'Harmony Hub',
    image: require('../assets/images/HarmonyHub.png'),
    description: 'Developed Harmony Hub, a Christian music streaming mobile app using Flutter and Dart. The app provides users with a variety of Christian songs to stream, organized by genre and artist. You can download the app from the Harmony Hub Landing Page, which includes the app’s download link and additional information about the app's features.',
    link: 'https://bodefavour.github.io/Harmony-Hub-web/',
  },
  {
    title: 'Custom Printf',
    image: require('../assets/images/Printf.png'),
    description: 'Collaborated in a group of two to build a custom implementation of the printf function in C prog. language. This project involved a deep understanding of variadic functions, format specifiers, and buffer management. It was an exciting challenge to replicate the behavior of the standard printf while ensuring memory efficiency and compatibility with different data types.',
    link: 'https://github.com/joshybobo/printf',
  },
{
    title: '𝗣𝗿𝗼𝗷𝗲𝗰𝘁: 𝗔𝗶𝗿𝗯𝗻𝗯 𝗖𝗹𝗼𝗻𝗲 | 𝗔𝗟𝗫 𝗦𝗼𝗳𝘁𝘄𝗮𝗿𝗲 𝗘𝗻𝗴𝗶𝗻𝗲𝗲𝗿𝗶𝗻𝗴 𝗣𝗿𝗼𝗴𝗿𝗮𝗺:',
  image: require('../assets/images/Airbnb.png'),
    description: 'Built a fully functional clone of the popular Airbnb website. The project includes advanced UI/UX elements, responsive layouts, interactive components, and a focus on mimicking the user experience of the original site. It was a solo project that helped enhance skills in React, TailwindCSS, and building scalable front-end web applications',
    link: 'https://github.com/bodefavour/AirBnB_clone',
  },
  // Add more projects here
];

const Portfolio: React.FC = () => {
  return (
    <section className="py-16 bg-white" id="portfolio">
      <div className="container mx-auto px-6 lg:px-20">
        <h2 className="text-4xl font-bold text-center mb-6">View My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-100 p-6 rounded-lg shadow-md animate-fadeIn"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-64 object-cover rounded-lg mb-4"
              />
              <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
              <p className="text-gray-700 mb-4">{project.description}</p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 font-semibold hover:underline"
              >
                View Project
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
