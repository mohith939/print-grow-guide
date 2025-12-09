import { Building2, ShoppingBag, UtensilsCrossed, Home, GraduationCap, Heart, Briefcase, Calendar, Factory, Pill } from "lucide-react";

const industries = [
  { name: "Startups", icon: Briefcase },
  { name: "Retail", icon: ShoppingBag },
  { name: "Restaurants", icon: UtensilsCrossed },
  { name: "Real Estate", icon: Home },
  { name: "Schools", icon: GraduationCap },
  { name: "Hospitals", icon: Heart },
  { name: "Corporates", icon: Building2 },
  { name: "Events", icon: Calendar },
  { name: "Manufacturing", icon: Factory },
  { name: "Pharma", icon: Pill },
];

export function IndustriesSection() {
  return (
    <section className="py-20 lg:py-28 bg-primary">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-2 bg-primary-foreground/10 text-primary-foreground text-sm font-semibold rounded-full mb-4">
            Industries We Serve
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6">
            Trusted Across Industries
          </h2>
          <p className="text-primary-foreground/70 text-lg">
            From startups to enterprises, we've helped businesses across diverse sectors build powerful brand identities.
          </p>
        </div>

        {/* Industries Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {industries.map((industry) => (
            <div
              key={industry.name}
              className="group bg-primary-foreground/5 border border-primary-foreground/10 rounded-xl p-6 text-center hover:bg-primary-foreground/10 hover:border-accent/50 transition-all duration-300"
            >
              <industry.icon className="w-8 h-8 mx-auto mb-3 text-accent" />
              <span className="text-primary-foreground font-medium text-sm">
                {industry.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
