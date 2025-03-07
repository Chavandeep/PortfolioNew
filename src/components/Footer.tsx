import { Github, Linkedin, Mail } from 'lucide-react';

interface FooterProps {
  name: string;
}

const Footer = ({ name }: FooterProps) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 relative border-t border-white/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <a href="#" className="text-xl font-display font-bold nav-gradient-text">
              {name}
            </a>
            <p className="text-white/60 mt-1 text-sm">
              © {currentYear} All Rights Reserved
            </p>
          </div>

          <div className="flex flex-col items-center md:items-end">
            <div className="flex space-x-4 mb-4">
              <a 
                href="https://github.com/Chavandeep" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white/70 hover:text-white transition-all duration-300 hover:scale-110"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
              <a 
                href="https://linkedin.com/in/deep-chavan-378a82271" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white/70 hover:text-white transition-all duration-300 hover:scale-110"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a 
                href="mailto:deep.chavan.201085@gmail.com" 
                className="text-white/70 hover:text-white transition-all duration-300 hover:scale-110"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
            <p className="text-white/60 text-sm">
              <a href="#" className="hover:text-white transition-colors">
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};


export default Footer;
