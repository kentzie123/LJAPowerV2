import { useState } from "react";
import Hero from "@/components/Hero";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Wrench,
  Zap,
  Cpu,
  AlertTriangle,
  Truck,
  CheckCircle2,
  ArrowRight,
  Shield,
  Clock,
  Users,
  Lightbulb
} from "lucide-react";
import serviceImage from '@assets/generated_images/Technician_servicing_generator_d5ab4806.png';

interface Service {
  id: string;
  icon: React.ElementType;
  title: string;
  tagline: string;
  description: string;
  benefits: string[];
  process: string[];
  color: string;
  darkColor: string;
  accentBg: string;
}

const services: Service[] = [
  {
    id: "preventive-maintenance",
    icon: Wrench,
    title: "Preventive Maintenance",
    tagline: "Keep systems running at peak performance",
    description: "Proactive maintenance programs designed to keep your generator operating reliably and efficiently. We handle regular inspections, fluid checks, filter replacements, and comprehensive testing to prevent unexpected breakdowns.",
    benefits: [
      "Extended equipment lifespan through regular care",
      "Reduced risk of catastrophic failures",
      "Optimized fuel efficiency and performance",
      "Compliance with manufacturer warranty requirements",
      "Detailed service records for compliance tracking"
    ],
    process: [
      "Assessment of your equipment and usage patterns",
      "Development of customized maintenance schedule",
      "Regular visual and operational inspections",
      "Oil, fluid, and filter maintenance",
      "Battery testing and load verification",
      "Comprehensive performance reports"
    ],
    color: "from-blue-500 to-cyan-500",
    darkColor: "bg-blue-600",
    accentBg: "bg-blue-100"
  },
  {
    id: "ats-installation",
    icon: Zap,
    title: "ATS Installation",
    tagline: "Automatic power failover in seconds",
    description: "Professional Automatic Transfer Switch installation that seamlessly switches between utility power and your generator with zero downtime. Ensures continuous operation during outages with intelligent control systems.",
    benefits: [
      "Automatic transfer with zero manual intervention",
      "Zero downtime during power transitions",
      "Seamless integration with existing electrical systems",
      "Professional installation by certified electricians",
      "24/7 monitoring and protection capabilities"
    ],
    process: [
      "Complete site electrical assessment",
      "ATS system selection and sizing analysis",
      "Professional installation and integration",
      "Connection to existing generator system",
      "Comprehensive system testing and validation",
      "Staff training and documentation"
    ],
    color: "from-yellow-500 to-orange-500",
    darkColor: "bg-yellow-600",
    accentBg: "bg-yellow-100"
  },
  {
    id: "controller-conversion",
    icon: Cpu,
    title: "Controller Conversion",
    tagline: "Upgrade to smart generator controls",
    description: "Replace outdated controllers with modern, intelligent generator control systems. Enhanced monitoring, diagnostics, and remote capabilities provide superior performance and management of your power generation infrastructure.",
    benefits: [
      "Advanced real-time monitoring and diagnostics",
      "Improved fuel efficiency and engine performance",
      "Remote monitoring and control capabilities",
      "Intelligent load management and load shedding",
      "Modern user interface with data logging"
    ],
    process: [
      "Evaluation of existing control system",
      "New controller selection and compatibility check",
      "Professional removal and installation",
      "System integration and configuration",
      "Calibration and performance optimization",
      "Comprehensive staff training"
    ],
    color: "from-purple-500 to-pink-500",
    darkColor: "bg-purple-600",
    accentBg: "bg-purple-100"
  },
  {
    id: "troubleshooting",
    icon: AlertTriangle,
    title: "Troubleshooting & Diagnostics",
    tagline: "Fast diagnosis and expert solutions",
    description: "Expert diagnostic services to quickly identify and resolve generator issues. Our experienced technicians use advanced testing equipment to pinpoint problems and implement effective solutions with minimal downtime.",
    benefits: [
      "Expert technical diagnosis using advanced tools",
      "Rapid problem identification and resolution",
      "Preventive recommendations to avoid future issues",
      "Detailed diagnostic reports for your records",
      "24/7 emergency response availability"
    ],
    process: [
      "Comprehensive issue assessment and evaluation",
      "Advanced diagnostic testing and analysis",
      "Root cause identification",
      "Repair recommendations and cost estimates",
      "Professional repairs using genuine parts",
      "Post-repair testing and verification"
    ],
    color: "from-red-500 to-rose-500",
    darkColor: "bg-red-600",
    accentBg: "bg-red-100"
  },
  {
    id: "delivery",
    icon: Truck,
    title: "Delivery & Installation",
    tagline: "Professional setup from delivery to operation",
    description: "Complete delivery and installation service for your new generator equipment. We handle transportation, site preparation, professional installation, initial startup, and comprehensive testing to ensure reliable operation.",
    benefits: [
      "Safe, insured transportation with tracking",
      "Professional on-site installation by certified technicians",
      "Proper equipment placement and positioning",
      "Initial system startup and load testing",
      "Complete site cleanup and documentation"
    ],
    process: [
      "Delivery scheduling and coordination",
      "Safe transportation with real-time updates",
      "Site preparation and equipment positioning",
      "Professional installation and connection",
      "Initial startup and load testing",
      "Handover, training, and documentation"
    ],
    color: "from-green-500 to-emerald-500",
    darkColor: "bg-green-600",
    accentBg: "bg-green-100"
  }
];

const features = [
  {
    icon: Shield,
    title: "Industry-Leading Expertise",
    description: "15+ years of experience serving generator systems with certified technicians and proven track records"
  },
  {
    icon: Clock,
    title: "Rapid Response",
    description: "Average emergency response under 2 hours, 24/7 availability for critical situations"
  },
  {
    icon: Users,
    title: "Dedicated Support",
    description: "Personalized service with direct access to experienced professionals who know your systems"
  },
  {
    icon: Lightbulb,
    title: "Smart Solutions",
    description: "Modern technology and innovative approaches to maximize your generator performance"
  }
];

export default function Services() {
  const [selectedService, setSelectedService] = useState<string | null>(null);
  const [hoveredService, setHoveredService] = useState<string | null>(null);

  const selectedServiceData = services.find(s => s.id === selectedService);

  return (
    <div>
      <Hero
        title="Professional Generator Services"
        subtitle="Complete power generation solutions tailored to your needs"
        backgroundImage={serviceImage}
        showCTA={false}
        height="medium"
      />

      <section className="py-24 px-6 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold mb-6 text-foreground" data-testid="text-services-title">
              Our Core Services
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              LJA Power Limited Co. provides comprehensive generator solutions covering everything from preventive maintenance to emergency support. We ensure your power generation systems operate reliably when you need them most.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => {
              const Icon = service.icon;
              const isHovered = hoveredService === service.id;
              return (
                <div
                  key={service.id}
                  onMouseEnter={() => setHoveredService(service.id)}
                  onMouseLeave={() => setHoveredService(null)}
                  className="group cursor-pointer"
                >
                  <Card
                    className={`h-full p-8 transition-all duration-300 border-0 overflow-hidden relative ${
                      isHovered ? "shadow-2xl" : "shadow-lg hover:shadow-xl"
                    }`}
                    onClick={() => setSelectedService(service.id)}
                    data-testid={`card-service-${service.id}`}
                  >
                    <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />

                    <div className="relative z-10">
                      <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transition-all duration-300 ${
                        isHovered ? service.darkColor : `${service.accentBg} text-foreground`
                      } ${isHovered ? 'text-white shadow-lg scale-110' : ''}`}>
                        <Icon className="h-8 w-8" />
                      </div>

                      <h3 className="text-2xl font-bold mb-2 text-foreground">
                        {service.title}
                      </h3>

                      <p className="text-sm font-semibold text-primary mb-3">
                        {service.tagline}
                      </p>

                      <p className="text-muted-foreground mb-6 leading-relaxed line-clamp-3">
                        {service.description}
                      </p>

                      <div className="flex items-center gap-2 text-primary font-semibold group-hover:gap-3 transition-all duration-300">
                        Learn More
                        <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </Card>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-24 px-6 bg-card border-y border-border">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
              Why LJA Power?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We combine expertise, reliability, and customer-focused service
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const FeatureIcon = feature.icon;
              return (
                <div key={index} className="text-center group" data-testid={`feature-${index}`}>
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                    <FeatureIcon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-lg font-bold mb-2 text-foreground">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-24 px-6 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
              Complete Service Coverage
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              From planning to operation to emergency support
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-foreground mb-6">Installation & Setup</h3>
              {[
                "Professional site assessment and evaluation",
                "System design and planning",
                "ATS installation and configuration",
                "Complete installation and startup",
                "Testing and commissioning"
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">{item}</span>
                </div>
              ))}
            </div>

            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-foreground mb-6">Ongoing Support</h3>
              {[
                "Preventive maintenance programs",
                "24/7 emergency response",
                "Diagnostics and troubleshooting",
                "System upgrades and conversions",
                "Performance monitoring and optimization"
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 px-6 bg-gradient-to-r from-slate-900 to-slate-800 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-500 rounded-full blur-3xl" />
        </div>

        <div className="max-w-4xl mx-auto relative z-10 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Performance Metrics
          </h2>
          <p className="text-xl text-slate-300 mb-12 max-w-2xl mx-auto">
            Proven track record of reliability and customer satisfaction
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: "15+", label: "Years Experience" },
              { value: "500+", label: "Systems Installed" },
              { value: "<2hrs", label: "Response Time" },
              { value: "99.5%", label: "Uptime Rate" }
            ].map((stat, i) => (
              <div key={i} data-testid={`stat-${i}`}>
                <div className="text-4xl md:text-5xl font-bold mb-2 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                  {stat.value}
                </div>
                <div className="text-sm text-slate-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-6 bg-card">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Ready to Protect Your Power?
          </h2>
          <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
            Contact LJA Power Limited Co. today to discuss your generator needs and discover how we can ensure your operations never miss a beat.
          </p>
          <Button size="lg" className="px-8 py-6 text-lg" data-testid="button-contact-cta">
            Schedule Your Consultation
          </Button>
        </div>
      </section>

      <Dialog open={selectedService !== null} onOpenChange={() => setSelectedService(null)}>
        <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
          {selectedServiceData && (
            <>
              <DialogHeader>
                <div className={`w-full h-32 rounded-lg bg-gradient-to-br ${selectedServiceData.color} flex items-center justify-center mb-6 -mx-6 -mt-6`}>
                  {(() => {
                    const ServiceIcon = selectedServiceData.icon;
                    return <ServiceIcon className="h-16 w-16 text-white" />;
                  })()}
                </div>

                <DialogTitle className="text-3xl font-bold">
                  {selectedServiceData.title}
                </DialogTitle>
                <p className="text-lg text-primary font-semibold mt-2">
                  {selectedServiceData.tagline}
                </p>
              </DialogHeader>

              <div className="space-y-8 mt-8">
                <div>
                  <p className="text-lg text-foreground leading-relaxed">
                    {selectedServiceData.description}
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-bold mb-4 text-foreground">Key Benefits</h3>
                  <ul className="space-y-3">
                    {selectedServiceData.benefits.map((benefit, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-foreground text-lg">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="text-2xl font-bold mb-4 text-foreground">Our Process</h3>
                  <ol className="space-y-3">
                    {selectedServiceData.process.map((step, i) => (
                      <li key={i} className="flex items-start gap-4">
                        <span className={`inline-flex items-center justify-center w-8 h-8 rounded-full bg-gradient-to-br ${selectedServiceData.color} text-white text-sm font-bold flex-shrink-0`}>
                          {i + 1}
                        </span>
                        <span className="text-foreground text-lg pt-1">{step}</span>
                      </li>
                    ))}
                  </ol>
                </div>

                <div className="pt-6 border-t border-border flex gap-3">
                  <Button
                    onClick={() => setSelectedService(null)}
                    variant="outline"
                    className="flex-1 py-6"
                    data-testid="button-close-dialog"
                  >
                    Close
                  </Button>
                  <Button
                    className="flex-1 py-6"
                    data-testid="button-contact-service"
                  >
                    Request This Service
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
