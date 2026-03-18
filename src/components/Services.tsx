import { useEffect, useState, useRef } from "react";
import { MessageSquare, Sparkles, Phone, ArrowRight, Check } from "lucide-react";
import { useNavigate } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const DiagnosticShuffler = () => {
  const [labels, setLabels] = useState([
    "Missed calls handled",
    "Lead qualification",
    "Booking auto"
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      setLabels((prev) => {
        const newArr = [...prev];
        const last = newArr.pop();
        if (last) newArr.unshift(last);
        return newArr;
      });
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-[80px] w-full flex items-center justify-center my-6">
      {labels.map((label, index) => (
        <div
          key={label}
          className="absolute w-[95%] left-[2.5%] right-[2.5%] p-3 rounded-xl bg-cream border border-moss/10 shadow-sm flex items-center justify-between text-sm font-semibold text-moss transition-all duration-700"
          style={{
            zIndex: labels.length - index,
            transform: `translateY(${index * 12 - 12}px) scale(${1 - index * 0.04})`,
            opacity: 1 - index * 0.2,
            transitionTimingFunction: "cubic-bezier(0.34, 1.56, 0.64, 1)",
          }}
        >
          <span>{label}</span>
          <Check className="w-4 h-4 text-clay" />
        </div>
      ))}
    </div>
  );
};

const TelemetryTypewriter = () => {
  const messages = [
    "Lead captured from Web Form...",
    "Qualifying intent...",
    "High value lead detected.",
    "Synced to CRM successfully."
  ];
  const [text, setText] = useState("");
  const [msgIdx, setMsgIdx] = useState(0);

  useEffect(() => {
    let charIdx = 0;
    const currentMsg = messages[msgIdx];
    let typingInterval = setInterval(() => {
      setText(currentMsg.slice(0, charIdx));
      charIdx++;
      if (charIdx > currentMsg.length) {
        clearInterval(typingInterval);
        setTimeout(() => {
          setMsgIdx((prev) => (prev + 1) % messages.length);
        }, 1500);
      }
    }, 50);

    return () => clearInterval(typingInterval);
  }, [msgIdx]);

  return (
    <div className="my-6 p-4 rounded-xl bg-charcoal/5 border border-moss/10 font-mono text-xs text-moss min-h-[5.5rem] flex flex-col justify-between">
      <div className="flex items-center gap-2 mb-2">
        <span className="w-2 h-2 rounded-full bg-clay animate-pulse" />
        <span className="font-bold text-clay tracking-wider uppercase" style={{ fontSize: "10px" }}>Live Feed</span>
      </div>
      <div>
        <span className="opacity-70">$ SYSTEM: </span>
        <span className="font-medium">{text}</span>
        <span className="inline-block w-1.5 h-3 ml-1 bg-clay animate-pulse" />
      </div>
    </div>
  );
};

const CursorProtocolScheduler = () => {
  const days = ["S", "M", "T", "W", "T", "F", "S"];
  const [activeDay, setActiveDay] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const cursorRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ repeat: -1 });

      tl.set(cursorRef.current, { x: 0, y: 50, opacity: 0, scale: 1 });
      tl.to(cursorRef.current, { opacity: 1, duration: 0.3 });

      // Move to Wednesday (index 3) roughly
      tl.to(cursorRef.current, { x: 130, y: 15, duration: 1, ease: "power2.inOut" });
      tl.to(cursorRef.current, { scale: 0.8, duration: 0.1 });
      tl.call(() => setActiveDay(3));
      tl.to(cursorRef.current, { scale: 1, duration: 0.1 });

      // Move to Save button
      tl.to(cursorRef.current, { x: 230, y: 65, duration: 0.8, ease: "power2.inOut", delay: 0.5 });
      tl.to(cursorRef.current, { scale: 0.8, duration: 0.1 });
      tl.to(cursorRef.current, { opacity: 0, scale: 1, duration: 0.3, delay: 0.2 });
      tl.call(() => setActiveDay(null));
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="my-6 relative p-4 rounded-xl bg-charcoal/5 border border-moss/10">
      <div className="flex justify-between mb-4">
        {days.map((d, i) => (
          <div
            key={i}
            className={`w-7 h-7 sm:w-8 sm:h-8 rounded flex items-center justify-center text-xs font-bold transition-all duration-300 ${activeDay === i ? "bg-clay text-cream shadow-md" : "bg-white border border-charcoal/10 text-moss"
              }`}
          >
            {d}
          </div>
        ))}
      </div>
      <div className="flex justify-end">
        <div className="px-3 py-1.5 rounded-lg bg-moss text-cream text-[10px] font-bold uppercase transition-colors duration-300">
          Save Schedule
        </div>
      </div>
      <svg
        ref={cursorRef}
        className="absolute top-0 left-0 w-6 h-6 z-10 pointer-events-none drop-shadow-md"
        fill="none"
        stroke="#1A1A1A"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        viewBox="0 0 24 24"
      >
        <path fill="#fff" d="m3 3 7.07 16.97 2.51-7.39 7.39-2.51L3 3z" />
        <path d="m13 13 6 6" />
      </svg>
    </div>
  );
};

const services = [
  {
    icon: Phone,
    badge: "Most Popular",
    title: "Voice AI Agent",
    price: "Setup: $399–$499",
    monthly: "Monthly: Starter $129 (~150 min) | Growth $249 (~400 min) | Pro $399 (~900 min)",
    tagline: "Never miss a call again",
    description: "A custom AI voice assistant that handles inbound customer calls 24/7 in English and French. It qualifies leads, schedules appointments, sends follow-up messages — completely autonomously.",
    problemSolved: "Missed calls after hours, overloaded receptionists, lost leads.",
    forWho: "Hotels, clinics, salons, dentaires, immobilier",
    whatYouGet: [
      "Custom voice agent trained on your business",
      "Rwanda local phone number included",
      "Lead qualification & appointment booking",
      "Call logs & Airtable/CRM integration",
      "Automated follow-up via SMS/WhatsApp",
    ],
    route: "/services/voice-ai",
    InteractionComponent: DiagnosticShuffler,
    note: ""
  },
  {
    icon: Sparkles,
    badge: "Best Value",
    title: "Smart Lead Assistant",
    price: "Setup: $249–$349",
    monthly: "Monthly: From $99",
    tagline: "Turn every inquiry into a conversation",
    description: "Captures every incoming lead from your website, qualifies their intent, and triggers automated follow-ups. Integrates with your existing CRM and notification tools.",
    problemSolved: "Slow follow-up on web leads, manual qualification, missed opportunities.",
    forWho: "Any service business with web presence, forms, or email inquiries",
    whatYouGet: [
      "Lead capture widget or form integration",
      "Qualification flow (custom questions)",
      "Google Sheets & CRM integration",
      "Auto follow-up sequences",
      "Analytics dashboard",
    ],
    route: "/services/email-crm",
    InteractionComponent: TelemetryTypewriter,
    note: ""
  },
  {
    icon: MessageSquare,
    badge: null,
    title: "WhatsApp Automation",
    price: "Setup: $199–$299",
    monthly: "Monthly: From $99",
    tagline: "Your business on WhatsApp, automated",
    description: "Automate customer conversations, bookings, and support on WhatsApp Business. Available in English, French, and Kinyarwanda. The AI responds 24/7, books appointments, and sends smart reminders.",
    problemSolved: "Manual WhatsApp replies, overload, missed messages, no-shows.",
    forWho: "Restaurants, clinics, real estate, salons",
    whatYouGet: [
      "WhatsApp Business API integration",
      "Custom conversation flows",
      "Booking & reminder automation",
      "Multilingual support (EN/FR/Kinyarwanda)",
      "Broadcast & follow-up campaigns",
    ],
    route: "/services/whatsapp",
    InteractionComponent: CursorProtocolScheduler,
    note: ""
  },
];

const Services = () => {
  const navigate = useNavigate();
  const sectionRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Entrance animations
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

      if (cardsRef.current) {
        const cards = cardsRef.current.children;
        gsap.fromTo(
          cards,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power3.out",
            stagger: 0.15,
            scrollTrigger: {
              trigger: cardsRef.current,
              start: "top 85%",
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <section id="services" ref={sectionRef} className="py-32 relative overflow-hidden bg-cream">
        {/* Background Overlay */}
        <div className="absolute inset-0 bg-grid opacity-30 mix-blend-multiply" />

        <div className="container mx-auto px-6 relative z-10">
          {/* Header */}
          <div ref={textRef} className="max-w-3xl mx-auto text-center mb-20">
            <div>
              <span className="text-sm font-bold tracking-widest uppercase text-clay">Our Services</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 font-sans text-moss">
              Automation That{" "}
              <span className="font-[Cormorant_Garamond] italic font-normal text-clay text-[1.1em]">
                Actually Works
              </span>
            </h2>
            <p className="text-lg text-moss/70 font-sans">
              Professional AI automation for service businesses in Kigali. Transparent pricing, no hidden fees.
            </p>
          </div>

          {/* Cards */}
          <div ref={cardsRef} className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {services.map((s, i) => {
              const Icon = s.icon;
              const Interaction = s.InteractionComponent;
              return (
                <div
                  key={i}
                  className="bg-white rounded-[2rem] p-8 flex flex-col relative overflow-hidden group shadow-lg border border-moss/10 transition-transform duration-500 hover:-translate-y-2 hover:border-clay/30 hover:shadow-2xl"
                >
                  {/* Badge */}
                  {s.badge && (
                    <span className="absolute top-6 right-6 text-[10px] font-bold uppercase tracking-wider px-3 py-1.5 rounded-full bg-clay/10 text-clay border border-clay/20">
                      {s.badge}
                    </span>
                  )}

                  {/* Icon */}
                  <div className="w-12 h-12 rounded-[1rem] flex items-center justify-center mb-6 bg-moss text-cream shadow-md group-hover:scale-110 group-hover:bg-clay transition-all duration-300">
                    <Icon className="w-5 h-5" />
                  </div>

                  {/* Title + tagline */}
                  <h3 className="text-xl font-bold mb-1 text-moss">{s.title}</h3>
                  <p className="text-xs font-semibold mb-4 text-clay">{s.tagline}</p>

                  <Interaction />

                  {/* Pricing */}
                  <div className="flex items-baseline gap-2 mt-2 mb-4">
                    <span className="text-lg font-bold text-moss">{s.price}</span>
                    <span className="text-xs text-moss/60 font-mono">· {s.monthly}</span>
                  </div>

                  {/* Description */}
                  <p className="text-sm text-moss/70 leading-relaxed mb-6 font-sans border-b border-moss/10 pb-6">{s.description}</p>

                  {/* Problem solved */}
                  <div className="bg-[#FAF9F5] rounded-[1rem] p-4 mb-6 border border-moss/5">
                    <p className="text-[10px] font-bold uppercase tracking-wider mb-2 text-clay">Solves</p>
                    <p className="text-xs text-moss/80 font-sans">{s.problemSolved}</p>
                  </div>

                  {/* What you get */}
                  <ul className="space-y-2.5 mb-8 flex-1">
                    {s.whatYouGet.map((f, j) => (
                      <li key={j} className="flex items-start gap-2.5 text-xs text-moss/80 font-sans">
                        <Check className="w-3.5 h-3.5 shrink-0 mt-0.5 text-clay" />
                        {f}
                      </li>
                    ))}
                  </ul>

                  {/* For who */}
                  <p className="text-[11px] text-moss/70 italic mb-6">
                    <span className="font-semibold not-italic text-moss">Best for: </span>
                    {s.forWho}
                  </p>

                  {/* CTAs */}
                  <div className="space-y-3 mt-auto">
                    <button
                      onClick={() => navigate(s.route)}
                      className="w-full flex items-center justify-center gap-2 text-sm font-semibold py-3.5 rounded-[2rem] transition-all duration-300 bg-clay text-cream hover:bg-[#A94727] hover:scale-[1.03] shadow-md"
                      style={{ transitionTimingFunction: "cubic-bezier(0.25, 0.46, 0.45, 0.94)" }}
                    >
                      Learn More <ArrowRight className="w-4 h-4" />
                    </button>
                    <button
                      onClick={scrollToContact}
                      className="w-full flex items-center justify-center gap-1.5 text-sm font-semibold py-3.5 rounded-[2rem] border border-moss/20 text-moss hover:bg-moss/5 transition-all duration-300 hover:scale-[1.03]"
                      style={{ transitionTimingFunction: "cubic-bezier(0.25, 0.46, 0.45, 0.94)" }}
                    >
                      Connect with Team <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
          {/* How Our Pricing Works */}
          <div className="max-w-4xl mx-auto mt-20 pt-16 border-t border-moss/10">
            <h3 className="text-xl md:text-2xl font-bold font-sans text-moss mb-6">
              How Our Pricing Works
            </h3>
            <ul className="grid md:grid-cols-2 gap-x-8 gap-y-4">
              {[
                "30% setup fee upfront to confirm kickoff and resource allocation (70% after trial/delivery).",
                "14-day paid trial to test in real conditions.",
                "If pilot does not meet agreed KPIs, refund service fee (infrastructure, telecom & usage costs non-refundable).",
                "Monthly plans include telecom infra (local RW numbers), hosting, AI/LLM credits.",
                "Usage-based overage for high call/message volumes."
              ].map((term, tIdx) => (
                <li key={tIdx} className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-clay mt-2 shrink-0" />
                  <span className="text-sm text-moss/80 leading-relaxed">{term}</span>
                </li>
              ))}
            </ul>
            <div className="mt-12 text-center items-center flex justify-center">
              <button
                onClick={scrollToContact}
                className="w-full md:w-auto inline-flex items-center justify-center gap-2.5 text-cream font-semibold px-8 py-4 rounded-[2rem] transition-all duration-300 bg-clay hover:bg-[#A94727] shadow-md hover:scale-[1.03]"
                style={{ transitionTimingFunction: "cubic-bezier(0.25, 0.46, 0.45, 0.94)" }}
              >
                Book Free Consultation
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
