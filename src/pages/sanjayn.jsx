import { Helmet } from 'react-helmet-async';
import { lazy, Suspense } from 'react';
import Navbar from '../components/sanjayn/navbar';
import Hero from '../components/sanjayn/hero';
import SpaceBackground from '../components/sanjayn/SpaceBackground';
import StarCursor from '../components/sanjayn/StarCursor';

// Lazy load heavy components
const About = lazy(() => import('../components/sanjayn/about'));
const Skills = lazy(() => import('../components/sanjayn/skills'));
const Experience = lazy(() => import('../components/sanjayn/experience'));
const Projects = lazy(() => import('../components/sanjayn/projects'));
const Achievements = lazy(() => import('../components/sanjayn/achievements'));
const Certifications = lazy(() => import('../components/sanjayn/certifications'));
const Contact = lazy(() => import('../components/sanjayn/contact'));
const Footer = lazy(() => import('../components/sanjayn/footer'));

const SanjayN = () => {
  return (
    <>
      <Helmet>
        <title>Sanjay N</title>
        <meta
          name="description"
          content="Sanjay N – Full Stack Developer, AI Engineer & Freelancer. Explore my projects, skills, achievements, and professional journey."
        />
        <meta property="og:title" content="Sanjay N | Full Stack Developer, AI Engineer & Freelancer" />
        <meta property="og:description" content="Portfolio of Sanjay N – Full Stack Developer, AI Engineer & Freelancer. Explore projects, skills, achievements, and professional journey." />
        <meta property="og:image" content="https://sanjayn.me/preview.png" />
        <meta property="og:url" content="https://sanjayn.me/" />
        <meta property="og:type" content="profile" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Sanjay N | Full Stack Developer, AI Engineer & Freelancer" />
        <meta name="twitter:description" content="Portfolio of Sanjay N – Full Stack Developer, AI Engineer & Freelancer." />
        <meta name="twitter:image" content="https://sanjayn.me/preview.png" />
      </Helmet>
      <div className="min-h-screen bg-space-deep relative">
      <StarCursor />
      <SpaceBackground />
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <Suspense fallback={<div className="min-h-screen flex items-center justify-center"><div className="text-silver-primary">Loading...</div></div>}>
          <About />
          <Skills />
          <Experience />
          <Projects />
          <Achievements />
          <Certifications />
          <Contact />
        </Suspense>
      </main>
      <Suspense fallback={null}>
        <Footer />
      </Suspense>
    </div>
    </>
  );
};

export default SanjayN;
