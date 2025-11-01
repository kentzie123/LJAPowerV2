import Hero from "@/components/Hero";
import ProjectCard from "@/components/ProjectCard";
import TestimonialCard from "@/components/TestimonialCard";
import { Card } from "@/components/ui/card";
import projectImage1 from '@assets/generated_images/Generator_installation_project_66ff5c5e.png';
import projectImage2 from '@assets/generated_images/Technician_servicing_generator_d5ab4806.png';
import showroomImage from '@assets/generated_images/Generator_showroom_display_040b73ab.png';

export default function Projects() {
  //todo: remove mock functionality - replace with real data
  const projects = [
    {
      title: "Hospital Backup Power System",
      client: "Regional Medical Center",
      location: "Downtown District",
      capacity: "1,500 kW",
      image: projectImage1,
      description: "Complete backup power solution ensuring uninterrupted operations during power outages with dual redundancy."
    },
    {
      title: "Manufacturing Facility Power",
      client: "Manufacturing Solutions Inc.",
      location: "Industrial Park",
      capacity: "2,000 kW",
      image: projectImage2,
      description: "Prime power installation supporting continuous 24/7 manufacturing operations with load management system."
    },
    {
      title: "Data Center Infrastructure",
      client: "Tech Industries Corp.",
      location: "Technology District",
      capacity: "3,000 kW",
      image: projectImage1,
      description: "Mission-critical power system with N+1 redundancy and automated failover capabilities."
    },
    {
      title: "Commercial Complex Backup",
      client: "Metro Shopping Center",
      location: "City Center",
      capacity: "800 kW",
      image: projectImage2,
      description: "Emergency backup power for high-traffic commercial facility with integrated building management."
    },
    {
      title: "University Campus Power",
      client: "State University",
      location: "University District",
      capacity: "1,200 kW",
      image: showroomImage,
      description: "Distributed power generation system serving multiple campus buildings with central monitoring."
    },
    {
      title: "Water Treatment Facility",
      client: "Municipal Water Authority",
      location: "Waterfront",
      capacity: "1,800 kW",
      image: projectImage1,
      description: "Critical infrastructure power backup ensuring continuous water treatment and distribution."
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
    },
    {
      quote: "The installation was seamless and the ongoing support has been outstanding. Highly recommend their services.",
      author: "Robert Williams",
      company: "Metro Shopping Center",
      rating: 5
    },
    {
      quote: "Exceptional expertise and customer service. They understood our unique requirements and delivered a perfect solution.",
      author: "Emily Davis",
      company: "State University",
      rating: 5
    },
    {
      quote: "Critical infrastructure requires critical support, and LJA Power has never let us down. Outstanding reliability.",
      author: "James Anderson",
      company: "Municipal Water Authority",
      rating: 5
    }
  ];

  const stats = [
    { value: "500+", label: "Projects Completed" },
    { value: "50MW+", label: "Total Capacity Installed" },
    { value: "98%", label: "Client Satisfaction" },
    { value: "15+", label: "Years Experience" }
  ];

  return (
    <div>
      <Hero
        title="Projects & Testimonies"
        subtitle="Delivering reliable power solutions across diverse industries and applications"
        backgroundImage={showroomImage}
        showCTA={false}
        height="medium"
      />

      <section className="py-20 px-6 bg-card">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center" data-testid={`stat-${index}`}>
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2" data-testid={`text-stat-value-${index}`}>
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
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground" data-testid="text-projects-title">
              Featured Projects
            </h2>
            <p className="text-lg text-muted-foreground">
              Successful installations across healthcare, manufacturing, data centers, and more
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-card">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground" data-testid="text-testimonials-title">
              Client Testimonials
            </h2>
            <p className="text-lg text-muted-foreground">
              Hear what our satisfied clients have to say
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={index} {...testimonial} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
