import { ArrowRight } from "lucide-react";
import qSecureImg from "@assets/generated_images/q-secure_ai_camera.png";
import qIdImg from "@assets/generated_images/q-id_attendance_system.png";
import quantafonsAiImg from "@assets/generated_images/quantafons_ai_model.png";
import cancerResearchImg from "@assets/generated_images/cancer_research_ai.png";

const products = [
  {
    category: "AI Security",
    title: "Q-Secure Intelligence",
    description: "Real-time threat detection and anomaly analysis for enterprise surveillance. Integrates seamlessly with existing IP camera infrastructure to provide proactive security alerts.",
    image: qSecureImg,
    link: "#",
  },
  {
    category: "Biometrics",
    title: "Q-ID Attendance",
    description: "Contactless, high-speed facial recognition system for workforce management. Features 3D anti-spoofing technology and sub-second authentication latency.",
    image: qIdImg,
    link: "#",
  },
  {
    category: "Generative AI",
    title: "QuantaFONS AI (Eli S1)",
    description: "Proprietary Large Language Model optimized for scientific data processing and secure enterprise applications. Supports on-premise deployment for maximum data sovereignty.",
    image: quantafonsAiImg,
    link: "#",
  },
  {
    category: "Healthcare",
    title: "OncoAI Research",
    description: "Deep learning platform for analyzing chemotherapy efficacy on stem cells. Provides predictive modeling for treatment outcomes in oncology patients.",
    image: cancerResearchImg,
    link: "#",
  },
];

export default function Products() {
  return (
    <section id="products" className="bg-background py-16 lg:py-24 border-b border-gray-200">
      <div className="ibm-container">
        <h2 className="text-3xl lg:text-4xl font-normal mb-16">Our Products</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <div key={index} className="group flex flex-col h-full hover:bg-secondary transition-colors cursor-pointer">
              <div className="aspect-[16/9] w-full overflow-hidden bg-gray-100">
                <img 
                  src={product.image} 
                  alt={product.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-4 flex flex-col flex-1">
                <span className="text-xs uppercase tracking-wider text-muted-foreground mb-2 block">{product.category}</span>
                <h3 className="text-xl font-normal text-foreground mb-4 group-hover:text-primary transition-colors">
                  {product.title}
                </h3>
                <p className="text-sm text-foreground/70 leading-relaxed mb-8 flex-1">
                  {product.description}
                </p>
                <div className="mt-auto flex justify-end">
                   <ArrowRight className="w-5 h-5 text-primary opacity-0 group-hover:opacity-100 transition-opacity transform translate-x-0 group-hover:translate-x-1" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
