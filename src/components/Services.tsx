
import { Shield, FileText, Users, HandHeart } from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

const services = [
  {
    title: "Accessibility Audits",
    description: "Comprehensive assessment of digital platforms for compliance with WCAG, ADA, and Section 508 standards.",
    icon: Shield
  },
  {
    title: "Expert Consultations",
    description: "Tailored guidance on implementing accessibility best practices for your organization.",
    icon: FileText
  },
  {
    title: "Training Resources",
    description: "Accessible workshops and learning management system for hands-on accessibility training.",
    icon: Users
  },
  {
    title: "AI-Powered Solutions",
    description: "Innovative tools to streamline and simplify your accessibility compliance process.",
    icon: HandHeart
  }
];

const Services = () => {
  return (
    <section id="services" className="py-20 px-4 bg-white text-black">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">
          Our Services
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => (
            <Card key={service.title} className="border-2 border-black bg-white">
              <CardHeader>
                <service.icon className="h-8 w-8 mb-2 text-black" aria-hidden="true" />
                <CardTitle className="text-black">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p>{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
