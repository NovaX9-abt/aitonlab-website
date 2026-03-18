import { useEffect, useState, useRef } from "react";
import { ChevronDown } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const faqs = [
  {
    q: "Who are AitonLab's solutions designed for?",
    a: "Our solutions are built for service-based businesses in Kigali that handle regular customer inquiries — such as hotels, clinics, real estate agencies, schools, and professional service firms. We do not target micro-businesses without consistent customer request volumes.",
  },
  {
    q: "How much does an AitonLab AI Agent cost?",
    a: "Each solution includes:\n• A one-time setup fee (from $199 to $399 depending on complexity)\n• A monthly service plan (from $49 to $129 per month depending on usage)\n\nFinal pricing depends on conversation volume, integrations, and languages. There are no hidden fees.",
  },
  {
    q: "What does the monthly service include?",
    a: "The monthly service covers:\n• Hosting infrastructure\n• AI usage costs\n• Rwanda local phone number (for Voice AI Agents)\n• Monitoring and maintenance\n• Continuous improvements",
  },
  {
    q: "How long does setup take?",
    a: "Most projects go live within 3 to 5 days after project confirmation. We configure, test, and deliver a fully operational AI agent.",
  },
  {
    q: "In which languages do your agents operate?",
    a: "Voice AI Agents currently operate in English and French. WhatsApp and Smart Lead Agents can be configured in English, French, and Kinyarwanda based on business needs.",
  },
  {
    q: "Will I lose control of my customer conversations?",
    a: "No. You maintain full visibility over conversations and activity. The AI agent works for your business — not instead of it.",
  },
  {
    q: "Can the agent connect to my existing tools?",
    a: "Yes. We connect agents to WhatsApp Business, website forms, Google Sheets, and booking calendars. More advanced integrations can be added upon request.",
  },
  {
    q: "What happens if my conversation volume grows?",
    a: "Our solutions are fully scalable. You can upgrade your plan at any time without service interruption.",
  },
  {
    q: "Are my business data and conversations secure?",
    a: "Yes. All systems operate under SSL encryption with restricted access controls. We do not sell, share, or reuse client data under any circumstance.",
  },
  {
    q: "How do I get started with AitonLab?",
    a: "You can:\n• Chat with our AitonLab WhatsApp Agent at +250 793 581 847 to share your business needs.\n• Call Riley, our AI Voice Agent, at local RW number pending activation to describe your project by phone.\n• Fill out the contact form at the bottom of the homepage.\n• Or email us directly at contact@aitonlab.rw.\n\nRiley and the WhatsApp Agent collect your business information and you can book a call with an AitonLab consultant shortly.",
  },
];

// Render multi-line answers with bullet points
const renderAnswer = (text: string) => {
  const lines = text.split("\n");
  return lines.map((line, i) => {
    if (line.startsWith("•")) {
      return (
        <div key={i} className="flex items-start gap-2 mt-1.5 font-sans text-moss/70">
          <span className="mt-2 w-1.5 h-1.5 rounded-full shrink-0 bg-clay" />
          <span>{line.slice(1).trim()}</span>
        </div>
      );
    }
    if (line === "") return <div key={i} className="h-2" />;
    return <p key={i} className="font-sans text-moss/70">{line}</p>;
  });
};

const FAQ = () => {
  const [open, setOpen] = useState<number | null>(0);
  const sectionRef = useRef<HTMLDivElement>(null);
  const questionsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (questionsRef.current) {
        gsap.fromTo(
          questionsRef.current.children,
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
    <section id="faq" ref={sectionRef} className="py-32 relative overflow-hidden bg-cream">
      <div className="absolute inset-0 bg-noise opacity-20" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <div>
              <span className="text-sm font-bold tracking-widest uppercase text-clay block mb-4">FAQ</span>
            </div>
            <h2
              className="text-4xl md:text-5xl font-bold font-sans text-moss mb-5"
            >
              Common{" "}
              <span className="font-[Cormorant_Garamond] italic font-normal text-clay text-[1.1em]">
                Questions
              </span>
            </h2>
            <p className="text-sm text-moss/70 font-sans">
              Straightforward answers — no marketing fluff.
            </p>
          </div>

          {/* Accordion */}
          <div className="space-y-4" ref={questionsRef}>
            {faqs.map((faq, i) => (
              <div
                key={i}
                className={`bg-white rounded-2xl overflow-hidden transition-all duration-300 border ${open === i
                  ? "border-clay/30 shadow-lg"
                  : "border-moss/10 hover:border-moss/30 shadow-sm"
                  }`}
              >
                <button
                  onClick={() => setOpen(open === i ? null : i)}
                  className="w-full flex items-center justify-between gap-4 p-6 text-left focus:outline-none"
                  id={`faq-item-${i}`}
                >
                  <span className="text-base font-bold font-sans text-moss leading-snug">
                    <span className="inline-block mr-3 text-sm font-black font-mono text-clay/50">
                      {String(i + 1).padStart(2, "0")}.
                    </span>
                    {faq.q}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 shrink-0 transition-transform duration-300 ${open === i ? "rotate-180 text-clay" : "text-moss/40"
                      }`}
                  />
                </button>

                <div
                  className="grid transition-all duration-300 ease-in-out"
                  style={{ gridTemplateRows: open === i ? '1fr' : '0fr' }}
                >
                  <div className="overflow-hidden">
                    <div className="px-6 pb-6 pt-0">
                      <div className="h-px bg-gradient-to-r from-transparent via-moss/10 to-transparent mb-4 opacity-50" />
                      <div className="text-sm text-moss/70 leading-relaxed space-y-0.5 font-sans">
                        {renderAnswer(faq.a)}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
