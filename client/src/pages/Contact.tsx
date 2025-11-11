import { useState } from "react";
import Hero from "@/components/Hero";
import ContactForm from "@/components/ContactForm";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin, Clock, Navigation, PhoneCall } from "lucide-react";
import officeImage from '@assets/generated_images/Company_office_building_d743e6cf.png';

interface Location {
  id: string;
  name: string;
  address: string;
  city: string;
  state: string;
  zip: string;
  phone: string;
  email: string;
  coordinates: {
    lat: number;
    lng: number;
  };
  hours: {
    weekday: string;
    saturday: string;
    sunday: string;
    emergency: string;
  };
}

const locations: Location[] = [
  {
    id: "main",
    name: "Main Office",
    address: "123 Industrial Boulevard, Suite 100",
    city: "Business City",
    state: "ST",
    zip: "12345",
    phone: "+1 (555) 123-4567",
    email: "info@ljapower.com",
    coordinates: { lat: 40.7128, lng: -74.0060 },
    hours: {
      weekday: "Monday - Friday: 8:00 AM - 6:00 PM",
      saturday: "Saturday: 9:00 AM - 2:00 PM",
      sunday: "Sunday: Closed",
      emergency: "Emergency Service: 24/7"
    }
  },
  {
    id: "service",
    name: "Service Center",
    address: "456 Power Plant Road",
    city: "Industrial Park",
    state: "ST",
    zip: "12346",
    phone: "+1 (555) 123-4568",
    email: "service@ljapower.com",
    coordinates: { lat: 40.7580, lng: -73.9855 },
    hours: {
      weekday: "Monday - Friday: 7:00 AM - 7:00 PM",
      saturday: "Saturday: 8:00 AM - 4:00 PM",
      sunday: "Sunday: Emergency Only",
      emergency: "Emergency Service: 24/7"
    }
  },
  {
    id: "warehouse",
    name: "Parts Warehouse",
    address: "789 Generator Lane",
    city: "Distribution Center",
    state: "ST",
    zip: "12347",
    phone: "+1 (555) 123-4569",
    email: "parts@ljapower.com",
    coordinates: { lat: 40.7489, lng: -73.9680 },
    hours: {
      weekday: "Monday - Friday: 8:00 AM - 5:00 PM",
      saturday: "Saturday: 9:00 AM - 1:00 PM",
      sunday: "Sunday: Closed",
      emergency: "Emergency Parts: Call Main Office"
    }
  }
];

export default function Contact() {
  const [selectedLocation, setSelectedLocation] = useState<Location>(locations[0]);

  const handleGetDirections = (location: Location) => {
    const address = encodeURIComponent(`${location.address}, ${location.city}, ${location.state} ${location.zip}`);
    window.open(`https://www.google.com/maps/dir/?api=1&destination=${address}`, '_blank');
  };

  const handleCall = (phone: string) => {
    window.location.href = `tel:${phone}`;
  };

  const handleEmail = (email: string) => {
    window.location.href = `mailto:${email}`;
  };

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
                Our Locations
              </h2>

              {locations.map((location) => (
                <Card
                  key={location.id}
                  className={`p-6 cursor-pointer transition-all hover-elevate active-elevate-2 ${
                    selectedLocation.id === location.id
                      ? "border-2 border-primary shadow-lg"
                      : ""
                  }`}
                  onClick={() => setSelectedLocation(location)}
                  data-testid={`card-location-${location.id}`}
                >
                  <div className="space-y-4">
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-primary/10 rounded-lg flex-shrink-0">
                        <MapPin className="h-6 w-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-bold text-lg text-foreground mb-2">
                          {location.name}
                        </h3>
                        <p className="text-muted-foreground text-sm mb-1">
                          {location.address}
                        </p>
                        <p className="text-muted-foreground text-sm">
                          {location.city}, {location.state} {location.zip}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Phone className="h-4 w-4 text-primary" />
                      <span>{location.phone}</span>
                    </div>

                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Mail className="h-4 w-4 text-primary" />
                      <span>{location.email}</span>
                    </div>

                    <div className="border-t border-border pt-4">
                      <div className="flex items-start gap-2 mb-2">
                        <Clock className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                        <div className="text-sm space-y-1">
                          <p className="text-muted-foreground">{location.hours.weekday}</p>
                          <p className="text-muted-foreground">{location.hours.saturday}</p>
                          <p className="text-muted-foreground">{location.hours.sunday}</p>
                          <p className="text-primary font-medium">{location.hours.emergency}</p>
                        </div>
                      </div>
                    </div>

                    <div className="flex gap-2 pt-2">
                      <Button
                        size="sm"
                        onClick={(e) => {
                          e.stopPropagation();
                          handleCall(location.phone);
                        }}
                        className="flex-1"
                        data-testid={`button-call-${location.id}`}
                      >
                        <PhoneCall className="h-4 w-4 mr-2" />
                        Call
                      </Button>
                      <Button
                        size="sm"
                        variant="secondary"
                        onClick={(e) => {
                          e.stopPropagation();
                          handleGetDirections(location);
                        }}
                        className="flex-1"
                        data-testid={`button-directions-${location.id}`}
                      >
                        <Navigation className="h-4 w-4 mr-2" />
                        Directions
                      </Button>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="h-[600px] bg-card border-t border-border">
        <div className="w-full h-full relative">
          <iframe
            title="Location Map"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
            src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&q=${encodeURIComponent(
              `${selectedLocation.address}, ${selectedLocation.city}, ${selectedLocation.state} ${selectedLocation.zip}`
            )}&zoom=15`}
            data-testid="map-iframe"
          />
          <div className="absolute top-4 left-4 bg-background/95 backdrop-blur-sm p-4 rounded-lg shadow-lg max-w-xs">
            <h3 className="font-bold text-foreground mb-1">{selectedLocation.name}</h3>
            <p className="text-sm text-muted-foreground mb-2">
              {selectedLocation.address}, {selectedLocation.city}, {selectedLocation.state} {selectedLocation.zip}
            </p>
            <div className="flex gap-2">
              <Button
                size="sm"
                onClick={() => handleCall(selectedLocation.phone)}
                data-testid="button-map-call"
              >
                <PhoneCall className="h-4 w-4 mr-2" />
                Call
              </Button>
              <Button
                size="sm"
                variant="secondary"
                onClick={() => handleGetDirections(selectedLocation)}
                data-testid="button-map-directions"
              >
                <Navigation className="h-4 w-4 mr-2" />
                Directions
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
