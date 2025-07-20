import React from 'react';
import { motion } from 'framer-motion';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    { name: 'GitHub', url: 'https://github.com/bodefavour', icon: '👨‍💻' },
    { name: 'LinkedIn', url: 'https://linkedin.com/in/favour-bode', icon: '💼' },
    { name: 'Twitter', url: 'https://twitter.com/favourbode19', icon: '🐦' },
    { name: 'Email', url: 'mailto:bodefavour@gmail.com', icon: '✉️' },
  ];

  return (
    <footer className="relative bg-gray-900 border-t border-gray-800 py-12">
      {/* Techy background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500 rounded-full filter blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-6 lg:px-20 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Logo/branding */}
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="mb-6 md:mb-0"
          >
            <h2 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
              Favour Bode
            </h2>
            <p className="text-gray-400 text-sm mt-1">Software Engineer & Digital Marketer</p>
          </motion.div>
          
          {/* Social links */}
          <div className="flex flex-wrap justify-center gap-4 mb-6 md:mb-0">
            {socialLinks.map((link, index) => (
              <motion.a
                key={index}
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.9 }}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 flex items-center justify-center bg-gray-800/50 border border-gray-700 rounded-full text-lg hover:bg-blue-600/20 hover:border-blue-400/30 transition-all"
                aria-label={link.name}
              >
                {link.icon}
              </motion.a>
            ))}
          </div>
          
          {/* Copyright */}
          <div className="text-center md:text-right">
            <p className="text-gray-400 text-sm">
              &copy; {currentYear} Favour Bode. All rights reserved.
            </p>
            <p className="text-gray-500 text-xs mt-1">
              Built with React, TypeScript & Tailwind CSS
            </p>
          </div>
        </div>
        
        {/* Techy divider */}
        <div className="mt-12 pt-6 border-t border-gray-800/50 flex justify-center">
          <div className="text-gray-500 text-sm flex items-center">
            <span className="mr-2">🚀</span>
            <span>Fueled by innovation and caffeine</span>
            <span className="ml-2">☕</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;