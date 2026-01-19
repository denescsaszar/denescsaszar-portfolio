"use client";

import React, { useState, useEffect } from "react";

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  return React.createElement(
    React.Fragment,
    null,
    React.createElement(
      "a",
      {
        href: "#main-content",
        className:
          "sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-foreground focus:text-background",
      },
      "Skip to main content",
    ),
    React.createElement(
      "nav",
      {
        className:
          "relative z-50 bg-background border-b border-border transition-all overflow-hidden",
      },
      React.createElement(
        "div",
        { className: "relative" },
        React.createElement(
          "div",
          {
            className:
              "absolute top-0 left-0 right-0 flex items-center justify-start pointer-events-none -mt-16",
          },
          React.createElement(
            "h2",
            {
              className:
                "text-[20vw] md:text-[14vw] font-bold select-none leading-none tracking-tighter -ml-4",
              style: { color: "#FF6F61", opacity: 0.3 },
            },
            "Denes Csaszar",
          ),
        ),
        React.createElement(
          "div",
          { className: "container-custom py-12 relative z-10" },
          React.createElement(
            "div",
            { className: "flex items-center justify-between" },
            React.createElement(
              "a",
              {
                href: "/",
                className:
                  "text-xl font-semibold text-foreground hover:text-muted transition-colors",
              },
              "Denes Csaszar",
            ),
            React.createElement(
              "div",
              { className: "hidden md:flex items-center gap-8" },
              React.createElement(
                "a",
                {
                  href: "/",
                  className:
                    "text-body text-muted hover:text-foreground transition-colors",
                },
                "Portfolio",
              ),
              React.createElement(
                "a",
                {
                  href: "/#projects",
                  className:
                    "text-body text-muted hover:text-foreground transition-colors",
                },
                "Projects",
              ),
              React.createElement(
                "a",
                {
                  href: "/projects",
                  className:
                    "text-body text-muted hover:text-foreground transition-colors",
                },
                "All Projects",
              ),
              React.createElement(
                "a",
                {
                  href: "/#about",
                  className:
                    "text-body text-muted hover:text-foreground transition-colors",
                },
                "About",
              ),
              React.createElement(
                "a",
                {
                  href: "/#contact",
                  className:
                    "text-body text-muted hover:text-foreground transition-colors",
                },
                "Contact",
              ),
            ),
            React.createElement(
              "button",
              {
                onClick: toggleMobileMenu,
                className: "md:hidden text-foreground z-50",
                "aria-label": "Menu",
              },
              isMobileMenuOpen
                ? React.createElement(
                    "svg",
                    {
                      className: "w-6 h-6",
                      fill: "none",
                      stroke: "currentColor",
                      viewBox: "0 0 24 24",
                    },
                    React.createElement("path", {
                      strokeLinecap: "round",
                      strokeLinejoin: "round",
                      strokeWidth: 2,
                      d: "M6 18L18 6M6 6l12 12",
                    }),
                  )
                : React.createElement(
                    "svg",
                    {
                      className: "w-6 h-6",
                      fill: "none",
                      stroke: "currentColor",
                      viewBox: "0 0 24 24",
                    },
                    React.createElement("path", {
                      strokeLinecap: "round",
                      strokeLinejoin: "round",
                      strokeWidth: 2,
                      d: "M4 6h16M4 12h16M4 18h16",
                    }),
                  ),
            ),
          ),
        ),
      ),
    ),
    isMobileMenuOpen &&
      React.createElement("div", {
        className: "fixed inset-0 bg-foreground bg-opacity-50 z-40 md:hidden",
        onClick: closeMobileMenu,
      }),
    React.createElement(
      "div",
      {
        className: `fixed top-0 right-0 h-full w-64 bg-background border-l border-border z-40 transform transition-transform duration-300 md:hidden ${isMobileMenuOpen ? "translate-x-0" : "translate-x-full"}`,
      },
      React.createElement(
        "div",
        { className: "flex flex-col pt-24 px-8" },
        React.createElement(
          "a",
          {
            href: "/",
            onClick: closeMobileMenu,
            className:
              "text-heading-3 py-4 border-b border-border hover:text-muted transition-colors",
          },
          "Portfolio",
        ),
        React.createElement(
          "a",
          {
            href: "/#projects",
            onClick: closeMobileMenu,
            className:
              "text-heading-3 py-4 border-b border-border hover:text-muted transition-colors",
          },
          "Projects",
        ),
        React.createElement(
          "a",
          {
            href: "/projects",
            onClick: closeMobileMenu,
            className:
              "text-heading-3 py-4 border-b border-border hover:text-muted transition-colors",
          },
          "All Projects",
        ),
        React.createElement(
          "a",
          {
            href: "/#about",
            onClick: closeMobileMenu,
            className:
              "text-heading-3 py-4 border-b border-border hover:text-muted transition-colors",
          },
          "About",
        ),
        React.createElement(
          "a",
          {
            href: "/#contact",
            onClick: closeMobileMenu,
            className:
              "text-heading-3 py-4 border-b border-border hover:text-muted transition-colors",
          },
          "Contact",
        ),
        React.createElement(
          "div",
          { className: "mt-8 pt-8 border-t border-border" },
          React.createElement(
            "p",
            {
              className:
                "text-body-small text-muted uppercase tracking-wider mb-4",
            },
            "Connect",
          ),
          React.createElement(
            "div",
            { className: "flex flex-col gap-3" },
            React.createElement(
              "a",
              {
                href: "https://www.linkedin.com/in/denescsaszar",
                target: "_blank",
                rel: "noopener noreferrer",
                className:
                  "text-body text-muted hover:text-foreground transition-colors",
              },
              "LinkedIn",
            ),
            React.createElement(
              "a",
              {
                href: "https://github.com/denescsaszar",
                target: "_blank",
                rel: "noopener noreferrer",
                className:
                  "text-body text-muted hover:text-foreground transition-colors",
              },
              "GitHub",
            ),
            React.createElement(
              "a",
              {
                href: "mailto:csaszar.denes@gmail.com",
                className:
                  "text-body text-muted hover:text-foreground transition-colors",
              },
              "Email",
            ),
          ),
        ),
      ),
    ),
  );
}
