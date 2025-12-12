import { Link } from "wouter";
import { ArrowRight, Clock } from "lucide-react";

const newsItems = [
  {
    category: "Press Release",
    date: "Dec 10, 2025",
    title: "QuantaFONS Announces Breakthrough in Room-Temperature Quantum Processing",
    excerpt: "New compact quantum processor achieves stable qubit operations at ambient temperatures, opening doors for edge computing applications.",
    link: "/research",
  },
  {
    category: "Partnership",
    date: "Dec 5, 2025",
    title: "Strategic Partnership with European Space Agency for Quantum Communications",
    excerpt: "Multi-year agreement to develop quantum-secure satellite communication protocols for next-generation space missions.",
    link: "/projects",
  },
  {
    category: "Research",
    date: "Nov 28, 2025",
    title: "OncoAI Platform Achieves 94% Accuracy in Early Cancer Detection",
    excerpt: "Clinical trials demonstrate unprecedented precision in identifying early-stage tumors across multiple cancer types.",
    link: "/research",
  },
];

const upcomingEvents = [
  {
    date: "Jan 15",
    title: "Quantum Security Summit 2026",
    location: "Geneva, Switzerland",
  },
  {
    date: "Feb 8",
    title: "Healthcare AI Conference",
    location: "Boston, USA",
  },
  {
    date: "Mar 22",
    title: "Enterprise Tech Forum",
    location: "Singapore",
  },
];

export default function News() {
  return (
    <section className="py-20 lg:py-32 bg-secondary particles-bg border-t border-border">
      <div className="ibm-container relative z-10">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4 mb-12">
          <div>
            <p className="text-sm text-primary font-medium tracking-wide uppercase mb-2" data-testid="news-label">
              Latest Updates
            </p>
            <h2 data-testid="news-heading">News & Events</h2>
          </div>
          <Link href="/research">
            <span className="ibm-link cursor-pointer" data-testid="news-view-all">
              View all news <ArrowRight className="w-4 h-4" />
            </span>
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {newsItems.map((item, index) => (
            <article
              key={index}
              className="bg-background border border-border hi-tech-card overflow-hidden"
              data-testid={`news-card-${index}`}
            >
              <div className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-xs font-medium text-primary bg-primary/10 px-2 py-1">
                    {item.category}
                  </span>
                  <span className="text-xs text-muted-foreground flex items-center gap-1">
                    <Clock className="w-3 h-3" /> {item.date}
                  </span>
                </div>
                <h4 className="text-lg font-medium mb-3 leading-snug">{item.title}</h4>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">{item.excerpt}</p>
                <Link href={item.link}>
                  <span className="ibm-link cursor-pointer text-sm">
                    Read more <ArrowRight className="w-3 h-3" />
                  </span>
                </Link>
              </div>
            </article>
          ))}
        </div>

        <div className="bg-foreground text-white p-8 lg:p-12">
          <div className="flex flex-col lg:flex-row justify-between items-start gap-8">
            <div className="lg:w-1/3">
              <h3 className="text-white mb-4">Upcoming Events</h3>
              <p className="text-white/70 text-sm">
                Meet our team at industry conferences and learn about our latest innovations.
              </p>
            </div>
            <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-3 gap-6">
              {upcomingEvents.map((event, index) => (
                <div
                  key={index}
                  className="border-l-2 border-primary pl-4"
                  data-testid={`event-${index}`}
                >
                  <p className="text-primary font-medium mb-1">{event.date}</p>
                  <p className="text-white font-medium mb-1">{event.title}</p>
                  <p className="text-white/50 text-sm">{event.location}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
