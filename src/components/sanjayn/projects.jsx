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
      title: 'Neural Vision API',
      description: 'A production-grade computer vision API capable of real-time object detection, image segmentation, and scene understanding. Built to scale with millions of requests per day.',
      tech: ['PyTorch', 'FastAPI', 'Docker', 'AWS Lambda', 'Redis'],
      category: 'AI/ML',
    },
    {
      title: 'Intelligent Chat Platform',
      description: 'End-to-end conversational AI platform with multi-language support, context awareness, and integration capabilities for enterprise applications.',
      tech: ['Transformers', 'LangChain', 'React', 'PostgreSQL', 'WebSocket'],
      category: 'NLP',
    },
    {
      title: 'MLOps Pipeline Framework',
      description: 'Comprehensive framework for automating ML model training, validation, deployment, and monitoring. Features automated retraining and A/B testing.',
      tech: ['Kubernetes', 'MLflow', 'Airflow', 'Prometheus', 'Grafana'],
      category: 'DevOps',
    },
    {
      title: 'Predictive Analytics Dashboard',
      description: 'Interactive dashboard for business intelligence with real-time predictions, anomaly detection, and customizable reporting capabilities.',
      tech: ['React', 'D3.js', 'Python', 'TensorFlow', 'ClickHouse'],
      category: 'Analytics',
    },
    {
      title: 'Autonomous Trading System',
      description: 'Algorithmic trading system using reinforcement learning for portfolio optimization and risk management in volatile markets.',
      tech: ['Python', 'RL Algorithms', 'Time Series', 'Apache Kafka', 'MongoDB'],
      category: 'FinTech',
    },
    {
      title: 'Healthcare AI Assistant',
      description: 'HIPAA-compliant AI assistant for healthcare providers, featuring symptom analysis, medical record summarization, and clinical decision support.',
      tech: ['BERT', 'Flask', 'FHIR', 'Azure', 'ElasticSearch'],
      category: 'HealthTech',
    },
  ];

  return (
    <section id="projects" ref={sectionRef} className="relative py-24 md:py-32 bg-space-deep">
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
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="px-2 py-1 bg-space-deep border border-border/50 rounded text-silver-secondary text-xs"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Hover Arrow */}
              <div className="mt-5 flex items-center text-silver-muted group-hover:text-glow-cyan transition-colors duration-300">
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
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
