import Hero from "@/components/Hero";
import ContactForm from "@/components/ContactForm";
import { Card } from "@/components/ui/card";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import officeImage from '@assets/generated_images/Company_office_building_d743e6cf.png';

export default function Contact() {
  return (
    <div>
      <Hero
        title="Contact Us"
        subtitle="Get in touch with our team for expert guidance on your power generation needs"
        backgroundImage={officeImage}
        showCTA={false}
        height="medium"
      />

      <section className="py-20 px-6 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-foreground" data-testid="text-contact-title">
                Send Us a Message
              </h2>
              <p className="text-muted-foreground mb-8">
                Fill out the form below and our team will get back to you within 24 hours.
              </p>
              <ContactForm />
            </div>

            <div className="space-y-6">
              <h2 className="text-3xl font-bold mb-6 text-foreground" data-testid="text-info-title">
                Contact Information
              </h2>
              
              <Card className="p-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg flex-shrink-0">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Phone</h3>
                    <p className="text-muted-foreground" data-testid="text-phone-main">
                      Main: +1 (555) 123-4567
                    </p>
                    <p className="text-muted-foreground" data-testid="text-phone-emergency">
                      Emergency: +1 (555) 123-4568
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg flex-shrink-0">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Email</h3>
                    <p className="text-muted-foreground" data-testid="text-email-info">
                      info@ljapower.com
                    </p>
                    <p className="text-muted-foreground" data-testid="text-email-support">
                      support@ljapower.com
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg flex-shrink-0">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Address</h3>
                    <p className="text-muted-foreground" data-testid="text-address">
                      123 Industrial Boulevard<br />
                      Suite 100<br />
                      Business City, ST 12345<br />
                      United States
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg flex-shrink-0">
                    <Clock className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Business Hours</h3>
                    <p className="text-muted-foreground" data-testid="text-hours-weekday">
                      Monday - Friday: 8:00 AM - 6:00 PM
                    </p>
                    <p className="text-muted-foreground" data-testid="text-hours-saturday">
                      Saturday: 9:00 AM - 2:00 PM
                    </p>
                    <p className="text-muted-foreground" data-testid="text-hours-sunday">
                      Sunday: Closed
                    </p>
                    <p className="text-primary font-medium mt-2" data-testid="text-hours-emergency">
                      Emergency Service: 24/7
                    </p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section className="h-96 bg-card">
        <div className="w-full h-full flex items-center justify-center">
          <div className="text-center">
            <MapPin className="h-16 w-16 text-primary mx-auto mb-4" />
            <p className="text-muted-foreground" data-testid="text-map-placeholder">
              Map integration would be displayed here
            </p>
            <p className="text-sm text-muted-foreground mt-2">
              123 Industrial Boulevard, Business City, ST 12345
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
