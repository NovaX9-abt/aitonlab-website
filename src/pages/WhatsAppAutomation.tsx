import { MessageSquare, CheckCircle2, ArrowRight, Users, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const WhatsAppAutomation = () => {
  const navigate = useNavigate();

  const whatYouGet = [
    "Automated WhatsApp conversation flows",
    "AI-assisted intent detection",
    "Lead and booking data capture",
    "Google Sheets or CRM integration",
    "Automated reminders and follow-ups",
    "Scalable automation architecture",
  ];

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
              WhatsApp Automation
            </h1>
            <p className="text-xl text-muted-foreground">
              Automate customer conversations and operations directly inside WhatsApp.
            </p>
          </div>

          {/* Problem Statement */}
          <Card className="mb-8 animate-slide-up">
            <CardHeader>
              <CardTitle>What Problem Does This Solve?</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground leading-relaxed">
                Many businesses receive most customer inquiries on WhatsApp. When messages are not answered fast enough, 
                customers leave, bookings are lost, and support becomes chaotic.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                The result:
              </p>
              <ul className="list-disc list-inside space-y-1 text-muted-foreground ml-4">
                <li>Missed customer inquiries</li>
                <li>Slow response times</li>
                <li>Lost bookings and sales</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed">
                WhatsApp Automation ensures every message is answered, organized, and followed up automatically.
              </p>
            </CardContent>
          </Card>

          {/* How It Works */}
          <Card className="mb-8 animate-slide-up" style={{ animationDelay: "50ms" }}>
            <CardHeader>
              <CardTitle>How It Works</CardTitle>
              <CardDescription>When a customer sends a WhatsApp message</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {[
                  "The system captures the conversation instantly",
                  "An AI assistant understands the customer's intent",
                  "Common questions are answered automatically",
                  "Leads or booking requests are collected",
                  "Follow-ups and reminders are triggered when needed",
                ].map((step, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-xs font-semibold text-primary">{index + 1}</span>
                    </div>
                    <p className="text-muted-foreground">{step}</p>
                  </div>
                ))}
              </div>
              <p className="text-sm text-muted-foreground mt-6 font-medium border-l-2 border-primary/30 pl-3">
                You stay in control. The system assists — it does not replace your team.
              </p>
            </CardContent>
          </Card>

          {/* Real-World Examples */}
          <Card className="mb-8 animate-slide-up" style={{ animationDelay: "100ms" }}>
            <CardHeader>
              <CardTitle>Real-World Examples</CardTitle>
              <CardDescription>See how businesses use WhatsApp Automation</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold mb-2 flex items-center gap-2">
                    <ArrowRight className="w-4 h-4 text-primary" />
                    Restaurant
                  </h3>
                  <ul className="list-disc list-inside space-y-1 text-muted-foreground ml-6">
                    <li>Customer asks for table availability</li>
                    <li>System collects booking details</li>
                    <li>Confirmation or follow-up is sent automatically</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold mb-2 flex items-center gap-2">
                    <ArrowRight className="w-4 h-4 text-primary" />
                    Clinic
                  </h3>
                  <ul className="list-disc list-inside space-y-1 text-muted-foreground ml-6">
                    <li>Patient asks for appointment times</li>
                    <li>System collects patient details</li>
                    <li>Reminder messages are sent automatically</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold mb-2 flex items-center gap-2">
                    <ArrowRight className="w-4 h-4 text-primary" />
                    Service Business
                  </h3>
                  <ul className="list-disc list-inside space-y-1 text-muted-foreground ml-6">
                    <li>Customer asks for pricing or services</li>
                    <li>Lead details are captured</li>
                    <li>You receive an instant notification</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Who This Is For */}
          <Card className="mb-8 animate-slide-up" style={{ animationDelay: "150ms" }}>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="w-5 h-5 text-primary" />
                Who This Is For
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed mb-4">
                WhatsApp Automation is ideal for:
              </p>
              <ul className="list-disc list-inside space-y-1 text-muted-foreground ml-4 mb-4">
                <li>Restaurants and hospitality</li>
                <li>Clinics and medical practices</li>
                <li>Agencies and service businesses</li>
                <li>Any business handling customer conversations on WhatsApp</li>
              </ul>
            </CardContent>
          </Card>

          {/* Why This Matters */}
          <Card className="mb-8 animate-slide-up" style={{ animationDelay: "200ms" }}>
            <CardHeader>
              <CardTitle>Why This Matters</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  "Respond instantly to customers",
                  "Never lose a booking or inquiry",
                  "Keep conversations organized",
                  "Reduce manual workload",
                  "Improve customer satisfaction",
                ].map((benefit, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <p className="text-muted-foreground">{benefit}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* What You Get */}
          <Card className="mb-8 animate-slide-up" style={{ animationDelay: "250ms" }}>
            <CardHeader>
              <CardTitle>What You Get</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid sm:grid-cols-2 gap-3">
                {whatYouGet.map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Check className="w-3 h-3 text-primary" />
                    </div>
                    <span className="text-muted-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Pricing */}
          <Card className="mb-12 animate-slide-up" style={{ animationDelay: "300ms" }}>
            <CardHeader>
              <CardTitle>Pricing</CardTitle>
              <CardDescription>From $199 + service fee</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed mb-4">
                A fully implemented WhatsApp automation system that includes AI-powered conversations, 
                lead capture, booking flows, and CRM integration.
              </p>
              <p className="text-sm text-muted-foreground font-medium">
                Delivery: 3–5 business days depending on workflow complexity.
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
                  Let's discuss how WhatsApp Automation can work for your business.
                </p>
                <Button 
                  variant="hero" 
                  size="lg"
                  onClick={() => navigate("/riley-demo")}
                >
                  Talk to Riley
                </Button>
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