import { Sparkles, CheckCircle2, ArrowRight, Users, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const EmailCRMAutomation = () => {
  const navigate = useNavigate();

  const whatYouGet = [
    "Smart lead capture and classification",
    "AI-assisted lead prioritization",
    "CRM integration (Google Sheets, Notion, or similar)",
    "Automated follow-ups",
    "Clean, maintainable automation architecture",
    "A system designed to scale with your business",
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="container mx-auto px-6 py-24">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 animate-fade-in">
            <div className="w-16 h-16 rounded-full bg-gradient-primary flex items-center justify-center mx-auto mb-6">
              <Sparkles className="w-8 h-8 text-primary-foreground" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Smart Lead Assistant
            </h1>
            <p className="text-xl text-muted-foreground">
              An intelligent system that makes sure no important lead is ever missed.
            </p>
          </div>

          {/* Problem Statement */}
          <Card className="mb-8 animate-slide-up">
            <CardHeader>
              <CardTitle>What Problem Does This Solve?</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground leading-relaxed">
                Many businesses lose potential customers simply because messages arrive at the wrong time.
                Emails are read too late, follow-ups are forgotten, and urgent requests get buried in a busy inbox.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                The result:
              </p>
              <ul className="list-disc list-inside space-y-1 text-muted-foreground ml-4">
                <li>Missed opportunities</li>
                <li>Slow response times</li>
                <li>Lost revenue</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed">
                Smart Lead Assistant ensures that every incoming lead is captured, understood, and handled properly — without changing how your customers contact you.
              </p>
            </CardContent>
          </Card>

          {/* How It Works */}
          <Card className="mb-8 animate-slide-up" style={{ animationDelay: "50ms" }}>
            <CardHeader>
              <CardTitle>How It Works</CardTitle>
              <CardDescription>When a customer contacts your business by email or form</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {[
                  "The system automatically captures the message",
                  "An AI assistant analyzes the intent (booking, pricing, urgent request, general inquiry)",
                  "High-priority leads are flagged instantly",
                  "Customer data is stored cleanly in your lead database",
                  "Automated, neutral replies can be sent when needed",
                  "Follow-ups are triggered so no lead is forgotten",
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
                You stay in control. The system assists — it does not replace you.
              </p>
            </CardContent>
          </Card>

          {/* Examples */}
          <Card className="mb-8 animate-slide-up" style={{ animationDelay: "100ms" }}>
            <CardHeader>
              <CardTitle>Real-World Examples</CardTitle>
              <CardDescription>See how businesses use Smart Lead Assistant</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold mb-2 flex items-center gap-2">
                    <ArrowRight className="w-4 h-4 text-primary" />
                    Consulting Business
                  </h3>
                  <p className="text-muted-foreground ml-6 mb-2">
                    A potential client emails asking about pricing.
                  </p>
                  <ul className="list-disc list-inside space-y-1 text-muted-foreground ml-6">
                    <li>The lead is tagged as "high intent"</li>
                    <li>You receive an instant notification</li>
                    <li>A polite acknowledgment email is sent automatically</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold mb-2 flex items-center gap-2">
                    <ArrowRight className="w-4 h-4 text-primary" />
                    Real Estate Agent
                  </h3>
                  <p className="text-muted-foreground ml-6 mb-2">
                    A lead requests a visit date by email or form.
                  </p>
                  <ul className="list-disc list-inside space-y-1 text-muted-foreground ml-6">
                    <li>The request is marked as urgent</li>
                    <li>Lead details are saved to your CRM</li>
                    <li>A follow-up reminder is scheduled automatically</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold mb-2 flex items-center gap-2">
                    <ArrowRight className="w-4 h-4 text-primary" />
                    Restaurant or Local Business
                  </h3>
                  <p className="text-muted-foreground ml-6 mb-2">
                    A customer asks for availability for a group booking.
                  </p>
                  <ul className="list-disc list-inside space-y-1 text-muted-foreground ml-6">
                    <li>The system flags the request</li>
                    <li>You are notified immediately</li>
                    <li>No reservation request is missed</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Who This Is Best For */}
          <Card className="mb-8 animate-slide-up" style={{ animationDelay: "150ms" }}>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="w-5 h-5 text-primary" />
                Who This Is For
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Smart Lead Assistant is ideal for:
              </p>
              <ul className="list-disc list-inside space-y-1 text-muted-foreground ml-4 mb-4">
                <li>Consultants and agencies</li>
                <li>Real estate professionals</li>
                <li>Clinics and service businesses</li>
                <li>Restaurants and hospitality</li>
                <li>Any business receiving leads by email or forms</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed font-medium">
                If responding quickly and staying organized matters to your business, this system is for you.
              </p>
            </CardContent>
          </Card>

          {/* Benefits */}
          <Card className="mb-8 animate-slide-up" style={{ animationDelay: "200ms" }}>
            <CardHeader>
              <CardTitle>Why This Matters</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  "Never forget to follow up with a potential customer",
                  "Respond faster to high-value leads",
                  "Keep all lead data organized in one place",
                  "Reduce manual work and inbox chaos",
                  "Close more deals by staying consistent"
                ].map((benefit, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <p className="text-muted-foreground">{benefit}</p>
                  </div>
                ))}
              </div>
              <p className="text-sm text-muted-foreground mt-6 font-medium border-l-2 border-primary/30 pl-3">
                Most clients save 3–5 hours per week and significantly reduce lost opportunities.
              </p>
            </CardContent>
          </Card>

          {/* What You Will Get */}
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
              <CardDescription>$249 — One-time setup</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed mb-4">
                A fully implemented lead management system that includes automated lead capture, qualification, 
                CRM / Google Sheets integration, and automated follow-ups.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Initial usage included. Designed for normal business lead volumes.
              </p>
              <p className="text-sm text-muted-foreground font-medium">
                Delivery: 3–5 business days. Every project includes a free 3-day test before final delivery.
              </p>
            </CardContent>
          </Card>

          {/* CTA */}
          <div className="text-center animate-fade-in" style={{ animationDelay: "400ms" }}>
            <Card className="bg-muted/20 border-none">
              <CardContent className="pt-8 pb-8">
                <h2 className="text-2xl font-bold mb-4">
                  Ready to Capture Every Lead?
                </h2>
                <p className="text-muted-foreground mb-6">
                  Let's discuss how Smart Lead Assistant can work for your business.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <div className="flex flex-col items-center">
                    <Button 
                      variant="hero" 
                      size="lg"
                      onClick={() => navigate("/riley-demo")}
                    >
                      Discuss Your Needs
                    </Button>
                    <span className="text-sm text-muted-foreground mt-2">
                      Includes a free 3-day test if you decide to proceed.
                    </span>
                  </div>
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

export default EmailCRMAutomation;