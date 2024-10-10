import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-blue-500 to-purple-500 text-white">
      <div className="container mx-auto px-4 flex flex-col items-center justify-center space-y-6 text-center animate-fadeIn">
        {/* Profile Picture */}
        <div className="relative animate-bounce">
          <img
            src={require('../assets/images/Favour.jpg')}
            alt="Favour's Profile"
            className="w-48 h-48 rounded-full border-4 border-white object-cover"
          />
          </div>
      <div className="text-center text-white">
        <h1 className="text-6xl font-bold mb-4">Favour Bode</h1>
        <p className="text-2xl mb-7">Software/Cloud Engineer with experience in Digital Marketing</p>
        <a
          href="#portfolio"
          className="bg-white text-blue-500 font-semibold px-6 py-3 rounded-lg transition hover:bg-blue-500 hover:text-white"
        >
          View My Work
        </a>
      </div>
          </div>
    </section>
  );
};

export default Hero;
