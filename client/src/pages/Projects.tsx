import { Link } from "wouter";
import { ArrowRight } from "lucide-react";
import { useState, useEffect } from "react";
import { getIcon } from "@/lib/icon-map";

type Project = {
  id: string;
  name: string;
  category: string;
  description: string;
  image: string;
  icon: string;
  stats: Array<{ label: string; value: string }>;
};

export default function ProjectsPage() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchProjects() {
      try {
        const response = await fetch("/api/projects");
        const data = await response.json();
        
        const projectsWithStats = await Promise.all(
          data.map(async (project: any) => {
            const detailResponse = await fetch(`/api/projects/${project.id}`);
            const detail = await detailResponse.json();
            return detail;
          })
        );
        
        setProjects(projectsWithStats);
      } catch (error) {
        console.error("Failed to fetch projects:", error);
      } finally {
        setLoading(false);
      }
    }
    
    fetchProjects();
  }, []);

  if (loading) {
    return (
      <div className="pt-24 pb-16 min-h-screen bg-background text-foreground flex items-center justify-center">
        <div className="text-xl text-muted-foreground">Loading projects...</div>
      </div>
    );
  }

  return (
    <div className="pt-24 pb-16 min-h-screen bg-background text-foreground">
      <div className="ibm-container">
        <div className="mb-16 border-b border-gray-200 pb-8">
          <h6 className="text-sm font-bold uppercase tracking-widest text-primary mb-2">Innovation Lab</h6>
          <h1 className="font-light text-5xl lg:text-6xl mb-6">Strategic Projects</h1>
          <p className="text-xl text-muted-foreground max-w-3xl leading-relaxed">
            Pioneering research and development initiatives shaping the next decade of technology.
          </p>
        </div>

        <div className="space-y-12">
          {projects.map((project, index) => {
            const Icon = getIcon(project.icon);
            return (
            <div key={project.id} className="border border-gray-200 hover:border-primary transition-colors bg-white group">
              <div className="grid grid-cols-1 lg:grid-cols-12">
                <div className="lg:col-span-5 h-64 lg:h-auto overflow-hidden bg-gray-100">
                  <img 
                    src={project.image} 
                    alt={project.name} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 grayscale group-hover:grayscale-0"
                  />
                </div>
                <div className="lg:col-span-7 p-8 lg:p-12 flex flex-col justify-center">
                  <div className="flex items-center gap-2 mb-4">
                    <Icon className="w-5 h-5 text-primary" />
                    <span className="text-sm font-bold uppercase tracking-wider text-muted-foreground">{project.category}</span>
                  </div>
                  
                  <h2 className="text-3xl font-normal mb-6 text-foreground">
                    {project.name}
                  </h2>
                  
                  <p className="text-foreground/70 leading-relaxed mb-8 text-lg">
                    {project.description}
                  </p>

                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mb-8 border-t border-gray-100 pt-6">
                    {project.stats.map((stat, i) => (
                      <div key={i}>
                        <div className="text-2xl font-light text-primary">{stat.value}</div>
                        <div className="text-xs text-muted-foreground uppercase mt-1">{stat.label}</div>
                      </div>
                    ))}
                  </div>

                  <Link href={`/projects/${project.id}`}>
                    <span className="ibm-link cursor-pointer">
                      View Project Details <ArrowRight className="w-4 h-4" />
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          );
          })}
        </div>
      </div>
    </div>
  );
}
