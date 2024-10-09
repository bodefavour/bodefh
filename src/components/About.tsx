import React from 'react';

const About: React.FC = () => {
  return (
    <section className="bg-gray-100 py-16" id="about">
      <div className="container mx-auto px-6 lg:px-20">
        <h2 className="text-4xl font-bold text-center mb-6">About Me</h2>
        <p className="text-lg text-gray-700 text-center max-w-3xl mx-auto">
          I'm Favour Bode, a software engineer specializing in building
          exceptional digital experiences. With a passion for both design and
          development, I aim to create websites and applications that are
          visually stunning and highly performant.
        </p>
      </div>
    </section>
  );
};

export default About;
