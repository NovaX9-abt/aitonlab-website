import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CheckCircle, Home, Phone, Mail, MessageCircle } from "lucide-react";

const ThankYou = () => {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-4 py-16">
      <Card className="max-w-lg w-full p-8 md:p-12 text-center shadow-elegant">
        {/* Success Icon */}
        <div className="flex justify-center mb-6">
          <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
            <CheckCircle className="h-8 w-8 text-primary" />
          </div>
        </div>

        {/* Title */}
        <h1 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
          Thank You! Your message has been sent.
        </h1>

        {/* Subtitle */}
        <p className="text-muted-foreground mb-8">
          We'll review your request and get back to you shortly.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center mb-8">
          <Button asChild>
            <Link to="/riley-demo">
              <Phone className="h-4 w-4 mr-2" />
              Call Riley for a Live Demo
            </Link>
          </Button>
          <Button variant="outline" asChild>
            <Link to="/">
              <Home className="h-4 w-4 mr-2" />
              Return to Home
            </Link>
          </Button>
        </div>

        {/* Direct Contact */}
        <div className="border-t border-border pt-6">
          <p className="text-sm text-muted-foreground mb-4">
            You can also reach us directly at:
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center text-sm">
            <a
              href="mailto:hello@aiton.ai"
              className="flex items-center gap-2 text-foreground hover:text-primary transition-smooth"
            >
              <Mail className="h-4 w-4" />
              hello@aiton.ai
            </a>
            <a
              href="https://wa.me/250788123456"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-foreground hover:text-primary transition-smooth"
            >
              <MessageCircle className="h-4 w-4" />
              WhatsApp
            </a>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default ThankYou;
