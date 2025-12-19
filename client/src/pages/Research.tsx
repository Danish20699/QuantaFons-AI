import { Link } from "wouter";
import { FileText, Download, Award, Users, BookOpen } from "lucide-react";
import { useState, useEffect } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const featuredPaper = {
  title: "Room-Temperature Quantum Coherence in Compact Semiconductor Systems",
  authors: "Dr. Maria Chen, Dr. James Okonkwo, Prof. Hans Weber",
  journal: "Nature Quantum Information",
  date: "October 2025",
  impact: "Cited 247 times",
  abstract: "We demonstrate sustained quantum coherence at room temperature using novel semiconductor heterostructures, achieving decoherence times exceeding 100 microseconds. This breakthrough enables practical quantum computing in edge devices without cryogenic cooling.",
};

const researchTeam = [
  { name: "Dr. Maria Chen", role: "Chief Scientist", focus: "Quantum Computing", publications: "150+" },
  { name: "Prof. Hans Weber", role: "Research Director", focus: "Cryptography", publications: "200+" },
  { name: "Dr. James Okonkwo", role: "AI Lab Lead", focus: "Machine Learning", publications: "85+" },
  { name: "Dr. Sarah Tanaka", role: "Medical AI Lead", focus: "Oncology AI", publications: "120+" },
];

const researchStats = [
  { value: "200+", label: "Published Papers" },
  { value: "50+", label: "Patents Filed" },
  { value: "25", label: "Active Research Projects" },
  { value: "12", label: "University Partnerships" },
];

type ResearchPaper = {
  id: string;
  title: string;
  authors: string;
  date: string;
  journal: string;
  abstract: string;
};

export default function Research() {
  const [researchPapers, setResearchPapers] = useState<ResearchPaper[]>([]);
  const [loading, setLoading] = useState(true);
  const { ref: sectionRef, isVisible } = useScrollReveal();

  useEffect(() => {
    async function fetchResearchPapers() {
      try {
        const response = await fetch("/api/research");
        const data = await response.json();
        setResearchPapers(data);
      } catch (error) {
        console.error("Failed to fetch research papers:", error);
      } finally {
        setLoading(false);
      }
    }
    
    fetchResearchPapers();
  }, []);

  if (loading) {
    return (
      <div className="pt-24 pb-16 min-h-screen bg-background text-foreground">
        <div className="ibm-container">
          <div className="mb-16 border-b border-gray-200 pb-8">
            <div className="h-4 w-32 skeleton mb-4"></div>
            <div className="h-14 w-3/4 skeleton mb-6"></div>
            <div className="h-6 w-2/3 skeleton"></div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            <div className="lg:col-span-8 space-y-8">
              {Array.from({ length: 4 }).map((_, i) => (
                <div key={i} className="border-b border-gray-200 pb-8 space-y-4">
                  <div className="flex gap-4">
                    <div className="h-4 w-24 skeleton"></div>
                    <div className="h-4 w-16 skeleton"></div>
                    <div className="h-4 w-32 skeleton"></div>
                  </div>
                  <div className="h-8 w-3/4 skeleton"></div>
                  <div className="h-16 w-full skeleton"></div>
                  <div className="flex gap-4">
                    <div className="h-4 w-24 skeleton"></div>
                    <div className="h-4 w-16 skeleton"></div>
                  </div>
                </div>
              ))}
            </div>
            <div className="lg:col-span-4">
              <div className="h-64 skeleton"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-24 pb-16 min-h-screen bg-background text-foreground hi-tech-grid overflow-hidden">
      <div className="ibm-container relative" ref={sectionRef}>
        <div className={`mb-16 border-b border-gray-200 pb-8 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h6 className="text-sm font-bold uppercase tracking-widest text-primary mb-2">Scientific Publications</h6>
          <h1 className="font-light text-5xl lg:text-6xl mb-6">Research & Insights</h1>
          <p className="text-xl text-muted-foreground max-w-3xl leading-relaxed">
             Our team publishes regularly in top-tier scientific journals. Explore our latest findings in quantum mechanics and artificial intelligence.
          </p>
        </div>

        {/* Featured Paper Section */}
        <section className="mb-16 bg-primary text-white p-8 lg:p-12 orbs-bg" data-testid="featured-paper">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div className="lg:col-span-8">
              <div className="flex items-center gap-3 mb-4">
                <Award className="w-5 h-5" />
                <span className="text-sm font-medium uppercase tracking-wide">Featured Publication</span>
              </div>
              <h3 className="text-white text-2xl lg:text-3xl font-light mb-4">{featuredPaper.title}</h3>
              <p className="text-white/80 mb-6">{featuredPaper.abstract}</p>
              <div className="flex flex-wrap gap-4 text-sm text-white/70">
                <span>{featuredPaper.journal}</span>
                <span>•</span>
                <span>{featuredPaper.date}</span>
                <span>•</span>
                <span>{featuredPaper.impact}</span>
              </div>
            </div>
            <div className="lg:col-span-4 flex flex-col justify-center">
              <div className="bg-white/10 backdrop-blur p-6">
                <p className="text-white/70 text-sm mb-2">Authors</p>
                <p className="text-white font-medium">{featuredPaper.authors}</p>
                <button className="mt-6 bg-white text-primary hover:bg-white/90 min-h-[40px] px-6 flex items-center gap-3 text-sm transition-colors w-full justify-center">
                  <Download className="w-4 h-4" />
                  <span>Download PDF</span>
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Research Stats Section */}
        <section className="mb-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {researchStats.map((stat, index) => (
              <div key={index} className="bg-secondary p-6 text-center border border-border" data-testid={`research-stat-${index}`}>
                <p className="text-3xl lg:text-4xl font-light text-primary mb-2">{stat.value}</p>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </section>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          <div className="lg:col-span-8">
             <div className="space-y-8">
               {researchPapers.map((paper, index) => (
                 <div 
                   key={paper.id} 
                   className={`border-b border-gray-200 pb-8 last:border-0 transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                   style={{ transitionDelay: `${index * 100 + 200}ms` }}
                   data-testid={`paper-${paper.id}`}
                 >
                   <div className="flex flex-col md:flex-row md:items-center gap-4 text-sm text-muted-foreground mb-3">
                     <span className="font-bold text-primary uppercase tracking-wider">{paper.journal}</span>
                     <span className="hidden md:inline">•</span>
                     <span>{paper.date}</span>
                     <span className="hidden md:inline">•</span>
                     <span>{paper.authors}</span>
                   </div>
                   <h3 className="text-2xl font-medium mb-4 hover:text-primary transition-colors cursor-pointer">
                     {paper.title}
                   </h3>
                   <p className="text-foreground/70 leading-relaxed mb-6">
                     {paper.abstract}
                   </p>
                   <div className="flex gap-6">
                     <button className="ibm-link">
                       Read Full Paper
                     </button>
                     <button className="ibm-link text-muted-foreground hover:text-primary">
                       <Download className="w-4 h-4 mr-2" /> PDF
                     </button>
                   </div>
                 </div>
               ))}
             </div>
          </div>

          <div className={`lg:col-span-4 transition-all duration-700 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`} style={{ transitionDelay: '400ms' }}>
            <div className="bg-secondary p-8 border border-gray-200 sticky top-32 hi-tech-card glow-on-hover">
              <h3 className="text-xl font-medium mb-6">Research Areas</h3>
              <ul className="space-y-3">
                {["Quantum Computing", "Generative AI", "Oncology", "Structural Engineering", "Cryptography"].map((area, i) => (
                  <li key={i}>
                    <label className="flex items-center gap-3 cursor-pointer hover:text-primary">
                      <input type="checkbox" className="w-4 h-4 rounded-none border-gray-400 text-primary focus:ring-0" />
                      <span>{area}</span>
                    </label>
                  </li>
                ))}
              </ul>
              
              <div className="mt-8 pt-8 border-t border-gray-300">
                <h4 className="font-bold mb-2">Join our team</h4>
                <p className="text-sm text-muted-foreground mb-4">
                  We are looking for Ph.D. candidates in Quantum Physics and ML.
                </p>
                <Link href="/contact">
                  <span className="ibm-link">View Open Positions</span>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Research Team Section */}
        <section className="mt-24 pt-16 border-t border-border">
          <div className="mb-12">
            <p className="text-sm text-primary font-medium tracking-wide uppercase mb-2">Our Experts</p>
            <h2 className="mb-4">Research Leadership</h2>
            <p className="text-muted-foreground text-lg max-w-2xl">
              World-class scientists and researchers driving innovation at QuantaFONS.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {researchTeam.map((member, index) => (
              <div
                key={index}
                className="bg-secondary p-6 border border-border hi-tech-card"
                data-testid={`team-member-${index}`}
              >
                <div className="w-16 h-16 bg-primary/10 flex items-center justify-center mb-4">
                  <Users className="w-8 h-8 text-primary" />
                </div>
                <h4 className="text-lg font-medium mb-1">{member.name}</h4>
                <p className="text-primary text-sm mb-3">{member.role}</p>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <div className="flex justify-between">
                    <span>Focus:</span>
                    <span className="text-foreground">{member.focus}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Publications:</span>
                    <span className="text-foreground">{member.publications}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Subscribe CTA Section */}
        <section className="mt-24 bg-foreground text-white p-12 lg:p-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <BookOpen className="w-10 h-10 mb-4 text-primary" />
              <h3 className="text-white text-3xl mb-4">Stay Updated</h3>
              <p className="text-white/70 text-lg">
                Subscribe to our research newsletter for the latest publications, breakthroughs, and event invitations.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 min-h-[48px] px-4 bg-white/10 border border-white/20 text-white placeholder:text-white/50 focus:outline-none focus:border-primary"
                data-testid="newsletter-email"
              />
              <button className="bg-primary text-white hover:bg-primary/90 min-h-[48px] px-8 flex items-center justify-center gap-3 text-sm transition-colors" data-testid="newsletter-subscribe-btn">
                <span>Subscribe</span>
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
