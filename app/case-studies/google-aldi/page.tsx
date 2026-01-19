import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import FadeIn from "@/components/FadeIn";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Google x Aldi: World's First Receipt-Printed Gift Card | Denes Csaszar",
  description:
    "Product Owner case study: Leading the development of the world's first receipt-printed digital gift card format, revolutionizing retail distribution across 4 countries in partnership with Google.",
  keywords: [
    "Product Owner",
    "Product Manager",
    "Google",
    "Aldi",
    "API Integration",
    "Digital Products",
    "Innovation",
    "Case Study",
  ],
  authors: [{ name: "Denes Csaszar" }],
  openGraph: {
    title: "Google x Aldi: World's First Receipt-Printed Gift Card",
    description:
      "Product Owner case study: Leading innovation with Google across 4 countries",
    type: "article",
    url: "https://denescsaszar-portfolio.vercel.app/case-studies/google-aldi",
  },
  twitter: {
    card: "summary_large_image",
    title: "Google x Aldi: World's First Receipt-Printed Gift Card",
    description:
      "Product Owner case study: Leading innovation with Google across 4 countries",
  },
};

export default function GoogleAldiCaseStudy() {
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
              Google x Aldi: World's First Receipt-Printed Gift Card
            </h1>

            <p className="text-heading-3 text-muted mb-12 max-w-3xl">
              Leading the development of an innovative digital gift card format
              that revolutionized retail distribution across 4 countries.
            </p>

            {/* Key Metrics */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12 pb-12 border-b border-border">
              <div>
                <p className="text-body-small text-muted uppercase mb-2">
                  Achievement
                </p>
                <p className="text-heading-3">World First</p>
              </div>
              <div>
                <p className="text-body-small text-muted uppercase mb-2">
                  Markets
                </p>
                <p className="text-heading-3">4 Countries</p>
              </div>
              <div>
                <p className="text-body-small text-muted uppercase mb-2">
                  Partner
                </p>
                <p className="text-heading-3">Google</p>
              </div>
              <div>
                <p className="text-body-small text-muted uppercase mb-2">
                  Role
                </p>
                <p className="text-heading-3">Product Owner</p>
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
                  How do you sell digital products like Google Play gift cards
                  in physical retail stores without traditional plastic cards?
                </p>
              </div>

              <div>
                <h3 className="text-heading-3 mb-4">My Role</h3>
                <p className="text-body text-muted">
                  Led end-to-end product development, coordinating with Google's
                  Mountain View team and managing API integration across Aldi's
                  POS systems in 4 countries.
                </p>
              </div>

              <div>
                <h3 className="text-heading-3 mb-4">Timeline</h3>
                <p className="text-body text-muted">
                  Multi-phase rollout across Aldi Nord, Aldi Süd, Aldi Suisse,
                  and Hofer Austria, with additional online sales in
                  Switzerland.
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
              Traditional gift cards required physical plastic cards, printing,
              distribution logistics, and inventory management. This created
              costs, waste, and complexity.
            </p>

            <p className="text-body-large text-muted mb-6">
              Google wanted to expand gift card availability across European
              retail, but the traditional model didn't scale efficiently. We
              needed an innovative approach that would:
            </p>

            <ul className="space-y-4 mb-8">
              <li className="flex gap-4">
                <span className="text-muted">→</span>
                <span className="text-body text-muted">
                  Eliminate physical inventory and distribution costs
                </span>
              </li>
              <li className="flex gap-4">
                <span className="text-muted">→</span>
                <span className="text-body text-muted">
                  Work with existing POS infrastructure
                </span>
              </li>
              <li className="flex gap-4">
                <span className="text-muted">→</span>
                <span className="text-body text-muted">
                  Provide instant activation and delivery
                </span>
              </li>
              <li className="flex gap-4">
                <span className="text-muted">→</span>
                <span className="text-body text-muted">
                  Scale across multiple countries and retail chains
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
                <h3 className="text-heading-2 mb-4">
                  Agile Collaboration with Google
                </h3>
                <p className="text-body-large text-muted">
                  I worked directly with Google's Operations Manager in Mountain
                  View using agile methodology to develop the technical concept
                  for a completely new digital format: receipt-printed gift
                  cards.
                </p>
              </div>

              <div>
                <h3 className="text-heading-2 mb-4">Technical Coordination</h3>
                <p className="text-body-large text-muted mb-4">
                  Led the end-to-end technical integration across multiple
                  systems:
                </p>
                <ul className="space-y-3">
                  <li className="flex gap-4">
                    <span className="text-muted">→</span>
                    <span className="text-body text-muted">
                      API integration between Google's backend and Aldi's POS
                      systems
                    </span>
                  </li>
                  <li className="flex gap-4">
                    <span className="text-muted">→</span>
                    <span className="text-body text-muted">
                      Coordinated with Aldi Nord, Süd, Suisse, and Hofer
                      technical teams
                    </span>
                  </li>
                  <li className="flex gap-4">
                    <span className="text-muted">→</span>
                    <span className="text-body text-muted">
                      Ensured POS systems could print activation codes on
                      receipts
                    </span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-heading-2 mb-4">Stakeholder Management</h3>
                <p className="text-body-large text-muted">
                  Coordinated between Google (product and technical teams),
                  multiple Aldi organizations across 4 countries, and internal
                  service providers to align technical requirements and
                  organizational needs.
                </p>
              </div>

              <div>
                <h3 className="text-heading-2 mb-4">Quality Assurance</h3>
                <p className="text-body-large text-muted">
                  Conducted comprehensive testing and quality controls to ensure
                  seamless customer experience at every touchpoint - from
                  purchase to activation.
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
              We created the world's first receipt-printed digital gift card
              system:
            </p>

            <div className="bg-gray-50 p-8 mb-8">
              <h3 className="text-heading-3 mb-6">How It Works</h3>
              <ol className="space-y-4">
                <li className="flex gap-4">
                  <span className="font-semibold">1.</span>
                  <span className="text-body text-muted">
                    Customer requests gift card at checkout (no physical card
                    needed)
                  </span>
                </li>
                <li className="flex gap-4">
                  <span className="font-semibold">2.</span>
                  <span className="text-body text-muted">
                    POS system connects to Google's API in real-time
                  </span>
                </li>
                <li className="flex gap-4">
                  <span className="font-semibold">3.</span>
                  <span className="text-body text-muted">
                    Unique activation code is generated instantly
                  </span>
                </li>
                <li className="flex gap-4">
                  <span className="font-semibold">4.</span>
                  <span className="text-body text-muted">
                    Code prints directly on the receipt
                  </span>
                </li>
                <li className="flex gap-4">
                  <span className="font-semibold">5.</span>
                  <span className="text-body text-muted">
                    Customer uses code to redeem on Google Play
                  </span>
                </li>
              </ol>
            </div>

            <p className="text-body-large text-muted">
              Additionally in Switzerland, we launched online sales of digital
              gift cards, expanding the distribution channel beyond physical
              retail.
            </p>
          </div>
        </section>

        {/* Results Section */}
        <section className="container-custom py-16 border-t border-border">
          <div className="max-w-content">
            <h2 className="text-heading-1 mb-8">The Results</h2>

            <p className="text-body-large text-muted mb-12">
              The project achieved global recognition as an industry innovation:
            </p>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="border border-border p-8">
                <p className="text-display mb-4">🌍</p>
                <h3 className="text-heading-2 mb-4">World First</h3>
                <p className="text-body text-muted">
                  First receipt-printed digital gift card format globally,
                  setting new standards for digital retail distribution.
                </p>
              </div>

              <div className="border border-border p-8">
                <p className="text-display mb-4">🎯</p>
                <h3 className="text-heading-2 mb-4">Multi-Country Launch</h3>
                <p className="text-body text-muted">
                  Successfully deployed across Aldi Nord, Aldi Süd, Aldi Suisse,
                  and Hofer Austria.
                </p>
              </div>
            </div>

            <p className="text-body-large text-muted">
              This innovation enabled both Google and Aldi to establish new
              benchmarks in digital retail, eliminating inventory costs while
              expanding gift card accessibility.
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
                  Innovation Requires Cross-Functional Alignment
                </h3>
                <p className="text-body-large text-muted">
                  Coordinating between Google's technical team, multiple Aldi
                  organizations, and POS system providers required clear
                  communication and shared vision. Success came from aligning
                  everyone around the customer benefit.
                </p>
              </div>

              <div>
                <h3 className="text-heading-3 mb-3">
                  Technical Complexity Can Enable Simplicity
                </h3>
                <p className="text-body-large text-muted">
                  While the backend integration was complex, the customer
                  experience became simpler - no more physical cards to manage,
                  instant activation, and immediate use.
                </p>
              </div>

              <div>
                <h3 className="text-heading-3 mb-3">Agile Works at Scale</h3>
                <p className="text-body-large text-muted">
                  Working in agile sprints with Google, even across continents
                  and time zones, enabled rapid iteration and problem-solving as
                  we navigated uncharted territory.
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
