
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className={`w-full bg-white fixed top-0 z-50 transition-all duration-300 ${isScrolled ? 'shadow-md' : ''}`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <a href="/" className="flex items-center space-x-3" aria-label="Accessibly Speaking Home">
            <img src="/lovable-uploads/ac36a044-0194-4cb1-9928-785eeb23c3f9.png" alt="" className="h-10 w-10" />
            <span className="text-xl font-semibold text-black">Accessibly Speaking</span>
          </a>
          
          <nav className="hidden md:flex space-x-8" aria-label="Main navigation">
            <a href="#services" className="text-black hover:text-gray-700 transition-colors font-medium">Services</a>
            <a href="#about" className="text-black hover:text-gray-700 transition-colors font-medium">About</a>
            <a href="#mission" className="text-black hover:text-gray-700 transition-colors font-medium">Mission</a>
            <a href="#resources" className="text-black hover:text-gray-700 transition-colors font-medium">Resources</a>
            <a href="mailto:contact@accessiblyspeaking.com" className="text-black hover:text-gray-700 transition-colors font-medium">Contact</a>
          </nav>

          <Button 
            variant="outline" 
            size="icon" 
            aria-label="Menu" 
            aria-expanded={mobileMenuOpen}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden border-black text-black hover:bg-gray-100"
          >
            <Menu className="h-6 w-6" />
          </Button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white w-full py-4 px-4 shadow-lg absolute top-20 left-0 z-50">
          <nav className="flex flex-col space-y-4" aria-label="Mobile navigation">
            <a href="#services" className="text-black hover:text-gray-700 transition-colors font-medium py-2" onClick={() => setMobileMenuOpen(false)}>Services</a>
            <a href="#about" className="text-black hover:text-gray-700 transition-colors font-medium py-2" onClick={() => setMobileMenuOpen(false)}>About</a>
            <a href="#mission" className="text-black hover:text-gray-700 transition-colors font-medium py-2" onClick={() => setMobileMenuOpen(false)}>Mission</a>
            <a href="#resources" className="text-black hover:text-gray-700 transition-colors font-medium py-2" onClick={() => setMobileMenuOpen(false)}>Resources</a>
            <a href="mailto:contact@accessiblyspeaking.com" className="text-black hover:text-gray-700 transition-colors font-medium py-2" onClick={() => setMobileMenuOpen(false)}>Contact</a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
