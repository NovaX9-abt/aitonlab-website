import { Heart } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 border-t border-border/50">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-center items-center gap-6 md:gap-12">
            <div className="text-center md:text-left">
              <h3 className="text-xl font-bold text-gradient">AitonLab</h3>
              <p className="text-sm text-muted-foreground mt-1">
                Empowering Rwandan businesses with AI
              </p>
            </div>
            <div className="flex items-center gap-6">
              <Link to="/security" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Security & Data Protection
              </Link>
            </div>
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
