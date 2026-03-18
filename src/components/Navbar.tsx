import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import Logo from "./Logo";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 30);
    window.addEventListener("scroll", handleScroll, { passive: true });
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
    { label: "Home", action: () => { setIsMobileMenuOpen(false); window.scrollTo({ top: 0, behavior: "smooth" }); } },
    { label: "Pricing", action: () => scrollToSection("services") },
    { label: "Contact", action: () => scrollToSection("contact") },
    { label: "FAQ", action: () => scrollToSection("faq") },
  ];

  return (
    <div className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4 pointer-events-none">
      <nav
        className={`pointer-events-auto transition-all duration-500 rounded-[2rem] overflow-hidden ${isScrolled
          ? "bg-cream/60 backdrop-blur-xl border border-charcoal/5 shadow-elegant"
          : "bg-transparent"
          } w-full max-w-5xl`}
      >
        <div className="px-6 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center">
            <Logo />
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={link.action}
                className="text-sm font-medium text-charcoal/70 hover:text-charcoal transition-transform duration-300 hover:-translate-y-[1px] relative group"
              >
                {link.label}
                <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-clay transition-all duration-300 group-hover:w-full" />
              </button>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-4">
            <span className="text-xs font-semibold text-moss tracking-wide uppercase mr-4 hidden lg:inline-flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-clay animate-pulse" />
              Active in Kigali, Rwanda
            </span>
            <button
              onClick={() => scrollToSection("contact")}
              className="bg-clay hover:bg-[#A94727] text-cream text-sm font-semibold px-6 py-2.5 rounded-[2rem] transition-all duration-300 hover:scale-[1.03] hover:-translate-y-1 shadow-md"
              style={{ transitionTimingFunction: "cubic-bezier(0.25, 0.46, 0.45, 0.94)" }}
            >
              Work with Us
            </button>
          </div>

          <button
            className="md:hidden p-2 rounded-lg text-charcoal hover:bg-black/5 transition-colors flex shrink-0"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {
          isMobileMenuOpen && (
            <div className="md:hidden px-6 py-6 border-t border-charcoal/10 bg-cream/95 backdrop-blur-xl">
              <div className="flex flex-col gap-5">
                {navLinks.map((link) => (
                  <button
                    key={link.label}
                    onClick={link.action}
                    className="text-sm font-medium text-charcoal hover:text-clay transition-colors py-1 text-left"
                  >
                    {link.label}
                  </button>
                ))}
                <span className="text-xs font-semibold text-moss tracking-wide uppercase mt-2">
                  Active in Kigali, Rwanda
                </span>
                <button
                  onClick={() => { scrollToSection("contact"); setIsMobileMenuOpen(false); }}
                  className="bg-clay text-cream text-sm font-semibold px-5 py-3 rounded-[2rem] mt-2 shadow-md w-full text-center hover:bg-[#A94727]"
                >
                  Work with Us
                </button>
              </div>
            </div>
          )
        }
      </nav >
    </div >
  );
};

export default Navbar;
