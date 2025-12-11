import { Link } from "wouter";
import { ArrowRight } from "lucide-react";
import { useState, useEffect } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

type Project = {
  id: string;
  name: string;
  category: string;
  description: string;
  image: string;
};

export default function Projects() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const { ref: sectionRef, isVisible: sectionVisible } = useScrollReveal();

  useEffect(() => {
    async function fetchProjects() {
      try {
        const response = await fetch("/api/projects");
        const data = await response.json();
        setProjects(data);
      } catch (error) {
        console.error("Failed to fetch projects:", error);
      } finally {
        setIsLoading(false);
      }
    }
    
    fetchProjects();
  }, []);

  return (
    <section id="projects" className="bg-secondary py-16 lg:py-24 hi-tech-grid overflow-hidden">
      <div className="ibm-container relative" ref={sectionRef}>
        <div className={`flex flex-col md:flex-row md:items-end justify-between mb-12 transition-all duration-700 ${sectionVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="text-3xl lg:text-4xl font-normal">Strategic Initiatives</h2>
          <Link href="/projects">
            <span className="ibm-link mt-4 md:mt-0 cursor-pointer">
              View all R&D projects <ArrowRight className="w-4 h-4" />
            </span>
          </Link>
        </div>

        <div className="space-y-0">
          {isLoading ? (
            Array.from({ length: 3 }).map((_, i) => (
              <div key={i} className="border-t border-gray-300 py-8 lg:py-12">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                  <div className="lg:col-span-4 order-2 lg:order-1 px-4 lg:px-0 space-y-4">
                    <div className="h-4 w-12 skeleton"></div>
                    <div className="h-8 w-3/4 skeleton"></div>
                    <div className="h-6 w-20 skeleton"></div>
                    <div className="h-4 w-full skeleton"></div>
                    <div className="h-4 w-2/3 skeleton"></div>
                  </div>
                  <div className="lg:col-span-8 order-1 lg:order-2 px-4 lg:px-0">
                    <div className="aspect-[21/9] w-full skeleton"></div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            projects.map((project, index) => (
              <Link key={project.id} href={`/projects/${project.id}`}>
                <div 
                  className={`group border-t border-gray-300 hover:bg-white transition-all duration-500 cursor-pointer ${sectionVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                  style={{ transitionDelay: `${index * 150 + 200}ms` }}
                  data-testid={`card-project-${project.id}`}
                >
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 py-8 lg:py-12 items-center">
                    <div className="lg:col-span-4 order-2 lg:order-1 px-4 lg:px-0">
                       <span className="text-sm font-mono text-muted-foreground block mb-2">{String(index + 1).padStart(2, '0')}</span>
                       <h3 className="text-2xl font-normal mb-4 group-hover:text-primary transition-colors">{project.name}</h3>
                       <div className="flex gap-2 mb-6">
                          <span className="text-xs bg-gray-200 text-gray-800 px-2 py-1">{project.category}</span>
                       </div>
                       <p className="text-foreground/80 leading-relaxed mb-6 line-clamp-2">
                         {project.description}
                       </p>
                       <span className="ibm-link group-hover:underline">
                         Learn more <ArrowRight className="w-4 h-4" />
                       </span>
                    </div>
                    <div className="lg:col-span-8 order-1 lg:order-2 px-4 lg:px-0">
                      <div className="aspect-[21/9] w-full overflow-hidden bg-gray-200 glow-on-hover">
                        <img 
                          src={project.image} 
                          alt={project.name} 
                          className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            ))
          )}
          <div className="border-t border-gray-300"></div>
        </div>
      </div>
    </section>
  );
}
