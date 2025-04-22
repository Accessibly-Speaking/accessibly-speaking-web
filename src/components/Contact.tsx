
import { Mail, MapPin, ArrowUpRight, X } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-4 bg-white text-black">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Get In Touch</h2>
          <p className="text-xl max-w-3xl mx-auto">
            Have questions about our services or want to discuss how we can help your organization? 
            Reach out to us today.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div className="p-8 border-2 border-black rounded-lg bg-white shadow-[5px_5px_0px_0px_rgba(0,0,0,1)]">
            <h3 className="text-2xl font-bold mb-6">Send Us a Message</h3>
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block mb-2 font-medium">Name</label>
                <input 
                  type="text" 
                  id="name" 
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-black transition-colors"
                  placeholder="Your name"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block mb-2 font-medium">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-black transition-colors"
                  placeholder="Your email address"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block mb-2 font-medium">Message</label>
                <textarea 
                  id="message" 
                  rows={5}
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-black transition-colors"
                  placeholder="How can we help you?"
                  required
                ></textarea>
              </div>
              
              <button 
                type="submit" 
                className="w-full bg-black text-white py-3 rounded-lg hover:bg-gray-800 transition-colors font-medium flex items-center justify-center gap-2"
              >
                Send Message <ArrowUpRight className="h-5 w-5" />
              </button>
            </form>
          </div>
          
          <div className="flex flex-col gap-8">
            <div className="p-8 border-2 border-black rounded-lg bg-white shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] h-full">
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4 p-6 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                  <Mail className="h-6 w-6 text-black mt-1" />
                  <div>
                    <h4 className="font-medium text-lg mb-2">Email Us</h4>
                    <a href="mailto:accessiblyspeaking@gmail.com" className="text-gray-600 hover:text-black transition-colors">
                      accessiblyspeaking@gmail.com
                    </a>
                  </div>
                </div>

                <div className="mt-8">
                  <h4 className="font-medium text-lg mb-4">Follow Us</h4>
                  <div className="flex gap-4">
                    <a 
                      href="#" 
                      aria-label="Follow us on X (formerly Twitter)"
                      className="p-3 bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors inline-flex items-center justify-center"
                    >
                      <X className="h-5 w-5" />
                    </a>
                    <a 
                      href="#" 
                      aria-label="Connect on LinkedIn"
                      className="p-3 bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors inline-flex items-center justify-center"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                        <rect width="4" height="12" x="2" y="9"/>
                        <circle cx="4" cy="4" r="2"/>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
