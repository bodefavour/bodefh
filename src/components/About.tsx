import React from 'react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  const highlights = [
    {
      icon: '💻',
      title: 'Full-Stack Development',
      description: 'Building scalable applications with React, Flutter, and modern frameworks'
    },
    {
      icon: '☁️',
      title: 'Cloud Architecture',
      description: 'Designing and deploying cloud-native solutions'
    },
    {
      icon: '⛓️',
      title: 'Blockchain Development',
      description: 'Exploring decentralized apps with Hedera Hashgraph'
    },
    {
      icon: '📈',
      title: 'Digital Marketing',
      description: 'Strategic campaigns that drive measurable business growth'
    }
  ];

  return (
    <section className="relative py-20 lg:py-32 bg-dark-300 overflow-hidden" id="about">
      {/* Background elements */}
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
            Get to know me
          </motion.span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            About <span className="text-gradient">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-blue-600 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center max-w-7xl mx-auto">
          {/* Left - Main Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div className="prose prose-invert max-w-none">
              <p className="text-lg sm:text-xl text-gray-300 leading-relaxed">
                I'm <span className="text-cyan-400 font-semibold">Favour Bode</span>, a versatile{' '}
                <span className="text-gradient-premium font-semibold">Software Engineer</span> with a passion for creating
                innovative solutions that bridge technology and business goals.
              </p>

              <p className="text-lg text-gray-400 leading-relaxed mt-4">
                With expertise spanning <span className="text-cyan-400">cloud development</span>, <span className="text-blue-400">full-stack engineering</span>, and{' '}
                <span className="text-purple-400">mobile app development</span>, I specialize in building high-performance applications using cutting-edge
                technologies like <strong className="text-white">Flutter</strong>, <strong className="text-white">React</strong>, and{' '}
                <strong className="text-white">Dart</strong>.
              </p>

              <p className="text-lg text-gray-400 leading-relaxed mt-4">
                My unique blend of technical expertise and <span className="text-emerald-400 font-semibold">digital marketing</span> acumen
                allows me to not only build exceptional products but also ensure they reach and resonate with the right audience.
                I'm currently exploring the exciting world of <span className="text-purple-400">decentralized applications</span> with{' '}
                <strong className="text-white">Hedera Hashgraph</strong>.
              </p>
            </div>

            {/* Quick Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8"
            >
              {[
                { label: 'Projects', value: '11+', color: 'from-cyan-500 to-blue-500' },
                { label: 'Clients', value: '5+', color: 'from-blue-500 to-purple-500' },
                { label: 'Years', value: '3+', color: 'from-purple-500 to-pink-500' },
                { label: 'Certs', value: '12+', color: 'from-emerald-500 to-cyan-500' },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -5 }}
                  className="glass p-4 rounded-xl text-center"
                >
                  <div className={`text-3xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-1`}>
                    {stat.value}
                  </div>
                  <div className="text-xs text-gray-500 uppercase tracking-wider">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right - Highlights Grid */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {highlights.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="group glass glass-hover p-6 rounded-2xl"
              >
                <div className="text-4xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
                  {item.icon}
                </div>
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-400 leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Tech Stack Pills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-16"
        >
          <h3 className="text-center text-sm uppercase tracking-wider text-gray-500 mb-6">
            Technologies & Expertise
          </h3>
          <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
            {[
              'React', 'TypeScript', 'Flutter', 'Dart', 'Node.js',
              'Python', 'C', 'Tailwind CSS', 'Cloud Computing',
              'Hedera Hashgraph', 'Git', 'Digital Marketing',
              'Social Media', 'Content Strategy', 'SEO'
            ].map((tech, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ y: -3, scale: 1.05 }}
                className="px-4 py-2 glass rounded-full text-sm font-medium text-gray-300 hover:text-cyan-400 hover:border-cyan-500/50 transition-all cursor-default"
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.7 }}
          className="mt-16 text-center"
        >
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl font-semibold text-white shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 transition-all"
          >
            Let's Work Together
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default About;