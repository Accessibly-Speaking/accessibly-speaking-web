
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="min-h-[calc(100vh-4rem)] flex items-center justify-center px-4 bg-white text-black">
      <div className="container mx-auto text-center max-w-4xl">
        <h1 className="text-5xl md:text-6xl font-bold mb-6">
          Empowering Digital Accessibility
        </h1>
        <p className="text-xl mb-8 leading-relaxed">
          We help businesses create inclusive digital environments through expert consultations, comprehensive audits, and transformative training.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button className="bg-black text-white hover:bg-gray-800">
            Get Started
          </Button>
          <Button variant="outline" className="border-black text-black hover:bg-gray-100">
            Learn More
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
