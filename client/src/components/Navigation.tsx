import { Link, useLocation } from "wouter";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

export default function Navigation() {
  const [location] = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About Us" },
    { path: "/products", label: "Products" },
    { path: "/services", label: "Services" },
    { path: "/projects", label: "Projects & Testimonies" },
    { path: "/contact", label: "Contact Us" },
  ];

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-md bg-background/90 border-b border-border">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          <Link 
            href="/" 
            className="flex items-center gap-2 hover-elevate active-elevate-2 px-3 py-2 rounded-md" 
            data-testid="link-home"
          >
            <div className="font-bold text-xl text-foreground">LJA Power</div>
          </Link>

          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link 
                key={link.path} 
                href={link.path}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-colors hover-elevate active-elevate-2 ${
                  location === link.path
                    ? "text-primary"
                    : "text-foreground"
                }`}
                data-testid={`link-nav-${link.label.toLowerCase().replace(/\s+/g, "-")}`}
              >
                {link.label}
                {location === link.path && (
                  <div className="h-0.5 bg-primary mt-1 rounded-full"></div>
                )}
              </Link>
            ))}
          </div>

          <div className="hidden md:block">
            <Button asChild data-testid="button-get-quote" size="default">
              <Link href="/contact">
                Get a Quote
              </Link>
            </Button>
          </div>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 hover-elevate active-elevate-2 rounded-md"
            data-testid="button-mobile-menu"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden py-4 space-y-2">
            {navLinks.map((link) => (
              <Link 
                key={link.path} 
                href={link.path}
                onClick={() => setMobileMenuOpen(false)}
                className={`block px-4 py-2 rounded-md text-sm font-medium hover-elevate active-elevate-2 ${
                  location === link.path
                    ? "text-primary bg-card"
                    : "text-foreground"
                }`}
                data-testid={`link-mobile-${link.label.toLowerCase().replace(/\s+/g, "-")}`}
              >
                {link.label}
              </Link>
            ))}
            <Button 
              asChild 
              onClick={() => setMobileMenuOpen(false)} 
              className="w-full" 
              data-testid="button-mobile-quote"
            >
              <Link href="/contact">
                Get a Quote
              </Link>
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
}
