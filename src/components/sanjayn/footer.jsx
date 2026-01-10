import { SiLeetcode, SiGithub, SiLinkedin } from 'react-icons/si';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: 'LinkedIn',
      href: 'https://www.linkedin.com/in/sanjayn29',
      icon: SiLinkedin,
    },
    {
      name: 'GitHub',
      href: 'https://github.com/sanjayn29',
      icon: SiGithub,
    },
    {
      name: 'LeetCode',
      href: 'https://leetcode.com/sanjayn29/',
      icon: SiLeetcode,
    },
  ];

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

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="relative py-12 bg-space-deep border-t border-border/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Logo / Name */}
          <div className="text-center md:text-left">
            <div className="relative flex items-end justify-center md:justify-start text-xl md:text-2xl lg:text-3xl font-display font-bold">
              {/* S with Hat */}
              <span className="relative inline-block mr-1">
                {/* Top Hat */}
                <span className="absolute -top-4 left-1/2 -translate-x-1/2">
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
                <span className="text-glow-cyan">S</span>
              </span>
              {/* ANJAY */}
              <span className="bg-gradient-to-r from-glow-cyan via-silver-metallic to-glow-blue bg-[length:200%_auto] bg-clip-text text-transparent uppercase tracking-wide">ANJAY</span>
              {/* Space */}
              <span className="w-2" />
              {/* N Text */}
              <span className="relative inline-block">
                <span className="bg-gradient-to-r from-glow-cyan via-silver-metallic to-glow-blue bg-[length:200%_auto] bg-clip-text text-transparent uppercase tracking-wide">N</span>
              </span>
            </div>
            <p className="text-silver-muted text-lg mt-3 text-center md:text-left leading-relaxed">
              A Freelancer
              <br className="hidden md:block" />
              <span className="hidden md:inline">AI/ML Engineer | Full Stack Developer</span>
            </p>
          </div>

          {/* Navbar Links */}
          <div className="flex flex-col items-center space-y-2">
            <h3 className="text-silver-primary text-sm font-medium mb-3 text-center">Quick Links</h3>
            <div className="flex flex-col space-y-1 text-center">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className="text-silver-muted hover:text-glow-cyan transition-colors duration-300 text-sm py-1 w-full text-center"
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>

          {/* Social Links */}
          <div className="flex flex-col items-center md:items-center space-y-3">
            <h3 className="text-silver-primary text-sm font-medium mb-2">Connect</h3>
            <div className="flex items-center justify-center md:justify-end gap-4">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 text-silver-muted hover:text-glow-cyan transition-colors duration-300"
                  aria-label={link.name}
                >
                  <link.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-border/30 pt-6 text-center">
          <p className="text-silver-muted text-sm">
            © {currentYear} Sanjay N | All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;