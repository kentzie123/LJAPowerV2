import Hero from "@/components/Hero";
import ServiceCard from "@/components/ServiceCard";
import { Card } from "@/components/ui/card";
import { Settings, Wrench, PhoneCall, CheckCircle2 } from "lucide-react";
import serviceImage from '@assets/generated_images/Technician_servicing_generator_d5ab4806.png';

export default function Services() {
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
      ]
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
      ]
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
      ]
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
      ]
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
                onLearnMore={() => console.log(`Learn more: ${service.title}`)}
              />
            ))}
          </div>
        </div>
      </section>

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
