import { Card } from "@/components/ui/card";
import { Quote, Star } from "lucide-react";

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Client Success Stories</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Hear from businesses that have transformed their customer support with AI.
            </p>
          </div>

          {/* Coming Soon Card */}
          <Card className="p-12 md:p-16 text-center shadow-elegant bg-gradient-to-br from-primary/5 to-secondary/5 border-primary/20 animate-slide-up">
            <div className="max-w-2xl mx-auto space-y-6">
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center mx-auto">
                <Quote className="w-10 h-10 text-primary" />
              </div>
              <h3 className="text-3xl font-bold">Testimonials Coming Soon</h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                I'm currently working with my first clients to deliver exceptional AI solutions. 
                Their success stories will be featured here soon!
              </p>
              <div className="flex justify-center gap-1 pt-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-sm text-muted-foreground italic">
                "Building trust, one successful project at a time."
              </p>
            </div>
          </Card>

          {/* Placeholder for future testimonials */}
          <div className="grid md:grid-cols-3 gap-6 mt-12 opacity-50">
            {[1, 2, 3].map((i) => (
              <Card key={i} className="p-6 animate-fade-in" style={{ animationDelay: `${i * 0.1}s` }}>
                <div className="space-y-4">
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, j) => (
                      <Star key={j} className="w-4 h-4 fill-muted text-muted" />
                    ))}
                  </div>
                  <div className="space-y-2">
                    <div className="h-3 bg-muted rounded w-full"></div>
                    <div className="h-3 bg-muted rounded w-5/6"></div>
                    <div className="h-3 bg-muted rounded w-4/6"></div>
                  </div>
                  <div className="flex items-center gap-3 pt-4">
                    <div className="w-10 h-10 rounded-full bg-muted"></div>
                    <div className="space-y-1 flex-1">
                      <div className="h-3 bg-muted rounded w-24"></div>
                      <div className="h-2 bg-muted rounded w-32"></div>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
