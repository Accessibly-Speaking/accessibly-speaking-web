
import { Menu, Users, Handshake, CalendarDays } from "lucide-react";
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
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
            <span className="text-xl font-semibold text-black whitespace-nowrap">Accessibly Speaking</span>
          </a>
          
          {/* Desktop Nav */}
          <nav className="hidden md:flex gap-6 items-center" aria-label="Main navigation">
            <a href="#services" className="text-black hover:text-gray-700 transition-colors font-medium">What We Do</a>
            <a href="#about" className="text-black hover:text-gray-700 transition-colors font-medium">About</a>
            <a href="#mission" className="text-black hover:text-gray-700 transition-colors font-medium">Mission</a>
            <a href="#resources" className="text-black hover:text-gray-700 transition-colors font-medium">Resources</a>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button
                  className="text-black hover:text-gray-700 transition-colors font-medium flex items-center gap-2 px-3 py-2 rounded border-none bg-transparent focus:outline-none"
                  aria-haspopup="menu"
                  aria-label="Get Involved"
                  type="button"
                >
                  Get Involved
                  <span aria-hidden="true">▼</span>
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="z-50 bg-white border-black border mt-2">
                <DropdownMenuItem asChild>
                  <a href="/volunteer" className="flex items-center gap-2 text-black hover:text-gray-700 w-full">
                    <Users className="h-4 w-4" /> Volunteer
                  </a>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <a href="/partnerships" className="flex items-center gap-2 text-black hover:text-gray-700 w-full">
                    <Handshake className="h-4 w-4" /> Partnerships
                  </a>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <a href="/events" className="flex items-center gap-2 text-black hover:text-gray-700 w-full">
                    <CalendarDays className="h-4 w-4" /> Events
                  </a>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
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
            <a href="#services" className="text-black hover:text-gray-700 transition-colors font-medium py-2" onClick={() => setMobileMenuOpen(false)}>What We Do</a>
            <a href="#about" className="text-black hover:text-gray-700 transition-colors font-medium py-2" onClick={() => setMobileMenuOpen(false)}>About</a>
            <a href="#mission" className="text-black hover:text-gray-700 transition-colors font-medium py-2" onClick={() => setMobileMenuOpen(false)}>Mission</a>
            <a href="#resources" className="text-black hover:text-gray-700 transition-colors font-medium py-2" onClick={() => setMobileMenuOpen(false)}>Resources</a>
            {/* Get Involved submenu */}
            <div>
              <div className="text-black py-2 font-medium">Get Involved</div>
              <div className="pl-4 flex flex-col gap-2">
                <a href="/volunteer" className="text-black hover:text-gray-700 transition-colors font-medium flex items-center gap-2 py-2" onClick={() => setMobileMenuOpen(false)}>
                  <Users className="h-4 w-4" /> Volunteer
                </a>
                <a href="/partnerships" className="text-black hover:text-gray-700 transition-colors font-medium flex items-center gap-2 py-2" onClick={() => setMobileMenuOpen(false)}>
                  <Handshake className="h-4 w-4" /> Partnerships
                </a>
                <a href="/events" className="text-black hover:text-gray-700 transition-colors font-medium flex items-center gap-2 py-2" onClick={() => setMobileMenuOpen(false)}>
                  <CalendarDays className="h-4 w-4" /> Events
                </a>
              </div>
            </div>
            <a href="mailto:contact@accessiblyspeaking.com" className="text-black hover:text-gray-700 transition-colors font-medium py-2" onClick={() => setMobileMenuOpen(false)}>Contact</a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
