import { ArrowRight } from "lucide-react";
import qBuildImg from "@assets/generated_images/q-build_construction_ai.png";
import processorImg from "@assets/generated_images/compact_quantum_processor.png";
import spacecraftImg from "@assets/generated_images/spacecraft_monitoring.png";

const projects = [
  {
    id: "01",
    name: "Buildmore AI (Q-Build)",
    description: "AI-driven construction management system utilizing computer vision for safety compliance and resource allocation optimization.",
    image: qBuildImg,
    tags: ["Construction Tech", "Safety AI"],
  },
  {
    id: "02",
    name: "Compact Quantum Processors",
    description: "Development of miniaturized quantum processing units (QPUs) utilizing femtotesla magnetic wave technology for high-fidelity qubit control.",
    image: processorImg,
    tags: ["Quantum Hardware", "Edge Computing"],
  },
  {
    id: "03",
    name: "Spacecraft Structural Health",
    description: "Non-invasive structural health monitoring (SHM) system for spacecraft using quantum tomography to detect micro-fractures in real-time.",
    image: spacecraftImg,
    tags: ["Aerospace", "Material Science"],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="bg-secondary py-16 lg:py-24">
      <div className="ibm-container">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <h2 className="text-3xl lg:text-4xl font-normal">Strategic Initiatives</h2>
          <a href="#" className="ibm-link mt-4 md:mt-0">
            View all R&D projects <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        <div className="space-y-0">
          {projects.map((project, index) => (
            <div key={index} className="group border-t border-gray-300 hover:bg-white transition-colors duration-300">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 py-8 lg:py-12 items-center">
                <div className="lg:col-span-4 order-2 lg:order-1 px-4 lg:px-0">
                   <span className="text-sm font-mono text-muted-foreground block mb-2">{project.id}</span>
                   <h3 className="text-2xl font-normal mb-4">{project.name}</h3>
                   <div className="flex gap-2 mb-6">
                      {project.tags.map((tag, i) => (
                        <span key={i} className="text-xs bg-gray-200 text-gray-800 px-2 py-1">{tag}</span>
                      ))}
                   </div>
                   <p className="text-foreground/80 leading-relaxed mb-6">
                     {project.description}
                   </p>
                   <a href="#" className="ibm-link group-hover:underline">
                     Learn more <ArrowRight className="w-4 h-4" />
                   </a>
                </div>
                <div className="lg:col-span-8 order-1 lg:order-2 px-4 lg:px-0">
                  <div className="aspect-[2/1] w-full overflow-hidden bg-gray-200">
                    <img 
                      src={project.image} 
                      alt={project.name} 
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
          <div className="border-t border-gray-300"></div>
        </div>
      </div>
    </section>
  );
}
