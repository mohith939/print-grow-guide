import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Printer, FileText, Image, Lightbulb, CreditCard, Palette, Package } from "lucide-react";

const services = [
  {
    id: "digital",
    icon: Printer,
    title: "Digital Printing Services",
    description: "High-speed, high-precision digital printing for urgent & short-run requirements.",
    items: ["Visiting cards", "Flyers", "Certificates", "Posters", "Invitations", "Menus"],
    highlights: ["Same-day print available", "Premium color accuracy", "Multiple finishes (matte, gloss, texture)"],
  },
  {
    id: "offset",
    icon: FileText,
    title: "Offset Printing Services",
    description: "Commercial-grade printing for consistent results across large quantities.",
    items: ["Brochures", "Catalogs", "Letterheads", "Envelopes", "Bill Books", "Calendars"],
    highlights: ["Sharp print quality", "Economical for bulk orders", "Long-lasting finish"],
  },
  {
    id: "flex",
    icon: Image,
    title: "Flex, Vinyl & Banner Printing",
    description: "Weatherproof, vibrant outdoor branding solutions built to last.",
    items: ["Shop boards", "Banners", "Event displays", "Retail visuals", "Mall branding", "Hoardings"],
    highlights: ["Weatherproof materials", "UV-resistant inks", "Custom sizes available"],
  },
  {
    id: "signboards",
    icon: Lightbulb,
    title: "LED & Sign Boards",
    description: "Fully fabricated, installed, and illuminated signage solutions.",
    items: ["LED boards", "ACP boards", "Neon signs", "3D acrylic letters", "Channel letters", "Glow signs"],
    highlights: ["Complete installation", "Energy-efficient LEDs", "Professional fabrication"],
  },
  {
    id: "idcards",
    icon: CreditCard,
    title: "ID Cards & Smart Cards",
    description: "Durable, premium-grade identification solutions for organizations.",
    items: ["Employee IDs", "Student IDs", "PVC cards", "RFID cards", "Lanyards", "Card holders"],
    highlights: ["High durability", "RFID-enabled options", "Bulk order discounts"],
  },
  {
    id: "stationery",
    icon: Package,
    title: "Corporate Stationery",
    description: "Consistency-driven corporate identity materials for professional branding.",
    items: ["Business cards", "Notepads", "Folders", "Stickers", "Packaging", "Certificates"],
    highlights: ["Brand consistency", "Premium paper stocks", "Custom finishing"],
  },
  {
    id: "branding",
    icon: Palette,
    title: "Branding Services",
    description: "Complete brand identity & space transformation services.",
    items: ["Logo design", "Brand kits", "Wall graphics", "Office branding", "Event branding", "Vehicle wraps"],
    highlights: ["Creative design team", "End-to-end execution", "Consultation included"],
  },
];

const Services = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 lg:py-28 bg-secondary">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-block px-4 py-2 bg-accent/10 text-accent-foreground text-sm font-semibold rounded-full mb-6">
              Our Services
            </span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Complete Printing & Branding Solutions
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              From business cards to building signage, we deliver comprehensive solutions that elevate your brand presence.
            </p>
          </div>
        </div>
      </section>

      {/* Services List */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="space-y-16">
            {services.map((service, index) => (
              <div
                key={service.id}
                id={service.id}
                className={`grid lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                  <div className="w-16 h-16 bg-gold-gradient rounded-2xl flex items-center justify-center mb-6">
                    <service.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
                    {service.title}
                  </h2>
                  <p className="text-muted-foreground text-lg mb-6">
                    {service.description}
                  </p>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold text-foreground mb-3">We Print:</h4>
                    <div className="flex flex-wrap gap-2">
                      {service.items.map((item) => (
                        <span key={item} className="px-3 py-1 bg-secondary rounded-full text-sm text-muted-foreground">
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mb-8">
                    <h4 className="font-semibold text-foreground mb-3">Highlights:</h4>
                    <ul className="space-y-2">
                      {service.highlights.map((highlight) => (
                        <li key={highlight} className="flex items-center gap-2 text-muted-foreground">
                          <span className="w-2 h-2 bg-accent rounded-full" />
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Button variant="gold" asChild>
                    <Link to="/contact">
                      Get Quote
                      <ArrowRight className="w-5 h-5" />
                    </Link>
                  </Button>
                </div>

                <div className={`${index % 2 === 1 ? "lg:order-1" : ""}`}>
                  <div className="aspect-[4/3] bg-secondary rounded-2xl overflow-hidden">
                    <div className="w-full h-full flex items-center justify-center">
                      <service.icon className="w-24 h-24 text-accent/20" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-28 bg-hero-gradient">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
            Need a Custom Solution?
          </h2>
          <p className="text-primary-foreground/70 text-lg mb-8 max-w-2xl mx-auto">
            Our team is ready to help you create the perfect printing and branding solution for your business.
          </p>
          <Button variant="hero" size="xl" asChild>
            <Link to="/contact">
              Contact Us
              <ArrowRight className="w-5 h-5" />
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
