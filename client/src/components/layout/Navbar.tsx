import { useState } from "react";
import { Link } from "wouter";
import { Menu, X, Brain, ChevronDown } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Products", href: "#products" },
    { name: "Solutions", href: "#solutions" },
    { name: "Research", href: "#research" },
    { name: "Consulting", href: "#consulting" },
    { name: "About", href: "#about" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background border-b border-border h-12 flex items-center">
      <div className="w-full px-4 lg:px-8 flex items-center justify-between h-full">
        <Link href="/" className="flex items-center gap-2 text-foreground hover:opacity-80 transition-opacity">
          <Brain className="w-5 h-5" />
          <span className="text-sm font-bold tracking-wide uppercase">QuantaFONS</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center h-full">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="h-full flex items-center px-6 text-sm text-foreground/80 hover:bg-secondary hover:text-foreground transition-colors border-l border-transparent hover:border-border"
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contact"
            className="h-full flex items-center px-6 text-sm font-bold bg-primary text-white hover:bg-primary/90 transition-colors ml-4"
          >
            Contact Sales
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-foreground p-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="absolute top-12 left-0 w-full bg-background border-b border-border shadow-lg md:hidden">
          <div className="flex flex-col">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-4 py-3 text-sm text-foreground hover:bg-secondary border-b border-border/50"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contact"
              className="px-4 py-3 text-sm font-bold text-primary hover:bg-secondary"
              onClick={() => setIsOpen(false)}
            >
              Contact Sales
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
