import { Card } from "@/components/ui/card";
import { Star } from "lucide-react";

interface TestimonialCardProps {
  quote: string;
  author: string;
  company: string;
  rating: number;
}

export default function TestimonialCard({ quote, author, company, rating }: TestimonialCardProps) {
  return (
    <Card className="p-8 bg-secondary hover-elevate active-elevate-2" data-testid={`card-testimonial-${author.toLowerCase().replace(/\s+/g, "-")}`}>
      <div className="flex gap-1 mb-4">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            className={`h-5 w-5 ${i < rating ? "fill-primary text-primary" : "text-muted"}`}
            data-testid={`icon-star-${i}`}
          />
        ))}
      </div>
      
      <blockquote className="text-lg italic text-muted-foreground mb-6" data-testid="text-testimonial-quote">
        "{quote}"
      </blockquote>
      
      <div>
        <div className="font-semibold text-foreground" data-testid="text-testimonial-author">
          {author}
        </div>
        <div className="text-sm text-muted-foreground" data-testid="text-testimonial-company">
          {company}
        </div>
      </div>
    </Card>
  );
}
