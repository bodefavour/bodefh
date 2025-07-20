import React from 'react';
import { motion } from 'framer-motion';

const educationData = [
  {
    institution: 'Osun State University, UNIOSUN, Osogbo Osun State',
    degree: 'B.NSc. in Nursing Science',
    startDate: 'November 2022',
    endDate: 'Present',
    keyCourses: ['Anatomy', 'Physiology', 'Biochemistry', 'Pharmacology'],
    description: 'Placeholder description for Nursing Science at UNIOSUN, Osun State University.',
  },
  {
    institution: 'Holberton School / ALX',
    degree: 'Software Engineering',
    startDate: 'July 2023',
    endDate: 'December 2024',
    keyCourses: ['C Programming', 'Data Structures', 'Algorithms', 'Back-End Development'],
    description: 'Placeholder description for ALX Software Engineering Program.',
  },
  {
    institution: 'Hashgraph',
    degree: 'Certified Hashgraph Blockchain Developer',
    startDate: 'May 2024',
    endDate: 'December 2024',
    keyCourses: ['JavaScript', 'Hashgraph Blockchain Development', 'Algorithms', 'Back-End Development'],
    description: 'Placeholder description for ALX Software Engineering Program.',
  },
  {
    institution: 'Meta',
    degree: "Associate's Degree Meta Digital Marketing Professional Certificate",
    startDate: 'March 2024',
    endDate: 'August 2024',
    keyCourses: ['Fundamentals Of Social Advertising', 'Advanced Social Media Strategy Training and Certification', 'Advertising With Meta', 'Social Media Marketing'],
    description: 'Placeholder description for ALX Software Engineering Program.',
  },
  // Add more educational experiences similarly
  // Your existing education data
  // ...
];

const Education = () => {
  return (
    <section className="relative py-20 bg-gradient-to-b from-gray-900 to-gray-800 overflow-hidden" id="education">
      {/* Techy background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/3 left-1/4 w-64 h-64 bg-blue-500 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/4 w-64 h-64 bg-purple-500 rounded-full filter blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-6 lg:px-20 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
            Education Journey
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            My academic path blending healthcare, technology, and digital marketing
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mt-6"></div>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 h-full w-1 bg-gradient-to-b from-blue-500 to-purple-500 transform -translate-x-1/2 hidden md:block"></div>
          
          {/* Education Items */}
          <div className="space-y-12 md:space-y-0">
            {educationData.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative flex flex-col md:flex-row ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
              >
                {/* Timeline dot */}
                <div className="absolute left-1/2 top-6 w-6 h-6 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full transform -translate-x-1/2 -translate-y-1/2 z-10 hidden md:block"></div>
                
                {/* Content */}
                <div className={`w-full md:w-1/2 p-6 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                  <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-8 shadow-lg hover:shadow-xl transition-all h-full">
                    <div className="flex items-start mb-4">
                      <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-3 rounded-lg mr-4">
                        {index === 0 && <span className="text-white">🏥</span>}
                        {index === 1 && <span className="text-white">👨‍💻</span>}
                        {index === 2 && <span className="text-white">⛓️</span>}
                        {index === 3 && <span className="text-white">📱</span>}
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white">{edu.institution}</h3>
                        <p className="text-blue-300">{edu.degree}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center text-sm text-gray-400 mb-4">
                      <span className="mr-2">📅</span>
                      <span>{edu.startDate} - {edu.endDate}</span>
                    </div>
                    
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-gray-300 mb-2">Key Courses:</h4>
                      <div className="flex flex-wrap gap-2">
                        {edu.keyCourses.map((course, i) => (
                          <span key={i} className="px-3 py-1 bg-gray-700/50 text-gray-300 text-xs rounded-full">
                            {course}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <p className="text-gray-400 text-sm">{edu.description}</p>
                  </div>
                </div>
                
                {/* Empty space for alignment */}
                <div className="w-1/2 hidden md:block"></div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="bg-gray-800/50 border border-gray-700/50 rounded-xl p-6 backdrop-blur-sm"
          >
            <div className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
              {educationData.length}
            </div>
            <div className="text-gray-400 mt-2">Institutions</div>
          </motion.div>
          
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="bg-gray-800/50 border border-gray-700/50 rounded-xl p-6 backdrop-blur-sm"
          >
            <div className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
              2+
            </div>
            <div className="text-gray-400 mt-2">Technical Degrees</div>
          </motion.div>
          
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="bg-gray-800/50 border border-gray-700/50 rounded-xl p-6 backdrop-blur-sm"
          >
            <div className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
              1
            </div>
            <div className="text-gray-400 mt-2">Healthcare Degree</div>
          </motion.div>
          
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="bg-gray-800/50 border border-gray-700/50 rounded-xl p-6 backdrop-blur-sm"
          >
            <div className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
              20+
            </div>
            <div className="text-gray-400 mt-2">Courses Completed</div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Education;