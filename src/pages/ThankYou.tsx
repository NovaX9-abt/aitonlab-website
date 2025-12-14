import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CheckCircle, Home } from "lucide-react";

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
          Thank You
        </h1>

        {/* Message */}
        <p className="text-muted-foreground mb-8">
          Your message has been received. We will contact you shortly.
        </p>

        {/* CTA Button */}
        <Button asChild>
          <Link to="/">
            <Home className="h-4 w-4 mr-2" />
            Back to Home
          </Link>
        </Button>
      </Card>
    </div>
  );
};

export default ThankYou;
