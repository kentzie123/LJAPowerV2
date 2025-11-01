import Hero from "@/components/Hero";
import FeatureCard from "@/components/FeatureCard";
import ProductCard from "@/components/ProductCard";
import TestimonialCard from "@/components/TestimonialCard";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Zap, Shield, Clock, Award, CheckCircle2 } from "lucide-react";
import heroImage from '@assets/generated_images/Hero_generator_in_operation_2f44dd7d.png';
import productImage from '@assets/generated_images/Product_generator_white_background_cfbb511e.png';
import projectImage from '@assets/generated_images/Generator_installation_project_66ff5c5e.png';

export default function Home() {
  //todo: remove mock functionality - replace with real data
  const features = [
    {
      icon: Zap,
      title: "Reliable Power",
      description: "Industry-leading generators that deliver consistent power when you need it most, ensuring your operations never skip a beat."
    },
    {
      icon: Shield,
      title: "Quality Assurance",
      description: "All our generators meet the highest industry standards with comprehensive warranties and quality certifications."
    },
    {
      icon: Clock,
      title: "24/7 Support",
      description: "Round-the-clock technical support and emergency service to keep your power systems running smoothly."
    }
  ];

  const featuredProducts = [
    {
      name: "Commercial Generator 250kW",
      image: productImage,
      specs: [
        { label: "Power Output", value: "250 kW" },
        { label: "Fuel Type", value: "Diesel" },
        { label: "Voltage", value: "480V" }
      ],
      price: "Contact for Quote"
    },
    {
      name: "Industrial Generator 500kW",
      image: productImage,
      specs: [
        { label: "Power Output", value: "500 kW" },
        { label: "Fuel Type", value: "Diesel" },
        { label: "Voltage", value: "480V 3-Phase" }
      ],
      price: "Contact for Quote"
    },
    {
      name: "Prime Power Generator 1000kW",
      image: productImage,
      specs: [
        { label: "Power Output", value: "1000 kW" },
        { label: "Fuel Type", value: "Diesel" },
        { label: "Voltage", value: "480V 3-Phase" }
      ],
      price: "Contact for Quote"
    }
  ];

  const testimonials = [
    {
      quote: "LJA Power delivered exceptional service from consultation to installation. Our facility has been running smoothly with zero downtime.",
      author: "Sarah Johnson",
      company: "Manufacturing Solutions Inc.",
      rating: 5
    },
    {
      quote: "The reliability of their generators and the quality of their support team is unmatched. Best investment we've made for our operations.",
      author: "Michael Chen",
      company: "Tech Industries Corp.",
      rating: 5
    },
    {
      quote: "Professional, knowledgeable, and always available when we need them. LJA Power has been our trusted partner for years.",
      author: "Jennifer Martinez",
      company: "Regional Medical Center",
      rating: 5
    }
  ];

  return (
    <div>
      <Hero
        title="Professional Generator Solutions for Every Need"
        subtitle="Reliable power generation systems with expert installation, maintenance, and 24/7 support for commercial and industrial applications"
        backgroundImage={heroImage}
        showCTA={true}
        height="full"
      />

      <section className="py-20 px-6 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground" data-testid="text-section-title">
              Why Choose LJA Power
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Industry-leading generator solutions backed by decades of experience and commitment to excellence
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <FeatureCard key={index} {...feature} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-card">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground" data-testid="text-products-title">
              Featured Products
            </h2>
            <p className="text-lg text-muted-foreground">
              Explore our range of high-performance generator systems
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {featuredProducts.map((product, index) => (
              <ProductCard
                key={index}
                {...product}
                onViewDetails={() => console.log(`View details: ${product.name}`)}
              />
            ))}
          </div>

          <div className="text-center">
            <Link href="/products">
              <Button size="lg" data-testid="button-view-all-products">
                View All Products
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src={projectImage}
                alt="Generator Installation"
                className="rounded-lg w-full h-auto"
                data-testid="img-why-choose"
              />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground" data-testid="text-why-title">
                Complete Power Solutions
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                From initial consultation to ongoing maintenance, we provide comprehensive power generation solutions tailored to your specific needs.
              </p>
              <ul className="space-y-4 mb-8">
                {[
                  "Professional site assessment and planning",
                  "Expert installation and commissioning",
                  "Preventive maintenance programs",
                  "24/7 emergency support",
                  "Parts and service availability",
                  "Compliance and certification assistance"
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3" data-testid={`text-benefit-${index}`}>
                    <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
              <Link href="/services">
                <Button size="lg" data-testid="button-view-services">
                  View Our Services
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-card">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground" data-testid="text-testimonials-title">
              What Our Clients Say
            </h2>
            <p className="text-lg text-muted-foreground">
              Trusted by businesses across industries
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={index} {...testimonial} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-primary">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary-foreground" data-testid="text-cta-title">
            Ready to Power Your Business?
          </h2>
          <p className="text-lg text-primary-foreground/90 mb-8">
            Get in touch with our experts to find the perfect generator solution for your needs
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" variant="secondary" data-testid="button-cta-contact">
                Contact Us Today
              </Button>
            </Link>
            <Link href="/products">
              <Button
                size="lg"
                variant="outline"
                className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10"
                data-testid="button-cta-products"
              >
                Browse Products
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
