import { Link } from "wouter";
import { ArrowRight } from "lucide-react";
import { products } from "@/lib/data";

export default function Products() {
  return (
    <section id="products" className="bg-background py-16 lg:py-24 border-b border-gray-200">
      <div className="ibm-container">
        <h2 className="text-3xl lg:text-4xl font-normal mb-16">Our Products</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <Link key={product.id} href={`/products/${product.id}`}>
              <div className="group flex flex-col h-full hover:bg-secondary transition-colors cursor-pointer">
                <div className="aspect-[16/9] w-full overflow-hidden bg-gray-100">
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-4 flex flex-col flex-1">
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
          ))}
        </div>
      </div>
    </section>
  );
}
