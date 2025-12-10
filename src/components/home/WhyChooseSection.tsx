import { useState, useEffect } from "react";
import { Check, Zap, Home, Award, DollarSign, ChevronLeft, ChevronRight } from "lucide-react";

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
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(3);

  useEffect(() => {
    const updateItemsPerView = () => {
      if (window.innerWidth >= 1024) {
        setItemsPerView(3);
      } else if (window.innerWidth >= 768) {
        setItemsPerView(2);
      } else {
        setItemsPerView(1);
      }
    };

    updateItemsPerView();
    window.addEventListener('resize', updateItemsPerView);
    return () => window.removeEventListener('resize', updateItemsPerView);
  }, []);

  const maxIndex = features.length - itemsPerView;

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % (maxIndex + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + (maxIndex + 1)) % (maxIndex + 1));
  };

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

        {/* Carousel */}
        <div className="relative max-w-7xl mx-auto">
          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-background/80 backdrop-blur-sm border border-border rounded-full flex items-center justify-center hover:bg-background transition-colors shadow-lg -translate-x-6"
            aria-label="Previous"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-background/80 backdrop-blur-sm border border-border rounded-full flex items-center justify-center hover:bg-background transition-colors shadow-lg translate-x-6"
            aria-label="Next"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Features Container */}
          <div className="overflow-hidden px-8">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)` }}
            >
              {features.map((feature, index) => (
                <div
                  key={feature.title}
                  className="flex-shrink-0 px-2"
                  style={{ width: `${100 / itemsPerView}%` }}
                >
                  <div className="group bg-card p-8 rounded-2xl border border-border hover:border-accent/50 hover:shadow-xl transition-all duration-300 h-full">
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
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
