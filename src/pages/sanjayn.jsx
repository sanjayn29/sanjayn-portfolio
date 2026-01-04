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

const SanjayN = () => {
  return (
    <div className="min-h-screen bg-space-deep relative">
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
  );
};

export default SanjayN;
