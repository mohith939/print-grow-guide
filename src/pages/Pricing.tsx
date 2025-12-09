import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, MessageCircle } from "lucide-react";

const pricingCategories = [
  {
    title: "Digital Printing",
    items: [
      { name: "Visiting Cards", price: "₹199", unit: "/ 100 pcs" },
      { name: "Flyers (A5)", price: "₹1.50", unit: "/ each" },
      { name: "Posters (A3)", price: "₹30", unit: "/ each" },
      { name: "Certificates", price: "₹15", unit: "/ each" },
      { name: "Menu Cards", price: "₹25", unit: "/ each" },
    ],
  },
  {
    title: "Offset Printing",
    items: [
      { name: "Brochures", price: "₹2.50", unit: "/ each" },
      { name: "Letterheads", price: "₹0.80", unit: "/ each" },
      { name: "Bill Books", price: "₹60", unit: "/ book" },
      { name: "Envelopes", price: "₹1.20", unit: "/ each" },
      { name: "Catalogs", price: "₹15", unit: "/ each" },
    ],
  },
  {
    title: "Flex & Vinyl",
    items: [
      { name: "Flex", price: "₹12", unit: "/ sqft" },
      { name: "Star Flex", price: "₹18", unit: "/ sqft" },
      { name: "Vinyl", price: "₹40", unit: "/ sqft" },
      { name: "One Way Vision", price: "₹50", unit: "/ sqft" },
      { name: "Canvas", price: "₹35", unit: "/ sqft" },
    ],
  },
  {
    title: "ID Cards",
    items: [
      { name: "PVC Card", price: "₹30", unit: "/ each" },
      { name: "RFID Card", price: "₹80", unit: "/ each" },
      { name: "Proximity Card", price: "₹100", unit: "/ each" },
      { name: "Lanyard", price: "₹15", unit: "/ each" },
      { name: "Card Holder", price: "₹10", unit: "/ each" },
    ],
  },
];

const Pricing = () => {
  const whatsappUrl = "https://wa.me/918639471849?text=Hello!%20I%20need%20a%20quote%20for%20printing%20services.";

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 lg:py-28 bg-secondary">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-block px-4 py-2 bg-accent/10 text-accent-foreground text-sm font-semibold rounded-full mb-6">
              Pricing
            </span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Transparent Pricing. Premium Value.
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Quality printing at competitive prices. No hidden costs, no surprises.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Grid */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {pricingCategories.map((category) => (
              <div
                key={category.title}
                className="bg-card border border-border rounded-2xl overflow-hidden"
              >
                <div className="bg-gold-gradient p-6">
                  <h3 className="font-display text-2xl font-bold text-primary">
                    {category.title}
                  </h3>
                </div>
                <div className="p-6">
                  <ul className="space-y-4">
                    {category.items.map((item) => (
                      <li key={item.name} className="flex items-center justify-between py-3 border-b border-border last:border-0">
                        <span className="text-foreground">{item.name}</span>
                        <span className="text-accent font-semibold">
                          {item.price}
                          <span className="text-muted-foreground text-sm font-normal ml-1">{item.unit}</span>
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          {/* Note */}
          <div className="bg-secondary rounded-2xl p-8 text-center mb-12">
            <p className="text-muted-foreground">
              <strong className="text-foreground">Note:</strong> Pricing varies by size, material, finishing, and quantity. 
              Contact us for an exact quote tailored to your requirements.
            </p>
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button variant="whatsapp" size="xl" asChild>
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="w-5 h-5" />
                WhatsApp for Exact Quote
              </a>
            </Button>
            <Button variant="gold" size="xl" asChild>
              <Link to="/contact">
                Get Detailed Estimate
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* FAQ Preview */}
      <section className="py-20 lg:py-28 bg-primary">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-primary-foreground text-center mb-12">
              Frequently Asked Questions
            </h2>
            <div className="space-y-6">
              {[
                {
                  q: "Do you offer same-day printing?",
                  a: "Yes — digital printing supports same-day delivery for most jobs placed before 12 PM.",
                },
                {
                  q: "Do you install signboards?",
                  a: "Yes — design, fabrication, delivery, and installation are all included in our signage packages.",
                },
                {
                  q: "Do you accept bulk orders?",
                  a: "Absolutely — special corporate rates are available for bulk orders.",
                },
                {
                  q: "Can I send my own designs?",
                  a: "Yes — upload files through our contact form or share via WhatsApp.",
                },
              ].map((faq, index) => (
                <div key={index} className="bg-primary-foreground/5 border border-primary-foreground/10 rounded-xl p-6">
                  <h4 className="font-semibold text-primary-foreground mb-2">{faq.q}</h4>
                  <p className="text-primary-foreground/70">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Pricing;
