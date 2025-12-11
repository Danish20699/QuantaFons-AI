import { MapPin, Phone, Mail, Globe, Brain, ArrowRight } from "lucide-react";

export default function Footer() {
  return (
    <footer id="contact" className="bg-secondary pt-24 pb-12 border-t border-border">
      <div className="px-4 lg:px-8 max-w-[1600px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-24 mb-24">
          
          <div className="space-y-6">
            <div className="flex items-center gap-2 text-foreground mb-6">
              <Brain className="w-6 h-6" />
              <span className="text-lg font-bold tracking-wide uppercase">QuantaFONS</span>
            </div>
            <div className="space-y-4">
              <h4 className="text-sm font-bold uppercase tracking-wider text-muted-foreground">Headquarters</h4>
              <p className="text-foreground leading-relaxed">
                Red Cross Road,<br />
                Srinagar, Kashmir,<br />
                19008, India
              </p>
            </div>
            <div className="space-y-2 pt-4">
               <a href="tel:+918899424992" className="flex items-center gap-2 text-primary hover:underline">
                <Phone className="w-4 h-4" /> +91-8899424992
              </a>
              <a href="https://quantafons.ai" className="flex items-center gap-2 text-primary hover:underline">
                <Globe className="w-4 h-4" /> www.quantafons.ai
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-muted-foreground mb-6">Products</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-foreground hover:text-primary transition-colors">Q-Secure Intelligence</a></li>
              <li><a href="#" className="text-foreground hover:text-primary transition-colors">Q-ID Biometrics</a></li>
              <li><a href="#" className="text-foreground hover:text-primary transition-colors">Eli S1 Model</a></li>
              <li><a href="#" className="text-foreground hover:text-primary transition-colors">OncoAI Research</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-muted-foreground mb-6">Company</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-foreground hover:text-primary transition-colors">About Us</a></li>
              <li><a href="#" className="text-foreground hover:text-primary transition-colors">Careers</a></li>
              <li><a href="#" className="text-foreground hover:text-primary transition-colors">Investor Relations</a></li>
              <li><a href="#" className="text-foreground hover:text-primary transition-colors">Newsroom</a></li>
              <li><a href="#" className="text-foreground hover:text-primary transition-colors">Privacy Policy</a></li>
            </ul>
          </div>

          <div className="bg-background p-6 border border-border">
            <h4 className="text-lg font-bold mb-4">Subscribe to our newsletter</h4>
            <p className="text-sm text-muted-foreground mb-4">Latest updates on Quantum AI and Medical Research.</p>
            <div className="space-y-3">
              <input 
                type="email" 
                placeholder="Email address" 
                className="w-full h-10 px-4 bg-secondary border-b border-muted-foreground/50 focus:border-primary focus:outline-hidden transition-colors"
              />
              <button className="w-full h-10 bg-primary text-white font-medium hover:bg-primary/90 transition-colors flex items-center justify-between px-4">
                Subscribe <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-border gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} QuantaFONS AI. All rights reserved.
          </p>
          <div className="flex gap-4 text-sm text-muted-foreground">
             <span>Srinagar</span>
             <span>•</span>
             <span>New York</span>
             <span>•</span>
             <span>London</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
