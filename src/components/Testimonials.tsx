import { useEffect, useRef } from "react";
import { Construction, ArrowRight } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ScannerCarousel from "./ScannerCarousel";

gsap.registerPlugin(ScrollTrigger);

const Testimonials = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (textRef.current) {
        const textElements = textRef.current.children;
        gsap.fromTo(
          textElements,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power3.out",
            stagger: 0.08,
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 80%",
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="projects" ref={sectionRef} className="py-32 relative overflow-hidden bg-moss">
      {/* Background */}
      <div className="absolute inset-0 bg-grid opacity-10 mix-blend-overlay" />
      <div
        className="absolute top-0 right-0 w-[600px] h-[400px] pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at top right, rgba(204,88,51,0.15), transparent 65%)",
          filter: "blur(60px)",
        }}
      />

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div ref={textRef} className="max-w-3xl mx-auto text-center mb-16">
          <div>
            <span className="text-sm font-bold tracking-widest uppercase text-clay">Client Stories</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 font-sans text-cream">
            Real Results{" "}
            <span className="font-[Cormorant_Garamond] italic font-normal text-clay text-[1.1em]">
              Coming Soon
            </span>
          </h2>

          {/* Honest teaser block */}
          <div
            className="bg-white/5 backdrop-blur-md rounded-[2rem] p-8 max-w-2xl mx-auto text-left shadow-lg transition-transform duration-500 hover:-translate-y-2 hover:shadow-2xl hover:border-clay/50 group"
            style={{ border: "1px solid rgba(204,88,51,0.2)" }}
          >
            <div className="flex items-start gap-5">
              <div
                className="w-12 h-12 rounded-[1rem] flex items-center justify-center shrink-0 mt-0.5 bg-clay text-cream shadow-md group-hover:scale-110 transition-transform duration-300"
              >
                <Construction className="w-5 h-5" />
              </div>
              <div>
                <p className="text-base font-bold mb-2 text-cream font-sans">
                  Building with our first Kigali partners
                </p>
                <p className="text-sm text-cream/70 leading-relaxed font-sans mb-4">
                  We're currently deploying AI agents with salons, clinics, and hotels in Kigali.
                  Real ROI stories and verified results will be published here as our partnerships
                  mature. We believe in honest reporting — no invented stats, ever.
                </p>
                <a
                  href="#contact"
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="inline-flex items-center gap-2 text-sm font-semibold hover:gap-3 transition-all duration-300 text-clay hover:text-[#A94727]"
                >
                  Be one of our first partners
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Full-width scanner carousel */}
      <div className="relative fade-in">
        <div className="h-px w-full mb-0 opacity-40 bg-gradient-to-r from-transparent via-clay to-transparent" />
        <ScannerCarousel className="w-full" />
        <div className="h-px w-full mt-0 opacity-40 bg-gradient-to-r from-transparent via-clay to-transparent" />
      </div>

      <div className="container mx-auto px-6 relative z-10 mt-12">
        <p className="text-xs text-center text-cream/40 font-mono tracking-wide uppercase">
          Hover over cards · Drag to explore · Each card represents an industry sector we serve
        </p>
      </div>
    </section>
  );
};

export default Testimonials;
