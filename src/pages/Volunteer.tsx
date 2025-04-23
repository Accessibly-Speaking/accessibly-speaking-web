
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Home } from "lucide-react";

const Volunteer = () => (
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
              <span aria-current="page">Volunteer</span>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        <h1 className="text-4xl font-bold mb-8">Volunteer With Us</h1>
        <div className="prose prose-lg max-w-none">
          <p className="text-lg mb-6">
            Become a vital part of our mission by volunteering your skills and time to help make digital accessibility a reality for all. Whether you're an advocate, developer, educator, or someone passionate about equality, we have opportunities for you.
          </p>
          
          <h2 className="text-2xl font-semibold mt-10 mb-4">How You Can Help</h2>
          <ul className="list-disc pl-6 mb-8 space-y-3">
            <li>Assist in accessibility audits and outreach events</li>
            <li>Lead or join accessibility training workshops</li>
            <li>Support with digital content creation and accessible materials</li>
            <li>Advocate within your community and workplace for digital inclusion</li>
            <li>Provide technical expertise for website and application evaluations</li>
          </ul>
          
          <h2 className="text-2xl font-semibold mt-10 mb-4">Volunteer Benefits</h2>
          <p className="mb-4">When you volunteer with Accessibly Speaking, you'll:</p>
          <ul className="list-disc pl-6 mb-8 space-y-3">
            <li>Gain valuable experience in the growing field of digital accessibility</li>
            <li>Expand your professional network</li>
            <li>Make a meaningful impact on people's lives</li>
            <li>Receive training and mentorship from accessibility experts</li>
          </ul>
          
          <h2 className="text-2xl font-semibold mt-10 mb-4">Join Our Team</h2>
          <p className="mb-6">
            Ready to get involved? We welcome volunteers of all experience levels and backgrounds. Fill out the form below or email us to learn more about current volunteer opportunities.
          </p>
          
          <div className="mt-8">
            <a 
              href="mailto:contact@accessiblyspeaking.com" 
              className="inline-flex items-center px-6 py-3 bg-black text-white rounded-md hover:bg-gray-800 transition-colors"
              aria-label="Email us to volunteer"
            >
              Email Us to Get Started
            </a>
          </div>
        </div>
      </div>
    </main>
    <Footer />
  </div>
);

export default Volunteer;
