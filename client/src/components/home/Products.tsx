import { motion } from "framer-motion";
import { Shield, ScanFace, Brain, Activity } from "lucide-react";
import qSecureImg from "@assets/generated_images/q-secure_ai_camera.png";
import qIdImg from "@assets/generated_images/q-id_attendance_system.png";
import quantafonsAiImg from "@assets/generated_images/quantafons_ai_model.png";
import cancerResearchImg from "@assets/generated_images/cancer_research_ai.png";

const products = [
  {
    id: 1,
    title: "Q-Secure",
    subtitle: "AI Security Cameras",
    description: "Next-gen surveillance powered by real-time threat detection algorithms.",
    image: qSecureImg,
    icon: Shield,
    color: "text-cyan-400",
  },
  {
    id: 2,
    title: "Q-ID",
    subtitle: "AI Attendance Camera",
    description: "Seamless, contactless biometric attendance with 99.9% accuracy.",
    image: qIdImg,
    icon: ScanFace,
    color: "text-blue-400",
  },
  {
    id: 3,
    title: "QuantaFONS AI",
    subtitle: "Eli S1 Language Model",
    description: "Our proprietary Generative Pretrained Transformer designed for enterprise scale.",
    image: quantafonsAiImg,
    icon: Brain,
    color: "text-purple-400",
  },
  {
    id: 4,
    title: "Medical AI",
    subtitle: "Oncology Research",
    description: "Analyzing chemotherapy impact on stem cells through advanced pattern recognition.",
    image: cancerResearchImg,
    icon: Activity,
    color: "text-pink-400",
  },
];

export default function Products() {
  return (
    <section id="products" className="py-24 bg-background relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold font-heading text-white mb-4">
            Our Products
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Cutting-edge hardware and software solutions powered by our advanced AI core.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm"
            >
              <div className="absolute inset-0 bg-linear-to-b from-transparent to-black/80 z-10" />
              
              <div className="relative h-64 md:h-80 overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>

              <div className="relative z-20 p-8 -mt-20">
                <div className={`inline-flex p-3 rounded-lg bg-black/50 border border-white/10 backdrop-blur-md mb-4 ${product.color}`}>
                  <product.icon className="w-6 h-6" />
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-2">{product.title}</h3>
                <p className={`text-sm font-medium mb-4 uppercase tracking-wider ${product.color}`}>
                  {product.subtitle}
                </p>
                <p className="text-gray-300 leading-relaxed">
                  {product.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
