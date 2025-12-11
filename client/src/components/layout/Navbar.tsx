import { useState, useEffect } from "react";
import { Link } from "wouter";
import { Menu, X, Globe, User, Search, ChevronDown } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Products", href: "#products" },
    { name: "Solutions", href: "#solutions" },
    { name: "Consulting", href: "#consulting" },
    { name: "Support", href: "#support" },
    { name: "More", href: "#more" },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200 transition-all duration-200 h-12`}>
      <div className="flex items-center justify-between h-full px-4 lg:px-6 max-w-[1584px] mx-auto w-full">
        <div className="flex items-center h-full">
          <button 
            className="lg:hidden mr-4 text-foreground p-2 hover:bg-secondary transition-colors"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>

          <Link href="/" className="flex items-center gap-2 text-foreground mr-8 h-full">
            <span className="font-semibold text-lg tracking-tight">QuantaFONS</span>
          </Link>

          <div className="hidden lg:flex items-center h-full gap-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm text-foreground/80 hover:text-foreground h-full flex items-center border-b-2 border-transparent hover:border-primary transition-colors px-1"
              >
                {link.name}
                {link.name === "More" && <ChevronDown className="w-3 h-3 ml-1" />}
              </a>
            ))}
          </div>
        </div>

        <div className="flex items-center h-full">
          <button className="h-full w-12 flex items-center justify-center hover:bg-secondary border-l border-transparent hover:border-border transition-colors">
             <Search className="w-4 h-4" />
          </button>
          <button className="h-full w-12 flex items-center justify-center hover:bg-secondary border-l border-transparent hover:border-border transition-colors">
             <User className="w-4 h-4" />
          </button>
          <button className="h-full w-12 flex items-center justify-center hover:bg-secondary border-l border-transparent hover:border-border transition-colors hidden sm:flex">
             <Globe className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="fixed inset-0 top-12 bg-white z-40 lg:hidden overflow-y-auto">
          <div className="flex flex-col p-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="py-4 text-lg text-foreground border-b border-gray-100"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <div className="mt-8 space-y-4">
               <a href="#" className="block py-2 text-sm text-foreground">Contact Sales</a>
               <a href="#" className="block py-2 text-sm text-foreground">Log in</a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
