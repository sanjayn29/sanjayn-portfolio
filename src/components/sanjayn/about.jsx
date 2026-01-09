import { useState, useEffect, useRef } from 'react';
import SanjayImage from '../../assert/img3.jpg';
import { FaPhone } from 'react-icons/fa';
import { MdLocationOn, MdEmail } from 'react-icons/md';
import { SiLeetcode, SiGithub, SiLinkedin } from 'react-icons/si';

const About = () => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="about" ref={sectionRef} className="relative py-16 md:py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
<div className={`text-center mb-12 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
  <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-silver-primary mb-4">
    About <span className="text-glow-cyan">Me</span>
  </h2>
  <div className="section-divider max-w-xs mx-auto" />
  <p className="text-silver-secondary text-lg md:text-xl mt-6 max-w-3xl mx-auto leading-relaxed">
    A B.Tech student in Artificial Intelligence and Machine Learning, passionate about solving real-world problems through innovative software and intelligent systems.
    <span className="text-glow-cyan font-medium"> Let's connect and collaborate</span>
  </p>
</div>

        {/* Content Layout */}
        <div className={`grid lg:grid-cols-2 gap-1 transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {/* Left: Image */}
          <div className="relative flex justify-center lg:justify-start">
            <div className="relative">
              <img
                src={SanjayImage}
                alt="Sanjay N"
                className="w-full h-auto max-w-sm rounded-2xl shadow-2xl border-4 border-glow-cyan/20 object-contain"
              />
            </div>
          </div>

          {/* Right: Content */}
          <div className="space-y-6 text-left">
            

            {/* Contact Info */}
            <div className="space-y-3 pt-4 border-t border-border/30">
              <div className="flex items-center gap-3 text-silver-secondary text-base md:text-lg">
                <FaPhone className="text-glow-cyan text-2xl" />
                <span>Phone : 9080581688</span>
              </div>
              <div className="flex items-center gap-3 text-silver-secondary text-base md:text-lg">
                <MdEmail className="text-glow-cyan text-2xl" />
                <span>Email : sanjaynavaneethamurali@gmail.com</span>
              </div>
              <div className="flex items-center gap-3 text-silver-secondary text-base md:text-lg">
                <MdLocationOn className="text-glow-cyan text-2xl" />
                <span>Location : Vellore, Tamil Nadu</span>
              </div>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-4 pt-4">
              <a
                href="https://www.linkedin.com/in/sanjayn29"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative p-3 rounded-xl bg-space-card/50 border border-border/30 hover:bg-glow-cyan/10 transition-all duration-300"
                aria-label="LinkedIn"
              >
                <SiLinkedin className="w-8 h-8 text-silver-secondary group-hover:text-glow-cyan transition-colors" />
              </a>
              <a
                href="https://github.com/sanjayn29"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative p-3 rounded-xl bg-space-card/50 border border-border/30 hover:bg-glow-cyan/10 transition-all duration-300"
                aria-label="GitHub"
              >
                <SiGithub className="w-8 h-8 text-silver-secondary group-hover:text-glow-cyan transition-colors" />
              </a>
              <a
                href="https://leetcode.com/sanjayn29/"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative p-3 rounded-xl bg-space-card/50 border border-border/30 hover:bg-glow-cyan/10 transition-all duration-300"
                aria-label="LeetCode"
              >
                <SiLeetcode className="w-8 h-8 text-silver-secondary group-hover:text-glow-cyan transition-colors" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;