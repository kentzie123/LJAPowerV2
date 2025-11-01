import { Link } from "wouter";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-card border-t border-card-border">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="font-bold text-xl mb-4 text-foreground" data-testid="text-footer-brand">
              LJA Power Limited Co.
            </h3>
            <p className="text-muted-foreground text-sm">
              Professional generator solutions for commercial and industrial applications.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-foreground">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link 
                  href="/about" 
                  className="text-muted-foreground hover:text-primary transition-colors" 
                  data-testid="link-footer-about"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link 
                  href="/products" 
                  className="text-muted-foreground hover:text-primary transition-colors" 
                  data-testid="link-footer-products"
                >
                  Products
                </Link>
              </li>
              <li>
                <Link 
                  href="/services" 
                  className="text-muted-foreground hover:text-primary transition-colors" 
                  data-testid="link-footer-services"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link 
                  href="/projects" 
                  className="text-muted-foreground hover:text-primary transition-colors" 
                  data-testid="link-footer-projects"
                >
                  Projects & Testimonies
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-foreground">Services</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li data-testid="text-service-installation">Installation</li>
              <li data-testid="text-service-maintenance">Maintenance</li>
              <li data-testid="text-service-repair">Repair & Service</li>
              <li data-testid="text-service-consultation">Consultation</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-foreground">Contact</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <Phone className="h-4 w-4 text-primary mt-1" />
                <span className="text-muted-foreground" data-testid="text-footer-phone">
                  +1 (555) 123-4567
                </span>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="h-4 w-4 text-primary mt-1" />
                <span className="text-muted-foreground" data-testid="text-footer-email">
                  info@ljapower.com
                </span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 text-primary mt-1" />
                <span className="text-muted-foreground" data-testid="text-footer-address">
                  123 Industrial Blvd<br />
                  Suite 100<br />
                  Business City, ST 12345
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-8 text-center text-sm text-muted-foreground">
          <p data-testid="text-footer-copyright">
            © {new Date().getFullYear()} LJA Power Limited Co. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
