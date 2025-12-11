import { Link } from "wouter";
import { ArrowRight } from "lucide-react";
import { products } from "@/lib/data";

export default function ProductsPage() {
  return (
    <div className="pt-24 pb-16 min-h-screen bg-background text-foreground">
      <div className="ibm-container">
        <div className="mb-16 border-b border-gray-200 pb-8">
          <h6 className="text-sm font-bold uppercase tracking-widest text-primary mb-2">Our Portfolio</h6>
          <h1 className="font-light text-5xl lg:text-6xl mb-6">Products & Platforms</h1>
          <p className="text-xl text-muted-foreground max-w-3xl leading-relaxed">
            Scalable, secure, and intelligent solutions designed for modern infrastructure. 
            From quantum-resistant security to life-saving medical AI.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-16">
          {products.map((product) => (
            <div key={product.id} className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start group">
              <div className="lg:col-span-5 order-2 lg:order-1">
                <div className="aspect-[4/3] w-full overflow-hidden bg-gray-100 relative">
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/5 transition-colors duration-300" />
                </div>
              </div>
              
              <div className="lg:col-span-7 order-1 lg:order-2 flex flex-col h-full justify-center">
                <div className="flex items-center gap-2 mb-4">
                  <product.icon className="w-5 h-5 text-primary" />
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
          ))}
        </div>
      </div>
    </div>
  );
}
