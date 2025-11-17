import { useState } from "react";
import Hero from "@/components/Hero";
import { Button } from "@/components/ui/button";
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
  fullDescription: string;
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
    description: "Proactive maintenance programs designed to keep your generator operating reliably and efficiently.",
    fullDescription: "Our preventive maintenance programs are designed to keep your generator operating reliably and efficiently. We handle regular inspections, fluid checks, filter replacements, and comprehensive testing to prevent unexpected breakdowns. Regular maintenance is critical to ensuring your generator operates reliably when you need it most.",
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
    description: "Professional Automatic Transfer Switch installation that seamlessly switches between utility power and your generator.",
    fullDescription: "Professional Automatic Transfer Switch installation that seamlessly switches between utility power and your generator with zero downtime. Ensures continuous operation during outages with intelligent control systems. An ATS system provides automatic failover, eliminating the need for manual switching and ensuring uninterrupted power supply to your critical systems.",
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
    description: "Replace outdated controllers with modern, intelligent generator control systems with enhanced functionality.",
    fullDescription: "Replace outdated controllers with modern, intelligent generator control systems. Enhanced monitoring, diagnostics, and remote capabilities provide superior performance and management of your power generation infrastructure. Modern controllers offer real-time data, predictive maintenance alerts, and remote management capabilities that older systems cannot provide.",
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
    description: "Expert diagnostic services to quickly identify and resolve generator issues with minimal downtime.",
    fullDescription: "Expert diagnostic services to quickly identify and resolve generator issues. Our experienced technicians use advanced testing equipment to pinpoint problems and implement effective solutions with minimal downtime. When issues arise, quick diagnosis and professional resolution can be the difference between a minor repair and major equipment failure.",
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
    description: "Complete delivery and installation service for your new generator equipment with comprehensive testing.",
    fullDescription: "Complete delivery and installation service for your new generator equipment. We handle transportation, site preparation, professional installation, initial startup, and comprehensive testing to ensure reliable operation. Our team ensures your new equipment is properly positioned, connected, and tested before handover.",
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
  const [expandedService, setExpandedService] = useState<string | null>(services[0].id);

  const selectedServiceData = services.find(s => s.id === expandedService);

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

          <div className="space-y-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              const isExpanded = expandedService === service.id;

              return (
                <div key={service.id} data-testid={`service-section-${service.id}`}>
                  <button
                    onClick={() => setExpandedService(service.id)}
                    className="w-full text-left"
                  >
                    <div className={`p-8 rounded-lg border-2 transition-all duration-300 ${
                      isExpanded
                        ? `bg-gradient-to-br ${service.color} bg-opacity-5 border-transparent shadow-lg`
                        : "bg-card border-border hover:border-primary hover:shadow-md"
                    }`}>
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex items-start gap-4 flex-1">
                          <div className={`w-16 h-16 rounded-2xl flex items-center justify-center flex-shrink-0 transition-all duration-300 ${
                            isExpanded
                              ? `${service.darkColor} text-white shadow-lg`
                              : `${service.accentBg} text-foreground`
                          }`}>
                            <Icon className="h-8 w-8" />
                          </div>

                          <div className="flex-1">
                            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
                              {service.title}
                            </h3>
                            <p className={`text-lg font-semibold transition-colors duration-300 ${
                              isExpanded ? "text-primary" : "text-muted-foreground"
                            }`}>
                              {service.tagline}
                            </p>
                          </div>
                        </div>

                        <div className={`flex-shrink-0 transition-transform duration-300 ${isExpanded ? "rotate-180" : ""}`}>
                          <ArrowRight className="h-6 w-6 text-primary" />
                        </div>
                      </div>
                    </div>
                  </button>

                  {isExpanded && (
                    <div className="mt-8 space-y-8 animate-in fade-in slide-in-from-top-4 duration-300">
                      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        <div className="lg:col-span-2">
                          <div>
                            <h4 className="text-xl font-bold text-foreground mb-4">Overview</h4>
                            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                              {service.fullDescription}
                            </p>
                          </div>

                          <div>
                            <h4 className="text-xl font-bold text-foreground mb-6">Our Process</h4>
                            <div className="space-y-4">
                              {service.process.map((step, i) => (
                                <div key={i} className="flex items-start gap-4">
                                  <span className={`inline-flex items-center justify-center w-8 h-8 rounded-full bg-gradient-to-br ${service.color} text-white text-sm font-bold flex-shrink-0`}>
                                    {i + 1}
                                  </span>
                                  <span className="text-foreground pt-1 text-base">{step}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>

                        <div>
                          <h4 className="text-xl font-bold text-foreground mb-6">Key Benefits</h4>
                          <ul className="space-y-4">
                            {service.benefits.map((benefit, i) => (
                              <li key={i} className="flex items-start gap-3">
                                <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                                <span className="text-foreground text-base leading-relaxed">{benefit}</span>
                              </li>
                            ))}
                          </ul>

                          <Button className="w-full mt-8 py-6 text-base" data-testid={`button-request-${service.id}`}>
                            Request This Service
                          </Button>
                        </div>
                      </div>
                    </div>
                  )}

                  {index < services.length - 1 && <div className="mt-8 border-b border-border" />}
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
    </div>
  );
}
