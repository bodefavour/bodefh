import React from 'react';
import { motion } from 'framer-motion';

const skills = [
  { name: 'JavaScript', image: require('../assets/images/JavaScript.png'), level: 90, category: 'Languages' },
  { name: 'C', image: require('../assets/images/C.png'), level: 85, category: 'Languages' },
  { name: 'Python', image: require('../assets/images/Python.png'), level: 80, category: 'Languages' },
  { name: 'TypeScript', image: require('../assets/images/Typescript.png'), level: 85, category: 'Languages' },
  { name: 'Dart', image: require('../assets/images/Dart.png'), level: 80, category: 'Languages' },
  { name: 'React', image: require('../assets/images/React.png'), level: 88, category: 'Frontend' },
  { name: 'Tailwind CSS', image: require('../assets/images/Tailwind.png'), level: 90, category: 'Frontend' },
  { name: 'Flutter', image: require('../assets/images/Flutter.png'), level: 82, category: 'Mobile' },
  { name: 'Node.js', image: require('../assets/images/Nodejs.png'), level: 75, category: 'Backend' },
  { name: 'Git', image: require('../assets/images/Git.png'), level: 85, category: 'Tools' },
  { name: 'Hedera Hashgraph', image: require('../assets/images/Hashgraph.png'), level: 70, category: 'Blockchain' },
  { name: 'Digital Marketing', image: require('../assets/images/DigitalMarketing.png'), level: 85, category: 'Marketing' },
];

const Skills: React.FC = () => {
  const categories = [
    { name: 'Languages', icon: '💻', color: 'from-cyan-500 to-blue-500' },
    { name: 'Frontend', icon: '🎨', color: 'from-blue-500 to-purple-500' },
    { name: 'Mobile', icon: '📱', color: 'from-purple-500 to-pink-500' },
    { name: 'Backend', icon: '⚙️', color: 'from-emerald-500 to-cyan-500' },
    { name: 'Tools', icon: '🛠️', color: 'from-orange-500 to-red-500' },
    { name: 'Blockchain', icon: '⛓️', color: 'from-yellow-500 to-orange-500' },
    { name: 'Marketing', icon: '📈', color: 'from-pink-500 to-rose-500' },
  ];

  return (
    <section className="relative py-20 lg:py-32 bg-dark-300 overflow-hidden" id="skills">
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
            What I Bring
          </motion.span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            Skills & <span className="text-gradient">Expertise</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-8">
            A comprehensive toolkit for building innovative solutions and driving digital transformation
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-blue-600 mx-auto rounded-full"></div>
        </motion.div>

        {/* Skills by Category */}
        <div className="space-y-12 max-w-6xl mx-auto">
          {categories.map((category, catIndex) => {
            const categorySkills = skills.filter(skill => skill.category === category.name);
            if (categorySkills.length === 0) return null;

            return (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: catIndex * 0.1 }}
                className="glass rounded-2xl p-6 sm:p-8"
              >
                {/* Category Header */}
                <div className="flex items-center gap-4 mb-8">
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                    className={`w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-gradient-to-r ${category.color} flex items-center justify-center text-2xl sm:text-3xl shadow-lg`}
                  >
                    {category.icon}
                  </motion.div>
                  <div>
                    <h3 className="text-2xl sm:text-3xl font-bold text-white">{category.name}</h3>
                    <p className="text-sm text-gray-500">{categorySkills.length} {categorySkills.length === 1 ? 'skill' : 'skills'}</p>
                  </div>
                </div>

                {/* Skills Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 sm:gap-6">
                  {categorySkills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: skillIndex * 0.05 }}
                      whileHover={{ y: -8, scale: 1.05 }}
                      className="group"
                    >
                      <div className="glass glass-hover rounded-xl p-4 text-center h-full flex flex-col items-center justify-between">
                        {/* Skill Icon */}
                        <div className="relative mb-4">
                          <div className={`absolute inset-0 bg-gradient-to-r ${category.color} rounded-xl blur-lg opacity-0 group-hover:opacity-50 transition-opacity duration-300`}></div>
                          <div className="relative w-16 h-16 sm:w-20 sm:h-20 bg-white/5 rounded-xl flex items-center justify-center overflow-hidden">
                            <img 
                              src={skill.image} 
                              alt={skill.name} 
                              className="w-10 h-10 sm:w-12 sm:h-12 object-contain group-hover:scale-110 transition-transform duration-300"
                            />
                          </div>
                        </div>
                        
                        {/* Skill Name */}
                        <h4 className="text-sm sm:text-base font-semibold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                          {skill.name}
                        </h4>
                        
                        {/* Progress Bar */}
                        <div className="w-full">
                          <div className="flex justify-between items-center mb-2">
                            <span className="text-xs text-gray-500">Proficiency</span>
                            <span className={`text-xs font-bold bg-gradient-to-r ${category.color} bg-clip-text text-transparent`}>
                              {skill.level}%
                            </span>
                          </div>
                          <div className="w-full h-1.5 bg-white/5 rounded-full overflow-hidden">
                            <motion.div
                              initial={{ width: 0 }}
                              whileInView={{ width: `${skill.level}%` }}
                              viewport={{ once: true }}
                              transition={{ duration: 1, delay: skillIndex * 0.1 }}
                              className={`h-full bg-gradient-to-r ${category.color} rounded-full`}
                            ></motion.div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Summary Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-6"
        >
          {[
            { label: 'Technical Skills', value: skills.length, icon: '💡' },
            { label: 'Specializations', value: '7', icon: '🎯' },
            { label: 'Avg. Proficiency', value: '83%', icon: '📊' },
            { label: 'Years Learning', value: '3+', icon: '📚' },
          ].map((stat, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -5, scale: 1.02 }}
              className="glass p-6 rounded-2xl text-center"
            >
              <div className="text-3xl mb-2">{stat.icon}</div>
              <div className="text-2xl sm:text-3xl font-bold text-gradient mb-2">
                {stat.value}
              </div>
              <div className="text-xs sm:text-sm text-gray-500">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <p className="text-gray-400 mb-6">Let's build something amazing together</p>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl font-semibold text-white shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 transition-all"
          >
            Hire Me
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
