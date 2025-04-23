
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Home } from "lucide-react";

const Events = () => (
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
              <span aria-current="page">Events</span>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        <h1 className="text-4xl font-bold mb-8">Events</h1>
        <div className="prose prose-lg max-w-none">
          <p className="text-lg mb-6">
            We host and participate in a variety of events throughout the year, all dedicated to raising awareness and providing accessible solutions in the digital space.
          </p>
          
          <h2 className="text-2xl font-semibold mt-10 mb-4">Upcoming Events</h2>
          <div className="space-y-8 mb-12">
            <div className="border-l-4 border-black pl-4">
              <h3 className="text-xl font-medium mb-1">Annual Digital Accessibility Conference</h3>
              <p className="text-gray-600 mb-2">June 15-16, 2025 • Virtual Event</p>
              <p className="mb-3">Join experts from around the world for two days of workshops, presentations, and networking focused on the latest in digital accessibility.</p>
              <a href="#" className="text-blue-700 underline font-medium">Learn more</a>
            </div>
            
            <div className="border-l-4 border-black pl-4">
              <h3 className="text-xl font-medium mb-1">Accessibility in UX Design Workshop</h3>
              <p className="text-gray-600 mb-2">July 23, 2025 • New York, NY</p>
              <p className="mb-3">A hands-on workshop for designers and developers to learn practical techniques for creating accessible user experiences.</p>
              <a href="#" className="text-blue-700 underline font-medium">Register now</a>
            </div>
            
            <div className="border-l-4 border-black pl-4">
              <h3 className="text-xl font-medium mb-1">Web Accessibility Webinar Series</h3>
              <p className="text-gray-600 mb-2">Monthly • Online</p>
              <p className="mb-3">Free monthly webinars covering various aspects of web accessibility, from technical implementation to testing and compliance.</p>
              <a href="#" className="text-blue-700 underline font-medium">View schedule</a>
            </div>
          </div>
          
          <h2 className="text-2xl font-semibold mt-10 mb-4">Event Types</h2>
          <ul className="list-disc pl-6 mb-8 space-y-3">
            <li>Accessibility Awareness Webinars and Workshops</li>
            <li>Community Meetups and Panel Discussions</li>
            <li>Annual Digital Accessibility Conference</li>
            <li>Corporate Training Sessions</li>
            <li>Accessibility Hackathons</li>
          </ul>
          
          <h2 className="text-2xl font-semibold mt-10 mb-4">Host an Event</h2>
          <p className="mb-6">
            Interested in hosting an accessibility-focused event at your organization? We can provide speakers, workshops, and resources tailored to your audience and needs.
          </p>
          
          <div className="mt-8">
            <a 
              href="mailto:contact@accessiblyspeaking.com" 
              className="inline-flex items-center px-6 py-3 bg-black text-white rounded-md hover:bg-gray-800 transition-colors"
              aria-label="Email us about events"
            >
              Contact Us About Events
            </a>
          </div>
        </div>
      </div>
    </main>
    <Footer />
  </div>
);

export default Events;
