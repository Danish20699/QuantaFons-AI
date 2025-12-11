import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/home/Hero";
import Products from "@/components/home/Products";
import Projects from "@/components/home/Projects";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Navbar is now in App.tsx layout */}
      <main>
        <Hero />
        <Products />
        <Projects />
      </main>
      {/* Footer is now in App.tsx layout */}
    </div>
  );
}
