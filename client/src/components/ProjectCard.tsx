import { Card } from "@/components/ui/card";
import { MapPin, Zap } from "lucide-react";

interface ProjectCardProps {
  title: string;
  client: string;
  location: string;
  capacity: string;
  image: string;
  description: string;
}

export default function ProjectCard({ title, client, location, capacity, image, description }: ProjectCardProps) {
  return (
    <Card className="overflow-hidden hover-elevate active-elevate-2 transition-transform hover:-translate-y-1" data-testid={`card-project-${title.toLowerCase().replace(/\s+/g, "-")}`}>
      <div className="relative h-64 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
          data-testid="img-project"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 p-6">
          <h3 className="text-xl font-bold text-foreground mb-2" data-testid="text-project-title">
            {title}
          </h3>
          <div className="flex flex-wrap gap-4 text-sm">
            <div className="flex items-center gap-1 text-muted-foreground">
              <MapPin className="h-4 w-4" />
              <span data-testid="text-project-location">{location}</span>
            </div>
            <div className="flex items-center gap-1 text-primary">
              <Zap className="h-4 w-4" />
              <span data-testid="text-project-capacity">{capacity}</span>
            </div>
          </div>
        </div>
      </div>
      <div className="p-6">
        <p className="text-sm text-muted-foreground mb-2">Client: <span className="text-foreground" data-testid="text-project-client">{client}</span></p>
        <p className="text-foreground" data-testid="text-project-description">{description}</p>
      </div>
    </Card>
  );
}
