import { Button } from "@/components/ui/button";
import { Link } from "wouter";

interface HeroProps {
  title: string;
  subtitle: string;
  backgroundImage: string;
  showCTA?: boolean;
  height?: "full" | "large" | "medium";
}

export default function Hero({ title, subtitle, backgroundImage, showCTA = true, height = "full" }: HeroProps) {
  const heightClasses = {
    full: "min-h-[85vh]",
    large: "min-h-[60vh]",
    medium: "min-h-[40vh]"
  };

  return (
    <div className={`relative ${heightClasses[height]} flex items-center justify-center overflow-hidden`}>
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background/80"></div>
      
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6" data-testid="text-hero-title">
          {title}
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto" data-testid="text-hero-subtitle">
          {subtitle}
        </p>
        
        {showCTA && (
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" data-testid="button-hero-products">
              <Link href="/products">
                View Our Products
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="backdrop-blur-md bg-background/20"
              data-testid="button-hero-contact"
            >
              <Link href="/contact">
                Contact Us
              </Link>
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}
