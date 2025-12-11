import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import heroBg from "@assets/generated_images/abstract_quantum_ai_hero_background.png";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroBg} 
          alt="Quantum AI Background" 
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-linear-to-b from-background/80 via-background/40 to-background" />
      </div>

      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block px-4 py-1.5 mb-6 text-sm font-medium tracking-widest text-primary border border-primary/30 rounded-full bg-primary/10 uppercase">
            The Future of Intelligence
          </span>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold font-heading text-white mb-8 tracking-tight">
            Quantum Leap in <br />
            <span className="text-gradient">Artificial Intelligence</span>
          </h1>
          
          <p className="max-w-2xl mx-auto text-lg md:text-xl text-muted-foreground mb-10 leading-relaxed">
            From advanced security systems to quantum structural monitoring. 
            QuantaFONS is pioneering the next generation of AI solutions.
          </p>

          <div className="flex flex-col md:flex-row items-center justify-center gap-4">
            <button className="px-8 py-4 bg-primary text-primary-foreground font-bold rounded-full hover:bg-primary/90 transition-all shadow-[0_0_20px_rgba(6,182,212,0.3)] hover:shadow-[0_0_40px_rgba(6,182,212,0.5)] flex items-center gap-2 group">
              Explore Innovations
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="px-8 py-4 border border-white/10 bg-white/5 text-white font-medium rounded-full hover:bg-white/10 transition-colors backdrop-blur-sm">
              View Our Research
            </button>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <div className="w-6 h-10 border-2 border-white/20 rounded-full flex justify-center p-1">
          <div className="w-1 h-2 bg-primary rounded-full" />
        </div>
      </motion.div>
    </section>
  );
}
