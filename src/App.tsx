import React, { lazy, Suspense } from 'react';
import { Analytics } from "@vercel/analytics/react"
import Hero from './components/Hero';

// Lazy load non-critical components
const About = lazy(() => import('./components/About'));
const Portfolio = lazy(() => import('./components/Portfolio'));
const Education = lazy(() => import('./components/Education'));
const Certifications = lazy(() => import('./components/Certifications'));
const Skills = lazy(() => import('./components/Skills'));
const Contact = lazy(() => import('./components/Contact'));
const Footer = lazy(() => import('./components/Footer'));

// Loading fallback component
const LoadingFallback = () => (
  <div className="flex items-center justify-center py-20">
    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-cyan-500"></div>
  </div>
);

const App: React.FC = () => {
  return (
    <div className="App">
      <Hero />
      <Suspense fallback={<LoadingFallback />}>
        <About />
        <Portfolio />
        <Education />
        <Certifications />
        <Skills />
        <Contact />
        <Footer />
      </Suspense>
      <Analytics />
    </div>
  );
};

export default App;
