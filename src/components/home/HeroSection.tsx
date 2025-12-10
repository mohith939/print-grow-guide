import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Upload } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center bg-hero-gradient overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      {/* Accent Lines */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gold-gradient" />
      <div className="absolute bottom-0 left-0 w-1/3 h-1 bg-gold-gradient" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-4xl">
          {/* Main Headline */}
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight mb-6 animate-fade-in">
            Premium Printing & 
            <span className="block text-gradient">Branding Studio</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-white/70 max-w-2xl mb-10 animate-fade-in stagger-1 leading-relaxed">
            Where creativity meets engineering. We transform ideas into print and spaces into brand experiences — with precision, technology, and unmatched craftsmanship.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in stagger-2">
            <Button variant="hero" size="xl" asChild>
              <Link to="/contact">
                Get Instant Quote
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
            <Button variant="hero-outline" size="xl" asChild>
              <Link to="/contact">
                <Upload className="w-5 h-5" />
                Upload Your Design
              </Link>
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="mt-16 pt-8 border-t border-white/10 animate-fade-in stagger-3">
            <div className="flex flex-wrap items-center gap-8 md:gap-12">
              <div className="flex flex-col">
                <span className="font-display text-3xl font-bold text-accent">10+</span>
                <span className="text-white/60 text-sm">Years Experience</span>
              </div>
              <div className="flex flex-col">
                <span className="font-display text-3xl font-bold text-accent">5000+</span>
                <span className="text-white/60 text-sm">Projects Delivered</span>
              </div>
              <div className="flex flex-col">
                <span className="font-display text-3xl font-bold text-accent">99%</span>
                <span className="text-white/60 text-sm">On-Time Delivery</span>
              </div>
              <div className="flex flex-col">
                <span className="font-display text-3xl font-bold text-accent">500+</span>
                <span className="text-white/60 text-sm">Happy Clients</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute right-0 bottom-0 w-1/2 h-full hidden lg:block">
        <div className="absolute right-20 top-1/4 w-72 h-72 rounded-full bg-accent/10 blur-3xl" />
        <div className="absolute right-40 bottom-1/4 w-48 h-48 rounded-full bg-accent/5 blur-2xl" />
      </div>
    </section>
  );
}
