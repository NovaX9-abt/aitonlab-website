import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, MessageSquare, Send, Loader2 } from "lucide-react";

const Contact = () => {
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);
    const form = e.currentTarget;
    const formData = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      businessName: (form.elements.namedItem("businessName") as HTMLInputElement).value,
      phone: (form.elements.namedItem("phone") as HTMLInputElement).value,
      service: (form.elements.namedItem("service") as HTMLSelectElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement).value
    };
    try {
      const response = await fetch("https://formspree.io/f/xdkqpkjb", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      });
      if (response.ok) {
        navigate("/thank-you");
      } else {
        setError("Something went wrong. Please try again.");
        setIsSubmitting(false);
      }
    } catch {
      setError("Failed to send message. Please check your connection and try again.");
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-28 relative">
      <div className="glow-line mb-28" />
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <p className="text-sm font-semibold tracking-widest uppercase text-secondary mb-4">Get In Touch</p>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Let's Work Together</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Ready to automate your business? Let's discuss which solution is right for you.
            </p>
          </div>

          <div className="grid md:grid-cols-5 gap-8">
            <div className="md:col-span-2 space-y-6 animate-slide-up">
              <div className="glass rounded-2xl p-8 shadow-elegant">
                <div className="space-y-6">
                  <div>
                    <h3 className="text-2xl font-bold mb-4">Contact Information</h3>
                    <p className="text-muted-foreground text-sm">
                      Feel free to reach out through the form or contact me directly.
                    </p>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Mail className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <div className="font-medium text-sm mb-1">Email</div>
                        <a href="mailto:contact.aitonlab@gmail.com" className="text-sm text-muted-foreground hover:text-primary transition-colors">contact@aitonlab.rw</a>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-xl bg-secondary/10 flex items-center justify-center flex-shrink-0">
                        <MessageSquare className="w-5 h-5 text-secondary" />
                      </div>
                      <div>
                        <div className="font-medium text-sm mb-1">WhatsApp Chatbot</div>
                        <a href="https://wa.me/250793581847" className="text-sm text-muted-foreground hover:text-secondary transition-colors">
                          +250 793 581 847
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="pt-6 border-t border-border/50">
                    <p className="text-sm text-muted-foreground">📍 Based in Rwanda 🇷🇼</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="md:col-span-3 animate-slide-up" style={{ animationDelay: "0.2s" }}>
              <div className="glass rounded-2xl p-8 shadow-elegant">
                <form onSubmit={handleSubmit} className="space-y-5">
                  {error && (
                    <div className="p-3 rounded-lg bg-destructive/10 border border-destructive/20 text-destructive text-sm">
                      {error}
                    </div>
                  )}
                  <div className="space-y-2">
                    <Label htmlFor="name">Your Name *</Label>
                    <Input id="name" name="name" placeholder="John Doe" required maxLength={100} className="bg-background/50 border-border/50 focus:border-primary/50" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="businessName">Business Name *</Label>
                    <Input id="businessName" name="businessName" placeholder="Your Business Name" required maxLength={100} className="bg-background/50 border-border/50 focus:border-primary/50" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number *</Label>
                    <Input id="phone" name="phone" type="tel" placeholder="+250 XXX XXX XXX" required maxLength={20} className="bg-background/50 border-border/50 focus:border-primary/50" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="service">What Service Do You Want? *</Label>
                    <select id="service" name="service" required className="flex h-10 w-full rounded-lg border border-border/50 bg-background/50 px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus:border-primary/50">
                      <option value="">Select a service</option>
                      <option value="voice">Voice AI Agent</option>
                      <option value="smart-lead">Smart Lead Assistant</option>
                      <option value="whatsapp">WhatsApp Automation</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message">Additional Details (Optional)</Label>
                    <Textarea id="message" name="message" placeholder="Tell us about your business needs..." maxLength={1000} rows={4} className="resize-none bg-background/50 border-border/50 focus:border-primary/50" />
                  </div>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <Button type="submit" variant="hero" className="flex-1 group" disabled={isSubmitting}>
                      {isSubmitting ? (
                        <>Sending… <Loader2 className="animate-spin" /></>
                      ) : (
                        <>Send Message <Send className="group-hover:translate-x-1 transition-transform" /></>
                      )}
                    </Button>
                    <Button type="button" variant="outline" className="flex-1 border-border/50 hover:border-primary/50" onClick={() => navigate("/riley-demo")}>
                      <MessageSquare className="mr-2" /> Call Riley
                    </Button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
