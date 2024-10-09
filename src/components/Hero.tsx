import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 h-screen flex justify-center items-center">
      <div className="text-center text-white">
        <h1 className="text-6xl font-bold mb-4">Favour Bode</h1>
        <p className="text-2xl mb-8">Full-Stack Developer & Virtual Assistant</p>
        <a
          href="#portfolio"
          className="bg-white text-blue-500 font-semibold px-6 py-3 rounded-lg transition hover:bg-blue-500 hover:text-white"
        >
          View My Work
        </a>
      </div>
    </section>
  );
};

export default Hero;
