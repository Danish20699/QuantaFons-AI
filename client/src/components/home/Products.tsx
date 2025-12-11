import { Shield, ScanFace, Brain, Activity, ArrowRight } from "lucide-react";
import qSecureImg from "@assets/generated_images/q-secure_ai_camera.png";
import qIdImg from "@assets/generated_images/q-id_attendance_system.png";
import quantafonsAiImg from "@assets/generated_images/quantafons_ai_model.png";
import cancerResearchImg from "@assets/generated_images/cancer_research_ai.png";

const products = [
  {
    id: "01",
    title: "Q-Secure Intelligence",
    category: "AI Security",
    description: "Enterprise-grade surveillance system leveraging real-time computer vision to detect threats, anomalies, and unauthorized access with 99.9% precision.",
    details: [
      "Real-time Threat Detection",
      "Behavioral Analysis",
      "Automated Alerting System",
      "Edge Computing Integration"
    ],
    image: qSecureImg,
  },
  {
    id: "02",
    title: "Q-ID Biometrics",
    category: "Identity Management",
    description: "Contactless, high-throughput attendance and access control system. Uses 3D facial mapping to ensure secure entry for high-traffic environments.",
    details: [
      "0.2s Recognition Speed",
      "Anti-Spoofing Technology",
      "Cloud & On-Prem Support",
      "Seamless API Integration"
    ],
    image: qIdImg,
  },
  {
    id: "03",
    title: "QuantaFONS AI (Eli S1)",
    category: "Generative AI",
    description: "A proprietary Generative Pretrained Transformer tailored for complex industrial logic, coding, and scientific data analysis. Built for enterprise privacy.",
    details: [
      "175B Parameter Model",
      "Context-Aware Processing",
      "Code Generation & Debugging",
      "Secure Data Handling"
    ],
    image: quantafonsAiImg,
  },
  {
    id: "04",
    title: "OncoAI Research",
    category: "Healthcare",
    description: "Advanced machine learning algorithms analyzing the efficacy of chemotherapy and radiotherapy on stem cells to optimize cancer treatment protocols.",
    details: [
      "Stem Cell Viability Analysis",
      "Treatment Outcome Prediction",
      "Radiotherapy Optimization",
      "Clinical Data Correlation"
    ],
    image: cancerResearchImg,
  },
];

export default function Products() {
  return (
    <section id="products" className="py-24 bg-card border-b border-border">
      <div className="px-4 lg:px-8 max-w-[1600px] mx-auto">
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-medium mb-4">Enterprise Products</h2>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Scalable, secure, and intelligent solutions designed for modern infrastructure.
          </p>
        </div>

        <div className="divide-y divide-border border-t border-border">
          {products.map((product) => (
            <div key={product.id} className="grid grid-cols-1 lg:grid-cols-12 gap-8 py-16 group">
              <div className="lg:col-span-3">
                <span className="text-sm font-mono text-muted-foreground block mb-2">{product.id} / {product.category}</span>
                <h3 className="text-2xl font-medium text-foreground">{product.title}</h3>
              </div>
              
              <div className="lg:col-span-5">
                <p className="text-foreground/80 leading-relaxed mb-8 text-lg">
                  {product.description}
                </p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-2 gap-x-4 mb-8">
                  {product.details.map((detail, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <div className="w-1 h-1 bg-primary" />
                      {detail}
                    </li>
                  ))}
                </ul>
                <button className="text-primary hover:text-primary/80 font-medium text-sm flex items-center gap-2 group-hover:underline">
                  View Specifications <ArrowRight className="w-4 h-4" />
                </button>
              </div>

              <div className="lg:col-span-4">
                <div className="aspect-video bg-white border border-border overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.title} 
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
