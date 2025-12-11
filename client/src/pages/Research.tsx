import { Link } from "wouter";
import { FileText, Download } from "lucide-react";
import { useState, useEffect } from "react";

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
      <div className="pt-24 pb-16 min-h-screen bg-background text-foreground flex items-center justify-center">
        <div className="text-xl text-muted-foreground">Loading research...</div>
      </div>
    );
  }

  return (
    <div className="pt-24 pb-16 min-h-screen bg-background text-foreground">
      <div className="ibm-container">
        <div className="mb-16 border-b border-gray-200 pb-8">
          <h6 className="text-sm font-bold uppercase tracking-widest text-primary mb-2">Scientific Publications</h6>
          <h1 className="font-light text-5xl lg:text-6xl mb-6">Research & Insights</h1>
          <p className="text-xl text-muted-foreground max-w-3xl leading-relaxed">
             Our team publishes regularly in top-tier scientific journals. Explore our latest findings in quantum mechanics and artificial intelligence.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          <div className="lg:col-span-8">
             <div className="space-y-8">
               {researchPapers.map((paper) => (
                 <div key={paper.id} className="border-b border-gray-200 pb-8 last:border-0">
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

          <div className="lg:col-span-4">
            <div className="bg-secondary p-8 border border-gray-200 sticky top-32">
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
      </div>
    </div>
  );
}
