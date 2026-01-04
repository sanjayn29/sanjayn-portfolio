import { useEffect, useRef, useState } from 'react';

const Skills = () => {
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

  const skillCategories = [
    {
      title: 'AI & Machine Learning',
      skills: ['TensorFlow', 'PyTorch', 'Scikit-learn', 'Keras', 'OpenCV', 'NLP', 'Computer Vision', 'Deep Learning'],
    },
    {
      title: 'Programming Languages',
      skills: ['Python', 'JavaScript', 'TypeScript', 'Java', 'C++', 'SQL', 'R', 'Go'],
    },
    {
      title: 'Web Development',
      skills: ['React', 'Node.js', 'Next.js', 'FastAPI', 'Django', 'GraphQL', 'REST APIs', 'Tailwind CSS'],
    },
    {
      title: 'Cloud & DevOps',
      skills: ['AWS', 'GCP', 'Docker', 'Kubernetes', 'CI/CD', 'Terraform', 'MLOps', 'Git'],
    },
    {
      title: 'Data & Analytics',
      skills: ['Pandas', 'NumPy', 'Spark', 'PostgreSQL', 'MongoDB', 'Redis', 'Tableau', 'Power BI'],
    },
  ];

  return (
    <section id="skills" ref={sectionRef} className="relative py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-silver-primary mb-4">
            Skills & Technologies
          </h2>
          <div className="section-divider max-w-xs mx-auto" />
        </div>

        {/* Skills Grid */}
        <div className="space-y-10">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={category.title}
              className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: `${(categoryIndex + 1) * 150}ms` }}
            >
              <h3 className="font-display text-lg md:text-xl font-semibold text-silver-metallic mb-4">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skill}
                    className="group px-4 py-2 bg-space-card border border-border rounded-lg text-silver-secondary text-sm font-medium transition-all duration-300 hover:border-glow-cyan/50 hover:text-silver-primary hover-glow-cyan cursor-default"
                    style={{ transitionDelay: `${skillIndex * 50}ms` }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
