import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import FadeIn from "@/components/FadeIn";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Deutsche Bank Digital Platform Partnership | Denes Csaszar",
  description:
    "Project Manager case study: Leading B2B partnership and API integration between Deutsche Bank and Zalando for digital gift card platform.",
  keywords: [
    "Project Manager",
    "Product Manager",
    "Deutsche Bank",
    "B2B Partnership",
    "API Integration",
    "Digital Banking",
    "Case Study",
  ],
  authors: [{ name: "Denes Csaszar" }],
  openGraph: {
    title: "Deutsche Bank: Digital Gift Card Platform Partnership",
    description:
      "Project Manager case study: B2B partnership and API integration",
    type: "article",
    url: "https://denescsaszar-portfolio.vercel.app/case-studies/deutsche-bank",
  },
  twitter: {
    card: "summary_large_image",
    title: "Deutsche Bank: Digital Gift Card Platform Partnership",
    description:
      "Project Manager case study: B2B partnership and API integration",
  },
};

export default function DeutscheBankCaseStudy() {
  return (
    <>
      <Navigation />

      <main className="min-h-screen pt-24">
        {/* Hero Section */}
        <section className="container-custom py-16 md:py-24">
          <div className="max-w-4xl">
            <p className="text-body-small text-muted uppercase tracking-wider mb-6">
              Case Study
            </p>

            <h1 className="text-display-large mb-8">
              Deutsche Bank: Digital Gift Card Platform Partnership
            </h1>

            <p className="text-heading-3 text-muted mb-12 max-w-3xl">
              Leading the integration of Zalando gift cards into Deutsche Bank's
              digital platform, creating a seamless B2B partnership.
            </p>

            {/* Key Metrics */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12 pb-12 border-b border-border">
              <div>
                <p className="text-body-small text-muted uppercase mb-2">
                  Type
                </p>
                <p className="text-heading-3">B2B Partnership</p>
              </div>
              <div>
                <p className="text-body-small text-muted uppercase mb-2">
                  Partner
                </p>
                <p className="text-heading-3">Deutsche Bank</p>
              </div>
              <div>
                <p className="text-body-small text-muted uppercase mb-2">
                  Platform
                </p>
                <p className="text-heading-3">Digital Banking</p>
              </div>
              <div>
                <p className="text-body-small text-muted uppercase mb-2">
                  Role
                </p>
                <p className="text-heading-3">Product Manager</p>
              </div>
            </div>
          </div>
        </section>

        {/* Overview Section */}
        <section className="container-custom py-16 border-t border-border">
          <div className="max-w-4xl">
            <h2 className="text-heading-1 mb-12">Overview</h2>

            <div className="grid md:grid-cols-3 gap-12">
              <div>
                <h3 className="text-heading-3 mb-4">The Challenge</h3>
                <p className="text-body text-muted">
                  Deutsche Bank wanted to expand their digital platform
                  offerings by including attractive gift card options. Zalando
                  needed to become an essential partner in their portfolio.
                </p>
              </div>

              <div>
                <h3 className="text-heading-3 mb-4">My Role</h3>
                <p className="text-body text-muted">
                  Worked closely with Deutsche Bank's project lead to define
                  requirements, coordinate API integration, and drive product
                  development on Zalando's side.
                </p>
              </div>

              <div>
                <h3 className="text-heading-3 mb-4">Outcome</h3>
                <p className="text-body text-muted">
                  Successfully launched an innovative product that strengthened
                  the partnership and provided customers seamless access to
                  Zalando gift cards.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* The Problem Section */}
        <section className="container-custom py-16 border-t border-border">
          <div className="max-w-content">
            <h2 className="text-heading-1 mb-8">The Problem</h2>

            <p className="text-body-large text-muted mb-6">
              Deutsche Bank was building a digital gift card marketplace to
              enhance their customer value proposition. They needed to partner
              with leading retail brands to make the platform attractive and
              competitive.
            </p>

            <p className="text-body-large text-muted mb-6">
              For Zalando, this represented an opportunity to reach Deutsche
              Bank's extensive customer base through a trusted financial
              institution. However, the integration required:
            </p>

            <ul className="space-y-4 mb-8">
              <li className="flex gap-4">
                <span className="text-muted">→</span>
                <span className="text-body text-muted">
                  Technical API integration between two different systems
                </span>
              </li>
              <li className="flex gap-4">
                <span className="text-muted">→</span>
                <span className="text-body text-muted">
                  Coordination between multiple teams across two organizations
                </span>
              </li>
              <li className="flex gap-4">
                <span className="text-muted">→</span>
                <span className="text-body text-muted">
                  Ensuring seamless customer experience across platforms
                </span>
              </li>
              <li className="flex gap-4">
                <span className="text-muted">→</span>
                <span className="text-body text-muted">
                  Meeting Deutsche Bank's security and compliance requirements
                </span>
              </li>
            </ul>
          </div>
        </section>

        {/* The Approach Section */}
        <section className="container-custom py-16 border-t border-border bg-gray-50">
          <div className="max-w-content">
            <h2 className="text-heading-1 mb-8">My Approach</h2>

            <div className="space-y-12">
              <div>
                <h3 className="text-heading-2 mb-4">Partnership Management</h3>
                <p className="text-body-large text-muted">
                  I worked directly with Deutsche Bank's project lead to
                  establish clear communication channels and aligned
                  expectations. Regular sync meetings ensured both sides stayed
                  coordinated throughout development.
                </p>
              </div>

              <div>
                <h3 className="text-heading-2 mb-4">Requirements Definition</h3>
                <p className="text-body-large text-muted mb-4">
                  Led collaborative workshops to define technical and business
                  requirements:
                </p>
                <ul className="space-y-3">
                  <li className="flex gap-4">
                    <span className="text-muted">→</span>
                    <span className="text-body text-muted">
                      API specifications and data exchange protocols
                    </span>
                  </li>
                  <li className="flex gap-4">
                    <span className="text-muted">→</span>
                    <span className="text-body text-muted">
                      User experience flow across both platforms
                    </span>
                  </li>
                  <li className="flex gap-4">
                    <span className="text-muted">→</span>
                    <span className="text-body text-muted">
                      Security and compliance requirements
                    </span>
                  </li>
                  <li className="flex gap-4">
                    <span className="text-muted">→</span>
                    <span className="text-body text-muted">
                      Testing and quality assurance criteria
                    </span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-heading-2 mb-4">
                  API Integration Coordination
                </h3>
                <p className="text-body-large text-muted">
                  Coordinated between Deutsche Bank's technical team and
                  Zalando's IT department to ensure smooth API integration. This
                  involved technical specifications, testing protocols, and
                  rollout planning.
                </p>
              </div>

              <div>
                <h3 className="text-heading-2 mb-4">
                  Internal Stakeholder Alignment
                </h3>
                <p className="text-body-large text-muted">
                  Managed alignment across Zalando's internal teams including
                  IT, Product Management, and Marketing to ensure everyone was
                  working toward the same goal and timeline.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* The Solution Section */}
        <section className="container-custom py-16 border-t border-border">
          <div className="max-w-content">
            <h2 className="text-heading-1 mb-8">The Solution</h2>

            <p className="text-body-large text-muted mb-8">
              We successfully integrated Zalando's digital gift cards into
              Deutsche Bank's platform, creating a seamless experience for
              customers:
            </p>

            <div className="bg-gray-50 p-8 mb-8">
              <h3 className="text-heading-3 mb-6">How It Works</h3>
              <ol className="space-y-4">
                <li className="flex gap-4">
                  <span className="font-semibold">1.</span>
                  <span className="text-body text-muted">
                    Customer accesses gift card marketplace through Deutsche
                    Bank platform
                  </span>
                </li>
                <li className="flex gap-4">
                  <span className="font-semibold">2.</span>
                  <span className="text-body text-muted">
                    Selects Zalando gift card and desired amount
                  </span>
                </li>
                <li className="flex gap-4">
                  <span className="font-semibold">3.</span>
                  <span className="text-body text-muted">
                    API connects Deutsche Bank and Zalando systems in real-time
                  </span>
                </li>
                <li className="flex gap-4">
                  <span className="font-semibold">4.</span>
                  <span className="text-body text-muted">
                    Gift card is generated and delivered digitally
                  </span>
                </li>
                <li className="flex gap-4">
                  <span className="font-semibold">5.</span>
                  <span className="text-body text-muted">
                    Customer can immediately use the card on Zalando's platform
                  </span>
                </li>
              </ol>
            </div>

            <p className="text-body-large text-muted">
              The integration maintained Deutsche Bank's security standards
              while providing the fast, seamless experience customers expect
              from digital gift cards.
            </p>
          </div>
        </section>

        {/* Results Section */}
        <section className="container-custom py-16 border-t border-border">
          <div className="max-w-content">
            <h2 className="text-heading-1 mb-8">The Results</h2>

            <p className="text-body-large text-muted mb-12">
              The partnership delivered value for both organizations and their
              customers:
            </p>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="border border-border p-8">
                <p className="text-display mb-4">🤝</p>
                <h3 className="text-heading-2 mb-4">
                  Strengthened Partnership
                </h3>
                <p className="text-body text-muted">
                  Successfully positioned Zalando as an essential partner in
                  Deutsche Bank's digital gift card portfolio.
                </p>
              </div>

              <div className="border border-border p-8">
                <p className="text-display mb-4">✨</p>
                <h3 className="text-heading-2 mb-4">Seamless Experience</h3>
                <p className="text-body text-muted">
                  Delivered a smooth, integrated customer experience that met
                  both technical and business requirements.
                </p>
              </div>
            </div>

            <p className="text-body-large text-muted">
              This successful B2B integration demonstrated the value of strong
              partnership management and technical coordination in delivering
              innovative digital products.
            </p>
          </div>
        </section>

        {/* Key Learnings Section */}
        <section className="container-custom py-16 border-t border-border bg-gray-50">
          <div className="max-w-content">
            <h2 className="text-heading-1 mb-8">Key Learnings</h2>

            <div className="space-y-8">
              <div>
                <h3 className="text-heading-3 mb-3">
                  B2B Partnerships Require Alignment at Every Level
                </h3>
                <p className="text-body-large text-muted">
                  Success in B2B integrations depends on alignment between
                  technical teams, product teams, and business stakeholders.
                  Clear communication channels and regular syncs are essential.
                </p>
              </div>

              <div>
                <h3 className="text-heading-3 mb-3">
                  Technical Coordination is a Product Skill
                </h3>
                <p className="text-body-large text-muted">
                  While I wasn't writing code, understanding API integration,
                  technical requirements, and system architecture was crucial
                  for effective coordination between engineering teams.
                </p>
              </div>

              <div>
                <h3 className="text-heading-3 mb-3">
                  Customer Experience Transcends Organizational Boundaries
                </h3>
                <p className="text-body-large text-muted">
                  Even though two separate companies were involved, customers
                  expect a seamless experience. Product managers must think
                  beyond their own organization's boundaries.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Back to Projects */}
        <section className="container-custom py-16 border-t border-border">
          <div className="max-w-content">
            <a
              href="/#projects"
              className="inline-flex items-center text-body-large font-semibold hover:gap-2 transition-all"
            >
              ← Back to All Projects
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
