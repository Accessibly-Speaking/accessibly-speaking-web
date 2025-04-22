
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="w-full bg-white border-b border-black">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <a href="/" className="flex items-center space-x-2" aria-label="Accessibly Speaking Home">
            <img src="/logo.svg" alt="" className="h-8 w-8" />
            <span className="text-xl font-semibold text-black">Accessibly Speaking</span>
          </a>
          
          <nav className="hidden md:flex space-x-8" aria-label="Main navigation">
            <a href="#services" className="text-black hover:text-gray-700 transition-colors">Services</a>
            <a href="#about" className="text-black hover:text-gray-700 transition-colors">About</a>
            <a href="#mission" className="text-black hover:text-gray-700 transition-colors">Mission</a>
            <a href="#contact" className="text-black hover:text-gray-700 transition-colors">Contact</a>
          </nav>

          <Button className="md:hidden" variant="outline" size="icon" aria-label="Menu" 
            className="border-black text-black hover:bg-gray-100">
            <Menu className="h-6 w-6" />
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
