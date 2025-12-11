import { motion } from "framer-motion";
import { HardHat, Cpu, Satellite } from "lucide-react";
import qBuildImg from "@assets/generated_images/q-build_construction_ai.png";
import processorImg from "@assets/generated_images/compact_quantum_processor.png";
import spacecraftImg from "@assets/generated_images/spacecraft_monitoring.png";

const projects = [
  {
    id: 1,
    title: "Q-Build",
    subtitle: "Buildmore AI",
    description: "A full-fledged AI-based construction management and analysis system optimizing workflow and safety.",
    image: qBuildImg,
    icon: HardHat,
    features: ["Project Tracking", "Safety Analysis", "Resource Optimization"],
  },
  {
    id: 2,
    title: "Quantum Processors",
    subtitle: "Next-Gen Hardware",
    description: "Compact Quantum Processors designed for high-performance computing at a fraction of the size.",
    image: processorImg,
    icon: Cpu,
    features: ["Qubit Stability", "Compact Form Factor", "High Efficiency"],
  },
  {
    id: 3,
    title: "Spacecraft SHM",
    subtitle: "Structural Health Monitoring",
    description: "Using femtotesla magnetic waves and tomography for structural health monitoring of spacecrafts at a quantum level.",
    image: spacecraftImg,
    icon: Satellite,
    features: ["Femtotesla Sensitivity", "Tomography Scan", "Deep Space Durable"],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 bg-black relative overflow-hidden">
      {/* Abstract Background Elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-1/3 h-full bg-purple-900/10 blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <h2 className="text-3xl md:text-5xl font-bold font-heading text-white mb-4">
              Featured Projects
            </h2>
            <p className="text-muted-foreground max-w-xl">
              Pushing the boundaries of what's possible with Quantum mechanics and Artificial Intelligence.
            </p>
          </div>
          <button className="text-primary font-medium hover:text-primary/80 transition-colors flex items-center gap-2">
            View All Projects &rarr;
          </button>
        </div>

        <div className="space-y-20">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className={`flex flex-col ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              } gap-12 items-center`}
            >
              <div className="flex-1 w-full">
                <div className="relative group rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
                  <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity z-10 pointer-events-none mix-blend-overlay" />
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full aspect-video object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
              </div>

              <div className="flex-1 space-y-6">
                <div className="flex items-center gap-3 text-primary mb-2">
                  <project.icon className="w-6 h-6" />
                  <span className="font-mono text-sm tracking-widest uppercase">{project.subtitle}</span>
                </div>
                
                <h3 className="text-4xl font-bold text-white">{project.title}</h3>
                
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {project.description}
                </p>

                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
                  {project.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-gray-300">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <div className="pt-4">
                  <button className="px-6 py-3 border border-white/20 hover:bg-white/5 rounded-lg text-white text-sm font-medium transition-colors">
                    Learn More
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
