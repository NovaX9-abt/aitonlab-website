import { Check } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Pricing = () => {
  const plans = [
    {
      name: "WhatsApp Automation",
      priceRange: "$49 – $199",
      description: "Automated replies, lead capture, and follow-ups on WhatsApp",
      features: [
        "24/7 automated responses",
        "Lead capture & qualification",
        "Custom menus & funnels",
        "Follow-up sequences",
        "Google Sheets integration",
      ],
      delivery: "1–2 days",
      link: "#",
    },
    {
      name: "Email & CRM Automation",
      priceRange: "$59 – $249",
      description: "Smart email sorting, alerts, and CRM integrations",
      features: [
        "Automatic email sorting",
        "Instant lead alerts",
        "Follow-up automation",
        "Google Sheets or CRM sync",
        "Customer data organization",
      ],
      delivery: "2–3 days",
      link: "#",
    },
    {
      name: "Booking Systems",
      priceRange: "$149 – $199",
      description: "Automated appointment scheduling and confirmations",
      features: [
        "WhatsApp or form bookings",
        "Google Calendar sync",
        "Automatic confirmations",
        "Reminder notifications",
        "Customer management",
      ],
      delivery: "2–3 days",
      link: "#",
    },
    {
      name: "Voice AI Agent Setup",
      priceRange: "$299 – $399",
      description: "Professional AI voice assistant like Riley for your business",
      features: [
        "24/7 call handling",
        "English & French support",
        "Appointment booking",
        "Lead capture & qualification",
        "Custom voice options available",
        "$10 usage credits included",
      ],
      delivery: "3–5 days",
      link: "/riley-demo",
      popular: true,
    },
  ];

  return (
    <main className="min-h-screen">
      <Navbar />
      
      <section className="py-24 bg-gradient-to-b from-background via-muted/20 to-background">
        <div className="container mx-auto px-6">
          {/* Header */}
          <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Choose Your Perfect{" "}
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Automation
              </span>
            </h1>
            <p className="text-xl text-muted-foreground">
              One-time setup fees. No subscriptions. Clear pricing for Rwandan businesses.
            </p>
          </div>

          {/* Pricing Grid */}
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-12">
            {plans.map((plan, index) => (
              <Card
                key={index}
                className={`relative p-8 hover:shadow-elegant transition-all duration-300 animate-slide-up ${
                  plan.popular ? "border-primary shadow-elegant" : ""
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {plan.popular && (
                  <Badge className="absolute top-4 right-4 bg-gradient-primary text-primary-foreground">
                    Most Popular
                  </Badge>
                )}
                <CardHeader className="p-0 mb-6">
                  <CardTitle className="text-2xl mb-2">{plan.name}</CardTitle>
                  <div className="text-3xl font-bold text-primary mb-2">
                    {plan.priceRange}
                  </div>
                  <CardDescription className="text-base">
                    {plan.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-0 space-y-6">
                  <ul className="space-y-3">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Check className="w-3 h-3 text-primary" />
                        </div>
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="pt-4 border-t">
                    <p className="text-sm text-muted-foreground mb-4">
                      <span className="font-semibold text-foreground">Delivery:</span> {plan.delivery}
                    </p>
                    <Button
                      variant={plan.popular ? "default" : "outline"}
                      className="w-full"
                      onClick={() => window.location.href = plan.link}
                    >
                      Get Started
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Free Trial Card */}
          <Card className="max-w-3xl mx-auto p-8 text-center shadow-elegant bg-gradient-to-br from-primary/5 to-secondary/5 border-primary/20 animate-fade-in">
            <h3 className="text-2xl font-bold mb-4">
              Try Your AI Voice Assistant Free for 3 Days
            </h3>
            <p className="text-lg text-muted-foreground mb-6">
              If you love it, keep it for a one-time setup fee — starting from $200.
            </p>
            <Button variant="hero" size="lg" onClick={() => window.location.href = "/riley-demo"}>
              Book Your Free Demo
            </Button>
          </Card>

          {/* Note about pricing */}
          <p className="text-center text-sm text-muted-foreground mt-12 max-w-2xl mx-auto">
            All projects include a 3-day free test period. Pricing depends on complexity and specific requirements. 
            Contact us for a custom quote tailored to your business needs.
          </p>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Pricing;
