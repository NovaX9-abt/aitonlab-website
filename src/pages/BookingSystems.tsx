import { Calendar, CheckCircle2, ArrowRight, Users, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const BookingSystems = () => {
  const navigate = useNavigate();

  const whatYouGet = [
    "Reliable booking infrastructure",
    "Calendar integration",
    "Email & WhatsApp notifications",
    "Automated reminders",
    "Client database management",
    "Automation-ready workflows",
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="container mx-auto px-6 py-24">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 animate-fade-in">
            <div className="w-16 h-16 rounded-full bg-gradient-primary flex items-center justify-center mx-auto mb-6">
              <Calendar className="w-8 h-8 text-primary-foreground" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Booking Systems
            </h1>
            <p className="text-xl text-muted-foreground">
              Critical booking infrastructure that scales with your business operations.
            </p>
          </div>

          {/* Problem Statement */}
          <Card className="mb-8 animate-slide-up">
            <CardHeader>
              <CardTitle>What Problem Does This Solve?</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground leading-relaxed">
                Many businesses waste hours playing phone tag with customers trying to schedule appointments. 
                You go back and forth on WhatsApp, double-book time slots, forget appointments, or miss bookings when you're busy.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                With an automated booking system, customers can see your available times and book instantly through WhatsApp or a simple form. 
                It syncs with your Google Calendar automatically, sends confirmations, and reminds both you and your customer.
              </p>
            </CardContent>
          </Card>

          {/* Examples */}
          <Card className="mb-8 animate-slide-up" style={{ animationDelay: "100ms" }}>
            <CardHeader>
              <CardTitle>Real Examples</CardTitle>
              <CardDescription>See how businesses use booking automation</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold mb-2 flex items-center gap-2">
                    <ArrowRight className="w-4 h-4 text-primary" />
                    Salon Owner
                  </h3>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-6">
                    <li>Customer sends "Book haircut" on WhatsApp → Bot shows available time slots</li>
                    <li>Customer picks time → Instant confirmation sent</li>
                    <li>Appointment added to your Google Calendar automatically</li>
                    <li>Reminder sent 2 hours before appointment to both you and customer</li>
                    <li>If customer cancels, your calendar updates instantly</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold mb-2 flex items-center gap-2">
                    <ArrowRight className="w-4 h-4 text-primary" />
                    Lawyer / Consultant
                  </h3>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-6">
                    <li>Booking form on website shows your real-time availability</li>
                    <li>Client books a 30-minute consultation slot</li>
                    <li>Automatic email with Zoom link or office location sent</li>
                    <li>Syncs with your calendar so you never double-book</li>
                    <li>Follow-up email sent after meeting with invoice or next steps</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold mb-2 flex items-center gap-2">
                    <ArrowRight className="w-4 h-4 text-primary" />
                    Gym / Fitness Trainer
                  </h3>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-6">
                    <li>Clients book training sessions via WhatsApp or website</li>
                    <li>Class capacity limits set (e.g., max 10 people per session)</li>
                    <li>Automatic waitlist if class is full</li>
                    <li>Reminder sent 24 hours before and 1 hour before session</li>
                    <li>Monthly attendance report generated automatically</li>
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
                Ideal for <span className="font-semibold text-foreground">salons, gyms, trainers, lawyers, consultants, clinics, and service-based businesses</span> — 
                any business where customers need to schedule appointments.
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
                  "Stop wasting time coordinating schedules on phone or WhatsApp",
                  "Never double-book or forget an appointment again",
                  "Customers can book 24/7 even when you're sleeping or busy",
                  "Reduce no-shows with automatic reminders",
                  "Look professional and organized to your clients"
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
              <CardDescription>$149 – $249</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We build reliable booking infrastructure — not simple calendar embeds. Pricing reflects proper integration, 
                notification systems, and automation-ready architecture.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Booking can be accessed via web forms, email, or WhatsApp (when available), depending on your setup.
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
                  Ready to Automate Your Bookings?
                </h2>
                <p className="text-muted-foreground mb-6">
                  We will recommend the simplest and most cost-effective automation for your business.
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

export default BookingSystems;