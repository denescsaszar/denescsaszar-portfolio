import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import FadeIn from "@/components/FadeIn";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Zalando: 20% Revenue Growth Through Redesign | Denes Csaszar",
  description:
    "Project Manager case study: Leading user-centered gift card redesign based on research with 1000+ customers, achieving 20% revenue growth across 15 European markets and 50,000+ points of sale.",
  keywords: [
    "Project Manager",
    "Product Manager",
    "Zalando",
    "User Research",
    "Product Design",
    "Revenue Growth",
    "E-commerce",
    "Case Study",
  ],
  authors: [{ name: "Denes Csaszar" }],
  openGraph: {
    title: "Zalando: 20% Revenue Growth Through User-Centered Redesign",
    description:
      "Project Manager case study: User research at scale delivering measurable growth",
    type: "article",
    url: "https://denescsaszar-portfolio.vercel.app/case-studies/zalando-redesign",
  },
  twitter: {
    card: "summary_large_image",
    title: "Zalando: 20% Revenue Growth Through User-Centered Redesign",
    description:
      "Project Manager case study: User research at scale delivering measurable growth",
  },
};

export default function ZalandoCaseStudy() {
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
              Zalando: 20% Revenue Growth Through User-Centered Redesign
            </h1>

            <p className="text-heading-3 text-muted mb-12 max-w-3xl">
              Leading a complete gift card redesign based on extensive user
              research, delivering measurable revenue growth across 15 European
              markets.
            </p>

            {/* Key Metrics */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12 pb-12 border-b border-border">
              <div>
                <p className="text-body-small text-muted uppercase mb-2">
                  Impact
                </p>
                <p className="text-heading-3">+20% Revenue</p>
              </div>
              <div>
                <p className="text-body-small text-muted uppercase mb-2">
                  Markets
                </p>
                <p className="text-heading-3">15 Countries</p>
              </div>
              <div>
                <p className="text-body-small text-muted uppercase mb-2">
                  Scale
                </p>
                <p className="text-heading-3">50K+ POS</p>
              </div>
              <div>
                <p className="text-body-small text-muted uppercase mb-2">
                  Research
                </p>
                <p className="text-heading-3">1000+ Users</p>
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
                  Zalando's gift card design was outdated and not aligned with
                  customer preferences or current market trends. We needed to
                  modernize while maintaining brand consistency.
                </p>
              </div>

              <div>
                <h3 className="text-heading-3 mb-4">My Role</h3>
                <p className="text-body text-muted">
                  Led user research with 1000+ Rewe customers, created user
                  stories, collaborated with design team, and executed
                  point-of-sale campaigns across 15 markets.
                </p>
              </div>

              <div>
                <h3 className="text-heading-3 mb-4">Outcome</h3>
                <p className="text-body text-muted">
                  The redesign and marketing campaigns resulted in 20% revenue
                  growth and strengthened Zalando's position as Europe's leading
                  gift card provider.
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
              Zalando's gift cards were performing below potential. The design
              had remained unchanged for years while customer preferences and
              market standards evolved.
            </p>

            <p className="text-body-large text-muted mb-6">
              We faced several challenges:
            </p>

            <ul className="space-y-4 mb-8">
              <li className="flex gap-4">
                <span className="text-muted">→</span>
                <span className="text-body text-muted">
                  Design didn't resonate with target customers
                </span>
              </li>
              <li className="flex gap-4">
                <span className="text-muted">→</span>
                <span className="text-body text-muted">
                  Competitors had more attractive, modern designs
                </span>
              </li>
              <li className="flex gap-4">
                <span className="text-muted">→</span>
                <span className="text-body text-muted">
                  Needed to maintain brand consistency across 15 markets
                </span>
              </li>
              <li className="flex gap-4">
                <span className="text-muted">→</span>
                <span className="text-body text-muted">
                  Required coordination across production, design, and retail
                  partners
                </span>
              </li>
              <li className="flex gap-4">
                <span className="text-muted">→</span>
                <span className="text-body text-muted">
                  Had to manage rollout across 50,000+ points of sale
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
                  User Research & Customer Insights
                </h3>
                <p className="text-body-large text-muted mb-4">
                  I conducted comprehensive market research to understand
                  customer preferences and purchase behavior:
                </p>
                <ul className="space-y-3">
                  <li className="flex gap-4">
                    <span className="text-muted">→</span>
                    <span className="text-body text-muted">
                      Surveys with 1000+ Rewe customers to analyze preferences
                    </span>
                  </li>
                  <li className="flex gap-4">
                    <span className="text-muted">→</span>
                    <span className="text-body text-muted">
                      Focus groups to understand emotional connection to gift
                      cards
                    </span>
                  </li>
                  <li className="flex gap-4">
                    <span className="text-muted">→</span>
                    <span className="text-body text-muted">
                      Competitive analysis of market trends and best practices
                    </span>
                  </li>
                  <li className="flex gap-4">
                    <span className="text-muted">→</span>
                    <span className="text-body text-muted">
                      Analysis of existing sales data to identify patterns
                    </span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-heading-2 mb-4">User Story Development</h3>
                <p className="text-body-large text-muted">
                  Translated research insights into actionable user stories that
                  guided the design team. Focused on emotional appeal, brand
                  recognition, and practical considerations like visibility at
                  point of sale.
                </p>
              </div>

              <div>
                <h3 className="text-heading-2 mb-4">Design Collaboration</h3>
                <p className="text-body-large text-muted">
                  Worked closely with Zalando's design team to ensure research
                  findings influenced the final design. Iterated through
                  multiple concepts, testing each against our user insights
                  until we found the optimal solution.
                </p>
              </div>

              <div>
                <h3 className="text-heading-2 mb-4">
                  Point-of-Sale Campaign Strategy
                </h3>
                <p className="text-body-large text-muted">
                  Planned and executed comprehensive POS campaigns to maximize
                  the impact of the new design. This included merchandising
                  guidelines, promotional materials, and retailer training
                  across all markets.
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
              The new design addressed customer preferences while maintaining
              Zalando's brand identity:
            </p>

            <div className="space-y-8 mb-8">
              <div>
                <h3 className="text-heading-3 mb-4">Design Improvements</h3>
                <ul className="space-y-3">
                  <li className="flex gap-4">
                    <span className="text-muted">→</span>
                    <span className="text-body text-muted">
                      Modern, attractive design that appealed to target
                      demographics
                    </span>
                  </li>
                  <li className="flex gap-4">
                    <span className="text-muted">→</span>
                    <span className="text-body text-muted">
                      Strong brand consistency across all 15 markets
                    </span>
                  </li>
                  <li className="flex gap-4">
                    <span className="text-muted">→</span>
                    <span className="text-body text-muted">
                      Improved visibility and shelf presence in retail
                      environments
                    </span>
                  </li>
                  <li className="flex gap-4">
                    <span className="text-muted">→</span>
                    <span className="text-body text-muted">
                      Clear value proposition and usage instructions
                    </span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-heading-3 mb-4">Rollout Strategy</h3>
                <p className="text-body text-muted mb-4">
                  Managed the phased rollout across 50,000+ points of sale:
                </p>
                <ol className="space-y-3">
                  <li className="flex gap-4">
                    <span className="font-semibold">1.</span>
                    <span className="text-body text-muted">
                      Coordinated production timeline with manufacturing
                      partners
                    </span>
                  </li>
                  <li className="flex gap-4">
                    <span className="font-semibold">2.</span>
                    <span className="text-body text-muted">
                      Developed market-specific POS materials and guidelines
                    </span>
                  </li>
                  <li className="flex gap-4">
                    <span className="font-semibold">3.</span>
                    <span className="text-body text-muted">
                      Trained retail partners on new merchandising approach
                    </span>
                  </li>
                  <li className="flex gap-4">
                    <span className="font-semibold">4.</span>
                    <span className="text-body text-muted">
                      Launched coordinated marketing campaigns across all
                      markets
                    </span>
                  </li>
                  <li className="flex gap-4">
                    <span className="font-semibold">5.</span>
                    <span className="text-body text-muted">
                      Monitored performance and adjusted strategy based on
                      results
                    </span>
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </section>

        {/* Results Section */}
        <section className="container-custom py-16 border-t border-border">
          <div className="max-w-content">
            <h2 className="text-heading-1 mb-8">The Results</h2>

            <p className="text-body-large text-muted mb-12">
              The redesign and accompanying campaigns delivered impressive
              results:
            </p>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="border border-border p-8">
                <p className="text-display mb-4">📈</p>
                <h3 className="text-heading-2 mb-4">20% Revenue Growth</h3>
                <p className="text-body text-muted">
                  The new design and marketing campaigns resulted in a 20%
                  increase in gift card revenue across all markets.
                </p>
              </div>

              <div className="border border-border p-8">
                <p className="text-display mb-4">🏆</p>
                <h3 className="text-heading-2 mb-4">Market Leadership</h3>
                <p className="text-body text-muted">
                  Strengthened Zalando's position as the leading gift card
                  provider in European fashion retail.
                </p>
              </div>

              <div className="border border-border p-8">
                <p className="text-display mb-4">🎯</p>
                <h3 className="text-heading-2 mb-4">50,000+ Points of Sale</h3>
                <p className="text-body text-muted">
                  Successfully rolled out across the entire retail network
                  spanning 15 European countries.
                </p>
              </div>

              <div className="border border-border p-8">
                <p className="text-display mb-4">✨</p>
                <h3 className="text-heading-2 mb-4">
                  Improved Customer Perception
                </h3>
                <p className="text-body text-muted">
                  User feedback showed significantly improved perception of
                  Zalando gift cards as attractive, modern gifts.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Key Learnings Section */}
        <section className="container-custom py-16 border-t border-border bg-gray-50">
          <div className="max-w-content">
            <h2 className="text-heading-1 mb-8">Key Learnings</h2>

            <div className="space-y-8">
              <div>
                <h3 className="text-heading-3 mb-3">
                  User Research Drives Measurable Results
                </h3>
                <p className="text-body-large text-muted">
                  Investing in comprehensive user research with 1000+ customers
                  provided the insights needed to make confident design
                  decisions. The 20% growth validated this research-driven
                  approach.
                </p>
              </div>

              <div>
                <h3 className="text-heading-3 mb-3">
                  Design is a Business Lever
                </h3>
                <p className="text-body-large text-muted">
                  This project proved that design isn't just about aesthetics -
                  it's a strategic tool for driving business growth. The right
                  design, informed by user needs, directly impacts revenue.
                </p>
              </div>

              <div>
                <h3 className="text-heading-3 mb-3">
                  Execution at Scale Requires Coordination
                </h3>
                <p className="text-body-large text-muted">
                  Rolling out across 50,000+ points of sale in 15 countries
                  taught me the importance of detailed planning, clear
                  communication, and strong partner relationships. Success at
                  scale requires excellence in execution.
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
