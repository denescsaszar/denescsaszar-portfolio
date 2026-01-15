export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-background">
      <div className="container-custom py-12 md:py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Column 1: About */}
          <div>
            <h3 className="text-heading-3 mb-4">Denes Csaszar</h3>
            <p className="text-body-small text-muted max-w-xs">
              Product Owner bridging technical execution and business strategy.
              Based in Berlin, Germany.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-body font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                
                  href="#projects"
                  className="text-body-small text-muted hover:text-foreground transition-colors"
                >
                  Projects
                </a>
              </li>
              <li>
                
                  href="#about"
                  className="text-body-small text-muted hover:text-foreground transition-colors"
                >
                  About
                </a>
              </li>
              <li>
                
                  href="#contact"
                  className="text-body-small text-muted hover:text-foreground transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Connect */}
          <div>
            <h4 className="text-body font-semibold mb-4">Connect</h4>
            <ul className="space-y-2">
              <li>
                
                  href="https://www.linkedin.com/in/denescsaszar"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-body-small text-muted hover:text-foreground transition-colors"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                
                  href="https://github.com/denescsaszar"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-body-small text-muted hover:text-foreground transition-colors"
                >
                  GitHub
                </a>
              </li>
              <li>
                
                  href="mailto:csaszar.denes@gmail.com"
                  className="text-body-small text-muted hover:text-foreground transition-colors"
                >
                  Email
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-body-small text-muted">
              © {currentYear} Denes Csaszar. All rights reserved.
            </p>
            <p className="text-body-small text-muted">
              Built with Next.js & Tailwind CSS
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}