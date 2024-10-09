import React from 'react';
import Hero from './components/Hero.tsx';
import About from './components/About.tsx';
import Portfolio from './components/Portfolio.tsx';
import Skills from './components/Skills.tsx';
import Contact from './components/Contact.tsx';
import Footer from './components/Footer.tsx';

const App: React.FC = () => {
  return (
    <div className="App">
      <Hero />
      <About />
      <Portfolio />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
