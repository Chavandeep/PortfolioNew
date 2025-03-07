import { useEffect, useRef } from 'react';
import { Button } from "@/components/ui/button";
import { ArrowDown } from 'lucide-react';

interface HeroProps {
  name: string;
  title: string;
  description: string;
  imagePath: string;
}

const Hero = ({ name, title, description, imagePath }: HeroProps) => {
  const imageRef = useRef<HTMLImageElement>(null);
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!imageRef.current) return;
      
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      
      const rotateX = (clientY - innerHeight / 2) / 50;
      const rotateY = (innerWidth / 2 - clientX) / 50;
      
      imageRef.current.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <section className="relative min-h-screen pt-20 flex items-center">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gray-900 via-background to-background"></div>
      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fade-in">
            <div className="inline-block rounded-full bg-white/10 px-4 py-1.5 backdrop-blur-md">
              <p className="text-sm font-medium text-white">Welcome to my portfolio</p>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold tracking-tight">
              Hi, I'm <span className="text-gradient">{name}</span>
            </h1>
            <h2 className="text-2xl md:text-3xl text-white/90 font-display">
              {title}
            </h2>
            <p className="text-base md:text-lg text-white/70 max-w-xl">
              {description}
            </p>
            <div className="flex flex-wrap gap-4 pt-2">
              
              <Button asChild variant="outline" size="lg" className="glass-card bg-transparent border-white/10 hover:bg-white/5">
                <a href="#projects">Contact Me</a>
              </Button>
              <Button asChild variant="outline" size="lg" className="glass-card bg-transparent border-white/10 hover:bg-white/5">
                <a href="#projects">View Projects</a>
              </Button>
            </div>
          </div>
          <div className="flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md">
              <div className="absolute inset-0 bg-blue-500/20 blur-[200px] rounded-full"></div>
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg opacity-30 blur-xl"></div>
              <div className="relative  rounded-xl p-2 w-full h-full transition-all duration-500 hover:shadow-[0_0_25px_rgba(120,120,255,0.15)]">
                <img
                  ref={imageRef}
                  src={imagePath}
                  alt="Developer"
                  className="w-full h-auto rounded-lg object-cover transition-transform duration-300"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-10 left-0 right-0 mx-auto z-20 flex justify-center animate-bounce">
        <a href="#skills" className="flex flex-col items-center text-white/50 hover:text-white transition-colors">
          <span className="text-sm mb-2">Scroll Down</span>
          <ArrowDown className="w-5 h-5" />
        </a>
      </div>
      </div>
    </section>
  );
};

export default Hero;
