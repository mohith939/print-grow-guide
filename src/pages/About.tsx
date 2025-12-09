import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Target, Eye, Award, Heart, Zap, Users } from "lucide-react";

const values = [
  { icon: Award, name: "Quality", description: "Uncompromising standards in every project" },
  { icon: Heart, name: "Creativity", description: "Innovative solutions that stand out" },
  { icon: Users, name: "Integrity", description: "Honest pricing and transparent communication" },
  { icon: Zap, name: "Speed", description: "Fast turnaround without compromising quality" },
];

const differentiators = [
  "Advanced production technology",
  "In-house design & fabrication",
  "99% on-time delivery",
  "Premium materials & finishing",
  "Transparent pricing",
  "Customer-first communication",
];

const About = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 lg:py-28 bg-secondary">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-block px-4 py-2 bg-accent/10 text-accent-foreground text-sm font-semibold rounded-full mb-6">
              About Us
            </span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Who We Are
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              SSS Graphics is Hyderabad's trusted printing & branding partner — delivering premium production, modern design, and end-to-end visual communication solutions for over a decade.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
                Our Story
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                For over a decade, we've supported corporates, startups, retail brands, and institutions in building impactful visual identities. What started as a small printing shop has grown into a full-service branding studio.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-8">
                We combine cutting-edge technology with decades of expertise to deliver printing solutions that exceed expectations. Our commitment to quality, speed, and customer satisfaction has made us the go-to printing partner for hundreds of businesses across Hyderabad.
              </p>
              <Button variant="gold" size="lg" asChild>
                <Link to="/contact">
                  Start Your Project
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-2xl bg-gold-gradient p-1">
                <div className="w-full h-full rounded-xl bg-secondary flex items-center justify-center">
                  <div className="text-center p-8">
                    <span className="font-display text-6xl font-bold text-accent">10+</span>
                    <p className="text-muted-foreground mt-2">Years of Excellence</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 lg:py-28 bg-primary">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-primary-foreground/5 border border-primary-foreground/10 rounded-2xl p-10">
              <div className="w-14 h-14 bg-gold-gradient rounded-xl flex items-center justify-center mb-6">
                <Target className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-display text-2xl font-bold text-primary-foreground mb-4">Our Mission</h3>
              <p className="text-primary-foreground/70 leading-relaxed">
                To empower businesses with world-class printing and branding solutions that drive recognition and growth. We strive to be more than just a print shop — we aim to be your strategic branding partner.
              </p>
            </div>
            <div className="bg-primary-foreground/5 border border-primary-foreground/10 rounded-2xl p-10">
              <div className="w-14 h-14 bg-gold-gradient rounded-xl flex items-center justify-center mb-6">
                <Eye className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-display text-2xl font-bold text-primary-foreground mb-4">Our Vision</h3>
              <p className="text-primary-foreground/70 leading-relaxed">
                To become Hyderabad's most innovative, reliable, and design-led branding partner. We envision a future where every business, regardless of size, has access to premium printing and branding solutions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What Makes Us Different */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
              What Makes Us Different
            </h2>
            <p className="text-muted-foreground text-lg">
              We don't just print — we partner with you to create visual experiences that elevate your brand.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {differentiators.map((item, index) => (
              <div key={index} className="bg-secondary p-6 rounded-xl text-center">
                <div className="w-10 h-10 bg-gold-gradient rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-primary font-bold">{index + 1}</span>
                </div>
                <p className="text-foreground font-medium">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 lg:py-28 bg-secondary">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
              Our Core Values
            </h2>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value) => (
              <div key={value.name} className="text-center">
                <div className="w-16 h-16 bg-gold-gradient rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-display text-xl font-semibold text-foreground mb-2">{value.name}</h3>
                <p className="text-muted-foreground text-sm">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-28 bg-hero-gradient">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
            Ready to Work Together?
          </h2>
          <p className="text-primary-foreground/70 text-lg mb-8 max-w-2xl mx-auto">
            Let's discuss how we can help bring your brand vision to life.
          </p>
          <Button variant="hero" size="xl" asChild>
            <Link to="/contact">
              Get in Touch
              <ArrowRight className="w-5 h-5" />
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default About;
