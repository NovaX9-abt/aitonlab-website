import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Phone, Check } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useNavigate } from "react-router-dom";

const RileyDemo = () => {
  const navigate = useNavigate();

  const usagePacks = [
    { name: "Starter Pack", calls: "100 calls", price: "$39" },
    { name: "Growth Pack", calls: "300 calls", price: "$99" },
    { name: "Pro Pack", calls: "1,000 calls", price: "$299" },
  ];

  const features = [
    "24/7 call handling",
    "English & French support",
    "Appointment booking",
    "Lead capture & qualification",
    "Custom voice options available",
    "Flexible usage packs — pay only for the call traffic you need",
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
              Talk to Riley – AI Voice Assistant Demo
            </h1>

            {/* Description */}
            <p className="text-muted-foreground mb-8">
              This demo lets you talk to Riley, our 24/7 Voice AI assistant.
              Please only call if you want to experience the technology for business purposes.
            </p>

            {/* Start Call Button */}
            <Button 
              variant="hero" 
              size="lg"
              className="w-full"
              disabled
            >
              <Phone className="h-4 w-4 mr-2" />
              Start Call (Coming Soon)
            </Button>

            <p className="text-xs text-muted-foreground mt-4">
              Phone number will be activated after MTN SIP setup is complete.
            </p>
          </Card>

          {/* Pricing & Features Section */}
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Features Card */}
              <Card className="p-6 md:p-8">
                <h2 className="text-xl font-bold mb-4">Voice AI Agent Setup</h2>
                <p className="text-3xl font-bold text-primary mb-4">$249 – $399</p>
                <p className="text-sm text-muted-foreground mb-6">One-time setup fee</p>
                
                <ul className="space-y-3">
                  {features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="w-3 h-3 text-primary" />
                      </div>
                      <span className="text-muted-foreground text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </Card>

              {/* Usage Packs Card */}
              <Card className="p-6 md:p-8">
                <h2 className="text-xl font-bold mb-4">Voice AI Usage Packs</h2>
                <p className="text-sm text-muted-foreground mb-6">
                  Purchased separately based on your call volume
                </p>
                
                <div className="space-y-4 mb-6">
                  {usagePacks.map((pack, idx) => (
                    <div key={idx} className="flex justify-between items-center p-3 rounded-lg bg-muted/50">
                      <div>
                        <span className="font-medium text-foreground">{pack.name}</span>
                        <span className="text-muted-foreground ml-2">— {pack.calls}</span>
                      </div>
                      <span className="font-bold text-primary">{pack.price}</span>
                    </div>
                  ))}
                </div>
                
                <p className="text-xs text-muted-foreground">
                  These usage packs cover real call traffic handled by your AI assistant. 
                  You only pay for the setup once and then purchase call packs whenever you need more capacity.
                </p>
                
                <p className="text-sm text-foreground mt-4 font-medium">
                  You stay fully in control of your costs with transparent call-based pricing.
                </p>
              </Card>
            </div>

            {/* CTA */}
            <div className="text-center mt-8">
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
                Get a Free Quote
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
