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
  const handleBookDemo = () => {
    toast({
      title: "Demo Line Coming Soon! 📞",
      description: "Our demo line will be available soon. Stay tuned!"
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
              , Your AI Voice Assistant
            </h1>

            {/* Subtitle */}
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Riley is the AI voice assistant of <span className="font-semibold text-foreground">Aiton AI</span>, 
              helping local businesses in Rwanda deliver exceptional customer service around the clock.
            </p>

            {/* CTA */}
            <Button variant="hero" size="lg" onClick={handleBookDemo} className="group mt-6">
              Book a Demo Call with Riley
              <Phone className="group-hover:rotate-12 transition-transform" />
            </Button>
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
                What Riley Can Do For{" "}
                <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  Your Business
                </span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Riley handles customer calls automatically, saving you time while increasing customer satisfaction. 
                He's always professional, always available, and speaks your customers' language.
              </p>
            </div>

            {/* Capabilities Grid */}
            <div className="grid md:grid-cols-2 gap-8 mb-16">
              <Card className="p-8 hover:shadow-elegant transition-smooth animate-slide-up">
                <div className="space-y-4">
                  <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                    <Phone className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-2xl font-semibold">Answer Customer Calls</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Riley picks up every call instantly, provides accurate information, and handles multiple conversations simultaneously without missing a beat.
                  </p>
                </div>
              </Card>

              <Card className="p-8 hover:shadow-elegant transition-smooth animate-slide-up" style={{
              animationDelay: "0.1s"
            }}>
                <div className="space-y-4">
                  <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                    <MessageSquare className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-2xl font-semibold">Take Bookings & Handle Inquiries</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    From scheduling appointments to answering product questions, Riley manages it all with the professionalism your customers expect.
                  </p>
                </div>
              </Card>

              <Card className="p-8 hover:shadow-elegant transition-smooth animate-slide-up" style={{
              animationDelay: "0.2s"
            }}>
                <div className="space-y-4">
                  <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                    <Globe className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-2xl font-semibold">Multilingual Support</h3>
                  <p className="text-muted-foreground leading-relaxed">Riley speaks English and French fluently, ensuring every customer feels understood and valued.</p>
                </div>
              </Card>

              <Card className="p-8 hover:shadow-elegant transition-smooth animate-slide-up" style={{
              animationDelay: "0.3s"
            }}>
                <div className="space-y-4">
                  <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                    <Clock className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-2xl font-semibold">24/7 Availability</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Riley never takes a break. Whether it's 3 AM or peak business hours, your customers always get immediate, professional support.
                  </p>
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
              <Button variant="hero" size="lg" onClick={handleBookDemo} className="group">
                Book a Demo Call with Riley
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