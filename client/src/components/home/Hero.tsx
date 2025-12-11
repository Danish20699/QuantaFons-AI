import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="bg-background pt-24 pb-16 md:pt-32 md:pb-24 border-b border-border">
      <div className="px-4 lg:px-8 max-w-[1600px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          
          <div className="lg:col-span-8">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-medium text-foreground mb-8 leading-tight tracking-tight">
              Solving the world's most complex problems with <span className="text-primary">Quantum AI</span>.
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl font-light leading-relaxed">
              QuantaFONS integrates generative AI, quantum computing, and biometrics to build smarter infrastructure, secure enterprises, and advance medical research.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="h-12 px-6 bg-primary text-white text-sm font-medium hover:bg-primary/90 transition-colors flex items-center justify-between gap-4 min-w-[200px] group">
                <span>View our solutions</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="h-12 px-6 border border-foreground/30 text-foreground text-sm font-medium hover:bg-secondary transition-colors min-w-[200px]">
                Read the 2025 AI Report
              </button>
            </div>
          </div>

          <div className="lg:col-span-4 flex flex-col justify-end">
            <div className="bg-secondary p-8 h-full min-h-[300px] flex flex-col justify-between">
              <div>
                <h3 className="text-lg font-bold mb-2">Latest Innovation</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Introducing the Compact Quantum Processor for commercial applications.
                </p>
              </div>
              <a href="#projects" className="text-primary hover:underline text-sm font-medium flex items-center gap-1">
                Learn more <ArrowRight className="w-3 h-3" />
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
