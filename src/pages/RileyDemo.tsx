import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Phone, Check } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useNavigate } from "react-router-dom";

const RileyDemo = () => {
  const navigate = useNavigate();

  const monthlyPlans = [
    { name: "Starter", details: "~150 minutes", price: "$129 / month" },
    { name: "Growth", details: "~400 minutes", price: "$249 / month" },
    { name: "Pro", details: "~900 minutes", price: "$399 / month" },
  ];

  const features = [
    "24/7 professional call handling",
    "English & French support",
    "Call qualification & lead capture",
    "Consultation booking with AitonLab team",
    "Calendar & CRM integrations",
  ];

  return (
    <main className="min-h-screen">
      <Navbar />
      
      <section className="py-24">
        <div className="container mx-auto px-6">
          {/* Demo Card */}
          <Card className="max-w-lg mx-auto p-8 md:p-12 text-center shadow-elegant mb-12">
            {/* Icon */}
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 rounded-full bg-gradient-primary flex items-center justify-center">
                <Phone className="h-8 w-8 text-primary-foreground" />
              </div>
            </div>

            {/* Title */}
            <h1 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Talk to Riley — AI Voice Assistant Demo
            </h1>

            {/* Description */}
            <p className="text-muted-foreground mb-2">
              Riley is our AI voice assistant designed to handle real business inquiries.
              He gathers your business needs and helps schedule a consultation call with an AitonLab consultant.
            </p>
            <p className="text-sm text-muted-foreground mb-8 italic">
              This line is reserved for business inquiries only.
              Calls without genuine business interest may not be processed.
            </p>

            {/* Start Call Button */}
            <Button 
              variant="hero" 
              size="lg"
              className="w-full"
              disabled
            >
              <Phone className="h-4 w-4 mr-2" />
              Start Call — +250 XXX XXX XXX
            </Button>

            <div className="text-xs text-muted-foreground mt-4 space-y-1">
              <p>Calls are handled by an AI assistant.</p>
              <p>Average call duration: 2–4 minutes.</p>
            </div>
          </Card>

          {/* Pricing Section */}
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">
              Voice AI Agent — Pricing
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              {/* Setup & Features Card */}
              <Card className="p-6 md:p-8">
                <h3 className="text-xl font-bold mb-2">One-Time Setup</h3>
                <p className="text-3xl font-bold text-primary mb-4">Starting from $399</p>
                
                <ul className="space-y-3 mb-6">
                  {features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="w-3 h-3 text-primary" />
                      </div>
                      <span className="text-muted-foreground text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="pt-4 border-t">
                  <p className="text-sm font-semibold text-foreground">Delivery timeline:</p>
                  <p className="text-sm text-muted-foreground">3–5 business days</p>
                </div>
              </Card>

              {/* Monthly Plans Card */}
              <Card className="p-6 md:p-8">
                <h3 className="text-xl font-bold mb-6">Monthly Voice AI Plans</h3>
                
                <div className="space-y-4 mb-6">
                  {monthlyPlans.map((plan, idx) => (
                    <div key={idx} className="flex justify-between items-center p-3 rounded-lg bg-muted/50">
                      <div>
                        <span className="font-medium text-foreground">{plan.name}</span>
                        <span className="text-muted-foreground ml-2">({plan.details})</span>
                      </div>
                      <span className="font-bold text-primary">{plan.price}</span>
                    </div>
                  ))}
                </div>
                
                <div className="space-y-2 text-sm text-muted-foreground">
                  <p>Plans include telecom infrastructure, hosting, and AI usage.</p>
                  <p>Additional usage-based fees may apply for high call volumes.</p>
                </div>
              </Card>
            </div>

            {/* CTA */}
            <div className="text-center mt-10">
              <p className="text-muted-foreground mb-4">
                Ready to automate your business calls?
              </p>
              <Button 
                variant="hero" 
                size="lg"
                onClick={() => {
                  const contactSection = document.getElementById("contact");
                  if (contactSection) {
                    contactSection.scrollIntoView({ behavior: "smooth" });
                  } else {
                    navigate("/#contact");
                  }
                }}
              >
                Get a Quote
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default RileyDemo;