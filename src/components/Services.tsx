import { Shield, FileText, Users, Zap, Mail } from "lucide-react";

const services = [
  {
    title: "Accessibility Audits",
    description: "Comprehensive assessment of digital platforms for compliance with WCAG, ADA, and Section 508 standards.",
    icon: Shield,
    color: "bg-gray-100"
  },
  {
    title: "Document Remediation",
    description: "Converting documents into accessible formats, ensuring PDFs and other materials meet accessibility standards.",
    icon: FileText,
    color: "bg-gray-100"
  },
  {
    title: "Expert Consultations",
    description: "Tailored guidance on implementing accessibility best practices for your organization's specific needs.",
    icon: Mail,
    color: "bg-gray-100"
  },
  {
    title: "Training Resources",
    description: "Accessible workshops and learning management system for hands-on accessibility training.",
    icon: Users,
    color: "bg-gray-100"
  },
  {
    title: "AI-Powered Solutions",
    description: "Innovative tools to streamline and simplify your accessibility compliance process.",
    icon: Zap,
    color: "bg-gray-100"
  }
];

const Services = () => {
  return (
    <section id="services" className="py-20 px-4 bg-white text-black">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Our Services</h2>
          <p className="text-xl max-w-3xl mx-auto">
            We provide comprehensive solutions to ensure your digital platforms are accessible to everyone.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div 
              key={service.title} 
              className="p-6 border-2 border-black rounded-lg bg-white hover:shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] transition-all duration-300"
            >
              <div className={`${service.color} p-4 rounded-full inline-flex mb-6`}>
                <service.icon className="h-8 w-8 text-black" aria-hidden="true" />
              </div>
              <h3 className="text-xl font-bold mb-3">{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
