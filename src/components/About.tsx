import React from 'react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  return (
    <section className="relative py-20 bg-gray-900 overflow-hidden" id="about">
      {/* Techy background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-purple-500 rounded-full filter blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-6 lg:px-20 relative z-10">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
              About Me
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto"></div>
          </div>
          
          <div className="max-w-4xl mx-auto bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-8 md:p-10 shadow-xl">
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
              I'm <span className="text-blue-300">Favour Bode</span>, a multifaceted <span className="text-purple-300">Software Engineer</span> with hands-on experience in cloud development, full-stack web, and mobile app development. I specialize in building scalable, high-performance applications using cutting-edge technologies like <span className="text-blue-300">Flutter</span>, <span className="text-blue-300">Dart</span>, and <span className="text-blue-300">React</span>, and I'm exploring the potential of decentralized apps with <span className="text-purple-300">Hedera Hashgraph</span>.
            </p>
            <p className="text-lg md:text-xl text-gray-300 mt-6 leading-relaxed">
              With a strong background in <span className="text-purple-300">digital marketing</span> and <span className="text-purple-300">social media management</span>, I bring a unique perspective that blends technical expertise with strategic communication to drive measurable results. My dual expertise allows me to bridge the gap between technology and business objectives.
            </p>
          </div>
          
          {/* Tech stack indicators */}
          <div className="flex flex-wrap justify-center gap-4 mt-12">
            {['Cloud Architecture', 'Full-Stack Dev', 'Mobile Apps', 'Blockchain', 'Digital Marketing', 'Social Media'].map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="px-4 py-2 bg-gray-800/50 border border-gray-700 rounded-full text-sm text-gray-300 backdrop-blur-sm"
              >
                #{item}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;