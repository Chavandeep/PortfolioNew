
import { useEffect, useState } from 'react';
import { Github, Linkedin, FileText } from 'lucide-react';
import { cn } from '@/lib/utils';

interface NavbarProps {
  name: string;
}

const Navbar = ({ name }: NavbarProps) => {
  const [scrolled, setScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  return (
    <nav className={cn(
      "fixed top-0 w-full z-50 transition-all duration-300 ease-in-out px-6 md:px-12 py-4",
      scrolled ? "bg-black/50 backdrop-blur-lg" : "bg-transparent"
    )}>
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <a href="#" className="text-2xl md:text-2xl font-display font-bold nav-gradient-text">
          Deep Chavan 
        </a>
        <div className="flex items-center space-x-6">
          <a 
            href="#" 
            className="hidden md:block text-sm font-medium text-white/80 hover:text-white transition-colors"
          >
            Home
          </a>
          <a 
            href="#skills" 
            className="hidden md:block text-sm font-medium text-white/80 hover:text-white transition-colors"
          >
            Skills
          </a>
          <a 
            href="#journey" 
            className="hidden md:block text-sm font-medium text-white/80 hover:text-white transition-colors"
          >
            Journey
          </a>
          <a 
            href="#projects" 
            className="hidden md:block text-sm font-medium text-white/80 hover:text-white transition-colors"
          >
            Projects
          </a>
          <a 
            href="#contact" 
            className="hidden md:block text-sm font-medium text-white/80 hover:text-white transition-colors"
          >
            Contact
          </a>
          <div className="w-px h-6 bg-white/20 hidden md:block"></div>
          <a 
            href="/resume.pdf" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center space-x-1 text-white/80 hover:text-white transition-colors"
            aria-label="Resume"
          >
            <FileText className="w-5 h-5 transition-all duration-300 hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]" />
            <span className="hidden md:inline text-sm font-medium">Resume</span>
          </a>
          <a 
            href="https://github.com/Chavandeep" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-white/80 hover:text-white transition-all duration-300 hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]"
            aria-label="GitHub"
          >
            <Github className="w-5 h-5" />
          </a>
          <a 
            href="https://linkedin.com/in/deep-chavan-378a82271" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-white/80 hover:text-white transition-all duration-300 hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-5 h-5" />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
