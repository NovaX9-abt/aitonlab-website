import { Phone, CheckCircle2, ArrowRight, Users, Check, DollarSign } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const VoiceAIAgent = () => {
  const navigate = useNavigate();

  const whatYouGet = [
    "Custom Voice AI Agent setup",
    "English & French support",
    "Appointment booking",
    "Lead capture & qualification",
    "Calendar & CRM integration",
    "Automation-ready architecture",
    "Monitoring and reliability checks",
  ];

  const monthlyPlans = [
    { name: "Starter", minutes: "Includes up to ~150 minutes of calls", price: "$129/month" },
    { name: "Growth", minutes: "Includes up to ~400 minutes of calls", price: "$249/month" },
    { name: "Pro", minutes: "Includes up to ~900 minutes of calls", price: "$399/month" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="container mx-auto px-6 py-24">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 animate-fade-in">
            <div className="w-16 h-16 rounded-full bg-gradient-primary flex items-center justify-center mx-auto mb-6">
              <Phone className="w-8 h-8 text-primary-foreground" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Voice AI Agent
            </h1>
            <p className="text-xl text-muted-foreground">
              A professional AI voice assistant that answers real phone calls for your business, 24/7.
            </p>
          </div>

          {/* Problem Statement */}
          <Card className="mb-8 animate-slide-up">
            <CardHeader>
              <CardTitle>What Problem Does This Solve?</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground leading-relaxed">
                Businesses miss calls, lose leads, and spend hours answering repetitive questions. 
                Every missed call is a missed opportunity — whether it's a potential customer, a booking request, or an urgent inquiry.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                The Voice AI Agent answers every call instantly, qualifies callers, captures their information, 
                and books appointments automatically — even at 3 AM, on weekends, or during your busiest hours.
              </p>
            </CardContent>
          </Card>

          {/* How It Works */}
          <Card className="mb-8 animate-slide-up" style={{ animationDelay: "100ms" }}>
            <CardHeader>
              <CardTitle>How It Works</CardTitle>
              <CardDescription>Simple, reliable call handling</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  "Customers call a real phone number assigned to your business",
                  "The AI answers in real time with a natural, professional voice",
                  "Conversations happen naturally — this is not a chatbot or button menu",
                  "Calls can result in bookings, lead capture, or information delivery",
                  "Data is automatically sent to your calendars, CRMs, or automation workflows"
                ].map((step, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-xs font-semibold text-primary">{index + 1}</span>
                    </div>
                    <p className="text-muted-foreground">{step}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Real Examples */}
          <Card className="mb-8 animate-slide-up" style={{ animationDelay: "150ms" }}>
            <CardHeader>
              <CardTitle>Real Examples</CardTitle>
              <CardDescription>See how businesses use Voice AI</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold mb-2 flex items-center gap-2">
                    <ArrowRight className="w-4 h-4 text-primary" />
                    After-Hours Calls
                  </h3>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-6">
                    <li>Customer calls at 10 PM → AI answers immediately</li>
                    <li>AI qualifies the caller and captures their request</li>
                    <li>Appointment booked directly into your calendar</li>
                    <li>You wake up to a summary of the call and the booking confirmation</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold mb-2 flex items-center gap-2">
                    <ArrowRight className="w-4 h-4 text-primary" />
                    Lead Qualification
                  </h3>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-6">
                    <li>Customer calls asking about your services</li>
                    <li>AI asks qualifying questions (budget, timeline, needs)</li>
                    <li>Lead details are captured and organized in your CRM</li>
                    <li>Hot leads can trigger instant alerts to your phone</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold mb-2 flex items-center gap-2">
                    <ArrowRight className="w-4 h-4 text-primary" />
                    Busy Period Overflow
                  </h3>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-6">
                    <li>Your team is busy with customers in-store</li>
                    <li>Incoming calls are handled by the AI automatically</li>
                    <li>Callers get immediate assistance, not voicemail</li>
                    <li>Call logs are organized for follow-up when you're free</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Who This Is Best For */}
          <Card className="mb-8 animate-slide-up" style={{ animationDelay: "200ms" }}>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="w-5 h-5 text-primary" />
                Who This Is Best For
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed">
                Ideal for <span className="font-semibold text-foreground">salons, clinics, real estate agents, consultants, service businesses, and any company that receives phone inquiries</span> — 
                especially those who miss calls after hours or during busy periods.
              </p>
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
          <Card className="mb-8 animate-slide-up" style={{ animationDelay: "300ms" }}>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <DollarSign className="w-5 h-5 text-primary" />
                Pricing
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Setup */}
              <div>
                <h3 className="font-semibold text-lg mb-2">Voice AI Agent Setup</h3>
                <p className="text-2xl font-bold text-primary mb-2">$399 – $499</p>
                <p className="text-sm text-muted-foreground">One-time setup fee.</p>
                <p className="text-sm text-muted-foreground mt-1">Final setup price depends on workflow complexity and required integrations.</p>
              </div>

              {/* Monthly Plans */}
              <div>
                <h3 className="font-semibold text-lg mb-4">Monthly Plans</h3>
                <div className="space-y-3">
                  {monthlyPlans.map((plan, idx) => (
                    <div key={idx} className="flex flex-col p-3 rounded-lg bg-muted/50">
                      <div className="flex justify-between items-center">
                        <span className="font-medium text-foreground">{plan.name}</span>
                        <span className="font-bold text-primary">{plan.price}</span>
                      </div>
                      <span className="text-sm text-muted-foreground">{plan.minutes}</span>
                    </div>
                  ))}
                </div>
                <p className="text-sm text-muted-foreground mt-4">
                  Additional call minutes are billed based on usage.
                </p>
                <p className="text-sm font-semibold text-foreground mt-4">
                  Delivery timeline:
                </p>
                <p className="text-sm text-muted-foreground">
                  3–5 business days.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Why This Pricing Model */}
          <Card className="mb-12 animate-slide-up" style={{ animationDelay: "350ms" }}>
            <CardHeader>
              <CardTitle>Why This Pricing Model</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  "The setup fee covers architecture, integrations, and custom configuration",
                  "Monthly plans include Rwanda local phone number infrastructure, AI voice orchestration, and system hosting",
                  "Included call minutes provide predictable costs, while additional usage scales with your business",
                  "No hidden fees or surprise charges"
                ].map((point, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <p className="text-muted-foreground">{point}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* CTA */}
          <div className="text-center animate-fade-in" style={{ animationDelay: "400ms" }}>
            <Card className="bg-muted/20 border-none">
              <CardContent className="pt-8 pb-8">
                <h2 className="text-2xl font-bold mb-4">
                  Ready to Never Miss a Call Again?
                </h2>
                <p className="text-muted-foreground mb-6">
                  Experience the technology yourself or get a custom quote for your business.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button 
                    variant="hero" 
                    size="lg"
                    onClick={() => navigate("/riley-demo")}
                  >
                    <Phone className="w-4 h-4 mr-2" />
                    Try Riley Demo
                  </Button>
                  <Button 
                    variant="outline" 
                    size="lg"
                    onClick={() => navigate("/#contact")}
                  >
                    Get a Quote
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

export default VoiceAIAgent;