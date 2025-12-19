import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/home/Hero";
import Stats from "@/components/home/Stats";
import Products from "@/components/home/Products";
import Features from "@/components/home/Features";
import Projects from "@/components/home/Projects";
import ClientLogos from "@/components/home/ClientLogos";
import CTABanner from "@/components/home/CTABanner";
import News from "@/components/home/News";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Navbar is now in App.tsx layout */}
      <main>
        <Hero />
        <Stats />
        <Products />
        <Features />
        <Projects />
        <ClientLogos />
        <CTABanner />
        <News />
      </main>
      {/* Footer is now in App.tsx layout */}
    </div>
  );
}
