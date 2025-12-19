import { Mail, CheckCircle2, ArrowRight, Users, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const EmailCRMAutomation = () => {
  const navigate = useNavigate();

  const whatYouGet = [
    "Business logic automation",
    "Email workflow systems",
    "CRM integration & sync",
    "Data consistency & validation",
    "Automated lead routing",
    "Scalable, maintainable systems",
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="container mx-auto px-6 py-24">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 animate-fade-in">
            <div className="w-16 h-16 rounded-full bg-gradient-primary flex items-center justify-center mx-auto mb-6">
              <Mail className="w-8 h-8 text-primary-foreground" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Email & CRM Automation
            </h1>
            <p className="text-xl text-muted-foreground">
              Business logic automation that replaces manual work with reliable, maintainable systems.
            </p>
          </div>

          {/* Problem Statement */}
          <Card className="mb-8 animate-slide-up">
            <CardHeader>
              <CardTitle>What Problem Does This Solve?</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground leading-relaxed">
                Every day, important emails from potential customers get buried in your inbox. 
                You forget to follow up with leads, and customer information is scattered across WhatsApp, email, and phone notes.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                With email and CRM automation, every lead is captured automatically, sorted by importance, 
                and added to your customer database. You get instant alerts for hot leads and automatic follow-ups so no opportunity slips through.
              </p>
            </CardContent>
          </Card>

          {/* Examples */}
          <Card className="mb-8 animate-slide-up" style={{ animationDelay: "100ms" }}>
            <CardHeader>
              <CardTitle>Real Examples</CardTitle>
              <CardDescription>See how businesses use email & CRM automation</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold mb-2 flex items-center gap-2">
                    <ArrowRight className="w-4 h-4 text-primary" />
                    Real Estate Agent
                  </h3>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-6">
                    <li>Lead fills form on website → Automatically added to Google Sheets with tags</li>
                    <li>Instant WhatsApp alert sent to agent with customer details</li>
                    <li>Automated follow-up email sent after 2 days if no reply</li>
                    <li>Monthly newsletter sent to all leads automatically</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold mb-2 flex items-center gap-2">
                    <ArrowRight className="w-4 h-4 text-primary" />
                    Consulting Business
                  </h3>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-6">
                    <li>Email from "info@" → Auto-reply with service menu and calendar link</li>
                    <li>Important emails tagged "urgent" → Alert sent to your phone instantly</li>
                    <li>Client database synced between email, sheets, and calendar</li>
                    <li>Automatic thank-you email after every consultation</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold mb-2 flex items-center gap-2">
                    <ArrowRight className="w-4 h-4 text-primary" />
                    E-Commerce Store
                  </h3>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-6">
                    <li>Order confirmation email sent automatically after payment</li>
                    <li>Abandoned cart reminder sent after 24 hours</li>
                    <li>Customer segmentation: VIP customers tagged and get special offers</li>
                    <li>Sales data automatically organized in Google Sheets for reporting</li>
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
                Who This Is Best For
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed">
                Ideal for <span className="font-semibold text-foreground">consultants, agencies, real estate agents, e-commerce businesses, and companies handling many leads by email</span> — 
                any business that needs to organize and follow up with customers efficiently.
              </p>
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
                  "Never forget to follow up with a potential customer",
                  "See all your customer data in one organized place",
                  "Get instant alerts when high-priority leads contact you",
                  "Save 3-5 hours per week on manual data entry and sorting",
                  "Close more deals by staying on top of every conversation"
                ].map((benefit, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <p className="text-muted-foreground">{benefit}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* What You Will Get */}
          <Card className="mb-8 animate-slide-up" style={{ animationDelay: "250ms" }}>
            <CardHeader>
              <CardTitle>What You Will Get</CardTitle>
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
              <CardDescription>$249 – $399</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We build reliable business systems — not simple email forwarding. Pricing reflects proper CRM integration, 
                data consistency, and maintainable automation architecture.
              </p>
              <p className="text-sm text-muted-foreground font-medium">
                Every project includes a free 3-day test before final delivery.
              </p>
            </CardContent>
          </Card>

          {/* CTA */}
          <div className="text-center animate-fade-in" style={{ animationDelay: "400ms" }}>
            <Card className="bg-muted/20 border-none">
              <CardContent className="pt-8 pb-8">
                <h2 className="text-2xl font-bold mb-4">
                  Ready to Organize Your Leads?
                </h2>
                <p className="text-muted-foreground mb-6">
                  We will recommend the simplest and most cost-effective automation for your business.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <div className="flex flex-col items-center">
                    <Button 
                      variant="hero" 
                      size="lg"
                      onClick={() => navigate("/riley-demo")}
                    >
                      Book a Demo with Riley
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