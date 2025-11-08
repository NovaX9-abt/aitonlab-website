import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, Briefcase, Settings, Rocket } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Pricing = () => {
  const plans = [
    {
      icon: Briefcase,
      name: "Starter",
      price: "$200",
      description: "Ideal for small businesses (restaurants, salons, boutiques).",
      features: [
        "1 multilingual voice assistant (English / French / Kinyarwanda)",
        "Basic automation: answering calls, simple responses, manual redirection",
        "Integration with Google Sheets or Airtable",
        "3-day free trial included",
      ],
      delivery: "Delivery: 2 days",
      cta: "Buy Starter Plan ($200)",
      link: "#", // Placeholder
      highlight: false,
    },
    {
      icon: Settings,
      name: "Pro",
      price: "$300",
      description: "For businesses that want real automation.",
      features: [
        "Everything in the Starter plan",
        "Integration with Google Calendar, WhatsApp, or email",
        "Booking and appointment management",
        "Automatic client confirmation messages",
        "3-day free trial included",
      ],
      delivery: "Delivery: 3–5 days",
      cta: "Buy Pro Plan ($300)",
      link: "#", // Placeholder
      highlight: true,
    },
    {
      icon: Rocket,
      name: "Premium",
      price: "$400",
      description: "For larger companies (clinics, hotels, agencies).",
      features: [
        "Custom voice (via ElevenLabs)",
        "Multi-app integrations (CRM, Notion, Drive, etc.)",
        "Airtable or Google Sheets dashboard for all calls and client data",
        "7 days of free support and adjustments after delivery",
        "3-day free trial included",
      ],
      delivery: "Delivery: 5–7 days",
      cta: "Buy Premium Plan ($400)",
      link: "#", // Placeholder
      highlight: false,
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-32 pb-24">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            {/* Header */}
            <div className="text-center mb-16 animate-fade-in">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-4">
                <Briefcase className="h-4 w-4 text-primary" />
                <span className="text-sm font-medium text-primary">Simple, Transparent Pricing</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Choose Your{" "}
                <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  Perfect Plan
                </span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                One-time payment, no subscriptions. Get your AI voice assistant up and running in days.
              </p>
            </div>

            {/* Pricing Cards */}
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              {plans.map((plan, index) => (
                <Card
                  key={index}
                  className={`p-8 relative animate-slide-up hover:shadow-elegant transition-smooth ${
                    plan.highlight ? "border-primary/50 shadow-lg" : ""
                  }`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {plan.highlight && (
                    <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-primary to-secondary text-white border-0">
                      Most Popular
                    </Badge>
                  )}
                  
                  <div className="space-y-6">
                    {/* Icon & Name */}
                    <div className="space-y-4">
                      <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                        <plan.icon className="w-7 h-7 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                        <p className="text-sm text-muted-foreground">{plan.description}</p>
                      </div>
                    </div>

                    {/* Price */}
                    <div>
                      <div className="text-4xl font-bold text-primary">{plan.price}</div>
                      <p className="text-sm text-muted-foreground mt-1">One-time payment</p>
                    </div>

                    {/* Features */}
                    <div className="space-y-3">
                      {plan.features.map((feature, i) => (
                        <div key={i} className="flex gap-3">
                          <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                          <span className="text-sm text-foreground">{feature}</span>
                        </div>
                      ))}
                    </div>

                    {/* Delivery */}
                    <div className="pt-4 border-t border-border">
                      <p className="text-sm font-medium text-muted-foreground">{plan.delivery}</p>
                    </div>

                    {/* CTA Button */}
                    <Button
                      variant={plan.highlight ? "hero" : "default"}
                      size="lg"
                      className="w-full"
                      onClick={() => window.location.href = plan.link}
                    >
                      {plan.cta}
                    </Button>
                  </div>
                </Card>
              ))}
            </div>

            {/* Trial Info */}
            <Card className="p-8 md:p-12 text-center bg-gradient-to-br from-primary/5 to-secondary/5 border-primary/20 animate-fade-in">
              <div className="max-w-2xl mx-auto space-y-4">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center mx-auto">
                  <Check className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold">
                  Try Your AI Voice Assistant Free for 3 Days
                </h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  If you love it, keep it for a one-time setup fee — starting from $200.
                </p>
                <Button variant="hero" size="lg" className="mt-4">
                  Start Your Free Trial
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Pricing;
