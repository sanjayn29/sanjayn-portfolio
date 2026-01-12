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
      title: 'Generative AI with Diffusion model',
      issuer: 'NVIDIA',
      date: 'Oct 2025',
      credentialId: 'xs_A4j5iRO-Z55I__r8wkw',
      link: 'https://learn.nvidia.com/certificates?id=xs_A4j5iRO-Z55I__r8wkw',
    },
    {
      title: 'AI Foundations Associate',
      issuer: 'Oracle',
      date: 'Aug 2025',
      credentialId: 'E9F1F7F2999AABDBE901A6E587227E9101B65FBEDF0734E888729382D663269A',
      link: 'https://catalog-education.oracle.com/pls/certview/sharebadge?id=E9F1F7F2999AABDBE901A6E587227E9101B65FBEDF0734E888729382D663269A',
    },
    {
      title: 'AI Vector Search',
      issuer: 'Oracle',
      date: 'Aug 2025',
      credentialId: '37254E3ABB41A34105032D1EA4C4AF4DF6936448EC4C42A15CF20AE9BD04B8B7',
      link: 'https://catalog-education.oracle.com/pls/certview/sharebadge?id=37254E3ABB41A34105032D1EA4C4AF4DF6936448EC4C42A15CF20AE9BD04B8B7',
    },
    {
      title: 'Data Science',
      issuer: 'Oracle',
      date: 'Aug 2025',
      credentialId: 'D086E3F7FD758BC6D59D1F6E47FC331ABFBD2B7A72737FF1EF77B78241C8F5CD',
      link: 'https://catalog-education.oracle.com/pls/certview/sharebadge?id=D086E3F7FD758BC6D59D1F6E47FC331ABFBD2B7A72737FF1EF77B78241C8F5CD',
    },
    {
      title: 'Generative AI',
      issuer: 'Oracle',
      date: 'Aug 2025',
      credentialId: '3AD822F6377BB599ACC430174A2129B30211CE58A13DA79DC787BCAE46FCD5FC',
      link: 'https://catalog-education.oracle.com/pls/certview/sharebadge?id=3AD822F6377BB599ACC430174A2129B30211CE58A13DA79DC787BCAE46FCD5FC',
    },
    {
      title: 'GenAI Powered Data Analytics Job Simulation',
      issuer: 'Forage',
      date: 'Aug 2025',
      credentialId: '1756282963815',
      link: 'https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/ifobHAoMjQs9s6bKS/gMTdCXwDdLYoXZ3wG_ifobHAoMjQs9s6bKS_AajPgBJNNRMkfmBnQ_1756282963815_completion_certificate.pdf',
    },
    {
      title: 'JavaScript for Beginners: The Complete Course for Beginners',
      issuer: 'Udemy',
      date: 'Feb 2025',
      credentialId: 'UC-75dbad80-c65b-4310-895d-86bec9541368',
      link: 'https://www.udemy.com/certificate/UC-75dbad80-c65b-4310-895d-86bec9541368/',
    },
    {
      title: 'Python Complete Course For Python Beginners',
      issuer: 'Udemy',
      date: 'Dec 2024',
      credentialId: 'UC-dc53b644-02c4-4c46-8c98-ef071d742a77',
      link: 'https://www.udemy.com/certificate/UC-dc53b644-02c4-4c46-8c98-ef071d742a77/',
    },
    {
      title: 'The Complete C Programming Course for Basic to Expert',
      issuer: 'Udemy',
      date: 'Jul 2024',
      credentialId: 'UC-5c4ead9c-2d64-4508-87ea-cee088e67861',
      link: 'https://www.udemy.com/certificate/UC-5c4ead9c-2d64-4508-87ea-cee088e67861/',
    },
    {
      title: 'CSS Fundamentals: Comprehensive Training for Web Developers',
      issuer: 'Udemy',
      date: 'Jul 2024',
      credentialId: 'UC-63e68790-9d1f-4fef-820a-e10b8a9c119a',
      link: 'https://www.udemy.com/certificate/UC-63e68790-9d1f-4fef-820a-e10b8a9c119a/',
    },
    {
      title: 'Learn HTML Basic To Advanced',
      issuer: 'Udemy',
      date: 'Jul 2024',
      credentialId: 'UC-5a5d2ded-be49-4944-a2b8-a1ed6901b2cf',
      link: 'https://www.udemy.com/certificate/UC-5a5d2ded-be49-4944-a2b8-a1ed6901b2cf/',
    },
    
    {
      title: 'Data Structures in C',
      issuer: 'Great Learning',
      date: 'Jul 2024',
      credentialId: 'IZHJODPQ',
      link: 'https://www.mygreatlearning.com/certificate/IZHJODPQ',
    },
  ];

  return (
    <section id="certifications" ref={sectionRef} className="relative py-24 md:py-32">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
<div className={`text-center mb-12 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
  <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-silver-primary mb-4">
    Professional <span className="text-glow-cyan">Certifications</span>
  </h2>
  <div className="section-divider max-w-xs mx-auto" />
  <p className="text-silver-secondary text-lg md:text-xl mt-6 max-w-3xl mx-auto leading-relaxed">
    Explore my recognized achievements and credentials in AI, machine learning, and software development from top industry leaders.
  </p>
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
                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-mono hover:text-glow-cyan transition-colors duration-300 underline decoration-1 underline-offset-2"
                  >
                    click to view
                  </a>
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