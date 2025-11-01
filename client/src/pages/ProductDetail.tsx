import { useRoute, Link } from "wouter";
import { getProductBySlug } from "@/data/products";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CheckCircle2, Zap, ArrowLeft } from "lucide-react";
import NotFound from "@/pages/not-found";

export default function ProductDetail() {
  const [, params] = useRoute("/product/:slug");
  
  if (!params?.slug) {
    return <NotFound />;
  }

  const product = getProductBySlug(params.slug);

  if (!product) {
    return <NotFound />;
  }

  return (
    <div className="min-h-screen bg-background">
      <section className="py-8 px-6 border-b border-border">
        <div className="max-w-7xl mx-auto">
          <Link 
            href="/products"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-4" 
            data-testid="link-back-products"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Products
          </Link>
        </div>
      </section>

      <section className="py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
            <div>
              <img
                src={product.image}
                alt={product.name}
                className="w-full rounded-lg"
                data-testid="img-product-detail"
              />
            </div>
            
            <div>
              <h1 className="text-4xl font-bold mb-4 text-foreground" data-testid="text-product-name">
                {product.name}
              </h1>
              
              <p className="text-lg text-muted-foreground mb-6" data-testid="text-product-description">
                {product.details.description}
              </p>

              <div className="text-3xl font-bold text-primary mb-8" data-testid="text-product-price">
                {product.price}
              </div>

              <div className="flex gap-4">
                <Button asChild size="lg" data-testid="button-request-quote">
                  <Link href="/contact">
                    Request Quote
                  </Link>
                </Button>
                <Button asChild size="lg" variant="secondary" data-testid="button-contact-us">
                  <Link href="/contact">
                    Contact Us
                  </Link>
                </Button>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-8">
              <Card className="p-8">
                <h2 className="text-2xl font-semibold mb-6 text-foreground flex items-center gap-2">
                  <Zap className="h-6 w-6 text-primary" />
                  Technical Specifications
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {product.specs.map((spec, i) => (
                    <div
                      key={i}
                      className="bg-muted/30 p-4 rounded-md"
                      data-testid={`spec-${i}`}
                    >
                      <div className="text-sm text-muted-foreground mb-1">{spec.label}</div>
                      <div className="font-mono font-semibold text-foreground">{spec.value}</div>
                    </div>
                  ))}
                </div>
              </Card>

              <Card className="p-8">
                <h2 className="text-2xl font-semibold mb-6 text-foreground">
                  Key Features
                </h2>
                <ul className="space-y-3">
                  {product.details.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3" data-testid={`feature-${i}`}>
                      <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-foreground text-lg">{feature}</span>
                    </li>
                  ))}
                </ul>
              </Card>

              <Card className="p-8">
                <h2 className="text-2xl font-semibold mb-6 text-foreground">
                  Typical Applications
                </h2>
                <div className="flex flex-wrap gap-3">
                  {product.details.applications.map((app, i) => (
                    <span
                      key={i}
                      className="px-4 py-2 bg-primary/10 text-primary rounded-full text-base font-medium"
                      data-testid={`application-${i}`}
                    >
                      {app}
                    </span>
                  ))}
                </div>
              </Card>
            </div>

            <div className="space-y-6">
              <Card className="p-6 bg-secondary">
                <h3 className="text-xl font-semibold mb-4 text-foreground">
                  Warranty Information
                </h3>
                <p className="text-foreground mb-6" data-testid="text-warranty">
                  {product.details.warranty}
                </p>
                <Button asChild className="w-full" data-testid="button-get-quote">
                  <Link href="/contact">
                    Get a Quote
                  </Link>
                </Button>
              </Card>

              <Card className="p-6">
                <h3 className="text-xl font-semibold mb-4 text-foreground">
                  Need Help?
                </h3>
                <p className="text-muted-foreground mb-4">
                  Our experts are ready to help you find the perfect generator solution for your needs.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground mb-4">
                  <li>• Free consultation</li>
                  <li>• Site assessment</li>
                  <li>• Custom solutions</li>
                  <li>• 24/7 support</li>
                </ul>
                <Button asChild variant="secondary" className="w-full" data-testid="button-contact-expert">
                  <Link href="/contact">
                    Contact an Expert
                  </Link>
                </Button>
              </Card>

              <Card className="p-6">
                <h3 className="text-xl font-semibold mb-4 text-foreground">
                  Download Resources
                </h3>
                <div className="space-y-2">
                  <Button
                    variant="outline"
                    className="w-full justify-start"
                    onClick={() => console.log('Download datasheet')}
                    data-testid="button-download-datasheet"
                  >
                    Product Datasheet
                  </Button>
                  <Button
                    variant="outline"
                    className="w-full justify-start"
                    onClick={() => console.log('Download manual')}
                    data-testid="button-download-manual"
                  >
                    Installation Manual
                  </Button>
                  <Button
                    variant="outline"
                    className="w-full justify-start"
                    onClick={() => console.log('Download specs')}
                    data-testid="button-download-specs"
                  >
                    Technical Specs
                  </Button>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-card">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6 text-foreground" data-testid="text-cta-title">
            Ready to Learn More?
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Contact our team to discuss your power generation needs and get a customized quote.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" data-testid="button-cta-contact">
              <Link href="/contact">
                Request a Quote
              </Link>
            </Button>
            <Button asChild size="lg" variant="secondary" data-testid="button-cta-browse">
              <Link href="/products">
                Browse All Products
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
