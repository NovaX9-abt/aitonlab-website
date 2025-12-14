import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Phone } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const RileyDemo = () => {
  return (
    <main className="min-h-screen">
      <Navbar />
      
      <section className="py-24 flex items-center justify-center">
        <div className="container mx-auto px-6">
          <Card className="max-w-lg mx-auto p-8 md:p-12 text-center shadow-elegant">
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
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default RileyDemo;
