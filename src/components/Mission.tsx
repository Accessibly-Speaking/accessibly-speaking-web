import { Target } from "lucide-react";

const Mission = () => {
  return (
    <section id="mission" className="py-20 px-4 bg-white text-black">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <Target className="h-12 w-12 mx-auto mb-4" />
          <h2 className="text-4xl font-bold mb-4">Our Mission & Vision</h2>
          <p className="text-xl max-w-3xl mx-auto">
            We're working toward a future where digital accessibility is the norm,
            enabling individuals of all abilities to thrive in an inclusive digital economy.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div className="p-8 border-2 border-black rounded-lg bg-white shadow-[5px_5px_0px_0px_rgba(0,0,0,1)]">
            <h3 className="text-2xl font-bold mb-4">Mission</h3>
            <p className="text-lg mb-4">
              To empower businesses and professionals to achieve compliance with accessibility standards 
              while fostering inclusive digital environments. 
            </p>
            <p className="text-lg">
              We provide accessibility audits, consultations, and training workshops,
              integrating cutting-edge solutions such as a Learning Management System (LMS) and an AI-powered
              accessibility tool. Our goal is to promote inclusivity and bridge the accessibility gap for 
              organizations with limited resources.
            </p>
          </div>
          
          <div className="p-8 border-2 border-black rounded-lg bg-white shadow-[5px_5px_0px_0px_rgba(0,0,0,1)]">
            <h3 className="text-2xl font-bold mb-4">Objectives</h3>
            <ul className="space-y-3 text-lg">
              <li className="flex items-start">
                <span className="inline-block bg-black text-white rounded-full w-6 h-6 flex-shrink-0 flex items-center justify-center mr-3 mt-1">1</span>
                <span>Educate small businesses and professionals on the importance of digital accessibility.</span>
              </li>
              <li className="flex items-start">
                <span className="inline-block bg-black text-white rounded-full w-6 h-6 flex-shrink-0 flex items-center justify-center mr-3 mt-1">2</span>
                <span>Provide scalable solutions for achieving compliance with global standards such as WCAG, ADA, and Section 508.</span>
              </li>
              <li className="flex items-start">
                <span className="inline-block bg-black text-white rounded-full w-6 h-6 flex-shrink-0 flex items-center justify-center mr-3 mt-1">3</span>
                <span>Foster a culture of inclusivity through advocacy and community engagement.</span>
              </li>
              <li className="flex items-start">
                <span className="inline-block bg-black text-white rounded-full w-6 h-6 flex-shrink-0 flex items-center justify-center mr-3 mt-1">4</span>
                <span>Establish partnerships with technology providers, advocacy groups, and educational institutions.</span>
              </li>
              <li className="flex items-start">
                <span className="inline-block bg-black text-white rounded-full w-6 h-6 flex-shrink-0 flex items-center justify-center mr-3 mt-1">5</span>
                <span>Develop and sustain revenue streams to fund the nonprofit's operations and growth.</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mission;
