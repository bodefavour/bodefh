import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 h-screen flex justify-center items-center">
      <div className="container mx-auto px-4 flex flex-col items-center justify-center space-y-6 text-center">
        {/* Profile Picture */}
        <div className="relative">
          <img
            src="/src/assets/images/Favour.jpg"
            alt="Favour's Profile"
            className="w-48 h-48 rounded-full border-4 border-white object-cover"
          />
          </div>
      <div className="text-center text-white">
        <h1 className="text-6xl font-bold mb-4">Favour Bode</h1>
        <p className="text-2xl mb-7">Softwares/Cloud Engineer</p>
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
