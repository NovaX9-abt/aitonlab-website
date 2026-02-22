import { MessageSquare, Sparkles, Phone, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const Services = () => {
  const navigate = useNavigate();

  const services = [
    {
      icon: Phone,
      title: "Voice AI Agent",
      price: "From $399 setup · $129/mo",
      description: "A professional AI voice assistant that handles real customer calls 24/7. Answers calls, qualifies leads, books appointments, and sends follow-ups.",
      action: () => navigate("/services/voice-ai"),
      secondaryAction: { text: "Talk to Riley", action: () => navigate("/riley-demo") },
    },
    {
      icon: Sparkles,
      title: "Smart Lead Assistant",
      price: "From $249 setup · $49/mo",
      description: "An intelligent system that captures every incoming lead, qualifies intent, integrates with your CRM, and triggers automated follow-ups.",
      action: () => navigate("/services/email-crm"),
    },
    {
      icon: MessageSquare,
      title: "WhatsApp Automation",
      price: "From $199 setup · $49/mo",
      description: "Automate customer conversations, bookings, and support on WhatsApp. Handle inquiries, capture leads, and send reminders.",
      action: () => navigate("/services/whatsapp"),
    },
  ];

  return (
    <section id="services" className="py-28 relative">
      <div className="absolute inset-0 gradient-glow opacity-30" />
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-20 animate-fade-in">
          <p className="text-sm font-semibold tracking-widest uppercase text-secondary mb-4">Our Services</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Automation That <span className="text-gradient">Actually Works</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Professional automation solutions that replace manual work and scale with your business.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <div
              key={index}
              className="group glass rounded-2xl p-8 hover:border-primary/30 transition-all duration-500 animate-slide-up hover:shadow-elegant"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <service.icon className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-bold mb-2">{service.title}</h3>
              <p className="text-sm font-medium text-primary mb-4">{service.price}</p>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6">{service.description}</p>
              <div className="space-y-2">
                <Button variant="outline" className="w-full border-border/50 hover:border-primary/50 hover:bg-primary/5" onClick={service.action}>
                  Learn More <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
                {service.secondaryAction && (
                  <Button variant="hero" className="w-full" onClick={service.secondaryAction.action}>
                    {service.secondaryAction.text}
                  </Button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
