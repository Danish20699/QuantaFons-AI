import { Link } from "wouter";
import { ArrowRight, Calendar, MapPin } from "lucide-react";
import { useState, useEffect } from "react";
import { getIcon } from "@/lib/icon-map";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const milestones = [
  { year: "2025", event: "Compact Quantum Processor achieves room-temperature operation", status: "current" },
  { year: "2024", event: "OncoAI platform receives FDA breakthrough designation", status: "completed" },
  { year: "2023", event: "Q-ID Biometrics deployed across 100+ enterprise clients", status: "completed" },
  { year: "2022", event: "Eli S1 foundation model reaches 1 trillion parameters", status: "completed" },
  { year: "2021", event: "Q-Secure Intelligence launches post-quantum encryption suite", status: "completed" },
  { year: "2020", event: "QuantaFONS Research Lab established in Zurich", status: "completed" },
];

const partners = [
  { name: "CERN", type: "Research Partner", description: "Quantum computing research collaboration" },
  { name: "ESA", type: "Strategic Partner", description: "Space-based quantum communication systems" },
  { name: "MIT", type: "Academic Partner", description: "AI and quantum algorithm development" },
  { name: "Fraunhofer", type: "Technology Partner", description: "Industrial IoT security solutions" },
  { name: "Mayo Clinic", type: "Healthcare Partner", description: "Clinical AI validation and trials" },
  { name: "DARPA", type: "Defense Partner", description: "Advanced threat detection systems" },
];

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
  const { ref: sectionRef, isVisible } = useScrollReveal();

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
      <div className="pt-24 pb-16 min-h-screen bg-background text-foreground">
        <div className="ibm-container">
          <div className="mb-16 border-b border-gray-200 pb-8">
            <div className="h-4 w-24 skeleton mb-4"></div>
            <div className="h-14 w-3/4 skeleton mb-6"></div>
            <div className="h-6 w-2/3 skeleton"></div>
          </div>
          <div className="space-y-12">
            {Array.from({ length: 3 }).map((_, i) => (
              <div key={i} className="border border-gray-200 bg-white">
                <div className="grid grid-cols-1 lg:grid-cols-12">
                  <div className="lg:col-span-5 h-64 lg:h-auto skeleton"></div>
                  <div className="lg:col-span-7 p-8 lg:p-12 space-y-4">
                    <div className="h-4 w-24 skeleton"></div>
                    <div className="h-10 w-3/4 skeleton"></div>
                    <div className="h-20 w-full skeleton"></div>
                    <div className="grid grid-cols-4 gap-4">
                      <div className="h-12 skeleton"></div>
                      <div className="h-12 skeleton"></div>
                      <div className="h-12 skeleton"></div>
                      <div className="h-12 skeleton"></div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-24 pb-16 min-h-screen bg-background text-foreground hi-tech-grid overflow-hidden">
      <div className="ibm-container relative" ref={sectionRef}>
        <div className={`mb-16 border-b border-gray-200 pb-8 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
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
            <div 
              key={project.id} 
              className={`border border-gray-200 hover:border-primary transition-all bg-white group hi-tech-card glow-on-hover duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: `${index * 150 + 200}ms` }}
              data-testid={`project-card-${project.id}`}
            >
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

        {/* Timeline/Milestones Section */}
        <section className="mt-24 pt-16 border-t border-border animated-bg relative">
          <div className="mb-12 relative z-10">
            <p className="text-sm text-primary font-medium tracking-wide uppercase mb-2">Our Journey</p>
            <h2 className="mb-4">Project Milestones</h2>
            <p className="text-muted-foreground text-lg max-w-2xl">
              Key achievements and breakthroughs that have shaped our innovation trajectory.
            </p>
          </div>
          <div className="relative z-10">
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border hidden md:block"></div>
            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <div
                  key={index}
                  className="flex gap-8 items-start"
                  data-testid={`milestone-${index}`}
                >
                  <div className={`hidden md:flex w-16 h-16 flex-shrink-0 items-center justify-center border-2 bg-background z-10 ${
                    milestone.status === 'current' ? 'border-primary bg-primary/5' : 'border-border'
                  }`}>
                    <Calendar className={`w-6 h-6 ${milestone.status === 'current' ? 'text-primary' : 'text-muted-foreground'}`} />
                  </div>
                  <div className={`flex-1 p-6 border ${milestone.status === 'current' ? 'border-primary bg-primary/5' : 'border-border bg-secondary'}`}>
                    <div className="flex items-center gap-4 mb-2">
                      <span className={`text-xl font-medium ${milestone.status === 'current' ? 'text-primary' : 'text-foreground'}`}>
                        {milestone.year}
                      </span>
                      {milestone.status === 'current' && (
                        <span className="text-xs font-medium text-white bg-primary px-2 py-1">In Progress</span>
                      )}
                    </div>
                    <p className="text-foreground/80">{milestone.event}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Partners Section */}
        <section className="mt-24 pt-16 border-t border-border">
          <div className="mb-12">
            <p className="text-sm text-primary font-medium tracking-wide uppercase mb-2">Collaboration</p>
            <h2 className="mb-4">Strategic Partners</h2>
            <p className="text-muted-foreground text-lg max-w-2xl">
              Working with world-leading institutions to push the boundaries of technology.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {partners.map((partner, index) => (
              <div
                key={index}
                className="bg-secondary p-8 border border-border hi-tech-card glow-on-hover"
                data-testid={`partner-${index}`}
              >
                <span className="text-xs font-medium text-primary bg-primary/10 px-2 py-1 mb-4 inline-block">
                  {partner.type}
                </span>
                <h4 className="text-2xl font-medium mb-3">{partner.name}</h4>
                <p className="text-muted-foreground">{partner.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="mt-24 bg-foreground text-white p-12 lg:p-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-white text-3xl mb-4">Interested in collaboration?</h3>
              <p className="text-white/70 text-lg">
                We're always looking for partners to join us in pushing the boundaries of quantum computing and AI.
              </p>
            </div>
            <div className="flex justify-start lg:justify-end">
              <Link href="/contact">
                <button className="bg-primary text-white hover:bg-primary/90 min-h-[48px] px-8 flex items-center gap-4 text-sm transition-colors" data-testid="partner-cta-btn">
                  <span>Become a Partner</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
