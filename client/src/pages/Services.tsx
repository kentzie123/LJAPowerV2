import { useState } from "react";
import Hero from "@/components/Hero";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Zap,
  Wrench,
  Cpu,
  AlertTriangle,
  Truck,
  CheckCircle2,
  ArrowRight
} from "lucide-react";
import serviceImage from '@assets/generated_images/Technician_servicing_generator_d5ab4806.png';

interface Service {
  id: string;
  icon: React.ElementType;
  title: string;
  description: string;
  shortDesc: string;
  benefits: string[];
  process: string[];
  color: string;
  accentBg: string;
}

const services: Service[] = [
  {
    id: "preventive-maintenance",
    icon: Wrench,
    title: "Preventive Maintenance",
    description: "Keep your generator in peak condition with our comprehensive maintenance programs",
    shortDesc: "Regular inspections and maintenance to prevent breakdowns",
    benefits: [
      "Extended equipment lifespan",
      "Reduced risk of unexpected failures",
      "Optimized performance and fuel efficiency",
      "Compliance with warranty requirements",
      "Detailed service records and reporting"
    ],
    process: [
      "Customized maintenance schedule based on usage",
      "Visual and operational inspections",
      "Oil and fluid level checks and replacements",
      "Filter replacements and system cleaning",
      "Battery testing and load testing",
      "Performance verification and reporting"
    ],
    color: "text-blue-600",
    accentBg: "bg-blue-50"
  },
  {
    id: "ats-installation",
    icon: Zap,
    title: "ATS Installation",
    description: "Automatic Transfer Switch systems for seamless power failover and backup",
    shortDesc: "Automatic switching between main power and generator",
    benefits: [
      "Automatic power transfer with zero downtime",
      "Seamless transition between power sources",
      "Professional installation and configuration",
      "System testing and commissioning",
      "24/7 monitoring capability"
    ],
    process: [
      "Site assessment and electrical evaluation",
      "ATS system selection and sizing",
      "Professional installation by certified electricians",
      "Integration with existing electrical systems",
      "Comprehensive system testing",
      "Training and documentation"
    ],
    color: "text-yellow-600",
    accentBg: "bg-yellow-50"
  },
  {
    id: "controller-conversion",
    icon: Cpu,
    title: "Generator Controller Conversion",
    description: "Upgrade to modern generator control systems for enhanced functionality and reliability",
    shortDesc: "Convert to advanced control systems",
    benefits: [
      "Enhanced monitoring and diagnostics",
      "Improved fuel efficiency and performance",
      "Remote monitoring capabilities",
      "Better start/stop logic and load management",
      "Modern interface and user-friendly controls"
    ],
    process: [
      "Evaluation of existing control system",
      "Controller selection and compatibility assessment",
      "Professional installation and integration",
      "System calibration and programming",
      "Extensive testing and optimization",
      "Staff training on new system"
    ],
    color: "text-purple-600",
    accentBg: "bg-purple-50"
  },
  {
    id: "troubleshooting",
    icon: AlertTriangle,
    title: "Troubleshooting & Diagnostics",
    description: "Expert diagnostic services to identify and resolve generator issues quickly",
    shortDesc: "Fast diagnosis and resolution of problems",
    benefits: [
      "Expert technical diagnosis",
      "Minimized downtime and disruption",
      "Preventive recommendations",
      "Detailed diagnostic reports",
      "24/7 emergency response available"
    ],
    process: [
      "Issue assessment and initial diagnostics",
      "In-depth system testing and analysis",
      "Root cause identification",
      "Repair recommendations and quotes",
      "Repairs using genuine parts",
      "System verification and follow-up"
    ],
    color: "text-red-600",
    accentBg: "bg-red-50"
  },
  {
    id: "delivery",
    icon: Truck,
    title: "Delivery & Installation",
    description: "Professional delivery and installation services for new generators and equipment",
    shortDesc: "Reliable delivery and setup",
    benefits: [
      "Safe and secure transportation",
      "Professional installation on site",
      "Proper placement and positioning",
      "Initial system startup and testing",
      "Site cleanup and documentation"
    ],
    process: [
      "Delivery scheduling and coordination",
      "Safe transportation with tracking",
      "Site preparation and equipment positioning",
      "Professional installation setup",
      "Initial system startup and checks",
      "Handover and customer orientation"
    ],
    color: "text-green-600",
    accentBg: "bg-green-50"
  }
];

const stats = [
  { value: "15+", label: "Years of Experience" },
  { value: "500+", label: "Systems Installed" },
  { value: "<2hrs", label: "Emergency Response" },
  { value: "99.5%", label: "Uptime Rate" }
];

export default function Services() {
  const [selectedService, setSelectedService] = useState<string | null>(null);

  const selectedServiceData = services.find(s => s.id === selectedService);

  return (
    <div>
      <Hero
        title="Professional Generator Services"
        subtitle="Comprehensive solutions for installation, maintenance, and support"
        backgroundImage={serviceImage}
        showCTA={false}
        height="medium"
      />

      <section className="py-20 px-6 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground" data-testid="text-services-title">
              Our Services
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Complete power generation solutions tailored to your needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <Card
                  key={service.id}
                  className={`p-8 cursor-pointer transition-all hover-elevate active-elevate-2 border-l-4 ${
                    selectedService === service.id
                      ? "ring-2 ring-primary"
                      : ""
                  }`}
                  onClick={() => setSelectedService(service.id)}
                  data-testid={`card-service-${service.id}`}
                >
                  <div className={`w-14 h-14 rounded-lg flex items-center justify-center mb-4 ${service.accentBg}`}>
                    <Icon className={`h-7 w-7 ${service.color}`} />
                  </div>

                  <h3 className="text-xl font-bold mb-2 text-foreground">
                    {service.title}
                  </h3>

                  <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                    {service.shortDesc}
                  </p>

                  <Button
                    variant="ghost"
                    size="sm"
                    className="w-full justify-between p-0 h-auto hover:bg-transparent"
                    data-testid={`button-learn-more-${service.id}`}
                  >
                    Learn More
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-card border-y border-border">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-primary mb-2" data-testid={`text-stat-value-${index}`}>
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground" data-testid={`text-stat-label-${index}`}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-background">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
              Why Choose LJA Power?
            </h2>
            <p className="text-lg text-muted-foreground">
              We deliver reliable, professional power generation solutions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                title: "Expert Technicians",
                description: "Certified professionals with extensive experience in generator systems"
              },
              {
                title: "24/7 Support",
                description: "Emergency response available around the clock for critical situations"
              },
              {
                title: "Quality Parts",
                description: "We use genuine replacement parts and top-tier equipment"
              },
              {
                title: "Competitive Pricing",
                description: "Transparent quotes with no hidden fees or surprise charges"
              },
              {
                title: "Warranty Coverage",
                description: "Comprehensive warranties on all parts and labor"
              },
              {
                title: "Fast Response",
                description: "Average response time under 2 hours for emergency calls"
              }
            ].map((item, index) => (
              <Card key={index} className="p-6" data-testid={`card-benefit-${index}`}>
                <div className="flex items-start gap-4">
                  <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">
                      {item.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {item.description}
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Dialog open={selectedService !== null} onOpenChange={() => setSelectedService(null)}>
        <DialogContent className="max-w-2xl max-h-[85vh] overflow-y-auto">
          {selectedServiceData && (
            <>
              <DialogHeader>
                <div className="flex items-start gap-4 mb-4">
                  <div className={`w-16 h-16 rounded-lg flex items-center justify-center flex-shrink-0 ${selectedServiceData.accentBg}`}>
                    {(() => {
                      const ServiceIcon = selectedServiceData.icon;
                      return <ServiceIcon className={`h-8 w-8 ${selectedServiceData.color}`} />;
                    })()}
                  </div>
                  <div>
                    <DialogTitle className="text-2xl mb-2">
                      {selectedServiceData.title}
                    </DialogTitle>
                    <DialogDescription className="text-base">
                      {selectedServiceData.description}
                    </DialogDescription>
                  </div>
                </div>
              </DialogHeader>

              <div className="space-y-6 mt-6">
                <div>
                  <h3 className="text-lg font-semibold mb-4 text-foreground">Key Benefits</h3>
                  <ul className="space-y-3">
                    {selectedServiceData.benefits.map((benefit, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-foreground">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-4 text-foreground">Our Process</h3>
                  <ol className="space-y-3">
                    {selectedServiceData.process.map((step, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-primary text-primary-foreground text-sm font-semibold flex-shrink-0">
                          {i + 1}
                        </span>
                        <span className="text-foreground pt-0.5">{step}</span>
                      </li>
                    ))}
                  </ol>
                </div>

                <div className="pt-4 border-t border-border flex gap-3">
                  <Button
                    onClick={() => setSelectedService(null)}
                    variant="outline"
                    className="flex-1"
                    data-testid="button-close-dialog"
                  >
                    Close
                  </Button>
                  <Button
                    className="flex-1"
                    data-testid="button-contact-service"
                  >
                    Request Service
                  </Button>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>

      <section className="py-20 px-6 bg-card">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
            Ready to Ensure Your Power Generation?
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Contact us today to discuss which service best fits your needs
          </p>
          <Button size="lg" data-testid="button-contact-cta">
            Get in Touch
          </Button>
        </div>
      </section>
    </div>
  );
}
