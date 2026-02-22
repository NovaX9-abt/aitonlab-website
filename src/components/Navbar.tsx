import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    setIsMobileMenuOpen(false);
    if (location.pathname !== "/") {
      window.location.href = `/#${sectionId}`;
    } else {
      document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
    }
  };

  const navLinks = [
    { label: "Home", to: "/" },
    { label: "Pricing", to: "/pricing" },
    { label: "FAQ", action: () => scrollToSection("faq") },
    { label: "Contact", action: () => scrollToSection("contact") },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? "glass shadow-elegant" : "bg-transparent"}`}>
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="group">
            <span className="text-2xl font-bold text-gradient">AitonLab</span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) =>
              link.to ? (
                <Link key={link.label} to={link.to} className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
                  {link.label}
                </Link>
              ) : (
                <button key={link.label} onClick={link.action} className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
                  {link.label}
                </button>
              )
            )}
            <Button variant="outline" size="sm" className="border-primary/30 hover:border-primary hover:bg-primary/10" onClick={() => scrollToSection("contact")}>
              Contact us
            </Button>
          </div>

          <button
            className="md:hidden p-2 rounded-lg border border-border hover:bg-muted transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden py-6 animate-fade-in border-t border-border/50">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) =>
                link.to ? (
                  <Link key={link.label} to={link.to} onClick={() => setIsMobileMenuOpen(false)} className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors py-2">
                    {link.label}
                  </Link>
                ) : (
                  <button key={link.label} onClick={link.action} className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors py-2 text-left">
                    {link.label}
                  </button>
                )
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
