import { Mail, Github, Linkedin, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-16 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-4 gap-10 mb-12">
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <img src="/lovable-uploads/ac36a044-0194-4cb1-9928-785eeb23c3f9.png" alt="" className="h-10 w-10 bg-white p-1 rounded" />
              <span className="text-xl font-semibold text-white">Accessibly Speaking</span>
            </div>
            <p className="text-gray-300 mb-6">
              Empowering businesses to create inclusive digital environments through expertise, education, and innovation.
            </p>
            <div className="flex space-x-4">
              <a href="#" aria-label="Twitter" className="p-2 bg-white text-black rounded-full hover:bg-gray-200 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" aria-label="LinkedIn" className="p-2 bg-white text-black rounded-full hover:bg-gray-200 transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" aria-label="GitHub" className="p-2 bg-white text-black rounded-full hover:bg-gray-200 transition-colors">
                <Github className="h-5 w-5" />
              </a>
              <a href="mailto:info@accessiblyspeaking.org" aria-label="Email" className="p-2 bg-white text-black rounded-full hover:bg-gray-200 transition-colors">
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-6 border-b border-gray-600 pb-2">Quick Links</h3>
            <ul className="space-y-3">
              <li><a href="#services" className="text-gray-300 hover:text-white transition-colors">Services</a></li>
              <li><a href="#about" className="text-gray-300 hover:text-white transition-colors">About Us</a></li>
              <li><a href="#mission" className="text-gray-300 hover:text-white transition-colors">Mission</a></li>
              <li><a href="#resources" className="text-gray-300 hover:text-white transition-colors">Resources</a></li>
              <li><a href="#contact" className="text-gray-300 hover:text-white transition-colors">Contact</a></li>
              <li><a href="https://dev.to/accessibly_speaking" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors">Blog</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-6 border-b border-gray-600 pb-2">Services</h3>
            <ul className="space-y-3">
              <li><a href="#services" className="text-gray-300 hover:text-white transition-colors">Accessibility Audits</a></li>
              <li><a href="#services" className="text-gray-300 hover:text-white transition-colors">Expert Consultations</a></li>
              <li><a href="#services" className="text-gray-300 hover:text-white transition-colors">Training Resources</a></li>
              <li><a href="#services" className="text-gray-300 hover:text-white transition-colors">AI-Powered Solutions</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-6 border-b border-gray-600 pb-2">Newsletter</h3>
            <p className="text-gray-300 mb-4">
              Stay updated with the latest in accessibility news and resources.
            </p>
            <div className="flex flex-col gap-3">
              <input
                type="email"
                placeholder="Your email address"
                className="px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none"
                aria-label="Email for newsletter"
              />
              <button className="px-4 py-2 bg-white text-black font-medium rounded-lg hover:bg-gray-200 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400">
            &copy; {new Date().getFullYear()} Accessibly Speaking. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
