import { useState } from "react";
import { Zap, Shield, CheckCircle2 } from "lucide-react";
import SecurityModal from "./SecurityModal";
import TermsModal from "./TermsModal";

const Footer = () => {
  const [securityOpen, setSecurityOpen] = useState(false);
  const [termsOpen, setTermsOpen] = useState(false);

  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <>
      <SecurityModal isOpen={securityOpen} onClose={() => setSecurityOpen(false)} />
      <TermsModal isOpen={termsOpen} onClose={() => setTermsOpen(false)} />

      <footer className="relative border-t border-moss/10 pt-20 pb-10 overflow-hidden bg-cream">
        <div className="absolute inset-0 bg-noise opacity-20 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-full h-[300px] bg-gradient-to-t from-moss/5 to-transparent pointer-events-none" />

        <div className="container mx-auto px-6 relative z-10">
          <div className="grid md:grid-cols-3 gap-12 mb-16">

            {/* Brand */}
            <div className="space-y-5">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-moss flex items-center justify-center shadow-md">
                  <Zap className="w-4 h-4 text-cream" />
                </div>
                <span className="text-2xl font-bold font-sans text-moss tracking-tight">
                  AitonLab
                </span>
              </div>
              <p className="text-sm text-moss/70 max-w-xs leading-relaxed font-sans">
                Autonomous AI agents that handle calls, WhatsApp, leads & bookings 24/7.
                Built for Kigali, deployed for East Africa.
              </p>

              <div className="pt-2">
                <div className="inline-flex items-center gap-2.5 px-3 py-1.5 rounded-full bg-charcoal/5 border border-moss/10">
                  <div className="w-2 h-2 rounded-full bg-[#10B981] animate-pulse" />
                  <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-moss">System Operational</span>
                </div>
              </div>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-xs font-bold font-mono uppercase tracking-widest text-clay mb-5">
                Contact
              </h4>
              <div className="text-sm text-moss/70 space-y-3 font-sans font-medium">
                <p>📞 +250 793 581 847</p>
                <p>✉️ <a href="mailto:contact@aitonlab.rw" className="hover:text-clay transition-colors">contact@aitonlab.rw</a></p>
                <p>📍 Kigali, Rwanda</p>
              </div>
            </div>

            {/* Navigation */}
            <div>
              <h4 className="text-xs font-bold font-mono uppercase tracking-widest text-clay mb-5">
                Navigation
              </h4>
              <ul className="space-y-3">
                {[
                  { label: "Home", id: "home" },
                  { label: "Pricing", id: "services" },
                  { label: "FAQ", id: "faq" },
                  { label: "Contact", id: "contact" },
                ].map((l) => (
                  <li key={l.label}>
                    <button
                      onClick={() => {
                        window.location.hash = "";
                        setTimeout(() => scrollTo(l.id === "home" ? "root" : l.id), 10);
                        if (l.id === "home") window.scrollTo({ top: 0, behavior: "smooth" });
                      }}
                      className="text-sm text-moss/70 hover:text-clay transition-colors font-sans font-medium"
                    >
                      {l.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="h-px w-full bg-gradient-to-r from-transparent via-moss/10 to-transparent mb-8" />
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-mono text-moss/50 uppercase tracking-wide">
            <span>© 2026 AitonLab. All rights reserved. Built in Kigali RW</span>
            <div className="flex gap-8 items-center">
              <button
                id="footer-security-link"
                onClick={() => setSecurityOpen(true)}
                className="hover:text-clay transition-colors flex items-center gap-1.5 group font-bold"
              >
                <Shield className="w-3.5 h-3.5 group-hover:scale-110 transition-transform" />
                Security & Data Protection
              </button>
              <button onClick={() => setTermsOpen(true)} className="hover:text-clay transition-colors font-bold">
                Terms of Service
              </button>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
