import { Clock, Briefcase, BadgeDollarSign, HeadphonesIcon } from "lucide-react";
import { Card } from "@/components/ui/card";

const WhyChooseUs = () => {
  const reasons = [
    {
      icon: Clock,
      title: "Fast & Reliable Delivery",
      description: "Standard setups delivered in 3–5 business days. We focus on solutions we can deploy and maintain reliably.",
    },
    {
      icon: Briefcase,
      title: "Built for Real Business Use",
      description: "Voice calls, lead handling, WhatsApp conversations, bookings, and follow-ups — designed for real-world business workflows.",
    },
    {
      icon: BadgeDollarSign,
      title: "Transparent Pricing Structure",
      description: "Clear setup fees. Usage-based pricing or optional ongoing service depending on the solution.",
    },
    {
      icon: HeadphonesIcon,
      title: "Human Support When Needed",
      description: "Clear handover, guidance, and support so you always stay in control of your automation.",
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-muted/20 to-background">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Why Businesses Choose{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              AitonLab
            </span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Practical AI automations designed to save time, reduce costs, and convert more customers.
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
