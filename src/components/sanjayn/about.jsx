import { useEffect, useRef, useState } from 'react';

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

  return (
    <section id="about" ref={sectionRef} className="relative py-24 md:py-32 bg-space-section">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-silver-primary mb-4">
            About Me
          </h2>
          <div className="section-divider max-w-xs mx-auto" />
        </div>

        {/* Content */}
        <div className={`space-y-6 transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <p className="text-silver-secondary text-lg md:text-xl leading-relaxed">
            I am a passionate technologist dedicated to pushing the boundaries of what's possible 
            with artificial intelligence and machine learning. With a deep understanding of both 
            theoretical foundations and practical applications, I build systems that bridge the 
            gap between complex algorithms and real-world impact.
          </p>

          <p className="text-silver-muted text-base md:text-lg leading-relaxed">
            My journey in technology began with a curiosity about how machines can learn and 
            adapt. This curiosity has evolved into expertise across the full stack of AI/ML 
            development—from designing neural network architectures to deploying scalable 
            production systems. I believe in writing clean, maintainable code that stands 
            the test of time.
          </p>

          <p className="text-silver-muted text-base md:text-lg leading-relaxed">
            When I'm not coding, you'll find me exploring the latest research papers, 
            contributing to open-source projects, or mentoring the next generation of 
            developers. I'm driven by the belief that technology should be accessible, 
            ethical, and transformative.
          </p>
        </div>

        {/* Stats */}
        <div className={`grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 transition-all duration-700 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {[
            { value: '5+', label: 'Years Experience' },
            { value: '50+', label: 'Projects Completed' },
            { value: '20+', label: 'Technologies' },
            { value: '10+', label: 'Certifications' },
          ].map((stat, index) => (
            <div
              key={index}
              className="text-center p-6 rounded-xl bg-space-card/50 border border-border/30"
            >
              <div className="font-display text-3xl md:text-4xl font-bold text-glow-cyan mb-2">
                {stat.value}
              </div>
              <div className="text-silver-muted text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
