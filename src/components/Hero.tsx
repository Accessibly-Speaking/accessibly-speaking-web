
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="pt-28 pb-16 px-4 bg-white text-black">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-5xl md:text-6xl font-bold leading-tight">
              Making Digital <span className="border-b-4 border-black">Accessibility</span> the Standard
            </h1>
            <p className="text-xl md:text-2xl leading-relaxed">
              We empower businesses to create inclusive digital environments through expertise, education, and innovation.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <Button className="bg-black text-white hover:bg-gray-800 rounded-full px-8 py-6 text-lg">
                Get Started
              </Button>
              <Button variant="outline" className="border-black text-black hover:bg-gray-100 rounded-full px-8 py-6 text-lg flex items-center gap-2">
                Learn More <ArrowRight className="h-5 w-5" />
              </Button>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-square bg-gray-100 rounded-full absolute top-[-20px] right-[-20px] w-[80%] z-0"></div>
            <div className="aspect-square bg-gray-200 rounded-full absolute bottom-[-20px] left-[-20px] w-[60%] z-0"></div>
            <div className="relative z-10 bg-white p-6 border-2 border-black rounded-lg shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
              <img 
                src="/lovable-uploads/ac36a044-0194-4cb1-9928-785eeb23c3f9.png" 
                alt="Accessibly Speaking Logo" 
                className="mx-auto w-2/3"
              />
              <p className="text-center mt-6 font-medium">
                Unlocking digital potential through inclusive design
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
