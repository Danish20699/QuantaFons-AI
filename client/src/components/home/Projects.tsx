import { Link } from "wouter";
import { ArrowRight } from "lucide-react";
import { useState, useEffect } from "react";

type Project = {
  id: string;
  name: string;
  category: string;
  description: string;
  image: string;
};

export default function Projects() {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    async function fetchProjects() {
      try {
        const response = await fetch("/api/projects");
        const data = await response.json();
        setProjects(data);
      } catch (error) {
        console.error("Failed to fetch projects:", error);
      }
    }
    
    fetchProjects();
  }, []);

  return (
    <section id="projects" className="bg-secondary py-16 lg:py-24">
      <div className="ibm-container">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <h2 className="text-3xl lg:text-4xl font-normal">Strategic Initiatives</h2>
          <Link href="/projects">
            <span className="ibm-link mt-4 md:mt-0 cursor-pointer">
              View all R&D projects <ArrowRight className="w-4 h-4" />
            </span>
          </Link>
        </div>

        <div className="space-y-0">
          {projects.map((project, index) => (
            <Link key={project.id} href={`/projects/${project.id}`}>
              <div className="group border-t border-gray-300 hover:bg-white transition-colors duration-300 cursor-pointer">
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
                    <div className="aspect-[21/9] w-full overflow-hidden bg-gray-200">
                      <img 
                        src={project.image} 
                        alt={project.name} 
                        className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
          <div className="border-t border-gray-300"></div>
        </div>
      </div>
    </section>
  );
}
