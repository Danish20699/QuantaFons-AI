import { Link } from "wouter";
import { ArrowRight } from "lucide-react";
import { useState, useEffect } from "react";
import { getIcon } from "@/lib/icon-map";
import { useScrollReveal } from "@/hooks/useScrollReveal";

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
      </div>
    </div>
  );
}
