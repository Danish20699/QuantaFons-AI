import { Link, useRoute } from "wouter";
import { ArrowLeft, Check, Download } from "lucide-react";
import { useState, useEffect } from "react";
import NotFound from "./not-found";

type Product = {
  id: string;
  name: string;
  category: string;
  tagline: string;
  description: string;
  image: string;
  icon: string;
  specs: Array<{ label: string; value: string }>;
  features: Array<{ feature: string }>;
};

export default function ProductDetail() {
  const [, params] = useRoute("/products/:id");
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    async function fetchProduct() {
      if (!params?.id) return;
      
      try {
        const response = await fetch(`/api/products/${params.id}`);
        if (!response.ok) {
          setNotFound(true);
          return;
        }
        const data = await response.json();
        setProduct(data);
      } catch (error) {
        console.error("Failed to fetch product:", error);
        setNotFound(true);
      } finally {
        setLoading(false);
      }
    }
    
    fetchProduct();
  }, [params?.id]);

  if (loading) {
    return (
      <div className="pt-24 pb-16 min-h-screen bg-background text-foreground flex items-center justify-center">
        <div className="text-xl text-muted-foreground">Loading...</div>
      </div>
    );
  }

  if (notFound || !product) return <NotFound />;

  return (
    <div className="pt-24 pb-16 min-h-screen bg-background text-foreground">
      <div className="ibm-container">
        <Link href="/products" className="ibm-link mb-8 inline-flex">
          <ArrowLeft className="w-4 h-4" /> Back to Products
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 mb-16">
          <div className="lg:col-span-8">
            <h1 className="font-light text-5xl lg:text-7xl mb-6">{product.name}</h1>
            <p className="text-2xl text-muted-foreground font-light leading-relaxed mb-8">
              {product.tagline}
            </p>
            <div className="flex gap-4">
              <button className="ibm-btn-primary">
                Contact Sales
              </button>
              <button className="ibm-btn-secondary">
                <Download className="w-4 h-4 mr-2" /> Datasheet
              </button>
            </div>
          </div>
        </div>

        <div className="w-full aspect-[21/9] bg-gray-100 mb-16 overflow-hidden">
          <img 
            src={product.image} 
            alt={product.name} 
            className="w-full h-full object-cover"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16">
          <div className="lg:col-span-4">
            <h3 className="text-xl font-bold mb-6 border-t-2 border-primary pt-4">Technical Specifications</h3>
            <div className="space-y-4">
              {product.specs.map((spec, i) => (
                <div key={i} className="flex justify-between py-3 border-b border-gray-200">
                  <span className="text-muted-foreground text-sm">{spec.label}</span>
                  <span className="font-medium text-right">{spec.value}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-8">
             <h3 className="text-xl font-bold mb-6 border-t-2 border-gray-200 pt-4">Key Capabilities</h3>
             <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
               {product.features.map((item, i) => (
                 <div key={i} className="flex items-start gap-4">
                   <div className="bg-primary/10 p-2 rounded-full mt-1">
                     <Check className="w-4 h-4 text-primary" />
                   </div>
                   <div>
                     <p className="font-medium text-lg">{item.feature}</p>
                     <p className="text-muted-foreground text-sm mt-1">
                       Engineered for high-availability environments and mission-critical workflows.
                     </p>
                   </div>
                 </div>
               ))}
             </div>

             <div className="mt-16 bg-secondary p-8 border border-gray-300">
               <h4 className="text-lg font-bold mb-4">Ready to deploy?</h4>
               <p className="mb-6 text-foreground/70">
                 Our engineering team is ready to assist with integration and custom configuration for your specific environment.
               </p>
               <button className="ibm-btn-secondary w-full sm:w-auto bg-white">
                 Schedule a Demo
               </button>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
}
