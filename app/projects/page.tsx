import React from "react"
import Navigation from "@/components/Navigation"
import Footer from "@/components/Footer"
import ProjectCard from "@/components/ProjectCard"
import FadeIn from "@/components/FadeIn"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "All Projects | Denes Csaszar",
  description: "Complete portfolio of product management and product owner projects.",
  keywords: ["Project Manager", "Product Manager", "Portfolio", "Projects"],
}

export default function ProjectsPage() {
  return React.createElement("div", null,
    React.createElement(Navigation, null),
    React.createElement("main", { id: "main-content", className: "min-h-screen pt-24" },
      React.createElement("section", { className: "container-custom py-16 md:py-24" },
        React.createElement("div", { className: "max-w-4xl" },
          React.createElement("p", { className: "text-body-small text-muted uppercase tracking-wider mb-6" }, "Portfolio"),
          React.createElement("h1", { className: "text-display-large mb-8" }, "All Projects"),
          React.createElement("p", { className: "text-heading-3 text-muted mb-12 max-w-3xl" }, 
            "A complete view of my product management work across digital products, e-commerce, and API integrations."
          )
        )
      ),
      React.createElement("section", { className: "container-custom py-16 border-t border-border" },
        React.createElement("h2", { className: "text-2xl font-bold mb-8" }, "Coming Soon"),
        React.createElement("p", { className: "text-lg text-gray-600" }, "Full projects showcase in development")
      )
    ),
    React.createElement(Footer, null)
  )
}
