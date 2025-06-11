import React from 'react';

const About: React.FC = () => {
  return (
    <section className="bg-black py-16" id="about">
      <div className="container mx-auto px-6 lg:px-20">
        <h2 className="text-4xl font-bold text-center mb-6">About Me</h2>
        <p className="text-lg text-white text-center max-w-3xl mx-auto">
          I'm Favour Bode, a multifaceted Software Engineer with hands-on experience in cloud development, full-stack web, and mobile app development. I specialize in building scalable, high-performance applications using cutting-edge technologies like Flutter, Dart, and React, and I am exploring the potential of decentralized apps with Hedera Hashgraph. With a strong background in digital marketing and social media management, I understand how to blend technology with strategic communication to drive results.
        </p>
      </div>
    </section>
  );
};

export default About;
