import { Link } from "wouter";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="bg-background pt-12 pb-16 lg:pt-24 lg:pb-32 border-b border-gray-200">
      <div className="ibm-container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16">
          <div className="lg:col-span-8 space-y-8">
            <h1 className="text-foreground font-light leading-tight">
              Integrating <span className="font-normal text-primary">Quantum Intelligence</span> into critical infrastructure.
            </h1>
            <p className="text-xl lg:text-2xl text-muted-foreground font-light max-w-3xl leading-relaxed">
              QuantaFONS delivers enterprise-grade AI security, biometrics, and structural health monitoring solutions powered by our proprietary Eli S1 model.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link href="/products">
                <button className="ibm-btn-primary group">
                  <span>View products</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </Link>
              <Link href="/contact">
                <button className="ibm-btn-secondary group">
                  <span>Contact sales</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </Link>
            </div>
          </div>

          <div className="lg:col-span-4 flex flex-col justify-end">
            <div className="bg-secondary p-6 h-full flex flex-col justify-between min-h-[240px]">
              <div>
                <h3 className="text-lg font-medium mb-3">Featured Innovation</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                  Compact Quantum Processors: A breakthrough in room-temperature quantum computing for edge devices.
                </p>
              </div>
              <Link href="/projects/quantum-processors">
                <span className="ibm-link cursor-pointer">
                  Read the technical paper <ArrowRight className="w-4 h-4" />
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
