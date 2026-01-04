const Hero = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center galaxy-bg stars-bg overflow-hidden"
    >
      {/* Ambient Glow Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-glow-cyan/5 rounded-full blur-3xl animate-pulse-glow" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-glow-blue/5 rounded-full blur-3xl" style={{ animationDelay: '1.5s' }} />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Greeting */}
        <p className="animate-fade-up text-silver-secondary text-sm md:text-base tracking-widest uppercase mb-6">
          Welcome to my universe
        </p>

        {/* Main Heading */}
        <h1 className="animate-fade-up animate-delay-100 font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-6">
          <span className="bg-gradient-silver bg-clip-text text-transparent bg-[length:200%_auto] animate-shimmer">
            Sanjay N
          </span>
        </h1>

        {/* Subtitle */}
        <p className="animate-fade-up animate-delay-200 text-silver-secondary text-lg md:text-xl lg:text-2xl max-w-2xl mx-auto mb-4">
          AI/ML Engineer & Full Stack Developer
        </p>

        {/* Description */}
        <p className="animate-fade-up animate-delay-300 text-silver-muted text-base md:text-lg max-w-xl mx-auto mb-10">
          Crafting intelligent solutions at the intersection of artificial intelligence and elegant software engineering
        </p>

        {/* CTA Buttons */}
        <div className="animate-fade-up animate-delay-400 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#projects"
            className="group relative px-8 py-4 bg-space-card border border-glow-cyan/30 rounded-xl text-silver-primary font-medium transition-all duration-500 hover-glow-cyan hover:border-glow-cyan/60"
          >
            <span className="relative z-10">View My Work</span>
          </a>
          <a
            href="#contact"
            className="px-8 py-4 text-silver-secondary hover:text-silver-primary border border-border/50 rounded-xl transition-all duration-300 hover:border-silver-muted"
          >
            Get In Touch
          </a>
        </div>

        {/* Scroll Indicator */}
        <div className="animate-fade-up animate-delay-500 absolute bottom-10 left-1/2 -translate-x-1/2">
          <div className="flex flex-col items-center text-silver-muted">
            <span className="text-xs tracking-wider mb-3">SCROLL</span>
            <div className="w-px h-12 bg-gradient-to-b from-silver-muted to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
