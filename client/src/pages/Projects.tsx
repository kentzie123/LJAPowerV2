import { useState } from "react";
import Hero from "@/components/Hero";
import ProjectCard from "@/components/ProjectCard";
import { getAllProjects } from "@/data/projects";
import { Link } from "wouter";
import { Star, Award, Target, TrendingUp } from "lucide-react";
import showroomImage from '@assets/generated_images/Generator_showroom_display_040b73ab.png';

interface Testimonial {
  quote: string;
  author: string;
  company: string;
  rating: number;
  image?: string;
}

export default function Projects() {
  const projects = getAllProjects();
  const [selectedIndustry, setSelectedIndustry] = useState<string>("all");

  const testimonials: Testimonial[] = [
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
    { icon: Target, value: "500+", label: "Projects Completed", color: "from-blue-500 to-cyan-500" },
    { icon: TrendingUp, value: "50MW+", label: "Total Capacity", color: "from-emerald-500 to-teal-500" },
    { icon: Award, value: "98%", label: "Client Satisfaction", color: "from-amber-500 to-orange-500" },
    { icon: Star, value: "15+", label: "Years Experience", color: "from-rose-500 to-pink-500" }
  ];

  const industries = [
    { id: "all", label: "All Projects" },
    { id: "manufacturing", label: "Manufacturing" },
    { id: "healthcare", label: "Healthcare" },
    { id: "data-center", label: "Data Centers" },
    { id: "retail", label: "Retail" },
    { id: "municipal", label: "Municipal" }
  ];

  const filteredProjects = selectedIndustry === "all"
    ? projects
    : projects.filter(p => p.slug.includes(selectedIndustry));

  return (
    <div>
      <Hero
        title="Our Project Portfolio"
        subtitle="Delivering reliable power solutions across diverse industries and applications"
        backgroundImage={showroomImage}
        showCTA={false}
        height="medium"
      />

      <section className="py-24 px-6 bg-gradient-to-b from-slate-50 to-background">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={index} className="group" data-testid={`stat-${index}`}>
                  <div className="rounded-lg p-8 bg-white border border-border hover:shadow-lg transition-all duration-300">
                    <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${stat.color} mb-4 flex items-center justify-center group-hover:scale-110 transition-transform`}>
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                    <div className="text-4xl font-bold text-foreground mb-2" data-testid={`text-stat-value-${index}`}>
                      {stat.value}
                    </div>
                    <div className="text-sm text-muted-foreground" data-testid={`text-stat-label-${index}`}>
                      {stat.label}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-24 px-6 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold mb-6 text-foreground" data-testid="text-projects-title">
              Featured Projects
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Successful installations across healthcare, manufacturing, data centers, retail, and municipal applications showcasing our diverse expertise
            </p>
          </div>

          <div className="mb-12 flex flex-wrap gap-3 justify-center">
            {industries.map((industry) => (
              <button
                key={industry.id}
                onClick={() => setSelectedIndustry(industry.id)}
                className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                  selectedIndustry === industry.id
                    ? "bg-primary text-white shadow-lg scale-105"
                    : "bg-card border border-border text-foreground hover:border-primary hover:shadow-md"
                }`}
                data-testid={`filter-${industry.id}`}
              >
                {industry.label}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <Link
                key={index}
                href={`/project/${project.slug}`}
                data-testid={`link-project-${project.slug}`}
              >
                <ProjectCard {...project} />
              </Link>
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-12">
              <p className="text-lg text-muted-foreground">No projects found in this category. Try selecting a different filter.</p>
            </div>
          )}
        </div>
      </section>

      <section className="py-24 px-6 bg-gradient-to-b from-background via-card to-background">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 rounded-full bg-primary/10 mb-6">
              <span className="text-primary font-semibold text-sm">TRUSTED BY LEADING COMPANIES</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-bold mb-6 text-foreground" data-testid="text-testimonials-title">
              What Our Clients Say
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Real feedback from satisfied clients who have trusted LJA Power with their critical power infrastructure
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="group rounded-xl border border-border bg-white p-8 hover:shadow-xl transition-all duration-300 hover:border-primary"
                data-testid={`card-testimonial-${testimonial.author.toLowerCase().replace(/\s+/g, "-")}`}
              >
                <div className="flex gap-1 mb-6">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className={`h-5 w-5 ${i < testimonial.rating ? "fill-amber-400 text-amber-400" : "text-gray-200"}`}
                      data-testid={`icon-star-${i}`}
                    />
                  ))}
                </div>

                <blockquote className="text-lg text-foreground mb-8 leading-relaxed relative">
                  <span className="absolute -left-2 -top-4 text-4xl text-primary/20">"</span>
                  {testimonial.quote}
                  <span className="absolute -right-2 bottom-0 text-4xl text-primary/20">"</span>
                </blockquote>

                <div className="flex items-start justify-between pt-6 border-t border-border">
                  <div>
                    <div className="font-bold text-foreground group-hover:text-primary transition-colors" data-testid="text-testimonial-author">
                      {testimonial.author}
                    </div>
                    <div className="text-sm text-muted-foreground" data-testid="text-testimonial-company">
                      {testimonial.company}
                    </div>
                  </div>
                </div>
              </div>
            ))}
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
            Our Success Story
          </h2>
          <p className="text-xl text-slate-300 mb-12 max-w-2xl mx-auto leading-relaxed">
            Over 15 years of excellence in providing reliable power solutions to thousands of satisfied clients across multiple industries and regions
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { number: "500+", text: "Projects Completed" },
              { number: "50MW+", text: "Power Installed" },
              { number: "98%", text: "Satisfaction Rate" }
            ].map((item, i) => (
              <div key={i} data-testid={`success-stat-${i}`}>
                <div className="text-5xl font-bold mb-2 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                  {item.number}
                </div>
                <div className="text-slate-300">{item.text}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-6 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-5xl font-bold mb-6 text-foreground">
                Why Choose LJA Power?
              </h2>
              <ul className="space-y-6">
                {[
                  { title: "Industry Expertise", desc: "15+ years of proven experience across diverse sectors" },
                  { title: "Quality Installation", desc: "Professional, certified technicians on every project" },
                  { title: "Ongoing Support", desc: "24/7 maintenance and emergency response available" },
                  { title: "Custom Solutions", desc: "Tailored systems designed for your specific needs" },
                  { title: "Reliable Track Record", desc: "98% client satisfaction and 99.5% uptime rate" },
                  { title: "Advanced Technology", desc: "Latest monitoring, diagnostics, and control systems" }
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-primary/10">
                        <Star className="h-6 w-6 text-primary" />
                      </div>
                    </div>
                    <div>
                      <h3 className="font-bold text-foreground mb-1">{item.title}</h3>
                      <p className="text-muted-foreground">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </ul>
            </div>

            <div className="bg-gradient-to-br from-blue-600/10 to-cyan-600/10 rounded-2xl p-12 border border-primary/20">
              <h3 className="text-3xl font-bold mb-8 text-foreground">Ready to Start Your Project?</h3>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Let's discuss your power generation needs and find the perfect solution for your business. Contact our experts today.
              </p>
              <div className="space-y-4">
                <p className="text-foreground"><strong>Call us:</strong> <span className="text-primary">1-800-POWER-LJA</span></p>
                <p className="text-foreground"><strong>Email:</strong> <span className="text-primary">info@ljapower.com</span></p>
                <p className="text-foreground"><strong>Available:</strong> <span className="text-primary">24/7 Emergency Support</span></p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
