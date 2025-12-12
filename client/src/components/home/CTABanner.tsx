import { Link } from "wouter";
import { ArrowRight, Calendar, Download } from "lucide-react";

export default function CTABanner() {
  return (
    <section className="py-20 lg:py-32 bg-primary orbs-bg">
      <div className="ibm-container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-white mb-6" data-testid="cta-heading">
              Ready to transform your enterprise?
            </h2>
            <p className="text-white/80 text-lg lg:text-xl leading-relaxed mb-8">
              Schedule a consultation with our solutions architects to discover how QuantaFONS can accelerate your digital transformation journey.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact">
                <button
                  className="bg-white text-primary hover:bg-white/90 min-h-[48px] px-8 flex items-center justify-between gap-4 text-sm transition-colors"
                  data-testid="cta-schedule-btn"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Schedule a demo</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </Link>
              <Link href="/research">
                <button
                  className="bg-transparent border border-white text-white hover:bg-white/10 min-h-[48px] px-8 flex items-center justify-between gap-4 text-sm transition-colors"
                  data-testid="cta-whitepaper-btn"
                >
                  <Download className="w-4 h-4" />
                  <span>Download whitepaper</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="bg-white/10 backdrop-blur p-6" data-testid="cta-stat-1">
              <p className="text-4xl font-light text-white mb-2">24hr</p>
              <p className="text-white/70 text-sm">Average response time</p>
            </div>
            <div className="bg-white/10 backdrop-blur p-6" data-testid="cta-stat-2">
              <p className="text-4xl font-light text-white mb-2">100+</p>
              <p className="text-white/70 text-sm">Solution architects</p>
            </div>
            <div className="bg-white/10 backdrop-blur p-6" data-testid="cta-stat-3">
              <p className="text-4xl font-light text-white mb-2">15</p>
              <p className="text-white/70 text-sm">Years of experience</p>
            </div>
            <div className="bg-white/10 backdrop-blur p-6" data-testid="cta-stat-4">
              <p className="text-4xl font-light text-white mb-2">ISO</p>
              <p className="text-white/70 text-sm">27001 certified</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
