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
              href="/case-studies/google-aldi"
            />

            <ProjectCard
              title="Deutsche Bank Platform"
              description="Partnered with Deutsche Bank to launch digital gift cards on their platform, coordinating technical integration and product development."
              achievement="B2B Partnership"
              tags={["B2B", "API Design", "Stakeholder Management"]}
              href="/case-studies/deutsche-bank"
            />

            <ProjectCard
              title="Zalando Redesign"
              description="Led gift card redesign based on user research with 1000+ customers, resulting in significant revenue growth across 15 European markets."
              achievement="20% Revenue Growth"
              tags={["User Research", "Product Design", "Growth"]}
              href="/case-studies/zalando-redesign"
            />
          </div>
        </section>

        {/* About Section - Placeholder */}
        {/* About Section */}
        <section
          id="about"
          className="container-custom py-section border-t border-border"
        >
          <div className="max-w-4xl">
            <h2 className="text-heading-1 mb-16">About Me</h2>

            <div className="space-y-8 max-w-3xl">
              {/* Opening */}
              <p className="text-body-large text-foreground">
                I'm a Product Owner who bridges technical execution and business
                strategy. With 7+ years leading digital products across Europe,
                I've learned that the best product leaders speak two languages:
                technology and business.
              </p>

              {/* Journey */}
              <p className="text-body-large text-muted">
                My career started in product management at companies like
                Zalando and InComm, where I led products across 15 European
                markets and partnered with giants like Google, Apple, and
                Amazon. I managed seven-figure budgets, coordinated
                international teams, and shipped products that generated
                measurable growth.
              </p>

              <p className="text-body-large text-muted">
                But I noticed a gap: the most impactful product conversations
                happened when I could dive deep into technical details with
                engineering teams. So I invested in building that
                depth—completing a full-stack development bootcamp and earning
                PSM I & PSPO I certifications.
              </p>

              <p className="text-body-large text-muted">
                Now I bring both worlds together: I can read API documentation,
                review technical architecture, and discuss implementation
                details—while keeping the focus on user needs and business
                impact.
              </p>

              {/* What Makes You Unique */}
              <div className="pt-8 border-t border-border">
                <p className="text-heading-3 mb-6">
                  I'm the Product Owner who can sit with engineers to debug an
                  API integration in the morning, then present business strategy
                  to executives in the afternoon.
                </p>
                <p className="text-body text-muted">
                  This technical literacy, combined with proven product
                  leadership, lets me ship better products faster.
                </p>
              </div>

              {/* Strengths */}
              <div className="pt-8">
                <p className="text-body-small text-muted uppercase tracking-wider mb-4">
                  StrengthsFinder 2.0
                </p>
                <div className="flex flex-wrap gap-3">
                  {[
                    "Strategic",
                    "Activator",
                    "Ideation",
                    "Input",
                    "Connectedness",
                  ].map((strength) => (
                    <span
                      key={strength}
                      className="text-body px-4 py-2 border border-border"
                    >
                      {strength}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section - Placeholder */}
        {/* Contact Section */}
        <section
          id="contact"
          className="container-custom py-section border-t border-border"
        >
          <div className="max-w-4xl">
            <h2 className="text-heading-1 mb-8">
              Let's Build Something Together
            </h2>

            <p className="text-heading-3 text-muted mb-16 max-w-3xl">
              I'm currently interested in Product Owner roles where I can
              leverage my technical depth and international product experience.
              If you're building digital products that need someone who can
              bridge engineering and business, let's talk.
            </p>

            {/* Primary CTA */}
            <div className="mb-16">
              <a
                href="https://www.linkedin.com/in/denescsaszar"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-12 py-5 bg-foreground text-background text-body-large font-semibold hover:bg-muted transition-colors"
              >
                Connect on LinkedIn
              </a>
            </div>

            {/* Contact Details */}
            <div className="grid md:grid-cols-3 gap-8 pt-12 border-t border-border">
              <div>
                <p className="text-body-small text-muted uppercase tracking-wider mb-3">
                  Email
                </p>
                <a
                  href="mailto:csaszar.denes@gmail.com"
                  className="text-body-large hover:text-muted transition-colors"
                >
                  csaszar.denes@gmail.com
                </a>
              </div>

              <div>
                <p className="text-body-small text-muted uppercase tracking-wider mb-3">
                  GitHub
                </p>
                <a
                  href="https://github.com/denescsaszar"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-body-large hover:text-muted transition-colors"
                >
                  @denescsaszar
                </a>
              </div>

              <div>
                <p className="text-body-small text-muted uppercase tracking-wider mb-3">
                  Location
                </p>
                <p className="text-body-large">Berlin, Germany</p>
                <p className="text-body text-muted mt-1">Open to remote (EU)</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
