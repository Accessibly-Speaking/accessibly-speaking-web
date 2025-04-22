
import { FileText, Book, Video, Link as LinkIcon } from "lucide-react";

const resourceCategories = [
  {
    title: "Articles & Guides",
    description: "Essential information to help you understand and implement accessibility practices.",
    icon: FileText,
    resources: [
      { title: "Getting Started with Web Accessibility", link: "#" },
      { title: "Understanding WCAG 2.1 Guidelines", link: "#" },
      { title: "ADA Compliance Checklist", link: "#" }
    ]
  },
  {
    title: "Videos & Webinars",
    description: "Learn from our experts through recorded sessions and live webinars.",
    icon: Video,
    resources: [
      { title: "Accessibility Testing Basics", link: "#" },
      { title: "Screen Reader Demonstration", link: "#" },
      { title: "Color Contrast Best Practices", link: "#" }
    ]
  },
  {
    title: "Educational Materials",
    description: "Comprehensive learning materials for individuals and teams.",
    icon: Book,
    resources: [
      { title: "Accessibility Handbook", link: "#" },
      { title: "Inclusive Design Patterns", link: "#" },
      { title: "Accessible Content Writing Guide", link: "#" }
    ]
  },
  {
    title: "Useful Links",
    description: "Additional resources from trusted accessibility organizations.",
    icon: LinkIcon,
    resources: [
      { title: "WebAIM", link: "https://webaim.org/" },
      { title: "W3C Web Accessibility Initiative", link: "https://www.w3.org/WAI/" },
      { title: "A11Y Project", link: "https://www.a11yproject.com/" }
    ]
  }
];

const Resources = () => {
  return (
    <section id="resources" className="py-20 px-4 bg-gray-50 text-black">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Resources</h2>
          <p className="text-xl max-w-3xl mx-auto">
            Access our collection of accessibility resources designed to help you create inclusive digital experiences.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {resourceCategories.map((category) => (
            <div 
              key={category.title}
              className="p-8 border-2 border-black rounded-lg bg-white shadow-[5px_5px_0px_0px_rgba(0,0,0,1)]"
            >
              <div className="flex items-center mb-6">
                <category.icon className="h-8 w-8 mr-4" />
                <h3 className="text-2xl font-bold">{category.title}</h3>
              </div>
              <p className="mb-6">{category.description}</p>
              <ul className="space-y-3">
                {category.resources.map((resource) => (
                  <li key={resource.title}>
                    <a 
                      href={resource.link}
                      className="flex items-center py-2 px-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
                    >
                      <span className="mr-2">→</span>
                      <span>{resource.title}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="mt-12 p-8 border-2 border-black rounded-lg bg-white shadow-[5px_5px_0px_0px_rgba(0,0,0,1)]">
          <h3 className="text-2xl font-bold mb-4 text-center">Want more resources?</h3>
          <p className="text-lg text-center mb-6">
            Join our mailing list to receive regular updates on the latest accessibility resources and best practices.
          </p>
          <div className="max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row gap-4">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="flex-grow px-4 py-3 border-2 border-black rounded-lg focus:outline-none"
                aria-label="Email address for newsletter"
              />
              <button 
                className="bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors"
              >
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resources;
