import { Link } from "wouter";
import { ArrowRight } from "lucide-react";
import { useState, useEffect } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

type Product = {
  id: string;
  name: string;
  category: string;
  description: string;
  image: string;
};

export default function Products() {
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const { ref: sectionRef, isVisible: sectionVisible } = useScrollReveal();

  useEffect(() => {
    async function fetchProducts() {
      try {
        const response = await fetch("/api/products");
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error("Failed to fetch products:", error);
      } finally {
        setIsLoading(false);
      }
    }
    
    fetchProducts();
  }, []);

  return (
    <section id="products" className="bg-background py-16 lg:py-24 border-b border-gray-200">
      <div className="ibm-container" ref={sectionRef}>
        <h2 className={`text-3xl lg:text-4xl font-normal mb-16 transition-all duration-700 ${sectionVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          Our Products
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {isLoading ? (
            Array.from({ length: 4 }).map((_, i) => (
              <div key={i} className="flex flex-col h-full">
                <div className="aspect-[3/2] w-full skeleton"></div>
                <div className="p-4 space-y-3">
                  <div className="h-3 w-20 skeleton"></div>
                  <div className="h-6 w-3/4 skeleton"></div>
                  <div className="h-4 w-full skeleton"></div>
                  <div className="h-4 w-2/3 skeleton"></div>
                </div>
              </div>
            ))
          ) : (
            products.map((product, index) => (
              <Link key={product.id} href={`/products/${product.id}`}>
                <div 
                  className={`group flex flex-col h-full hi-tech-card glow-on-hover cursor-pointer transition-all duration-500 ${sectionVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                  style={{ transitionDelay: `${index * 100 + 200}ms` }}
                  data-testid={`card-product-${product.id}`}
                >
                  <div className="aspect-[3/2] w-full overflow-hidden bg-gray-100">
                    <img 
                      src={product.image} 
                      alt={product.name} 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-4 flex flex-col flex-1 bg-white">
                    <span className="text-xs uppercase tracking-wider text-muted-foreground mb-2 block">{product.category}</span>
                    <h3 className="text-xl font-normal text-foreground mb-4 group-hover:text-primary transition-colors">
                      {product.name}
                    </h3>
                    <p className="text-sm text-foreground/70 leading-relaxed mb-8 flex-1 line-clamp-3">
                      {product.description}
                    </p>
                    <div className="mt-auto flex justify-end">
                       <ArrowRight className="w-5 h-5 text-primary opacity-0 group-hover:opacity-100 transition-opacity transform translate-x-0 group-hover:translate-x-1" />
                    </div>
                  </div>
                </div>
              </Link>
            ))
          )}
        </div>
      </div>
    </section>
  );
}
