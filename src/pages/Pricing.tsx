import { Check, Bell } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Pricing = () => {
  const plans = [
    {
      name: "Voice AI Agent",
      price: "Starting from $299",
      description: "A professional AI voice assistant that handles real customer calls 24/7",
      features: [
        "24/7 call handling",
        "English & French support",
        "Appointment booking (optional)",
        "Lead capture & qualification",
        "Calendar & CRM / Google Sheets integration",
      ],
      delivery: [
        "Standard setup: 3–5 business days",
        "Custom workflows: 7–10 business days",
      ],
      link: "/services/voice-ai",
      status: "available",
      popular: true,
      note: "Final pricing depends on workflow complexity and required integrations.",
    },
    {
      name: "Smart Lead Assistant",
      price: "Starting from $249",
      description: "An intelligent system that captures, qualifies, and follows up with leads automatically",
      features: [
        "Automated lead capture",
        "Lead qualification",
        "CRM / Google Sheets integration",
        "Automated follow-ups",
      ],
      delivery: [
        "Standard setup: 3–5 business days",
        "Advanced or custom workflows: 7–10 business days",
      ],
      link: "/services/email-crm",
      status: "available",
      note: "Pricing varies based on automation complexity and follow-up logic.",
    },
    {
      name: "WhatsApp Automation",
      price: "Setup starting from $199",
      priceSubtext: "Ongoing service fee applies",
      description: "Automate customer conversations, bookings, and support on WhatsApp",
      features: [
        "WhatsApp Cloud API integration",
        "AI-powered customer conversations",
        "Appointment booking & support automation",
      ],
      delivery: [
        "Standard setup: 3–5 business days",
        "Advanced workflows: 7–10 business days",
      ],
      link: "/services/whatsapp",
      status: "coming-soon",
      note: "Pricing and delivery depend on conversation flows and integrations.",
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
              One-time setup fees. No subscriptions. Transparent pricing for businesses worldwide.
            </p>
          </div>

          {/* Pricing Grid */}
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12">
            {plans.map((plan, index) => (
              <Card
                key={index}
                className={`relative p-8 hover:shadow-elegant transition-all duration-300 animate-slide-up ${
                  plan.popular ? "border-primary shadow-elegant" : ""
                } ${plan.status === "coming-soon" ? "opacity-90" : ""}`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="absolute top-4 right-4 flex gap-2">
                  {plan.popular && (
                    <Badge className="bg-gradient-primary text-primary-foreground">
                      Most Popular
                    </Badge>
                  )}
                  {plan.status === "available" ? (
                    <Badge className="bg-green-600 hover:bg-green-700">Available</Badge>
                  ) : (
                    <Badge variant="secondary">Coming Soon</Badge>
                  )}
                </div>
                <CardHeader className="p-0 mb-6 pt-8">
                  <CardTitle className="text-2xl mb-2">{plan.name}</CardTitle>
                  <div className="text-3xl font-bold text-primary mb-1">
                    {plan.price}
                  </div>
                  {plan.priceSubtext && (
                    <p className="text-sm text-muted-foreground mb-2">{plan.priceSubtext}</p>
                  )}
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
                  {plan.note && (
                    <p className="text-sm text-muted-foreground italic border-l-2 border-primary/30 pl-3">
                      {plan.note}
                    </p>
                  )}
                  {plan.status === "coming-soon" && (
                    <p className="text-sm text-muted-foreground italic border-l-2 border-primary/30 pl-3">
                      Full pricing details coming soon.
                    </p>
                  )}
                  <div className="pt-4 border-t">
                    <div className="text-sm text-muted-foreground mb-4">
                      <span className="font-semibold text-foreground block mb-2">Delivery timeline:</span>
                      {Array.isArray(plan.delivery) ? (
                        <ul className="space-y-1">
                          {plan.delivery.map((item, idx) => (
                            <li key={idx}>• {item}</li>
                          ))}
                        </ul>
                      ) : (
                        <span>{plan.delivery}</span>
                      )}
                    </div>
                    {plan.status === "available" ? (
                      <Button
                        variant={plan.popular ? "default" : "outline"}
                        className="w-full"
                        onClick={() => window.location.href = "/riley-demo"}
                      >
                        Talk to Riley
                      </Button>
                    ) : (
                      <Button
                        variant="secondary"
                        className="w-full"
                        disabled
                      >
                        <Bell className="w-4 h-4 mr-2" />
                        Coming Soon
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* CTA Card */}
          <Card className="max-w-3xl mx-auto p-8 text-center shadow-elegant bg-gradient-to-br from-primary/5 to-secondary/5 border-primary/20 animate-fade-in">
            <h3 className="text-2xl font-bold mb-4">
              Ready to Automate Your Business?
            </h3>
            <p className="text-lg text-muted-foreground mb-6">
              Talk to Riley to discuss your needs and get a custom quote.
            </p>
            <Button variant="hero" size="lg" onClick={() => window.location.href = "/riley-demo"}>
              Start a Conversation
            </Button>
          </Card>

          {/* Global pricing note */}
          <p className="text-center text-sm text-muted-foreground mt-12 max-w-2xl mx-auto">
            All solutions are tailored to each business. Simple workflows cost less, while advanced automation and integrations require additional configuration.
          </p>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Pricing;