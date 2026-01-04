import { useEffect, useRef, useState } from 'react';

const Experience = () => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const experiences = [
    {
      title: 'Senior AI Engineer',
      company: 'TechCorp AI Solutions',
      period: '2022 - Present',
      description: 'Leading the development of enterprise-scale ML platforms. Architecting and deploying production-grade AI systems serving millions of users. Mentoring junior engineers and establishing best practices for MLOps.',
      highlights: ['Led team of 8 engineers', 'Reduced inference latency by 60%', 'Deployed 15+ production models'],
    },
    {
      title: 'Machine Learning Engineer',
      company: 'DataDriven Inc.',
      period: '2020 - 2022',
      description: 'Developed computer vision models for autonomous systems. Built end-to-end ML pipelines from data collection to deployment. Collaborated with cross-functional teams to integrate AI capabilities into products.',
      highlights: ['Improved model accuracy by 25%', 'Built real-time inference system', 'Published 3 research papers'],
    },
    {
      title: 'Full Stack Developer',
      company: 'Innovation Labs',
      period: '2019 - 2020',
      description: 'Built scalable web applications using modern frameworks. Implemented RESTful APIs and microservices architecture. Contributed to the development of internal tools and developer experience.',
      highlights: ['Developed 10+ web applications', 'Migrated legacy systems to cloud', 'Improved CI/CD pipeline efficiency'],
    },
    {
      title: 'Software Engineering Intern',
      company: 'StartupXYZ',
      period: '2018 - 2019',
      description: 'Gained foundational experience in software development practices. Worked on frontend and backend features. Participated in agile development processes and code reviews.',
      highlights: ['Contributed to core product features', 'Learned industry best practices', 'Received full-time offer'],
    },
  ];

  return (
    <section id="experience" ref={sectionRef} className="relative py-24 md:py-32">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-silver-primary mb-4">
            Experience
          </h2>
          <div className="section-divider max-w-xs mx-auto" />
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-glow-cyan/50 via-border to-transparent transform md:-translate-x-px" />

          {/* Experience Items */}
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`relative transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                style={{ transitionDelay: `${(index + 1) * 200}ms` }}
              >
                {/* Timeline Dot */}
                <div className="absolute left-0 md:left-1/2 w-3 h-3 bg-glow-cyan rounded-full transform -translate-x-1 md:-translate-x-1.5 mt-2 glow-cyan" />

                {/* Content Card */}
                <div className={`ml-8 md:ml-0 md:w-[calc(50%-2rem)] ${index % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'}`}>
                  <div className="glass-card p-6 hover-glow-cyan">
                    <div className="flex flex-col md:flex-row md:items-center justify-between mb-3">
                      <h3 className="font-display text-xl font-semibold text-silver-primary">
                        {exp.title}
                      </h3>
                      <span className="text-glow-cyan text-sm font-medium mt-1 md:mt-0">
                        {exp.period}
                      </span>
                    </div>
                    <p className="text-silver-metallic font-medium mb-3">{exp.company}</p>
                    <p className="text-silver-muted text-sm leading-relaxed mb-4">
                      {exp.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {exp.highlights.map((highlight, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 bg-space-deep/50 border border-border/50 rounded-full text-silver-secondary text-xs"
                        >
                          {highlight}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
