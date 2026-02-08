import { Heart } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 bg-muted/20 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-center items-center gap-6 md:gap-12">
            {/* Brand */}
            <div className="text-center md:text-left">
              <h3 className="text-xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                AI Customer Support
              </h3>
              <p className="text-sm text-muted-foreground mt-1">
                Empowering Rwandan businesses with AI
              </p>
            </div>

            {/* Links */}
            <div className="flex items-center gap-6">
              <Link 
                to="/security" 
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                Security & Data Protection
              </Link>
            </div>

            {/* Copyright */}
            <div className="text-center">
              <p className="text-sm text-muted-foreground flex items-center gap-2">
                © {currentYear} Built with <Heart className="w-4 h-4 fill-primary text-primary" /> in Rwanda
              </p>
            </div>

          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
