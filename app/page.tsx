import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ProjectCard from "@/components/ProjectCard";

export default function Home() {
  return (
    <>
      <Navigation />

      <main className="min-h-screen pt-24">
        {/* Hero Section */}
        <section className="container-custom py-section md:py-container">
          <div className="max-w-4xl">
            {/* Overline */}
            <p className="text-body-small text-muted uppercase tracking-wider mb-6">
              Product Owner
            </p>

            {/* Main Heading */}
            <h1 className="text-display md:text-display-large mb-8">
              Denes Csaszar
            </h1>

            {/* Subheading */}
            <p className="text-heading-3 md:text-heading-2 text-muted mb-12 max-w-3xl">
              Bridging technical execution and business strategy
            </p>

            {/* Description */}
            <p className="text-body-large text-muted max-w-content mb-12">
              Product Owner with 7+ years of experience leading digital products
              across 15 European markets. Specialized in e-commerce, API
              integrations, and building products that scale.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#projects"
                className="inline-block text-center px-8 py-4 bg-foreground text-background hover:bg-muted transition-colors"
              >
                View Projects
              </a>
              <a
                href="#contact"
                className="inline-block text-center px-8 py-4 border border-foreground hover:bg-foreground hover:text-background transition-colors"
              >
                Get in Touch
              </a>
            </div>
          </div>
        </section>

        {/* Projects Section - Placeholder */}
        {/* Projects Section */}
        <section
          id="projects"
          className="container-custom py-section border-t border-border"
        >
          <div className="mb-16">
            <h2 className="text-heading-1 mb-4">Selected Projects</h2>
            <p className="text-body-large text-muted max-w-2xl">
              Product leadership across digital products, API integrations, and
              e-commerce solutions that delivered measurable business impact.
            </p>
          </div>

          {/* Project Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ProjectCard
              title="Google x Aldi"
              description="Led the development of the world's first receipt-printed digital gift card format, revolutionizing retail gift card distribution across 4 countries."
              achievement="World-First Innovation"
              tags={["Product Strategy", "API Integration", "Agile", "Retail"]}
              href="#google-aldi"
            />

            <ProjectCard
              title="Deutsche Bank Platform"
              description="Partnered with Deutsche Bank to launch digital gift cards on their platform, coordinating technical integration and product development."
              achievement="B2B Partnership"
              tags={["B2B", "API Design", "Stakeholder Management"]}
              href="#deutsche-bank"
            />

            <ProjectCard
              title="Zalando Redesign"
              description="Led gift card redesign based on user research with 1000+ customers, resulting in significant revenue growth across 15 European markets."
              achievement="20% Revenue Growth"
              tags={["User Research", "Product Design", "Growth"]}
              href="#zalando"
            />
          </div>
        </section>

        {/* About Section - Placeholder */}
        <section
          id="about"
          className="container-custom py-section border-t border-border"
        >
          <h2 className="text-heading-1 mb-12">About</h2>
          <p className="text-muted">Coming soon...</p>
        </section>

        {/* Contact Section - Placeholder */}
        <section
          id="contact"
          className="container-custom py-section border-t border-border"
        >
          <h2 className="text-heading-1 mb-12">Let's Connect</h2>
          <p className="text-muted">Coming soon...</p>
        </section>
      </main>

      <Footer />
    </>
  );
}
