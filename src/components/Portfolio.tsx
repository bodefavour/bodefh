import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink } from 'react-icons/fi';

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
  // Your existing projects array
  // ...
];

const Portfolio: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  // Create project categories
  const categories = ['All', 'Web Development', 'Mobile Apps', 'E-commerce', 'Open Source'];

const GitHubIcon = FiGithub as unknown as React.FC<React.SVGProps<SVGSVGElement>>;

const ExternalLinkIcon = FiExternalLink as unknown as React.FC<React.SVGProps<SVGSVGElement>>;

  return (
    <section className="relative py-20 bg-gradient-to-b from-gray-900 to-gray-800 overflow-hidden" id="portfolio">
      {/* Techy background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-blue-500 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-purple-500 rounded-full filter blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-6 lg:px-20 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
            My Projects
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            A collection of my technical implementations and creative solutions
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mt-6"></div>
        </motion.div>

        {/* Project Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <motion.button
              key={category}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveFilter(category)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                activeFilter === category
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white'
                  : 'bg-gray-800/50 text-gray-300 hover:bg-gray-700/70'
              }`}
            >
              {category}
            </motion.button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative group"
              onMouseEnter={() => setHoveredProject(index)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <div className="h-full bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all">
                {/* Project Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.images}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      <p className="text-gray-300 text-sm line-clamp-3">
                        {project.description}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Project Info */}
                <div className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-xl font-bold text-white">{project.title}</h3>
                    {hoveredProject === index && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="flex gap-2"
                      >
                        {project.link.includes('github.com') ? (
                          <a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 bg-gray-700/50 rounded-full hover:bg-blue-600/20 transition-colors"
                            aria-label="GitHub"
                          >
                            <GitHubIcon className="text-gray-300" />
                          </a>
                        ) : (
                          <a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 bg-gray-700/50 rounded-full hover:bg-blue-600/20 transition-colors"
                            aria-label="External Link"
                          >
                            <ExternalLinkIcon className="text-gray-300" />
                          </a>
                        )}
                      </motion.div>
                    )}
                  </div>

                  {/* Tech Tags */}
                  <div className="flex flex-wrap gap-2 mt-4">
                    {project.title.includes('Mobile') && (
                      <span className="px-2 py-1 bg-blue-900/30 text-blue-300 text-xs rounded-full">
                        Flutter
                      </span>
                    )}
                    {project.title.includes('Web') || project.title.includes('E-commerce') ? (
                      <span className="px-2 py-1 bg-purple-900/30 text-purple-300 text-xs rounded-full">
                        React
                      </span>
                    ) : null}
                    {project.title.includes('Clone') && (
                      <span className="px-2 py-1 bg-green-900/30 text-green-300 text-xs rounded-full">
                        Tailwind CSS
                      </span>
                    )}
                    {project.description.includes('AI') && (
                      <span className="px-2 py-1 bg-yellow-900/30 text-yellow-300 text-xs rounded-full">
                        AI Integration
                      </span>
                    )}
                  </div>
                </div>

                {/* View Project Button (shown on mobile) */}
                <div className="px-6 pb-6 md:hidden">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full py-2 text-center bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg font-medium text-white hover:from-blue-500 hover:to-purple-500 transition-all"
                  >
                    View Project
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="bg-gray-800/50 border border-gray-700/50 rounded-xl p-6 backdrop-blur-sm"
          >
            <div className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
              {projects.length}+
            </div>
            <div className="text-gray-400 mt-2">Projects Completed</div>
          </motion.div>
          
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="bg-gray-800/50 border border-gray-700/50 rounded-xl p-6 backdrop-blur-sm"
          >
            <div className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
              5+
            </div>
            <div className="text-gray-400 mt-2">Happy Clients</div>
          </motion.div>
          
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="bg-gray-800/50 border border-gray-700/50 rounded-xl p-6 backdrop-blur-sm"
          >
            <div className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
              3+
            </div>
            <div className="text-gray-400 mt-2">Years Experience</div>
          </motion.div>
          
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="bg-gray-800/50 border border-gray-700/50 rounded-xl p-6 backdrop-blur-sm"
          >
            <div className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
              10+
            </div>
            <div className="text-gray-400 mt-2">Technologies Used</div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;