import { useEffect, useState } from "react";
import { ArrowRight, ChevronDown, Mic } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";
import AIOrb from "./AIOrb";
import RileyModal from "./RileyModal";

const Hero = () => {
  const [rileyOpen, setRileyOpen] = useState(false);

  useEffect(() => {
    AOS.init({ once: true, duration: 800, easing: "ease-out-cubic" });
  }, []);

  const scrollToServices = () =>
    document.getElementById("services")?.scrollIntoView({ behavior: "smooth" });

  const scrollToContact = () =>
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });

  return (
    <>
      <RileyModal isOpen={rileyOpen} onClose={() => setRileyOpen(false)} />

      <section className="relative min-h-screen flex items-center overflow-hidden pt-20">
        {/* ── Background layers ── */}
        <div
          className="absolute inset-0 bg-cover bg-center opacity-40"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?auto=format&fit=crop&q=80')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-[#2E4036]/80 to-[#1A1A1A]/90" />
        <div className="absolute inset-0 bg-grid opacity-30" />
        <div
          className="absolute top-1/3 left-0 w-[500px] h-[500px] rounded-full opacity-30 animate-pulse-glow"
          style={{
            background: "radial-gradient(circle, #CC583322, transparent 70%)",
            filter: "blur(80px)",
          }}
        />

        <div className="container mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-8 items-center min-h-[calc(100vh-80px)]">

            {/* ── Left: Content ── */}
            <div className="space-y-8 py-20 lg:py-0">

              {/* Status badge */}
              <div data-aos="fade-right" data-aos-delay="100">
                <span className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-clay/30 bg-moss/40 backdrop-blur-md">
                  <span className="w-2 h-2 rounded-full bg-clay animate-pulse" />
                  <span className="text-xs font-semibold text-cream tracking-wide uppercase">
                    Active in Kigali · Rwanda
                  </span>
                </span>
              </div>

              {/* Headline */}
              <div data-aos="fade-right" data-aos-delay="200">
                <h1 className="text-6xl sm:text-7xl xl:text-[5.5rem] leading-[1.05] tracking-tight">
                  <span className="font-bold font-sans text-cream block mb-2">AI Agents That</span>
                  <span className="font-bold font-sans text-cream block mb-4">Work </span>
                  <span className="font-[Cormorant_Garamond] italic font-normal text-clay text-[1.25em] leading-[0.9] block">
                    While You
                    <br />
                    Sleep.
                  </span>
                </h1>
              </div>

              {/* Subtitle */}
              <div data-aos="fade-right" data-aos-delay="320">
                <p className="text-lg md:text-xl text-cream/70 max-w-lg leading-relaxed font-sans">
                  Autonomous AI for calls, WhatsApp, leads & bookings{" "}
                  <span className="text-cream font-semibold">24/7</span> – no missed
                  opportunities in{" "}
                  <span className="text-clay font-semibold">Kigali</span>.
                </p>
              </div>

              {/* CTA Buttons */}
              <div
                data-aos="fade-right"
                data-aos-delay="420"
                className="flex flex-col sm:flex-row flex-wrap gap-4 mt-8"
              >
                {/* Primary: Book Demo */}
                <button
                  id="hero-book-demo"
                  onClick={scrollToContact}
                  className="bg-clay hover:bg-[#A94727] text-cream font-semibold px-8 py-4 rounded-[2rem] text-base transition-transform duration-300 hover:scale-[1.03] shadow-lg flex items-center justify-center gap-2.5"
                  style={{ transitionTimingFunction: "cubic-bezier(0.25, 0.46, 0.45, 0.94)" }}
                >
                  Book Free Demo
                  <ArrowRight className="w-5 h-5" />
                </button>

                {/* Secondary: Riley voice */}
                <div className="flex flex-col items-start gap-1">
                  <button
                    id="hero-riley-cta"
                    onClick={() => setRileyOpen(true)}
                    className="group flex flex-1 w-full items-center justify-center gap-2.5 font-semibold px-6 py-4 rounded-[2rem] text-base border border-moss hover:border-clay hover:bg-moss/20 transition-all duration-300 text-cream backdrop-blur-md hover:-translate-y-1"
                  >
                    <Mic className="w-5 h-5 text-clay" />
                    Talk to Riley – Free Voice Demo
                  </button>
                  <span className="text-xs text-cream/50 ml-4 font-mono">
                    Live AI voice demo &middot; Ask anything
                  </span>
                </div>
              </div>

              {/* Stats row */}
              <div data-aos="fade-up" data-aos-delay="540" className="flex flex-wrap gap-8 pt-6 mt-4 border-t border-moss/30">
                {[
                  { value: "24/7", label: "AI Calls" },
                  { value: "+98%", label: "WhatsApp" },
                  { value: "99.9%", label: "Uptime" },
                ].map((s, i) => (
                  <div key={i} className="flex flex-col">
                    <span className="text-3xl font-bold font-mono text-cream">
                      {s.value}
                    </span>
                    <span className="text-sm text-clay mt-1 uppercase tracking-wider font-semibold">{s.label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* ── Right: 3D AI Orb (desktop) ── */}
            <div
              className="relative hidden lg:flex items-center justify-center"
              data-aos="fade-left"
              data-aos-delay="300"
              style={{ height: "600px" }}
            >
              <AIOrb />
            </div>

            {/* ── Mobile Orb (visible below lg) ── */}
            <div
              className="relative flex lg:hidden items-center justify-center py-4"
              data-aos="fade-up"
              data-aos-delay="300"
              style={{ height: "280px" }}
            >
              <div className="relative w-[240px] h-[240px]">
                {/* Glow */}
                <div
                  className="absolute inset-0 rounded-full"
                  style={{
                    background: "radial-gradient(circle, rgba(46,64,54,0.3), rgba(204,88,51,0.15) 50%, transparent 75%)",
                    filter: "blur(30px)",
                    animation: "orb-pulse 5s ease-in-out infinite",
                  }}
                />
                {/* Outer ring */}
                <div
                  className="absolute inset-0 rounded-full"
                  style={{
                    border: "1px solid rgba(46,64,54,0.25)",
                    animation: "spin-slow 25s linear infinite",
                  }}
                />
                {/* Middle ring */}
                <div
                  className="absolute rounded-full"
                  style={{
                    inset: "20px",
                    border: "1px solid rgba(204,88,51,0.2)",
                    animation: "spin-slow 18s linear infinite reverse",
                  }}
                />
                {/* Core sphere */}
                <div
                  className="absolute rounded-full"
                  style={{
                    inset: "50px",
                    background: "radial-gradient(circle at 35% 35%, #8FA89A, #2E4036 45%, #1A241F 80%, #0F1613)",
                    boxShadow: "0 0 40px rgba(46,64,54,0.5), 0 0 80px rgba(46,64,54,0.2), inset -12px -12px 24px rgba(15,22,19,0.8), inset 6px 6px 18px rgba(143,168,154,0.3)",
                    animation: "float-y 7s ease-in-out infinite",
                  }}
                />
                {/* Specular highlight */}
                <div
                  className="absolute rounded-full"
                  style={{
                    top: "58px",
                    left: "68px",
                    width: "50px",
                    height: "36px",
                    background: "radial-gradient(ellipse at 40% 40%, rgba(255,255,255,0.35), transparent 70%)",
                    filter: "blur(3px)",
                  }}
                />
                {/* Orbiting dots */}
                {[0, 120, 240].map((deg, i) => (
                  <div
                    key={i}
                    className="absolute inset-0 rounded-full"
                    style={{ animation: `spin-slow ${12 + i * 3}s linear infinite ${i % 2 ? "reverse" : ""}` }}
                  >
                    <div
                      className="absolute rounded-full"
                      style={{
                        width: 5,
                        height: 5,
                        top: -2,
                        left: "50%",
                        marginLeft: -2,
                        background: i % 2 === 0 ? "#8FA89A" : "#D67B5A",
                        boxShadow: i % 2 === 0
                          ? "0 0 8px #8FA89A, 0 0 16px rgba(46,64,54,0.5)"
                          : "0 0 6px #D67B5A, 0 0 12px rgba(204,88,51,0.5)",
                      }}
                    />
                  </div>
                ))}
                {/* Floating labels */}
                {[
                  { top: "-8px", left: "-16px", label: "AI Calls", value: "24/7", color: "moss" },
                  { top: "-8px", right: "-16px", label: "WhatsApp", value: "↑ 98%", color: "clay" },
                  { bottom: "-8px", left: "4px", label: "Leads", value: "Auto", color: "clay" },
                  { bottom: "-8px", right: "4px", label: "Uptime", value: "99.9%", color: "moss" },
                ].map((card, i) => (
                  <div
                    key={i}
                    className="absolute bg-white/5 backdrop-blur-md rounded-lg px-2 py-1.5 pointer-events-none"
                    style={{
                      top: (card as any).top,
                      left: (card as any).left,
                      right: (card as any).right,
                      bottom: (card as any).bottom,
                      animation: `float-y ${5 + i * 0.8}s ease-in-out infinite`,
                      animationDelay: `${i * 0.5}s`,
                      border: `1px solid ${card.color === "moss" ? "rgba(46,64,54,0.4)" : "rgba(204,88,51,0.4)"}`,
                    }}
                  >
                    <p className="text-[10px] text-cream/70 leading-none">{card.label}</p>
                    <p
                      className="text-xs font-bold font-mono leading-tight"
                      style={{ color: card.color === "moss" ? "#8FA89A" : "#D67B5A" }}
                    >
                      {card.value}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <button
          onClick={scrollToServices}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-muted-foreground hover:text-foreground transition-colors"
        >
          <span className="text-xs font-medium tracking-widest uppercase opacity-60">Scroll</span>
          <ChevronDown className="w-5 h-5 animate-bounce opacity-60" />
        </button>

        <div className="absolute bottom-0 left-0 right-0 glow-line opacity-40" />
      </section>
    </>
  );
};

export default Hero;
