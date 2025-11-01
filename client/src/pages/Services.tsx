import Hero from "@/components/Hero";
import ServiceCard from "@/components/ServiceCard";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Settings, Wrench, PhoneCall, CheckCircle2 } from "lucide-react";
import { useState } from "react";
import serviceImage from '@assets/generated_images/Technician_servicing_generator_d5ab4806.png';

export default function Services() {
  const [selectedService, setSelectedService] = useState<number | null>(null);

  const services = [
    {
      icon: Settings,
      title: "Installation",
      description: "Professional installation services ensuring optimal performance and compliance with all regulations.",
      features: [
        "Comprehensive site assessment",
        "Professional installation team",
        "Code compliance certification",
        "System testing and commissioning",
        "Training for your staff"
      ],
      detailedInfo: {
        overview: "Our installation services are designed to ensure your generator system is installed correctly, safely, and in compliance with all local, state, and federal regulations. We handle every aspect of the installation process from start to finish.",
        process: [
          "Initial site survey and power requirement analysis",
          "Detailed installation plan and timeline development",
          "Permits and regulatory approval coordination",
          "Professional installation by certified technicians",
          "Comprehensive system testing and load bank testing",
          "Staff training and documentation handover"
        ],
        benefits: [
          "Peace of mind knowing your system is installed correctly",
          "Full compliance with all applicable codes and standards",
          "Optimized performance from day one",
          "Comprehensive warranty coverage",
          "Reduced risk of future issues"
        ]
      }
    },
    {
      icon: Wrench,
      title: "Maintenance",
      description: "Preventive maintenance programs to keep your generators running at peak efficiency.",
      features: [
        "Scheduled maintenance visits",
        "Comprehensive system inspections",
        "Parts replacement and updates",
        "Performance optimization",
        "Detailed service reports"
      ],
      detailedInfo: {
        overview: "Regular maintenance is critical to ensuring your generator operates reliably when you need it most. Our preventive maintenance programs are tailored to your specific equipment and usage patterns.",
        process: [
          "Customized maintenance schedule based on your needs",
          "Visual and operational inspections",
          "Fluid level checks and replacements",
          "Filter replacements and cleaning",
          "Battery testing and maintenance",
          "Load testing and performance verification"
        ],
        benefits: [
          "Extended equipment lifespan",
          "Reduced risk of unexpected failures",
          "Lower long-term operating costs",
          "Maintained warranty compliance",
          "Detailed records for compliance reporting"
        ]
      }
    },
    {
      icon: CheckCircle2,
      title: "Repair & Service",
      description: "Expert repair services to minimize downtime and restore full functionality quickly.",
      features: [
        "24/7 emergency service",
        "Rapid response time",
        "Expert diagnostics",
        "Quality replacement parts",
        "Warranty on all repairs"
      ],
      detailedInfo: {
        overview: "When your generator experiences issues, our expert technicians are available 24/7 to diagnose and repair the problem quickly. We stock a comprehensive inventory of parts to minimize downtime.",
        process: [
          "Emergency call received and logged",
          "Technician dispatched within 2 hours",
          "On-site diagnostics and problem identification",
          "Repair plan and quote provided",
          "Repairs completed using genuine parts",
          "System testing and verification"
        ],
        benefits: [
          "Minimized downtime and lost productivity",
          "Expert diagnosis prevents recurring issues",
          "Genuine parts ensure quality and compatibility",
          "Comprehensive warranty on all work",
          "Detailed service documentation"
        ]
      }
    },
    {
      icon: PhoneCall,
      title: "Consultation",
      description: "Expert guidance to help you choose the right generator solution for your specific needs.",
      features: [
        "Power requirement analysis",
        "System design and planning",
        "Cost-benefit evaluation",
        "Regulatory compliance review",
        "Ongoing support and advice"
      ],
      detailedInfo: {
        overview: "Our consultation services help you make informed decisions about your power generation needs. We analyze your requirements and recommend solutions that provide the best value and reliability.",
        process: [
          "Initial consultation to understand your needs",
          "Detailed power load analysis",
          "Site evaluation for optimal placement",
          "System design and specification",
          "Cost analysis and ROI calculations",
          "Ongoing support during decision-making"
        ],
        benefits: [
          "Right-sized system for your needs",
          "Optimized capital investment",
          "Future-proof solution design",
          "Expert guidance throughout the process",
          "Confidence in your decision"
        ]
      }
    }
  ];

  const process = [
    {
      step: "1",
      title: "Consultation",
      description: "We assess your power needs and recommend the ideal solution"
    },
    {
      step: "2",
      title: "Design",
      description: "Our engineers design a system tailored to your requirements"
    },
    {
      step: "3",
      title: "Installation",
      description: "Professional installation with minimal disruption to your operations"
    },
    {
      step: "4",
      title: "Support",
      description: "Ongoing maintenance and 24/7 support to ensure reliability"
    }
  ];

  return (
    <div>
      <Hero
        title="Professional Generator Services"
        subtitle="Comprehensive installation, maintenance, and support services for all your power generation needs"
        backgroundImage={serviceImage}
        showCTA={false}
        height="medium"
      />

      <section className="py-20 px-6 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground" data-testid="text-services-title">
              Our Services
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Complete power generation solutions from initial consultation to ongoing support
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                {...service}
                onLearnMore={() => setSelectedService(index)}
              />
            ))}
          </div>
        </div>
      </section>

      <Dialog open={selectedService !== null} onOpenChange={() => setSelectedService(null)}>
        <DialogContent className="max-w-3xl max-h-[85vh] overflow-y-auto">
          {selectedService !== null && (
            <>
              <DialogHeader>
                <DialogTitle className="flex items-center gap-3 text-2xl">
                  {(() => {
                    const ServiceIcon = services[selectedService].icon;
                    return <ServiceIcon className="h-8 w-8 text-primary" />;
                  })()}
                  {services[selectedService].title}
                </DialogTitle>
                <DialogDescription className="text-base mt-2">
                  {services[selectedService].description}
                </DialogDescription>
              </DialogHeader>

              <div className="space-y-6 mt-6">
                <div>
                  <h3 className="text-lg font-semibold mb-3 text-foreground">Overview</h3>
                  <p className="text-muted-foreground">
                    {services[selectedService].detailedInfo.overview}
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-3 text-foreground">Our Process</h3>
                  <ul className="space-y-2">
                    {services[selectedService].detailedInfo.process.map((step, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-primary font-bold mt-1">{i + 1}.</span>
                        <span className="text-foreground">{step}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-3 text-foreground">Key Benefits</h3>
                  <ul className="space-y-2">
                    {services[selectedService].detailedInfo.benefits.map((benefit, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-foreground">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4 border-t border-border">
                  <Button
                    onClick={() => setSelectedService(null)}
                    className="w-full"
                    data-testid="button-close-dialog"
                  >
                    Close
                  </Button>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>

      <section className="py-20 px-6 bg-card">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground" data-testid="text-process-title">
              Our Process
            </h2>
            <p className="text-lg text-muted-foreground">
              A streamlined approach to delivering exceptional results
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {process.map((item, index) => (
              <Card key={index} className="p-6 text-center hover-elevate active-elevate-2" data-testid={`card-process-${index}`}>
                <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4" data-testid={`text-step-number-${index}`}>
                  {item.step}
                </div>
                <h3 className="text-xl font-semibold mb-3 text-foreground" data-testid={`text-step-title-${index}`}>
                  {item.title}
                </h3>
                <p className="text-muted-foreground" data-testid={`text-step-description-${index}`}>
                  {item.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-background">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground" data-testid="text-support-title">
            24/7 Emergency Support
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Power outages don't wait for business hours, and neither do we. Our emergency support team is available around the clock to keep your operations running smoothly.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <Card className="p-6">
              <div className="text-3xl font-bold text-primary mb-2" data-testid="text-stat-response">
                &lt;2 Hours
              </div>
              <div className="text-sm text-muted-foreground">Average Response Time</div>
            </Card>
            <Card className="p-6">
              <div className="text-3xl font-bold text-primary mb-2" data-testid="text-stat-availability">
                24/7/365
              </div>
              <div className="text-sm text-muted-foreground">Support Availability</div>
            </Card>
            <Card className="p-6">
              <div className="text-3xl font-bold text-primary mb-2" data-testid="text-stat-satisfaction">
                99.5%
              </div>
              <div className="text-sm text-muted-foreground">Customer Satisfaction</div>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
