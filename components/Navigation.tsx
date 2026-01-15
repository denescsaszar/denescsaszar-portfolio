"use client";

export default function Navigation() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background border-b border-border">
      <div className="container-custom py-6">
        <div className="flex items-center justify-between">
          <a href="/" className="text-xl font-semibold">
            Denes Csaszar
          </a>
          <div className="flex items-center gap-8">
            <a href="#projects" className="text-muted hover:text-foreground">
              Projects
            </a>
            <a href="#about" className="text-muted hover:text-foreground">
              About
            </a>
            <a href="#contact" className="text-muted hover:text-foreground">
              Contact
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
