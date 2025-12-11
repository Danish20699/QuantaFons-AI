import { Link, useRoute } from "wouter";
import { ArrowLeft, FileText, Share2 } from "lucide-react";
import { projects } from "@/lib/data";
import NotFound from "./not-found";

export default function ProjectDetail() {
  const [, params] = useRoute("/projects/:id");
  const project = projects.find(p => p.id === params?.id);

  if (!project) return <NotFound />;

  return (
    <div className="pt-24 pb-16 min-h-screen bg-background text-foreground">
      <div className="ibm-container">
        <Link href="/projects" className="ibm-link mb-8 inline-flex">
          <ArrowLeft className="w-4 h-4" /> Back to Projects
        </Link>

        <div className="mb-12">
          <span className="text-sm font-bold uppercase tracking-widest text-primary mb-2 block">{project.category}</span>
          <h1 className="font-light text-5xl lg:text-7xl mb-8">{project.name}</h1>
          <div className="flex gap-4">
             <button className="ibm-btn-secondary">
               <Share2 className="w-4 h-4 mr-2" /> Share Project
             </button>
          </div>
        </div>

        <div className="w-full aspect-[21/9] bg-gray-100 mb-16 overflow-hidden">
          <img 
            src={project.image} 
            alt={project.name} 
            className="w-full h-full object-cover"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          <div className="lg:col-span-8">
            <h2 className="text-2xl font-medium mb-6">Overview</h2>
            <p className="text-lg text-foreground/80 leading-relaxed mb-8">
              {project.description}
            </p>
            <p className="text-lg text-foreground/80 leading-relaxed mb-12">
              This initiative represents a significant leap forward in {project.category.toLowerCase()}. 
              By integrating advanced AI models with physical hardware sensors, we are able to achieve levels of 
              precision and efficiency that were previously impossible.
            </p>

            <h2 className="text-2xl font-medium mb-6">Impact Analysis</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              {project.stats.map((stat, i) => (
                <div key={i} className="bg-secondary p-6 border border-gray-200">
                  <div className="text-4xl font-light text-primary mb-2">{stat.value}</div>
                  <div className="text-sm font-bold uppercase text-muted-foreground">{stat.label}</div>
                  <p className="text-sm text-foreground/60 mt-2">
                    Measured against industry standard baselines in controlled environments.
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-4 space-y-8">
            <div className="bg-primary text-white p-8">
              <h3 className="text-xl font-medium mb-4">Partner with us</h3>
              <p className="text-white/80 mb-6 text-sm">
                Interested in piloting this technology? We are currently accepting applications for our early access program.
              </p>
              <button className="w-full bg-white text-primary font-bold py-3 px-4 hover:bg-gray-100 transition-colors">
                Apply for Access
              </button>
            </div>

            <div className="border border-gray-200 p-8">
              <h3 className="text-lg font-medium mb-4 flex items-center gap-2">
                <FileText className="w-5 h-5 text-primary" /> Related Resources
              </h3>
              <ul className="space-y-4">
                <li><a href="#" className="ibm-link">Whitepaper: Technical Overview</a></li>
                <li><a href="#" className="ibm-link">Case Study: Implementation Results</a></li>
                <li><a href="#" className="ibm-link">Safety Documentation</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
