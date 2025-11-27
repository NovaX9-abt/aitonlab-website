import { MessageSquare, CheckCircle2, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const WhatsAppAutomation = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="container mx-auto px-6 py-24">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 animate-fade-in">
            <div className="w-16 h-16 rounded-full bg-gradient-primary flex items-center justify-center mx-auto mb-6">
              <MessageSquare className="w-8 h-8 text-primary-foreground" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              WhatsApp Automations
            </h1>
            <p className="text-xl text-muted-foreground">
              Never miss a customer message again. Respond instantly, 24/7.
            </p>
          </div>

          {/* Problem Statement */}
          <Card className="mb-8 animate-slide-up">
            <CardHeader>
              <CardTitle>What Problem Does This Solve?</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground leading-relaxed">
                Many businesses lose customers because they can't respond to WhatsApp messages fast enough. 
                Maybe you're busy with other work, or you're closed for the night.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                With WhatsApp automation, your business responds immediately to every message, captures customer information, 
                and even guides them through a menu or booking process — all without you lifting a finger.
              </p>
            </CardContent>
          </Card>

          {/* Examples */}
          <Card className="mb-8 animate-slide-up" style={{ animationDelay: "100ms" }}>
            <CardHeader>
              <CardTitle>Real Examples</CardTitle>
              <CardDescription>See how businesses use WhatsApp automation</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold mb-2 flex items-center gap-2">
                    <ArrowRight className="w-4 h-4 text-primary" />
                    Restaurant Owner
                  </h3>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-6">
                    <li>Customer sends "Menu" → Bot replies with full menu instantly</li>
                    <li>Customer sends "Book table for 4" → Bot captures details and confirms</li>
                    <li>Automated reminders sent 2 hours before reservation</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold mb-2 flex items-center gap-2">
                    <ArrowRight className="w-4 h-4 text-primary" />
                    Delivery Service
                  </h3>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-6">
                    <li>Customer asks "Do you deliver to my area?" → Instant yes/no reply</li>
                    <li>Order confirmation with tracking link sent automatically</li>
                    <li>Follow-up message after delivery asking for feedback</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold mb-2 flex items-center gap-2">
                    <ArrowRight className="w-4 h-4 text-primary" />
                    Online Shop
                  </h3>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-6">
                    <li>Automated product catalog with photos and prices</li>
                    <li>Cart system where customers can order multiple items</li>
                    <li>Payment instructions sent automatically after order</li>
                    <li>Abandoned cart reminders if customer doesn't complete purchase</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Benefits */}
          <Card className="mb-8 animate-slide-up" style={{ animationDelay: "200ms" }}>
            <CardHeader>
              <CardTitle>Why This Helps Your Business</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  "Never lose a customer because you replied too late",
                  "Capture every lead automatically, even at 3 AM",
                  "Save 5-10 hours per week answering the same questions",
                  "Organize customer data in one place for easy follow-up",
                  "Look more professional and reliable to your customers"
                ].map((benefit, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <p className="text-muted-foreground">{benefit}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Pricing */}
          <Card className="mb-12 animate-slide-up" style={{ animationDelay: "300ms" }}>
            <CardHeader>
              <CardTitle>Flexible Pricing</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Pricing varies depending on complexity. Simple automations are affordable (from $49), 
                and advanced workflows may cost more. All solutions include a 3-day free test.
              </p>
              <p className="text-sm text-muted-foreground">
                We'll analyze your needs and recommend the simplest solution that works for your business.
              </p>
            </CardContent>
          </Card>

          {/* CTA */}
          <div className="text-center animate-fade-in" style={{ animationDelay: "400ms" }}>
            <Card className="bg-muted/20 border-none">
              <CardContent className="pt-8 pb-8">
                <h2 className="text-2xl font-bold mb-4">
                  Ready to Automate Your WhatsApp?
                </h2>
                <p className="text-muted-foreground mb-6">
                  We will recommend the simplest and most cost-effective automation for your business.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button 
                    variant="hero" 
                    size="lg"
                    onClick={() => navigate("/riley-demo")}
                  >
                    Book a Demo with Riley
                  </Button>
                  <Button 
                    variant="outline" 
                    size="lg"
                    onClick={() => navigate("/#contact")}
                  >
                    Get a Free Quote
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default WhatsAppAutomation;