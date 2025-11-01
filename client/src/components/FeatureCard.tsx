import { Card } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export default function FeatureCard({ icon: Icon, title, description }: FeatureCardProps) {
  return (
    <Card className="p-8 hover-elevate active-elevate-2 transition-transform hover:-translate-y-1" data-testid={`card-feature-${title.toLowerCase().replace(/\s+/g, "-")}`}>
      <div className="mb-4">
        <Icon className="h-12 w-12 text-primary" />
      </div>
      <h3 className="text-xl font-semibold mb-3 text-foreground" data-testid="text-feature-title">
        {title}
      </h3>
      <p className="text-muted-foreground" data-testid="text-feature-description">
        {description}
      </p>
    </Card>
  );
}
