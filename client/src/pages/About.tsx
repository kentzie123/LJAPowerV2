import Hero from "@/components/Hero";
import { Card } from "@/components/ui/card";
import { Target, Eye, Award } from "lucide-react";
import officeImage from '@assets/generated_images/Company_office_building_d743e6cf.png';
import showroomImage from '@assets/generated_images/Generator_showroom_display_040b73ab.png';

export default function About() {
  return (
    <div>
      <Hero
        title="About LJA Power Limited Co."
        subtitle="Leading the power generation industry with innovative solutions and unwavering commitment to excellence"
        backgroundImage={officeImage}
        showCTA={false}
        height="medium"
      />

      <section className="py-20 px-6 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground" data-testid="text-company-title">
                Our Company
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p data-testid="text-company-paragraph-1">
                  Founded with a vision to deliver reliable power solutions, LJA Power Limited Co. has grown to become a trusted partner for businesses across various industries. With decades of combined experience in power generation, our team brings unparalleled expertise to every project.
                </p>
                <p data-testid="text-company-paragraph-2">
                  We specialize in providing comprehensive generator solutions, from small commercial units to large-scale industrial power systems. Our commitment to quality, reliability, and customer satisfaction has made us the preferred choice for organizations that can't afford downtime.
                </p>
                <p data-testid="text-company-paragraph-3">
                  Our state-of-the-art facility houses a complete showroom, service center, and parts warehouse, ensuring we can meet all your power generation needs under one roof. We partner with leading manufacturers to offer the most reliable and efficient generator systems available.
                </p>
              </div>
            </div>
            <div>
              <img
                src={showroomImage}
                alt="LJA Power Showroom"
                className="rounded-lg w-full h-auto shadow-lg"
                data-testid="img-showroom"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="p-8 text-center">
              <div className="flex justify-center mb-4">
                <div className="p-4 bg-primary/10 rounded-lg">
                  <Target className="h-10 w-10 text-primary" />
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-foreground" data-testid="text-mission-title">
                Our Mission
              </h3>
              <p className="text-muted-foreground" data-testid="text-mission-description">
                To provide reliable, efficient power generation solutions that keep businesses running, backed by exceptional service and support.
              </p>
            </Card>

            <Card className="p-8 text-center">
              <div className="flex justify-center mb-4">
                <div className="p-4 bg-primary/10 rounded-lg">
                  <Eye className="h-10 w-10 text-primary" />
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-foreground" data-testid="text-vision-title">
                Our Vision
              </h3>
              <p className="text-muted-foreground" data-testid="text-vision-description">
                To be the leading provider of power generation solutions, recognized for innovation, quality, and customer satisfaction.
              </p>
            </Card>

            <Card className="p-8 text-center">
              <div className="flex justify-center mb-4">
                <div className="p-4 bg-primary/10 rounded-lg">
                  <Award className="h-10 w-10 text-primary" />
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-foreground" data-testid="text-values-title">
                Our Values
              </h3>
              <p className="text-muted-foreground" data-testid="text-values-description">
                Integrity, excellence, and customer-first approach guide everything we do, ensuring lasting partnerships.
              </p>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-card">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-foreground" data-testid="text-why-choose-title">
            Why Businesses Choose Us
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Industry Experience",
                description: "Decades of combined expertise in power generation systems and solutions"
              },
              {
                title: "Quality Products",
                description: "Partnership with leading manufacturers for the most reliable generators"
              },
              {
                title: "Expert Team",
                description: "Certified technicians and engineers dedicated to your success"
              },
              {
                title: "Comprehensive Service",
                description: "From consultation to installation, maintenance, and support"
              },
              {
                title: "24/7 Availability",
                description: "Round-the-clock emergency support when you need it most"
              },
              {
                title: "Customer Satisfaction",
                description: "Proven track record of successful installations and happy clients"
              }
            ].map((item, index) => (
              <Card key={index} className="p-6 hover-elevate active-elevate-2">
                <h3 className="text-xl font-semibold mb-3 text-foreground" data-testid={`text-reason-title-${index}`}>
                  {item.title}
                </h3>
                <p className="text-muted-foreground" data-testid={`text-reason-description-${index}`}>
                  {item.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
