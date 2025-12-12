import { Shield, Cpu, Brain, Lock, Globe, Zap } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "Quantum-Resistant Security",
    description: "Post-quantum cryptographic protocols protecting against future threats from quantum computers.",
  },
  {
    icon: Brain,
    title: "Advanced AI Models",
    description: "Proprietary Eli S1 foundation model trained on specialized enterprise and scientific datasets.",
  },
  {
    icon: Cpu,
    title: "Edge Computing Ready",
    description: "Compact processors designed for deployment in resource-constrained environments.",
  },
  {
    icon: Lock,
    title: "Zero-Trust Architecture",
    description: "Continuous verification model with no implicit trust for any user, device, or network.",
  },
  {
    icon: Globe,
    title: "Global Infrastructure",
    description: "Distributed data centers with 99.99% uptime SLA and real-time failover capabilities.",
  },
  {
    icon: Zap,
    title: "Real-Time Processing",
    description: "Sub-millisecond latency for mission-critical applications in healthcare and defense.",
  },
];

export default function Features() {
  return (
    <section className="py-20 lg:py-32 bg-background animated-bg">
      <div className="ibm-container relative z-10" style={{ position: 'relative', zIndex: 1 }}>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          <div className="lg:col-span-4">
            <p className="text-sm text-primary font-medium tracking-wide uppercase mb-4" data-testid="features-label">
              Why QuantaFONS
            </p>
            <h2 className="mb-6" data-testid="features-heading">Technology built for tomorrow's challenges</h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              We combine cutting-edge quantum computing research with practical AI solutions to address the most complex problems facing enterprises today.
            </p>
          </div>

          <div className="lg:col-span-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="p-6 bg-secondary border border-border hi-tech-card"
                  data-testid={`feature-card-${index}`}
                >
                  <feature.icon className="w-8 h-8 text-primary mb-4" />
                  <h4 className="text-lg font-medium mb-2">{feature.title}</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
