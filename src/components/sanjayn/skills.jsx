import { useEffect, useRef, useState, useMemo } from 'react';
import { Code, Cpu, Database, Smartphone, Zap, Brain, GitBranch, CheckCircle } from 'lucide-react';

const Skills = () => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [activeCategory, setActiveCategory] = useState(null);

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

  // Flat list of all skills with categories
  const allSkills = [
    // Programming Languages
    { name: 'Java', category: 'languages', iconSrc: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' },
    { name: 'Python', category: 'languages', iconSrc: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
    { name: 'C', category: 'languages', iconSrc: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg' },
    { name: 'SQL', category: 'languages', iconSrc: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' },
    // Frontend Development
    { name: 'HTML', category: 'frontend', iconSrc: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
    { name: 'CSS', category: 'frontend', iconSrc: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
    { name: 'JavaScript', category: 'frontend', iconSrc: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
    { name: 'React.js', category: 'frontend', iconSrc: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
    { name: 'Tailwind CSS', category: 'frontend', iconSrc: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg' },
    // Backend Development
    { name: 'Node.js', category: 'backend', iconSrc: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
    { name: 'Express.js', category: 'backend', iconSrc: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg' },
    { name: 'Flask', category: 'backend', iconSrc: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg' },
    // Database & APIs
    { name: 'MongoDB', category: 'database', iconSrc: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
    { name: 'PostgreSQL', category: 'database', iconSrc: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' },
    { name: 'Firebase', category: 'database', iconSrc: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg' },
  // Machine Learning and Deep Learning Frameworks
    { name: 'NumPy', category: 'ml', iconSrc: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg' },
    { name: 'Pandas', category: 'ml', iconSrc: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg' },
    { name: 'Scikit-learn', category: 'ml', iconSrc: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/scikitlearn/scikitlearn-original.svg' },
    { name: 'TensorFlow', category: 'ml', iconSrc: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg' },
    { name: 'PyTorch', category: 'ml', iconSrc: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg' },
    { name: 'Keras', category: 'ml', iconSrc: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/keras/keras-original.svg' },
    { name: 'OpenCV', category: 'ml', iconSrc: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/opencv/opencv-original.svg' },
    // Tools    
    { name: 'Postman', category: 'tools', iconSrc: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg' },
    { name: 'Docker', category: 'tools', iconSrc: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
    { name: 'VS Code', category: 'tools', iconSrc: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg' },
    { name: 'Git & GitHub', category: 'tools', iconSrc: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg' },
    { name: 'Jupyter', category: 'tools', iconSrc: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jupyter/jupyter-original.svg' },
    { name: 'Figma', category: 'tools', iconSrc: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg' },
  ];

  const categories = [
    { key: 'languages', icon: Code, name: 'Languages', color: 'from-glow-cyan to-glow-blue' },
    { key: 'frontend', icon: Cpu, name: 'Frontend', color: 'from-glow-cyan to-glow-blue' },
    { key: 'backend', icon: Database, name: 'Backend', color: 'from-glow-cyan to-glow-blue' },
    { key: 'database', icon: Smartphone, name: 'Database', color: 'from-glow-cyan to-glow-blue' },
    { key: 'ml', icon: Zap, name: 'AI/ML', color: 'from-glow-cyan to-glow-blue' },
    { key: 'tools', icon: GitBranch, name: 'Tools', color: 'from-glow-cyan to-glow-blue' },
  ];

  // Filter skills based on the active category
  const filteredSkills = useMemo(() => {
    if (!activeCategory) {
      return allSkills;
    }
    return allSkills.filter(skill => skill.category === activeCategory);
  }, [activeCategory]);

  // Custom stagger delay calculation based on index for the grid animation
  const getStaggerDelay = (index) => {
    if (!isVisible) return '0ms';
    // Small initial delay, then stagger by 50ms per item
    return `${300 + index * 50}ms`;
  };

  // Generate random animation delay for each card
  const getFloatDelay = (index) => {
    return `${(index % 10) * 0.2}s`;
  };

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="relative min-h-screen flex flex-col items-center justify-center py-20 overflow-hidden galaxy-bg stars-bg"
    >
      <style>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-15px);
          }
        }

        .float-animation {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>

      <div className="absolute inset-0 bg-gradient-to-b from-black via-black/90 to-transparent opacity-80"></div>
      
      {/* Background Grid/Lines */}
      <div className="absolute inset-0 z-0 opacity-10">
        {[...Array(10)].map((_, i) => (
          <div
            key={i}
            className="absolute w-full h-[1px] bg-glow-cyan"
            style={{ top: `${i * 10}%` }}
          />
        ))}
        {[...Array(10)].map((_, i) => (
          <div
            key={i}
            className="absolute h-full w-[1px] bg-glow-cyan"
            style={{ left: `${i * 10}%` }}
          />
        ))}
      </div>

      <div className="relative z-10 container mx-auto px-6 max-w-7xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-6xl font-extrabold mb-4">
            <span className="text-silver-primary">Skills &</span>
            <span className="text-glow-cyan drop-shadow-[0_0_20px_rgba(34,211,238,0.8)]"> Technologies</span>
          </h2>
          <p className="max-w-3xl mx-auto text-base md:text-lg text-silver-secondary leading-relaxed">
            Explore the specialized toolsets I master across different domains to build your next project. Click a category to see the stacks!
          </p>
        </div>

        {/* Category Selector */}
        <div className="flex justify-center flex-wrap gap-3 md:gap-6 mb-10">
          {categories.map((category, index) => {
            const isActive = activeCategory === category.key;
            return (
              <button
                key={category.key}
                onClick={() => setActiveCategory(prev => (prev === category.key ? null : category.key))}
                className={`
                  flex items-center space-x-2 p-2.5 md:p-3 rounded-full font-semibold text-sm md:text-base
                  transition-all duration-300 transform shadow-lg
                  ${isActive
                    ? `bg-gradient-to-r ${category.color} text-black scale-105 shadow-glow-cyan/50`
                    : 'bg-space-card text-silver-secondary hover:bg-space-card/50 hover:scale-[1.02] border border-border/30'
                  }
                  ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
                `}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <category.icon size={18} className={isActive ? 'text-black' : 'text-glow-cyan'} />
                <span>{category.name}</span>
                {isActive && <CheckCircle size={14} className="text-black ml-1" />}
              </button>
            );
          })}
          {/* Reset button */}
          {activeCategory && (
            <button
              onClick={() => setActiveCategory(null)}
              className="flex items-center space-x-2 p-2.5 md:p-3 rounded-full font-semibold text-sm md:text-base bg-red-600 text-white hover:bg-red-700 transition-all duration-300"
            >
              Reset Filter
            </button>
          )}
        </div>

        {/* Animated Tech Stack Grid */}
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-7 gap-3 md:gap-4 justify-center">
          {filteredSkills.map((skill, index) => (
            <div
              key={`${skill.name}-${index}`}
              className={`
                flex flex-col items-center justify-center p-3 md:p-4 rounded-xl border-2
                bg-space-card/70 backdrop-blur-sm
                transition-all duration-700 ease-out transform
                hover:scale-110 hover:shadow-2xl hover:bg-space-card/80 hover:z-10
                float-animation
                ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-70'}
              `}
              style={{
                borderColor: activeCategory === skill.category ? 'var(--skill-color-border)' : 'border-border/30',
                '--skill-color-border': categories.find(c => c.key === skill.category)?.color || 'glow-cyan',
                transitionDelay: getStaggerDelay(index),
                animationDelay: getFloatDelay(index),
                minHeight: '90px',
              }}
            >
              {skill.iconSrc && (
                <img 
                  src={skill.iconSrc} 
                  alt={skill.name} 
                  className="w-8 h-8 md:w-10 md:h-10 mb-1.5 md:mb-2 flex items-center justify-center group-hover:scale-110 transition-transform" 
                />
              )}
              <span className="text-silver-primary text-xs md:text-sm font-semibold text-center mt-1">
                {skill.name}
              </span>
            </div>
          ))}
        </div>

        
      </div>
    </section>
  );
};

export default Skills;