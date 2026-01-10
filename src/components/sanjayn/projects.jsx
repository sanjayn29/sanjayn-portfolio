import { useEffect, useRef, useState } from 'react';

const Projects = () => {
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

  const projects = [
    {
      title: 'Kongu TBI Website Redesign',
      description: 'Redesigned university incubator website with modern UI and improved user experience. Handled full deployment pipeline from development to production hosting. Role: Full Stack Developer | Sept 2025 - Present',
      tech: ['React', 'TailwindCSS', 'Deployment Pipeline'],
      category: 'Web Development',
      link: 'https://antiquewhite-rat-516664.hostingersite.com',
    },
    {
      title: 'Aram Eyecare – E-commerce Platform',
      description: 'Developed full-stack e-commerce site with product catalog, cart, and order management. Managed deployment, DNS, and SSL configuration for production. Role: Full Stack Developer | July 2025 - Aug 2025',
      tech: ['React', 'TailwindCSS', 'Payment APIs', 'VPS Hosting'],
      category: 'E-commerce',
      link: 'https://www.arameyecare.com',
    },
    {
      title: 'Credit Card Fraud Defense',
      description: 'Implemented pre-trained machine learning models to classify credit card transactions as fraudulent or legitimate, addressing real-world class imbalance problems. Role: Machine Learning Developer | Apr 2025 - May 2025',
      tech: ['Python', 'Scikit-learn', 'Pandas', 'NumPy', 'SMOTE'],
      category: 'AI/ML',
      link: 'https://github.com/sanjayn29/Mini-Project-ML-CCFD',
    },
  ];

  return (
    <section id="projects" ref={sectionRef} className="relative py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-silver-primary mb-4">
            Featured Projects
          </h2>
          <div className="section-divider max-w-xs mx-auto" />
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`group glass-card p-6 transition-all duration-700 hover-glow-cyan ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: `${(index + 1) * 100}ms` }}
            >
              {/* Category Badge */}
              <span className="inline-block px-3 py-1 bg-glow-cyan/10 border border-glow-cyan/30 rounded-full text-glow-cyan text-xs font-medium mb-4">
                {project.category}
              </span>

              {/* Title */}
              <h3 className="font-display text-xl font-semibold text-silver-primary mb-3 group-hover:text-glow-cyan transition-colors duration-300">
                {project.title}
              </h3>

              {/* Description */}
              <p className="text-silver-muted text-sm leading-relaxed mb-5">
                {project.description}
              </p>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 mb-5">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="px-2 py-1 bg-space-deep border border-border/50 rounded text-silver-secondary text-xs"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* View Project Link */}
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 flex items-center text-silver-muted group-hover:text-glow-cyan transition-colors duration-300 hover:underline"
              >
                <span className="text-sm font-medium">View Project</span>
                <svg
                  className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform duration-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;