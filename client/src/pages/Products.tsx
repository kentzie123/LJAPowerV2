import Hero from "@/components/Hero";
import ProductCard from "@/components/ProductCard";
import { useState } from "react";
import { Link } from "wouter";
import { getProductsByCategory } from "@/data/products";
import showroomImage from '@assets/generated_images/Generator_showroom_display_040b73ab.png';

export default function Products() {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = [
    { id: "all", label: "All Products" },
    { id: "commercial", label: "Commercial" },
    { id: "industrial", label: "Industrial" },
    { id: "prime", label: "Prime Power" }
  ];

  const filteredProducts = getProductsByCategory(selectedCategory);

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
              <Link 
                key={index} 
                href={`/product/${product.slug}`}
                data-testid={`link-product-${product.slug}`}
              >
                <ProductCard {...product} />
              </Link>
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
