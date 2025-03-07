import { useEffect, useRef } from "react";
import { BriefcaseBusiness, GraduationCap } from "lucide-react";

interface JourneyItem {
  id: number;
  title: string;
  organization: string;
  date: string;
  description: string;
  type: "education" | "work";
}

interface JourneyProps {
  items: JourneyItem[];
}

const Journey = ({ items }: JourneyProps) => {
  const timelineItemsRef = useRef<(HTMLDivElement | null)[]>([]);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
          }
        });
      },
      { threshold: 0.1 }
    );
    
    const currentItems = timelineItemsRef.current;
    currentItems.forEach((item) => {
      if (item) observer.observe(item);
    });
    
    return () => {
      currentItems.forEach((item) => {
        if (item) observer.unobserve(item);
      });
    };
  }, [items.length]);
  
  return (
    <section id="journey" className="py-24 relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gray-800 via-background to-background opacity-50"></div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">My Journey</h2>
          <p className="text-white/70 max-w-2xl mx-auto">
            A timeline of my professional and educational experiences
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <div className="relative timeline-dot pb-8">
            {items.map((item, index) => (
              <div
                key={item.id}
                ref={(el) => (timelineItemsRef.current[index] = el)}
                className="relative pl-8 pb-10 reveal-animation"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className="absolute left-0 bg-white p-1 rounded-full z-10">
                  {item.type === "education" ? (
                    <GraduationCap className="h-3.5 w-3.5 text-black" />
                  ) : (
                    <BriefcaseBusiness className="h-3.5 w-3.5 text-black" />
                  )}
                </div>
                
                <div className="glass-card p-5 rounded-lg">
                  <div className="flex items-start justify-between flex-col sm:flex-row gap-2 mb-2">
                    <h3 className="text-xl font-bold">{item.title}</h3>
                    <span className="text-sm text-white/60 font-medium rounded-full bg-white/5 px-3 py-1">
                      {item.date}
                    </span>
                  </div>
                  
                  <h4 className="text-white/80 mb-3">{item.organization}</h4>
                  <p className="text-white/70 text-sm">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Journey;
