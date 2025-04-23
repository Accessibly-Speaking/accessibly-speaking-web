
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Home } from "lucide-react";

const Partnerships = () => (
  <div className="min-h-screen flex flex-col">
    <Header />
    <main className="flex-1">
      <div className="container mx-auto px-4 py-28 max-w-5xl">
        <Breadcrumb className="mb-8">
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">
                <Home className="h-4 w-4" />
                <span className="sr-only">Home</span>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <span aria-current="page">Partnerships</span>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        <h1 className="text-4xl font-bold mb-8">Partner With Us</h1>
        <div className="prose prose-lg max-w-none">
          <p className="text-lg mb-6">
            We collaborate with organizations, businesses, and community leaders to make accessible digital experiences the norm. We invite partners who want to advance accessibility and inclusion to work with us.
          </p>
          
          <h2 className="text-2xl font-semibold mt-10 mb-4">Partnership Opportunities</h2>
          <div className="grid md:grid-cols-2 gap-8 mb-10">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-medium mb-3">Corporate Partnerships</h3>
              <p>Partner with us to enhance your organization's digital accessibility practices, train your team, and demonstrate your commitment to inclusion.</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-medium mb-3">Educational Institutions</h3>
              <p>Work with us to develop accessibility curriculum, provide student training, and ensure educational materials are fully accessible.</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-medium mb-3">Non-Profit Organizations</h3>
              <p>Join forces to amplify advocacy efforts, share resources, and create greater impact in the accessibility community.</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-medium mb-3">Government Agencies</h3>
              <p>Collaborate on policy development, public awareness campaigns, and implementing accessibility standards.</p>
            </div>
          </div>
          
          <h2 className="text-2xl font-semibold mt-10 mb-4">Benefits of Partnership</h2>
          <ul className="list-disc pl-6 mb-8 space-y-3">
            <li>Access to accessibility expertise and resources</li>
            <li>Co-branded initiatives and shared visibility</li>
            <li>Opportunities to participate in research and innovation</li>
            <li>Network with other organizations committed to accessibility</li>
            <li>Demonstrate your organization's commitment to inclusion</li>
          </ul>
          
          <h2 className="text-2xl font-semibold mt-10 mb-4">Get In Touch</h2>
          <p className="mb-6">
            Interested in becoming a partner? Contact us to discuss partnership opportunities that align with your organization's goals and values.
          </p>
          
          <div className="mt-8">
            <a 
              href="mailto:contact@accessiblyspeaking.com" 
              className="inline-flex items-center px-6 py-3 bg-black text-white rounded-md hover:bg-gray-800 transition-colors"
              aria-label="Email us about partnerships"
            >
              Discuss Partnership Opportunities
            </a>
          </div>
        </div>
      </div>
    </main>
    <Footer />
  </div>
);

export default Partnerships;
