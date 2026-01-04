import { useState, useEffect } from 'react';

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('hero');
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { id: 'hero', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'achievements', label: 'Achievements' },
    { id: 'certifications', label: 'Certifications' },
    { id: 'contact', label: 'Contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      const sections = navLinks.map(link => document.getElementById(link.id));
      const scrollPosition = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navLinks[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'glass border-b border-border/30'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Animated Logo with Character */}
          <button
            onClick={() => scrollToSection('hero')}
            className="group relative text-2xl md:text-3xl font-display font-bold"
          >
            <div className="relative flex items-end">
              {/* S with Hat */}
              <span className="relative inline-block">
                {/* Top Hat */}
                <span className="absolute -top-4 left-1/2 -translate-x-1/2 transition-all duration-300 group-hover:-translate-y-1 group-hover:rotate-[-10deg]">
                  <svg width="20" height="16" viewBox="0 0 20 16" className="drop-shadow-lg">
                    {/* Hat brim */}
                    <ellipse cx="10" cy="14" rx="10" ry="2" fill="#22D3EE" />
                    {/* Hat top */}
                    <rect x="4" y="4" width="12" height="10" rx="1" fill="#0891B2" />
                    <rect x="4" y="4" width="12" height="3" rx="1" fill="#22D3EE" />
                    {/* Hat band */}
                    <rect x="4" y="10" width="12" height="2" fill="#60A5FA" />
                    {/* Shine */}
                    <rect x="6" y="5" width="2" height="4" rx="1" fill="white" opacity="0.3" />
                  </svg>
                </span>
                <span className="text-glow-cyan group-hover:animate-bounce-subtle">S</span>
              </span>

              {/* anjay */}
              <span className="bg-gradient-to-r from-glow-cyan via-silver-metallic to-glow-blue bg-[length:200%_auto] bg-clip-text text-transparent animate-shimmer">
                anjay
              </span>

              {/* Space */}
              <span className="w-2" />

              {/* N with Eyes */}
              <span className="relative inline-block">
                <span className="text-glow-blue group-hover:animate-bounce-subtle" style={{ animationDelay: '0.1s' }}>N</span>
                {/* Eyes on N */}
                <span className="absolute top-[2px] left-1/2 -translate-x-1/2 flex gap-[6px] pointer-events-none">
                  {/* Left eye */}
                  <span className="relative w-[6px] h-[6px] bg-white rounded-full overflow-hidden shadow-lg">
                    <span className="absolute w-[3px] h-[3px] bg-space-deep rounded-full animate-look-around" />
                  </span>
                  {/* Right eye */}
                  <span className="relative w-[6px] h-[6px] bg-white rounded-full overflow-hidden shadow-lg">
                    <span className="absolute w-[3px] h-[3px] bg-space-deep rounded-full animate-look-around" style={{ animationDelay: '0.1s' }} />
                  </span>
                </span>
                {/* Blink effect on hover */}
                <span className="absolute top-[2px] left-1/2 -translate-x-1/2 flex gap-[6px] opacity-0 group-hover:animate-blink pointer-events-none">
                  <span className="w-[6px] h-[2px] bg-glow-cyan rounded-full" />
                  <span className="w-[6px] h-[2px] bg-glow-cyan rounded-full" />
                </span>
              </span>
            </div>

            {/* Glow effect behind */}
            <span className="absolute inset-0 -z-10 blur-xl bg-gradient-to-r from-glow-cyan/30 via-glow-blue/20 to-glow-cyan/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-full scale-150" />
            
            {/* Floating stars around */}
            <span className="absolute -top-2 -right-3 text-glow-cyan text-sm animate-twinkle">✦</span>
            <span className="absolute -bottom-1 -left-2 text-glow-blue text-xs animate-twinkle" style={{ animationDelay: '0.5s' }}>✧</span>
            <span className="absolute top-0 right-1/3 text-silver-metallic text-[8px] animate-twinkle" style={{ animationDelay: '1s' }}>•</span>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className={`relative px-4 py-2 text-base font-medium transition-all duration-300 rounded-lg ${
                  activeSection === link.id
                    ? 'text-glow-cyan'
                    : 'text-silver-secondary hover:text-silver-primary'
                }`}
              >
                {link.label}
                {activeSection === link.id && (
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-6 h-0.5 bg-glow-cyan rounded-full glow-cyan" />
                )}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-silver-secondary hover:text-silver-primary transition-colors"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden transition-all duration-300 overflow-hidden ${
          isMobileMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="glass border-t border-border/30 px-4 py-4 space-y-2">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollToSection(link.id)}
              className={`block w-full text-left px-4 py-3 rounded-lg text-base font-medium transition-all duration-300 ${
                activeSection === link.id
                  ? 'text-glow-cyan bg-space-card'
                  : 'text-silver-secondary hover:text-silver-primary hover:bg-space-card/50'
              }`}
            >
              {link.label}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
