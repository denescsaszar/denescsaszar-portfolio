"use client";

import { useState, useEffect } from "react";

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

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
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

            <button 
              onClick={toggleMobileMenu}
              className="md:hidden text-foreground z-50" 
              aria-label="Menu"
            >
              {isMobileMenuOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-foreground bg-opacity-50 z-40 md:hidden"
          onClick={closeMobileMenu}
        />
      )}

      {/* Mobile Menu */}
      <div className={`fixed top-0 right-0 h-full w-64 bg-background border-l border-border z-40 transform transition-transform duration-300 md:hidden ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex flex-col pt-24 px-8">
          <a 
            href="#projects" 
            onClick={closeMobileMenu}
            className="text-heading-3 py-4 border-b border-border hover:text-muted transition-colors"
          >
            Projects
          </a>
          <a 
            href="#about" 
            onClick={closeMobileMenu}
            className="text-heading-3 py-4 border-b border-border hover:text-muted transition-colors"
          >
            About
          </a>
          <a 
            href="#contact" 
            onClick={closeMobileMenu}
            className="text-heading-3 py-4 border-b border-border hover:text-muted transition-colors"
          >
            Contact
          </a>
          
          <div className="mt-8 pt-8 border-t border-border">
            <p className="text-body-small text-muted uppercase tracking-wider mb-4">Connect</p>
            <div className="flex flex-col gap-3">
              <a 
                href="https://www.linkedin.com/in/denescsaszar"
                target="_blank"
                rel="noopener noreferrer"
                className="text-body text-muted hover:text-foreground transition-colors"
              >
                LinkedIn
              </a>
              <a 
                href="https://github.com/denescsaszar"
                target="_blank"
                rel="noopener noreferrer"
                className="text-body text-muted hover:text-foreground transition-colors"
              >
                GitHub
              </a>
              <a 
                href="mailto:csaszar.denes@gmail.com"
                className="text-body text-muted hover:text-foreground transition-colors"
              >
                Email
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
