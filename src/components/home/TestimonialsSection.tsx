import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    content: "Flawless printing and super-fast delivery. SSS Graphics has been our go-to partner for all corporate printing needs. The quality is consistently excellent.",
    author: "Rajesh Kumar",
    role: "Operations Head",
    company: "TechVista Solutions",
    rating: 5,
  },
  {
    content: "Outstanding signage quality. They transformed our restaurant's storefront with beautiful LED boards. Great attention to detail and professional installation.",
    author: "Priya Sharma",
    role: "Owner",
    company: "Spice Garden Restaurant",
    rating: 5,
  },
  {
    content: "We've worked with many printers, but SSS Graphics stands out for their reliability and premium quality. Their brochures helped us close several major deals.",
    author: "Venkat Reddy",
    role: "Marketing Director",
    company: "Skyline Properties",
    rating: 5,
  },
];

export function TestimonialsSection() {
  return (
    <section className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-2 bg-accent/10 text-accent-foreground text-sm font-semibold rounded-full mb-4">
            Testimonials
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            What Our Clients Say
          </h2>
          <p className="text-muted-foreground text-lg">
            Don't just take our word for it — hear from the businesses we've helped grow.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-card p-8 rounded-2xl border border-border relative"
            >
              <Quote className="absolute top-6 right-6 w-10 h-10 text-accent/20" />
              
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                ))}
              </div>

              {/* Content */}
              <p className="text-foreground leading-relaxed mb-6">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gold-gradient rounded-full flex items-center justify-center">
                  <span className="font-display font-bold text-primary text-lg">
                    {testimonial.author.charAt(0)}
                  </span>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">{testimonial.author}</h4>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.role}, {testimonial.company}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
