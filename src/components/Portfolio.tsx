import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiGithub, FiExternalLink, FiCode, FiSmartphone } from 'react-icons/fi';

const projects = [
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

const Portfolio: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const categories = ['All', 'Web Development', 'Mobile Apps', 'E-commerce', 'Open Source'];

  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  const featuredProjects = projects.filter(p => p.featured);

  return (
    <section className="relative py-20 lg:py-32 bg-dark-200 overflow-hidden" id="portfolio">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-mesh"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-2 rounded-full glass mb-4 text-sm font-medium text-cyan-400"
          >
            My Work
          </motion.span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-8">
            A showcase of my technical implementations and creative solutions across web, mobile, and cloud platforms
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-blue-600 mx-auto rounded-full"></div>
        </motion.div>

        {/* Category Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveFilter(category)}
              className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all ${
                activeFilter === category
                  ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-500/25'
                  : 'glass glass-hover text-gray-300'
              }`}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeFilter}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="group glass glass-hover rounded-2xl overflow-hidden"
              >
                {/* Project Image */}
                <div className="relative h-48 sm:h-56 overflow-hidden bg-gradient-to-br from-cyan-500/10 to-purple-500/10">
                  <img
                    src={project.images}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  {project.featured && (
                    <div className="absolute top-4 right-4 px-3 py-1 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full text-xs font-bold text-white">
                      Featured
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-300 via-dark-300/50 to-transparent opacity-60" />
                  
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-cyan-600/90 via-blue-600/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                    <motion.a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="p-3 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors"
                      aria-label="View Project"
                    >
                      {project.link.includes('github.com') ? (
                        <FiGithub className="w-6 h-6 text-white" />
                      ) : (
                        <FiExternalLink className="w-6 h-6 text-white" />
                      )}
                    </motion.a>
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      className="p-3 bg-white/20 backdrop-blur-sm rounded-full"
                    >
                      {project.category === 'Mobile Apps' ? (
                        <FiSmartphone className="w-6 h-6 text-white" />
                      ) : (
                        <FiCode className="w-6 h-6 text-white" />
                      )}
                    </motion.div>
                  </div>
                </div>

                {/* Project Info */}
                <div className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors line-clamp-1">
                      {project.title}
                    </h3>
                  </div>

                  <p className="text-sm text-gray-400 leading-relaxed mb-4 line-clamp-3">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs font-medium text-gray-400 hover:text-cyan-400 hover:border-cyan-500/50 transition-colors"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Mobile CTA */}
                <div className="px-6 pb-6 sm:hidden">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full py-3 text-center bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg font-medium text-white hover:from-cyan-400 hover:to-blue-500 transition-all"
                  >
                    View Project
                  </a>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-20 grid grid-cols-2 sm:grid-cols-4 gap-6"
        >
          {[
            { label: 'Total Projects', value: `${projects.length}+`, icon: '🚀' },
            { label: 'Happy Clients', value: '5+', icon: '😊' },
            { label: 'Years Experience', value: '3+', icon: '⏱️' },
            { label: 'Technologies', value: '10+', icon: '⚡' },
          ].map((stat, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -5, scale: 1.02 }}
              className="glass p-6 rounded-2xl text-center"
            >
              <div className="text-3xl mb-2">{stat.icon}</div>
              <div className="text-3xl font-bold text-gradient mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-gray-500">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <p className="text-gray-400 mb-6">Interested in working together?</p>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl font-semibold text-white shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 transition-all"
          >
            Start a Project
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio;
