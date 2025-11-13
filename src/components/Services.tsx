import { Bot, Phone, MessageSquare, Clock } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Services = () => {
  const services = [
    {
      icon: Bot,
      title: "AI Voice Assistants",
      description: "Custom-built AI voice agents that handle customer calls automatically, speaking English and French fluently.",
    },
    {
      icon: Phone,
      title: "24/7 Availability",
      description: "Never miss a customer call again. Your AI assistant works around the clock, even when you're closed.",
    },
    {
      icon: MessageSquare,
      title: "Smart Conversations",
      description: "Natural conversations that answer questions, take bookings, and provide information to your customers.",
    },
    {
      icon: Clock,
      title: "Instant Setup",
      description: "Get your AI assistant up and running in 2-7 days. Start with a free 3-day trial to test it out.",
    },
  ];

  return (
    <section className="py-24 bg-muted/20">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            AI Voice Assistants for Your Business
          </h2>
          <p className="text-lg text-muted-foreground">
            We build custom AI voice agents that handle customer calls, take bookings, and provide information—automatically and professionally.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <Card
              key={index}
              className="group hover:shadow-elegant transition-all duration-300 animate-slide-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-gradient-primary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
