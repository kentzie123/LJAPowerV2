import { Card } from "@/components/ui/card";
import { MapPin, Zap, ArrowRight } from "lucide-react";

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
    <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:border-primary group border-border h-full flex flex-col" data-testid={`card-project-${title.toLowerCase().replace(/\s+/g, "-")}`}>
      <div className="relative h-64 overflow-hidden bg-gray-200">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          data-testid="img-project"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
          <div className="w-full p-6">
            <div className="flex items-center gap-2 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-4 group-hover:translate-y-0">
              <span className="text-sm font-semibold">View Details</span>
              <ArrowRight className="h-4 w-4" />
            </div>
          </div>
        </div>
      </div>

      <div className="p-6 flex-1 flex flex-col">
        <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors" data-testid="text-project-title">
          {title}
        </h3>

        <p className="text-sm text-muted-foreground mb-4 flex-1" data-testid="text-project-description">
          {description}
        </p>

        <div className="space-y-3 pt-4 border-t border-border">
          <div className="flex items-center gap-2 text-sm">
            <span className="text-muted-foreground">Client:</span>
            <span className="font-semibold text-foreground" data-testid="text-project-client">{client}</span>
          </div>

          <div className="flex flex-wrap gap-3">
            <div className="flex items-center gap-2 text-sm bg-blue-50 dark:bg-blue-950/30 px-3 py-2 rounded-lg">
              <MapPin className="h-4 w-4 text-blue-600 dark:text-blue-400" />
              <span className="text-blue-900 dark:text-blue-100" data-testid="text-project-location">{location}</span>
            </div>
            <div className="flex items-center gap-2 text-sm bg-amber-50 dark:bg-amber-950/30 px-3 py-2 rounded-lg">
              <Zap className="h-4 w-4 text-amber-600 dark:text-amber-400" />
              <span className="text-amber-900 dark:text-amber-100 font-medium" data-testid="text-project-capacity">{capacity}</span>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
}
