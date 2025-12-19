import { useState } from "react";
import { ArrowRight, MapPin, Phone, Mail, CheckCircle } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    subject: "Sales Inquiry",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { ref: sectionRef, isVisible } = useScrollReveal();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  return (
    <div className="pt-24 pb-16 min-h-screen bg-background text-foreground hi-tech-grid overflow-hidden">
      <div className="ibm-container relative" ref={sectionRef}>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          <div className={`lg:col-span-5 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <h6 className="text-sm font-bold uppercase tracking-widest text-primary mb-2">Get in touch</h6>
            <h1 className="font-light text-5xl mb-8">Contact Us</h1>
            <p className="text-lg text-muted-foreground mb-12 leading-relaxed">
              Whether you have a question about our products, pricing, or need technical support, our team is ready to answer all your questions.
            </p>

            <div className="space-y-8">
              <div className={`flex items-start gap-4 transition-all duration-500 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'}`} style={{ transitionDelay: '200ms' }}>
                <div className="w-12 h-12 flex items-center justify-center bg-primary/10 text-primary">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">Headquarters</h4>
                  <p className="text-muted-foreground">
                    Red Cross Road,<br />
                    Srinagar, Kashmir,<br />
                    19008, India
                  </p>
                </div>
              </div>

              <div className={`flex items-start gap-4 transition-all duration-500 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'}`} style={{ transitionDelay: '300ms' }}>
                <div className="w-12 h-12 flex items-center justify-center bg-primary/10 text-primary">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">Phone</h4>
                  <p className="text-muted-foreground">+91-8899424992</p>
                  <p className="text-sm text-muted-foreground mt-1">Mon-Fri, 9am - 6pm IST</p>
                </div>
              </div>

              <div className={`flex items-start gap-4 transition-all duration-500 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'}`} style={{ transitionDelay: '400ms' }}>
                <div className="w-12 h-12 flex items-center justify-center bg-primary/10 text-primary">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">Email</h4>
                  <p className="text-muted-foreground">contact@quantafons.ai</p>
                  <p className="text-muted-foreground">support@quantafons.ai</p>
                </div>
              </div>
            </div>
          </div>

          <div className={`lg:col-span-7 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '300ms' }}>
            {isSubmitted ? (
              <div className="bg-secondary p-8 lg:p-12 border border-gray-200 hi-tech-card text-center" data-testid="status-contact-success">
                <div className="w-20 h-20 mx-auto mb-6 bg-green-100 rounded-full flex items-center justify-center animate-scale-in">
                  <CheckCircle className="w-10 h-10 text-green-600" />
                </div>
                <h3 className="text-2xl font-light mb-4" data-testid="text-success-title">Message Sent!</h3>
                <p className="text-muted-foreground mb-8" data-testid="text-success-description">
                  Thank you for reaching out. Our team will get back to you within 24 hours.
                </p>
                <button 
                  onClick={() => { setIsSubmitted(false); setFormData({ firstName: "", lastName: "", email: "", subject: "Sales Inquiry", message: "" }); }}
                  className="ibm-btn-secondary inline-flex"
                  data-testid="button-send-another"
                >
                  <span>Send another message</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-secondary p-8 lg:p-12 border border-gray-200 hi-tech-card glow-on-hover">
                <h3 className="text-2xl font-light mb-8">Send us a message</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label className="block text-sm font-bold text-foreground mb-2">First Name</label>
                    <input 
                      type="text" 
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      required
                      className="w-full h-12 px-4 bg-white border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-hidden transition-all" 
                      data-testid="input-first-name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-foreground mb-2">Last Name</label>
                    <input 
                      type="text" 
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      required
                      className="w-full h-12 px-4 bg-white border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-hidden transition-all" 
                      data-testid="input-last-name"
                    />
                  </div>
                </div>

                <div className="mb-6">
                  <label className="block text-sm font-bold text-foreground mb-2">Email Address</label>
                  <input 
                    type="email" 
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full h-12 px-4 bg-white border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-hidden transition-all" 
                    data-testid="input-email"
                  />
                </div>

                <div className="mb-6">
                  <label className="block text-sm font-bold text-foreground mb-2">Subject</label>
                  <select 
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full h-12 px-4 bg-white border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-hidden transition-all"
                    data-testid="select-subject"
                  >
                    <option>Sales Inquiry</option>
                    <option>Technical Support</option>
                    <option>Partnership Opportunity</option>
                    <option>Media Inquiry</option>
                  </select>
                </div>

                <div className="mb-8">
                  <label className="block text-sm font-bold text-foreground mb-2">Message</label>
                  <textarea 
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="w-full h-32 p-4 bg-white border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-hidden transition-all resize-none"
                    data-testid="textarea-message"
                  ></textarea>
                </div>

                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="ibm-btn-primary w-full disabled:opacity-70 disabled:cursor-not-allowed"
                  data-testid="button-submit"
                >
                  <span>{isSubmitting ? "Sending..." : "Send Message"}</span>
                  {!isSubmitting && <ArrowRight className="w-4 h-4" />}
                  {isSubmitting && (
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
