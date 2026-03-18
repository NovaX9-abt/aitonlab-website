import { MessageSquare, Check, ArrowRight, ArrowLeft, CheckCircle2, Mic } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const WhatsAppAutomation = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-cream">
      <Navbar />

      {/* Hero */}
      <section className="bg-charcoal pt-28 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-20" />
        <div
          className="absolute top-1/3 right-0 w-[500px] h-[500px] rounded-full opacity-20 pointer-events-none"
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
                <MessageSquare className="w-5 h-5 text-cream" />
              </div>
              <span className="text-xs font-bold tracking-widest uppercase text-clay font-mono">WhatsApp Automation</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-cream mb-6 leading-[1.05] tracking-tight">
              Every Message.{" "}
              <span className="font-[Cormorant_Garamond] italic font-normal text-clay text-[1.1em]">Answered.</span>
            </h1>
            <p className="text-lg text-cream/70 max-w-2xl leading-relaxed font-sans">
              Automate customer conversations, bookings, and support on WhatsApp Business — in English, French, and Kinyarwanda. The AI responds 24/7, books appointments, and sends smart reminders.
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
            <h2 className="text-2xl font-bold text-moss mb-4">Your WhatsApp is full. Clients are waiting.</h2>
            <p className="text-moss/70 leading-relaxed mb-4 font-sans">
              In Rwanda, WhatsApp is how business is done. It's how clients ask about pricing, request bookings, follow up after a visit, and decide whether to trust you. When messages sit unanswered for hours — or get lost in the thread — clients don't wait. They go elsewhere.
            </p>
            <p className="text-moss/70 leading-relaxed font-sans">
              WhatsApp Automation ensures every message is answered instantly, every booking is captured, and every client gets a follow-up — without your team lifting a finger. Available in English, French, and Kinyarwanda.
            </p>
          </div>

          {/* How it works */}
          <div className="bg-white rounded-[2rem] p-8 border border-moss/10 shadow-sm">
            <p className="text-xs font-bold uppercase tracking-widest text-clay mb-4 font-mono">How It Works</p>
            <h2 className="text-2xl font-bold text-moss mb-6">Intelligent. Instant. Invisible to your client.</h2>
            <div className="space-y-5">
              {[
                { step: "01", title: "Client sends a WhatsApp message", desc: "The moment a message arrives, the system captures it and begins processing — whether you're asleep, in a meeting, or with another customer." },
                { step: "02", title: "AI understands the intent", desc: "The assistant reads the message and identifies what the client wants: a booking, a price quote, information, or something else entirely." },
                { step: "03", title: "Responds automatically and naturally", desc: "A personalized reply goes out within seconds — in the right language, with the right information. Not a canned response. A real answer." },
                { step: "04", title: "Captures, books, and follows up", desc: "Bookings are logged, leads are saved to your database, reminders are scheduled. Everything happens in the background — organized, clean, and tracked." },
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
            <h2 className="text-2xl font-bold text-moss mb-6">What this looks like for real businesses.</h2>
            <div className="space-y-10">
              {[
                {
                  sector: "Restaurant",
                  scenario: "A customer sends 'Do you have tables for Saturday at 7 PM for 4 people?' at 10 PM.",
                  outcome: [
                    "The system responds instantly with available options",
                    "Collects the customer's name and confirms the reservation",
                    "Logs the booking in your system automatically",
                    "Sends a reminder to the customer the morning of their reservation",
                    "If they cancel, the slot is freed and a follow-up message is sent",
                  ],
                },
                {
                  sector: "Clinic / Medical Practice",
                  scenario: "A patient messages asking about appointment availability on a Sunday.",
                  outcome: [
                    "The AI responds immediately — no need for staff to be on call",
                    "Asks a few qualification questions: new patient, type of consultation, urgency",
                    "Books the appointment and adds it to the doctor's calendar",
                    "Sends a confirmation with the address and what to bring",
                    "Reminder sent automatically 24 hours and 2 hours before the appointment",
                  ],
                },
                {
                  sector: "Real Estate",
                  scenario: "A prospect messages about a property listing at 6 AM on a weekday.",
                  outcome: [
                    "The system replies instantly with key property details and photos",
                    "Captures budget, timeline, and interest level",
                    "Books a viewing with the available agent",
                    "Saves all lead data to your CRM before your agent even wakes up",
                    "Sends a follow-up 48 hours later if no action has been taken",
                  ],
                },
                {
                  sector: "Salon / Beauty Business",
                  scenario: "Three clients message simultaneously asking to book appointments.",
                  outcome: [
                    "All three are responded to in seconds — no queue, no delay",
                    "Each client gets offered available slots based on real-time availability",
                    "Appointments are booked without double-booking risk",
                    "Automated reminders reduce no-shows significantly",
                    "Post-appointment follow-up message is sent asking for feedback or rebooking",
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
            <h2 className="text-2xl font-bold text-moss mb-4">WhatsApp Automation is right for you if…</h2>
            <div className="grid sm:grid-cols-2 gap-3 mt-6">
              {[
                "You receive most inquiries via WhatsApp",
                "Clients complain about slow or missed responses",
                "Your team spends hours answering repetitive questions",
                "You're losing bookings to competitors who reply faster",
                "You want multilingual support (EN / FR / Kinyarwanda)",
                "You want to follow up with leads automatically",
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
                "WhatsApp Business API integration",
                "Custom conversation flows for your business",
                "Booking & appointment automation",
                "Automated reminders and follow-ups",
                "Multilingual support (EN / FR / Kinyarwanda)",
                "Google Sheets or CRM integration",
                "Broadcast & outreach campaign setup",
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
              <p className="text-4xl font-bold text-moss mb-2">$199 – $299</p>
              <p className="text-sm text-moss/60 font-sans">Covers full WhatsApp Business API integration, custom conversation flows, and initial configuration.</p>
            </div>
            <div>
              <p className="text-xs font-bold text-moss/50 uppercase tracking-wider mb-2 font-mono">Monthly Retainer</p>
              <p className="text-3xl font-bold text-moss mb-1">From $99<span className="text-lg font-normal text-moss/60">/mo</span></p>
              <p className="text-sm text-moss/60 font-sans">Includes hosting, AI usage credits, and ongoing maintenance.</p>
            </div>
          </div>

          {/* CTA */}
          <div
            className="rounded-[2rem] p-10 text-center"
            style={{ backgroundColor: "#1A1A1A", border: "1px solid rgba(204,88,51,0.15)", boxShadow: "0 20px 60px rgba(204,88,51,0.08)" }}
          >
            <h2 className="text-2xl font-bold text-cream mb-3">Ready to automate your WhatsApp?</h2>
            <p className="text-cream/60 mb-8 font-sans max-w-md mx-auto">
              Reach out via WhatsApp or email — we'll design the right setup for your business and have it live in days.
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

export default WhatsAppAutomation;
