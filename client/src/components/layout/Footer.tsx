export default function Footer() {
  return (
    <footer className="bg-secondary border-t border-gray-300 pt-16 pb-8 text-sm">
      <div className="ibm-container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 lg:gap-12 mb-16">
          <div className="col-span-1 md:col-span-1">
            <h4 className="font-semibold mb-4 text-foreground">QuantaFONS</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-foreground/70 hover:text-primary hover:underline">Contact</a></li>
              <li><a href="#" className="text-foreground/70 hover:text-primary hover:underline">Privacy</a></li>
              <li><a href="#" className="text-foreground/70 hover:text-primary hover:underline">Terms of use</a></li>
              <li><a href="#" className="text-foreground/70 hover:text-primary hover:underline">Accessibility</a></li>
            </ul>
          </div>
          
          <div className="col-span-1 md:col-span-1">
            <h4 className="font-semibold mb-4 text-foreground">Products</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-foreground/70 hover:text-primary hover:underline">Q-Secure</a></li>
              <li><a href="#" className="text-foreground/70 hover:text-primary hover:underline">Q-ID</a></li>
              <li><a href="#" className="text-foreground/70 hover:text-primary hover:underline">Eli S1 Model</a></li>
              <li><a href="#" className="text-foreground/70 hover:text-primary hover:underline">Q-Build</a></li>
            </ul>
          </div>

          <div className="col-span-1 md:col-span-2 bg-white p-6 border border-gray-200">
            <h4 className="font-semibold mb-2">Global Headquarters</h4>
            <p className="text-foreground/70 mb-4 leading-relaxed">
              Red Cross Road, Srinagar<br />
              Kashmir, 19008, India
            </p>
            <p className="text-foreground/70 mb-1">
              <span className="font-medium text-foreground">Phone:</span> +91-8899424992
            </p>
            <p className="text-foreground/70">
              <span className="font-medium text-foreground">Email:</span> contact@quantafons.ai
            </p>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-300 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
           <div className="flex flex-col md:flex-row gap-4 md:gap-8">
             <span className="text-foreground/60">Copyright © {new Date().getFullYear()} QuantaFONS</span>
           </div>
           <div className="flex gap-4">
             <span className="text-foreground/60 text-xs">Based in India</span>
           </div>
        </div>
      </div>
    </footer>
  );
}
