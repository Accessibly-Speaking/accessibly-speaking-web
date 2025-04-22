
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="pt-28 pb-16 px-4 bg-white text-black">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-5xl md:text-6xl font-bold leading-tight">
              Making Digital <span>Accessibility</span> the Standard
            </h1>
            <p className="text-xl md:text-2xl leading-relaxed">
              We empower businesses to create inclusive digital environments through expertise, education, and innovation.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <Button variant="outline" className="border-black text-black hover:bg-gray-100 rounded-full px-8 py-6 text-lg flex items-center gap-2" onClick={() => window.location.href = '#about'}>
                Learn More <ArrowRight className="h-5 w-5" />
              </Button>
            </div>
          </div>
          <div className="relative">
            <div className="relative z-10 bg-white p-6 border-2 border-black rounded-lg shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
              <img 
                src="https://images.unsplash.com/photo-1573495627424-371c5bf8b816?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                alt="Digital Accessibility Illustration" 
                className="mx-auto w-full h-[450px] object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
