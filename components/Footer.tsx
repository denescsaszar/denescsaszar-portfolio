export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-background">
      <div className="container-custom py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div>
            <h3 className="text-heading-3 mb-4">Denes Csaszar</h3>
            <p className="text-body-small text-muted max-w-xs mb-4">
              Project Manager bridging technical execution and business strategy.
            </p>
            <p className="text-body-small text-muted">
              Berlin, Germany • Open to remote (EU)
            </p>
          </div>

          <div>
            <h4 className="text-body font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="/#projects" className="text-body-small text-muted hover:text-foreground transition-colors">
                  Projects
                </a>
              </li>
              <li>
                <a href="/#about" className="text-body-small text-muted hover:text-foreground transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="/#contact" className="text-body-small text-muted hover:text-foreground transition-colors">
                  Contact
                </a>
              </li>
              <li>
                <a href="/case-studies/google-aldi" className="text-body-small text-muted hover:text-foreground transition-colors">
                  Google x Aldi Case Study
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-body font-semibold mb-4">Connect</h4>
            <ul className="space-y-2">
              <li>
                <a href="https://www.linkedin.com/in/denescsaszar" target="_blank" rel="noopener noreferrer" className="text-body-small text-muted hover:text-foreground transition-colors">
                  LinkedIn
                </a>
              </li>
              <li>
                <a href="https://github.com/denescsaszar" target="_blank" rel="noopener noreferrer" className="text-body-small text-muted hover:text-foreground transition-colors">
                  GitHub
                </a>
              </li>
              <li>
                <a href="mailto:csaszar.denes@gmail.com" className="text-body-small text-muted hover:text-foreground transition-colors">
                  csaszar.denes@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

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
