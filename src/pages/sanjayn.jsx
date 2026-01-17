import { Helmet } from 'react-helmet-async';
import Navbar from '../components/sanjayn/navbar';
import Hero from '../components/sanjayn/hero';
import About from '../components/sanjayn/about';
import Skills from '../components/sanjayn/skills';
import Experience from '../components/sanjayn/experience';
import Projects from '../components/sanjayn/projects';
import Achievements from '../components/sanjayn/achievements';
import Certifications from '../components/sanjayn/certifications';
import Contact from '../components/sanjayn/contact';
import Footer from '../components/sanjayn/footer';
import SpaceBackground from '../components/sanjayn/SpaceBackground';
import StarCursor from '../components/sanjayn/StarCursor';

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
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Achievements />
        <Certifications />
        <Contact />
      </main>
      <Footer />
    </div>
    </>
  );
};

export default SanjayN;
