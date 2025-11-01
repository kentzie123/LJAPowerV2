import Hero from "@/components/Hero";
import ProductCard from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useState } from "react";
import { CheckCircle2, Zap } from "lucide-react";
import showroomImage from '@assets/generated_images/Generator_showroom_display_040b73ab.png';
import productImage from '@assets/generated_images/Product_generator_white_background_cfbb511e.png';

export default function Products() {
  //todo: remove mock functionality - replace with real data
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedProduct, setSelectedProduct] = useState<number | null>(null);

  const categories = [
    { id: "all", label: "All Products" },
    { id: "commercial", label: "Commercial" },
    { id: "industrial", label: "Industrial" },
    { id: "prime", label: "Prime Power" }
  ];

  const products = [
    {
      name: "Commercial Generator 100kW",
      category: "commercial",
      image: productImage,
      specs: [
        { label: "Power Output", value: "100 kW" },
        { label: "Fuel Type", value: "Diesel" },
        { label: "Voltage", value: "480V" },
        { label: "Engine", value: "Cummins 6BT" }
      ],
      price: "Contact for Quote",
      details: {
        description: "Perfect for small to medium commercial applications, this reliable generator provides consistent backup power for offices, retail stores, and light industrial facilities.",
        features: [
          "Compact footprint for limited space installations",
          "Fuel-efficient operation reduces operating costs",
          "Quiet operation suitable for urban environments",
          "Automatic transfer switch compatible",
          "Remote monitoring capabilities"
        ],
        applications: ["Office buildings", "Retail stores", "Small warehouses", "Restaurants", "Medical clinics"],
        warranty: "3-year comprehensive warranty with optional extended coverage"
      }
    },
    {
      name: "Commercial Generator 250kW",
      category: "commercial",
      image: productImage,
      specs: [
        { label: "Power Output", value: "250 kW" },
        { label: "Fuel Type", value: "Diesel" },
        { label: "Voltage", value: "480V 3-Phase" },
        { label: "Engine", value: "Cummins QSB7" }
      ],
      price: "Contact for Quote",
      details: {
        description: "Ideal for medium-sized commercial facilities requiring reliable backup or prime power. This generator offers excellent performance and fuel efficiency.",
        features: [
          "Three-phase power output for commercial loads",
          "Advanced control system with digital display",
          "Sound-attenuated enclosure available",
          "Multiple voltage configurations",
          "Parallel capability for expandability"
        ],
        applications: ["Shopping centers", "Hotels", "Data centers", "Manufacturing facilities", "Educational institutions"],
        warranty: "3-year comprehensive warranty with optional extended coverage"
      }
    },
    {
      name: "Industrial Generator 500kW",
      category: "industrial",
      image: productImage,
      specs: [
        { label: "Power Output", value: "500 kW" },
        { label: "Fuel Type", value: "Diesel" },
        { label: "Voltage", value: "480V 3-Phase" },
        { label: "Engine", value: "Cummins QSX15" }
      ],
      price: "Contact for Quote",
      details: {
        description: "Heavy-duty industrial generator designed for demanding applications requiring consistent, reliable power for extended periods.",
        features: [
          "Industrial-grade Cummins engine",
          "Advanced load management system",
          "Weather-resistant enclosure",
          "Remote start and monitoring",
          "Dual fuel capability option"
        ],
        applications: ["Manufacturing plants", "Hospitals", "Wastewater treatment", "Large commercial buildings", "Mining operations"],
        warranty: "5-year comprehensive warranty with 24/7 support"
      }
    },
    {
      name: "Industrial Generator 750kW",
      category: "industrial",
      image: productImage,
      specs: [
        { label: "Power Output", value: "750 kW" },
        { label: "Fuel Type", value: "Diesel" },
        { label: "Voltage", value: "480V 3-Phase" },
        { label: "Engine", value: "Cummins QSK19" }
      ],
      price: "Contact for Quote",
      details: {
        description: "High-capacity industrial generator built for mission-critical applications where power failure is not an option.",
        features: [
          "Premium Cummins QSK series engine",
          "Redundant control systems",
          "Advanced paralleling capabilities",
          "Real-time performance monitoring",
          "Extended run time fuel systems available"
        ],
        applications: ["Critical infrastructure", "Large hospitals", "Data centers", "Industrial manufacturing", "Water treatment facilities"],
        warranty: "5-year comprehensive warranty with priority support"
      }
    },
    {
      name: "Prime Power Generator 1000kW",
      category: "prime",
      image: productImage,
      specs: [
        { label: "Power Output", value: "1000 kW" },
        { label: "Fuel Type", value: "Diesel" },
        { label: "Voltage", value: "480V 3-Phase" },
        { label: "Engine", value: "Cummins QSK23" }
      ],
      price: "Contact for Quote",
      details: {
        description: "Designed for continuous prime power applications, this generator provides reliable, efficient power for facilities requiring 24/7 operation.",
        features: [
          "Rated for continuous prime power duty",
          "Advanced emissions control systems",
          "Integrated load bank testing capability",
          "Multiple parallel units supported",
          "Cloud-based monitoring and analytics"
        ],
        applications: ["Remote facilities", "Utility peaking", "Cogeneration systems", "Island mode operations", "Industrial plants"],
        warranty: "5-year comprehensive warranty with guaranteed uptime SLA"
      }
    },
    {
      name: "Prime Power Generator 1500kW",
      category: "prime",
      image: productImage,
      specs: [
        { label: "Power Output", value: "1500 kW" },
        { label: "Fuel Type", value: "Diesel" },
        { label: "Voltage", value: "480V 3-Phase" },
        { label: "Engine", value: "Cummins QSK38" }
      ],
      price: "Contact for Quote",
      details: {
        description: "Premium prime power solution for large-scale operations requiring maximum reliability and performance in continuous duty applications.",
        features: [
          "Ultra-reliable QSK38 engine platform",
          "N+1 redundancy capable",
          "Advanced SCADA integration",
          "Predictive maintenance monitoring",
          "Custom voltage and frequency options"
        ],
        applications: ["Large campuses", "Industrial complexes", "Utility support", "Mining operations", "Marine applications"],
        warranty: "7-year comprehensive warranty with dedicated support team"
      }
    },
    {
      name: "Commercial Generator 150kW",
      category: "commercial",
      image: productImage,
      specs: [
        { label: "Power Output", value: "150 kW" },
        { label: "Fuel Type", value: "Natural Gas" },
        { label: "Voltage", value: "480V" },
        { label: "Engine", value: "Cummins G-Drive" }
      ],
      price: "Contact for Quote",
      details: {
        description: "Natural gas powered generator offering clean, efficient backup power for commercial facilities with gas infrastructure.",
        features: [
          "Clean-burning natural gas operation",
          "Lower operating costs vs diesel",
          "Quiet operation for urban settings",
          "Unlimited run time with gas supply",
          "Reduced emissions compliance"
        ],
        applications: ["Office complexes", "Schools", "Municipal buildings", "Healthcare facilities", "Multi-tenant buildings"],
        warranty: "3-year comprehensive warranty with gas system certification"
      }
    },
    {
      name: "Industrial Generator 600kW",
      category: "industrial",
      image: productImage,
      specs: [
        { label: "Power Output", value: "600 kW" },
        { label: "Fuel Type", value: "Diesel" },
        { label: "Voltage", value: "480V 3-Phase" },
        { label: "Engine", value: "Cummins QSX15" }
      ],
      price: "Contact for Quote",
      details: {
        description: "Robust industrial generator combining proven Cummins reliability with advanced power management for demanding industrial environments.",
        features: [
          "Ruggedized for harsh environments",
          "Advanced vibration isolation",
          "Integrated fuel polishing system",
          "Multi-unit synchronization ready",
          "Comprehensive diagnostics system"
        ],
        applications: ["Manufacturing", "Food processing", "Cold storage", "Pharmaceutical production", "Heavy industry"],
        warranty: "5-year comprehensive warranty with preventive maintenance program"
      }
    },
    {
      name: "Prime Power Generator 2000kW",
      category: "prime",
      image: productImage,
      specs: [
        { label: "Power Output", value: "2000 kW" },
        { label: "Fuel Type", value: "Diesel" },
        { label: "Voltage", value: "480V 3-Phase" },
        { label: "Engine", value: "Cummins QSK50" }
      ],
      price: "Contact for Quote",
      details: {
        description: "Our flagship prime power generator delivering exceptional reliability and performance for the most demanding continuous power applications.",
        features: [
          "Industry-leading QSK50 engine",
          "Maximum efficiency at all load points",
          "Integrated heat recovery capability",
          "Advanced emissions after-treatment",
          "Full redundancy and failover systems"
        ],
        applications: ["Power generation plants", "Large industrial complexes", "Mission-critical facilities", "Island power systems", "Utility grid support"],
        warranty: "10-year comprehensive warranty with performance guarantees"
      }
    }
  ];

  const filteredProducts = selectedCategory === "all"
    ? products
    : products.filter(p => p.category === selectedCategory);

  return (
    <div>
      <Hero
        title="Our Generator Products"
        subtitle="Premium power generation systems for commercial and industrial applications"
        backgroundImage={showroomImage}
        showCTA={false}
        height="medium"
      />

      <section className="py-20 px-6 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <div className="flex flex-wrap gap-4 justify-center">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-6 py-3 rounded-md font-medium transition-all hover-elevate active-elevate-2 ${
                    selectedCategory === category.id
                      ? "bg-primary text-primary-foreground"
                      : "bg-card text-foreground"
                  }`}
                  data-testid={`button-category-${category.id}`}
                >
                  {category.label}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product, index) => {
              const originalIndex = products.findIndex(p => p.name === product.name);
              return (
                <ProductCard
                  key={index}
                  {...product}
                  onViewDetails={() => setSelectedProduct(originalIndex)}
                />
              );
            })}
          </div>

          {filteredProducts.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground text-lg" data-testid="text-no-products">
                No products found in this category.
              </p>
            </div>
          )}
        </div>
      </section>

      <Dialog open={selectedProduct !== null} onOpenChange={() => setSelectedProduct(null)}>
        <DialogContent className="max-w-4xl max-h-[85vh] overflow-y-auto">
          {selectedProduct !== null && (
            <>
              <DialogHeader>
                <DialogTitle className="text-2xl">
                  {products[selectedProduct].name}
                </DialogTitle>
                <DialogDescription className="text-base mt-2">
                  {products[selectedProduct].details.description}
                </DialogDescription>
              </DialogHeader>

              <div className="space-y-6 mt-6">
                <div>
                  <img
                    src={products[selectedProduct].image}
                    alt={products[selectedProduct].name}
                    className="w-full h-64 object-cover rounded-lg"
                  />
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-3 text-foreground flex items-center gap-2">
                    <Zap className="h-5 w-5 text-primary" />
                    Technical Specifications
                  </h3>
                  <div className="grid grid-cols-2 gap-4">
                    {products[selectedProduct].specs.map((spec, i) => (
                      <div
                        key={i}
                        className="bg-card p-4 rounded-md border border-card-border"
                      >
                        <div className="text-sm text-muted-foreground mb-1">{spec.label}</div>
                        <div className="font-mono font-semibold text-foreground">{spec.value}</div>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-3 text-foreground">Key Features</h3>
                  <ul className="space-y-2">
                    {products[selectedProduct].details.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-3 text-foreground">Typical Applications</h3>
                  <div className="flex flex-wrap gap-2">
                    {products[selectedProduct].details.applications.map((app, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm"
                      >
                        {app}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="bg-muted/30 p-4 rounded-md">
                  <h3 className="text-lg font-semibold mb-2 text-foreground">Warranty</h3>
                  <p className="text-foreground">{products[selectedProduct].details.warranty}</p>
                </div>

                <div className="pt-4 border-t border-border flex gap-4">
                  <Button
                    onClick={() => setSelectedProduct(null)}
                    variant="secondary"
                    className="flex-1"
                    data-testid="button-close-product-dialog"
                  >
                    Close
                  </Button>
                  <Button
                    onClick={() => {
                      setSelectedProduct(null);
                      window.location.href = '/contact';
                    }}
                    className="flex-1"
                    data-testid="button-request-quote"
                  >
                    Request Quote
                  </Button>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
