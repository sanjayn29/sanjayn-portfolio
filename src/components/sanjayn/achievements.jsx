import { useEffect, useRef, useState } from 'react';

const Achievements = () => {
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

  const achievements = [
    {
      title: 'Best AI Innovation Award',
      organization: 'Global Tech Summit 2023',
      description: 'Recognized for developing a breakthrough neural architecture that improved inference speed by 300% while maintaining accuracy.',
      icon: '🏆',
    },
    {
      title: 'Top 1% Kaggle Grandmaster',
      organization: 'Kaggle',
      description: 'Achieved Grandmaster status by winning multiple machine learning competitions and contributing high-quality datasets.',
      icon: '🎯',
    },
    {
      title: 'Published Research Paper',
      organization: 'NeurIPS 2023',
      description: 'Co-authored a paper on efficient transformer architectures, cited over 100 times within the first year of publication.',
      icon: '📄',
    },
    {
      title: 'Open Source Contributor',
      organization: 'GitHub',
      description: 'Maintained popular ML library with 10K+ stars. Contributions to TensorFlow and PyTorch ecosystem.',
      icon: '⭐',
    },
    {
      title: 'Hackathon Champion',
      organization: 'Microsoft AI Hackathon',
      description: 'Led a team to victory by building an AI-powered accessibility tool for visually impaired users in just 48 hours.',
      icon: '🚀',
    },
    {
      title: 'Dean\'s Excellence Award',
      organization: 'Stanford University',
      description: 'Graduated with highest honors in Computer Science with a focus on Artificial Intelligence and Machine Learning.',
      icon: '🎓',
    },
  ];

  return (
    <section id="achievements" ref={sectionRef} className="relative py-24 md:py-32 bg-space-section">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-silver-primary mb-4">
            Achievements
          </h2>
          <div className="section-divider max-w-xs mx-auto" />
        </div>

        {/* Achievements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievements.map((achievement, index) => (
            <div
              key={index}
              className={`group glass-card p-6 transition-all duration-700 hover-glow-blue ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: `${(index + 1) * 100}ms` }}
            >
              {/* Icon */}
              <div className="text-4xl mb-4">{achievement.icon}</div>

              {/* Title */}
              <h3 className="font-display text-lg font-semibold text-silver-primary mb-2 group-hover:text-glow-blue transition-colors duration-300">
                {achievement.title}
              </h3>

              {/* Organization */}
              <p className="text-glow-blue text-sm font-medium mb-3">
                {achievement.organization}
              </p>

              {/* Description */}
              <p className="text-silver-muted text-sm leading-relaxed">
                {achievement.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
