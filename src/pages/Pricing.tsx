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
      priceRange: "$99 – $249",
      description: "Professional WhatsApp Cloud API integration with reliable infrastructure",
      features: [
        "WhatsApp Cloud API integration",
        "Template setup & Meta compliance",
        "Automation workflows",
        "Reliability monitoring",
        "Lead capture & qualification",
      ],
      delivery: "2–4 days",
      link: "/services/whatsapp",
    },
    {
      name: "Booking Systems",
      priceRange: "$149 – $299",
      description: "Critical booking infrastructure for your business operations",
      features: [
        "Reliable booking systems",
        "Calendar integration",
        "Email & WhatsApp notifications",
        "Automation-ready workflows",
        "Client database management",
      ],
      delivery: "3–5 days",
      link: "/services/booking",
    },
    {
      name: "Voice AI Agent",
      priceRange: "$199 – $299",
      description: "Professional AI voice assistant with usage-based pricing",
      features: [
        "24/7 call handling",
        "English & French support",
        "Appointment booking integration",
        "Lead capture & qualification",
        "Calendar & CRM connections",
        "Fair usage policy (2–4 min avg calls)",
      ],
      delivery: "3–5 days",
      link: "/riley-demo",
      popular: true,
      usagePacks: [
        { name: "Starter", calls: "100 calls", price: "$29" },
        { name: "Growth", calls: "300 calls", price: "$79" },
        { name: "Pro", calls: "1,000 calls", price: "$199" },
      ],
      usagePacksNote: "Usage packs cover real call traffic. Setup is one-time — purchase call packs as needed.",
    },
    {
      name: "Email & CRM Automation",
      priceRange: "$249 – $399",
      description: "Business logic automation with reliable, maintainable systems",
      features: [
        "Business logic automation",
        "Email workflow systems",
        "CRM integration",
        "Data consistency & validation",
        "Scalable infrastructure",
      ],
      delivery: "3–5 days",
      link: "/services/email-crm",
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
                  {plan.usagePacks && (
                    <div className="pt-4 border-t border-border/50">
                      <p className="text-sm font-semibold text-foreground mb-3">Voice AI Usage Packs:</p>
                      <div className="space-y-2">
                        {plan.usagePacks.map((pack, idx) => (
                          <div key={idx} className="flex justify-between text-sm">
                            <span className="text-muted-foreground">
                              <span className="font-medium text-foreground">{pack.name}</span> — {pack.calls}
                            </span>
                            <span className="font-medium text-foreground">{pack.price}</span>
                          </div>
                        ))}
                      </div>
                      <p className="text-xs text-muted-foreground mt-3">
                        {plan.usagePacksNote}
                      </p>
                    </div>
                  )}
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
              Experience professional AI call handling. Setup starts from $199.
            </p>
            <Button variant="hero" size="lg" onClick={() => window.location.href = "/riley-demo"}>
              Book Your Free Demo
            </Button>
          </Card>

          {/* Note about pricing */}
          <p className="text-center text-sm text-muted-foreground mt-12 max-w-2xl mx-auto">
            Pricing depends on the complexity of your workflow. Simple automation starts at the prices listed above, 
            and advanced custom systems may cost more after your free analysis. Every project includes a free 3-day test before final delivery.
          </p>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Pricing;