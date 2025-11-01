import { Card } from "@/components/ui/card";

interface ProductCardProps {
  name: string;
  image: string;
  specs: { label: string; value: string }[];
  price?: string;
}

export default function ProductCard({ name, image, specs, price }: ProductCardProps) {
  return (
    <Card className="overflow-hidden hover-elevate active-elevate-2 transition-transform hover:-translate-y-1 h-full" data-testid={`card-product-${name.toLowerCase().replace(/\s+/g, "-")}`}>
      <div className="aspect-[4/3] overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover"
          data-testid="img-product"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-4 text-foreground" data-testid="text-product-name">
          {name}
        </h3>
        
        <div className="space-y-2 mb-4">
          {specs.map((spec, index) => (
            <div
              key={index}
              className={`flex justify-between py-2 text-sm ${
                index % 2 === 0 ? "bg-muted/30" : ""
              } px-3 rounded`}
              data-testid={`text-spec-${index}`}
            >
              <span className="text-muted-foreground">{spec.label}:</span>
              <span className="font-mono text-foreground">{spec.value}</span>
            </div>
          ))}
        </div>

        {price && (
          <div className="text-2xl font-bold text-primary" data-testid="text-product-price">
            {price}
          </div>
        )}
      </div>
    </Card>
  );
}
