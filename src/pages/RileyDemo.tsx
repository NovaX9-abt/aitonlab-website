import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Phone, MessageSquare, Globe, Clock } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
const RileyDemo = () => {
  const {
    toast
  } = useToast();
  const handleCallRiley = () => {
    window.location.href = "tel:+250788000000"; // Replace with actual Riley phone number
  };

  const handleBookSetup = () => {
    toast({
      title: "Setup Consultation",
      description: "Redirecting to booking page...",
    });
  };
  return <main className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-primary/5 to-secondary/5">
        <div className="container mx-auto px-6 py-20 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
              <Phone className="h-4 w-4 text-primary animate-pulse" />
              <span className="text-sm font-medium text-foreground">Meet Riley</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-5xl md:text-6xl font-bold leading-tight">
              Meet{" "}
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Riley
              </span>
              {" "}— Your 24/7 Voice AI Assistant
            </h1>

            {/* Subtitle */}
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Riley answers calls for your business, handles customers, books appointments, and gives information — automatically. Try a live demo call now.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6">
              <Button variant="hero" size="lg" onClick={handleCallRiley} className="group">
                Call Riley Now
                <Phone className="group-hover:rotate-12 transition-transform" />
              </Button>
              <Button variant="outline" size="lg" onClick={handleBookSetup}>
                Book a Setup Consultation
              </Button>
            </div>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-float" style={{
        animationDelay: "1s"
      }}></div>
      </section>

      {/* What Riley Does */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            {/* Header */}
            <div className="text-center mb-16 animate-fade-in">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Riley's{" "}
                <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  Capabilities
                </span>
              </h2>
            </div>

            {/* Capabilities List */}
            <div className="space-y-6 max-w-3xl mx-auto">
              <Card className="p-6 hover:shadow-elegant transition-smooth animate-slide-up">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-gradient-primary flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Answers Calls 24/7</h3>
                    <p className="text-muted-foreground">Never miss a customer, even when you're closed or busy</p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 hover:shadow-elegant transition-smooth animate-slide-up" style={{ animationDelay: "100ms" }}>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-gradient-primary flex items-center justify-center flex-shrink-0">
                    <Globe className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Speaks English & French</h3>
                    <p className="text-muted-foreground">Communicates fluently in your customers' preferred language</p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 hover:shadow-elegant transition-smooth animate-slide-up" style={{ animationDelay: "200ms" }}>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-gradient-primary flex items-center justify-center flex-shrink-0">
                    <MessageSquare className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Understands Context</h3>
                    <p className="text-muted-foreground">Has intelligent conversations and remembers important details</p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 hover:shadow-elegant transition-smooth animate-slide-up" style={{ animationDelay: "300ms" }}>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-gradient-primary flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Books Appointments</h3>
                    <p className="text-muted-foreground">Schedules meetings and syncs with your calendar automatically</p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 hover:shadow-elegant transition-smooth animate-slide-up" style={{ animationDelay: "400ms" }}>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-gradient-primary flex items-center justify-center flex-shrink-0">
                    <MessageSquare className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Sends Customer Details to Your System</h3>
                    <p className="text-muted-foreground">Captures and organizes customer information in your preferred tools</p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 hover:shadow-elegant transition-smooth animate-slide-up" style={{ animationDelay: "500ms" }}>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-gradient-primary flex items-center justify-center flex-shrink-0">
                    <Globe className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Fully Customizable for Any Business</h3>
                    <p className="text-muted-foreground">Tailored to your specific industry, services, and workflow</p>
                  </div>
                </div>
              </Card>
            </div>

            {/* Why It Matters */}
            <Card className="p-10 md:p-12 bg-gradient-to-br from-primary/5 to-secondary/5 border-primary/20 animate-fade-in">
              <div className="text-center space-y-6">
                <h3 className="text-3xl font-bold">Why AI Voice Assistants Matter</h3>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                  In today's fast-paced world, customers expect instant responses. AI voice assistants like Riley 
                  help you meet those expectations without the overhead of hiring and training a large support team. 
                  The result? <span className="font-semibold text-foreground">Lower costs, happier customers, and more time to focus on growing your business.</span>
                </p>
              </div>
            </Card>

            {/* Final CTA */}
            <div className="text-center mt-16 animate-fade-in">
              <h3 className="text-2xl font-semibold mb-4">Experience Riley Yourself</h3>
              <p className="text-muted-foreground mb-6">
                See how an AI voice assistant could transform your customer support
              </p>
              <Button variant="hero" size="lg" onClick={handleCallRiley} className="group">
                Call Riley Now
                <Phone className="group-hover:rotate-12 transition-transform" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>;
};
export default RileyDemo;