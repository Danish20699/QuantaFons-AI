import { ArrowRight, MapPin, Phone, Mail } from "lucide-react";

export default function Contact() {
  return (
    <div className="pt-24 pb-16 min-h-screen bg-background text-foreground">
      <div className="ibm-container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          <div className="lg:col-span-5">
            <h6 className="text-sm font-bold uppercase tracking-widest text-primary mb-2">Get in touch</h6>
            <h1 className="font-light text-5xl mb-8">Contact Us</h1>
            <p className="text-lg text-muted-foreground mb-12 leading-relaxed">
              Whether you have a question about our products, pricing, or need technical support, our team is ready to answer all your questions.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <MapPin className="w-6 h-6 text-primary mt-1" />
                <div>
                  <h4 className="font-bold text-lg mb-1">Headquarters</h4>
                  <p className="text-muted-foreground">
                    Red Cross Road,<br />
                    Srinagar, Kashmir,<br />
                    19008, India
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Phone className="w-6 h-6 text-primary mt-1" />
                <div>
                  <h4 className="font-bold text-lg mb-1">Phone</h4>
                  <p className="text-muted-foreground">+91-8899424992</p>
                  <p className="text-sm text-muted-foreground mt-1">Mon-Fri, 9am - 6pm IST</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Mail className="w-6 h-6 text-primary mt-1" />
                <div>
                  <h4 className="font-bold text-lg mb-1">Email</h4>
                  <p className="text-muted-foreground">contact@quantafons.ai</p>
                  <p className="text-muted-foreground">support@quantafons.ai</p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <form className="bg-secondary p-8 lg:p-12 border border-gray-200">
              <h3 className="text-2xl font-light mb-8">Send us a message</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-sm font-bold text-foreground mb-2">First Name</label>
                  <input type="text" className="w-full h-12 px-4 bg-white border border-gray-300 focus:border-primary outline-hidden transition-colors" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-foreground mb-2">Last Name</label>
                  <input type="text" className="w-full h-12 px-4 bg-white border border-gray-300 focus:border-primary outline-hidden transition-colors" />
                </div>
              </div>

              <div className="mb-6">
                <label className="block text-sm font-bold text-foreground mb-2">Email Address</label>
                <input type="email" className="w-full h-12 px-4 bg-white border border-gray-300 focus:border-primary outline-hidden transition-colors" />
              </div>

              <div className="mb-6">
                <label className="block text-sm font-bold text-foreground mb-2">Subject</label>
                <select className="w-full h-12 px-4 bg-white border border-gray-300 focus:border-primary outline-hidden transition-colors">
                  <option>Sales Inquiry</option>
                  <option>Technical Support</option>
                  <option>Partnership Opportunity</option>
                  <option>Media Inquiry</option>
                </select>
              </div>

              <div className="mb-8">
                <label className="block text-sm font-bold text-foreground mb-2">Message</label>
                <textarea className="w-full h-32 p-4 bg-white border border-gray-300 focus:border-primary outline-hidden transition-colors resize-none"></textarea>
              </div>

              <button className="ibm-btn-primary w-full">
                <span>Send Message</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
