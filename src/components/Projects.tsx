
import { useEffect, useRef, useState } from 'react';
import { ExternalLink, Github } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  githubUrl?: string;
  liveUrl?: string;
}

interface ProjectsProps {
  projects: Project[];
}

const Projects = ({ projects }: ProjectsProps) => {
  const sectionRef = useRef<HTMLElement>(null);
  const projectRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [activeIndex, setActiveIndex] = useState(0);
  
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
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    const currentProjects = projectRefs.current;
    currentProjects.forEach((project) => {
      if (project) observer.observe(project);
    });
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
      
      currentProjects.forEach((project) => {
        if (project) observer.unobserve(project);
      });
    };
  }, [projects.length]);
  
  const handleMouseEnter = (index: number) => {
    setActiveIndex(index);
  };
  
  return (
    <section 
      id="projects" 
      ref={sectionRef} 
      className="py-24 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-gray-800 via-background to-background opacity-50"></div>
      
      {/* Animated Gradient Background */}
      <div 
        className="absolute inset-0 opacity-20 pointer-events-none" 
        style={{
          background: `radial-gradient(circle at ${activeIndex * 20}% 50%, rgba(120, 120, 255, 0.3), transparent 30%),
                      radial-gradient(circle at ${100 - (activeIndex * 20)}% 70%, rgba(255, 120, 255, 0.3), transparent 30%)`,
          transition: 'all 0.8s ease-out'
        }}
      ></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">My Projects</h2>
          <p className="text-white/70 max-w-2xl mx-auto">
            Explore some of my recent work and personal projects
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.id}
              ref={(el) => (projectRefs.current[index] = el)}
              className="project-card glass-card rounded-xl overflow-hidden reveal-animation"
              style={{ animationDelay: `${index * 0.15}s` }}
              onMouseEnter={() => handleMouseEnter(index)}
            >
              <div className="relative h-48 w-full overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute bottom-4 right-4 flex space-x-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
                  {project.githubUrl && (
                    <a 
                      href={project.githubUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="glass-card p-2 rounded-full hover:bg-white/20 transition-colors"
                      aria-label="View GitHub Repository"
                    >
                      <Github className="w-5 h-5 text-white" />
                    </a>
                  )}
                  {project.liveUrl && (
                    <a 
                      href={project.liveUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="glass-card p-2 rounded-full hover:bg-white/20 transition-colors"
                      aria-label="View Live Project"
                    >
                      <ExternalLink className="w-5 h-5 text-white" />
                    </a>
                  )}
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-white/70 text-sm mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span 
                      key={`${project.id}-${tag}`} 
                      className="text-xs font-medium bg-white/10 text-white/80 px-2.5 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
