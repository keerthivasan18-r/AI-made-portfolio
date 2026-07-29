import React, { useState } from 'react';
import { useScrollReveal } from './hooks/useScrollReveal';

// Layout Components
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { ScrollProgress } from './components/layout/ScrollProgress';
import { BackToTop } from './components/layout/BackToTop';
import { CustomCursor } from './components/cursor/CustomCursor';
import { LoadingScreen } from './components/loading/LoadingScreen';

// Feature Sections
import { Hero } from './components/hero/Hero';
import { About } from './components/about/About';
import { Skills } from './components/skills/Skills';
import { Projects } from './components/projects/Projects';
import { Timeline } from './components/timeline/Timeline';
import { GitHubShowcase } from './components/github/GitHubShowcase';
import { Contact } from './components/contact/Contact';

// Global Styles
import './styles/global.css';
import './styles/typography.css';
import './styles/animations.css';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  // Initialize native IntersectionObserver scroll reveals
  useScrollReveal('.reveal-on-scroll', 0.15);

  return (
    <div className="portfolio-app-root">
      {isLoading && <LoadingScreen onFinish={() => setIsLoading(false)} />}
      
      <CustomCursor />
      <ScrollProgress />
      
      {/* Background Ambient Grid & Animated Blobs */}
      <div className="bg-ambient-grid" />
      <div className="bg-blob bg-blob-1" />
      <div className="bg-blob bg-blob-2" />

      <Navbar />

      <main id="main-content">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Timeline />
        <GitHubShowcase />
        <Contact />
      </main>

      <Footer />
      <BackToTop />
    </div>
  );
}
