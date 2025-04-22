
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="py-20 px-4" aria-labelledby="hero-title">
      <div className="container mx-auto text-center max-w-4xl">
        <h1 id="hero-title" className="text-4xl md:text-5xl font-bold mb-6">
          Empowering Digital Accessibility for All
        </h1>
        <p className="text-xl mb-8 leading-relaxed">
          We help businesses and professionals create inclusive digital environments through expert consultations, audits, and training resources.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button className="bg-primary hover:bg-primary/90">Get Started</Button>
          <Button variant="outline">Learn More</Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
