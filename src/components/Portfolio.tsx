import React from 'react';

const projects = [
  {
    title: 'Harmony Hub',
    description: 'A Christian music streaming platform built with Flutterflow and Firebase.',
    link: 'https://bodefavour.github.io/Harmony-Hub-web/',
  },
  {
    title: 'Custom Printf',
    description: 'Building a Custom Printf function in C programming language',
    link: 'https://github.com/joshybobo/printf',
  },
{
    title: '𝗣𝗿𝗼𝗷𝗲𝗰𝘁: 𝗔𝗶𝗿𝗯𝗻𝗯 𝗖𝗹𝗼𝗻𝗲 | 𝗔𝗟𝗫 𝗦𝗼𝗳𝘁𝘄𝗮𝗿𝗲 𝗘𝗻𝗴𝗶𝗻𝗲𝗲𝗿𝗶𝗻𝗴 𝗣𝗿𝗼𝗴𝗿𝗮𝗺:',
    description: 'Building a Clone of the popular Airbnb Website page and adding basic functionalities ',
    link: 'https://github.com/bodefavour/AirBnB_clone',
  },
  // Add more projects here
];

const Portfolio: React.FC = () => {
  return (
    <section className="py-16 bg-white" id="portfolio">
      <div className="container mx-auto px-6 lg:px-20">
        <h2 className="text-4xl font-bold text-center mb-6">Portfolio</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-100 p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300"
            >
              <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
              <p className="text-gray-700 mb-4">{project.description}</p>
              <a
                href={project.link}
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
