import { ArrowRight, CheckCircle2 } from "lucide-react";
import qBuildImg from "@assets/generated_images/q-build_construction_ai.png";
import processorImg from "@assets/generated_images/compact_quantum_processor.png";
import spacecraftImg from "@assets/generated_images/spacecraft_monitoring.png";

const projects = [
  {
    title: "Buildmore AI (Q-Build)",
    subtitle: "Construction Management",
    description: "A comprehensive AI ecosystem for the construction industry. Q-Build integrates IoT sensors, drone mapping, and predictive analytics to manage large-scale infrastructure projects.",
    stats: [
      { label: "Efficiency Gain", value: "35%" },
      { label: "Safety Incidents", value: "-90%" },
      { label: "Cost Reduction", value: "15%" },
    ],
    image: qBuildImg,
  },
  {
    title: "Compact Quantum Processors",
    subtitle: "Hardware Innovation",
    description: "Revolutionizing computing power with room-temperature quantum processors. Designed for edge deployment, bringing quantum capabilities to mobile and embedded systems.",
    stats: [
      { label: "Qubits", value: "128" },
      { label: "Coherence Time", value: "10ms" },
      { label: "Temp. Req", value: "295K" },
    ],
    image: processorImg,
  },
  {
    title: "Spacecraft Structural Health",
    subtitle: "Aerospace Engineering",
    description: "Femtotesla magnetic wave tomography for non-invasive structural analysis of spacecraft hulls. Detects micro-fractures and material fatigue in deep space environments.",
    stats: [
      { label: "Sensitivity", value: "0.1fT" },
      { label: "Scan Depth", value: "50cm" },
      { label: "Resolution", value: "10nm" },
    ],
    image: spacecraftImg,
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 bg-background">
      <div className="px-4 lg:px-8 max-w-[1600px] mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 border-b border-border pb-8">
          <div>
            <h2 className="text-3xl md:text-4xl font-medium mb-4">Strategic Projects</h2>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Pioneering research and development initiatives shaping the next decade.
            </p>
          </div>
          <button className="hidden md:flex h-12 px-6 border border-foreground/30 text-foreground text-sm font-medium hover:bg-secondary transition-colors items-center">
            View All R&D
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="flex flex-col h-full bg-secondary hover:bg-white hover:shadow-lg transition-all duration-300 border border-transparent hover:border-border p-6 group">
              <div className="mb-6 aspect-[4/3] overflow-hidden bg-white">
                 <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                  />
              </div>
              
              <div className="mb-4">
                <span className="text-xs font-bold uppercase tracking-wider text-primary mb-2 block">{project.subtitle}</span>
                <h3 className="text-xl font-bold text-foreground mb-3">{project.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                  {project.description}
                </p>
              </div>

              <div className="mt-auto pt-6 border-t border-border/50">
                <div className="grid grid-cols-3 gap-4">
                  {project.stats.map((stat, i) => (
                    <div key={i}>
                      <div className="text-lg font-bold text-foreground">{stat.value}</div>
                      <div className="text-[10px] text-muted-foreground uppercase">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
