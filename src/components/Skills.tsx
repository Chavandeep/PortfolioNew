import { useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';

interface Skill {
  name: string;
  icon: string;
}

interface SkillsProps {
  skills: Skill[];
}

const Skills = ({ skills }: SkillsProps) => {
  const sectionRef = useRef<HTMLElement>(null);
  const skillItemsRef = useRef<(HTMLDivElement | null)[]>([]);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
          }
        });
      },
      { threshold: 0.1 }
    );
    
    const currentSkillItems = skillItemsRef.current;
    currentSkillItems.forEach((item) => {
      if (item) observer.observe(item);
    });
    
    return () => {
      currentSkillItems.forEach((item) => {
        if (item) observer.unobserve(item);
      });
    };
  }, [skills.length]);
  
  return (
    <section id="skills" ref={sectionRef} className="py-16 md:py-24 bg-gradient-to-b from-background to-gray-900 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12 reveal-animation">
          <h2 className="text-3xl md:text-4xl font-bold font-display mb-4">My Skills</h2>
          <p className="text-white/70 max-w-2xl mx-auto">
            Technologies and tools I've worked with and am proficient in.
          </p>
        </div>
        
        <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 lg:gap-8 reveal-animation">
          {skills.map((skill, index) => (
            <div 
              key={skill.name} 
              ref={(el) => (skillItemsRef.current[index] = el)}
              className={cn(
                "flex flex-col items-center reveal-animation",
                "transition-all duration-300"
              )}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="glass-card p-4 rounded-lg mb-3 w-16 h-16 flex items-center justify-center">
                <img 
                  src={skill.icon} 
                  alt={skill.name} 
                  className="w-10 h-10 skill-icon"
                />
              </div>
              <span className="text-sm text-white/80">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
