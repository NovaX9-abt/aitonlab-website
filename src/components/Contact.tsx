import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, MessageSquare, Send, Phone } from "lucide-react";

const Contact = () => {

  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 animate-fade-in">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-4">
              <MessageSquare className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium text-primary">Get In Touch</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Let's Work Together</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Ready to automate your business? Let's discuss which solution is right for you.
            </p>
          </div>

          <div className="grid md:grid-cols-5 gap-8">
            {/* Contact Info */}
            <div className="md:col-span-2 space-y-6 animate-slide-up">
              <Card className="p-6 shadow-elegant bg-gradient-to-br from-primary/5 to-secondary/5 border-primary/20">
                <div className="space-y-6">
                  <div>
                    <h3 className="text-2xl font-bold mb-4">Contact Information</h3>
                    <p className="text-muted-foreground">
                      Feel free to reach out through the form or contact me directly.
                    </p>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Mail className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <div className="font-medium mb-1">Email</div>
                        <a href="mailto:contact@example.com" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                          contact@example.com
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Phone className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <div className="font-medium mb-1">Phone</div>
                        <a href="tel:+250" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                          +250 XXX XXX XXX
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <MessageSquare className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <div className="font-medium mb-1">WhatsApp</div>
                        <a href="https://wa.me/250" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                          Message on WhatsApp
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="pt-6 border-t border-border">
                    <p className="text-sm text-muted-foreground">
                      📍 Based in Rwanda 🇷🇼
                    </p>
                  </div>
                </div>
              </Card>
            </div>

            {/* Contact Form */}
            <div className="md:col-span-3 animate-slide-up" style={{ animationDelay: "0.2s" }}>
              <Card className="p-8 shadow-elegant">
                <form 
                  action="https://formspree.io/f/xdkqpkjb" 
                  method="POST" 
                  className="space-y-6"
                >
                  <div className="space-y-2">
                    <Label htmlFor="name">Your Name *</Label>
                    <Input
                      id="name"
                      name="name"
                      placeholder="John Doe"
                      required
                      maxLength={100}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="businessName">Business Name *</Label>
                    <Input
                      id="businessName"
                      name="businessName"
                      placeholder="Your Business Name"
                      required
                      maxLength={100}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number *</Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      placeholder="+250 XXX XXX XXX"
                      required
                      maxLength={20}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="service">What Service Do You Want? *</Label>
                    <select
                      id="service"
                      name="service"
                      required
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                    >
                      <option value="">Select a service</option>
                      <option value="whatsapp">WhatsApp Automation</option>
                      <option value="email">Email & CRM Automation</option>
                      <option value="booking">Booking Systems</option>
                      <option value="voice">Voice AI Agent (Riley)</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Additional Details (Optional)</Label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Tell us about your business needs..."
                      maxLength={1000}
                      rows={4}
                      className="resize-none"
                    />
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button 
                      type="submit" 
                      variant="hero" 
                      className="flex-1 group"
                    >
                      Send Message
                      <Send className="group-hover:translate-x-1 transition-transform" />
                    </Button>
                    <Button 
                      type="button"
                      variant="outline" 
                      className="flex-1"
                      onClick={() => window.location.href = "/riley-demo"}
                    >
                      <Phone className="mr-2" />
                      Call Riley for Demo
                    </Button>
                  </div>
                </form>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
