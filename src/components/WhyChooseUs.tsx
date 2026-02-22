import { Clock, Briefcase, BadgeDollarSign, HeadphonesIcon } from "lucide-react";

const WhyChooseUs = () => {
  const reasons = [
    {
      icon: Clock,
      title: "Fast & Reliable",
      description: "Standard setups delivered in 3–5 business days. Solutions we can deploy and maintain reliably.",
    },
    {
      icon: Briefcase,
      title: "Built for Real Use",
      description: "Voice calls, lead handling, WhatsApp, bookings, follow-ups — designed for real-world workflows.",
    },
    {
      icon: BadgeDollarSign,
      title: "Transparent Pricing",
      description: "Clear setup fees. Usage-based pricing or optional ongoing service depending on the solution.",
    },
    {
      icon: HeadphonesIcon,
      title: "Human Support",
      description: "Clear handover, guidance, and support so you always stay in control of your automation.",
    },
  ];

  return (
    <section className="py-28 relative">
      <div className="glow-line mb-28" />
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-20 animate-fade-in">
          <p className="text-sm font-semibold tracking-widest uppercase text-secondary mb-4">Why Us</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Why Businesses Choose <span className="text-gradient">AitonLab</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Practical AI automations designed to save time, reduce costs, and convert more customers.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="group text-center p-8 rounded-2xl glass hover:border-primary/30 transition-all duration-500 animate-slide-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-14 h-14 rounded-2xl gradient-primary flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <reason.icon className="w-7 h-7 text-primary-foreground" />
              </div>
              <h3 className="text-lg font-semibold mb-3">{reason.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
