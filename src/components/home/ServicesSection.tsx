import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Printer, FileText, Image, Lightbulb, CreditCard, Palette } from "lucide-react";

const services = [
  {
    icon: Printer,
    title: "Digital Printing",
    description: "Fast, crisp, vibrant prints for business essentials and short-run jobs. Ideal for visiting cards, flyers, menus, certificates.",
    href: "/services#digital",
  },
  {
    icon: FileText,
    title: "Offset Printing",
    description: "Large-volume printing with industry-leading accuracy and economy. Ideal for brochures, catalogs, bill books, letterheads.",
    href: "/services#offset",
  },
  {
    icon: Image,
    title: "Flex & Vinyl Printing",
    description: "High-impact outdoor branding built to withstand weather and time. Ideal for shop boards, roadside banners, event branding.",
    href: "/services#flex",
  },
  {
    icon: Lightbulb,
    title: "LED & Signage Boards",
    description: "Illuminated signage crafted with precision and modern fabrication. Ideal for 3D acrylic letters, neon boards, ACP facades.",
    href: "/services#signboards",
  },
  {
    icon: CreditCard,
    title: "ID Cards & Smart Cards",
    description: "Durable, professional identification systems for schools and corporates. PVC cards, RFID cards, and lanyards.",
    href: "/services#idcards",
  },
  {
    icon: Palette,
    title: "Branding Solutions",
    description: "Logos, identity kits, office graphics, event branding — creative-driven solutions for complete brand transformation.",
    href: "/services#branding",
  },
];

export function ServicesSection() {
  return (
    <section className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-2 bg-accent/10 text-accent-foreground text-sm font-semibold rounded-full mb-4">
            Our Services
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Complete Printing & Branding Solutions
          </h2>
          <p className="text-muted-foreground text-lg">
            From business cards to building signage, we deliver comprehensive solutions that elevate your brand presence.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {services.map((service) => (
            <Link
              key={service.title}
              to={service.href}
              className="group bg-card p-8 rounded-2xl border border-border hover:border-accent hover:shadow-xl transition-all duration-300"
            >
              <div className="w-14 h-14 bg-secondary rounded-xl flex items-center justify-center mb-6 group-hover:bg-gold-gradient transition-all duration-300">
                <service.icon className="w-7 h-7 text-foreground group-hover:text-primary transition-colors" />
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-3 group-hover:text-accent transition-colors">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                {service.description}
              </p>
              <span className="inline-flex items-center gap-2 text-accent font-medium text-sm">
                Learn More
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button variant="gold" size="lg" asChild>
            <Link to="/services">
              View All Services
              <ArrowRight className="w-5 h-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
