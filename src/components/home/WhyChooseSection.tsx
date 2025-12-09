import { Check, Zap, Home, Award, DollarSign } from "lucide-react";

const features = [
  {
    icon: Award,
    title: "Premium Quality You Can See & Feel",
    description: "Advanced digital, offset, and large-format machines deliver unmatched clarity and precision.",
  },
  {
    icon: Zap,
    title: "Speed That Matches Your Business",
    description: "Same-day digital print capabilities for urgent projects. We understand deadlines matter.",
  },
  {
    icon: Home,
    title: "All Branding Solutions Under One Roof",
    description: "Print, signage, packaging, identity, spaces — complete execution from design to delivery.",
  },
  {
    icon: Check,
    title: "Corporate-Grade Materials & Finishing",
    description: "Premium substrates, durable inks, and polished finishing standards for lasting impressions.",
  },
  {
    icon: DollarSign,
    title: "Smart Pricing, Honest Approach",
    description: "Transparent, fair, value-driven pricing for businesses of all sizes. No hidden costs.",
  },
];

export function WhyChooseSection() {
  return (
    <section className="py-20 lg:py-28 bg-secondary">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-2 bg-accent/10 text-accent-foreground text-sm font-semibold rounded-full mb-4">
            Why Choose Us
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            The SSS Graphics Advantage
          </h2>
          <p className="text-muted-foreground text-lg">
            We combine cutting-edge technology with decades of expertise to deliver printing solutions that exceed expectations.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="group bg-card p-8 rounded-2xl border border-border hover:border-accent/50 hover:shadow-xl transition-all duration-300"
            >
              <div className="w-14 h-14 bg-gold-gradient rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <feature.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
