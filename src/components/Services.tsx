import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Phone, Clock, DollarSign, Users, Shield, Zap } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Services = () => {
  const navigate = useNavigate();
  
  const benefits = [
    {
      icon: Clock,
      title: "24/7 Availability",
      description: "Your AI agent never sleeps, ensuring your customers always get support when they need it.",
    },
    {
      icon: DollarSign,
      title: "Reduce Costs",
      description: "Save on hiring and training costs while maintaining professional customer service quality.",
    },
    {
      icon: Users,
      title: "Scale Effortlessly",
      description: "Handle unlimited calls simultaneously without adding staff or infrastructure.",
    },
    {
      icon: Phone,
      title: "Local Rwanda Numbers",
      description: "Professional local phone numbers that build trust with your Rwandan customers.",
    },
    {
      icon: Shield,
      title: "Consistent Quality",
      description: "Every call is handled with the same level of professionalism and accuracy.",
    },
    {
      icon: Zap,
      title: "Quick Setup",
      description: "Get your AI phone agent up and running in days, not weeks or months.",
    },
  ];

  const handleGetStarted = () => {
    navigate("/riley-demo");
  };

  return (
    <section id="services" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 animate-fade-in">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-4">
              <Phone className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium text-primary">What I Offer</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              AI Agents That Transform Your{" "}
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Customer Support
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              I build AI-powered phone agents that answer calls professionally, with local Rwandan phone numbers, 
              helping your business serve customers better while you focus on growth.
            </p>
          </div>

          {/* Main Value Proposition */}
          <Card className="p-8 md:p-12 mb-16 shadow-elegant bg-gradient-to-br from-primary/5 to-secondary/5 border-primary/20 animate-slide-up">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="space-y-6">
                <h3 className="text-3xl font-bold">How It Works</h3>
                <div className="space-y-4">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-semibold">
                      1
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Consultation</h4>
                      <p className="text-sm text-muted-foreground">We discuss your business needs and customer support goals.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-semibold">
                      2
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Custom Setup</h4>
                      <p className="text-sm text-muted-foreground">I configure your AI agent with your business information and local phone number.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-semibold">
                      3
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Go Live</h4>
                      <p className="text-sm text-muted-foreground">Your AI agent starts handling calls while you monitor and optimize.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                  <Phone className="w-24 h-24 text-primary/40 animate-float" />
                </div>
              </div>
            </div>
          </Card>

          {/* Benefits Grid */}
          <div className="mb-12">
            <h3 className="text-3xl font-bold text-center mb-12">Key Benefits</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {benefits.map((benefit, index) => (
                <Card 
                  key={index}
                  className="p-6 hover:shadow-elegant transition-smooth hover:-translate-y-1 animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="space-y-4">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                      <benefit.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h4 className="font-semibold text-lg">{benefit.title}</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="text-center animate-fade-in">
            <Button 
              variant="hero" 
              size="lg"
              onClick={handleGetStarted}
              className="group"
            >
              Get Started Today
              <Phone className="group-hover:rotate-12 transition-transform" />
            </Button>
            <p className="text-sm text-muted-foreground mt-4">
              Let's discuss how AI can transform your customer support
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
