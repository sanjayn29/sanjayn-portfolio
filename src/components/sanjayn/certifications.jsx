import { useEffect, useRef, useState } from 'react';

const Certifications = () => {
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

  const certifications = [
    {
      title: 'AWS Solutions Architect Professional',
      issuer: 'Amazon Web Services',
      date: '2023',
      credentialId: 'AWS-SAP-2023',
    },
    {
      title: 'Google Cloud Professional ML Engineer',
      issuer: 'Google Cloud',
      date: '2023',
      credentialId: 'GCP-ML-2023',
    },
    {
      title: 'TensorFlow Developer Certificate',
      issuer: 'Google',
      date: '2022',
      credentialId: 'TF-DEV-2022',
    },
    {
      title: 'Deep Learning Specialization',
      issuer: 'DeepLearning.AI',
      date: '2022',
      credentialId: 'DL-SPEC-2022',
    },
    {
      title: 'Kubernetes Administrator (CKA)',
      issuer: 'Cloud Native Computing Foundation',
      date: '2022',
      credentialId: 'CKA-2022',
    },
    {
      title: 'Microsoft Azure AI Engineer',
      issuer: 'Microsoft',
      date: '2021',
      credentialId: 'AZ-AI-2021',
    },
    {
      title: 'MongoDB Developer Associate',
      issuer: 'MongoDB University',
      date: '2021',
      credentialId: 'MDB-DEV-2021',
    },
    {
      title: 'Stanford Machine Learning',
      issuer: 'Coursera / Stanford',
      date: '2020',
      credentialId: 'STAN-ML-2020',
    },
  ];

  return (
    <section id="certifications" ref={sectionRef} className="relative py-24 md:py-32 bg-space-deep">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-silver-primary mb-4">
            Certifications
          </h2>
          <div className="section-divider max-w-xs mx-auto" />
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className={`group flex items-start gap-4 p-5 glass-card transition-all duration-700 hover-glow-cyan ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: `${(index + 1) * 75}ms` }}
            >
              {/* Certificate Icon */}
              <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-lg bg-glow-cyan/10 border border-glow-cyan/30 group-hover:bg-glow-cyan/20 transition-colors duration-300">
                <svg
                  className="w-6 h-6 text-glow-cyan"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                  />
                </svg>
              </div>

              {/* Certificate Details */}
              <div className="flex-1 min-w-0">
                <h3 className="font-display text-base font-semibold text-silver-primary group-hover:text-glow-cyan transition-colors duration-300 truncate">
                  {cert.title}
                </h3>
                <p className="text-silver-secondary text-sm mt-1">{cert.issuer}</p>
                <div className="flex items-center gap-3 mt-2 text-silver-muted text-xs">
                  <span>{cert.date}</span>
                  <span className="w-1 h-1 rounded-full bg-border" />
                  <span className="font-mono">{cert.credentialId}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
