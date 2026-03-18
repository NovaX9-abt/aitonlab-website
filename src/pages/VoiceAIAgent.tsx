import { Phone, Check, ArrowRight, ArrowLeft, CheckCircle2, Mic } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const VoiceAIAgent = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-cream">
      <Navbar />

      {/* Hero */}
      <section className="bg-charcoal pt-28 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-20" />
        <div
          className="absolute top-1/3 left-0 w-[500px] h-[500px] rounded-full opacity-20 pointer-events-none"
          style={{ background: "radial-gradient(circle, #CC583322, transparent 70%)", filter: "blur(80px)" }}
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
                <Phone className="w-5 h-5 text-cream" />
              </div>
              <span className="text-xs font-bold tracking-widest uppercase text-clay font-mono">Voice AI Agent</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-cream mb-6 leading-[1.05] tracking-tight">
              Never Miss a Call.{" "}
              <span className="font-[Cormorant_Garamond] italic font-normal text-clay text-[1.1em]">Ever Again.</span>
            </h1>
            <p className="text-lg text-cream/70 max-w-2xl leading-relaxed font-sans">
              A custom AI voice assistant that handles inbound customer calls 24/7 in English and French.
              It qualifies leads, schedules appointments, sends follow-up messages — completely autonomously.
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
            <h2 className="text-2xl font-bold text-moss mb-4">You're losing business while you sleep.</h2>
            <p className="text-moss/70 leading-relaxed mb-4 font-sans">
              Every missed call is a missed sale. A potential client calls your clinic at 8 PM — no answer. They move on to a competitor who picked up. In Kigali, where decisions are made fast and trust is built through responsiveness, missing a call often means losing a client permanently.
            </p>
            <p className="text-moss/70 leading-relaxed font-sans">
              For hotels, clinics, salons, and service businesses, the phone is still the primary way clients connect. Riley answers every call instantly, speaks naturally in English or French, and handles real business conversations — so you never lose another lead to a missed call.
            </p>
          </div>

          {/* How it works */}
          <div className="bg-white rounded-[2rem] p-8 border border-moss/10 shadow-sm">
            <p className="text-xs font-bold uppercase tracking-widest text-clay mb-4 font-mono">How It Works</p>
            <h2 className="text-2xl font-bold text-moss mb-6">A real phone number. A real conversation.</h2>
            <div className="space-y-5">
              {[
                { step: "01", title: "Customer calls your local number", desc: "Riley answers instantly — no hold music, no missed calls, 24 hours a day, 7 days a week. A Rwanda number is included." },
                { step: "02", title: "Natural voice conversation begins", desc: "Riley speaks naturally in English or French. It's not a button menu — it's a real back-and-forth conversation that understands context and intent." },
                { step: "03", title: "Qualifies, captures, and books automatically", desc: "Riley asks the right questions, captures lead information, and schedules appointments directly into your calendar — with zero manual effort from you." },
                { step: "04", title: "You wake up to results", desc: "Every call is logged with a summary. Bookings appear in your calendar automatically. High-value leads trigger instant alerts to your phone." },
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
            <h2 className="text-2xl font-bold text-moss mb-6">Exactly how this works for businesses in Kigali.</h2>
            <div className="space-y-10">
              {[
                {
                  sector: "Hotel / Guest House",
                  scenario: "A traveler calls at 11 PM asking about room availability for the weekend.",
                  outcome: [
                    "Riley answers immediately — no missed call, no voicemail",
                    "Asks for dates, number of guests, and preferences",
                    "Checks real-time availability and quotes pricing",
                    "Captures contact info and confirms a tentative reservation",
                    "Guest receives a WhatsApp confirmation automatically — you wake up to a new booking",
                  ],
                },
                {
                  sector: "Dental Clinic",
                  scenario: "A patient calls during lunch hour when the receptionist is away.",
                  outcome: [
                    "Riley answers, asks what the patient needs help with",
                    "Qualifies urgency — new patient, routine check-up, or emergency",
                    "Books an available appointment directly into the clinic calendar",
                    "Sends a reminder SMS 24 hours before the appointment",
                    "No-show rate drops because reminders are always sent — without staff effort",
                  ],
                },
                {
                  sector: "Hair Salon",
                  scenario: "Multiple clients call at the same time on a busy Friday morning.",
                  outcome: [
                    "Riley handles all simultaneous calls — no busy signal, no waiting",
                    "Each caller books their preferred service and stylist",
                    "Overbooking is impossible — Riley checks the calendar in real time",
                    "Staff stays focused on clients in the chair, not the phone",
                    "Cancellations trigger automatic follow-up to fill the empty slot",
                  ],
                },
                {
                  sector: "Real Estate Agency",
                  scenario: "A prospect calls after hours about a property listing.",
                  outcome: [
                    "Riley answers and asks about the property they're interested in",
                    "Qualifies the lead: budget, timeline, size requirements",
                    "Schedules a viewing with the right agent automatically",
                    "Logs all lead details in your CRM before you arrive at the office",
                    "Hot leads — high budget, ready to buy — trigger immediate alerts to your phone",
                  ],
                },
              ].map((ex, i) => (
                <div key={i} className="border-b border-moss/5 last:border-0 pb-8 last:pb-0">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-moss/8 text-moss border border-moss/10"
                      style={{ backgroundColor: "rgba(46,64,54,0.06)" }}>
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
            <h2 className="text-2xl font-bold text-moss mb-4">Voice AI is right for your business if…</h2>
            <div className="grid sm:grid-cols-2 gap-3 mt-6">
              {[
                "You miss calls after hours or on weekends",
                "Your receptionist is often busy with walk-in clients",
                "You want clients to book without calling during work hours",
                "You're losing leads to competitors who respond faster",
                "You run a hotel, clinic, salon, or service business",
                "You want 24/7 availability without hiring additional staff",
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
                "Custom voice agent trained on your business",
                "Rwanda local phone number included",
                "Lead qualification & appointment booking",
                "Call logs & Airtable/CRM integration",
                "Automated follow-up via SMS/WhatsApp",
                "English & French language support",
                "14-day paid trial before full commitment",
                "Monitoring, uptime checks, and reliability support",
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
            <div className="mb-8 pb-8 border-b border-moss/8" style={{ borderColor: "rgba(46,64,54,0.08)" }}>
              <p className="text-xs font-bold text-moss/50 uppercase tracking-wider mb-1 font-mono">One-time Setup</p>
              <p className="text-4xl font-bold text-moss mb-2">$399 – $499</p>
              <p className="text-sm text-moss/60 font-sans">Covers full configuration, voice training, integrations, and local RW phone number setup.</p>
            </div>
            <div>
              <p className="text-xs font-bold text-moss/50 uppercase tracking-wider mb-4 font-mono">Monthly Plans</p>
              <div className="space-y-3">
                {[
                  { name: "Starter", detail: "~150 call minutes / month", price: "$129/mo" },
                  { name: "Growth", detail: "~400 call minutes / month", price: "$249/mo" },
                  { name: "Pro", detail: "~900 call minutes / month", price: "$399/mo" },
                ].map((plan, i) => (
                  <div key={i} className="flex items-center justify-between p-4 rounded-[1rem] border border-moss/8" style={{ backgroundColor: "#FAF9F5", borderColor: "rgba(46,64,54,0.08)" }}>
                    <div>
                      <p className="font-semibold text-moss">{plan.name}</p>
                      <p className="text-xs text-moss/60 font-sans">{plan.detail}</p>
                    </div>
                    <span className="text-lg font-bold text-clay">{plan.price}</span>
                  </div>
                ))}
              </div>
              <p className="text-xs text-moss/50 mt-4 font-sans">Includes telecom infra (local RW number), AI/LLM credits, and system hosting. Usage overages billed based on actual usage.</p>
            </div>
          </div>

          {/* CTA */}
          <div
            className="rounded-[2rem] p-10 text-center"
            style={{ backgroundColor: "#1A1A1A", border: "1px solid rgba(204,88,51,0.15)", boxShadow: "0 20px 60px rgba(204,88,51,0.08)" }}
          >
            <h2 className="text-2xl font-bold text-cream mb-3">Ready to stop missing calls?</h2>
            <p className="text-cream/60 mb-8 font-sans max-w-md mx-auto">
              Reach out via WhatsApp or email — we'll assess your business and tell you exactly what's possible.
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

export default VoiceAIAgent;
