import { useEffect, useRef, useState } from "react";

const stats = [
  { value: 15, suffix: "+", label: "Years of Innovation", description: "Pioneering quantum technology" },
  { value: 1200, suffix: "+", label: "Research Publications", description: "Peer-reviewed scientific papers" },
  { value: 98, suffix: "%", label: "Client Retention", description: "Long-term partnerships" },
  { value: 50, suffix: "M+", label: "Lives Impacted", description: "Through healthcare solutions" },
];

function AnimatedNumber({ value, suffix }: { value: number; suffix: string }) {
  const [display, setDisplay] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          const duration = 2000;
          const startTime = Date.now();
          const animate = () => {
            const elapsed = Date.now() - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setDisplay(Number((eased * value).toFixed(value % 1 !== 0 ? 1 : 0)));
            if (progress < 1) requestAnimationFrame(animate);
          };
          animate();
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [value, hasAnimated]);

  return (
    <span ref={ref} className="text-5xl lg:text-6xl font-light text-primary">
      {display}{suffix}
    </span>
  );
}

export default function Stats() {
  return (
    <section className="py-20 lg:py-32 bg-secondary circuit-bg">
      <div className="ibm-container relative z-10">
        <div className="text-center mb-16">
          <p className="text-sm text-primary font-medium tracking-wide uppercase mb-4" data-testid="stats-label">
            By the Numbers
          </p>
          <h2 className="mb-4" data-testid="stats-heading">Proven at scale</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Our solutions power mission-critical operations across industries worldwide
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center p-8 bg-background border border-border hi-tech-card"
              data-testid={`stat-card-${index}`}
            >
              <AnimatedNumber value={stat.value} suffix={stat.suffix} />
              <h4 className="text-lg font-medium mt-4 mb-2">{stat.label}</h4>
              <p className="text-sm text-muted-foreground">{stat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
