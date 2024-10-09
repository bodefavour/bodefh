import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 py-6">
      <div className="container mx-auto px-6 lg:px-20 text-center text-white">
        <p className="mb-4">&copy; {new Date().getFullYear()} Favour Bode. All rights reserved.</p>
        <div className="flex justify-center space-x-6">
          <a href="https://linkedin.com/in/favourbode" className="hover:text-blue-400">LinkedIn</a>
          <a href="https://github.com/favourbode" className="hover:text-gray-400">GitHub</a>
          <a href="https://twitter.com/favourbode" className="hover:text-blue-500">Twitter</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
