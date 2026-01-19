import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ProjectCard from "@/components/ProjectCard";
import FadeIn from "@/components/FadeIn";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "All Projects | Denes Csaszar",
  description: "Complete portfolio of product management and product owner projects. Experience with Google, Apple, Amazon, Deutsche Bank, Zalando, idealo, and InComm.",
  keywords: ["Product Owner", "Product Manager", "Portfolio", "Projects", "Case Studies"],
};

export default function ProjectsPage() {
  return (
    <>
      <Navigation />
      
      <main id="main-content" className="min-h-screen pt-24">
        {/* Hero Section */}
        <section className="container-custom py-16 md:py-24">
          <div className="max-w-4xl">
            <p className="text-body-small text-muted uppercase tracking-wider mb-6">
              Portfolio
            </p>
            
            <h1 className="text-display-large mb-8">
              All Projects
            </h1>
            
            <p className="text-heading-3 text-muted mb-12 max-w-3xl">
              A complete view of my product management and product owner work across 
              digital products, e-commerce, and API integrations.
            </p>
          </div>
        </section>

        {/* Featured Projects Section */}
        <FadeIn>
          <section className="container-custom py-16 border-t border-border">
            <div className="mb-12">
              <h2 className="text-heading-1 mb-4">Featured Projects</h2>
              <p className="text-body-large text-muted max-w-2xl">
                My most impactful work showcasing innovation, growth, and technical leadership.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <FadeIn delay={0.1}>
                <ProjectCard
                  title="Google x Aldi"
                  description="Led the development of the world's first receipt-printed digital gift card format, revolutionizing retail gift card distribution across 4 countries."
                  achievement="World-First Innovation"
                  tags={["Product Strategy", "API Integration", "Agile", "Retail"]}
                  href="/case-studies/google-aldi"
                />
              </FadeIn>

              <FadeIn delay={0.2}>
                <ProjectCard
                  title="Deutsche Bank Platform"
                  description="Partnered with Deutsche Bank to launch digital gift cards on their platform, coordinating technical integration and product development."
                  achievement="B2B Partnership"
                  tags={["B2B", "API Design", "Stakeholder Management"]}
                  href="/case-studies/deutsche-bank"
                />
              </FadeIn>

              <FadeIn delay={0.3}>
                <ProjectCard
                  title="Zalando Redesign"
                  description="Led gift card redesign based on user research with 1000+ customers, resulting in significant revenue growth across 15 European markets."
                  achievement="20% Revenue Growth"
                  tags={["User Research", "Product Design", "Growth"]}
                  href="/case-studies/zalando-redesign"
                />
              </FadeIn>
            </div>
          </section>
        </FadeIn>

        {/* Other Projects Section */}
        <FadeIn>
          <section className="container-custom py-16 border-t border-border">
            <div className="mb-12">
              <h2 className="text-heading-1 mb-4">Additional Projects</h2>
              <p className="text-body-large text-muted max-w-2xl">
                More product management experience across e-commerce and digital platforms.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <FadeIn delay={0.1}>
                <ProjectCard
                  title="idealo Account Management"
                  description="Strategic management of Austrian online merchants, doubling shop portfolio and tripling revenue during pandemic expansion."
                  achievement="3x Revenue Growth"
                  tags={["Account Management", "E-commerce", "Sales Strategy"]}
                  href="#idealo"
                />
              </FadeIn>

              <FadeIn delay={0.2}>
                <ProjectCard
                  title="InComm Product Expansion"
                  description="Led DACH gift card program at global prepaid payment leader, managing partnerships with major retailers and tech brands."
                  achievement="Multi-Market Launch"
                  tags={["Product Management", "Retail", "Partnerships"]}
                  href="#incomm"
                />
              </FadeIn>

              {/* Placeholder for future projects */}
              <FadeIn delay={0.3}>
                <div className="border border-dashed border-border p-8 flex flex-col items-center justify-center min-h-[400px]">
                  <p className="text-heading-3 text-muted mb-4">More Coming Soon</p>
                  <p className="text-body text-muted text-center">
                    Additional case studies and projects in development
                  </p>
                </div>
              </FadeIn>
            </div>
          </section>
        </FadeIn>

        {/* Skills Overview Section */}
        <FadeIn>
          <section className="container-custom py-16 border-t border-border bg-gray-50">
            <div className="max-w-4xl">
              <h2 className="text-heading-1 mb-12">Skills Across Projects</h2>
              
              <div className="grid md:grid-cols-3 gap-8">
                <div>
                  <h3 className="text-heading-3 mb-4">Product Management</h3>
                  <ul className="space-y-2">
                    <li className="text-body text-muted">• Product Strategy</li>
                    <li className="text-body text-muted">• User Research</li>
                    <li className="text-body text-muted">• Roadmap Planning</li>
                    <li className="text-body text-muted">• Stakeholder Management</li>
                    <li className="text-body text-muted">• KPI Analysis</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-heading-3 mb-4">Technical Skills</h3>
                  <ul className="space-y-2">
                    <li className="text-body text-muted">• API Integration</li>
                    <li className="text-body text-muted">• Agile/Scrum</li>
                    <li className="text-body text-muted">• React/Next.js</li>
                    <li className="text-body text-muted">• REST APIs</li>
                    <li className="text-body text-muted">• Git/GitHub</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-heading-3 mb-4">Business Skills</h3>
                  <ul className="space-y-2">
                    <li className="text-body text-muted">• B2B Partnerships</li>
                    <li className="text-body text-muted">• Multi-Market Strategy</li>
                    <li className="text-body text-muted">• Budget Management</li>
                    <li className="text-body text-muted">• Revenue Growth</li>
                    <li className="text-body text-muted">• Team Leadership</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
        </FadeIn>

        {/* CTA Section */}
        <FadeIn>
          <section className="container-custom py-16 border-t border-border">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-heading-1 mb-8">Let's Work Together</h2>
              <p className="text-body-large text-muted mb-12">
                Interested in discussing how I can help your team build better products?
              </p>
              
                href="/#contact"
                className="inline-block px-12 py-5 bg-foreground text-background text-body-large font-semibold hover:bg-muted transition-colors"
              >
                Get in Touch
              </a>
            </div>
          </section>
        </FadeIn>
      </main>

      <Footer />
    </>
  );
}