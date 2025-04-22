
import { Mail, MapPin, Phone } from "lucide-react";

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
            <form>
              <div className="mb-4">
                <label htmlFor="name" className="block mb-2 font-medium">Name</label>
                <input 
                  type="text" 
                  id="name" 
                  className="w-full px-4 py-3 border-2 border-black rounded-lg focus:outline-none"
                  placeholder="Your name"
                  required
                />
              </div>
              
              <div className="mb-4">
                <label htmlFor="email" className="block mb-2 font-medium">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  className="w-full px-4 py-3 border-2 border-black rounded-lg focus:outline-none"
                  placeholder="Your email address"
                  required
                />
              </div>
              
              <div className="mb-4">
                <label htmlFor="subject" className="block mb-2 font-medium">Subject</label>
                <input 
                  type="text" 
                  id="subject" 
                  className="w-full px-4 py-3 border-2 border-black rounded-lg focus:outline-none"
                  placeholder="Message subject"
                  required
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block mb-2 font-medium">Message</label>
                <textarea 
                  id="message" 
                  rows={5}
                  className="w-full px-4 py-3 border-2 border-black rounded-lg focus:outline-none"
                  placeholder="How can we help you?"
                  required
                ></textarea>
              </div>
              
              <button 
                type="submit" 
                className="w-full bg-black text-white py-3 rounded-lg hover:bg-gray-800 transition-colors font-medium"
              >
                Send Message
              </button>
            </form>
          </div>
          
          <div className="flex flex-col gap-8">
            <div className="p-8 border-2 border-black rounded-lg bg-white shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] flex-1">
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <MapPin className="h-6 w-6 mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium mb-1">Our Location</h4>
                    <p>123 Accessibility Avenue</p>
                    <p>San Francisco, CA 94103</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Mail className="h-6 w-6 mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium mb-1">Email Us</h4>
                    <p><a href="mailto:info@accessiblyspeaking.org" className="hover:underline">info@accessiblyspeaking.org</a></p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Phone className="h-6 w-6 mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium mb-1">Call Us</h4>
                    <p><a href="tel:+15551234567" className="hover:underline">(555) 123-4567</a></p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="p-8 border-2 border-black rounded-lg bg-white shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] flex-1">
              <h3 className="text-2xl font-bold mb-6">Office Hours</h3>
              
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="font-medium">Monday - Friday</span>
                  <span>9:00 AM - 5:00 PM PST</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Saturday</span>
                  <span>Closed</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Sunday</span>
                  <span>Closed</span>
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
