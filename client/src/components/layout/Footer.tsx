import { MapPin, Phone, Mail, Globe, Brain } from "lucide-react";

export default function Footer() {
  return (
    <footer id="contact" className="bg-black/40 border-t border-white/10 pt-20 pb-10 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[100px] pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <Brain className="w-8 h-8 text-primary" />
              <span className="text-2xl font-bold font-heading text-white">
                Quanta<span className="text-primary">FONS</span>
              </span>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              Pioneering the intersection of Quantum Computing, Artificial Intelligence, and Advanced Healthcare solutions for a better tomorrow.
            </p>
          </div>

          <div>
            <h3 className="text-white font-bold mb-6 text-lg">Products</h3>
            <ul className="space-y-4">
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Q-Secure</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Q-ID</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Eli S1 Model</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Medical AI</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold mb-6 text-lg">Projects</h3>
            <ul className="space-y-4">
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Q-Build</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Quantum Processors</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Spacecraft SHM</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold mb-6 text-lg">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-muted-foreground">
                <MapPin className="w-5 h-5 text-primary shrink-0 mt-1" />
                <span>Red Cross Road, Srinagar,<br />Kashmir, 19008</span>
              </li>
              <li className="flex items-center gap-3 text-muted-foreground">
                <Phone className="w-5 h-5 text-primary shrink-0" />
                <span>+91-8899424992</span>
              </li>
              <li className="flex items-center gap-3 text-muted-foreground">
                <Globe className="w-5 h-5 text-primary shrink-0" />
                <span>www.quantafons.ai</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} QuantaFONS AI. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-sm text-muted-foreground hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="text-sm text-muted-foreground hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
