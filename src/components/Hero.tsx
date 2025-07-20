import React from 'react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-0 w-32 h-32 bg-blue-500 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-purple-500 rounded-full filter blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 h-full flex flex-col justify-center items-center relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          {/* Profile Picture with techy border */}
          <div className="relative mx-auto mb-8 w-48 h-48 rounded-full border-4 border-white/10 backdrop-blur-sm overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 opacity-30"></div>
            <img
              src={require('../assets/images/Favour.jpg')}
              alt="Favour's Profile"
              className="w-full h-full object-cover relative z-10"
            />
            <div className="absolute inset-0 border-2 border-white/20 rounded-full pointer-events-none"></div>
          </div>

          <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-200">
            Favour Bode
          </h1>
          
          <div className="max-w-2xl mx-auto">
            <p className="text-xl md:text-2xl mb-8 text-blue-100 font-light">
              <span className="inline-block px-2 py-1 bg-white/10 rounded-md backdrop-blur-sm mr-2">👨‍💻</span> 
              Software/Cloud Engineer 
              <span className="mx-2">•</span>
              <span className="inline-block px-2 py-1 bg-white/10 rounded-md backdrop-blur-sm ml-2">📱</span> 
              Digital Marketing Expert
            </p>
            
            <div className="flex flex-wrap justify-center gap-4">
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#portfolio"
                className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg font-medium text-white shadow-lg hover:shadow-xl transition-all"
              >
                View My Work
              </motion.a>
              
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#contact"
                className="px-8 py-3 border-2 border-white/30 rounded-lg font-medium text-white hover:bg-white/10 transition-all"
              >
                Contact Me
              </motion.a>
            </div>
          </div>
        </motion.div>
        
        {/* Animated scroll indicator */}
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <motion.div 
              animate={{ y: [0, 5, 0], opacity: [0.5, 1, 0.5] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
              className="w-1 h-2 bg-white rounded-full mt-2"
            ></motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;