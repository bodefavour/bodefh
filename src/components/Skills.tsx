import React from 'react';
import { motion } from 'framer-motion';

const skills = [
  { name: 'JavaScript', image: require('../assets/images/JavaScript.png'), level: 90 },
  { name: 'C', image: require('../assets/images/C.png'), level: 85 },
  { name: 'Python', image: require('../assets/images/Python.png'), level: 80 },
  { name: 'TypeScript', image: require('../assets/images/Typescript.png'), level: 75 },
  { name: 'React', image: require('../assets/images/React.png'), level: 88 },
  { name: 'Tailwind CSS', image: require('../assets/images/Tailwind.png'), level: 78 },
  { name: 'Flutter', image: require('../assets/images/Flutter.png'), level: 82 },
  { name: 'Dart', image: require('../assets/images/Dart.png'), level: 80 },
  { name: 'Node.js', image: require('../assets/images/Nodejs.png'), level: 75 },
  { name: 'Git', image: require('../assets/images/Git.png'), level: 85 },
  { name: 'Hedera Hashgraph', image: require('../assets/images/Hashgraph.png'), level: 70 },
  { name: 'Digital Marketing', image: require('../assets/images/DigitalMarketing.png'), level: 85 },
  // Add more skills here
];

const Skills: React.FC = () => {
  // Group skills by category
  const skillCategories = [
    {
      name: 'Programming Languages',
      skills: skills.filter(skill => 
        ['JavaScript', 'C', 'Python', 'TypeScript', 'Dart'].includes(skill.name)
    },
    {
      name: 'Frontend Development',
      skills: skills.filter(skill => 
        ['React', 'Tailwind CSS'].includes(skill.name))
    },
    {
      name: 'Mobile Development',
      skills: skills.filter(skill => 
        ['Flutter', 'Dart'].includes(skill.name))
    },
    {
      name: 'Blockchain',
      skills: skills.filter(skill => 
        ['Hedera Hashgraph'].includes(skill.name))
    },
    {
      name: 'Digital Marketing',
      skills: skills.filter(skill => 
        ['Digital Marketing'].includes(skill.name))
    },
    {
      name: 'Tools',
      skills: skills.filter(skill => 
        ['Git', 'Node.js'].includes(skill.name))
    }
  ];

  return (
    <section className="relative py-20 bg-gradient-to-b from-gray-900 to-gray-800 overflow-hidden" id="skills">
      {/* Techy background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-purple-500 rounded-full filter blur-3xl"></div>
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
            Technical Arsenal
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            My toolkit for building innovative solutions and impactful digital experiences
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mt-6"></div>
        </motion.div>

        {/* Skills by Category */}
        <div className="space-y-12">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6 shadow-lg"
            >
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 w-2 h-8 rounded-full mr-3"></span>
                {category.name}
              </h3>
              
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skillIndex}
                    whileHover={{ y: -5 }}
                    className="flex flex-col items-center"
                  >
                    <div className="relative w-20 h-20 mb-4">
                      <div className="absolute inset-0 bg-gray-700 rounded-xl transform rotate-45 scale-90"></div>
                      <div className="relative w-full h-full flex items-center justify-center">
                        <img 
                          src={skill.image} 
                          alt={skill.name} 
                          className="w-12 h-12 object-contain"
                        />
                      </div>
                    </div>
                    
                    <h4 className="text-lg font-semibold text-white mb-2">{skill.name}</h4>
                    
                    {/* Animated skill level bar */}
                    <div className="w-full bg-gray-700 rounded-full h-2 mb-1">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: skillIndex * 0.1 }}
                        className="h-full rounded-full bg-gradient-to-r from-blue-500 to-purple-500"
                      ></motion.div>
                    </div>
                    
                    <span className="text-xs text-gray-400">
                      {skill.level}% mastery
                    </span>
                  </motion.div>
                ))}
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
              {skills.length}+
            </div>
            <div className="text-gray-400 mt-2">Technical Skills</div>
          </motion.div>
          
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="bg-gray-800/50 border border-gray-700/50 rounded-xl p-6 backdrop-blur-sm"
          >
            <div className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
              5+
            </div>
            <div className="text-gray-400 mt-2">Programming Languages</div>
          </motion.div>
          
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="bg-gray-800/50 border border-gray-700/50 rounded-xl p-6 backdrop-blur-sm"
          >
            <div className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
              3+
            </div>
            <div className="text-gray-400 mt-2">Frameworks</div>
          </motion.div>
          
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="bg-gray-800/50 border border-gray-700/50 rounded-xl p-6 backdrop-blur-sm"
          >
            <div className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
              2+
            </div>
            <div className="text-gray-400 mt-2">Specializations</div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Skills;