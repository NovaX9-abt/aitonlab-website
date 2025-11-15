import { Zap, MapPin, DollarSign, Headphones } from "lucide-react";
import { Card } from "@/components/ui/card";

const WhyChooseUs = () => {
  const reasons = [
    {
      icon: Zap,
      title: "Fast Delivery",
      description: "1–3 days",
    },
    {
      icon: MapPin,
      title: "Built for Rwandan Businesses",
      description: "Local expertise",
    },
    {
      icon: DollarSign,
      title: "Clear One-Time Pricing",
      description: "No hidden fees",
    },
    {
      icon: Headphones,
      title: "Support & Maintenance",
      description: "Always included",
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-muted/20 to-background">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Why Choose <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Aiton AI</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            We understand the unique needs of businesses in Rwanda
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {reasons.map((reason, index) => (
            <Card
              key={index}
              className="p-6 text-center hover:shadow-elegant transition-all duration-300 animate-slide-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-14 h-14 rounded-full bg-gradient-primary flex items-center justify-center mx-auto mb-4">
                <reason.icon className="w-7 h-7 text-primary-foreground" />
              </div>
              <h3 className="text-lg font-semibold mb-2">{reason.title}</h3>
              <p className="text-sm text-muted-foreground">{reason.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
