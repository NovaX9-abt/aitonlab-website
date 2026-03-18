import { Sparkles, Check, ArrowRight, ArrowLeft, CheckCircle2, Mic } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const EmailCRMAutomation = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-cream">
      <Navbar />

      {/* Hero */}
      <section className="bg-charcoal pt-28 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-20" />
        <div
          className="absolute bottom-0 left-1/2 w-[600px] h-[300px] rounded-full opacity-20 pointer-events-none"
          style={{ background: "radial-gradient(circle, #CC583322, transparent 70%)", filter: "blur(80px)", transform: "translateX(-50%)" }}
        />
        <div className="container mx-auto px-6 relative z-10">
          <button
            onClick={() => navigate(-1)}
            className="inline-flex items-center gap-2 text-sm text-cream/50 hover:text-cream/80 transition-colors duration-300 mb-10 font-mono uppercase tracking-wider"
          >
            <ArrowLeft className="w-4 h-4" /> Back
          </button>
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-[1rem] bg-clay flex items-center justify-center shadow-md">
                <Sparkles className="w-5 h-5 text-cream" />
              </div>
              <span className="text-xs font-bold tracking-widest uppercase text-clay font-mono">Smart Lead Assistant</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-cream mb-6 leading-[1.05] tracking-tight">
              Every Lead.{" "}
              <span className="font-[Cormorant_Garamond] italic font-normal text-clay text-[1.1em]">Captured.</span>
            </h1>
            <p className="text-lg text-cream/70 max-w-2xl leading-relaxed font-sans">
              Captures every incoming lead from your website, qualifies their intent, and triggers automated follow-ups — integrating with your CRM and notification tools so nothing slips through.
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <main className="container mx-auto px-6 py-20">
        <div className="max-w-4xl mx-auto space-y-8">

          {/* Problem */}
          <div className="bg-white rounded-[2rem] p-8 border border-moss/10 shadow-sm">
            <p className="text-xs font-bold uppercase tracking-widest text-clay mb-4 font-mono">The Problem</p>
            <h2 className="text-2xl font-bold text-moss mb-4">Most leads never become clients — not because they weren't interested, but because no one followed up in time.</h2>
            <p className="text-moss/70 leading-relaxed mb-4 font-sans">
              A potential client fills out your contact form on a Thursday evening. By Friday morning, your inbox has 30 new emails. Their message gets buried. You find it 3 days later. They've already hired someone else.
            </p>
            <p className="text-moss/70 leading-relaxed font-sans">
              Smart Lead Assistant fixes this. The moment a lead arrives — through your website form, email, or WhatsApp — the system captures it, qualifies their intent, and triggers the right follow-up automatically. You focus on closing, not chasing.
            </p>
          </div>

          {/* How it works */}
          <div className="bg-white rounded-[2rem] p-8 border border-moss/10 shadow-sm">
            <p className="text-xs font-bold uppercase tracking-widest text-clay mb-4 font-mono">How It Works</p>
            <h2 className="text-2xl font-bold text-moss mb-6">From first contact to qualified pipeline — automatically.</h2>
            <div className="space-y-5">
              {[
                { step: "01", title: "Lead arrives through any channel", desc: "Website form, email inquiry, WhatsApp message — the system captures it the moment it comes in, regardless of channel or time of day." },
                { step: "02", title: "AI qualifies the intent", desc: "The system analyzes the lead: Are they booking? Asking for pricing? Urgent request? General inquiry? Each lead is categorized and prioritized automatically." },
                { step: "03", title: "High-value leads get flagged instantly", desc: "Hot leads — those with high buying intent, urgency, or specific signals — trigger an immediate notification to your phone so you can respond first." },
                { step: "04", title: "Data is stored and follow-ups are triggered", desc: "Every lead is saved cleanly to your CRM or Google Sheets. Automated follow-up sequences run in the background — so no lead is ever forgotten." },
              ].map((s) => (
                <div key={s.step} className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-clay/10 flex items-center justify-center shrink-0 mt-0.5">
                    <span className="text-xs font-bold font-mono text-clay">{s.step}</span>
                  </div>
                  <div>
                    <p className="font-semibold text-moss mb-1">{s.title}</p>
                    <p className="text-sm text-moss/70 leading-relaxed font-sans">{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Real-world examples */}
          <div className="bg-white rounded-[2rem] p-8 border border-moss/10 shadow-sm">
            <p className="text-xs font-bold uppercase tracking-widest text-clay mb-4 font-mono">Real-World Examples</p>
            <h2 className="text-2xl font-bold text-moss mb-6">See how different businesses use Smart Lead Assistant.</h2>
            <div className="space-y-10">
              {[
                {
                  sector: "Consulting / Agency",
                  scenario: "A potential client submits a contact form asking about pricing for a project.",
                  outcome: [
                    "The lead is captured and tagged as 'high intent — pricing inquiry'",
                    "You receive an instant notification on your phone",
                    "A polite acknowledgment email is sent to the client automatically within 2 minutes",
                    "Lead details — name, company, project type — are saved to your CRM",
                    "If you don't respond within 24 hours, a follow-up nudge is sent to you",
                  ],
                },
                {
                  sector: "Real Estate",
                  scenario: "A prospect fills a form requesting a property visit for next week.",
                  outcome: [
                    "The request is flagged as urgent — visit request within 7 days",
                    "Lead details and preferred dates are saved automatically",
                    "An acknowledgment email is sent to the prospect: 'We'll be in touch shortly'",
                    "The assigned agent receives an alert with full lead context",
                    "A follow-up reminder fires 48 hours later if no agent has acted",
                  ],
                },
                {
                  sector: "Event Venue / Restaurant",
                  scenario: "A company submits a group booking request for a corporate dinner.",
                  outcome: [
                    "System flags it as high-value: group booking, corporate, specific date",
                    "You're notified immediately with all the details",
                    "An auto-reply confirms receipt and provides timeline expectations",
                    "Lead is saved with event date, headcount, and contact info",
                    "If unconfirmed in 48 hours, a follow-up is sent automatically",
                  ],
                },
                {
                  sector: "Service Business (General)",
                  scenario: "Ten leads arrive over the weekend while your team is offline.",
                  outcome: [
                    "All ten are captured and classified: 3 urgent, 5 standard, 2 low-priority",
                    "The 3 urgent ones trigger immediate alerts to your phone",
                    "All ten receive an acknowledgment reply automatically",
                    "Monday morning: your CRM has a clean, prioritized lead list ready to work",
                    "No lead is lost, buried, or forgotten over the weekend",
                  ],
                },
              ].map((ex, i) => (
                <div key={i} className="border-b border-moss/5 last:border-0 pb-8 last:pb-0">
                  <div className="flex items-center gap-3 mb-3">
                    <span
                      className="text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full text-moss border border-moss/10"
                      style={{ backgroundColor: "rgba(46,64,54,0.06)" }}
                    >
                      {ex.sector}
                    </span>
                  </div>
                  <p className="text-sm text-moss/55 italic mb-4 font-sans">Scenario: {ex.scenario}</p>
                  <ul className="space-y-2.5">
                    {ex.outcome.map((o, j) => (
                      <li key={j} className="flex items-start gap-2.5 text-sm text-moss/80 font-sans">
                        <CheckCircle2 className="w-4 h-4 text-clay shrink-0 mt-0.5" />
                        {o}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Who it's for */}
          <div className="bg-white rounded-[2rem] p-8 border border-moss/10 shadow-sm">
            <p className="text-xs font-bold uppercase tracking-widest text-clay mb-4 font-mono">Is This for You?</p>
            <h2 className="text-2xl font-bold text-moss mb-4">Smart Lead Assistant is right for you if…</h2>
            <div className="grid sm:grid-cols-2 gap-3 mt-6">
              {[
                "You receive leads through a website form or email",
                "Leads often go unanswered for hours or days",
                "You forget to follow up with prospects",
                "You lose track of which leads you've contacted",
                "You want to respond faster than your competitors",
                "You want your pipeline organized without manual work",
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-2.5 text-sm text-moss/80 font-sans">
                  <Check className="w-4 h-4 text-clay shrink-0 mt-0.5" />
                  {item}
                </div>
              ))}
            </div>
          </div>

          {/* What you get */}
          <div className="bg-white rounded-[2rem] p-8 border border-moss/10 shadow-sm">
            <p className="text-xs font-bold uppercase tracking-widest text-clay mb-4 font-mono">What's Included</p>
            <h2 className="text-2xl font-bold text-moss mb-6">Everything you need, ready in 3–5 days.</h2>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                "Lead capture widget or form integration",
                "AI-powered qualification and intent classification",
                "High-priority lead alerts to your phone",
                "Google Sheets or CRM integration",
                "Automated acknowledgment and follow-up sequences",
                "Analytics dashboard — leads, sources, conversion",
                "Multi-channel support (form, email, WhatsApp)",
                "14-day paid trial before full commitment",
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-2.5 text-sm text-moss/80 font-sans">
                  <Check className="w-4 h-4 text-clay shrink-0 mt-0.5" />
                  {item}
                </div>
              ))}
            </div>
          </div>

          {/* Pricing */}
          <div className="bg-white rounded-[2rem] p-8 border border-moss/10 shadow-sm">
            <p className="text-xs font-bold uppercase tracking-widest text-clay mb-4 font-mono">Pricing</p>
            <h2 className="text-2xl font-bold text-moss mb-6">Transparent. No surprises.</h2>
            <div className="mb-8 pb-8" style={{ borderBottom: "1px solid rgba(46,64,54,0.08)" }}>
              <p className="text-xs font-bold text-moss/50 uppercase tracking-wider mb-1 font-mono">One-time Setup</p>
              <p className="text-4xl font-bold text-moss mb-2">$249 – $349</p>
              <p className="text-sm text-moss/60 font-sans">Covers full configuration, CRM integration, lead flows, and automated follow-up setup.</p>
            </div>
            <div>
              <p className="text-xs font-bold text-moss/50 uppercase tracking-wider mb-2 font-mono">Monthly Retainer</p>
              <p className="text-3xl font-bold text-moss mb-1">From $99<span className="text-lg font-normal text-moss/60">/mo</span></p>
              <p className="text-sm text-moss/60 font-sans">Includes hosting, AI usage credits, and ongoing maintenance. Designed for normal business lead volumes.</p>
            </div>
          </div>

          {/* CTA */}
          <div
            className="rounded-[2rem] p-10 text-center"
            style={{ backgroundColor: "#1A1A1A", border: "1px solid rgba(204,88,51,0.15)", boxShadow: "0 20px 60px rgba(204,88,51,0.08)" }}
          >
            <h2 className="text-2xl font-bold text-cream mb-3">Ready to stop losing leads?</h2>
            <p className="text-cream/60 mb-8 font-sans max-w-md mx-auto">
              Reach out via WhatsApp or email — we'll map out the right lead capture system for your business and have it live within days.
            </p>

            {/* Riley — Coming Soon */}
            <div className="mb-4 opacity-50">
              <div className="w-full flex items-center justify-center gap-2.5 text-sm font-semibold py-4 rounded-[2rem] border border-cream/10 text-cream/40 cursor-not-allowed select-none">
                <Mic className="w-4 h-4" />
                Voice Demo — Riley
                <span className="ml-1 text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-clay/20 text-clay border border-clay/20">
                  Coming Soon
                </span>
              </div>
            </div>

            {/* WhatsApp — Active */}
            <a
              href="https://wa.me/250793581847"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2.5 text-cream font-semibold py-4 rounded-[2rem] bg-clay hover:bg-[#A94727] transition-colors duration-300 mb-4 shadow-md"
              style={{ transitionTimingFunction: "cubic-bezier(0.25, 0.46, 0.45, 0.94)" }}
            >
              Chat on WhatsApp — +250 793 581 847
              <ArrowRight className="w-4 h-4" />
            </a>

            <p className="text-xs text-cream/40 font-mono">
              Or email us at{" "}
              <a href="mailto:contact@aitonlab.rw" className="text-cream/60 hover:text-cream/80 transition-colors">
                contact@aitonlab.rw
              </a>
            </p>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
};

export default EmailCRMAutomation;
