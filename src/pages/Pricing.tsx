import { Check } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Pricing = () => {
  const plans = [
    {
      name: "Voice AI Agent (Rwanda Local Number Included)",
      price: "$399 – $499",
      priceLabel: "One-time setup fee",
      description: "AI-powered voice assistant that answers incoming calls, handles common questions, qualifies leads, and books appointments automatically — 24/7. Designed to reduce missed calls, save staff time, and improve customer experience.",
      setupNote: "Final setup price depends on workflow complexity and required integrations.",
      benefits: [
        "24/7 AI-powered inbound call handling",
        "Automatic FAQ answering (services, pricing, availability, hours)",
        "Lead capture & qualification during live calls",
        "Appointment booking with calendar integration",
        "Call summaries & structured data sent to CRM or Google Sheets",
        "Multilingual support (English & French)",
        "Designed to reduce missed calls and staff workload",
      ],
      features: [],
      monthlyPlans: [
        { name: "Starter", minutes: "Includes up to ~150 minutes of calls", price: "$129/month" },
        { name: "Growth", minutes: "Includes up to ~400 minutes of calls", price: "$249/month" },
        { name: "Pro", minutes: "Includes up to ~900 minutes of calls", price: "$399/month" },
      ],
      delivery: "3–5 business days",
      link: "/services/voice-ai",
      status: "available",
      popular: true,
      note: "Additional call minutes are billed based on usage.",
    },
    {
      name: "Smart Lead Assistant",
      price: "$249 – $349",
      priceLabel: "One-time setup fee",
      description: "AI-powered workflow to capture, qualify, and follow up with leads from WhatsApp conversations, smart forms, or direct calls, syncing data to Google Sheets or CRM systems.",
      setupNote: "Final setup price depends on workflow complexity and integrations.",
      benefits: [
        "Lead capture via WhatsApp conversations",
        "Optional smart form as a lead entry point",
        "Intelligent lead qualification based on custom criteria",
        "Automated follow-up messages to new leads",
        "CRM or Google Sheets integration for organized lead data",
        "Custom workflows adapted to your sales process",
        "Reduced response time and increased conversion rates",
      ],
      features: [
        "Monthly Service: from $49/month depending on usage and hosting configuration",
      ],
      delivery: "Standard setup: 3–5 business days",
      deliveryNote: "Advanced logic or integrations may require additional time",
      link: "/services/email-crm",
      status: "available",
      note: "Voice AI call entry may require a Voice AI Agent plan. Hosting and AI usage may affect the final monthly fee.",
    },
    {
      name: "WhatsApp Automation",
      price: "$199 – $299",
      priceLabel: "One-time setup fee",
      description: "Automated WhatsApp system for customer conversations, booking, and support — all within one platform.",
      setupNote: "Final setup price depends on automation complexity and integrations.",
      benefits: [
        "AI-powered customer conversations on WhatsApp",
        "Appointment booking directly in chat",
        "Automated support and FAQ handling",
        "Lead capture and qualification via WhatsApp",
        "CRM and Google Sheets integration",
        "Available 24/7 for customer inquiries",
      ],
      features: [
        "Monthly Service: from $49/month depending on automation volume and hosting",
      ],
      delivery: "Standard setup: 3–5 business days",
      link: "/services/whatsapp",
      note: "High message volumes may increase the monthly cost.",
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
              Choose Your Automation{" "}
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Solution
              </span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Clear setup pricing. Final cost may vary based on workflow complexity and usage.
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
                {plan.popular && (
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-gradient-primary text-primary-foreground">
                      Most Popular
                    </Badge>
                  </div>
                )}
                <CardHeader className="p-0 mb-6 pt-8">
                  <CardTitle className="text-2xl mb-2">{plan.name}</CardTitle>
                  <div className="text-3xl font-bold text-primary mb-1">
                    {plan.price}
                  </div>
                  {plan.setupNote && (
                    <p className="text-sm text-muted-foreground mb-2">{plan.setupNote}</p>
                  )}
                  <CardDescription className="text-base">
                    {plan.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-0 space-y-6">
                  {/* Benefits list for Voice AI */}
                  {plan.benefits && (
                    <ul className="space-y-2">
                      {plan.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                            <Check className="w-3 h-3 text-primary" />
                          </div>
                          <span className="text-sm text-muted-foreground">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                  
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
                  
                  {/* Monthly Plans for Voice AI */}
                  {plan.monthlyPlans && (
                    <div className="bg-muted/50 rounded-lg p-4">
                      <p className="font-semibold text-sm mb-3">Monthly Plans:</p>
                      <ul className="space-y-2">
                        {plan.monthlyPlans.map((mp, idx) => (
                          <li key={idx} className="flex flex-col text-sm mb-2">
                            <div className="flex justify-between">
                              <span className="font-medium text-foreground">{mp.name}</span>
                              <span className="font-medium">{mp.price}</span>
                            </div>
                            <span className="text-muted-foreground text-xs">{mp.minutes}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                  
                  {plan.note && (
                    <p className="text-sm text-muted-foreground italic border-l-2 border-primary/30 pl-3">
                      {plan.note}
                    </p>
                  )}
                  
                  <div className="pt-4 border-t">
                    <div className="text-sm text-muted-foreground mb-4">
                      <span className="font-semibold text-foreground block mb-2">Delivery timeline:</span>
                      <span>{plan.delivery}</span>
                      {plan.deliveryNote && (
                        <p className="mt-1 text-xs italic">{plan.deliveryNote}</p>
                      )}
                    </div>
                    <div className="text-center space-y-2">
                      {plan.link && (
                        <Button
                          variant="outline"
                          className="w-full"
                          onClick={() => window.location.href = plan.link}
                        >
                          Learn More
                        </Button>
                      )}
                      <Button
                        variant={plan.popular ? "default" : "outline"}
                        className="w-full"
                        onClick={() => window.location.href = "/riley-demo"}
                      >
                        Talk to Riley
                      </Button>
                      <p className="text-xs text-muted-foreground mt-2">contact@aitonlab.rw</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* How Pricing Works Section */}
          <div className="max-w-3xl mx-auto mb-12 animate-fade-in">
            <h3 className="text-2xl font-bold text-center mb-6">How Our Pricing Works</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Check className="w-3 h-3 text-primary" />
                </div>
                <span className="text-muted-foreground">50% of the setup fee is paid upfront to confirm project kickoff and resource allocation.</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Check className="w-3 h-3 text-primary" />
                </div>
                <span className="text-muted-foreground">A 14-day paid trial is included to test the solution in real business conditions.</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Check className="w-3 h-3 text-primary" />
                </div>
                <span className="text-muted-foreground">If the pilot does not meet agreed performance criteria, we refund the service fee. Infrastructure and usage costs remain non-refundable.</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Check className="w-3 h-3 text-primary" />
                </div>
                <span className="text-muted-foreground">Final setup fees depend on workflow complexity and required integrations.</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Check className="w-3 h-3 text-primary" />
                </div>
                <span className="text-muted-foreground">Monthly service plans include telecom infrastructure, hosting, and AI usage unless otherwise specified.</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Check className="w-3 h-3 text-primary" />
                </div>
                <span className="text-muted-foreground">Additional usage-based fees may apply for high call or message volumes.</span>
              </li>
            </ul>
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

        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Pricing;