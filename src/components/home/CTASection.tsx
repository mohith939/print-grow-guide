import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, MessageCircle } from "lucide-react";

export function CTASection() {
  const whatsappUrl = "https://wa.me/918639471849?text=Hello!%20I'm%20interested%20in%20your%20printing%20services.";

  return (
    <section className="py-20 lg:py-28 bg-hero-gradient relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      {/* Gold Accent */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gold-gradient" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6">
            Ready to Build Your Brand?
          </h2>
          <p className="text-xl text-primary-foreground/70 mb-10 max-w-2xl mx-auto">
            Get a customized quote in minutes. Our team is ready to help you create stunning print and branding solutions.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button variant="hero" size="xl" asChild>
              <Link to="/contact">
                Request a Quote
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
            <Button variant="whatsapp" size="xl" asChild>
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="w-5 h-5" />
                WhatsApp Now
              </a>
            </Button>
          </div>

          {/* Quick Stats */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <span className="block font-display text-4xl font-bold text-accent">24hr</span>
              <span className="text-primary-foreground/60 text-sm">Quote Response</span>
            </div>
            <div className="text-center">
              <span className="block font-display text-4xl font-bold text-accent">Same Day</span>
              <span className="text-primary-foreground/60 text-sm">Digital Printing</span>
            </div>
            <div className="text-center">
              <span className="block font-display text-4xl font-bold text-accent">Free</span>
              <span className="text-primary-foreground/60 text-sm">Design Support</span>
            </div>
            <div className="text-center">
              <span className="block font-display text-4xl font-bold text-accent">Pan-City</span>
              <span className="text-primary-foreground/60 text-sm">Delivery Available</span>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute left-0 bottom-0 w-1/3 h-1 bg-gold-gradient" />
    </section>
  );
}
