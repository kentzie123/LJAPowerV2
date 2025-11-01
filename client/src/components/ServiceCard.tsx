import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { LucideIcon } from "lucide-react";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  features: string[];
  onLearnMore?: () => void;
}

export default function ServiceCard({ icon: Icon, title, description, features, onLearnMore }: ServiceCardProps) {
  return (
    <Card className="p-8 hover-elevate active-elevate-2" data-testid={`card-service-${title.toLowerCase().replace(/\s+/g, "-")}`}>
      <div className="flex items-center gap-4 mb-4">
        <div className="p-3 bg-primary/10 rounded-lg">
          <Icon className="h-8 w-8 text-primary" />
        </div>
        <h3 className="text-2xl font-semibold text-foreground" data-testid="text-service-title">
          {title}
        </h3>
      </div>
      
      <p className="text-muted-foreground mb-6" data-testid="text-service-description">
        {description}
      </p>
      
      <ul className="space-y-3 mb-6">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start gap-2" data-testid={`text-feature-${index}`}>
            <span className="text-primary mt-1">•</span>
            <span className="text-foreground">{feature}</span>
          </li>
        ))}
      </ul>
      
      <Button variant="secondary" onClick={onLearnMore} data-testid="button-learn-more">
        Learn More
      </Button>
    </Card>
  );
}
