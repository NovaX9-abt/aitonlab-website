import { Quote, Star } from "lucide-react";

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-28 relative">
      <div className="glow-line mb-28" />
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <p className="text-sm font-semibold tracking-widest uppercase text-secondary mb-4">Testimonials</p>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Client Success Stories</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Hear from businesses that have transformed their customer support with AI.
            </p>
          </div>

          <div className="glass rounded-2xl p-12 md:p-16 text-center shadow-elegant animate-slide-up">
            <div className="max-w-2xl mx-auto space-y-6">
              <div className="w-20 h-20 rounded-full gradient-primary flex items-center justify-center mx-auto opacity-80">
                <Quote className="w-10 h-10 text-primary-foreground" />
              </div>
              <h3 className="text-3xl font-bold">Testimonials Coming Soon</h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                I'm currently working with my first clients to deliver exceptional AI solutions.
                Their success stories will be featured here soon!
              </p>
              <div className="flex justify-center gap-1 pt-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-sm text-muted-foreground italic">
                "Building trust, one successful project at a time."
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mt-12 opacity-30">
            {[1, 2, 3].map((i) => (
              <div key={i} className="glass rounded-2xl p-6 animate-fade-in" style={{ animationDelay: `${i * 0.1}s` }}>
                <div className="space-y-4">
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, j) => (
                      <Star key={j} className="w-4 h-4 fill-muted text-muted" />
                    ))}
                  </div>
                  <div className="space-y-2">
                    <div className="h-3 bg-muted rounded w-full" />
                    <div className="h-3 bg-muted rounded w-5/6" />
                    <div className="h-3 bg-muted rounded w-4/6" />
                  </div>
                  <div className="flex items-center gap-3 pt-4">
                    <div className="w-10 h-10 rounded-full bg-muted" />
                    <div className="space-y-1 flex-1">
                      <div className="h-3 bg-muted rounded w-24" />
                      <div className="h-2 bg-muted rounded w-32" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
