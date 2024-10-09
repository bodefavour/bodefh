import React from 'react';

const skills = [
  { name: 'JavaScript', level: 'Advanced' },
  { name: 'TypeScript', level: 'Intermediate' },
  { name: 'React', level: 'Advanced' },
  { name: 'TailwindCSS', level: 'Intermediate' },
  // Add more skills here
];

const Skills: React.FC = () => {
  return (
    <section className="py-16 bg-gray-100" id="skills">
      <div className="container mx-auto px-6 lg:px-20">
        <h2 className="text-4xl font-bold text-center mb-6">Skills</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 text-center">
          {skills.map((skill, index) => (
            <div key={index} className="p-6 bg-white rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold mb-2">{skill.name}</h3>
              <p className="text-gray-600">{skill.level}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
