import { useEffect } from "react";
import { Shield, Zap, Clock, Globe, BarChart3, HeadphonesIcon } from "lucide-react";
import AOS from "aos";

const reasons = [
  {
    icon: Clock,
    color: "purple",
    title: "Always On, Never Off",
    description: "Our AI agents work 24/7/365 — no holidays, no sick days, no missed calls. Your business never sleeps.",
  },
  {
    icon: Zap,
    color: "green",
    title: "Deploy in 3–5 Days",
    description: "From onboarding to live in 3–5 business days. We handle the setup, training, and integration for you.",
  },
  {
    icon: Globe,
    color: "purple",
    title: "Multi-channel Reach",
    description: "Voice calls, WhatsApp, email, SMS — one unified AI brain that engages customers wherever they are.",
  },
  {
    icon: Shield,
    color: "green",
    title: "Enterprise Security",
    description: "End-to-end encryption, GDPR-conscious architecture, and zero data retention on call recordings.",
  },
  {
    icon: BarChart3,
    color: "purple",
    title: "Real-time Analytics",
    description: "See every call outcome, lead score, and booking in a live dashboard. Know your ROI down to the cent.",
  },
  {
    icon: HeadphonesIcon,
    color: "green",
    title: "Local Founder in Kigali",
    description: "Based in Kigali, our founder speaks your language and understands East African business culture.",
  },
];

const WhyChooseUs = () => {
  useEffect(() => {
    AOS.refresh();
  }, []);

  return (
    <section id="about" className="py-32 relative overflow-hidden bg-cream">
      {/* Background */}
      <div
        className="absolute inset-0 pointer-events-none opacity-20 bg-noise"
      />

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-20">
          <div data-aos="fade-up">
            <span className="text-sm font-bold tracking-widest uppercase text-clay block mb-4">Built for African Business</span>
          </div>
          <h2
            data-aos="fade-up"
            data-aos-delay="100"
            className="text-4xl md:text-5xl font-bold font-sans text-moss mb-6"
          >
            Why{" "}
            <span className="font-[Cormorant_Garamond] italic font-normal text-clay text-[1.1em]">
              AitonLab
            </span>
          </h2>
          <p data-aos="fade-up" data-aos-delay="200" className="text-lg text-moss/70 font-sans">
            We're not a generic SaaS tool. We build bespoke AI systems tailored for how business actually works in Kigali.
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {reasons.map((r, i) => {
            const Icon = r.icon;
            const isPurple = r.color === "purple";
            return (
              <div
                key={i}
                data-aos="fade-up"
                data-aos-delay={i * 80}
                className="bg-white rounded-[2rem] p-8 group relative overflow-hidden border border-moss/10 shadow-lg hover:-translate-y-2 hover:shadow-2xl hover:border-clay/30 transition-all duration-500"
              >
                <div
                  className="w-12 h-12 rounded-[1rem] flex items-center justify-center mb-6 text-cream bg-moss shadow-md group-hover:scale-110 group-hover:bg-clay transition-all duration-300"
                >
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-bold font-sans text-moss mb-3">
                  {r.title}
                </h3>
                <p className="text-sm text-moss/70 leading-relaxed font-sans">{r.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
