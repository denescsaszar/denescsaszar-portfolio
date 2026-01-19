"use client";

import { useState, useEffect } from "react";

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={isScrolled ? "fixed top-0 left-0 right-0 z-50 bg-background border-b border-border shadow-sm transition-all" : "fixed top-0 left-0 right-0 z-50 bg-transparent transition-all"}>
      <div className="container-custom py-6">
        <div className="flex items-center justify-between">
          <a href="/" className="text-xl font-semibold text-foreground">
            Denes Csaszar
          </a>

          <div className="hidden md:flex items-center gap-8">
            <a href="#projects" className="text-body text-muted hover:text-foreground transition-colors">
              Projects
            </a>
            <a href="#about" className="text-body text-muted hover:text-foreground transition-colors">
              About
            </a>
            <a href="#contact" className="text-body text-muted hover:text-foreground transition-colors">
              Contact
            </a>
          </div>

          <button className="md:hidden text-foreground" aria-label="Menu">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
}
