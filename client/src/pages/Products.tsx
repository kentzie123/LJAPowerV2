import Hero from "@/components/Hero";
import ProductCard from "@/components/ProductCard";
import { useState } from "react";
import showroomImage from '@assets/generated_images/Generator_showroom_display_040b73ab.png';
import productImage from '@assets/generated_images/Product_generator_white_background_cfbb511e.png';

export default function Products() {
  //todo: remove mock functionality - replace with real data
  const [selectedCategory, setSelectedCategory] = useState("all");

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
      price: "Contact for Quote"
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
      price: "Contact for Quote"
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
      price: "Contact for Quote"
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
      price: "Contact for Quote"
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
      price: "Contact for Quote"
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
      price: "Contact for Quote"
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
      price: "Contact for Quote"
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
      price: "Contact for Quote"
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
      price: "Contact for Quote"
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
            {filteredProducts.map((product, index) => (
              <ProductCard
                key={index}
                {...product}
                onViewDetails={() => console.log(`View details: ${product.name}`)}
              />
            ))}
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
    </div>
  );
}
