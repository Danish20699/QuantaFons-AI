const clients = [
  { name: "HECPL", industry: "Construction Company" },
  { name: "ABALIQA", industry: "Technology Providers, USA" },
  { name: "KVPDA", industry: "petorlium, petrochemical, and petrophysical data analysis and visualization" },
  { name: "LILY", industry: "Healthcare and Hospitals, Iran" },
  { name: "JKTROUTFEED", industry: "Pisciculture" },
  { name: "ABC EDUTECH", industry: "Ai based Education Technologies" },
  { name: "BOOST+", industry: "Ai powered tutoring solutoins for IGCSE" },
  { name: "BLUMARGINS", industry: "Business Analysis and Software Solutions" },
];

const testimonials = [
  {
    quote: "QuantaFONS transformed our security infrastructure. Their quantum-resistant encryption is years ahead of the competition.",
    author: "Tanveer Ahmad",
    role: "CEO, Abaliqa Technologies",
  },
  {
    quote: "The OncoAI platform has accelerated our drug discovery pipeline by 40%. It's revolutionizing how we approach cancer research.",
    author: "Bilal Ahmad",
    role: "CTO, Lily Healthcare and Hospitals",
  },
];

export default function ClientLogos() {
  return (
    <section className="py-20 lg:py-32 bg-background border-b border-border light-beam">
      <div className="ibm-container relative z-10">
        <div className="text-center mb-16">
          <p className="text-sm text-primary font-medium tracking-wide uppercase mb-4" data-testid="clients-label">
            Trusted Partners
          </p>
          <div className="inline-block relative hyperspeed-heading">
            <h2 className="mb-4 relative z-10" data-testid="clients-heading">
              Leading organizations rely on QuantaFONS
            </h2>
          </div>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            From aerospace to healthcare, our solutions power innovation across industries
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
          {clients.map((client, index) => (
            <div
              key={index}
              className="bg-secondary p-6 flex flex-col items-center justify-center min-h-[120px] hi-tech-card glow-on-hover"
              data-testid={`client-logo-${index}`}
            >
              <span className="text-xl font-medium text-foreground">{client.name}</span>
              <span className="text-xs text-muted-foreground mt-1">{client.industry}</span>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-foreground text-white p-8 lg:p-12"
              data-testid={`testimonial-${index}`}
            >
              <blockquote className="text-lg lg:text-xl font-light leading-relaxed mb-8">
                "{testimonial.quote}"
              </blockquote>
              <div className="border-t border-white/20 pt-6">
                <p className="font-medium">{testimonial.author}</p>
                <p className="text-sm text-white/70">{testimonial.role}</p>
                <p className="text-sm text-white/50">{testimonial.company}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

