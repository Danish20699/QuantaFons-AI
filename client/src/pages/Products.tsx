import { Link } from "wouter";
import { ArrowRight, Check, HelpCircle, ChevronDown, ChevronUp } from "lucide-react";
import { useState, useEffect } from "react";
import { getIcon } from "@/lib/icon-map";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const useCases = [
  {
    industry: "Healthcare",
    title: "Hospital Network Security",
    description: "Protecting patient data across 50+ hospitals with Q-Secure Intelligence",
    metric: "Zero breaches in 3 years",
  },
  {
    industry: "Aerospace",
    title: "Satellite Communication",
    description: "Quantum-encrypted communications for next-gen satellite constellations",
    metric: "10,000+ secure sessions/day",
  },
  {
    industry: "Finance",
    title: "Trading Infrastructure",
    description: "Sub-millisecond biometric authentication for high-frequency trading",
    metric: "0.3ms avg response time",
  },
  {
    industry: "Defense",
    title: "Critical Infrastructure",
    description: "AI-powered threat detection for national defense networks",
    metric: "99.97% detection rate",
  },
];

const comparisonFeatures = [
  { feature: "Quantum-Resistant Encryption", qSecure: true, qId: true, eli: true, onco: true },
  { feature: "Real-Time Processing", qSecure: true, qId: true, eli: true, onco: true },
  { feature: "Edge Deployment Ready", qSecure: true, qId: true, eli: false, onco: false },
  { feature: "FDA/CE Certified", qSecure: false, qId: true, eli: false, onco: true },
  { feature: "API Integration", qSecure: true, qId: true, eli: true, onco: true },
  { feature: "24/7 Support", qSecure: true, qId: true, eli: true, onco: true },
];

const faqs = [
  {
    question: "What industries do QuantaFONS products serve?",
    answer: "Our products serve healthcare, aerospace, defense, finance, energy, and manufacturing sectors. Each product is designed with industry-specific compliance and performance requirements in mind.",
  },
  {
    question: "Are your products compatible with existing infrastructure?",
    answer: "Yes, all QuantaFONS products feature robust API integration capabilities and can be deployed alongside existing systems. Our solutions team provides comprehensive integration support.",
  },
  {
    question: "What level of support is included?",
    answer: "All enterprise licenses include 24/7 technical support, dedicated account management, and access to our solutions architecture team for custom implementations.",
  },
  {
    question: "How do you ensure data security and compliance?",
    answer: "We maintain ISO 27001, SOC 2 Type II, and HIPAA certifications. All data is encrypted using quantum-resistant algorithms, and we offer data residency options for regulatory compliance.",
  },
];

type Product = {
  id: string;
  name: string;
  category: string;
  tagline: string;
  description: string;
  image: string;
  icon: string;
  specs: Array<{ label: string; value: string }>;
};

export default function ProductsPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const { ref: sectionRef, isVisible } = useScrollReveal();

  useEffect(() => {
    async function fetchProducts() {
      try {
        const response = await fetch("/api/products");
        const data = await response.json();
        
        const productsWithSpecs = await Promise.all(
          data.map(async (product: any) => {
            const detailResponse = await fetch(`/api/products/${product.id}`);
            const detail = await detailResponse.json();
            return detail;
          })
        );
        
        setProducts(productsWithSpecs);
      } catch (error) {
        console.error("Failed to fetch products:", error);
      } finally {
        setLoading(false);
      }
    }
    
    fetchProducts();
  }, []);

  if (loading) {
    return (
      <div className="pt-24 pb-16 min-h-screen bg-background text-foreground">
        <div className="ibm-container">
          <div className="mb-16 border-b border-gray-200 pb-8">
            <div className="h-4 w-24 skeleton mb-4"></div>
            <div className="h-14 w-3/4 skeleton mb-6"></div>
            <div className="h-6 w-2/3 skeleton"></div>
          </div>
          <div className="space-y-16">
            {Array.from({ length: 3 }).map((_, i) => (
              <div key={i} className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16">
                <div className="lg:col-span-5 order-2 lg:order-1">
                  <div className="aspect-[3/2] w-full skeleton"></div>
                </div>
                <div className="lg:col-span-7 order-1 lg:order-2 space-y-4">
                  <div className="h-4 w-24 skeleton"></div>
                  <div className="h-10 w-3/4 skeleton"></div>
                  <div className="h-6 w-1/2 skeleton"></div>
                  <div className="h-20 w-full skeleton"></div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="h-12 skeleton"></div>
                    <div className="h-12 skeleton"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-24 pb-16 min-h-screen bg-background text-foreground hi-tech-grid overflow-hidden">
      <div className="ibm-container relative" ref={sectionRef}>
        <div className={`mb-16 border-b border-gray-200 pb-8 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h6 className="text-sm font-bold uppercase tracking-widest text-primary mb-2">Our Portfolio</h6>
          <h1 className="font-light text-5xl lg:text-6xl mb-6">Products & Platforms</h1>
          <p className="text-xl text-muted-foreground max-w-3xl leading-relaxed">
            Scalable, secure, and intelligent solutions designed for modern infrastructure. 
            From quantum-resistant security to life-saving medical AI.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-16">
          {products.map((product, index) => {
            const Icon = getIcon(product.icon);
            return (
            <div 
              key={product.id} 
              className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start group transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: `${index * 150 + 200}ms` }}
              data-testid={`product-section-${product.id}`}
            >
              <div className="lg:col-span-5 order-2 lg:order-1">
                <div className="aspect-[3/2] w-full overflow-hidden bg-gray-100 relative glow-on-hover">
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-colors duration-300" />
                </div>
              </div>
              
              <div className="lg:col-span-7 order-1 lg:order-2 flex flex-col h-full justify-center">
                <div className="flex items-center gap-2 mb-4">
                  <Icon className="w-5 h-5 text-primary" />
                  <span className="text-sm font-bold uppercase tracking-wider text-muted-foreground">{product.category}</span>
                </div>
                
                <h2 className="text-3xl lg:text-4xl font-normal mb-4 text-foreground group-hover:text-primary transition-colors">
                  {product.name}
                </h2>
                
                <p className="text-lg font-medium text-foreground mb-4">
                  {product.tagline}
                </p>
                
                <p className="text-foreground/70 leading-relaxed mb-8 text-lg">
                  {product.description}
                </p>

                <div className="grid grid-cols-2 gap-4 mb-8">
                  {product.specs.slice(0, 4).map((spec, i) => (
                    <div key={i} className="border-l-2 border-primary/20 pl-4">
                      <div className="text-xs text-muted-foreground uppercase">{spec.label}</div>
                      <div className="font-medium text-foreground">{spec.value}</div>
                    </div>
                  ))}
                </div>

                <Link href={`/products/${product.id}`}>
                  <button className="ibm-btn-primary w-fit group-hover:bg-primary/90">
                    <span>View Technical Specifications</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </Link>
              </div>
            </div>
          );
          })}
        </div>

        {/* Use Cases Section */}
        <section className="mt-24 pt-16 border-t border-border">
          <div className="mb-12">
            <p className="text-sm text-primary font-medium tracking-wide uppercase mb-2">Success Stories</p>
            <h2 className="mb-4">Use Cases</h2>
            <p className="text-muted-foreground text-lg max-w-2xl">
              See how industry leaders leverage QuantaFONS products to solve their most challenging problems.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {useCases.map((useCase, index) => (
              <div
                key={index}
                className="bg-secondary p-8 border border-border hi-tech-card"
                data-testid={`usecase-${index}`}
              >
                <span className="text-xs font-medium text-primary bg-primary/10 px-2 py-1 mb-4 inline-block">
                  {useCase.industry}
                </span>
                <h4 className="text-xl font-medium mb-3">{useCase.title}</h4>
                <p className="text-muted-foreground mb-4">{useCase.description}</p>
                <div className="border-t border-border pt-4">
                  <span className="text-primary font-medium">{useCase.metric}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Comparison Table Section */}
        <section className="mt-24 pt-16 border-t border-border">
          <div className="mb-12">
            <p className="text-sm text-primary font-medium tracking-wide uppercase mb-2">Features</p>
            <h2 className="mb-4">Compare Products</h2>
            <p className="text-muted-foreground text-lg max-w-2xl">
              Find the right solution for your needs with our comprehensive feature comparison.
            </p>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full min-w-[600px]" data-testid="comparison-table">
              <thead>
                <tr className="bg-foreground text-white">
                  <th className="text-left p-4 font-medium">Feature</th>
                  <th className="text-center p-4 font-medium">Q-Secure</th>
                  <th className="text-center p-4 font-medium">Q-ID</th>
                  <th className="text-center p-4 font-medium">Eli S1</th>
                  <th className="text-center p-4 font-medium">OncoAI</th>
                </tr>
              </thead>
              <tbody>
                {comparisonFeatures.map((row, index) => (
                  <tr key={index} className={index % 2 === 0 ? 'bg-secondary' : 'bg-background'}>
                    <td className="p-4 font-medium">{row.feature}</td>
                    <td className="text-center p-4">
                      {row.qSecure ? <Check className="w-5 h-5 text-primary mx-auto" /> : <span className="text-muted-foreground">—</span>}
                    </td>
                    <td className="text-center p-4">
                      {row.qId ? <Check className="w-5 h-5 text-primary mx-auto" /> : <span className="text-muted-foreground">—</span>}
                    </td>
                    <td className="text-center p-4">
                      {row.eli ? <Check className="w-5 h-5 text-primary mx-auto" /> : <span className="text-muted-foreground">—</span>}
                    </td>
                    <td className="text-center p-4">
                      {row.onco ? <Check className="w-5 h-5 text-primary mx-auto" /> : <span className="text-muted-foreground">—</span>}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="mt-24 pt-16 border-t border-border">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-4">
              <p className="text-sm text-primary font-medium tracking-wide uppercase mb-2">Support</p>
              <h2 className="mb-4">Frequently Asked Questions</h2>
              <p className="text-muted-foreground">
                Have more questions? Contact our sales team for personalized assistance.
              </p>
              <Link href="/contact" className="mt-4 block">
                <span className="ibm-link">Contact Sales <ArrowRight className="w-4 h-4" /></span>
              </Link>
            </div>
            <div className="lg:col-span-8 space-y-4">
              {faqs.map((faq, index) => (
                <FAQItem key={index} question={faq.question} answer={faq.answer} index={index} />
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

function FAQItem({ question, answer, index }: { question: string; answer: string; index: number }) {
  const [isOpen, setIsOpen] = useState(false);
  const id = `faq-answer-${index}`;
  
  return (
    <div className="border border-border" data-testid={`faq-${index}`}>
      <button
        className="w-full p-6 flex items-center justify-between text-left bg-secondary hover:bg-muted/50 transition-colors"
        onClick={() => setIsOpen(!isOpen)}
        onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); setIsOpen(!isOpen); }}}
        aria-expanded={isOpen}
        aria-controls={id}
        type="button"
      >
        <span className="font-medium pr-4">{question}</span>
        {isOpen ? <ChevronUp className="w-5 h-5 flex-shrink-0" aria-hidden="true" /> : <ChevronDown className="w-5 h-5 flex-shrink-0" aria-hidden="true" />}
      </button>
      <div
        id={id}
        role="region"
        aria-labelledby={`faq-question-${index}`}
        className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-96' : 'max-h-0'}`}
      >
        <div className="p-6 bg-background border-t border-border">
          <p className="text-muted-foreground">{answer}</p>
        </div>
      </div>
    </div>
  );
}
