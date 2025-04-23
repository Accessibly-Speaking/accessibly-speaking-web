
import { Check } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 px-4 bg-gray-50 text-black">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-8">About Us</h2>
            <p className="text-lg mb-6">
              Accessibly Speaking is a nonprofit organization dedicated to advancing inclusivity
              through innovative accessibility services. We aim to empower businesses and professionals with tailored
              solutions to meet accessibility standards and foster inclusive environments.
            </p>
            <p className="text-lg mb-8">
              By providing consultations, audits, and training resources, we help organizations enhance accessibility,
              ensuring equal access for individuals with disabilities while mitigating compliance risks.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-start">
                <Check className="h-6 w-6 text-black mr-3 mt-1 flex-shrink-0" />
                <p>Empowered businesses with accessibility solutions</p>
              </div>
              <div className="flex items-start">
                <Check className="h-6 w-6 text-black mr-3 mt-1 flex-shrink-0" />
                <p>Expert team with years of experience in accessibility</p>
              </div>
              <div className="flex items-start">
                <Check className="h-6 w-6 text-black mr-3 mt-1 flex-shrink-0" />
                <p>Comprehensive approach addressing all types of accessibility needs</p>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="h-full w-full bg-white border-2 border-black rounded-lg p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
              <h3 className="text-2xl font-bold mb-6">Our Core Values</h3>
              
              <div className="space-y-6">
                <div className="p-4 border border-gray-200 rounded-lg">
                  <h4 className="font-bold mb-2">Inclusion</h4>
                  <p>Ensuring equal access to digital resources for all.</p>
                </div>
                
                <div className="p-4 border border-gray-200 rounded-lg">
                  <h4 className="font-bold mb-2">Innovation</h4>
                  <p>Leveraging advanced technology to enhance accessibility.</p>
                </div>
                
                <div className="p-4 border border-gray-200 rounded-lg">
                  <h4 className="font-bold mb-2">Advocacy</h4>
                  <p>Promoting awareness and action on accessibility issues.</p>
                </div>
                
                <div className="p-4 border border-gray-200 rounded-lg">
                  <h4 className="font-bold mb-2">Collaboration</h4>
                  <p>Partnering with stakeholders to drive systemic change.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
